import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Mail, ArrowRight, AlertCircle, CheckCircle2, GraduationCap, BookOpen, Users } from "lucide-react";
import bubtLogo from "../../imports/bubt-logo-png_seeklogo-498306.png";

const VALID_DOMAINS = ["@bubt.edu.bd", "@cse.bubt.edu.bd"];

function validateEmail(email: string): { valid: boolean; message: string } {
  if (!email) return { valid: false, message: "" };
  const isValidDomain = VALID_DOMAINS.some(d => email.toLowerCase().endsWith(d));
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return { valid: false, message: "Enter a valid email address" };
  if (!isValidDomain) return { valid: false, message: "Only @bubt.edu.bd or @cse.bubt.edu.bd emails allowed" };
  return { valid: true, message: "Valid BUBT email address" };
}

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  const validation = validateEmail(email);
  const showError = touched && !!email && !validation.valid;
  const showSuccess = !!email && validation.valid;

  const handleContinue = () => {
    if (validation.valid) {
      navigate("/home", { state: { email } });
    } else {
      setTouched(true);
    }
  };

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{ background: "#F0F4FF" }}
    >
      {/* Hero gradient top */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "52%",
          background: "linear-gradient(160deg, #0F2460 0%, #1E3A8A 50%, #2563EB 100%)",
          borderBottomLeftRadius: 48,
          borderBottomRightRadius: 48,
        }}
      />

      {/* Decorative orbs */}
      <div className="absolute rounded-full" style={{ width: 320, height: 320, background: "radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 70%)", top: -60, right: -60 }} />
      <div className="absolute rounded-full" style={{ width: 180, height: 180, background: "radial-gradient(circle, rgba(22,163,74,0.35) 0%, transparent 70%)", top: 160, left: -30 }} />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          height: "52%",
        }}
      />

      {/* Page content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen py-12 px-4">
        {/* Top: Logo + Title */}
        <div className="flex flex-col items-center gap-5 mb-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div
              className="rounded-2xl p-3 flex items-center justify-center"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.3)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              <img src={bubtLogo} alt="BUBT" className="w-20 h-20 object-contain" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <h1 style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 800, lineHeight: 1.2 }}>
              BUBT Faculty Finder
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginTop: 6 }}>
              Sign in with your BUBT student email to continue
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex gap-3 flex-wrap justify-center"
          >
            {[
              { icon: Users, label: "96 Faculty", color: "#93C5FD" },
              { icon: BookOpen, label: "CSE Dept.", color: "#86EFAC" },
              { icon: GraduationCap, label: "Spring 2026", color: "#FDE68A" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Icon size={13} style={{ color }} />
                <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
          style={{ maxWidth: 480 }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(40px)",
              borderRadius: 32,
              padding: "36px 32px",
              boxShadow: "0 24px 64px rgba(30,58,138,0.18), 0 4px 16px rgba(0,0,0,0.08)",
              border: "1px solid rgba(255,255,255,0.9)",
            }}
          >
            <div className="mb-6">
              <h2 style={{ color: "#0F172A", fontSize: 22, fontWeight: 800 }}>
                Enter Your Email
              </h2>
              <p style={{ color: "#64748B", fontSize: 14, marginTop: 6, lineHeight: 1.6 }}>
                Use your BUBT student or faculty email to access the Faculty Finder
              </p>
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label style={{ color: "#475569", fontSize: 12, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>
                University Email
              </label>
              <div
                className="relative mt-2 rounded-2xl transition-all duration-200"
                style={{
                  border: `2px solid ${showError ? "#EF4444" : showSuccess ? "#16A34A" : focused ? "#2563EB" : "#E5E7EB"}`,
                  background: focused ? "#FAFBFF" : "#F8FAFC",
                  boxShadow: focused ? `0 0 0 4px ${showError ? "rgba(239,68,68,0.1)" : "rgba(37,99,235,0.1)"}` : "none",
                }}
              >
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Mail size={18} style={{ color: focused ? "#2563EB" : "#94A3B8" }} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={e => { setEmail(e.target.value); setTouched(false); }}
                  onFocus={() => setFocused(true)}
                  onBlur={() => { setFocused(false); setTouched(true); }}
                  onKeyDown={e => e.key === "Enter" && handleContinue()}
                  placeholder="yourname@bubt.edu.bd"
                  className="w-full bg-transparent outline-none"
                  style={{ padding: "16px 48px", color: "#0F172A", fontSize: 15 }}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <AnimatePresence mode="wait">
                    {showSuccess && (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <CheckCircle2 size={18} style={{ color: "#16A34A" }} />
                      </motion.div>
                    )}
                    {showError && (
                      <motion.div key="err" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <AlertCircle size={18} style={{ color: "#EF4444" }} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <AnimatePresence>
                {(showError || showSuccess) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 flex items-center gap-1.5"
                  >
                    <span style={{ fontSize: 12, color: showError ? "#EF4444" : "#16A34A", fontWeight: 500 }}>
                      {validation.message}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Domains hint */}
            <div
              className="mb-6 rounded-xl p-3 flex gap-2.5 items-start"
              style={{
                background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)",
                border: "1px solid #DBEAFE",
              }}
            >
              <div className="rounded-lg p-1 mt-0.5 flex-shrink-0" style={{ background: "#DBEAFE" }}>
                <GraduationCap size={13} style={{ color: "#1E3A8A" }} />
              </div>
              <div>
                <p style={{ color: "#1E3A8A", fontSize: 12, fontWeight: 600 }}>Accepted Email Domains</p>
                <p style={{ color: "#3B82F6", fontSize: 12, marginTop: 2 }}>
                  @bubt.edu.bd · @cse.bubt.edu.bd
                </p>
              </div>
            </div>

            {/* Continue Button */}
            <motion.button
              onClick={handleContinue}
              whileHover={validation.valid ? { scale: 1.01 } : {}}
              whileTap={{ scale: 0.97 }}
              className="w-full rounded-2xl flex items-center justify-center gap-2"
              style={{
                padding: "18px",
                background: validation.valid
                  ? "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)"
                  : "linear-gradient(135deg, #94A3B8 0%, #CBD5E1 100%)",
                boxShadow: validation.valid ? "0 8px 24px rgba(30,58,138,0.35)" : "none",
                cursor: validation.valid ? "pointer" : "not-allowed",
                transition: "all 0.3s ease",
              }}
            >
              <span style={{ color: "#FFFFFF", fontSize: 16, fontWeight: 700 }}>
                Continue
              </span>
              <motion.div
                animate={{ x: validation.valid ? [0, 4, 0] : 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={18} color="#FFFFFF" />
              </motion.div>
            </motion.button>

            <p className="text-center mt-5" style={{ color: "#94A3B8", fontSize: 12 }}>
              For BUBT students · Department of Computer Science &amp; Engineering
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
