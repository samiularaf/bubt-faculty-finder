import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  Search, X, Clock, ChevronRight, User, Sparkles, BookOpen, TrendingUp
} from "lucide-react";
import { searchFaculty, featuredCodes, facultyList, type Faculty } from "../data/faculty";
import bubtLogo from "../../imports/bubt-logo-png_seeklogo-498306.png";

const ROUTINE_CODES = ["TEM", "RRSA", "MAJ", "MDI", "SAM", "SR", "MAHB", "FK", "HA", "MAFI"];

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase();
}

function getAvatarColor(code: string) {
  const colors = [
    ["#DBEAFE", "#1E3A8A"],
    ["#D1FAE5", "#065F46"],
    ["#EDE9FE", "#4C1D95"],
    ["#FEF3C7", "#78350F"],
    ["#FCE7F3", "#831843"],
    ["#E0F2FE", "#0369A1"],
  ];
  const idx = code.charCodeAt(0) % colors.length;
  return colors[idx];
}

function FacultyChip({ faculty, onPress }: { faculty: Faculty; onPress: () => void }) {
  const [bg, text] = getAvatarColor(faculty.code);
  return (
    <motion.button
      onClick={onPress}
      whileHover={{ scale: 1.01, boxShadow: "0 4px 16px rgba(30,58,138,0.1)" }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3 w-full text-left rounded-2xl p-3 transition-shadow"
      style={{
        background: "#FFFFFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: bg }}
      >
        <span style={{ color: text, fontSize: 12, fontWeight: 700 }}>{getInitials(faculty.name)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p style={{ color: "#0F172A", fontSize: 13, fontWeight: 600 }} className="truncate">{faculty.name}</p>
        <p style={{ color: "#64748B", fontSize: 11 }} className="truncate">{faculty.designation.replace("of CSE", "").replace("in CSE", "").trim()}</p>
      </div>
      <div
        className="flex-shrink-0 px-2 py-1 rounded-lg"
        style={{ background: "#EFF6FF" }}
      >
        <span style={{ color: "#1E3A8A", fontSize: 10, fontWeight: 700 }}>{faculty.code}</span>
      </div>
    </motion.button>
  );
}

function SearchResultItem({ faculty, onPress, index }: { faculty: Faculty; onPress: () => void; index: number }) {
  const [bg, text] = getAvatarColor(faculty.code);
  return (
    <motion.button
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.25 }}
      onClick={onPress}
      whileHover={{ background: "#FAFBFF" }}
      whileTap={{ scale: 0.99 }}
      className="flex items-center gap-3 w-full text-left px-4 py-3 border-b last:border-b-0"
      style={{ borderColor: "#F1F5F9" }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: bg }}
      >
        <span style={{ color: text, fontSize: 12, fontWeight: 700 }}>{getInitials(faculty.name)}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p style={{ color: "#0F172A", fontSize: 14, fontWeight: 600 }} className="truncate">{faculty.name}</p>
        <p style={{ color: "#64748B", fontSize: 12 }} className="truncate">{faculty.designation}</p>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className="px-2 py-0.5 rounded-lg" style={{ background: "#EFF6FF" }}>
          <span style={{ color: "#1E3A8A", fontSize: 11, fontWeight: 700 }}>{faculty.code}</span>
        </div>
        <ChevronRight size={14} style={{ color: "#CBD5E1" }} />
      </div>
    </motion.button>
  );
}

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>(["TEM", "RRSA", "MAJ"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "student@bubt.edu.bd";
  const firstName = email.split("@")[0].split(".")[0];
  const greeting = `Hi, ${firstName.charAt(0).toUpperCase() + firstName.slice(1)} 👋`;

  const results = searchFaculty(query);
  const showResults = query.trim().length > 0;

  const handleSelect = (faculty: Faculty) => {
    const newRecents = [faculty.code, ...recentSearches.filter(c => c !== faculty.code)].slice(0, 5);
    setRecentSearches(newRecents);
    navigate(`/faculty/${faculty.code}`, { state: { faculty } });
  };

  const handleRecentClick = (code: string) => {
    setQuery(code);
    inputRef.current?.focus();
  };

  const featuredFaculty = featuredCodes.slice(0, 6).map(code =>
    facultyList.find(f => f.code === code)
  ).filter(Boolean) as Faculty[];

  return (
    <div className="min-h-screen w-full" style={{ background: "#F8FAFC" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(160deg, #0F2460 0%, #1E3A8A 60%, #2563EB 100%)",
          paddingTop: 48,
          paddingBottom: 96,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG orbs */}
        <div className="absolute rounded-full" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)", top: -100, right: -80 }} />
        <div className="absolute rounded-full" style={{ width: 200, height: 200, background: "radial-gradient(circle, rgba(22,163,74,0.3) 0%, transparent 70%)", bottom: 0, left: -20 }} />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 flex items-start justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: "rgba(255,255,255,0.7)", fontSize: 14 }}
            >
              {greeting}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              style={{ color: "#FFFFFF", fontSize: 28, fontWeight: 800, lineHeight: 1.2, marginTop: 4 }}
            >
              BUBT Faculty Finder
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="flex items-center gap-1.5 mt-2"
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#86EFAC" }} />
              <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 13 }}>96 Faculty · CSE Department · Spring 2026</span>
            </motion.div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(255,255,255,0.3)" }}>
              <img src={bubtLogo} alt="BUBT" className="w-full h-full object-contain" style={{ background: "rgba(255,255,255,0.1)", padding: 2 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Search bar floating over header */}
      <div className="relative z-20 max-w-3xl mx-auto px-6" style={{ marginTop: -52 }}>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.18, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="relative rounded-2xl"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 12px 40px rgba(30,58,138,0.2), 0 2px 8px rgba(0,0,0,0.06)",
              border: focused ? "2px solid #2563EB" : "2px solid transparent",
              transition: "border-color 0.2s",
            }}
          >
            <div className="flex items-center px-5 py-4">
              <Search size={20} style={{ color: focused ? "#2563EB" : "#94A3B8", flexShrink: 0 }} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value.toUpperCase())}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder="Search by short code: TEM, RRSA, MAJ, MDI..."
                className="flex-1 bg-transparent outline-none mx-4"
                style={{ color: "#0F172A", fontSize: 16, caretColor: "#2563EB" }}
              />
              <AnimatePresence>
                {query && (
                  <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    onClick={() => setQuery("")}
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#EFF6FF" }}
                  >
                    <X size={14} style={{ color: "#1E3A8A" }} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Search results dropdown */}
            <AnimatePresence>
              {showResults && focused && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="absolute left-0 right-0 top-full mt-2 rounded-2xl overflow-hidden z-50"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: "0 20px 48px rgba(30,58,138,0.15), 0 4px 12px rgba(0,0,0,0.08)",
                    border: "1px solid #E5E7EB",
                    maxHeight: 360,
                    overflowY: "auto",
                  }}
                >
                  {results.length === 0 ? (
                    <div className="flex flex-col items-center py-10 gap-2">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "#FEF2F2" }}>
                        <Search size={20} style={{ color: "#F87171" }} />
                      </div>
                      <p style={{ color: "#0F172A", fontSize: 15, fontWeight: 600 }}>No results found</p>
                      <p style={{ color: "#94A3B8", fontSize: 13 }}>Try a different short code or name</p>
                    </div>
                  ) : (
                    results.slice(0, 8).map((f, i) => (
                      <SearchResultItem key={f.id} faculty={f} onPress={() => handleSelect(f)} index={i} />
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-6 pt-6 pb-16">

        {/* Recent searches */}
        {!showResults && recentSearches.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 mb-3">
              <Clock size={14} style={{ color: "#94A3B8" }} />
              <span style={{ color: "#475569", fontSize: 13, fontWeight: 600 }}>Recent Searches</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {recentSearches.map(code => (
                <motion.button
                  key={code}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => handleRecentClick(code)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                  }}
                >
                  <Clock size={12} style={{ color: "#94A3B8" }} />
                  <span style={{ color: "#1E3A8A", fontSize: 13, fontWeight: 600 }}>{code}</span>
                </motion.button>
              ))}
              <motion.button
                whileTap={{ scale: 0.94 }}
                onClick={() => setRecentSearches([])}
                className="px-3 py-2 rounded-xl"
                style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}
              >
                <span style={{ color: "#EF4444", fontSize: 12, fontWeight: 500 }}>Clear</span>
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Routine Quick Access */}
        {!showResults && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-6"
          >
            <div
              className="rounded-2xl p-5"
              style={{
                background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)",
                border: "1px solid #DBEAFE",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1E3A8A, #2563EB)" }}>
                  <BookOpen size={15} color="#FFFFFF" />
                </div>
                <div>
                  <p style={{ color: "#0F172A", fontSize: 14, fontWeight: 700 }}>Routine Quick Access</p>
                  <p style={{ color: "#64748B", fontSize: 12 }}>Tap any code to find faculty instantly</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {ROUTINE_CODES.map(code => {
                  const f = facultyList.find(x => x.code === code);
                  return (
                    <motion.button
                      key={code}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => { if (f) handleSelect(f); }}
                      className="px-3 py-1.5 rounded-xl flex items-center gap-1"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #BFDBFE",
                        boxShadow: "0 1px 4px rgba(30,58,138,0.08)",
                      }}
                    >
                      <span style={{ color: "#1E3A8A", fontSize: 13, fontWeight: 700 }}>{code}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {/* Featured Faculty grid */}
        {!showResults && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp size={15} style={{ color: "#2563EB" }} />
                <span style={{ color: "#0F172A", fontSize: 15, fontWeight: 700 }}>Featured Faculty</span>
              </div>
              <span style={{ color: "#2563EB", fontSize: 13, fontWeight: 500 }}>96 total</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {featuredFaculty.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <FacultyChip faculty={f} onPress={() => handleSelect(f)} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Search results (unfocused) */}
        {showResults && !focused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={14} style={{ color: "#2563EB" }} />
              <span style={{ color: "#475569", fontSize: 14, fontWeight: 600 }}>
                {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
              </span>
            </div>
            {results.length === 0 ? (
              <div className="flex flex-col items-center py-16 gap-4">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #EFF6FF, #F0FDF4)" }}
                >
                  <User size={32} style={{ color: "#93C5FD" }} />
                </div>
                <p style={{ color: "#0F172A", fontSize: 18, fontWeight: 700 }}>No Faculty Found</p>
                <p style={{ color: "#94A3B8", fontSize: 14, textAlign: "center" }}>
                  No faculty matched &ldquo;{query}&rdquo;. Try a different code or name.
                </p>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setQuery("")}
                  className="px-5 py-2.5 rounded-xl"
                  style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}
                >
                  <span style={{ color: "#1E3A8A", fontSize: 14, fontWeight: 600 }}>Clear Search</span>
                </motion.button>
              </div>
            ) : (
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                {results.map((f, i) => (
                  <SearchResultItem key={f.id} faculty={f} onPress={() => handleSelect(f)} index={i} />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t py-6" style={{ borderColor: "#E5E7EB", background: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <img src={bubtLogo} alt="BUBT" className="w-6 h-6 object-contain" />
            <span style={{ color: "#64748B", fontSize: 12 }}>Bangladesh University of Business &amp; Technology</span>
          </div>
          <span style={{ color: "#CBD5E1", fontSize: 12 }}>Dept. of Computer Science &amp; Engineering</span>
        </div>
      </div>
    </div>
  );
}
