CREATE TABLE IF NOT EXISTS feedback (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  faculty_code TEXT NOT NULL,
  comment TEXT NOT NULL CHECK(length(comment) BETWEEN 3 AND 1000),
  reporter_name TEXT CHECK(length(reporter_name) <= 80),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_feedback_faculty_code ON feedback (faculty_code, id DESC);
