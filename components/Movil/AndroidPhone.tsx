import { motion } from "framer-motion"
import { 
  BellRing, Wifi, Calendar, BarChart2, Clipboard, Package, 
  TrendingUp, Users, ArrowLeft, ChevronRight, ChevronLeft, Menu, MessageCircle, 
  Search, ShoppingCart, Settings, DollarSign, AlertCircle, Sun,
  MoreVertical, FileText, PieChart, List, Grid, Clock, Filter, Plus, User, Home,
  LucideIcon
} from "lucide-react"
import { useState, useEffect } from "react"

interface Task {
  id: number
  title: string
  status: 'pendiente' | 'en_progreso' | 'completada'
  dueDate: string
  priority: 'alta' | 'media' | 'baja'
  description?: string
  assignee?: string
}

interface Product {
  id: number
  name: string
  quantity: number
  status: 'en_stock' | 'bajo_stock' | 'sin_stock'
  price: string
  category?: string
}

interface Client {
  id: number
  name: string
  email: string
  type: 'premium' | 'standard'
  lastPurchase: string
}

interface Sale {
  id: string
  client: string
  amount: string
  status: string
  date: string
  items?: number
}

// Definición de tipos para los elementos del menú
interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

// Global CSS para ocultar scrollbar pero mantener funcionalidad
const globalStyles = `
  /* Ocultar scrollbar para Chrome, Safari y Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Ocultar scrollbar para IE, Edge y Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  /* Aplicar efecto de pulso al tocar elementos interactivos */
  .touch-pulse:active {
    transform: scale(0.97);
    opacity: 0.9;
    transition: transform 0.1s, opacity 0.1s;
  }
`;

export default function AndroidPhone() {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime())
  const [currentDate, setCurrentDate] = useState<string>(getCurrentDate())
  const [currentSection, setCurrentSection] = useState<string>("dashboard")
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [showSearch, setShowSearch] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [showAppMenu, setShowAppMenu] = useState<boolean>(false)
  
  // Lista de elementos de menú para la navegación
  const menuItems: MenuItem[] = [
    { id: "dashboard", label: "Inicio", icon: Home },
    { id: "inventory", label: "Inventario", icon: Package },
    { id: "clients", label: "Clientes", icon: User },
    { id: "sales", label: "Ventas", icon: ShoppingCart },
    { id: "reports", label: "Reportes", icon: BarChart2 },
    { id: "settings", label: "Ajustes", icon: Settings }
  ]

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }))
      
      const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' }
      setCurrentDate(now.toLocaleDateString('es-ES', options))
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Agregar estilos globales
    const styleElement = document.createElement('style');
    styleElement.textContent = globalStyles;
    document.head.appendChild(styleElement);
    
    // Limpiar al desmontar
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  const phoneAnimation = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.9, 
        delay: 0.5,
        ease: [0.23, 1, 0.32, 1] 
      } 
    }
  }
  
  // Datos de ejemplo para la aplicación
  const tasks: Task[] = [
    { id: 1, title: "Revisar inventario", status: "en_progreso", dueDate: "Hoy", priority: "alta", assignee: "Juan", description: "Verificar stock de los productos de la categoría electrónica" },
    { id: 2, title: "Reunión con proveedores", status: "pendiente", dueDate: "Mañana", priority: "media", assignee: "María", description: "Negociar nuevos términos de contrato con proveedores principales" },
    { id: 3, title: "Actualizar catálogo", status: "completada", dueDate: "Ayer", priority: "baja", assignee: "Carlos", description: "Actualizar precios y características de productos nuevos" },
    { id: 4, title: "Enviar facturas", status: "pendiente", dueDate: "25 Ene", priority: "alta", assignee: "Ana", description: "Enviar facturas pendientes a clientes corporativos" }
  ]
  
  const products: Product[] = [
    {
      id: 1,
      name: "Monitor 27\" UltraSharp",
      price: "$349.99",
      status: "en_stock",
      quantity: 24,
      category: "Computación"
    },
    {
      id: 2,
      name: "Teclado mecánico RGB",
      price: "$89.99",
      status: "bajo_stock",
      quantity: 5,
      category: "Periféricos"
    },
    {
      id: 3,
      name: "Mouse Gamer Pro",
      price: "$59.99",
      status: "sin_stock",
      quantity: 0,
      category: "Periféricos"
    },
    {
      id: 4,
      name: "SSD 1TB NVMe",
      price: "$129.99",
      status: "en_stock",
      quantity: 12,
      category: "Computación"
    },
    {
      id: 5,
      name: "Mochila para laptop 15\"",
      price: "$45.99",
      status: "en_stock",
      quantity: 8,
      category: "Accesorios"
    }
  ]
  
  const clients: Client[] = [
    {
      id: 1,
      name: "Carlos Méndez",
      email: "carlos.mendez@gmail.com",
      type: "premium",
      lastPurchase: "15 Ene 2024"
    },
    {
      id: 2,
      name: "María González",
      email: "mgonzalez@empresa.com",
      type: "premium",
      lastPurchase: "22 Dic 2023"
    },
    {
      id: 3,
      name: "Juan Pérez",
      email: "jperez@outlook.com",
      type: "standard",
      lastPurchase: "5 Feb 2024"
    },
    {
      id: 4,
      name: "Ana Rodríguez",
      email: "ana.rodriguez@empresa.mx",
      type: "standard",
      lastPurchase: "30 Ene 2024"
    },
    {
      id: 5,
      name: "Roberto Sánchez",
      email: "roberto83@gmail.com",
      type: "premium",
      lastPurchase: "10 Feb 2024"
    }
  ]
  
  const sales: Sale[] = [
    {
      id: "#VNT-5432",
      client: "Carlos Méndez",
      amount: "$549.99",
      date: "15 Ene 2024",
      items: 3,
      status: "completada"
    },
    {
      id: "#VNT-5431",
      client: "María González",
      amount: "$1,249.99",
      date: "22 Dic 2023",
      items: 5,
      status: "completada"
    },
    {
      id: "#VNT-5430",
      client: "Juan Pérez",
      amount: "$89.99",
      date: "5 Feb 2024",
      items: 1,
      status: "completada"
    },
    {
      id: "#VNT-5429",
      client: "Ana Rodríguez",
      amount: "$349.99",
      date: "30 Ene 2024",
      items: 2,
      status: "completada"
    },
    {
      id: "#VNT-5428",
      client: "Roberto Sánchez",
      amount: "$229.99",
      date: "10 Feb 2024",
      items: 2,
      status: "completada"
    }
  ]
  
  // Indicadores (KPIs) para el dashboard
  const kpis = [
    { label: "Ventas", value: "$12,458", change: "+12.5%", trend: "up" },
    { label: "Clientes", value: "124", change: "+8.2%", trend: "up" },
    { label: "Pedidos", value: "43", change: "-2.4%", trend: "down" }
  ]
  
  // Actividades recientes
  const recentActivities = [
    { type: "venta", description: "Venta #1234 completada", amount: "$1,234", time: "Hace 5 min", client: "Juan Pérez" },
    { type: "cliente", description: "Nuevo cliente registrado", amount: "", time: "Hace 15 min", client: "María García" },
    { type: "inventario", description: "Stock actualizado", amount: "150 unidades", time: "Hace 30 min", product: "Smartphone X" }
  ]

  // Función para obtener la hora actual
  function getCurrentTime(): string {
    return new Date().toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  // Función para obtener la fecha actual
  function getCurrentDate(): string {
    return new Date().toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  // Renderizar detalle de tarea seleccionada con Material Design
  const renderTaskDetail = () => {
    if (!selectedTask) return null;
    
    return (
      <div className="space-y-4 pb-16">
        {/* Barra superior de navegación con el botón de retroceso */}
        <div className="flex items-center gap-2 sticky top-0 bg-zinc-950/90 backdrop-blur-md py-2 z-20 -mx-3 px-3 border-b border-blue-900/30">
          <motion.button 
            onClick={() => setSelectedTask(null)}
            className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
          </motion.button>
          <h2 className="text-[15px] font-semibold text-white flex-1">Detalle de tarea</h2>
          <motion.button
            className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <MoreVertical className="w-4 h-4 text-blue-400" />
          </motion.button>
        </div>
        
        {/* Tarjeta principal de la tarea */}
        <div className="bg-blue-900/30 rounded-xl p-4 backdrop-blur-sm border border-blue-900/30 shadow-sm">
          {/* Cabecera con título y etiqueta de prioridad */}
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-[16px] font-semibold text-white">{selectedTask.title}</h3>
            <div className={`text-[10px] px-3 py-1 rounded-full ${
              selectedTask.priority === 'alta' 
                ? 'bg-red-500/30 text-red-300' 
                : selectedTask.priority === 'media'
                  ? 'bg-amber-500/30 text-amber-300'
                  : 'bg-blue-500/30 text-blue-300'
            }`}>
              {selectedTask.priority === 'alta' ? 'Prioritaria' : selectedTask.priority === 'media' ? 'Media' : 'Baja'}
            </div>
          </div>
          
          {/* Detalles de la tarea en forma de chips - característica típica de Material Design */}
          <div className="flex flex-wrap gap-2 mb-5">
            <div className={`flex items-center px-2 py-1 rounded-full text-[10px] font-medium ${
              selectedTask.status === 'completada' 
                ? 'bg-emerald-500/30 text-emerald-300' 
                : selectedTask.status === 'en_progreso'
                  ? 'bg-blue-500/30 text-blue-300'
                  : 'bg-zinc-500/30 text-zinc-300'
            }`}>
              <div className="w-2 h-2 rounded-full bg-current mr-1"></div>
              {selectedTask.status === 'completada' ? 'Completada' : 
               selectedTask.status === 'en_progreso' ? 'En progreso' : 'Pendiente'}
            </div>
            
            <div className="flex items-center bg-blue-800/30 text-blue-300 px-2 py-1 rounded-full text-[10px] font-medium">
              <Calendar className="w-3 h-3 mr-1" />
              {selectedTask.dueDate}
            </div>
            
            <div className="flex items-center bg-blue-800/30 text-blue-300 px-2 py-1 rounded-full text-[10px] font-medium">
              <Users className="w-3 h-3 mr-1" />
              {selectedTask.assignee}
            </div>
          </div>
          
          {/* Descripción de la tarea */}
          <div className="space-y-3">
            <div>
              <h4 className="text-[13px] font-medium text-white mb-2">Descripción</h4>
              <p className="text-[11px] leading-relaxed text-zinc-300">
                {selectedTask.description || "Esta tarea requiere atención para mantener el funcionamiento óptimo del sistema. Se debe verificar todos los elementos y registrar cualquier inconsistencia."}
              </p>
            </div>
            
            {/* Lista de subtareas - característica común en apps de productividad */}
            <div className="mt-4">
              <h4 className="text-[13px] font-medium text-white mb-2">Subtareas</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-blue-400/50 flex-shrink-0"></div>
                  <span className="text-[11px] text-zinc-300">Revisar la documentación</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-blue-400/50 flex-shrink-0 bg-blue-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
                  </div>
                  <span className="text-[11px] text-zinc-300 line-through opacity-70">Preparar informe preliminar</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded border border-blue-400/50 flex-shrink-0"></div>
                  <span className="text-[11px] text-zinc-300">Contactar con el equipo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sección de comentarios - característica común en apps de tareas */}
        <div className="bg-blue-900/20 rounded-xl p-3 backdrop-blur-sm border border-blue-900/30">
          <h4 className="text-[13px] font-medium text-white mb-3">Comentarios</h4>
          <div className="space-y-3 mb-3">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                <span className="text-[10px] text-blue-300 font-medium">M</span>
              </div>
              <div className="flex-1 bg-blue-900/40 rounded-lg p-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-medium text-white">María G.</span>
                  <span className="text-[8px] text-zinc-400">Ayer 14:30</span>
                </div>
                <p className="text-[10px] text-zinc-300">Necesitamos revisar el estado con el cliente antes de continuar.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] text-blue-300 font-medium">T</span>
            </div>
            <motion.div 
              className="flex-1 bg-blue-900/20 rounded-lg border border-blue-900/30 px-2 py-1.5 touch-pulse"
              whileHover={{ backgroundColor: "rgba(30, 58, 138, 0.15)", borderColor: "rgba(30, 58, 138, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-[10px] text-zinc-400">Añadir comentario...</span>
            </motion.div>
          </div>
        </div>
        
        {/* Botones de acción con efecto ripple */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <motion.button 
            className="bg-blue-600 rounded-lg py-2.5 text-[12px] text-white font-medium shadow-sm relative overflow-hidden touch-pulse"
            whileHover={{ scale: 1.03, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-white/20 rounded-lg origin-center scale-0 opacity-70 hover:animate-ripple"></span>
            <span className="relative z-10">Marcar como completada</span>
          </motion.button>
          <motion.button 
            className="bg-blue-900/50 border border-blue-800/50 rounded-lg py-2.5 text-[12px] text-blue-300 font-medium relative overflow-hidden touch-pulse"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(30, 58, 138, 0.6)" }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-blue-400/10 rounded-lg origin-center scale-0 opacity-70 hover:animate-ripple"></span>
            <span className="relative z-10">Reasignar tarea</span>
          </motion.button>
        </div>
      </div>
    )
  }
  
  // Renderizar lista de tareas con Material Design
  const renderTasks = () => (
    <div className="space-y-4 pb-16">
      {/* Cabecera con título y botón de nueva tarea */}
      <div className="flex justify-between items-center sticky top-0 bg-zinc-950/90 backdrop-blur-md py-2 z-20 px-2.5 border-b border-blue-900/30 mx-[-10px]">
        <div className="flex items-center gap-1.5">
          <motion.button 
            onClick={() => setCurrentSection("dashboard")}
            className="w-7 h-7 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-3.5 h-3.5 text-blue-400" />
          </motion.button>
          <h2 className="text-[14px] font-semibold text-white">Todas las tareas</h2>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.button
            className="w-7 h-7 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-3.5 h-3.5 text-blue-400" />
          </motion.button>
          <motion.button
            className="w-7 h-7 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-3.5 h-3.5 text-blue-400" />
          </motion.button>
        </div>
      </div>
      
      {/* Pestañas de filtro - característica típica de Material Design */}
      <div className="flex overflow-x-auto gap-2 pb-1 scrollbar-hide relative">
        {['Todas', 'Pendientes', 'En progreso', 'Completadas'].map((tab, index) => (
          <motion.div 
            key={tab}
            className={`flex items-center px-3 py-1.5 rounded-full text-[11px] font-medium touch-pulse ${
              index === 0 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-900/30 text-blue-300'
            }`}
            whileHover={{ backgroundColor: index === 0 ? "#2563eb" : "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{tab}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Lista de tareas con tarjetas de estilo Material */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + (0.1 * index) }}
            className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30 touch-pulse active:bg-blue-900/40"
            onClick={() => setSelectedTask(task)}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 58, 138, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    task.status === 'completada' 
                      ? 'bg-emerald-500' 
                      : task.status === 'en_progreso'
                        ? 'bg-blue-500'
                        : 'bg-zinc-500'
                  }`}></div>
                  <h3 className="text-[13px] font-medium text-white">{task.title}</h3>
                </div>
                <p className="text-[10px] text-zinc-400 mt-1 ml-4.5 line-clamp-1">
                  {task.description}
                </p>
                <div className="flex items-center mt-2 gap-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 text-blue-400 mr-1" />
                    <span className="text-[9px] text-blue-300">{task.dueDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 text-blue-400 mr-1" />
                    <span className="text-[9px] text-blue-300">{task.assignee}</span>
                  </div>
                </div>
              </div>
              <div className={`text-[9px] px-2.5 py-1 rounded-full ml-2 flex-shrink-0 ${
                task.priority === 'alta' 
                  ? 'bg-red-500/30 text-red-300' 
                  : task.priority === 'media'
                    ? 'bg-amber-500/30 text-amber-300'
                    : 'bg-blue-500/30 text-blue-300'
              }`}>
                {task.priority === 'alta' ? 'Prioritaria' : task.priority === 'media' ? 'Media' : 'Baja'}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
  
  // Renderizar inventario con Material Design
  const renderInventory = () => (
    <div className="space-y-3 pb-16">
      {/* Cabecera con navegación y acciones */}
      <div className="flex justify-between items-center sticky top-0 bg-zinc-950/90 backdrop-blur-md py-2 z-20 -mx-2.5 px-2.5 border-b border-blue-900/30">
        <div className="flex items-center gap-1.5">
          <motion.button 
            onClick={() => setCurrentSection("dashboard")}
            className="w-7 h-7 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-3.5 h-3.5 text-blue-400" />
          </motion.button>
          <h2 className="text-[14px] font-semibold text-white">Inventario</h2>
        </div>
        <div className="flex items-center gap-1.5">
          <motion.button
            className="w-7 h-7 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-3.5 h-3.5 text-blue-400" />
          </motion.button>
          <motion.button
            className="w-7 h-7 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-3.5 h-3.5 text-blue-400" />
          </motion.button>
        </div>
      </div>
      
      {/* Selector de vista: Lista/Cuadrícula */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-[12px] font-medium text-white">Productos ({products.length})</h3>
        <div className="flex bg-blue-900/40 rounded-lg overflow-hidden">
          <button className="flex items-center justify-center p-1 bg-blue-600 w-7 h-7">
            <List className="w-3.5 h-3.5 text-white" />
          </button>
          <button className="flex items-center justify-center p-1 w-7 h-7">
            <Grid className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>
      </div>
      
      {/* Pestañas de categoría - Material Design Tabs */}
      <div className="flex overflow-x-auto gap-1.5 pb-1 scrollbar-hide relative">
        {['Todos', 'Computación', 'Periféricos', 'Accesorios'].map((category, index) => (
          <motion.div 
            key={category}
            className={`flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium touch-pulse ${
              index === 0 
                ? 'bg-blue-600 text-white' 
                : 'bg-blue-900/30 text-blue-300'
            }`}
            whileHover={{ backgroundColor: index === 0 ? "#2563eb" : "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{category}</span>
          </motion.div>
        ))}
      </div>
      
      {/* Lista de productos */}
      <div className="space-y-2">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="bg-blue-900/30 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30 shadow-sm touch-pulse active:bg-blue-900/40"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex gap-2.5">
              {/* Imagen de producto (simulada con color) */}
              <div className={`w-10 h-10 rounded-lg flex-shrink-0 ${
                product.category === 'Computación' ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30' :
                product.category === 'Accesorios' ? 'bg-gradient-to-br from-emerald-500/30 to-blue-500/30' :
                product.category === 'Periféricos' ? 'bg-gradient-to-br from-amber-500/30 to-red-500/30' :
                'bg-gradient-to-br from-blue-500/30 to-emerald-500/30'
              } flex items-center justify-center border border-blue-800/30`}>
                <Package className="w-5 h-5 text-blue-300/70" />
              </div>
              
              {/* Detalles del producto */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div className="min-w-0 pr-1">
                    <h3 className="text-[12px] font-medium text-white truncate">{product.name}</h3>
                    <div className="text-[11px] font-semibold text-blue-300">{product.price}</div>
                  </div>
                  <div className={`text-[8px] px-2 py-0.5 rounded-full flex-shrink-0 ${
                    product.status === 'en_stock' 
                      ? 'bg-emerald-500/30 text-emerald-300' 
                      : product.status === 'bajo_stock'
                        ? 'bg-amber-500/30 text-amber-300'
                        : 'bg-red-500/30 text-red-300'
                  }`}>
                    {product.status === 'en_stock' ? 'En stock' : 
                     product.status === 'bajo_stock' ? 'Stock bajo' : 'Sin stock'}
                  </div>
                </div>
                
                <div className="flex items-center mt-1.5 justify-between">
                  <div className="flex items-center">
                    <Package className="w-2.5 h-2.5 text-blue-400 mr-0.5" />
                    <span className="text-[9px] text-blue-300">{product.quantity} unidades</span>
                  </div>
                  
                  <div className="flex gap-1.5">
                    <motion.button 
                      className="flex items-center justify-center bg-blue-900/40 rounded-lg px-2 py-0.5 text-[8px] text-blue-300 min-w-[42px] max-w-[50px] truncate"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Actualizar
                    </motion.button>
                    <motion.button 
                      className="flex items-center justify-center bg-blue-900/40 rounded-lg px-2 py-0.5 text-[8px] text-blue-300 min-w-[42px] max-w-[50px] truncate"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver detalle
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
  
  // Renderizar pantalla de clientes
  const renderClients = () => (
    <div className="space-y-4 pb-16">
      {/* Cabecera con navegación y acciones */}
      <div className="flex justify-between items-center sticky top-0 bg-zinc-950/90 backdrop-blur-md py-2 z-20 -mx-3 px-3 border-b border-blue-900/30">
        <div className="flex items-center gap-2">
          <motion.button 
            onClick={() => setCurrentSection("dashboard")}
            className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
          </motion.button>
          <h2 className="text-[15px] font-semibold text-white">Clientes</h2>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-4 h-4 text-blue-400" />
          </motion.button>
          <motion.button
            className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-4 h-4 text-blue-400" />
          </motion.button>
        </div>
      </div>
      
      {/* Lista de clientes - Material Design 3 */}
      <div className="grid gap-2">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="bg-blue-900/20 rounded-lg p-2.5 backdrop-blur-sm border border-blue-900/30 shadow-sm touch-pulse"
            whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 58, 138, 0.25)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex gap-2.5">
              {/* Avatar del cliente */}
              <div className="w-9 h-9 rounded-full bg-blue-800/40 flex items-center justify-center flex-shrink-0 border border-blue-800/40">
                <span className="text-[12px] text-blue-300 font-medium">{client.name.charAt(0)}</span>
              </div>
              
              {/* Detalles del cliente */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-[12px] font-medium text-white truncate pr-1">{client.name}</h3>
                  <div className={`text-[8px] px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                    client.type === 'premium' 
                      ? 'bg-blue-500/30 text-blue-300' 
                      : 'bg-zinc-500/30 text-zinc-300'
                  }`}>
                    {client.type === 'premium' ? 'Premium' : 'Standard'}
                  </div>
                </div>
                
                <div className="text-[9px] text-zinc-400 truncate">{client.email}</div>
                
                <div className="flex items-center mt-1.5 justify-between">
                  <div className="flex items-center">
                    <Calendar className="w-2.5 h-2.5 text-blue-400 mr-0.5" />
                    <span className="text-[8px] text-blue-300">{client.lastPurchase}</span>
                  </div>
                  
                  <div className="flex gap-1">
                    <motion.button 
                      className="flex items-center justify-center bg-blue-900/40 rounded-md px-1.5 py-0.5 text-[8px] text-blue-300 w-14 truncate"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver perfil
                    </motion.button>
                    <motion.button 
                      className="flex items-center justify-center bg-blue-900/40 rounded-md px-1.5 py-0.5 text-[8px] text-blue-300 w-14 truncate"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.6)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contactar
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
  
  // Renderizar pantalla de ventas
  const renderSales = () => (
    <div className="space-y-4 pb-16">
      {/* Cabecera con navegación y acciones */}
      <div className="flex justify-between items-center sticky top-0 bg-zinc-950/90 backdrop-blur-md py-2 z-20 -mx-3 px-3 border-b border-blue-900/30">
        <div className="flex items-center gap-2">
          <motion.button 
            onClick={() => setCurrentSection("dashboard")}
            className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 text-blue-400" />
          </motion.button>
          <h2 className="text-[15px] font-semibold text-white">Registro de ventas</h2>
        </div>
        <div className="flex items-center gap-2">
          <motion.button
            className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-4 h-4 text-blue-400" />
          </motion.button>
          <motion.button
            className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-4 h-4 text-blue-400" />
          </motion.button>
        </div>
      </div>
      
      {/* Lista de ventas - Material Design 3 */}
      <div className="grid gap-2">
        {sales.map((sale, index) => (
          <motion.div
            key={sale.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="bg-blue-900/20 rounded-lg p-2.5 backdrop-blur-sm border border-blue-900/30 shadow-sm touch-pulse"
            whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 58, 138, 0.25)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex gap-2.5">
              {/* Icono de venta */}
              <div className="w-9 h-9 rounded-lg bg-blue-800/40 flex items-center justify-center flex-shrink-0 border border-blue-800/40">
                <ShoppingCart className="w-4 h-4 text-blue-300" />
              </div>
              
              {/* Detalles de la venta */}
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <h3 className="text-[12px] font-medium text-white truncate pr-1">Venta {sale.id}</h3>
                  <div className="text-[11px] font-medium text-blue-300">{sale.amount}</div>
                </div>
                
                <div className="text-[9px] text-zinc-400 truncate">{sale.client}</div>
                
                <div className="flex items-center mt-1.5 justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Calendar className="w-2.5 h-2.5 text-blue-400 mr-0.5" />
                      <span className="text-[8px] text-blue-300">{sale.date}</span>
                    </div>
                    {sale.items && (
                      <div className="flex items-center">
                        <Package className="w-2.5 h-2.5 text-blue-400 mr-0.5" />
                        <span className="text-[8px] text-blue-300">{sale.items} items</span>
                      </div>
                    )}
                  </div>
                  
                  <motion.button 
                    className="flex items-center justify-center bg-blue-900/40 rounded-md px-1.5 py-0.5 text-[8px] text-blue-300 w-14 truncate"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 58, 138, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver detalles
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
  
  // Render contenido basado en la sección actual
  const renderContent = () => {
    if (selectedTask) {
      return renderTaskDetail();
    }
    
    switch(currentSection) {
      case "dashboard":
        return renderDashboard();
      case "tasks":
        return renderTasks();
      case "inventory":
        return renderInventory();
      case "clients":
        return renderClients();
      case "sales":
        return renderSales();
      case "reports":
        return (
          <div className="flex flex-col items-center justify-center h-80">
            <BarChart2 className="w-16 h-16 text-blue-800/50 mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Reportes y Análisis</h3>
            <p className="text-sm text-zinc-400 text-center">Esta sección está en desarrollo.</p>
          </div>
        );
      case "settings":
        return (
          <div className="flex flex-col items-center justify-center h-80">
            <Settings className="w-16 h-16 text-blue-800/50 mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">Configuración</h3>
            <p className="text-sm text-zinc-400 text-center">Esta sección está en desarrollo.</p>
          </div>
        );
      default:
        return renderDashboard();
    }
  }
  
  // Determinar si mostrar el botón flotante según la sección actual
  const renderFAB = () => {
    // No mostrar FAB en detalle de tarea
    if (selectedTask) return null;
    
    // Configurar el icono y la acción del FAB según la sección
    let icon = <Plus className="w-5 h-5 text-white" />;
    let tooltip = "";
    
    switch(currentSection) {
      case "dashboard":
        icon = <Plus className="w-5 h-5 text-white" />;
        tooltip = "Nueva tarea";
        break;
      case "inventory":
        icon = <Plus className="w-5 h-5 text-white" />;
        tooltip = "Nuevo producto";
        break;
      case "clients":
        icon = <Plus className="w-5 h-5 text-white" />;
        tooltip = "Nuevo cliente";
        break;
      case "sales":
        icon = <Plus className="w-5 h-5 text-white" />;
        tooltip = "Nueva venta";
        break;
      case "tasks":
        icon = <Plus className="w-5 h-5 text-white" />;
        tooltip = "Nueva tarea";
        break;
      default:
        return null;
    }
    
    // Configurar la acción del FAB según la sección
    const handleFABClick = () => {
      console.log(`Acción FAB para sección: ${currentSection} - ${tooltip}`);
      // Aquí iría la lógica específica para cada sección
    };
    
    return (
      <div className="absolute bottom-16 right-2.5 z-30">
        {/* Tooltip del FAB */}
        <div className="absolute right-14 top-2.5 bg-blue-900/80 px-2 py-1 rounded text-[10px] text-white opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
          {tooltip}
        </div>
        
        {/* Botón FAB con efecto ripple de Material Design */}
        <motion.div
          className="w-11 h-11 rounded-full bg-blue-600 shadow-lg shadow-blue-900/30 flex items-center justify-center overflow-hidden group touch-pulse"
          whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
          whileTap={{ scale: 0.92 }}
          onClick={handleFABClick}
        >
          {/* Efecto ripple de Material Design */}
          <span className="absolute inset-0 bg-white/20 rounded-full origin-center scale-0 opacity-70 hover:animate-ripple"></span>
          {icon}
        </motion.div>
      </div>
    );
  };
  
  // Estilos CSS para animación de ripple de Material Design
  const rippleStyles = `
    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 0.7;
      }
      100% {
        transform: scale(2.5);
        opacity: 0;
      }
    }
    .animate-ripple {
      animation: ripple 0.8s ease-out;
    }
  `;
  
  useEffect(() => {
    // Agregar estilos globales incluyendo efectos de ripple
    const styleElement = document.createElement('style');
    styleElement.textContent = globalStyles + rippleStyles;
    document.head.appendChild(styleElement);
    
    // Limpiar al desmontar
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  // Renderizar el dashboard principal con Material Design
  const renderDashboard = () => (
    <div className="space-y-3.5 pb-16">
      {/* Encabezado del dashboard */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-[14px] font-medium text-white">Resumen general</h2>
        <div className="flex items-center space-x-1.5">
          <span className="text-[10px] text-blue-400">{currentDate}</span>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-blue-950/50"
          >
            <Filter className="w-3 h-3 text-blue-400" />
          </motion.div>
        </div>
      </div>
      
      {/* Tarjetas de KPIs con estilo Material Design */}
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {kpis.map((kpi, index) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="bg-blue-900/30 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30 shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            <div className={`text-[8px] px-1.5 py-0.5 rounded-full mb-1 inline-block ${
              kpi.trend === 'up' 
                ? 'bg-emerald-500/30 text-emerald-300' 
                : 'bg-red-500/30 text-red-300'
            }`}>
              {kpi.change}
            </div>
            <div className="space-y-0.5">
              <div className="text-[14px] font-semibold text-white">{kpi.value}</div>
              <div className="text-[8px] text-blue-300 uppercase tracking-wide">{kpi.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Actividades recientes con estilo Material Design */}
      <div className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30 shadow-sm mb-3">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-[12px] font-medium text-white flex items-center">
            <Clock className="w-3 h-3 mr-1 text-blue-400" strokeWidth={2.5} />
            Actividad reciente
          </h3>
          <span className="text-[8px] text-blue-400 flex items-center">
            Ver todo <ChevronRight className="w-2.5 h-2.5" />
          </span>
        </div>
        
        <div className="space-y-2">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + (0.1 * index) }}
              className="flex items-start gap-1.5 pb-1.5 border-b border-blue-900/20 last:border-0 last:pb-0"
            >
              <div className="w-6 h-6 rounded-full bg-blue-800/30 flex items-center justify-center mt-0.5">
                {activity.type === "venta" && 
                  <DollarSign className="w-3 h-3 text-blue-300" strokeWidth={2} />}
                {activity.type === "cliente" && 
                  <Users className="w-3 h-3 text-blue-300" strokeWidth={2} />}
                {activity.type === "inventario" && 
                  <Package className="w-3 h-3 text-blue-300" strokeWidth={2} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <p className="text-[10px] font-medium text-white line-clamp-1 pr-1">{activity.description}</p>
                  {activity.amount && (
                    <span className="text-[9px] font-medium text-blue-300 flex-shrink-0">{activity.amount}</span>
                  )}
                </div>
                <div className="flex justify-between mt-0.5">
                  <span className="text-[8px] text-zinc-400">{activity.time}</span>
                  {activity.client && (
                    <span className="text-[8px] text-blue-400">{activity.client}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Tareas pendientes con estilo Material Design */}
      <div className="space-y-1.5 mb-3">
        <div className="flex justify-between items-center">
          <h3 className="text-[12px] font-medium text-white flex items-center">
            <Clipboard className="w-3 h-3 mr-1 text-blue-400" strokeWidth={2.5} />
            Tareas pendientes
          </h3>
          <span onClick={() => setCurrentSection("tasks")} className="text-[8px] text-blue-400 flex items-center cursor-pointer">
            Ver todo <ChevronRight className="w-2.5 h-2.5" />
          </span>
        </div>
        
        <div className="space-y-1.5">
          {tasks
            .filter(task => task.status !== 'completada')
            .slice(0, 2)
            .map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + (0.1 * index) }}
                className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30 touch-pulse active:bg-blue-900/40"
                onClick={() => setSelectedTask(task)}
                whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 58, 138, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[11px] font-medium text-white truncate pr-1">{task.title}</h4>
                    <div className="flex items-center mt-1 gap-2">
                      <Calendar className="w-2.5 h-2.5 text-blue-400 mr-0.5" />
                      <span className="text-[8px] text-blue-300">{task.dueDate}</span>
                    </div>
                  </div>
                  <div className={`text-[7px] px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                    task.priority === 'alta' 
                      ? 'bg-red-500/30 text-red-300' 
                      : task.priority === 'media'
                        ? 'bg-amber-500/30 text-amber-300'
                        : 'bg-blue-500/30 text-blue-300'
                  }`}>
                    {task.priority === 'alta' ? 'Prioritaria' : task.priority === 'media' ? 'Media' : 'Baja'}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
      
      {/* Alertas de inventario con diseño de Material Design 3 */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-[12px] font-medium text-white flex items-center">
            <AlertCircle className="w-3 h-3 mr-1 text-blue-400" strokeWidth={2.5} />
            Alertas de inventario
          </h3>
          <motion.span 
            onClick={() => setCurrentSection("inventory")} 
            className="text-[9px] text-blue-400 flex items-center cursor-pointer touch-pulse"
            whileTap={{ scale: 0.95 }}
          >
            Ver inventario <ChevronRight className="w-2.5 h-2.5" />
          </motion.span>
        </div>
        
        <div className="space-y-1.5">
          {products
            .filter(product => product.status !== 'en_stock')
            .slice(0, 2)
            .map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + (0.1 * index) }}
                className="bg-blue-900/20 rounded-lg p-2 backdrop-blur-sm border border-blue-900/30 touch-pulse"
                whileHover={{ scale: 1.01, backgroundColor: "rgba(30, 58, 138, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex gap-2 items-center">
                  {/* Icono del producto */}
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 ${
                    product.category === 'Computación' ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30' :
                    product.category === 'Accesorios' ? 'bg-gradient-to-br from-emerald-500/30 to-blue-500/30' :
                    'bg-gradient-to-br from-amber-500/30 to-red-500/30'
                  } flex items-center justify-center border border-blue-800/30`}>
                    <Package className="w-4 h-4 text-blue-300/70" />
                  </div>
                  
                  {/* Detalles del producto */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <h4 className="text-[11px] font-medium text-white truncate pr-1">{product.name}</h4>
                      <div className={`text-[8px] ml-1 px-1.5 py-0.5 rounded-full flex-shrink-0 ${
                        product.status === 'sin_stock' 
                          ? 'bg-red-500/30 text-red-300' 
                          : 'bg-amber-500/30 text-amber-300'
                      }`}>
                        {product.status === 'sin_stock' ? 'Sin stock' : 'Stock bajo'}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-0.5">
                      <span className="text-[9px] font-medium text-blue-300">{product.price}</span>
                      <span className="text-[8px] text-zinc-400">{product.quantity} unidades</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )

  return (
    <motion.div
      {...phoneAnimation}
      className="relative h-[400px] sm:h-[450px] md:h-[500px] w-full flex items-center justify-center transform-gpu"
    >
      {/* Fondo de gradiente para el teléfono */}
      <div className="absolute -z-10 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] bg-gradient-to-r from-blue-700/20 to-blue-900/20 rounded-full blur-3xl"></div>
      
      <div className="h-[400px] sm:h-[450px] md:h-[520px] w-[200px] sm:w-[225px] md:w-[260px] mx-auto">
        <div className="relative h-full w-full overflow-hidden rounded-[35px] shadow-lg will-change-transform">
          <div className="absolute inset-0 rounded-[35px] shadow-[0_0_15px_rgba(0,0,0,0.2),0_0_30px_rgba(0,0,0,0.1)] -z-10"></div>
          
          {/* Carcasa del teléfono */}
          <div className="absolute inset-0 rounded-[35px] bg-gradient-to-br from-zinc-600 via-zinc-800 to-zinc-900 overflow-hidden shadow-inner">
            {/* Pantalla interior */}
            <div className="absolute inset-[2px] rounded-[32px] bg-zinc-900 overflow-hidden shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 overflow-hidden">
                {/* Efectos visuales de pantalla */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-zinc-800 opacity-20"></div>
                
                {/* Barra de estado */}
                <div className="absolute top-0 inset-x-0 h-7 px-5 flex justify-between items-center text-white z-20 bg-zinc-950/80 backdrop-blur-sm">
                  <span className="text-xs font-medium tracking-wide">{currentTime}</span>
                  <div className="flex items-center space-x-2">
                    <BellRing className="h-3 w-3 text-white" strokeWidth={2.5} />
                    <Wifi className="h-3 w-3 text-white" strokeWidth={2.5} />
                    <div className="relative w-7 h-3">
                      <div className="absolute inset-0 border border-white rounded-sm"></div>
                      <div className="absolute inset-y-0 left-0.5 right-1 bg-white rounded-sm"></div>
                      <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Cámara y sensores */}
                <div className="absolute top-[14px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full overflow-hidden z-20">
                  <div className="absolute inset-0 rounded-full ring-1 ring-zinc-800 bg-black/70"></div>
                  <div className="absolute inset-[0.1rem] rounded-full bg-zinc-900"></div>
                  <div className="absolute top-[10%] right-[10%] w-[30%] h-[30%] bg-white opacity-30 rounded-full"></div>
                </div>
                <div className="absolute top-[12px] right-[38%] w-1 h-1 rounded-full bg-zinc-800 opacity-70 z-20"></div>
                <div className="absolute top-[14px] w-6 h-1 rounded-full bg-zinc-800 left-1/2 transform -translate-x-1/2 translate-y-[-4px] z-20"></div>
                
                {/* Contenido principal de la aplicación */}
                <div className="absolute top-0 inset-x-0 bottom-14 pt-7 overflow-y-auto overflow-x-hidden scrollbar-hide">
                  {/* Área de contenido dinámico basado en la sección actual */}
                  <div className="px-2.5 py-2 z-10">
                    {renderContent()}
                  </div>
                </div>
                
                {/* Botón flotante (FAB) */}
                {renderFAB()}
                
                {/* Barra de navegación inferior - Material Design */}
                <div className="absolute bottom-0 inset-x-0 h-14 bg-blue-950/70 backdrop-blur-md border-t border-blue-900/40 flex justify-around items-center px-2 z-50">
                  {menuItems.slice(0, 3).map((item, index) => (
                    <motion.div 
                      key={item.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9, opacity: 0.8 }}
                      className={`flex flex-col items-center justify-center h-10 px-1.5 touch-pulse ${
                        currentSection === item.id 
                          ? 'text-blue-300' 
                          : 'text-blue-800'
                      }`}
                      onClick={() => setCurrentSection(item.id)}
                    >
                      <div className="relative">
                        {currentSection === item.id && (
                          <motion.div 
                            className="absolute -inset-1 bg-blue-500/10 rounded-full"
                            layoutId="navIndicator"
                            transition={{ type: "spring", duration: 0.5 }}
                          />
                        )}
                        <item.icon className="h-4.5 w-4.5 relative z-10" strokeWidth={2.2} />
                      </div>
                      <span className="text-[7px] mt-0.5 font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9, opacity: 0.8 }}
                    className="flex flex-col items-center justify-center h-10 px-1.5 text-blue-800 touch-pulse"
                    onClick={() => setShowAppMenu(!showAppMenu)}
                  >
                    <Menu className="h-4.5 w-4.5" strokeWidth={2.2} />
                    <span className="text-[7px] mt-0.5 font-medium">Más</span>
                  </motion.div>
                </div>
                
                {/* Menú desplegable para más opciones */}
                {showAppMenu && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-14 inset-x-2 bg-blue-950/90 backdrop-blur-md rounded-t-xl border-t border-l border-r border-blue-900/30 z-40 overflow-hidden shadow-xl"
                  >
                    <div className="grid grid-cols-3 gap-1.5 p-2.5">
                      {menuItems.slice(3).map((item) => (
                        <motion.div
                          key={item.id}
                          whileHover={{ scale: 1.03, backgroundColor: "rgba(30, 58, 138, 0.6)" }}
                          whileTap={{ scale: 0.97 }}
                          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-lg ${
                            currentSection === item.id
                              ? 'bg-blue-700/40 text-blue-300' 
                              : 'bg-blue-900/30 text-blue-500'
                          }`}
                          onClick={() => {
                            setCurrentSection(item.id);
                            setShowAppMenu(false);
                          }}
                        >
                          <item.icon className="h-4 w-4" strokeWidth={2} />
                          <span className="text-[7px] mt-0.5 font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="py-1.5 px-2.5 border-t border-blue-900/30">
                      <motion.button
                        whileHover={{ backgroundColor: "rgba(30, 58, 138, 0.6)" }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-1.5 text-[10px] text-blue-400 text-center rounded-lg font-medium"
                        onClick={() => setShowAppMenu(false)}
                      >
                        Cerrar
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="absolute inset-0 rounded-[35px] bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none"></div>
          </div>

          {/* Botones físicos */}
          <motion.div 
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.4 }}
            className="absolute right-[-1.5px] top-[80px] h-8 w-[3px] overflow-visible"
          >
            <div className="absolute inset-0 bg-zinc-500 shadow-md"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-600 to-zinc-500"></div>
            <div className="absolute inset-y-0 left-0 w-[1px] bg-zinc-400"></div>
            <div className="absolute inset-y-0 right-0 w-[1px] bg-zinc-700"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.5 }}
            className="absolute right-[-1.5px] top-[95px] h-8 w-[3px] overflow-visible"
          >
            <div className="absolute inset-0 bg-zinc-500 shadow-md"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-600 to-zinc-500"></div>
            <div className="absolute inset-y-0 left-0 w-[1px] bg-zinc-400"></div>
            <div className="absolute inset-y-0 right-0 w-[1px] bg-zinc-700"></div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.6 }}
            className="absolute right-[-1.5px] top-[140px] h-10 w-[3px] overflow-visible"
          >
            <div className="absolute inset-0 bg-zinc-500 shadow-md"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-600 to-zinc-500"></div>
            <div className="absolute inset-y-0 left-0 w-[1px] bg-zinc-400"></div>
            <div className="absolute inset-y-0 right-0 w-[1px] bg-zinc-700"></div>
          </motion.div>
          
          {/* Botón Home */}
          <div className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2 w-10 h-3 rounded-md">
            <div className="absolute inset-0 bg-zinc-900 rounded-md border border-zinc-800"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-1.5 bg-zinc-800 rounded-sm"></div>
          </div>
          
          {/* Reflejos y sombras */}
          <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-white/5 to-transparent rounded-t-[35px] pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-black/20 to-transparent rounded-b-[35px] pointer-events-none"></div>
        </div>
      </div>
    </motion.div>
  )
} 