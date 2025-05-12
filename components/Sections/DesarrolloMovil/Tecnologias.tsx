import React, { useState } from "react";
import { TechStack } from "@/components/Sections/DesarrolloMovil/TechStack";
import { GlassmorphismCard } from "@/components/common/glassmorphism-card";
import { RevealText } from "@/components/common/reveal-text";
import { motion } from "framer-motion";
import { Code, CheckCircle, Layers, Box, Database, Puzzle } from "lucide-react";
import { SlArrowRight } from "react-icons/sl";
import { SiKotlin, SiJetpackcompose, SiAndroid, SiFirebase, SiGoogleplay } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { StandardSection } from "@/components/common/StandardSection";

// Componente de previsualización para el contador
function PreviewCounter() {
    const [count, setCount] = useState(0);
    return (
        <div className="p-8 text-center">
            <h1 className="text-2xl font-bold text-white mb-4">
                Contador: {count}
            </h1>
            <button 
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-blue-900/20 text-blue-400 rounded-lg hover:bg-blue-900/30 transition-colors"
            >
                Incrementar
            </button>
        </div>
    );
}

// Componente CodeBlock para mostrar el ejemplo de código
function CodeBlock() {
    return (
        <div className="bg-zinc-950 rounded-lg overflow-hidden shadow-lg">
            <div className="flex items-center gap-1.5 px-4 py-2 border-b border-zinc-800/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                <span className="text-[10px] text-zinc-500 ml-2">Counter.kt</span>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
                <code>
                    <div className="text-blue-300">// Componente con ViewModel y LiveData</div>
                    <div className="text-purple-400">class <span className="text-blue-400">CounterViewModel</span> : <span className="text-zinc-300">ViewModel</span>() {"{"}</div>
                    <div className="ml-4 text-purple-400">private val <span className="text-zinc-300">_counter</span> = <span className="text-yellow-300">MutableLiveData</span>(0)</div>
                    <div className="ml-4 text-purple-400">val <span className="text-zinc-300">counter</span>: <span className="text-yellow-300">LiveData</span>&lt;Int&gt; = _counter</div>
                    
                    <div className="mt-3 ml-4 text-purple-400">fun <span className="text-blue-400">incrementCounter</span>() {"{"}</div>
                    <div className="ml-8 text-zinc-300">_counter.value = _counter.value?.plus(1)</div>
                    <div className="ml-4 text-zinc-400">{"}"}</div>
                    <div className="text-zinc-400">{"}"}</div>
                    
                    <div className="mt-3 text-purple-400">class <span className="text-blue-400">CounterActivity</span> : <span className="text-zinc-300">AppCompatActivity</span>() {"{"}</div>
                    <div className="ml-4 text-purple-400">private val <span className="text-zinc-300">viewModel</span> by viewModels&lt;CounterViewModel&gt;()</div>
                    
                    <div className="mt-3 ml-4 text-purple-400">override fun <span className="text-blue-400">onCreate</span>(savedInstanceState: Bundle?) {"{"}</div>
                    <div className="ml-8 text-zinc-300">super.onCreate(savedInstanceState)</div>
                    <div className="ml-8 text-zinc-300">setContentView(R.layout.activity_counter)</div>
                    
                    <div className="ml-8 text-zinc-300">findViewById&lt;Button&gt;(R.id.button).setOnClickListener {"{"}</div>
                    <div className="ml-12 text-zinc-300">viewModel.incrementCounter()</div>
                    <div className="ml-8 text-zinc-300">{"}"}</div>
                    
                    <div className="ml-8 text-zinc-300">viewModel.counter.observe(this) {"{"} count -&gt;</div>
                    <div className="ml-12 text-zinc-300">findViewById&lt;TextView&gt;(R.id.textView).text = count.toString()</div>
                    <div className="ml-8 text-zinc-300">{"}"}</div>
                    <div className="ml-4 text-zinc-400">{"}"}</div>
                    <div className="text-zinc-400">{"}"}</div>
                </code>
            </pre>
        </div>
    );
}

// Componente principal
export default function TecnologiasMovil() {
    return (
        <>
            {/* Primera sección - Resumen de tecnologías */}
            <StandardSection 
                id="tecnologias-movil" 
                withGradient={true}
                topSpacing="py-16 md:py-24"
            >
                <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center rounded-full border border-blue-900/30 bg-blue-900/10 px-4 py-1.5 text-sm text-blue-400 mb-4">
                        <span>Stack tecnológico</span>
                    </div>
                    <RevealText className="text-3xl md:text-4xl font-bold mb-6">
                        Tecnologías de desarrollo Android
                    </RevealText>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
                        Utilizamos las tecnologías más modernas y eficientes para crear aplicaciones Android 
                        de alto rendimiento, escalables y fáciles de mantener.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
                    <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/40 rounded-xl p-6 md:p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Lenguajes</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <SiKotlin className="text-blue-400 w-8 h-8" />, name: "Kotlin", desc: "Principal" },
                                { icon: <FaJava className="text-blue-400 w-8 h-8" />, name: "Java", desc: "Legacy" },
                                { icon: <SiJetpackcompose className="text-blue-400 w-8 h-8" />, name: "Compose", desc: "UI moderna" },
                                { icon: <SiAndroid className="text-blue-400 w-8 h-8" />, name: "XML", desc: "UI clásica" }
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
                                    name: "MVVM", 
                                    desc: "Patrón de UI que separa la lógica de negocio y estado de la interfaz."
                                },
                                { 
                                    name: "Clean Architecture", 
                                    desc: "Arquitectura por capas que asegura la separación de responsabilidades."
                                },
                                { 
                                    name: "Repository Pattern", 
                                    desc: "Abstrae el origen de datos proporcionando una API limpia para la capa de dominio."
                                },
                                { 
                                    name: "Dependency Injection", 
                                    desc: "Patrón que permite la inversión de control con Hilt/Dagger."
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
                                        <p className="text-xs text-slate-400">{item.desc}</p>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-blue-900/5 to-slate-800/20 rounded-lg"></div>
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(148,163,184,0.08)_0%,transparent_100%)] rounded-lg"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/40 rounded-xl p-6 md:p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Servicios</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: <SiFirebase className="text-blue-400 w-8 h-8" />, name: "Firebase", desc: "Backend" },
                                { icon: <SiGoogleplay className="text-blue-400 w-8 h-8" />, name: "Play", desc: "APIs" },
                                { icon: <SiAndroid className="text-blue-400 w-8 h-8" />, name: "Room", desc: "Base local" },
                                { icon: <SiAndroid className="text-blue-400 w-8 h-8" />, name: "WorkManager", desc: "Background" }
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
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Desarrollo moderno con Kotlin</h3>
                                <p className="text-zinc-300 mb-6">
                                    Kotlin es el lenguaje oficial para el desarrollo Android. Su sintaxis moderna, 
                                    características de seguridad y excelente interoperabilidad con Java lo convierten 
                                    en la mejor opción para el desarrollo de aplicaciones Android.
                                </p>
                            <div className="mt-4 bg-zinc-900/80 rounded-xl border border-zinc-800/30 overflow-hidden mb-6">
                                    <div className="flex items-center gap-1.5 px-4 py-2 border-b border-zinc-800/50">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                                        <span className="text-[10px] text-zinc-500 ml-2">Vista previa</span>
                                    </div>
                                    <PreviewCounter />
                                </div>
                              
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                                            <CheckCircle className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Componentes de arquitectura</h4>
                                            <p className="text-zinc-400 text-sm">
                                                ViewModel, LiveData y DataBinding para una arquitectura robusta y mantenible.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                                            <CheckCircle className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Corrutinas</h4>
                                            <p className="text-zinc-400 text-sm">
                                                Manejo asíncrono simplificado con corrutinas y Flow.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                                            <CheckCircle className="h-5 w-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Jetpack Compose</h4>
                                            <p className="text-zinc-400 text-sm">
                                                UI declarativa moderna para interfaces de usuario reactivas.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <div className="flex items-start gap-3 mb-6">
                                    <Code className="h-6 w-6 text-blue-400 mt-1" />
                                    <div className="w-full">
                                        <h4 className="font-semibold text-white mb-3">
                                            Ejemplo de MVVM con Kotlin
                                        </h4>
                                        <CodeBlock />
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