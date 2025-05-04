import { useState, useEffect } from "react"
import { ChevronRight, Code, Database, Sparkles, BellRing, 
    Users, BarChart2, FileText, Settings, DollarSign, Package, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"

export default function WebApp() {
    const [activeSection, setActiveSection] = useState("dashboard")
    const [showNotifications, setShowNotifications] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [showProfileSettings, setShowProfileSettings] = useState(false)
    
    const menuItems = [
      { icon: BarChart2, label: "Dashboard", id: "dashboard" },
      { icon: Users, label: "Clientes", id: "clientes" },
      { icon: ShoppingCart, label: "Ventas", id: "ventas" },
      { icon: Package, label: "Inventario", id: "inventario" },
      { icon: FileText, label: "Reportes", id: "reportes" },
      { icon: Settings, label: "Configuración", id: "configuracion" }
    ]
  
    const stats = [
      { label: "Ventas del mes", value: "$12,458", trend: "+12.5%", positive: true },
      { label: "Nuevos clientes", value: "124", trend: "+8.2%", positive: true },
      { label: "Productos activos", value: "1,234", trend: "-2.4%", positive: false }
    ]
  
    const recentActivities = [
      { type: "venta", description: "Venta #1234 completada", amount: "$1,234", time: "Hace 5 min", client: "Juan Pérez" },
      { type: "cliente", description: "Nuevo cliente registrado", amount: "", time: "Hace 15 min", client: "María García" },
      { type: "inventario", description: "Stock actualizado", amount: "150 unidades", time: "Hace 30 min", product: "Producto A" }
    ]
  
    const notifications = [
      { title: "Nueva venta registrada", description: "Se ha completado la venta #1234 por $1,234", time: "Hace 5 min", unread: true, type: "venta" },
      { title: "Actualización de inventario", description: "Stock bajo en Producto B (15 unidades)", time: "Hace 15 min", unread: true, type: "inventario" },
      { title: "Nuevo cliente", description: "María García se ha registrado como cliente Premium", time: "Hace 30 min", unread: false, type: "cliente" }
    ]
  
    const dashboardContent = (
      <div className="space-y-3 md:space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-zinc-800/50 rounded-lg p-3 md:p-4 border border-zinc-700/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-[11px] md:text-xs text-zinc-400 mb-1">{stat.label}</p>
              <div className="flex items-end justify-between">
                <span className="text-base md:text-xl font-semibold text-white">{stat.value}</span>
                <span className={`text-[11px] md:text-xs ${stat.positive ? "text-blue-400" : "text-red-500"}`}>
                  {stat.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* Actividad reciente */}
        <motion.div
          className="bg-zinc-800/30 rounded-lg p-3 md:p-4 border border-zinc-700/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-sm font-medium text-zinc-300 mb-2 md:mb-3">Actividad reciente</h3>
          <div className="space-y-2 md:space-y-3">
            {recentActivities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between py-2 border-b border-zinc-700/30 last:border-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-blue-900/30 flex items-center justify-center">
                    {activity.type === "venta" && <DollarSign className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />}
                    {activity.type === "cliente" && <Users className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />}
                    {activity.type === "inventario" && <Package className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm text-zinc-300 line-clamp-1">{activity.description}</p>
                    <span className="text-[10px] md:text-xs text-zinc-500">{activity.time}</span>
                  </div>
                </div>
                {activity.amount && (
                  <span className="text-xs md:text-sm text-blue-400 ml-2">{activity.amount}</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    )
  
    const clientesContent = (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-3 md:space-y-4"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-base md:text-lg font-medium text-white">Clientes registrados</h3>
          <button className="px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm bg-blue-900/30 text-blue-400 rounded-lg hover:bg-blue-900/40 transition-colors">
            + Nuevo cliente
          </button>
        </div>
        <div className="grid gap-2 md:gap-3">
          {[
            { name: "Juan Pérez", email: "juan@empresa.com", type: "Premium", lastPurchase: "Hace 2 días" },
            { name: "María García", email: "maria@empresa.com", type: "Standard", lastPurchase: "Hace 1 semana" },
            { name: "Carlos López", email: "carlos@empresa.com", type: "Premium", lastPurchase: "Hoy" }
          ].map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 p-2.5 md:p-3 rounded-lg border border-zinc-700/30 flex items-center justify-between group hover:border-blue-900/30 transition-colors"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <span className="text-sm md:text-base text-blue-400 font-medium">{client.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-medium text-white group-hover:text-blue-400 transition-colors">{client.name}</h4>
                  <p className="text-[10px] md:text-xs text-zinc-400">{client.email}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-[10px] md:text-xs px-2 py-1 rounded-full ${
                  client.type === "Premium" ? "bg-blue-900/30 text-blue-400" : "bg-zinc-700/50 text-zinc-400"
                }`}>{client.type}</span>
                <p className="text-[10px] md:text-xs text-zinc-500 mt-1">{client.lastPurchase}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  
    const ventasContent = (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-white">Registro de ventas</h3>
          <button className="px-3 py-1.5 text-sm bg-blue-900/30 text-blue-400 rounded-lg hover:bg-blue-900/40 transition-colors">
            + Nueva venta
          </button>
        </div>
        <div className="grid gap-3">
          {[
            { id: "#1234", client: "Juan Pérez", amount: "$1,234", status: "Completada", date: "Hoy 14:30" },
            { id: "#1233", client: "María García", amount: "$2,845", status: "En proceso", date: "Hoy 12:15" },
            { id: "#1232", client: "Carlos López", amount: "$945", status: "Completada", date: "Ayer 18:20" }
          ].map((venta, index) => (
            <motion.div
              key={venta.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/30 flex items-center justify-between group hover:border-blue-900/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                    Venta {venta.id}
                  </h4>
                  <p className="text-xs text-zinc-400">{venta.client}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-blue-400">{venta.amount}</span>
                <p className="text-xs text-zinc-500 mt-1">{venta.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  
    const inventarioContent = (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-white">Inventario actual</h3>
          <button className="px-3 py-1.5 text-sm bg-blue-900/30 text-blue-400 rounded-lg hover:bg-blue-900/40 transition-colors">
            + Nuevo producto
          </button>
        </div>
        <div className="grid gap-3">
          {[
            { name: "Producto A", stock: 234, category: "Electrónica", status: "En stock" },
            { name: "Producto B", stock: 15, category: "Accesorios", status: "Stock bajo" },
            { name: "Producto C", stock: 0, category: "Electrónica", status: "Sin stock" }
          ].map((producto, index) => (
            <motion.div
              key={producto.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/30 flex items-center justify-between group hover:border-blue-900/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center">
                  <Package className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                    {producto.name}
                  </h4>
                  <p className="text-xs text-zinc-400">{producto.category}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  producto.stock > 20 
                    ? "bg-blue-900/30 text-blue-400" 
                    : producto.stock > 0 
                      ? "bg-amber-500/30 text-amber-300"
                      : "bg-red-500/30 text-red-300"
                }`}>{producto.status}</span>
                <p className="text-xs text-zinc-500 mt-1">{producto.stock} unidades</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  
    const reportesContent = (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-white">Reportes y análisis</h3>
          <button className="px-3 py-1.5 text-sm bg-blue-900/30 text-blue-400 rounded-lg hover:bg-blue-900/40 transition-colors">
            Exportar datos
          </button>
        </div>
        <div className="grid gap-4">
          {[
            { title: "Ventas mensuales", description: "Análisis detallado de ventas", icon: BarChart2 },
            { title: "Clientes activos", description: "Segmentación de clientes", icon: Users },
            { title: "Inventario", description: "Estado y rotación de productos", icon: Package },
            { title: "Rendimiento", description: "Métricas de desempeño", icon: ChevronRight }
          ].map((reporte, index) => (
            <motion.div
              key={reporte.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700/30 flex items-center justify-between group hover:border-blue-900/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center">
                  <reporte.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                    {reporte.title}
                  </h4>
                  <p className="text-xs text-zinc-400">{reporte.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    )
  
    const configuracionContent = (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium text-white">Configuración del sistema</h3>
          <button className="px-3 py-1.5 text-sm bg-blue-900/30 text-blue-400 rounded-lg hover:bg-blue-900/40 transition-colors">
            Guardar cambios
          </button>
        </div>
  
        {/* Secciones de configuración */}
        <div className="grid gap-6">
          {/* Perfil de empresa */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white border-b border-zinc-800 pb-2">Perfil de empresa</h4>
            <div className="grid gap-4">
              <div className="space-y-2">
                <label className="text-xs text-zinc-400">Nombre de la empresa</label>
                <input 
                  type="text" 
                  value="DSL Solutions"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-900/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-zinc-400">Correo de contacto</label>
                <input 
                  type="email" 
                  value="contacto@dslsolutions.com"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-900/50 transition-colors"
                />
              </div>
            </div>
          </div>
  
          {/* Notificaciones */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white border-b border-zinc-800 pb-2">Notificaciones</h4>
            <div className="space-y-3">
              {[
                { label: "Nuevas ventas", description: "Notificar cuando se registre una nueva venta" },
                { label: "Stock bajo", description: "Alertar cuando el inventario esté por debajo del mínimo" },
                { label: "Nuevos clientes", description: "Notificar registro de nuevos clientes" }
              ].map((setting, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white">{setting.label}</p>
                    <p className="text-xs text-zinc-400">{setting.description}</p>
                  </div>
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      defaultChecked={true}
                      className="sr-only peer"
                      id={`toggle-${index}`}
                    />
                    <label 
                      htmlFor={`toggle-${index}`}
                      className="flex w-11 h-6 bg-zinc-700/50 rounded-full cursor-pointer transition-colors duration-200 peer-checked:bg-blue-900/30 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-900/50 peer-focus:ring-offset-2 peer-focus:ring-offset-zinc-900"
                    >
                      <span className="w-5 h-5 bg-zinc-500 rounded-full transition-transform duration-200 transform translate-x-0.5 translate-y-0.5 peer-checked:translate-x-5 peer-checked:bg-blue-400"></span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Seguridad */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white border-b border-zinc-800 pb-2">Seguridad</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs text-zinc-400">Contraseña actual</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-900/50 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-zinc-400">Nueva contraseña</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-900/50 transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )
  
    const getContent = () => {
      switch (activeSection) {
        case "clientes":
          return clientesContent
        case "ventas":
          return ventasContent
        case "inventario":
          return inventarioContent
        case "reportes":
          return reportesContent
        case "configuracion":
          return configuracionContent
        default:
          return dashboardContent
      }
    }
  
    return (
      <motion.div 
        className="w-full max-w-3xl mx-auto bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-zinc-800/50 shadow-2xl h-[550px] sm:h-[600px] overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Barra superior con controles de ventana */}
        <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-zinc-800/50 bg-zinc-900/95 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/70"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/70"></div>
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/70"></div>
            </div>
            <span className="text-[10px] md:text-xs text-zinc-500 ml-2">Sistema de Gestión Empresarial</span>
          </div>
          <div className="flex items-center gap-3 relative">
            {/* Notificaciones */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowNotifications(!showNotifications)
                  setShowProfile(false)
                }}
                className="relative group"
              >
                <BellRing className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full"></span>
              </button>
              
              {showNotifications && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-1 w-72 bg-zinc-900 border border-zinc-800/50 rounded-lg shadow-xl z-50 overflow-hidden"
                >
                  <div className="p-3 border-b border-zinc-800/50">
                    <h4 className="text-sm font-medium text-white">Notificaciones</h4>
                  </div>
                  <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700/50 hover:scrollbar-thumb-zinc-700/80 transition-colors">
                    <div className="space-y-0.5">
                      {notifications.map((notification, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className={`p-3 border-b border-zinc-800/30 last:border-0 ${
                            notification.unread ? "bg-blue-900/5" : ""
                          } hover:bg-zinc-800/50 transition-colors cursor-pointer group`}
                        >
                          <div className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded-lg bg-blue-900/30 flex-shrink-0 flex items-center justify-center">
                              {notification.type === "venta" && <DollarSign className="w-4 h-4 text-blue-400" />}
                              {notification.type === "cliente" && <Users className="w-4 h-4 text-blue-400" />}
                              {notification.type === "inventario" && <Package className="w-4 h-4 text-blue-400" />}
                            </div>
                            <div>
                              <h5 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">{notification.title}</h5>
                              <p className="text-xs text-zinc-400 mt-0.5">{notification.description}</p>
                              <span className="text-xs text-zinc-500 mt-1 block">{notification.time}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="p-2 border-t border-zinc-800/50">
                    <button className="w-full text-xs text-zinc-400 hover:text-white py-1 transition-colors">
                      Ver todas las notificaciones
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
  
            {/* Perfil */}
            <div className="relative">
              <button 
                onClick={() => {
                  setShowProfile(!showProfile)
                  setShowNotifications(false)
                }}
                className="w-6 h-6 rounded-full bg-blue-900/30 flex items-center justify-center hover:bg-blue-900/40 transition-colors"
              >
                <span className="text-xs text-blue-400 font-medium">JP</span>
              </button>
  
              {showProfile && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 top-full mt-1 w-80 bg-zinc-900 border border-zinc-800/50 rounded-lg shadow-xl z-50"
                >
                  <div className="p-4 border-b border-zinc-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center">
                        <span className="text-xl text-blue-400 font-medium">JP</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white">Juan Pérez</h4>
                        <p className="text-xs text-zinc-400">Administrador del sistema</p>
                        <p className="text-xs text-blue-400 mt-1">Online</p>
                      </div>
                    </div>
                    
                    {showProfileSettings ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 space-y-3"
                      >
                        <div className="space-y-2">
                          <label className="text-xs text-zinc-400">Nombre completo</label>
                          <input 
                            type="text" 
                            value="Juan Pérez"
                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-900/50 transition-colors"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-zinc-400">Correo electrónico</label>
                          <input 
                            type="email" 
                            value="juan@empresa.com"
                            className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-900/50 transition-colors"
                          />
                        </div>
                        <div className="pt-2 flex justify-end gap-2">
                          <button 
                            onClick={() => setShowProfileSettings(false)}
                            className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors"
                          >
                            Cancelar
                          </button>
                          <button className="px-3 py-1.5 text-xs bg-blue-900/30 text-blue-400 rounded-lg hover:bg-blue-900/40 transition-colors">
                            Guardar cambios
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 grid grid-cols-2 gap-2"
                      >
                        <button 
                          onClick={() => setShowProfileSettings(true)}
                          className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
                        >
                          <Users className="w-4 h-4" />
                          <span>Editar perfil</span>
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
                          <Settings className="w-4 h-4" />
                          <span>Preferencias</span>
                        </button>
                      </motion.div>
                    )}
                  </div>
                  <div className="p-2">
                    <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors">
                      <ChevronRight className="w-4 h-4" />
                      <span>Cerrar sesión</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
  
        {/* Contenido principal con altura fija y scroll */}
        <div className="grid grid-cols-12 h-[calc(100%-41px)] overflow-hidden">
          {/* Menú lateral */}
          <div className={`${
            activeSection === "dashboard" ? "col-span-12 md:col-span-3" : "col-span-12 md:col-span-3"
          } border-r border-zinc-800/50 bg-zinc-900/95 overflow-hidden`}>
            <div className="p-2 md:p-4">
              <div className="md:hidden mb-3">
                <select 
                  value={activeSection}
                  onChange={(e) => setActiveSection(e.target.value)}
                  className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-900/50 transition-colors appearance-none"
                >
                  {menuItems.map(item => (
                    <option key={item.id} value={item.id} className="bg-zinc-900">
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="hidden md:flex md:flex-col justify-start gap-1.5 md:gap-2">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-blue-900/30 text-blue-400" 
                        : "text-zinc-400 hover:bg-zinc-800/50 hover:text-zinc-200"
                    }`}
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-xs md:text-sm font-medium">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
  
          {/* Área de contenido con scroll */}
          <div className="col-span-12 md:col-span-9 overflow-y-auto scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700/50 hover:scrollbar-thumb-zinc-700">
            <div className="p-2 md:p-4">
              {getContent()}
            </div>
          </div>
        </div>
      </motion.div>
    )
  }