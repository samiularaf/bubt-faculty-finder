type FeedbackRow = {
  id: number;
  faculty_code: string;
  comment: string;
  reporter_name: string | null;
  created_at: string;
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });

const toFeedback = (row: FeedbackRow) => ({
  id: row.id,
  facultyCode: row.faculty_code,
  comment: row.comment,
  reporterName: row.reporter_name,
  createdAt: row.created_at,
});

export const onRequestGet = async (context: any) => {
  const url = new URL(context.request.url);
  const facultyCode = url.searchParams.get("facultyCode")?.trim().toUpperCase();

  if (!facultyCode || facultyCode.length > 20) {
    return json({ error: "A valid faculty code is required." }, 400);
  }

  const result = await context.env.FEEDBACK_DB
    .prepare(
      "SELECT id, faculty_code, comment, reporter_name, created_at FROM feedback WHERE faculty_code = ? ORDER BY id DESC LIMIT 100"
    )
    .bind(facultyCode)
    .all();

  return json({ feedback: (result.results as FeedbackRow[]).map(toFeedback) });
};

export const onRequestPost = async (context: any) => {
  let body: { facultyCode?: unknown; comment?: unknown; reporterName?: unknown };

  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const facultyCode = typeof body.facultyCode === "string" ? body.facultyCode.trim().toUpperCase() : "";
  const comment = typeof body.comment === "string" ? body.comment.trim() : "";
  const reporterName = typeof body.reporterName === "string" ? body.reporterName.trim() : "";

  if (!facultyCode || facultyCode.length > 20 || comment.length < 3 || comment.length > 1000 || reporterName.length > 80) {
    return json({ error: "Please provide a faculty code and a comment between 3 and 1000 characters." }, 400);
  }

  const insert = await context.env.FEEDBACK_DB
    .prepare("INSERT INTO feedback (faculty_code, comment, reporter_name) VALUES (?, ?, ?)")
    .bind(facultyCode, comment, reporterName || null)
    .run();

  const row = await context.env.FEEDBACK_DB
    .prepare("SELECT id, faculty_code, comment, reporter_name, created_at FROM feedback WHERE id = ?")
    .bind(insert.meta.last_row_id)
    .first<FeedbackRow>();

  return json({ feedback: toFeedback(row!) }, 201);
};
