import React, { useState, useEffect, useRef } from "react";
import { TechStack } from "@/components/Sections/DesarrolloWeb/TechStack";
import { GlassmorphismCard } from "@/components/common/glassmorphism-card";
import { RevealText } from "@/components/common/reveal-text";
import { motion } from "framer-motion";
import { CheckCircle, Layers, Box, Database, Puzzle, Star, TrendingUp, Clock, Shield } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiAmazon, SiGithub, SiVercel, SiNetlify } from "react-icons/si";
import { StandardSection } from "@/components/common/StandardSection";

// Componente de previsualización para el contador
function PreviewCounter() {
    const [count, setCount] = useState(0);
    const intervalRef = useRef<number | null>(null);
    
    const startCounter = () => {
        if (intervalRef.current) return;
        intervalRef.current = window.setInterval(() => {
            setCount(prevCount => {
                if (prevCount >= 10) {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                    return 10;
                }
                return prevCount + 1;
            });
        }, 500);
    };
    
    const resetCounter = () => {
        setCount(0);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTimeout(startCounter, 300);
    };
    
    useEffect(() => {
        startCounter();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);
    
    return (
        <div className="p-5 text-center">
            <h1 className="text-2xl font-bold text-white mb-3">
                Contador: <span className="text-blue-400">{count}</span>
            </h1>
            <div className="flex justify-center gap-2">
                <button 
                    onClick={() => setCount(count < 10 ? count + 1 : count)}
                    className="px-3 py-1.5 bg-blue-900/20 text-blue-400 rounded-lg hover:bg-blue-900/30 transition-colors text-sm"
                    disabled={count >= 10}
                >
                    Incrementar
                </button>
                <button 
                    onClick={resetCounter}
                    className="px-3 py-1.5 bg-indigo-900/20 text-indigo-400 rounded-lg hover:bg-indigo-900/30 transition-colors text-sm"
                >
                    Reiniciar
                </button>
            </div>
        </div>
    );
}

// Componente principal
export default function TecnologiasWeb() {
    return (
        <>
            {/* Primera sección - Resumen de tecnologías */}
            <StandardSection 
                id="tecnologias-web" 
                withGradient={true}
                topSpacing="py-16 md:py-24"
            >
                <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center rounded-full border border-blue-900/30 bg-blue-900/10 px-4 py-1.5 text-sm text-blue-400 mb-4">
                        <span>Stack tecnológico</span>
                    </div>
                    <RevealText className="text-3xl md:text-4xl font-bold mb-6">
                        Tecnologías de desarrollo web
                    </RevealText>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
                        Utilizamos las tecnologías más modernas y eficientes para crear aplicaciones web 
                        de alto rendimiento, escalables y fáciles de mantener.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                    <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/40 rounded-xl p-6 md:p-8 shadow-lg h-full">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Frontend</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <SiReact className="text-blue-400 w-8 h-8" />, name: "React", desc: "Biblioteca UI" },
                                { icon: <SiNextdotjs className="text-blue-400 w-8 h-8" />, name: "Next.js", desc: "Framework React" },
                                { icon: <SiTypescript className="text-blue-400 w-8 h-8" />, name: "TypeScript", desc: "Tipado estático" },
                                { icon: <SiTailwindcss className="text-blue-400 w-8 h-8" />, name: "Tailwind", desc: "Framework CSS" }
                            ].map((tech, index) => (
                                <div key={index} className="bg-zinc-900/80 border border-zinc-800/50 hover:border-blue-900/30 rounded-lg p-4 flex flex-col items-center text-center transition-colors">
                                    <div className="mb-3 bg-blue-900/20 w-16 h-16 rounded-lg flex items-center justify-center">
                                        {tech.icon}
                                    </div>
                                    <h4 className="font-medium text-white">{tech.name}</h4>
                                    <p className="text-xs text-zinc-400 mt-1">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/40 rounded-xl p-6 md:p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Arquitectura</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                 { 
                                    name: "Componentes", 
                                    desc: "Estructura modular basada en componentes reutilizables e independientes."
                                },
                                { 
                                    name: "Flux/Redux", 
                                    desc: "Gestión de estado unidireccional para aplicaciones complejas."
                                },
                                { 
                                    name: "API REST", 
                                    desc: "Comunicación cliente-servidor basada en recursos y operaciones HTTP."
                                },
                                { 
                                    name: "JAMstack", 
                                    desc: "Arquitectura basada en JavaScript, APIs y Markup precompilado."
                                }
                            ].map((item, index) => (
                                <div 
                                    key={index} 
                                    className="relative border border-zinc-700/30 hover:border-blue-700/30 rounded-lg p-4 transition-all duration-300 backdrop-blur-sm"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(17,24,39,0.95) 0%, rgba(51,65,85,0.8) 50%, rgba(17,24,39,0.95) 100%)',
                                        boxShadow: 'inset 0 0 40px rgba(71,85,105,0.15)'
                                    }}
                                >
                                    <div className="relative z-10">
                                        <h4 className="font-medium text-slate-200 mb-1">{item.name}</h4>
                                        <p className="text-xs text-slate-400 pb-5">{item.desc}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-blue-900/5 to-slate-800/20 rounded-lg"></div>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.08)_0%,transparent_100%)] rounded-lg"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/40 rounded-xl p-6 md:p-8 shadow-lg h-full">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Despliegue</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <SiAmazon className="text-blue-400 w-8 h-8" />, name: "AWS", desc: "Cloud" },
                                { icon: <SiVercel className="text-blue-400 w-8 h-8" />, name: "Vercel", desc: "Hosting" },
                                { icon: <SiNetlify className="text-blue-400 w-8 h-8" />, name: "Netlify", desc: "Hosting" },
                                { icon: <SiGithub className="text-blue-400 w-8 h-8" />, name: "GitHub", desc: "CI/CD" }
                            ].map((tech, index) => (
                                <div key={index} className="bg-zinc-900/80 border border-zinc-800/50 hover:border-blue-900/30 rounded-lg p-4 flex flex-col items-center text-center transition-colors">
                                    <div className="mb-3 bg-blue-900/20 w-16 h-16 rounded-lg flex items-center justify-center">
                                        {tech.icon}
                                    </div>
                                    <h4 className="font-medium text-white">{tech.name}</h4>
                                    <p className="text-xs text-zinc-400 mt-1">{tech.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <GlassmorphismCard blurIntensity="light" borderColor="blue">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-3">Desarrollo moderno con React</h3>
                            <p className="text-zinc-300 mb-5 text-sm">
                                React es la biblioteca más popular para construir interfaces de usuario. Su enfoque 
                                basado en componentes y su eficiente sistema de renderizado permiten crear aplicaciones 
                                web modernas con un rendimiento excepcional.
                            </p>
                            
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                                {/* Panel izquierdo: Demo + Casos de uso */}
                                <div className="col-span-12 lg:col-span-5">
                                    {/* Contador demo */}
                                    <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800/50 shadow-lg mb-4">
                                        <div className="flex items-center justify-between px-3 py-1.5 bg-zinc-900 border-b border-zinc-800/50">
                                            <div className="flex items-center gap-1.5">
                                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                                            </div>
                                            <div className="bg-zinc-800/50 px-2 py-0.5 rounded text-[10px] text-zinc-400">
                                                <span>contador-demo.vercel.app</span>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950">
                                            <PreviewCounter />
                                        </div>
                                    </div>

                                    {/* Casos de uso */}
                                    <div className="bg-zinc-950 rounded-lg border border-zinc-800/50 overflow-hidden">
                                        <div className="border-b border-zinc-800/50 px-3 py-2">
                                            <span className="text-sm font-medium text-blue-400">Casos de uso destacados</span>
                                        </div>
                                        <div className="p-3 space-y-3">
                                            <div className="flex items-start gap-2 p-2 bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:border-blue-900/30 transition-colors">
                                                <div className="p-1.5 rounded-md bg-blue-900/20 mt-0.5">
                                                    <Box className="h-3.5 w-3.5 text-blue-400" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-medium text-white">Aplicaciones SPA</h5>
                                                    <p className="text-xs text-zinc-400 mt-0.5">Ideal para Single Page Applications con interacción rica y dinámica sin recarga de página.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:border-blue-900/30 transition-colors">
                                                <div className="p-1.5 rounded-md bg-blue-900/20 mt-0.5">
                                                    <Layers className="h-3.5 w-3.5 text-blue-400" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-medium text-white">Dashboards</h5>
                                                    <p className="text-xs text-zinc-400 mt-0.5">Excelente para interfaces de administración con actualizaciones en tiempo real y visualización de datos.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2 p-2 bg-zinc-900/30 border border-zinc-800/50 rounded-lg hover:border-blue-900/30 transition-colors">
                                                <div className="p-1.5 rounded-md bg-blue-900/20 mt-0.5">
                                                    <Database className="h-3.5 w-3.5 text-blue-400" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-medium text-white">Apps empresariales</h5>
                                                    <p className="text-xs text-zinc-400 mt-0.5">Perfecto para sistemas complejos con flujos de trabajo y gestión de datos avanzados.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Panel central: Código */}
                                <div className="col-span-12 lg:col-span-7">
                                    <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-800/50 shadow-lg h-full">
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 border-b border-zinc-800/50">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                                            <span className="text-[10px] text-zinc-500 ml-2">Counter.tsx</span>
                                        </div>
                                        <div className="p-3 text-xs overflow-x-auto font-mono h-[calc(100%-28px)]">
                                            <div className="text-blue-300">// Componente funcional con Hooks</div>
                                            <div className="text-purple-400">import <span className="text-zinc-300">React, {'{'} useState, useEffect, useRef {'}'}</span> from <span className="text-orange-300">&apos;react&apos;</span>;</div>
                                            <br/>
                                            <div className="text-purple-400">function <span className="text-blue-400">Counter</span>() {'{'}</div>
                                            <div className="ml-3 text-purple-400">const <span className="text-zinc-300">[count, setCount] = </span><span className="text-yellow-300">useState</span>(0);</div>
                                            <div className="ml-3 text-purple-400">const <span className="text-zinc-300">intervalRef = </span><span className="text-yellow-300">useRef</span>(null);</div>
                                            <br/>
                                            <div className="ml-3 text-purple-400">useEffect<span className="text-zinc-300">(() {'=>'} {'{'}</span></div>
                                            <div className="ml-6 text-zinc-300">const interval = setInterval(() {'=>'} {'{'}</div>
                                            <div className="ml-9 text-zinc-300">setCount(prev {'=>'} prev {'<'} 10 ? prev + 1 : prev);</div>
                                            <div className="ml-9 text-zinc-300">if (count {'>='} 9) clearInterval(interval);</div>
                                            <div className="ml-6 text-zinc-300">{'}'}, 500);</div>
                                            <div className="ml-6 text-zinc-300">return () {'=>'} clearInterval(interval);</div>
                                            <div className="ml-3 text-zinc-300">{'}'}, [count]);</div>
                                            <br/>
                                            <div className="ml-3 text-purple-400">const <span className="text-blue-400">resetCounter</span> = () {'=>'} <span className="text-zinc-300">{'{'}</span></div>
                                            <div className="ml-6 text-zinc-300">setCount(0);</div>
                                            <div className="ml-3 text-zinc-300">{'}'};</div>
                                            <br/>
                                            <div className="ml-3 text-purple-400">return <span className="text-zinc-400">(</span></div>
                                            <div className="ml-6 text-blue-300">&lt;div className=&quot;text-center&quot;&gt;</div>
                                            <div className="ml-9 text-blue-300">&lt;h1&gt;Contador: {'{'}count{'}'}&lt;/h1&gt;</div>
                                            <div className="ml-9 text-blue-300">&lt;div className=&quot;flex gap-3&quot;&gt;</div>
                                            <div className="ml-12 text-blue-300">&lt;button onClick={'{'}() {'=>'} setCount(count {'<'} 10 ? count + 1 : count){'}'} disabled={'{'}count {'>='} 10{'}'}&gt;Incrementar&lt;/button&gt;</div>
                                            <div className="ml-12 text-blue-300">&lt;button onClick={'{'}resetCounter{'}'}&gt;Reiniciar&lt;/button&gt;</div>
                                            <div className="ml-9 text-blue-300">&lt;/div&gt;</div>
                                            <div className="ml-6 text-blue-300">&lt;/div&gt;</div>
                                            <div className="ml-3 text-zinc-400">);</div>
                                            <div className="text-zinc-400">{'}'}</div>
                                            <br/>
                                            <div className="text-purple-400">export default <span className="text-zinc-300">Counter;</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Separador sutil */}
                            <div className="w-full h-px bg-zinc-800/30 my-5"></div>
                            
                            {/* Ventajas y beneficios */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <CheckCircle className="h-4 w-4 text-blue-400" />
                                        <h4 className="text-lg font-semibold text-white">Ventajas técnicas</h4>
                                    </div>
                                    <div className="space-y-2.5">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                                            <span className="text-sm text-zinc-300">Componentes reutilizables - Interfaces mediante componentes independientes.</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                                            <span className="text-sm text-zinc-300">Virtual DOM - Actualizaciones optimizadas para mayor rendimiento.</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                                            <span className="text-sm text-zinc-300">React Hooks - Lógica de componentes simplificada.</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <TrendingUp className="h-4 w-4 text-indigo-400" />
                                        <h4 className="text-lg font-semibold text-white">Beneficios para su negocio</h4>
                                    </div>
                                    <div className="grid grid-cols-2 gap-y-2.5 gap-x-3">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp className="h-3.5 w-3.5 text-indigo-400 flex-shrink-0" />
                                            <span className="text-sm text-zinc-300">Mayor productividad</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-3.5 w-3.5 text-indigo-400 flex-shrink-0" />
                                            <span className="text-sm text-zinc-300">Time-to-market rápido</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Star className="h-3.5 w-3.5 text-indigo-400 flex-shrink-0" />
                                            <span className="text-sm text-zinc-300">UX superior</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Shield className="h-3.5 w-3.5 text-indigo-400 flex-shrink-0" />
                                            <span className="text-sm text-zinc-300">Inversión a largo plazo</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassmorphismCard>
                </motion.div>
            </StandardSection>

            {/* Segunda sección - Stack tecnológico detallado */}
            <div className="mt-0 pt-0"> 
                <TechStack />
            </div>
        </>
    );
}