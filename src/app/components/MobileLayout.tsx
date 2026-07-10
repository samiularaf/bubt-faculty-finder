import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

const pageTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1],
};

export default function MobileLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen w-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={pageTransition}
          className="min-h-screen w-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
