import React, { useState } from "react";
import { TechStack } from "@/components/Sections/DesarrolloWeb/TechStack";
import { GlassmorphismCard } from "@/components/common/glassmorphism-card";
import { RevealText } from "@/components/common/reveal-text";
import { motion } from "framer-motion";
import { Code, CheckCircle } from "lucide-react";

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
        <div className="bg-zinc-950 rounded-lg overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-2 border-b border-zinc-800/50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                <span className="text-[10px] text-zinc-500 ml-2">Counter.tsx</span>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
                <code>
                    <div className="text-blue-300">// Componente funcional con useState</div>
                    <div className="text-purple-400">import <span className="text-zinc-300">React, {"{"} useState {"}"}</span> from <span className="text-orange-300">&apos;react&apos;</span>;</div>
                    <div className="text-purple-400">import <span className="text-zinc-300">{"{"} Button {"}"}</span> from <span className="text-orange-300">&apos;./components/Button&apos;</span>;</div>
                    
                    <div className="mt-3 text-purple-400">function <span className="text-blue-400">Counter</span>() {"{"}</div>
                    <div className="ml-4 text-purple-400">const <span className="text-zinc-300">[count, setCount] = </span><span className="text-yellow-300">useState</span>(0);</div>
                    
                    <div className="mt-3 ml-4 text-purple-400">return <span className="text-zinc-400">(</span></div>
                    <div className="ml-8 text-blue-300">&lt;div <span className="text-green-300">className</span>=<span className="text-orange-300">&quot;text-center&quot;</span>&gt;</div>
                    <div className="ml-12 text-blue-300">&lt;h1 <span className="text-green-300">className</span>=<span className="text-orange-300">&quot;text-2xl font-bold&quot;</span>&gt;</div>
                    <div className="ml-16 text-zinc-300">Contador: {"{"}count{"}"}</div>
                    <div className="ml-12 text-blue-300">&lt;/h1&gt;</div>
                    <div className="ml-12 text-blue-300">&lt;Button</div>
                    <div className="ml-16 text-green-300">onClick={"{"}() =&gt; <span className="text-blue-400">setCount</span>(count + 1){"}"}</div>
                    <div className="ml-16 text-green-300">className=<span className="text-orange-300">&quot;mt-4&quot;</span>&gt;</div>
                    <div className="ml-16 text-zinc-300">Incrementar</div>
                    <div className="ml-12 text-blue-300">&lt;/Button&gt;</div>
                    <div className="ml-8 text-blue-300">&lt;/div&gt;</div>
                    <div className="ml-4 text-zinc-400">);</div>
                    <div className="text-zinc-400">{"}"}</div>
                    
                    <div className="mt-3 text-purple-400">export default <span className="text-zinc-300">Counter;</span></div>
                </code>
            </pre>
        </div>
    );
}

// Componente principal
export default function TecnologiasWeb() {
    return (
        <div id="tecnologias" className="relative">
            <div className="absolute inset-0"></div>
            <div className="container relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center mb-20">
                    <div className="inline-flex items-center rounded-full border border-blue-900/30 bg-blue-900/10 px-4 py-1.5 text-sm text-blue-400 mb-6">
                        <span>Stack tecnológico</span>
                    </div>
                    <RevealText className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        Tecnologías de vanguardia
                    </RevealText>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
                        Utilizamos las tecnologías más avanzadas del ecosistema de React y Ruby on Rails para crear
                        aplicaciones robustas, escalables y de alto rendimiento que satisfacen las necesidades 
                        específicas de su empresa.
                    </p>
                </div>

                <TechStack/>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.5}}
                    viewport={{once: true}}
                    className="mt-16"
                >
                    <GlassmorphismCard blurIntensity="light" borderColor="blue">
                        <h3 className="text-2xl font-bold mb-6">
                            ¿Por qué elegimos React y Ruby on Rails?
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-zinc-300 mb-4">
                                    React y Ruby on Rails se han convertido en las tecnologías preferidas para el
                                    desarrollo de aplicaciones web por numerosas razones:
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                                            <CheckCircle className="h-5 w-5 text-blue-400"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Desarrollo rápido</h4>
                                            <p className="text-zinc-400">
                                                Ruby on Rails permite un desarrollo ágil y eficiente, ideal para
                                                startups y MVPs.
                                            </p>
                                        </div>
                                    </li>
                                    
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                                            <CheckCircle className="h-5 w-5 text-blue-400"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">
                                                Componentes reutilizables
                                            </h4>
                                            <p className="text-zinc-400">
                                                React permite crear componentes reutilizables, lo que mejora la
                                                mantenibilidad y escalabilidad del código.
                                            </p>
                                        </div>
                                    </li>
                                    
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                                            <CheckCircle className="h-5 w-5 text-blue-400"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">
                                                Ecosistema robusto
                                            </h4>
                                            <p className="text-zinc-400">
                                                Ambas tecnologías cuentan con una amplia comunidad y un ecosistema de
                                                bibliotecas y herramientas.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                                            <CheckCircle className="h-5 w-5 text-blue-400"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">
                                                Desarrollo de API RESTful
                                            </h4>
                                            <p className="text-zinc-400">
                                                Ruby on Rails facilita la creación de API RESTful, lo que permite una
                                                integración sencilla con aplicaciones frontend.
                                            </p>
                                        </div>
                                    </li>
                                    
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                                            <CheckCircle className="h-5 w-5 text-blue-400"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">
                                                Gestión del estado
                                            </h4>
                                            <p className="text-zinc-400">
                                                React ofrece múltiples soluciones para la gestión del estado, como Redux
                                                y Context API.
                                            </p>
                                        </div>
                                    </li>
                                    
                                    <li className="flex items-start gap-3">
                                        <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                                            <CheckCircle className="h-5 w-5 text-blue-400"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">
                                                Desarrollo de interfaces de usuario
                                            </h4>
                                            <p className="text-zinc-400">
                                                React permite crear interfaces de usuario interactivas y dinámicas con
                                                facilidad.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Sección de código y prueba */}
                        <div className="mt-12">
                            <div className="flex items-start gap-3 mb-6">
                                <Code className="h-6 w-6 text-blue-400 mt-1 shrink-0" />
                                <h4 className="font-semibold text-white text-xl">
                                    Ejemplo de código React
                                </h4>
                            </div>
                            
                            <p className="text-zinc-400 mb-6 max-w-2xl">
                                React permite crear componentes reutilizables y gestionar el estado de manera eficiente:
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Código */}
                                <CodeBlock />

                                {/* Previsualización y información */}
                                <div className="space-y-6">
                                    <div className="bg-zinc-950 rounded-lg overflow-hidden">
                                        <div className="flex items-center gap-1.5 px-4 py-2 border-b border-zinc-800/50">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                                            <span className="text-[10px] text-zinc-500 ml-2">Vista previa</span>
                                        </div>
                                        <PreviewCounter />
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="p-4 bg-zinc-900/80 rounded-lg border border-zinc-800/30 transition-all hover:border-blue-900/30">
                                            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-yellow-300"></span>
                                                Hooks
                                            </h4>
                                            <p className="text-zinc-400 text-sm">
                                                Los hooks de React, como useState y useEffect, permiten usar el estado y otras 
                                                características de React sin escribir una clase, haciendo el código más limpio 
                                                y mantenible.
                                            </p>
                                        </div>

                                        <div className="p-4 bg-zinc-900/80 rounded-lg border border-zinc-800/30 transition-all hover:border-blue-900/30">
                                            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                                                Componentes funcionales
                                            </h4>
                                            <p className="text-zinc-400 text-sm">
                                                React prioriza los componentes funcionales, que son más sencillos de entender, 
                                                probar y mantener que los componentes de clase tradicionales.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </GlassmorphismCard>
                </motion.div>
            </div>
        </div>
    );
}