"use client";

import { motion } from "framer-motion";

export function SecurityCameraVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-lg">
      <div className="absolute inset-0 rounded-full bg-blue-50 blur-3xl" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-4 rounded-full border border-dashed border-navy-200"
      />

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-navy-100"
          animate={{ scale: [1, 1.4 + i * 0.15], opacity: [0.4, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 1,
            ease: "easeOut",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="absolute -top-8 left-1/2 h-8 w-3 -translate-x-1/2 rounded-t-lg bg-gradient-to-b from-slate-400 to-slate-600" />
          <div className="absolute -top-3 left-1/2 h-3 w-10 -translate-x-1/2 rounded-full bg-slate-500" />

          <div className="relative">
            <div
              className="h-28 w-44 rounded-2xl bg-gradient-to-br from-slate-700 via-slate-800 to-navy-900 shadow-2xl"
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(10, 22, 40, 0.25), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-20 w-20 rounded-full bg-gradient-to-br from-slate-900 to-black p-1 shadow-inner">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-400 p-2">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-slate-900 to-blue-950">
                      <motion.div
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-6 w-6 rounded-full bg-cyan-400/60 blur-sm"
                      />
                      <div className="absolute h-3 w-3 rounded-full bg-white/80" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 left-4 flex gap-1.5">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="h-1.5 w-1.5 rounded-full bg-red-500"
                  />
                ))}
              </div>

              <div className="absolute top-3 right-3 h-2 w-8 rounded-full bg-blue-500/60" />
            </div>

            <div className="absolute -top-2 left-1/2 h-4 w-36 -translate-x-1/2 rounded-t-xl bg-gradient-to-b from-slate-600 to-slate-700" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute top-1/4 -left-4 rounded-xl border border-navy-100 bg-white px-4 py-3 shadow-lg"
      >
        <p className="text-xs text-slate-400">Kayıt</p>
        <p className="text-lg font-bold text-navy-900">7/24</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute -right-4 bottom-1/4 rounded-xl border border-navy-100 bg-white px-4 py-3 shadow-lg"
      >
        <p className="text-xs text-slate-400">Çözünürlük</p>
        <p className="text-lg font-bold text-navy-900">4K UHD</p>
      </motion.div>
    </div>
  );
}
