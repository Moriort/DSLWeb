          {/* Arquitectura y patrones */}
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/40 rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Arquitectura y patrones</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                { 
                  name: "MVVM", 
                  desc: "Patrón de UI que separa la lógica de negocio y estado de la interfaz, facilitando el testing y mantenimiento del código."
                },
                { 
                  name: "Clean Architecture", 
                  desc: "Arquitectura por capas que asegura la separación de responsabilidades y facilita la escalabilidad de la aplicación."
                },
                { 
                  name: "Repository Pattern", 
                  desc: "Abstrae el origen de datos proporcionando una API limpia para la capa de dominio, independiente de la fuente de datos."
                },
                { 
                  name: "Dependency Injection", 
                  desc: "Patrón que permite la inversión de control, mejorando la modularidad y facilitando el testing con Hilt/Dagger."
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-900/80 border border-zinc-800/50 hover:border-blue-900/30 rounded-lg p-4 transition-all duration-300"
                >
                  <h4 className="font-medium text-white text-lg mb-2">{item.name}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div> 