import { useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import bubtLogo from "../../imports/bubt-logo-png_seeklogo-498306.png";

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(145deg, #0F2460 0%, #1E3A8A 30%, #1D4ED8 60%, #0D9488 100%)",
      }}
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)",
          top: -100, left: -120,
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(22,163,74,0.35) 0%, transparent 70%)",
          bottom: 40, right: -80,
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(14,165,233,0.3) 0%, transparent 70%)",
          top: "40%", right: -40,
        }}
        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.3, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{ background: "rgba(255,255,255,0.15)", transform: "scale(1.4)" }}
          />
          <div
            className="relative rounded-full p-4 flex items-center justify-center"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(20px)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              boxShadow: "0 12px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <img src={bubtLogo} alt="BUBT Logo" className="w-32 h-32 object-contain" />
          </div>
        </motion.div>

        {/* App Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 justify-center mb-3">
            <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.4)" }} />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase" }}>
              Bangladesh University of Business &amp; Technology
            </span>
            <div className="h-px w-12" style={{ background: "rgba(255,255,255,0.4)" }} />
          </div>
          <h1 style={{ color: "#FFFFFF", fontSize: 40, fontWeight: 800, letterSpacing: -1, lineHeight: 1.1 }}>
            BUBT Faculty Finder
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 16, marginTop: 10, letterSpacing: 0.3 }}>
            Find Faculty Information Instantly
          </p>
        </motion.div>

        {/* Department badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{
            background: "rgba(22,163,74,0.2)",
            border: "1px solid rgba(22,163,74,0.4)",
            borderRadius: 24,
            padding: "8px 20px",
          }}
        >
          <span style={{ color: "#86EFAC", fontSize: 13, fontWeight: 500, letterSpacing: 1 }}>
            CSE Department · Spring 2026
          </span>
        </motion.div>
      </div>

      {/* Loading indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-16 flex flex-col items-center gap-3"
      >
        <div className="flex gap-2 items-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="rounded-full"
              style={{
                width: i === 1 || i === 2 ? 10 : 7,
                height: i === 1 || i === 2 ? 10 : 7,
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
              animate={{
                backgroundColor: [
                  "rgba(255,255,255,0.9)",
                  "rgba(255,255,255,0.3)",
                  "rgba(255,255,255,0.9)",
                ],
                scale: [1, 0.7, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, letterSpacing: 2, textTransform: "uppercase" }}>
          Loading
        </span>
      </motion.div>

      <div className="absolute bottom-6 w-full text-center">
        <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 11 }}>
          Dept. of Computer Science &amp; Engineering
        </span>
      </div>
    </div>
  );
}
