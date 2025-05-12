import { memo, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  BellRing, Wifi, Calendar, BarChart2, Clipboard, Package, 
  TrendingUp, Users, ArrowLeft, ChevronRight, ChevronLeft, Menu, MessageCircle, 
  Search, ShoppingCart, Settings, DollarSign, AlertCircle, Sun,
  MoreVertical, FileText, PieChart, List, Grid, Clock, Filter, Plus, User, Home,
  Bell, Shield, Globe, Database, RefreshCw, HelpCircle, LucideIcon
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

// Mejora: Precarga de iconos frecuentemente usados para evitar renderizaciones durante la navegación
const preloadedIcons = {
  home: Home,
  package: Package,
  user: User,
  shopping: ShoppingCart,
  chart: BarChart2,
  settings: Settings
};

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

// Mejora: Función de utilidad memoizada para cálculos pesados
const calculateSalesTotal = (sales: Sale[]): number => {
  return sales.reduce((sum: number, sale: Sale) => sum + parseFloat(sale.amount.replace('$', '').replace(',', '')), 0);
};

// Definir la interfaz de props para AndroidPhone
export interface AndroidPhoneProps {
  colorVariation?: number;
}

// Componente principal con optimización para memorización
const AndroidPhone = memo(({ colorVariation = 0 }: AndroidPhoneProps) => {
  // Estados iniciales optimizados para reducir renderizaciones
  const [currentTime, setCurrentTime] = useState(() => getCurrentTime())
  const [currentDate, setCurrentDate] = useState(() => getCurrentDate())
  const [currentSection, setCurrentSection] = useState("dashboard")
  const [selectedTask, setSelectedTask] = useState(null)
  const [showAppMenu, setShowAppMenu] = useState(false)
  
  // Estados para la secuencia de encendido - inicialmente apagado
  const [phoneState, setPhoneState] = useState<'off' | 'booting' | 'on'>('off')
  const [initialRender, setInitialRender] = useState(true)
  
  // Optimización: Datos inicializados en useRef para evitar rerenderizaciones
  const tasksRef = useRef([
    { id: 1, title: "Revisar inventario", status: "en_progreso", dueDate: "Hoy", priority: "alta", assignee: "Juan", description: "Verificar stock de los productos de la categoría electrónica" },
    { id: 2, title: "Reunión con proveedores", status: "pendiente", dueDate: "Mañana", priority: "media", assignee: "María", description: "Negociar nuevos términos de contrato con proveedores principales" },
    { id: 3, title: "Actualizar catálogo", status: "completada", dueDate: "Ayer", priority: "baja", assignee: "Carlos", description: "Actualizar precios y características de productos nuevos" },
    { id: 4, title: "Enviar facturas", status: "pendiente", dueDate: "25 Ene", priority: "alta", assignee: "Ana", description: "Enviar facturas pendientes a clientes corporativos" }
  ]);

  const productsRef = useRef([
    {
      id: 1,
      name: "Monitor 27\" Ultra",
      price: "$349.99",
      status: "en_stock",
      quantity: 24,
      category: "Computación"
    },
    {
      id: 2,
      name: "Teclado mecánico",
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
    }
  ]);

  const clientsRef = useRef([
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
    }
  ]);

  const salesRef = useRef([
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
    }
  ]);

  // Mejora: Inicialización lazy de windowWidth
  const [windowWidth, setWindowWidth] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth : 640 // valor por defecto razonable
  );

  // Lista de elementos de menú para la navegación (memorizada)
  const menuItems = useMemo(() => [
    { id: "dashboard", label: "Inicio", icon: preloadedIcons.home },
    { id: "inventory", label: "Inventario", icon: preloadedIcons.package },
    { id: "clients", label: "Clientes", icon: preloadedIcons.user },
    { id: "sales", label: "Ventas", icon: preloadedIcons.shopping },
    { id: "reports", label: "Reportes", icon: preloadedIcons.chart },
    { id: "settings", label: "Ajustes", icon: preloadedIcons.settings }
  ], []);

  // Efecto para simular la secuencia de encendido del teléfono
  useEffect(() => {
    // Marcamos que ya no es el renderizado inicial
    setInitialRender(false)
    
    // Secuencia de arranque
    const bootTimer = setTimeout(() => {
      // Después de 800ms mostramos el logo de Android (cargando)
      setPhoneState('booting');
      
      // Después de 2.5s mostramos la interfaz completa
      const onTimer = setTimeout(() => {
        setPhoneState('on');
      }, 2500);
      
      return () => clearTimeout(onTimer);
    }, 800);
    
    return () => clearTimeout(bootTimer);
  }, []);

  // Mejora: Optimización de actualización de tiempo para reducir re-renderizados
  useEffect(() => {
    let isMounted = true;
    
    const updateTime = () => {
      if (!isMounted) return;
      
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }))
      
      // Solo actualiza la fecha si realmente cambió
      const newDate = now.toLocaleDateString('es-ES', { 
        weekday: 'short', month: 'short', day: 'numeric' 
      });
      
      if (newDate !== currentDate) {
        setCurrentDate(newDate);
      }
    }
    
    updateTime()
    const interval = setInterval(updateTime, 60000) // 1 minuto
    
    return () => {
      isMounted = false;
      clearInterval(interval)
    }
  }, [currentDate]);

  // Detectar tamaño de pantalla con throttling mejorado
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let isMounted = true;
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
    
    const handleResize = () => {
      if (!isMounted) return;
      
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      
      resizeTimeout = setTimeout(() => {
        if (isMounted && window.innerWidth !== windowWidth) {
          setWindowWidth(window.innerWidth);
        }
      }, 150); // Throttling de 150ms
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      isMounted = false;
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  // Mejora: Optimización de la adición de estilos globales una sola vez con ID único
  useEffect(() => {
    const styleId = 'androidphone-global-styles-v1'; // ID versión para evitar conflictos
    const existingStyle = document.getElementById(styleId);
    
    if (existingStyle) return;
    
    // Agregar estilos globales si no existen
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = globalStyles;
    document.head.appendChild(styleElement);
    
    // Limpiar al desmontar
    return () => {
      const styleToRemove = document.getElementById(styleId);
      if (styleToRemove) {
        document.head.removeChild(styleToRemove);
      }
    };
  }, []);

  // Calcular dimensiones del teléfono según el tamaño de pantalla (memoizado)
  const dimensions = useMemo(() => {
    // Mejora: Cálculo simplificado basado en rangos de tamaño
    if (windowWidth < 375) {
      return {
        height: 'h-[520px]',
        width: 'w-[260px]',
        mainContainerClass: 'h-[520px] w-[260px]',
        innerContainerClass: 'h-[516px] w-[256px]',
        roundedClass: 'rounded-[28px]',
        innerRoundedClass: 'rounded-[25px]',
        statusBarHeight: 'h-8',
        navBarHeight: 'h-16',
        fontSize: {
          statusBar: 'text-[10px]',
          normal: 'text-[11px]',
          title: 'text-[14px]',
          nav: 'text-[9px]'
        },
        iconSize: 'h-4 w-4',
        contentPadding: 'px-3 py-3',
        contentPaddingTop: 'pt-12'
      };
    }
    else if (windowWidth < 640) {
      return {
        height: 'h-[580px]',
        width: 'w-[280px]',
        mainContainerClass: 'h-[580px] w-[280px]',
        innerContainerClass: 'h-[576px] w-[276px]',
        roundedClass: 'rounded-[30px]',
        innerRoundedClass: 'rounded-[27px]',
        statusBarHeight: 'h-8',
        navBarHeight: 'h-16',
        fontSize: {
          statusBar: 'text-[11px]',
          normal: 'text-[12px]',
          title: 'text-[15px]',
          nav: 'text-[9px]'
        },
        iconSize: 'h-4.5 w-4.5',
        contentPadding: 'px-3 py-3',
        contentPaddingTop: 'pt-12'
      };
    }
    else {
      return {
        height: 'h-[620px]',
        width: 'w-[300px]',
        mainContainerClass: 'h-[620px] w-[300px]',
        innerContainerClass: 'h-[616px] w-[296px]',
        roundedClass: 'rounded-[32px]',
        innerRoundedClass: 'rounded-[29px]',
        statusBarHeight: 'h-8',
        navBarHeight: 'h-16',
        fontSize: {
          statusBar: 'text-[12px]',
          normal: 'text-[13px]',
          title: 'text-[16px]',
          nav: 'text-[10px]'
        },
        iconSize: 'h-5 w-5',
        contentPadding: 'px-3 py-3',
        contentPaddingTop: 'pt-12'
      };
    }
  }, [windowWidth]);

  // Mejora: Optimización de cálculos con funciones de utilidad
  const getProductsInStock = useCallback(() => 
    productsRef.current.filter(p => p.status === 'en_stock').length, 
  []);
  
  const getProductsLowStock = useCallback(() => 
    productsRef.current.filter(p => p.status !== 'en_stock').length, 
  []);
  
  const getPremiumClients = useCallback(() => 
    clientsRef.current.filter(c => c.type === 'premium').length, 
  []);

  const filteredProducts = useCallback(() => {
    return productsRef.current.filter(product => product.status !== 'en_stock').slice(0, 2);
  }, []);

  const pendingTasks = useCallback(() => {
    return tasksRef.current.filter(task => task.status !== 'completada').slice(0, 2);
  }, []);

  // Mejora: Calculamos totales de ventas de manera optimizada
  const salesTotal = useMemo(() => {
    return calculateSalesTotal(salesRef.current).toLocaleString(undefined, 
      {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }, []);
  
  const salesAverage = useMemo(() => {
    const total = calculateSalesTotal(salesRef.current);
    return (total / salesRef.current.length).toLocaleString(undefined, 
      {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }, []);

  // Animación para el teléfono
  const phoneAnimation = useMemo(() => ({
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        duration: 0.6, // Reducida para mejor rendimiento
        delay: 0.2,    // Reducida para mejor rendimiento
        ease: [0.23, 1, 0.32, 1] 
      } 
    }
  }), []);

  // Animación para el logo de Android
  const logoAnimation = useMemo(() => ({
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      } 
    },
    exit: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }), []);

  // Animación para la interfaz interna (contenido de la pantalla)
  const screenContentAnimation = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      } 
    }
  }), []);

  // Optimizar la función de tiempo - no hay necesidad de recrearla en cada renderizado
  function getCurrentTime(): string {
    return new Date().toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  function getCurrentDate(): string {
    return new Date().toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  // Optimizar la navegación con useCallback
  const handleSectionChange = useCallback((sectionId: string) => {
    if (currentSection === sectionId) return; // No hacer nada si ya estamos en esa sección
    setCurrentSection(sectionId);
    setShowAppMenu(false);
  }, [currentSection]);

  return (
    <motion.div
      {...phoneAnimation}
      className="relative h-auto min-h-[600px] md:min-h-[680px] w-full flex items-center justify-center py-8 md:py-12 transform-gpu will-change-transform contain-layout"
      initial={{ opacity: 1 }} // Comenzar con opacidad completa para mostrar el teléfono de inmediato
    >
      {/* Fondo de gradiente para el teléfono */}
      <div className="absolute -z-10 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] bg-gradient-to-r from-blue-700/20 to-blue-900/20 rounded-full blur-3xl"></div>
      
      <div className={`${dimensions.mainContainerClass} mx-auto relative scale-[1.15] sm:scale-100`}>
        <div className={`relative h-full w-full overflow-hidden ${dimensions.roundedClass} shadow-lg will-change-transform`}>
          <div className={`absolute inset-0 ${dimensions.roundedClass} shadow-[0_0_15px_rgba(0,0,0,0.2),0_0_30px_rgba(0,0,0,0.1)] -z-10`}></div>
          
          {/* Carcasa del teléfono */}
          <div className={`absolute inset-0 ${dimensions.roundedClass} bg-gradient-to-br from-zinc-600 via-zinc-800 to-zinc-900 overflow-hidden shadow-inner`}>
            {/* Pantalla interior */}
            <div className={`absolute inset-[2px] ${dimensions.innerRoundedClass} bg-zinc-900 overflow-hidden shadow-[inset_0_0_5px_rgba(0,0,0,0.5)]`}>
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 overflow-hidden">
                {/* Pantalla negra - siempre visible primero */}
                <div 
                  className="absolute inset-0 bg-black z-[999]" 
                  style={{
                    opacity: phoneState === 'off' || initialRender ? 1 : 0,
                    visibility: phoneState === 'off' || initialRender ? 'visible' : 'hidden',
                    transition: 'opacity 0.3s ease-out, visibility 0.3s ease-out'
                  }}
                />
                
                {/* Efectos visuales de pantalla - debajo de la pantalla negra */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-zinc-800 opacity-20"></div>
                
                {/* Pantalla de arranque con logo de Android */}
                <AnimatePresence>
                  {phoneState === 'booting' && (
                    <motion.div 
                      {...logoAnimation}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-black z-30"
                    >
                      {/* Logo de Android */}
                      <div className="relative w-16 h-16 md:w-20 md:h-20">
                        {/* Cabeza */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 rounded-full">
                          {/* Antenas */}
                          <div className="absolute top-0 left-1/4 w-1 h-3 bg-green-500 origin-bottom rotate-[-25deg] rounded-full"></div>
                          <div className="absolute top-0 right-1/4 w-1 h-3 bg-green-500 origin-bottom rotate-[25deg] rounded-full"></div>
                          
                          {/* Ojos */}
                          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
                          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        
                        {/* Cuerpo */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-12 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-b-2xl"></div>
                        
                        {/* Brazos */}
                        <div className="absolute top-1/2 left-0 w-2 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full"></div>
                        <div className="absolute top-1/2 right-0 w-2 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full"></div>
                        
                        {/* Piernas */}
                        <div className="absolute bottom-0 left-1/3 w-2 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full"></div>
                        <div className="absolute bottom-0 right-1/3 w-2 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full"></div>
                      </div>
                      
                      {/* Texto Android */}
                      <div className="mt-4 text-green-500 font-medium tracking-wide text-lg">Android</div>
                      
                      {/* Spinner de carga */}
                      <div className="mt-6 flex space-x-2">
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1], 
                            opacity: [0.3, 1, 0.3] 
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.2,
                            delay: 0 
                          }}
                          className="w-2 h-2 bg-green-500 rounded-full" 
                        />
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1], 
                            opacity: [0.3, 1, 0.3] 
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.2,
                            delay: 0.2 
                          }}
                          className="w-2 h-2 bg-green-500 rounded-full" 
                        />
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1], 
                            opacity: [0.3, 1, 0.3] 
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1.2,
                            delay: 0.4 
                          }}
                          className="w-2 h-2 bg-green-500 rounded-full" 
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Contenido de la app - visible solo cuando el teléfono está "encendido" */}
                <AnimatePresence>
                  {phoneState === 'on' && (
                    <motion.div 
                      {...screenContentAnimation}
                      className="absolute inset-0"
                    >
                      {/* Barra de estado */}
                      <div className={`absolute top-0 inset-x-0 ${dimensions.statusBarHeight} px-4 flex justify-between items-center text-white z-20 bg-zinc-950/80 backdrop-blur-sm`}>
                        <span className={`${dimensions.fontSize.statusBar} font-medium tracking-wide`}>{currentTime}</span>
                        <div className="flex items-center space-x-2">
                          <BellRing className={`${windowWidth < 375 ? 'h-2.5 w-2.5' : 'h-3 w-3'} text-white`} strokeWidth={2.5} />
                          <Wifi className={`${windowWidth < 375 ? 'h-2.5 w-2.5' : 'h-3 w-3'} text-white`} strokeWidth={2.5} />
                          <div className={`relative ${windowWidth < 375 ? 'w-5 h-2' : 'w-6 h-2.5'}`}>
                            <div className="absolute inset-0 border border-white rounded-sm"></div>
                            <div className="absolute inset-y-0 left-0.5 right-1 bg-white rounded-sm"></div>
                            <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-0.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      {/* Cámara y sensores */}
                      <div className="absolute top-[12px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full overflow-hidden z-20">
                        <div className="absolute inset-0 rounded-full ring-1 ring-zinc-800 bg-black/70"></div>
                        <div className="absolute inset-[0.1rem] rounded-full bg-zinc-900"></div>
                      </div>
                      <div className="absolute top-[10px] w-5 h-1 rounded-full bg-zinc-800 left-1/2 transform -translate-x-1/2 -translate-y-0.5 z-20"></div>
                      
                      {/* Contenido principal de la aplicación */}
                      <div className={`absolute top-0 inset-x-0 bottom-0 pt-8 pb-16 overflow-y-auto overflow-x-hidden scrollbar-hide`}>
                        {/* Área de contenido dinámico basado en la sección actual */}
                        <div className={`${dimensions.contentPadding} z-10 pb-8`}>
                          {currentSection === "dashboard" && (
                            <div className="space-y-3">
                              {/* KPIs */}
                              <div className="grid grid-cols-3 gap-1.5 mb-3">
                                <div className="bg-blue-900/30 rounded-xl p-2 backdrop-blur-sm border border-blue-900/30">
                                  <div className="text-[8px] px-1.5 py-0.5 rounded-full mb-1 inline-block bg-emerald-500/30 text-emerald-300">+12.5%</div>
                                  <div className="space-y-0.5">
                                    <div className={`${dimensions.fontSize.title} font-semibold text-white`}>$12,458</div>
                                    <div className="text-[8px] text-blue-300 uppercase tracking-wide">VENTAS</div>
                                  </div>
                                </div>
                                <div className="bg-blue-900/30 rounded-xl p-2 backdrop-blur-sm border border-blue-900/30">
                                  <div className="text-[8px] px-1.5 py-0.5 rounded-full mb-1 inline-block bg-emerald-500/30 text-emerald-300">+8.2%</div>
                                  <div className="space-y-0.5">
                                    <div className={`${dimensions.fontSize.title} font-semibold text-white`}>124</div>
                                    <div className="text-[8px] text-blue-300 uppercase tracking-wide">CLIENTES</div>
                                  </div>
                                </div>
                                <div className="bg-blue-900/30 rounded-xl p-2 backdrop-blur-sm border border-blue-900/30">
                                  <div className="text-[8px] px-1.5 py-0.5 rounded-full mb-1 inline-block bg-red-500/30 text-red-300">-2.4%</div>
                                  <div className="space-y-0.5">
                                    <div className={`${dimensions.fontSize.title} font-semibold text-white`}>43</div>
                                    <div className="text-[8px] text-blue-300 uppercase tracking-wide">PEDIDOS</div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Actividad reciente */}
                              <div className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30 mb-3">
                                <div className="flex justify-between items-center mb-2">
                                  <div className={`${dimensions.fontSize.normal} font-medium text-white flex items-center`}>
                                    Actividad reciente
                                  </div>
                                  <span className="text-[9px] text-blue-400">Ver todo</span>
                                </div>
                                
                                <div className="flex items-start gap-2 py-1.5 border-b border-blue-900/20">
                                  <div className="w-6 h-6 rounded-full bg-blue-800/30 flex items-center justify-center mt-0.5">
                                    <DollarSign className="w-3 h-3 text-blue-300" strokeWidth={2} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                      <p className="text-[10px] font-medium text-white line-clamp-1 pr-1">Venta #1234 completada</p>
                                      <span className="text-[9px] font-medium text-blue-300">$1,234</span>
                                    </div>
                                    <div className="flex justify-between mt-0.5">
                                      <span className="text-[8px] text-zinc-400">Hace 5 min</span>
                                      <span className="text-[8px] text-blue-400">Juan Pérez</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex items-start gap-2 py-1.5">
                                  <div className="w-6 h-6 rounded-full bg-blue-800/30 flex items-center justify-center mt-0.5">
                                    <Users className="w-3 h-3 text-blue-300" strokeWidth={2} />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-medium text-white line-clamp-1">Nuevo cliente registrado</p>
                                    <div className="flex justify-between mt-0.5">
                                      <span className="text-[8px] text-zinc-400">Hace 15 min</span>
                                      <span className="text-[8px] text-blue-400">María García</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Agregar botón flotante */}
                              <div className="absolute right-3 bottom-3 z-20">
                                <div className="w-10 h-10 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
                                  <Plus className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            </div>
                          )}

                          {currentSection === "inventory" && (
                            <div className="space-y-3">
                              {/* Encabezado de Inventario */}
                              <div className="flex justify-between items-center mb-2">
                                <div className={`${dimensions.fontSize.title} font-semibold text-white`}>
                                  Inventario
                                </div>
                                <div className="flex space-x-1.5">
                                  <div className="bg-blue-900/30 rounded-full p-1">
                                    <Search className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                  </div>
                                  <div className="bg-blue-900/30 rounded-full p-1">
                                    <Filter className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                  </div>
                                </div>
                              </div>
                              
                              {/* Estadísticas de inventario */}
                              <div className="grid grid-cols-2 gap-1.5 mb-2">
                                <div className="bg-blue-900/30 rounded-lg p-2 backdrop-blur-sm border border-blue-900/30">
                                  <div className="flex items-center justify-between">
                                    <div className="w-7 h-7 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                      <Package className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2} />
                                    </div>
                                    <div className="text-right">
                                      <div className={`${dimensions.fontSize.title} font-semibold text-white`}>{getProductsInStock()}</div>
                                      <div className="text-[8px] text-blue-300">En stock</div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="bg-blue-900/30 rounded-lg p-2 backdrop-blur-sm border border-blue-900/30">
                                  <div className="flex items-center justify-between">
                                    <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center">
                                      <AlertCircle className="w-3.5 h-3.5 text-red-400" strokeWidth={2} />
                                    </div>
                                    <div className="text-right">
                                      <div className={`${dimensions.fontSize.title} font-semibold text-white`}>{getProductsLowStock()}</div>
                                      <div className="text-[8px] text-blue-300">Bajo stock</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Lista de productos */}
                              <div className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30">
                                <div className="flex justify-between items-center mb-2">
                                  <div className={`${dimensions.fontSize.normal} font-medium text-white flex items-center gap-1`}>
                                    <Package className="w-3.5 h-3.5" strokeWidth={2} />
                                    Productos
                                  </div>
                                  <div className="flex space-x-1.5">
                                    <div className="bg-blue-900/30 rounded-full p-0.5">
                                      <List className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                    </div>
                                    <div className="bg-blue-900/30 rounded-full p-0.5">
                                      <Grid className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Productos individuales */}
                                {productsRef.current.map((product, index) => (
                                  <div 
                                    key={product.id}
                                    className={`flex items-center gap-2 py-2 ${
                                      index < productsRef.current.length - 1 ? 'border-b border-blue-900/20' : ''
                                    }`}
                                  >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                      product.status === 'en_stock' 
                                        ? 'bg-emerald-500/20' 
                                        : product.status === 'bajo_stock' 
                                          ? 'bg-amber-500/20' 
                                          : 'bg-red-500/20'
                                    }`}>
                                      <Package className="w-4 h-4 text-blue-300" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-start">
                                        <p className="text-[11px] font-medium text-white truncate pr-2">{product.name}</p>
                                        <span className="text-[10px] font-medium text-blue-300">{product.price}</span>
                                      </div>
                                      <div className="flex justify-between mt-0.5">
                                        <span className="text-[8px] text-zinc-400">{product.category}</span>
                                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${
                                          product.status === 'en_stock' 
                                            ? 'bg-emerald-500/30 text-emerald-300' 
                                            : product.status === 'bajo_stock' 
                                              ? 'bg-amber-500/30 text-amber-300' 
                                              : 'bg-red-500/30 text-red-300'
                                        }`}>
                                          {product.status === 'en_stock' 
                                            ? `Stock: ${product.quantity}` 
                                            : product.status === 'bajo_stock' 
                                              ? `¡Sólo ${product.quantity}!` 
                                              : 'Sin stock'}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Agregar botón flotante */}
                              <div className="absolute right-3 bottom-3 z-20">
                                <div className="w-10 h-10 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
                                  <Plus className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            </div>
                          )}

                          {currentSection === "clients" && (
                            <div className="space-y-3">
                              {/* Encabezado de Clientes */}
                              <div className="flex justify-between items-center mb-4 mt-2">
                                <div className={`${dimensions.fontSize.title} font-semibold text-white`}>
                                  Clientes
                                </div>
                                <div className="flex space-x-1.5">
                                  <div className="bg-blue-900/30 rounded-full p-1">
                                    <Search className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                  </div>
                                  <div className="bg-blue-900/30 rounded-full p-1">
                                    <Filter className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                  </div>
                                </div>
                              </div>
                              
                              {/* Estadísticas de clientes */}
                              <div className="grid grid-cols-2 gap-2 mb-4">
                                <div className="bg-blue-900/30 rounded-lg p-2.5 backdrop-blur-sm border border-blue-900/30">
                                  <div className="flex items-center justify-between">
                                    <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center">
                                      <Users className="w-3.5 h-3.5 text-blue-400" strokeWidth={2} />
                                    </div>
                                    <div className="text-right">
                                      <div className={`${dimensions.fontSize.title} font-semibold text-white`}>{getPremiumClients()}</div>
                                      <div className="text-[8px] text-blue-300">Total clientes</div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="bg-blue-900/30 rounded-lg p-2.5 backdrop-blur-sm border border-blue-900/30">
                                  <div className="flex items-center justify-between">
                                    <div className="w-7 h-7 rounded-full bg-purple-500/20 flex items-center justify-center">
                                      <User className="w-3.5 h-3.5 text-purple-400" strokeWidth={2} />
                                    </div>
                                    <div className="text-right">
                                      <div className={`${dimensions.fontSize.title} font-semibold text-white`}>{getPremiumClients()}</div>
                                      <div className="text-[8px] text-blue-300">Premium</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Lista de clientes */}
                              <div className="bg-blue-900/20 rounded-xl p-3 backdrop-blur-sm border border-blue-900/30 mb-4">
                                <div className="flex justify-between items-center mb-3">
                                  <div className={`${dimensions.fontSize.normal} font-medium text-white flex items-center gap-1`}>
                                    <Users className="w-3.5 h-3.5" strokeWidth={2} />
                                    Listado de clientes
                                  </div>
                                  <span className="text-[9px] text-blue-400">Ver todos</span>
                                </div>
                                
                                {/* Clientes individuales */}
                                {clientsRef.current.map((client, index) => (
                                  <div 
                                    key={client.id}
                                    className={`flex items-center gap-2 py-2 ${
                                      index < clientsRef.current.length - 1 ? 'border-b border-blue-900/20' : ''
                                    }`}
                                  >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                      client.type === 'premium' 
                                        ? 'bg-purple-500/20 text-purple-300'
                                        : 'bg-blue-500/20 text-blue-300'
                                    }`}>
                                      <span className="text-[11px] font-bold">
                                        {client.name.split(' ').map(n => n[0]).join('')}
                                      </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-start">
                                        <p className="text-[11px] font-medium text-white truncate pr-2">{client.name}</p>
                                        <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${
                                          client.type === 'premium' 
                                            ? 'bg-purple-500/30 text-purple-300'
                                            : 'bg-blue-500/30 text-blue-300'
                                        }`}>
                                          {client.type === 'premium' ? 'Premium' : 'Estándar'}
                                        </span>
                                      </div>
                                      <div className="flex justify-between mt-0.5">
                                        <span className="text-[8px] text-zinc-400 truncate pr-2">{client.email}</span>
                                        <span className="text-[8px] text-blue-400 whitespace-nowrap">
                                          <Clock className="inline-block w-2 h-2 mr-0.5" />
                                          Última: {client.lastPurchase}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Últimas ventas/actividad de clientes */}
                              <div className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30">
                                <div className="flex justify-between items-center mb-2">
                                  <div className={`${dimensions.fontSize.normal} font-medium text-white flex items-center gap-1`}>
                                    <ShoppingCart className="w-3.5 h-3.5" strokeWidth={2} />
                                    Últimas ventas
                                  </div>
                                  <span className="text-[9px] text-blue-400">Ver todas</span>
                                </div>
                                
                                {salesRef.current.slice(0, 2).map((sale, index) => (
                                  <div 
                                    key={sale.id}
                                    className={`flex items-start gap-2 py-1.5 ${
                                      index < 1 ? 'border-b border-blue-900/20' : ''
                                    }`}
                                  >
                                    <div className="w-6 h-6 rounded-full bg-blue-800/30 flex items-center justify-center mt-0.5">
                                      <DollarSign className="w-3 h-3 text-blue-300" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-start">
                                        <p className="text-[10px] font-medium text-white line-clamp-1 pr-1">
                                          {sale.id} - {sale.client}
                                        </p>
                                        <span className="text-[9px] font-medium text-blue-300">{sale.amount}</span>
                                      </div>
                                      <div className="flex justify-between mt-0.5">
                                        <span className="text-[8px] text-zinc-400">{sale.date}</span>
                                        <span className="text-[8px] text-emerald-400">
                                          {sale.items && `${sale.items} productos`}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Agregar botón flotante */}
                              <div className="absolute right-3 bottom-3 z-20">
                                <div className="w-10 h-10 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
                                  <Plus className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            </div>
                          )}

                          {currentSection === "sales" && (
                            <div className="space-y-3">
                              {/* Encabezado de Ventas */}
                              <div className="flex justify-between items-center mb-2">
                                <div className={`${dimensions.fontSize.title} font-semibold text-white`}>
                                  Ventas
                                </div>
                                <div className="flex space-x-1.5">
                                  <div className="bg-blue-900/30 rounded-full p-1">
                                    <Search className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                  </div>
                                  <div className="bg-blue-900/30 rounded-full p-1">
                                    <Filter className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                  </div>
                                </div>
                              </div>
                              
                              {/* Estadísticas de ventas */}
                              <div className="grid grid-cols-3 gap-1.5 mb-2">
                                <div className="bg-blue-900/30 rounded-lg p-2 backdrop-blur-sm border border-blue-900/30">
                                  <div className="flex flex-col items-center justify-center">
                                    <div className={`${dimensions.fontSize.title} font-semibold text-white`}>
                                      {salesTotal}
                                    </div>
                                    <div className="text-[8px] text-blue-300 uppercase tracking-wide">TOTAL</div>
                                  </div>
                                </div>
                                
                                <div className="bg-blue-900/30 rounded-lg p-2 backdrop-blur-sm border border-blue-900/30">
                                  <div className="flex flex-col items-center justify-center">
                                    <div className={`${dimensions.fontSize.title} font-semibold text-white`}>{salesRef.current.length}</div>
                                    <div className="text-[8px] text-blue-300 uppercase tracking-wide">PEDIDOS</div>
                                  </div>
                                </div>
                                
                                <div className="bg-blue-900/30 rounded-lg p-2 backdrop-blur-sm border border-blue-900/30">
                                  <div className="flex flex-col items-center justify-center">
                                    <div className={`${dimensions.fontSize.title} font-semibold text-white`}>
                                      {salesAverage}
                                    </div>
                                    <div className="text-[8px] text-blue-300 uppercase tracking-wide">PROMEDIO</div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Lista de ventas recientes */}
                              <div className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30">
                                <div className="flex justify-between items-center mb-2">
                                  <div className={`${dimensions.fontSize.normal} font-medium text-white flex items-center gap-1`}>
                                    <ShoppingCart className="w-3.5 h-3.5" strokeWidth={2} />
                                    Ventas recientes
                                  </div>
                                  <div className="flex space-x-1.5">
                                    <div className="bg-blue-900/30 rounded-full p-0.5">
                                      <Calendar className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                    </div>
                                    <div className="bg-blue-900/30 rounded-full p-0.5">
                                      <FileText className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Ventas individuales */}
                                {salesRef.current.map((sale, index) => (
                                  <div 
                                    key={sale.id}
                                    className={`flex items-center gap-2 py-2 ${
                                      index < salesRef.current.length - 1 ? 'border-b border-blue-900/20' : ''
                                    }`}
                                  >
                                    <div className="w-8 h-8 rounded-lg bg-blue-800/30 flex items-center justify-center">
                                      <ShoppingCart className="w-4 h-4 text-blue-300" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-start">
                                        <p className="text-[11px] font-medium text-white truncate pr-2">{sale.id}</p>
                                        <span className="text-[10px] font-medium text-blue-300">{sale.amount}</span>
                                      </div>
                                      <div className="flex justify-between mt-0.5">
                                        <span className="text-[8px] text-zinc-400">{sale.client}</span>
                                        <div className="flex items-center">
                                          <span className={`text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 mr-1`}>
                                            {sale.status}
                                          </span>
                                          <span className="text-[8px] text-blue-400">{sale.date}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Resumen por cliente */}
                              <div className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30">
                                <div className="flex justify-between items-center mb-2">
                                  <div className={`${dimensions.fontSize.normal} font-medium text-white flex items-center gap-1`}>
                                    <Users className="w-3.5 h-3.5" strokeWidth={2} />
                                    Ventas por cliente
                                  </div>
                                  <span className="text-[9px] text-blue-400">Ver detalles</span>
                                </div>
                                
                                {clientsRef.current.slice(0, 2).map((client, index) => {
                                  const clientSales = salesRef.current.filter(sale => sale.client === client.name);
                                  const totalAmount = clientSales.reduce((sum, sale) => 
                                    sum + parseFloat(sale.amount.replace('$', '').replace(',', '')), 0);
                                    
                                  return (
                                    <div 
                                      key={client.id}
                                      className={`flex items-center gap-2 py-2 ${
                                        index < clientsRef.current.slice(0, 2).length - 1 ? 'border-b border-blue-900/20' : ''
                                      }`}
                                    >
                                      <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-500/20">
                                        <span className="text-[11px] font-bold text-blue-300">
                                          {client.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start">
                                          <p className="text-[11px] font-medium text-white truncate pr-2">{client.name}</p>
                                          <span className="text-[10px] font-medium text-blue-300">
                                            ${totalAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                          </span>
                                        </div>
                                        <div className="flex justify-between mt-0.5">
                                          <span className="text-[8px] text-zinc-400">{clientSales.length} compras</span>
                                          <span className="text-[8px] text-blue-400">Última: {client.lastPurchase}</span>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              
                              {/* Agregar botón flotante */}
                              <div className="absolute right-3 bottom-3 z-20">
                                <div className="w-10 h-10 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
                                  <Plus className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            </div>
                          )}

                          {currentSection === "reports" && (
                            <div className="space-y-3">
                              {/* Encabezado de Reportes */}
                              <div className="flex justify-between items-center mb-2">
                                <div className={`${dimensions.fontSize.title} font-semibold text-white`}>
                                  Reportes
                                </div>
                                <div className="flex space-x-1.5">
                                  <div className="bg-blue-900/30 rounded-full p-1">
                                    <Calendar className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                  </div>
                                  <div className="bg-blue-900/30 rounded-full p-1">
                                    <FileText className="w-3 h-3 text-blue-300" strokeWidth={2.2} />
                                  </div>
                                </div>
                              </div>
                              
                              {/* Filtro de periodo */}
                              <div className="flex bg-blue-900/30 rounded-lg p-1.5 backdrop-blur-sm border border-blue-900/30 justify-between mb-2">
                                <div className="flex items-center">
                                  <ChevronLeft className="w-3.5 h-3.5 text-blue-300 mr-1" strokeWidth={2.5} />
                                  <div className="text-[10px] text-white font-medium">Enero 2024</div>
                                  <ChevronRight className="w-3.5 h-3.5 text-blue-300 ml-1" strokeWidth={2.5} />
                                </div>
                                <div className="text-[10px] text-blue-300 font-medium">Mensual</div>
                              </div>
                              
                              {/* Gráfico de ventas (simplificado) */}
                              <div className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30 mb-3">
                                <div className="flex justify-between items-center mb-2">
                                  <div className={`${dimensions.fontSize.normal} font-medium text-white flex items-center gap-1`}>
                                    <BarChart2 className="w-3.5 h-3.5" strokeWidth={2} />
                                    Ventas mensuales
                                  </div>
                                  <span className="text-[9px] text-blue-400">Ver más</span>
                                </div>
                                
                                {/* Gráfico simplificado */}
                                <div className="h-20 flex items-end justify-between px-1 mt-2">
                                  {[0.3, 0.5, 0.7, 0.4, 0.6, 0.8, 0.9, 0.75, 0.65, 0.85, 0.95, 0.7].map((height, index) => (
                                    <div key={index} className="flex flex-col items-center">
                                      <div 
                                        className={`w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm ${
                                          index === 0 ? 'opacity-70' : ''
                                        }`} 
                                        style={{ height: `${height * 100}%` }}
                                      ></div>
                                      <div className="text-[6px] text-zinc-400 mt-1">{index + 1}</div>
                                    </div>
                                  ))}
                                </div>
                                <div className="flex justify-between mt-2">
                                  <div className="text-[8px] text-zinc-400">$ 8,500</div>
                                  <div className="text-[8px] text-emerald-400">+12.5% vs mes anterior</div>
                                </div>
                              </div>
                              
                              {/* Reportes disponibles */}
                              <div className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30">
                                <div className="flex justify-between items-center mb-2">
                                  <div className={`${dimensions.fontSize.normal} font-medium text-white flex items-center gap-1`}>
                                    <FileText className="w-3.5 h-3.5" strokeWidth={2} />
                                    Reportes disponibles
                                  </div>
                                  <span className="text-[9px] text-blue-400">Ver todos</span>
                                </div>
                                
                                {/* Lista de reportes */}
                                {[
                                  { id: 1, title: "Ventas por cliente", icon: Users, color: "bg-blue-500/20 text-blue-300" },
                                  { id: 2, title: "Inventario actual", icon: Package, color: "bg-emerald-500/20 text-emerald-300" },
                                  { id: 3, title: "Productos más vendidos", icon: TrendingUp, color: "bg-purple-500/20 text-purple-300" },
                                  { id: 4, title: "Desempeño financiero", icon: DollarSign, color: "bg-amber-500/20 text-amber-300" }
                                ].map((report, index) => (
                                  <div 
                                    key={report.id}
                                    className={`flex items-center gap-2 py-2 ${
                                      index < 3 ? 'border-b border-blue-900/20' : ''
                                    }`}
                                  >
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${report.color}`}>
                                      <report.icon className="w-4 h-4" strokeWidth={2} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex justify-between items-center">
                                        <p className="text-[11px] font-medium text-white">{report.title}</p>
                                        <ChevronRight className="w-3.5 h-3.5 text-blue-300" strokeWidth={2.5} />
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              {/* Distribución de ventas por categoría */}
                              <div className="bg-blue-900/20 rounded-xl p-2.5 backdrop-blur-sm border border-blue-900/30">
                                <div className="flex justify-between items-center mb-2">
                                  <div className={`${dimensions.fontSize.normal} font-medium text-white flex items-center gap-1`}>
                                    <PieChart className="w-3.5 h-3.5" strokeWidth={2} />
                                    Ventas por categoría
                                  </div>
                                </div>
                                
                                <div className="flex items-center mt-1">
                                  {/* Gráfico circular simplificado */}
                                  <div className="relative w-16 h-16 mr-2">
                                    <div className="absolute inset-0 rounded-full bg-blue-500/30 overflow-hidden">
                                      <div className="absolute top-0 left-0 w-1/2 h-full bg-purple-500/60" style={{ transform: 'rotate(0deg)' }}></div>
                                      <div className="absolute top-0 left-0 w-1/2 h-full bg-emerald-500/60" style={{ transform: 'rotate(130deg)' }}></div>
                                      <div className="absolute top-0 left-0 w-1/2 h-full bg-amber-500/60" style={{ transform: 'rotate(250deg)' }}></div>
                                      <div className="absolute inset-[3px] rounded-full bg-blue-950/80"></div>
                                    </div>
                                  </div>
                                  
                                  {/* Leyenda */}
                                  <div className="flex-1 flex flex-col gap-1">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                        <div className="w-2 h-2 bg-purple-500/60 rounded-sm mr-1"></div>
                                        <span className="text-[9px] text-white">Computación</span>
                                      </div>
                                      <span className="text-[9px] text-blue-300">45%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                        <div className="w-2 h-2 bg-emerald-500/60 rounded-sm mr-1"></div>
                                        <span className="text-[9px] text-white">Periféricos</span>
                                      </div>
                                      <span className="text-[9px] text-blue-300">35%</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                        <div className="w-2 h-2 bg-amber-500/60 rounded-sm mr-1"></div>
                                        <span className="text-[9px] text-white">Otros</span>
                                      </div>
                                      <span className="text-[9px] text-blue-300">20%</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Agregar botón flotante */}
                              <div className="absolute right-3 bottom-3 z-20">
                                <div className="w-10 h-10 bg-blue-600 rounded-full shadow-lg flex items-center justify-center">
                                  <Plus className="w-5 h-5 text-white" />
                                </div>
                              </div>
                            </div>
                          )}

                          {currentSection === "settings" && (
                            <div className="space-y-3">
                              {/* Encabezado de Ajustes */}
                              <div className="flex justify-between items-center mb-2">
                                <div className={`${dimensions.fontSize.title} font-semibold text-white`}>
                                  Ajustes
                                </div>
                              </div>
                              
                              {/* Perfil de usuario */}
                              <div className="bg-blue-900/20 rounded-xl p-3 backdrop-blur-sm border border-blue-900/30 mb-3 flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                                  <span className="text-[16px] font-bold text-white">JP</span>
                                </div>
                                <div className="flex-1">
                                  <div className={`${dimensions.fontSize.title} font-semibold text-white mb-0.5`}>Juan Pérez</div>
                                  <div className="text-[10px] text-blue-300">Administrador</div>
                                  <div className="text-[9px] text-zinc-400">juan.perez@empresa.com</div>
                                </div>
                                <div className="bg-blue-900/30 rounded-full p-1.5">
                                  <ArrowLeft className="w-4 h-4 text-blue-300" strokeWidth={2} />
                                </div>
                              </div>
                              
                              {/* Secciones de ajustes */}
                              <div className="bg-blue-900/20 rounded-xl overflow-hidden backdrop-blur-sm border border-blue-900/30">
                                {/* Sección de cuenta */}
                                <div className="p-2.5 border-b border-blue-900/30">
                                  <div className="text-[11px] font-medium text-blue-400 uppercase tracking-wide mb-2">
                                    Cuenta
                                  </div>
                                  
                                  {[
                                    { id: 1, icon: User, label: "Mi perfil", badge: "" },
                                    { id: 2, icon: Bell, label: "Notificaciones", badge: "3" },
                                    { id: 3, icon: Shield, label: "Seguridad", badge: "" }
                                  ].map((item) => (
                                    <div key={item.id} className="flex items-center justify-between py-2 border-b border-blue-900/20 last:border-b-0">
                                      <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-blue-900/40 flex items-center justify-center mr-2">
                                          <item.icon className="w-3 h-3 text-blue-300" strokeWidth={2} />
                                        </div>
                                        <span className="text-[10px] text-white">{item.label}</span>
                                      </div>
                                      <div className="flex items-center">
                                        {item.badge && (
                                          <div className="bg-blue-600 rounded-full w-4 h-4 flex items-center justify-center mr-1.5">
                                            <span className="text-[7px] text-white font-medium">{item.badge}</span>
                                          </div>
                                        )}
                                        <ChevronRight className="w-3.5 h-3.5 text-blue-300" strokeWidth={2.5} />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Sección de aplicación */}
                                <div className="p-2.5 border-b border-blue-900/30">
                                  <div className="text-[11px] font-medium text-blue-400 uppercase tracking-wide mb-2">
                                    Aplicación
                                  </div>
                                  
                                  {[
                                    { id: 1, icon: Sun, label: "Tema", value: "Oscuro" },
                                    { id: 2, icon: Globe, label: "Idioma", value: "Español" }
                                  ].map((item) => (
                                    <div key={item.id} className="flex items-center justify-between py-2 border-b border-blue-900/20 last:border-b-0">
                                      <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-blue-900/40 flex items-center justify-center mr-2">
                                          <item.icon className="w-3 h-3 text-blue-300" strokeWidth={2} />
                                        </div>
                                        <span className="text-[10px] text-white">{item.label}</span>
                                      </div>
                                      <div className="flex items-center">
                                        <span className="text-[9px] text-blue-300 mr-1">{item.value}</span>
                                        <ChevronRight className="w-3.5 h-3.5 text-blue-300" strokeWidth={2.5} />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Sección de sistema */}
                                <div className="p-2.5">
                                  <div className="text-[11px] font-medium text-blue-400 uppercase tracking-wide mb-2">
                                    Sistema
                                  </div>
                                  
                                  {[
                                    { id: 1, icon: Database, label: "Sincronizar datos", toggle: true },
                                    { id: 2, icon: RefreshCw, label: "Actualizaciones automáticas", toggle: true },
                                    { id: 3, icon: HelpCircle, label: "Ayuda y soporte", toggle: false }
                                  ].map((item) => (
                                    <div key={item.id} className="flex items-center justify-between py-2 border-b border-blue-900/20 last:border-b-0">
                                      <div className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-blue-900/40 flex items-center justify-center mr-2">
                                          <item.icon className="w-3 h-3 text-blue-300" strokeWidth={2} />
                                        </div>
                                        <span className="text-[10px] text-white">{item.label}</span>
                                      </div>
                                      {item.toggle ? (
                                        <div className="w-7 h-4 bg-blue-600 rounded-full relative flex items-center px-0.5">
                                          <div className="w-3 h-3 bg-white rounded-full absolute right-0.5"></div>
                                        </div>
                                      ) : (
                                        <ChevronRight className="w-3.5 h-3.5 text-blue-300" strokeWidth={2.5} />
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              {/* Versión de la aplicación */}
                              <div className="flex justify-center pt-2">
                                <span className="text-[9px] text-zinc-500">Versión 1.2.3</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {/* Barra de navegación - Restaurada */}
                      <div className={`absolute bottom-0 inset-x-0 ${dimensions.navBarHeight} flex justify-around items-center px-2 z-20 bg-zinc-950/90 backdrop-blur-sm border-t border-blue-900/30`}>
                        {menuItems.map((item) => (
                          <div 
                            key={item.id}
                            className={`flex flex-col items-center ${
                              currentSection === item.id 
                                ? 'text-blue-400' 
                                : 'text-zinc-500'
                            } touch-pulse`}
                            onClick={() => handleSectionChange(item.id)}
                          >
                            <item.icon 
                              className={`
                                ${dimensions.iconSize} mb-0.5
                                ${currentSection === item.id ? 'text-blue-400' : 'text-zinc-500'}
                              `} 
                              strokeWidth={2.2} 
                            />
                            <span className={`${dimensions.fontSize.nav} font-medium`}>
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className={`absolute inset-0 ${dimensions.roundedClass} bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none`}></div>
          </div>

          {/* Botones físicos */}
          <div className="absolute right-[-1.5px] top-[90px] h-8 w-[2px] bg-zinc-500"></div>
          <div className="absolute right-[-1.5px] top-[110px] h-8 w-[2px] bg-zinc-500"></div>
          
          {/* Botón Home */}
          <div className="absolute bottom-[6px] left-1/2 transform -translate-x-1/2 w-10 h-2.5 rounded-md">
            <div className="absolute inset-0 bg-zinc-900 rounded-md border border-zinc-800"></div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-1 bg-zinc-800 rounded-sm"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

// Para evitar problemas con las reglas de hooks de React
AndroidPhone.displayName = "AndroidPhone";

export default AndroidPhone; 