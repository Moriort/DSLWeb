"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ReactorEffect() {
  // Estados para controlar diferentes elementos del reactor
  const [rotation, setRotation] = useState(0)
  const [pulseState, setPulseState] = useState(0)
  const [scanLine, setScanLine] = useState(0)
  
  // Efecto para animar la rotación y otros elementos
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360)
    }, 50)
    
    const pulseInterval = setInterval(() => {
      setPulseState(prev => (prev + 1) % 100)
    }, 30)
    
    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev + 1) % 200)
    }, 20)
    
    return () => {
      clearInterval(rotationInterval)
      clearInterval(pulseInterval)
      clearInterval(scanInterval)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none" style={{ transform: 'translateX(20px)' }}>
      {/* Base de resplandor dinámico - ajustada */}
      <motion.div
        className="absolute w-[360px] h-[360px] rounded-full"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, ${0.03 + pulseState/2000}) 0%, rgba(59, 130, 246, ${0.02 + pulseState/2500}) 40%, transparent 70%)`,
          boxShadow: `0 0 ${10 + pulseState/15}px ${5 + pulseState/25}px rgba(59, 130, 246, ${0.05 + pulseState/1500})`,
        }}
      />
      
      {/* Sistema de escaneo circular - más tenue */}
      <motion.div 
        className="absolute w-[340px] h-[340px]"
        style={{ transform: `rotate(${scanLine}deg)` }}
      >
        <svg width="340" height="340" viewBox="0 0 340 340">
          <defs>
            <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="45%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="55%" stopColor="rgba(59, 130, 246, 0)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
          </defs>
          <line 
            x1="0" 
            y1="170" 
            x2="340" 
            y2="170" 
            stroke="url(#scanGradient)" 
            strokeWidth="1.5" 
          />
        </svg>
      </motion.div>
      
      {/* Anillo exterior tecnológico detallado */}
      <motion.div 
        className="absolute w-[340px] h-[340px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg width="340" height="340" viewBox="0 0 340 340">
          <defs>
            <filter id="techGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Círculo base con marcadores */}
          <circle cx="170" cy="170" r="165" fill="none" stroke="rgba(59, 130, 246, 0.12)" strokeWidth="1" />
          
          {/* Arcos tecnológicos */}
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i}>
              <path 
                d={`M ${170 + 165 * Math.cos(Math.PI * 2 * i / 12)},${170 + 165 * Math.sin(Math.PI * 2 * i / 12)} 
                   A 165,165 0 0,1 ${170 + 165 * Math.cos(Math.PI * 2 * (i + 0.8) / 12)},${170 + 165 * Math.sin(Math.PI * 2 * (i + 0.8) / 12)}`}
                stroke={`rgba(59, 130, 246, ${0.2 + (i % 3) * 0.15})`}
                strokeWidth={1 + (i % 3) * 0.5}
                fill="none"
                filter="url(#techGlow)"
              />
              
              {/* Detalles técnicos en cada segmento */}
              <motion.path 
                d={`M ${170 + 165 * Math.cos(Math.PI * 2 * (i + 0.4) / 12)},${170 + 165 * Math.sin(Math.PI * 2 * (i + 0.4) / 12)} 
                   L ${170 + 150 * Math.cos(Math.PI * 2 * (i + 0.4) / 12)},${170 + 150 * Math.sin(Math.PI * 2 * (i + 0.4) / 12)}`}
                stroke={`rgba(59, 130, 246, ${0.3 + (pulseState % 30) / 100})`}
                strokeWidth="1"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2 + i/2, repeat: Infinity }}
              />
            </g>
          ))}
          
          {/* Marcadores luminosos */}
          {Array.from({ length: 36 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={170 + 165 * Math.cos(Math.PI * 2 * i / 36)}
              cy={170 + 165 * Math.sin(Math.PI * 2 * i / 36)}
              r={1 + (i % 3) * 0.5}
              fill={`rgba(59, 130, 246, ${0.3 + (i % 4) / 10})`}
              filter="url(#techGlow)"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                r: [(1 + (i % 3) * 0.5), (1.5 + (i % 3) * 0.5), (1 + (i % 3) * 0.5)]
              }}
              transition={{ 
                duration: 3 + (i % 5),
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
          ))}
        </svg>
      </motion.div>
      
      {/* Anillo de datos secundario */}
      <motion.div 
        className="absolute w-[280px] h-[280px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg width="280" height="280" viewBox="0 0 280 280">
          <circle cx="140" cy="140" r="135" stroke="rgba(59, 130, 246, 0.18)" strokeWidth="0.5" fill="none" strokeDasharray="1 5" />
          
          {/* Datos binarios y elementos técnicos */}
          {Array.from({ length: 24 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 15} 140 140)`}>
              <text 
                x="140" 
                y="15" 
                fill={`rgba(59, 130, 246, ${0.25 + (i % 2) * 0.15})`}
                style={{ 
                  fontSize: '5px', 
                  textAnchor: 'middle',
                  fontFamily: 'monospace' 
                }}
              >
                {i % 2 === 0 ? '10' : '01'}
              </text>
              
              <motion.rect 
                x="138" 
                y="25" 
                width="4" 
                height={(i % 4) + 2}
                fill={`rgba(59, 130, 246, ${0.3 + (i % 3) * 0.1})`}
                animate={{ 
                  height: [(i % 4) + 2, (i % 4) + 5, (i % 4) + 2],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 2 + (i % 3),
                  repeat: Infinity
                }}
              />
            </g>
          ))}
        </svg>
      </motion.div>
      
      {/* Anillo de segmentos interactivos */}
      <motion.div 
        className="absolute w-[230px] h-[230px]"
        animate={{ rotate: rotation / 2 }}
      >
        <svg width="230" height="230" viewBox="0 0 230 230">
          <defs>
            <linearGradient id="segmentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
            </linearGradient>
          </defs>
          
          {/* Círculo base */}
          <circle cx="115" cy="115" r="110" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" fill="none" />
          
          {/* Segmentos interactivos */}
          {Array.from({ length: 10 }).map((_, i) => {
            const isActive = (rotation + i * 30) % 120 < 60
            return (
              <path
                key={i}
                d={`M ${115 + 110 * Math.cos(Math.PI * 2 * i / 10)},${115 + 110 * Math.sin(Math.PI * 2 * i / 10)} 
                   A 110,110 0 0,1 ${115 + 110 * Math.cos(Math.PI * 2 * (i + 0.9) / 10)},${115 + 110 * Math.sin(Math.PI * 2 * (i + 0.9) / 10)}`}
                stroke={isActive ? "url(#segmentGradient)" : "rgba(59, 130, 246, 0.2)"}
                strokeWidth={isActive ? "1.5" : "0.8"}
                fill="none"
                opacity={isActive ? 0.7 : 0.3}
              />
            )
          })}
        </svg>
      </motion.div>
      
      {/* Capa de datos con rotación rápida */}
      <motion.div 
        className="absolute w-[180px] h-[180px]"
        animate={{ rotate: 720 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <svg width="180" height="180" viewBox="0 0 180 180">
          <circle cx="90" cy="90" r="85" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" fill="none" />
          
          {/* Líneas de datos */}
          {Array.from({ length: 36 }).map((_, i) => {
            const length = 5 + (i % 5) * 2
            return (
              <motion.line
                key={i}
                x1={90 + 85 * Math.cos(Math.PI * 2 * i / 36)}
                y1={90 + 85 * Math.sin(Math.PI * 2 * i / 36)}
                x2={90 + (85 - length) * Math.cos(Math.PI * 2 * i / 36)}
                y2={90 + (85 - length) * Math.sin(Math.PI * 2 * i / 36)}
                stroke={`rgba(59, 130, 246, ${0.2 + (i % 5) / 10})`}
                strokeWidth="1"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  strokeWidth: ["1px", "1.2px", "1px"]
                }}
                transition={{ 
                  duration: 2 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.1
                }}
              />
            )
          })}
        </svg>
      </motion.div>
      
      {/* Anillo interior similar a la imagen de referencia */}
      <motion.div 
        className="absolute w-[140px] h-[140px]"
        animate={{ rotate: -180 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="65" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="0.5" fill="none" />
          
          {/* Elementos tipo HUD como en la imagen de referencia */}
          {Array.from({ length: 8 }).map((_, i) => {
            const isPulsing = (pulseState + i * 12) % 100 < 50
            return (
              <g key={i}>
                <motion.rect
                  x={70 + 55 * Math.cos(Math.PI * 2 * i / 8) - 3}
                  y={70 + 55 * Math.sin(Math.PI * 2 * i / 8) - 2}
                  width="6"
                  height="4"
                  fill={`rgba(59, 130, 246, ${isPulsing ? 0.5 : 0.2})`}
                  animate={{ 
                    opacity: isPulsing ? [0.2, 0.5, 0.2] : 0.2
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity
                  }}
                />
                
                <motion.line
                  x1={70 + 65 * Math.cos(Math.PI * 2 * i / 8)}
                  y1={70 + 65 * Math.sin(Math.PI * 2 * i / 8)}
                  x2={70 + 60 * Math.cos(Math.PI * 2 * i / 8)}
                  y2={70 + 60 * Math.sin(Math.PI * 2 * i / 8)}
                  stroke={`rgba(59, 130, 246, ${isPulsing ? 0.4 : 0.25})`}
                  strokeWidth="1"
                  animate={{ 
                    opacity: isPulsing ? [0.25, 0.4, 0.25] : 0.25
                  }}
                />
              </g>
            )
          })}
          
          {/* Pequeños segmentos equidistantes */}
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1={70 + 65 * Math.cos(Math.PI * 2 * i / 24)}
              y1={70 + 65 * Math.sin(Math.PI * 2 * i / 24)}
              x2={70 + 63 * Math.cos(Math.PI * 2 * i / 24)}
              y2={70 + 63 * Math.sin(Math.PI * 2 * i / 24)}
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </motion.div>
      
      {/* Núcleo central con actividad constante - más realista */}
      <motion.div 
        className="absolute w-[90px] h-[90px] rounded-full overflow-hidden"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, ${0.15 + (((pulseState < 50 ? pulseState : 100 - pulseState) / 250))}) 0%, rgba(59, 130, 246, ${0.08 + (((pulseState < 50 ? pulseState : 100 - pulseState) / 300))}) 60%, transparent 100%)`,
          boxShadow: `0 0 ${12 + ((pulseState < 50 ? pulseState : 100 - pulseState) / 10)}px ${4 + ((pulseState < 50 ? pulseState : 100 - pulseState) / 20)}px rgba(59, 130, 246, ${0.18 + ((pulseState < 50 ? pulseState : 100 - pulseState) / 500)})`,
        }}
      />
      
      {/* Efecto de luz interior más realista */}
      <motion.div 
        className="absolute w-[85px] h-[85px] rounded-full"
        style={{
          background: `radial-gradient(circle at ${48 + Math.sin(pulseState / 15) * 4}% ${52 + Math.cos(pulseState / 10) * 4}%, rgba(147, 197, 253, ${0.08 + ((pulseState < 50 ? pulseState : 100 - pulseState) / 500)}), transparent 70%)`,
          opacity: 0.7,
        }}
      />
      
      {/* Variación de luz adicional para más realismo */}
      <motion.div 
        className="absolute w-[78px] h-[78px] rounded-full"
        style={{
          background: `radial-gradient(circle at ${52 + Math.cos(pulseState / 20) * 5}% ${48 + Math.sin(pulseState / 25) * 5}%, rgba(191, 219, 254, ${0.05 + ((pulseState < 50 ? pulseState : 100 - pulseState) / 600)}), transparent 60%)`,
          opacity: 0.6,
        }}
      />
      
      {/* Elemento central circular rotativo - reemplazando triángulos */}
      <motion.div 
        className="absolute w-[70px] h-[70px]"
        animate={{ rotate: -rotation * 2 }}
      >
        <svg width="70" height="70" viewBox="0 0 70 70">
          <defs>
            <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Anillos concéntricos como en la imagen de referencia */}
          <circle 
            cx="35" 
            cy="35" 
            r="30" 
            fill="none" 
            stroke={`rgba(59, 130, 246, ${0.25 + (((pulseState < 50 ? pulseState : 100 - pulseState) % 50) / 250)})`} 
            strokeWidth="0.6"
            strokeDasharray="2 4"
            filter="url(#coreGlow)"
          />
          
          <circle 
            cx="35" 
            cy="35" 
            r="24" 
            fill="none" 
            stroke={`rgba(59, 130, 246, ${0.3 + (((pulseState < 50 ? pulseState : 100 - pulseState) % 50) / 250)})`} 
            strokeWidth="0.5"
            filter="url(#coreGlow)"
          />
          
          <circle 
            cx="35" 
            cy="35" 
            r="18" 
            fill="none" 
            stroke={`rgba(59, 130, 246, ${0.35 + (((pulseState < 50 ? pulseState : 100 - pulseState) % 50) / 250)})`} 
            strokeWidth="0.5"
            filter="url(#coreGlow)"
          />
          
          {/* Círculo central con luminosidad variable */}
          <circle
            cx="35"
            cy="35"
            r="12"
            fill={`rgba(59, 130, 246, ${0.15 + (((pulseState < 50 ? pulseState : 100 - pulseState) % 50) / 200)})`}
            filter="url(#coreGlow)"
          />
        </svg>
      </motion.div>
      
      {/* Puntos de luz que se mueven suavemente por el núcleo */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div 
          key={`core-light-${i}`}
          className="absolute bg-blue-100 rounded-full blur-[1px]"
          style={{ 
            width: 2 + (i % 2),
            height: 2 + (i % 2),
            opacity: 0.3 + (i * 0.1),
            transform: `translate(
              ${Math.sin((pulseState / (10 + i * 5)) + i * 2) * 15}px, 
              ${Math.cos((pulseState / (15 + i * 3)) + i * 3) * 15}px
            )`
          }}
        />
      ))}
      
      {/* Elementos HUD adicionales alrededor - como en la imagen */}
      <motion.div 
        className="absolute w-[240px] h-[240px]"
        animate={{ rotate: rotation / 5 }}
      >
        <svg width="240" height="240" viewBox="0 0 240 240">
          {/* Pequeños cuadrados/rectángulos similares a la imagen */}
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 45} 120 120)`}>
              <rect 
                x="118" 
                y="20" 
                width="4" 
                height="8" 
                fill="rgba(59, 130, 246, 0.2)"
              />
              <rect 
                x="116" 
                y="202" 
                width="8" 
                height="3" 
                fill="rgba(59, 130, 246, 0.15)"
              />
            </g>
          ))}
        </svg>
      </motion.div>
      
      {/* Rayos de energía más sutiles */}
      {Array.from({ length: 16 }).map((_, i) => {
        const isActive = (rotation + i * 22.5) % 90 < 45;
        return (
          <motion.div 
            key={i}
            className="absolute bg-blue-400"
            style={{ 
              width: '1px',
              height: isActive ? '40px' : '30px',
              transformOrigin: 'bottom center',
              transform: `rotate(${i * 22.5}deg) translateY(-70px)`,
              opacity: isActive ? 0.3 : 0.15,
              filter: 'blur(1px)'
            }}
            animate={{ 
              height: isActive ? [30, 40, 30] : 30,
              opacity: isActive ? [0.15, 0.3, 0.15] : 0.15
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity
            }}
          />
        )
      })}
      
      {/* Partículas de energía más sutiles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const radius = 40 + (i % 10) * 6;
        const speed = 3 + (i % 5);
        return (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{ 
              width: `${1 + (i % 3) * 0.5}px`,
              height: `${1 + (i % 3) * 0.5}px`
            }}
            animate={{ 
              x: [
                radius * Math.cos(Math.PI * 2 * (i / 20)),
                radius * Math.cos(Math.PI * 2 * (i / 20 + 0.25)),
                radius * Math.cos(Math.PI * 2 * (i / 20 + 0.5)),
                radius * Math.cos(Math.PI * 2 * (i / 20 + 0.75)),
                radius * Math.cos(Math.PI * 2 * (i / 20 + 1))
              ],
              y: [
                radius * Math.sin(Math.PI * 2 * (i / 20)),
                radius * Math.sin(Math.PI * 2 * (i / 20 + 0.25)),
                radius * Math.sin(Math.PI * 2 * (i / 20 + 0.5)),
                radius * Math.sin(Math.PI * 2 * (i / 20 + 0.75)),
                radius * Math.sin(Math.PI * 2 * (i / 20 + 1))
              ],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              x: { duration: speed, repeat: Infinity, ease: "linear" },
              y: { duration: speed, repeat: Infinity, ease: "linear" },
              opacity: { duration: speed / 2, repeat: Infinity, repeatType: "reverse" }
            }}
          />
        )
      })}
      
      {/* Segmentos rectangulares como en la imagen de referencia */}
      <motion.div 
        className="absolute w-[140px] h-[140px]"
        animate={{ rotate: rotation / 4 }}
      >
        <svg width="140" height="140" viewBox="0 0 140 140">
          {Array.from({ length: 12 }).map((_, i) => {
            // Esto crea una activación más orgánica de los segmentos
            const isHighlighted = (rotation + i * 30 + Math.sin(pulseState / 10 + i) * 10) % 360 < 60;
            return (
              <rect 
                key={i}
                x={70 + 60 * Math.cos(Math.PI * 2 * i / 12) - 3}
                y={70 + 60 * Math.sin(Math.PI * 2 * i / 12) - 1.5}
                width="6" 
                height="3"
                fill={`rgba(59, 130, 246, ${isHighlighted ? 0.3 : 0.15})`}
              />
            )
          })}
        </svg>
      </motion.div>
    </div>
  )
} 