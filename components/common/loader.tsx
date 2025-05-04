"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Loader() {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    // Simular una carga progresiva
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + Math.random() * 10
          if (nextProgress >= 100) {
            clearInterval(interval)
            setIsComplete(true)
            return 100
          }
          return nextProgress
        })
      }, 150)

      return () => clearInterval(interval)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isComplete ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 pointer-events-none"
        >
          <div className="w-full max-w-md px-8">
            <div className="relative w-full bg-zinc-800/30 h-1 rounded-full overflow-hidden border border-blue-900/20">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                className="absolute top-0 left-0 h-full bg-blue-600"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="text-sm text-blue-400 font-medium">
                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  Cargando componentes
                </motion.span>
              </div>
              <div className="text-sm text-zinc-400">
                {Math.round(progress)}%
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
} 