import React from "react";
import { TechStack } from "@/components/Sections/DesarrolloAndroid/TechStack";
import { GlassmorphismCard } from "@/components/common/glassmorphism-card";
import { RevealText } from "@/components/common/reveal-text";
import { motion } from "framer-motion";
import { Code, CheckCircle } from "lucide-react";

export default function TecnologiasAndroid() {
  return (
    <section id="tecnologias" className="relative">
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
            Utilizamos las tecnologías más avanzadas del ecosistema Android para crear aplicaciones robustas,
            escalables y de alto rendimiento que satisfacen las necesidades específicas de su empresa.
          </p>
        </div>

        <TechStack />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <GlassmorphismCard blurIntensity="light" borderColor="blue">
            <h3 className="text-2xl font-bold mb-6">¿Por qué elegimos Kotlin para Android?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-zinc-300 mb-4">
                  Kotlin se ha convertido en el lenguaje preferido para el desarrollo de aplicaciones Android por
                  numerosas razones:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Lenguaje oficial de Android</h4>
                      <p className="text-zinc-400">
                        Respaldado por Google como el lenguaje preferido para el desarrollo de Android.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Seguridad de tipos</h4>
                      <p className="text-zinc-400">
                        Reduce errores en tiempo de ejecución y mejora la robustez del código.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Interoperabilidad con Java</h4>
                      <p className="text-zinc-400">
                        Permite la migración gradual de proyectos existentes en Java.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Sintaxis concisa</h4>
                      <p className="text-zinc-400">
                        Reduce la cantidad de código boilerplate, aumentando la productividad.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Corrutinas</h4>
                      <p className="text-zinc-400">
                        Simplifica la programación asíncrona y mejora el rendimiento de la aplicación.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-900/20 p-2 rounded-lg mt-1">
                      <CheckCircle className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Jetpack Compose</h4>
                      <p className="text-zinc-400">
                        Framework moderno para construir interfaces de usuario declarativas y reactivas.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-zinc-900/80 rounded-xl border border-zinc-800/30">
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-blue-400 mt-1" />
                  <div className="w-full">
                    <h4 className="font-semibold text-white mb-3">
                      Ejemplo de código Kotlin
                    </h4>
                    <p className="text-zinc-400 mb-4">
                      Características principales del lenguaje:
                    </p>
                    <div className="bg-zinc-950 rounded-lg overflow-hidden">
                      <div className="flex items-center gap-1.5 px-4 py-2 border-b border-zinc-800/50">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
                        <span className="text-[10px] text-zinc-500 ml-2">MainActivity.kt</span>
                      </div>
                      <pre className="p-4 text-sm overflow-x-auto">
                        <code>
                          <span className="text-blue-300">{"// Data Class - Reduce código boilerplate"}</span>
                          <span className="block text-purple-400">{"data class"}</span>
                          <span className="text-blue-400">{" User"}</span>
                          <span className="text-zinc-400">{"("}</span>
                          <span className="text-orange-300">{"val"}</span>
                          <span className="text-zinc-300">{" name: String,"}</span>
                          <span className="text-orange-300">{" val"}</span>
                          <span className="text-zinc-300">{" email: String"}</span>
                          <span className="text-zinc-400">{")"}</span>

                          <span className="block mt-4 text-blue-300">{"// Función de extensión - Amplía funcionalidad"}</span>
                          <span className="text-orange-300">{"fun"}</span>
                          <span className="text-zinc-300">{" String."}</span>
                          <span className="text-blue-400">{"toTitleCase"}</span>
                          <span className="text-zinc-400">{"(): String {"}</span>
                          <span className="block ml-4 text-zinc-300">{"return this.split(\" \")"}</span>
                          <span className="block ml-8 text-zinc-300">{".map { word -> word.capitalize() }"}</span>
                          <span className="block ml-8 text-zinc-300">{".joinToString(\" \")"}</span>
                          <span className="text-zinc-400">{"}"}</span>

                          <span className="block mt-4 text-blue-300">{"// Corrutinas - Código asíncrono simplificado"}</span>
                          <span className="text-purple-400">{"suspend"}</span>
                          <span className="text-orange-300">{" fun"}</span>
                          <span className="text-blue-400">{" fetchUserData"}</span>
                          <span className="text-zinc-400">{"(): User {"}</span>
                          <span className="block ml-4 text-zinc-300">{"return withContext(Dispatchers.IO) {"}</span>
                          <span className="block ml-8 text-blue-300">{"// Simula operación de red"}</span>
                          <span className="block ml-8 text-zinc-300">{"User(\"John Doe\", \"john@example.com\")"}</span>
                          <span className="block ml-4 text-zinc-400">{"}"}</span>
                          <span className="text-zinc-400">{"}"}</span>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-zinc-900/80 rounded-xl border border-zinc-800/30">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    Data Classes
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Kotlin genera automáticamente getters, setters, equals(), hashCode() y toString() para las data classes,
                    reduciendo significativamente el código repetitivo.
                  </p>
                </div>

                <div className="p-4 bg-zinc-900/80 rounded-xl border border-zinc-800/30">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Funciones de extensión
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Permiten añadir nuevos métodos a clases existentes sin modificar su código fuente,
                    mejorando la legibilidad y reutilización del código.
                  </p>
                </div>

                <div className="p-4 bg-zinc-900/80 rounded-xl border border-zinc-800/30">
                  <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    Corrutinas
                  </h4>
                  <p className="text-zinc-400 text-sm">
                    Simplifican la programación asíncrona con un código más limpio y secuencial,
                    evitando el callback hell y mejorando el manejo de operaciones en segundo plano.
                  </p>
                </div>
              </div>
            </div>
          </GlassmorphismCard>
        </motion.div>
      </div>
    </section>
  );
}
