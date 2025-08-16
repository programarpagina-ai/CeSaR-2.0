// Base de conocimientos completa para CeSaR
// Este archivo contiene toda la información que el chatbot puede proporcionar

const KNOWLEDGE_BASE = [
  // Saludos y cortesía
  {
    keywords: ["hola", "hi", "hello", "holaa", "ola"],
    response: "¡Hola! 😊 Soy CeSaR, tu asistente virtual del Colegio Santísimo Rosario. ¿En qué puedo ayudarte hoy?",
    category: "saludos",
  },
  {
    keywords: ["buenos dias", "buen dia"],
    response:
      "¡Buenos días! ☀️ Es un placer saludarte. Soy CeSaR y estoy aquí para ayudarte con información sobre nuestro colegio.",
    category: "saludos",
  },
  {
    keywords: ["buenas tardes", "buena tarde"],
    response:
      "¡Buenas tardes! 🌅 ¿Cómo estás? Soy CeSaR, listo para ayudarte con cualquier consulta sobre el Colegio Santísimo Rosario.",
    category: "saludos",
  },
  {
    keywords: ["buenas noches", "buena noche"],
    response:
      "¡Buenas noches! 🌙 Aunque sea tarde, estoy aquí para ayudarte. ¿Qué necesitas saber sobre nuestro colegio?",
    category: "saludos",
  },
  {
    keywords: ["como estas", "que tal", "como andas"],
    response:
      "¡Muy bien, gracias por preguntar! 😊 Estoy funcionando perfectamente y listo para ayudarte con información sobre el Colegio Santísimo Rosario, Monteros o la comunidad dominica.",
    category: "saludos",
  },
  {
    keywords: ["gracias", "muchas gracias", "te agradezco"],
    response: "¡De nada! 😊 Es un placer ayudarte. Si tienes más preguntas sobre el colegio, no dudes en consultarme.",
    category: "saludos",
  },
  {
    keywords: ["adios", "hasta luego", "chau", "nos vemos"],
    response: "¡Hasta luego! 👋 Fue un gusto ayudarte. Que tengas un excelente día. ¡Vuelve pronto!",
    category: "saludos",
  },
  {
    keywords: ["perdon", "disculpa", "lo siento"],
    response:
      "No te preocupes, está todo bien 😊 Estoy aquí para ayudarte en lo que necesites. ¿En qué más puedo asistirte?",
    category: "saludos",
  },
  {
    keywords: ["por favor", "favor", "amablemente"],
    response: "¡Por supuesto! Con mucho gusto te ayudaré. ¿Qué información necesitas exactamente?",
    category: "saludos",
  },

  // Conocimiento sobre CeSaR
  {
    keywords: ["quien eres", "que eres", "cesar"],
    response:
      "Soy CeSaR, el asistente virtual del Colegio Santísimo Rosario. Mi nombre significa 'Colegio Santísimo Rosario' y estoy aquí para ayudarte con información sobre nuestro colegio, Monteros y la comunidad dominica.",
    category: "cesar",
  },
  {
    keywords: ["que sabes", "conocimiento", "informacion"],
    response:
      "Conozco información sobre el Colegio Santísimo Rosario (historia, niveles educativos, actividades), sobre Monteros (historia, cultura, tradiciones), y sobre la comunidad dominica (valores, tradiciones, espiritualidad). ¡Pregúntame lo que necesites!",
    category: "cesar",
  },
  {
    keywords: ["como funciona", "funcionamiento"],
    response:
      "Funciono analizando tus preguntas y buscando en mi base de conocimientos sobre el colegio, Monteros y la comunidad dominica. Si no encuentro información específica, te lo haré saber y te sugeriré reformular tu pregunta.",
    category: "cesar",
  },
  {
    keywords: ["creador", "quien te creo", "desarrollo"],
    response:
      "Fui desarrollado por un grupo de alumnos del Colegio Santisimo Rosario",
    category: "cesar",
  },
  {
    keywords: ["privacidad", "datos personales", "confidencialidad"],
    response:
      "Respeto tu privacidad. No almaceno datos personales ni información sensible de las conversaciones. Mi función es únicamente proporcionar información general sobre el colegio y temas relacionados.",
    category: "cesar",
    keywords: ["como enamorar a alguien"],
    response:
      "Sé tú mismo/a, escucha y muestra interés genuino. Crea momentos únicos, genera intriga, respeta su espacio y sé constante.",
    category: "cesar",
  },

  // Conocimiento sobre el Colegio Santísimo Rosario
  {
    keywords: ["colegio santisimo rosario", "colegio", "institucion", "escuela"],
    response:
      "El Colegio Santísimo Rosario es una institución educativa católica ubicada en Monteros, Tucumán, Argentina. Fundado por la Orden de Predicadores (Dominicos), ofrece educación integral desde nivel inicial hasta secundario, basada en los valores dominicos de verdad, contemplación y predicación.",
    category: "colegio",
  },
  {
    keywords: ["historia del colegio", "historia", "fundacion", "origen"],
    response:
      "Nuestro colegio fue fundado por los Padres Dominicos con la misión de brindar educación católica de calidad en Monteros. Desde sus inicios, ha sido un pilar fundamental en la formación de jóvenes bajo los valores cristianos y dominicos.",
    category: "colegio",
  },
  {
    keywords: ["niveles educativos", "niveles", "grados", "años"],
    response:
      "El Colegio Santísimo Rosario ofrece tres niveles educativos: Nivel Inicial (jardín de infantes), Nivel Primario (1° a 6° grado) y Nivel Secundario (1° a 6° año), brindando educación integral y continua.",
    category: "colegio",
  },
  {
    keywords: ["horarios", "horario", "clases", "tiempo"],
    response:
      "Los horarios varían según el nivel: Nivel Inicial de 8:00 a 12:00, Nivel Primario de 7:30 a 12:30, y Nivel Secundario de 7:15 a 13:15. También ofrecemos actividades extracurriculares en el turno tarde.",
    category: "colegio",
  },
  {
    keywords: ["inscripciones", "inscripcion", "matricula", "ingreso"],
    response:
      "Las inscripciones se realizan generalmente entre noviembre y febrero. Requieren documentación completa del alumno, entrevista con los padres y disponibilidad de vacantes. Te recomiendo contactar la secretaría para información específica.",
    category: "colegio",
  },
  {
    keywords: ["uniforme", "vestimenta", "ropa", "vestir"],
    response:
      "Sí, tenemos uniforme escolar obligatorio que varía según el nivel educativo. Incluye camisa blanca, pantalón/pollera azul marino, y sweater institucional. Los detalles específicos se informan al momento de la inscripción.",
    category: "colegio",
  },
  {
    keywords: ["actividades extracurriculares", "actividades", "deportes", "talleres"],
    response:
      "Ofrecemos diversas actividades: deportes (fútbol, vóley, básquet), talleres artísticos, coro, teatro, catequesis, y grupos juveniles. Estas actividades complementan la formación integral de nuestros estudiantes.",
    category: "colegio",
  },
  {
    keywords: ["instalaciones", "infraestructura", "edificios", "espacios"],
    response:
      "Contamos con modernas instalaciones: aulas equipadas, laboratorios de ciencias e informática, biblioteca, gimnasio cubierto, capilla, patios cubiertos y espacios verdes. Todo diseñado para crear un ambiente de aprendizaje óptimo.",
    category: "colegio",
  },
  {
    keywords: ["personal docente", "profesores", "maestros", "directivos"],
    response:
      "Nuestro equipo docente está formado por profesionales altamente capacitados, comprometidos con la educación dominica. Participan en formación continua para ofrecer la mejor educación a nuestros estudiantes.",
    category: "colegio",
  },
  {
    keywords: ["eventos", "actividades especiales", "celebraciones"],
    response:
      "Realizamos eventos importantes durante el año: acto inaugural, día de la tradición, fiestas patrias, campamentos educativos, jornada dominicana, y celebraciones religiosas. Estos eventos fortalecen nuestra comunidad educativa.",
    category: "colegio",
  },
  {
    keywords: ["becas", "ayudas economicas", "descuentos", "subsidios"],
    response:
      "Ofrecemos un sistema de becas para familias que necesitan apoyo económico. Los criterios se basan en el rendimiento académico y situación socioeconómica. Consulta en secretaría los requisitos y plazos para solicitarlas.",
    category: "colegio",
  },
  {
    keywords: ["proyecto educativo", "pei", "mision", "vision"],
    response:
      "Nuestro Proyecto Educativo Institucional (PEI) se basa en formar personas íntegras, críticas y solidarias, con valores dominicos. Buscamos desarrollar el potencial de cada estudiante en un ambiente de respeto y excelencia académica.",
    category: "colegio",
  },
  {
    keywords: ["seguridad", "protocolos", "emergencias"],
    response:
      "Contamos con protocolos de seguridad actualizados: evacuación, primeros auxilios, y manejo de situaciones de emergencia. Realizamos simulacros periódicos y tenemos personal capacitado para garantizar la seguridad de todos.",
    category: "colegio",
  },

  // Conocimiento sobre la Comunidad Dominica
  {
    keywords: ["dominicos", "orden predicadores", "frailes"],
    response:
      "Los Dominicos, oficialmente conocidos como la Orden de Predicadores, fueron fundados por Santo Domingo de Guzmán en 1216. Su misión principal es la predicación y la enseñanza, llevando la Palabra de Dios a través de la educación y el servicio comunitario.",
    category: "dominicos",
  },
  {
    keywords: ["santo domingo guzman", "santo domingo", "fundador"],
    response:
      "Santo Domingo de Guzmán (1170-1221) fue un sacerdote español que fundó la Orden de Predicadores. Dedicó su vida a la predicación, la educación y la lucha contra la herejía, siendo canonizado en 1234.",
    category: "dominicos",
  },
  {
    keywords: ["valores dominicos", "valores", "veritas", "contemplacion", "predicacion"],
    response:
      "Los valores fundamentales dominicos son: Veritas (Verdad), la contemplación, y la predicación. Estos pilares guían nuestra educación, promoviendo la búsqueda de la verdad, la vida espiritual profunda, y el compartir el conocimiento.",
    category: "dominicos",
  },
  {
    keywords: ["rosario", "santisimo rosario", "oracion"],
    response:
      "El Santísimo Rosario es una devoción mariana muy importante para los dominicos. Santo Domingo recibió el Rosario de la Virgen María como instrumento de oración y evangelización. Es por eso que nuestro colegio lleva este nombre.",
    category: "dominicos",
  },
  {
    keywords: ["educacion dominica", "educacion", "formacion", "enseñanza"],
    response:
      "La tradición educativa dominica se basa en la excelencia académica, la formación en valores cristianos, y el desarrollo integral de la persona. Buscamos formar estudiantes críticos, comprometidos con la verdad y el servicio a los demás.",
    category: "dominicos",
  },
  {
    keywords: ["santos dominicos", "santos", "santa catalina", "santo tomas"],
    response:
      "La Orden Dominicana ha dado numerosos santos a la Iglesia, entre ellos: Santo Tomás de Aquino (doctor de la Iglesia), Santa Catalina de Siena (doctora de la Iglesia), San Martín de Porres, y San Juan Macías. Todos ejemplos de vida dominica.",
    category: "dominicos",
  },
  {
    keywords: ["simbolos dominicos", "emblema", "escudo", "significado"],
    response:
      "Nuestros símbolos principales son: el perro con la antorcha (predicación), la estrella (luz de la verdad), y el lema 'Laudare, Benedicere, Praedicare' (Alabar, Bendecir, Predicar). Representan nuestra identidad y misión en el mundo.",
    category: "dominicos",
  },
  {
    keywords: ["espiritualidad dominica", "vida espiritual", "oracion"],
    response:
      "La espiritualidad dominica se centra en la contemplación de la verdad, la vida comunitaria, el estudio serio y la predicación. Fomentamos la oración personal y comunitaria, especialmente la Liturgia de las Horas y el Rosario.",
    category: "dominicos",
  },
  {
    keywords: ["mision dominica", "evangelizacion", "servicio"],
    response:
      "Nuestra misión es anunciar el Evangelio en todos los ámbitos de la vida. A través de la educación, la pastoral y el servicio social, buscamos transformar la sociedad según los valores del Reino de Dios.",
    category: "dominicos",
  },
  {
    keywords: ["familia dominica", "laicos dominicos", "comunidad"],
    response:
      "La Familia Dominicana incluye frailes, monjas, hermanas, laicos dominicos y sacerdotes seculares. Todos compartimos la misma espiritualidad y misión, viviéndola desde nuestros diferentes estados de vida y vocaciones.",
    category: "dominicos",
  },

  // Conocimiento sobre Monteros
  {
    keywords: ["monteros", "ciudad", "tucuman"],
    response:
      "Monteros es una hermosa ciudad ubicada en el sur de la provincia de Tucumán, Argentina. Es conocida por su rica historia, cultura tradicional, y la calidez de su gente. Es el hogar de nuestra comunidad educativa del Colegio Santísimo Rosario.",
    category: "monteros",
  },
  {
    keywords: ["historia de monteros", "historia monteros", "fundacion monteros"],
    response:
      "Monteros fue fundada en 1750 y debe su nombre a los monteros (cazadores) que habitaban la región. Ha sido un importante centro agrícola y ganadero, manteniendo sus tradiciones y costumbres a lo largo de los años.",
    category: "monteros",
  },
  {
    keywords: ["clima monteros", "clima", "temperatura", "tiempo"],
    response:
      "Monteros tiene un clima subtropical con estación seca. Los veranos son cálidos y húmedos, mientras que los inviernos son suaves y secos. La temperatura promedio anual es de aproximadamente 20°C.",
    category: "monteros",
  },
  {
    keywords: ["festivales monteros", "festivales", "fiestas", "celebraciones"],
    response:
      "Monteros celebra diversas festividades tradicionales, incluyendo la Fiesta Patronal, festivales folclóricos, y celebraciones religiosas. Estas festividades reflejan la rica cultura y tradiciones de nuestra comunidad.",
    category: "monteros",
  },
  {
    keywords: ["lugares de interes", "turismo", "sitios historicos"],
    response:
      "Algunos lugares importantes de Monteros son: la Iglesia San José (declarado Monumento Histórico Nacional), la Plaza Central, el Museo Histórico Regional, y el Balneario Municipal. Cada lugar cuenta parte de nuestra historia.",
    category: "monteros",
  },
  {
    keywords: ["economia monteros", "produccion", "agricultura", "industria"],
    response:
      "La economía de Monteros se basa principalmente en la agricultura (caña de azúcar, citrus, hortalizas) y la ganadería. También tiene un importante sector industrial con ingenios azucareros y fábricas de alimentos.",
    category: "monteros",
  },
  {
    keywords: ["gastronomia monteros", "comida tipica", "platos"],
    response:
      "La gastronomía local incluye platos tradicionales como: locro, empanadas tucumanas, tamal, humita, y postres como el arroz con leche y el dulce de batata. La comida refleja nuestra mezcla de culturas y tradiciones.",
    category: "monteros",
  },
  {
    keywords: ["ubicacion", "donde queda", "distancia", "acceso"],
    response:
      "Monteros se encuentra a 54 km al sur de San Miguel de Tucumán, capital provincial. Se accede principalmente por la Ruta Nacional 38. El viaje en auto desde Tucumán capital toma aproximadamente 1 hora.",
    category: "monteros",
  },
  {
    keywords: ["servicios", "salud", "educacion", "transporte"],
    response:
      "Monteros cuenta con servicios completos: hospital público, centros de salud, escuelas públicas y privadas, transporte de colectivos a Tucumán, bancos, y servicios básicos. Es una ciudad con buena infraestructura para sus habitantes.",
    category: "monteros",
  },
  {
    keywords: ["vida cultural", "arte", "musica", "tradiciones"],
    response:
      "Monteros tiene una rica vida cultural con grupos folclóricos, bandas de música, talleres de arte, y bibliotecas populares. Se valoran especialmente las tradiciones gauchas y las expresiones artísticas locales.",
    category: "monteros",
  },

  // Vida Estudiantil
  {
    keywords: ["convivencia", "normas", "reglamento", "disciplina"],
    response:
      "Nuestro reglamento de convivencia promueve el respeto mutuo, la responsabilidad y la solidaridad. Buscamos formar estudiantes autónomos con capacidad de autodisciplina, basándonos en los valores dominicos de respeto y fraternidad.",
    category: "vidaEstudiantil",
  },
  {
    keywords: ["pastoral", "formacion religiosa", "catequesis"],
    response:
      "Ofrecemos una sólida formación religiosa a través de clases de catequesis, retiros espirituales, celebraciones litúrgicas y grupos juveniles. La pastoral es parte integral de nuestro proyecto educativo dominico.",
    category: "vidaEstudiantil",
  },
  {
    keywords: ["salud", "enfermeria", "botiquin", "accidentes"],
    response:
      "Contamos con un servicio de enfermería durante todo el horario escolar, con personal capacitado para atender emergencias y administrar primeros auxilios. Seguimos protocolos estrictos para la salud de nuestros estudiantes.",
    category: "vidaEstudiantil",
  },
  {
    keywords: ["transporte", "colectivo", "movilidad", "acceso"],
    response:
      "Ofrecemos servicio de transporte escolar con rutas que cubren diferentes zonas de Monteros y alrededores. Los vehículos cuentan con todos los requisitos de seguridad y monitoreo GPS para la tranquilidad de las familias.",
    category: "vidaEstudiantil",
  },
  {
    keywords: ["comedor", "comida", "almuerzo", "merienda"],
    response:
      "Nuestro comedor escolar ofrece menús balanceados y nutritivos, supervisados por nutricionistas. Promovemos hábitos alimenticios saludables y adaptamos los menús para estudiantes con necesidades dietéticas especiales.",
    category: "vidaEstudiantil",
  },
  {
    keywords: ["orientacion", "vocacional", "psicopedagogia"],
    response:
      "Contamos con un departamento de orientación vocacional y psicopedagogía que acompaña a los estudiantes en su desarrollo personal y académico. Ofrecemos talleres, entrevistas individuales y apoyo en la elección de su futuro profesional.",
    category: "vidaEstudiantil",
  },
  {
    keywords: ["viajes", "excursiones", "campamentos", "salidas educativas"],
    response:
      "Realizamos salidas educativas, campamentos y viajes de estudio que complementan el aprendizaje en el aula. Estas experiencias fortalecen la convivencia, el contacto con la naturaleza y el conocimiento de nuestra historia y cultura.",
    category: "vidaEstudiantil",
  },
  {
    keywords: ["tecnologia", "informatica", "plataformas", "recursos digitales"],
    response:
      "Incorporamos tecnología educativa en todos los niveles: laboratorios de informática, tablets, pizarras digitales y plataformas educativas. Formamos a los estudiantes en el uso responsable y crítico de la tecnología.",
    category: "vidaEstudiantil",
  },
  {
    keywords: ["deportes", "educacion fisica", "competencias"],
    response:
      "Nuestro programa de educación física incluye actividades deportivas, talleres especializados y participación en competencias intercolegiales. Promovemos el trabajo en equipo, el respeto y el cuidado del cuerpo a través del deporte.",
    category: "vidaEstudiantil",
  },
  {
    keywords: ["artes", "expresion", "musica", "plastica", "teatro"],
    response:
      "Fomentamos la expresión artística a través de talleres de música, plástica, teatro y danza. Estas actividades desarrollan la creatividad, la sensibilidad y la capacidad de expresión de nuestros estudiantes.",
    category: "vidaEstudiantil",
  },
]

// Exportar la base de conocimientos al objeto global window
if (typeof window !== "undefined") {
  window.CESAR_KNOWLEDGE_BASE = KNOWLEDGE_BASE
}
