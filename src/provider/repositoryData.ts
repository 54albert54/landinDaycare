export type  TRepositorio = {
    title: string;
    img: string[];
    code: TCode[];
    about: string;
    repoLink: string;
    pageLink: string;
    características?: string[];
    figmaLink?: string;
  }
  interface TRepositorioAport extends TRepositorio {
    role: string;
  }
  
  type TCode =
    | "HTML"
    | "JavaScript"
    | "CSS"
    | "TypeScrip"
    | "React"
    | "MySQL"
    | "React native"
    | "nextJs"
    | "tailwindcss"
    | "Astro"
    | "Electron"
    | "Swift";
  
  const collaborative: TRepositorioAport[] = [];
  const allRepo: TRepositorio[] = [];
  /*
  TODO:add new Project
  
  allRepo.push({
    title: '',
    img: [''],
    about: '',
    code: [],
    características: [''],
    repoLink: '',
    pageLink: '',
    
  });
  
  */
  allRepo.push({
    title: "Print Web/Desktop",
    img: [
      "https://pbs.twimg.com/media/GHoFhlxXMAAmYWN?format=jpg&name=large",
      "https://pbs.twimg.com/media/GHoFhlxXgAATdxY?format=jpg&name=large",
      "https://pbs.twimg.com/media/GHoFhlvWEAA-B_4?format=jpg&name=large",
      "https://pbs.twimg.com/media/GHoFYjBWEAA1zIz?format=jpg&name=large",
      "https://pbs.twimg.com/media/GHoFYjDWcAAdebr?format=jpg&name=large",
      "https://pbs.twimg.com/media/GHoFhlxWAAEsCw_?format=jpg&name=large",
    ],
    about:
      "PrintCheque es una aplicación diseñada para imprimir cheques de forma personalizada, permitiendo a los usuarios mover cada uno de los campos según sus necesidades. Además, ofrece la capacidad de guardar los datos en una base de datos MySQL para una persistencia de datos confiable.",
    code: ["TypeScrip", "React", "Electron", "tailwindcss", "MySQL"],
    características: [
      "Personalización de campos ",
      "Persistencia de datos:",
      "Compatibilidad con navegador y escritorio",
      "Autenticación y autorización",
      "Tareas específicas para cada rol",
      "Exportación a Excel",
    ],
    repoLink: "https://github.com/54albert54/printAppReact.git",
    pageLink: "https://charming-sprinkles-e4f024.netlify.app/",
  });
  
  allRepo.push({
    title: "PostAPP",
    img: [
      "https://pbs.twimg.com/media/GGLytj-XcAA7eCB?format=jpg&name=large",
      "https://camo.githubusercontent.com/5fc3ca2f6939ed21a57bdb4ba03d68b70a98061236b666854f91e6048b7aa238/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47474c79746a3858674145417565723f666f726d61743d6a7067266e616d653d6c61726765",
      "https://camo.githubusercontent.com/a018b83e1ae0a7a0b78ce227ad6919af72392f5573051aaf4d3c0da16328ed40/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47474c79746a38586f414155724f433f666f726d61743d6a7067266e616d653d6c61726765",
      "https://camo.githubusercontent.com/98d2ec2e91e824275440a471669ef4dac5e5d197c33e2022f656b94cbdc3844c/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47474c79746a2d5741414142464b723f666f726d61743d6a7067266e616d653d6c61726765",
    ],
    about:
      "MakePost es una aplicación nativa para iOS desarrollada en Swift con el uso de Storyboards. La aplicación permite a los usuarios registrarse, autenticarse, crear, editar y eliminar publicaciones, así como ver publicaciones de otros usuarios en un mapa.",
    code: ["Swift", "TypeScrip", "MySQL"],
    características: [
      "Registro de usuarios",
      "Autenticación",
      "Creación de publicaciones",
      "Edición de publicaciones",
      "Eliminación de publicaciones",
    ],
    repoLink: "https://github.com/54albert54/PostMakerIOS/",
    pageLink: "",
  });
  
  allRepo.push({
    title: "Pokedex App",
    img: [
      "https://pbs.twimg.com/media/F6vv_FRWsAAlrv_?format=png&name=900x900",
      "https://pbs.twimg.com/media/F6vv6h5WoAAjDW0?format=png&name=900x900",
      "https://pbs.twimg.com/media/F6vv_FTWcAAdk5s?format=png&name=900x900",
    ],
    about:
      "¡Bienvenido a la Pokedex App! Esta aplicación fue creada con React Native y TypeScript, aprovechando una base de datos PostgreSQL para proporcionar información detallada sobre Pokémon. Descubre nuevas especies, sus habilidades y más.",
    code: ["React", "React native", "MySQL"],
    repoLink: "https://github.com/54albert54/PokeNative",
    pageLink: `https://65111f2a70ade65a3ac6363e--astounding-kashata-dbb4fc.netlify.app`,
  });
  
  allRepo.push({
    title: "MemoryQuiz",
    img: [
      "https://camo.githubusercontent.com/fff63fd39c5f09386fe639e27f4391f968ad75d272ca08c4db028a4cb66e0f54/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47444850663152576b4141456952323f666f726d61743d6a7067266e616d653d6c61726765",
      "https://camo.githubusercontent.com/f412e8a8ba4e253a548f299566306c0d0a12285aec1a0429cef5ec599d63e06c/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f474448506b31535730414134656f593f666f726d61743d6a7067266e616d653d6c61726765",
      "https://camo.githubusercontent.com/28406adf2731ac2ac6453396ad8805361e504b064d659dd5a7cdc45cc55600fb/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47444850684b7257774141797249693f666f726d61743d6a7067266e616d653d6c61726765",
    ],
    about:
      "¡Bienvenido al Juego de Memoria! Este juego ha sido creado utilizando únicamente HTML, CSS y JavaScript puro. Es un ejercicio diseñado para mejorar tus habilidades de maquetación HTML, estilos CSS y lógica de programación con algoritmos complejos.",
    code: ["HTML", "CSS", "JavaScript"],
    características: [
      "Juego funcional de Memory con 3 niveles de dificultad.",
      "Selección de letras al azar en cada juego.",
    ],
    repoLink: "https://github.com/54albert54/memoryQuiz",
    pageLink: `https://memoryquiz.onrender.com`,
  });
  
  allRepo.push({
    title: "Friday Night Rhythm-CLONE",
    img: [
      "https://camo.githubusercontent.com/954baf292f4b98a02fd00c1c9b6d85197823ead8128d66e146183590d2fe18aa/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47444872357474574941414f7942443f666f726d61743d6a7067266e616d653d6c61726765",
      "https://camo.githubusercontent.com/3db3a045e61e556378323a7f5b9c20e2a8cf90fca27047b4efe206c236ba544a/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f47444872357477585941416b72374d3f666f726d61743d6a7067266e616d653d6c61726765",
    ],
    about:
      '¡Bienvenido al "Friday Night Rhythm"! Este es un juego de ritmo simple y funcional creado exclusivamente con HTML, CSS y JavaScript. El juego te desafía a mantener el ritmo y establecer récords de tiempo mientras te diviertes.',
    code: ["JavaScript", "HTML", "CSS"],
    características: [
      "Juego de Ritmo Simple: Siente la emoción del ritmo al presionar las teclas en el momento adecuado.",
      "Opciones de Tiempo: El juego registra tu tiempo para cada nivel, ¡compite contigo mismo para mejorar!",
      "Récords Guardados: Tu mejor tiempo se guarda automáticamente, ¡motívate a superarlo en cada intento!",
    ],
    repoLink: "https://github.com/54albert54/RockLegends2in1",
    pageLink: "https://54albert54.github.io/RockLegends2in1/",
  });
  
  allRepo.push({
    title: "Angel's Family Daycare",
    img: [
      "https://camo.githubusercontent.com/25f42a115e0f259220a4583e1e858037e96b272dd03dbb24ae95d352f3ec6f63/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4744526e70516457554141344476353f666f726d61743d6a7067266e616d653d6d656469756d",
      "https://camo.githubusercontent.com/d8bf82fb2b4d7971318421c545ebd6c8918643ef5c8823de0abd21a4d3914708/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4744526e41456c584d4141746b51583f666f726d61743d6a7067266e616d653d6d656469756d",
      "https://camo.githubusercontent.com/8ae2c4669fee4bbe7b7b90044b4c94157d4654332171a9ef5919df1daa0ffacb/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4744526e41456d58674141794844313f666f726d61743d6a7067266e616d653d6d656469756d",
    ],
    about:
      "Bienvenido a la landing page de Angel's Family Daycare, un proyecto diseñado para proporcionar información sobre nuestros servicios de cuidado infantil. Esta landing page ha sido desarrollada utilizando Astro y Tailwind CSS para asegurar un rendimiento rápido y una experiencia responsive.",
    code: ["JavaScript", "HTML", "CSS"],
    características: [""],
    repoLink: "",
    pageLink: "",
  });
  
  allRepo.push({
    title: "TodoList App",
    img: [
      "https://camo.githubusercontent.com/91cbd9ea4671874bc2ae328171639c1307ef9ed94d445d0f20a4c6b78cd46d45/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4744475a77726b58634141467642673f666f726d61743d6a7067266e616d653d6c61726765",
    ],
    about:
      "Esta aplicación web simple te permite gestionar tus tareas diarias con facilidad. Puedes crear nuevos TODOS, editarlos y navegar a través de ellos de manera eficiente gracias a la funcionalidad de paginación.",
    code: ["nextJs", "tailwindcss"],
    características: [
      "Creación de TODOS: Añade nuevas tareas a tu lista fácilmente.",
      "Edición de TODOS: Actualiza la información de tus tareas existentes.",
      "Paginación: Navega de forma sencilla entre diferentes páginas de TODOS.",
    ],
    repoLink: "https://github.com/54albert54/todoList",
    pageLink: "https://todo-list-2-phi.vercel.app",
  });
  allRepo.push({
    title: "CINEMA ASTRO",
    img: [
      "https://camo.githubusercontent.com/4258394b525857c40e83024e82db486cd48fbc1e2f5b96dccf5dccc34e378079/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4743347a57457257674141733068593f666f726d61743d6a7067266e616d653d6d656469756d",
      "https://camo.githubusercontent.com/3ed65bb4cd165cff1390c109668409c2e4be5b34f369e137b3b4b2fed2f0f095/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f4743347a57457658594141567551573f666f726d61743d6a7067266e616d653d6d656469756d",
    ],
    about:
      "Cinema Astro es una aplicación web diseñada para ofrecer una experiencia similar a la de plataformas de transmisión populares como Netflix y Disney Plus. Explora una amplia selección de películas y disfruta de una interfaz atractiva y fácil de usar.",
    code: ["Astro", "tailwindcss", "MySQL"],
    características: [
      "Interfaz Atractiva: Inspirada en el diseño elegante y funcional de plataformas como Netflix y Disney Plus.",
      "Exploración Intuitiva: Navega fácilmente a través de categorías, descubre nuevas películas y disfruta de una experiencia de usuario fluida.",
      "Detalles de Películas: Obtén información detallada sobre cada película, incluidos trailers, elenco y sinopsis.",
      "Funciones de Usuario: Crea una cuenta, guarda tus películas favoritas y lleva un seguimiento de tu historial de visualización.",
    ],
    repoLink: "https://github.com/54albert54/cinemaAstro",
    pageLink: "https://astro-movie.netlify.app",
  });
  
  //  collaborative repo
  
  collaborative.push({
    role: "Colabore como Front-end para la landing Page y el area de animales por ecosistemas.",
    title: "Preservación Animal",
    img: [
      "https://pbs.twimg.com/media/GDSRV0pXcAAcM4r?format=jpg&name=4096x4096",
      "https://pbs.twimg.com/media/GDSRV0sXkAACrpY?format=jpg&name=4096x4096",
      "https://pbs.twimg.com/media/GDSRV0rW0AEP-LP?format=jpg&name=large",
      "https://pbs.twimg.com/media/GDSRV0pXwAAuIbs?format=jpg&name=large",
      "https://pbs.twimg.com/media/GDSRaPBXcAAo0ZI?format=jpg&name=large",
      "https://pbs.twimg.com/media/GDSRaPXXUAApIz_?format=jpg&name=large",
      "https://pbs.twimg.com/media/GDSRaPlXkAAUbk7?format=jpg&name=large",
    ],
    about:
      "Descubre una manera única de contribuir a la preservación de la vida silvestre en Latinoamérica con Preservación Animal, una iniciativa que va más allá de la conservación tradicional. Nos enorgullece presentar un proyecto innovador que combina la pasión por la vida silvestre con oportunidades tangibles para marcar la diferencia.",
    code: ["nextJs", "tailwindcss"],
    características: [
      "Merchandising Exclusivo: Explora nuestra tienda en línea y descubre una variedad de productos exclusivos. Desde camisetas y gorras hasta artículos de decoración, cada compra contribuye directamente a proyectos de conservación.",
      "Donaciones Directas: Tu generosidad importa. Realiza donaciones directas a proyectos específicos de preservación animal. Cada contribución cuenta y ayuda a financiar acciones concretas para proteger la vida silvestre.",
      "Donaciones Directas: Tu generosidad importa. Realiza donaciones directas a proyectos específicos de preservación animal. Cada contribución cuenta y ayuda a financiar acciones concretas para proteger la vida silvestre.",
      "Ecoviajes: Estos viajes no solo serán experiencias únicas, sino que también les permitirán sumergirse en la belleza y fragilidad de nuestros diversos ecosistemas, creando recuerdos que durarán toda la vida.",
    ],
    repoLink: "https://github.com/No-Country/c15-57-ft-react-agregarback",
    pageLink: "https://c15-57-ft-react-agregarback.vercel.app",
    figmaLink:
      "https://www.figma.com/file/u0zUDwyfM5xFLVzLqtyrlr/No-Country?node-id=1%3A2&mode=dev",
  });
 
  export { allRepo, collaborative  };
  