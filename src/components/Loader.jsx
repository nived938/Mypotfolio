import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 8) + 2;

      if (value >= 100) {
        value = 100;
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }

      setProgress(value);
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)",
          }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#050816] flex items-center justify-center"
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-3xl animate-pulse" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050816_75%)]" />
          </div>

          {/* Loader Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative z-10 w-[90%] max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >
            <motion.h1
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
              className="text-center text-6xl font-black tracking-[10px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
              NIVED
            </motion.h1>

            <p className="mt-4 text-center text-gray-300 tracking-[4px] uppercase">
              Building Digital Experiences
            </p>

            <div className="mt-10">
              <div className="mb-3 flex justify-between text-sm text-gray-400">
                <span>Loading Portfolio</span>
                <span>{progress}%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                  animate={{
                    width: `${progress}%`,
                  }}
                  transition={{
                    ease: "easeOut",
                  }}
                />
              </div>
            </div>

            <motion.p
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="mt-8 text-center text-gray-400"
            >
              Initializing components...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}