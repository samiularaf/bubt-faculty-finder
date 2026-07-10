import { useNavigate, useLocation, useParams } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft, Phone, Mail, MapPin, Copy,
  CheckCircle2, User, GraduationCap, Hash, Building2, PhoneCall
} from "lucide-react";
import { useState } from "react";
import { getFacultyByCode, type Faculty } from "../data/faculty";
import bubtLogo from "../../imports/bubt-logo-png_seeklogo-498306.png";

function getAvatarColor(code: string) {
  const gradients = [
    ["#1E3A8A", "#2563EB"],
    ["#065F46", "#059669"],
    ["#4C1D95", "#7C3AED"],
    ["#78350F", "#D97706"],
    ["#831843", "#DB2777"],
    ["#0369A1", "#0EA5E9"],
    ["#1E3A8A", "#0D9488"],
  ];
  const idx = (code.charCodeAt(0) + code.length) % gradients.length;
  return gradients[idx];
}

function getInitials(name: string) {
  return name.split(" ").filter(w => w.length > 0).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <motion.button
      onClick={handleCopy}
      whileTap={{ scale: 0.9 }}
      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg"
      style={{
        background: copied ? "#D1FAE5" : "#EFF6FF",
        border: `1px solid ${copied ? "#6EE7B7" : "#BFDBFE"}`,
        transition: "all 0.2s",
      }}
    >
      {copied ? (
        <CheckCircle2 size={12} style={{ color: "#059669" }} />
      ) : (
        <Copy size={12} style={{ color: "#1E3A8A" }} />
      )}
      <span style={{ color: copied ? "#059669" : "#1E3A8A", fontSize: 11, fontWeight: 600 }}>
        {copied ? "Copied!" : label}
      </span>
    </motion.button>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  extra,
  highlight,
}: {
  icon: any;
  label: string;
  value: string;
  extra?: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex items-start gap-3 p-4 rounded-2xl"
      style={{
        background: highlight ? "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)" : "#F8FAFC",
        border: `1px solid ${highlight ? "#BFDBFE" : "#E5E7EB"}`,
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: highlight ? "#DBEAFE" : "#E5E7EB" }}
      >
        <Icon size={16} style={{ color: highlight ? "#1E3A8A" : "#64748B" }} />
      </div>
      <div className="flex-1 min-w-0">
        <p style={{ color: "#94A3B8", fontSize: 11, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>{label}</p>
        <p style={{ color: "#0F172A", fontSize: 14, fontWeight: 600, marginTop: 2 }} className="break-all">{value}</p>
      </div>
      {extra && <div className="flex-shrink-0">{extra}</div>}
    </motion.div>
  );
}

export default function FacultyDetailsScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { code } = useParams<{ code: string }>();
  const faculty: Faculty = location.state?.faculty || getFacultyByCode(code || "");

  if (!faculty) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-5 px-6" style={{ background: "#F8FAFC" }}>
        <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "#FEF2F2" }}>
          <User size={32} style={{ color: "#F87171" }} />
        </div>
        <p style={{ color: "#0F172A", fontSize: 20, fontWeight: 700 }}>Faculty Not Found</p>
        <p style={{ color: "#94A3B8", fontSize: 15, textAlign: "center" }}>
          The faculty member with code &ldquo;{code}&rdquo; was not found.
        </p>
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate(-1)}
          className="px-6 py-3 rounded-2xl"
          style={{ background: "linear-gradient(135deg, #1E3A8A, #2563EB)", boxShadow: "0 4px 16px rgba(30,58,138,0.3)" }}
        >
          <span style={{ color: "#FFFFFF", fontSize: 15, fontWeight: 600 }}>Go Back</span>
        </motion.button>
      </div>
    );
  }

  const [fromColor, toColor] = getAvatarColor(faculty.code);
  const initials = getInitials(faculty.name);

  const rankBadgeColor = faculty.designation.includes("Chairman") ? ["#FEF3C7", "#D97706"] :
    faculty.designation.includes("Professor &") ? ["#EDE9FE", "#7C3AED"] :
    faculty.designation.includes("Associate") ? ["#DBEAFE", "#1E3A8A"] :
    faculty.designation.includes("Assistant") ? ["#D1FAE5", "#065F46"] :
    ["#F0F9FF", "#0369A1"];

  return (
    <div className="min-h-screen w-full" style={{ background: "#F8FAFC" }}>
      {/* Hero Header */}
      <div
        className="relative"
        style={{
          background: `linear-gradient(160deg, ${fromColor} 0%, ${toColor} 100%)`,
          paddingBottom: 80,
        }}
      >
        {/* Decorative circles */}
        <div className="absolute rounded-full" style={{ width: 300, height: 300, background: "rgba(255,255,255,0.07)", top: -60, right: -60 }} />
        <div className="absolute rounded-full" style={{ width: 180, height: 180, background: "rgba(255,255,255,0.05)", bottom: -30, left: -30 }} />

        {/* Top Nav */}
        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-8 pb-5 flex items-center justify-between">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
            style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)", backdropFilter: "blur(10px)" }}
          >
            <ArrowLeft size={16} color="#FFFFFF" />
            <span style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 600 }}>Back</span>
          </motion.button>
          <div className="flex items-center gap-2">
            <img src={bubtLogo} alt="BUBT" className="w-8 h-8 object-contain opacity-80" />
          </div>
          <div className="w-24" /> {/* spacer */}
        </div>

        {/* Avatar + Name */}
        <div className="relative z-10 flex flex-col items-center px-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.2)",
                border: "2px solid rgba(255,255,255,0.4)",
                backdropFilter: "blur(20px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              <span style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 800 }}>{initials}</span>
            </div>
            <div
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}
            >
              <GraduationCap size={16} style={{ color: toColor }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-center"
          >
            <h1 style={{ color: "#FFFFFF", fontSize: 24, fontWeight: 800, lineHeight: 1.2 }}>{faculty.name}</h1>
            <div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
              <div
                className="px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.3)" }}
              >
                <span style={{ color: "#FFFFFF", fontSize: 13, fontWeight: 700 }}>{faculty.code}</span>
              </div>
              <div
                className="px-3 py-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 12, fontWeight: 500 }}>
                  {faculty.dept}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 pb-16" style={{ marginTop: -48 }}>
        {/* Designation card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl p-4 mb-4 flex items-center gap-4"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 8px 32px rgba(30,58,138,0.12), 0 2px 8px rgba(0,0,0,0.06)",
            border: "1px solid #E5E7EB",
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: rankBadgeColor[0] }}
          >
            <GraduationCap size={20} style={{ color: rankBadgeColor[1] }} />
          </div>
          <div className="flex-1">
            <p style={{ color: "#94A3B8", fontSize: 11, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>Designation</p>
            <p style={{ color: "#0F172A", fontSize: 15, fontWeight: 700, marginTop: 2 }}>{faculty.designation}</p>
          </div>
          <div
            className="px-3 py-1.5 rounded-xl flex-shrink-0"
            style={{ background: rankBadgeColor[0], border: `1px solid ${rankBadgeColor[1]}33` }}
          >
            <span style={{ color: rankBadgeColor[1], fontSize: 11, fontWeight: 700 }}>
              {faculty.designation.includes("Professor &") ? "PROF." :
                faculty.designation.includes("Associate") ? "ASSOC." :
                faculty.designation.includes("Assistant") ? "ASST." :
                "LECT."}
            </span>
          </div>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="rounded-2xl overflow-hidden mb-4"
          style={{
            background: "#FFFFFF",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            border: "1px solid #E5E7EB",
          }}
        >
          <div className="p-5 pb-3">
            <p style={{ color: "#475569", fontSize: 13, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase" }}>Contact Information</p>
          </div>
          <div className="p-5 pt-2 flex flex-col gap-3">
            <InfoRow icon={Hash} label="Faculty Code" value={faculty.code} highlight extra={<CopyButton text={faculty.code} label="Copy" />} />
            <InfoRow icon={Mail} label="Email Address" value={faculty.email} extra={<CopyButton text={faculty.email} label="Copy" />} />
            <InfoRow icon={Phone} label="Phone Number" value={faculty.phone} extra={<CopyButton text={faculty.phone} label="Copy" />} />
            <InfoRow
              icon={Building2}
              label="Room Number"
              value={`Building ${faculty.room.split("-")[0]}, Room ${faculty.room}`}
              extra={<CopyButton text={`Building ${faculty.room.split("-")[0]}, Room ${faculty.room}`} label="Copy" />}
            />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3 mb-5"
        >
          <motion.a
            href={`tel:${faculty.phone}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, ${fromColor} 0%, ${toColor} 100%)`,
              boxShadow: `0 8px 24px ${fromColor}55`,
              textDecoration: "none",
            }}
          >
            <PhoneCall size={18} color="#FFFFFF" />
            <span style={{ color: "#FFFFFF", fontSize: 15, fontWeight: 700 }}>Call Now</span>
          </motion.a>
          <motion.a
            href={`mailto:${faculty.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl"
            style={{
              background: "#FFFFFF",
              border: "2px solid #E5E7EB",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              textDecoration: "none",
            }}
          >
            <Mail size={18} style={{ color: "#1E3A8A" }} />
            <span style={{ color: "#1E3A8A", fontSize: 15, fontWeight: 700 }}>Send Email</span>
          </motion.a>
        </motion.div>

        {/* BUBT Footer badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-2 py-4 rounded-2xl"
          style={{ background: "linear-gradient(135deg, #EFF6FF, #F0FDF4)", border: "1px solid #BFDBFE" }}
        >
          <img src={bubtLogo} alt="BUBT" className="w-5 h-5 object-contain" />
          <span style={{ color: "#1E3A8A", fontSize: 12, fontWeight: 600 }}>Bangladesh University of Business &amp; Technology</span>
        </motion.div>
      </div>
    </div>
  );
}
