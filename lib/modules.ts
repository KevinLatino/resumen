export interface Module {
  id: string;
  title: string;
  desc: string;
  content: string[];
  code?: string;
}

export const modules: Module[] = [
  {
    id: "1",
    title: "Fundamentos de Base de Datos",
    desc: "Almacenar, organizar y gestionar datos. Relacionales vs NoSQL. Sistemas de información.",
    content: [
      "Es bien sabido que hoy en día las bases de datos es un componente fundamental en los sistemas de información modernos, nos permiten almacenar, organizar y gestionar grandes cantidades de datos de manera eficiente. Además, todas las organizaciones dependen de sus base de datos para operar, analizar información y tomar decisiones. Comprender los fundamentos de las base de datos es clave para cualquier profesional relacionado con la tecnología y la gestión de la información.",
      "Con el paso del tiempo y conforme la tecnología fue avanzando comenzaron a surgir nuevas maneras de almacenar y organizar la información. En la década de los años 70 aparecieron las bases de datos relacionales, un modelo que permitió organizar la información en tablas compuestas por filas y columnas, donde cada fila representa un registro y cada columna un atributo del dato.",
      "Con el crecimiento de internet surgieron nuevas necesidades de almacenamiento. La información no siempre seguía una estructura fija como en las bases tradicionales. A inicios de los años 2000 aparecieron las bases de datos no relacionales (NoSQL), diseñadas para manejar grandes volúmenes de datos variados y muchas veces no estructurados.",
      "Alrededor de la década del 2010 el almacenamiento en la nube cambió la forma en que las empresas manejan su información. Las empresas comenzaron a utilizar servicios de almacenamiento remoto que permiten guardar grandes cantidades de información y acceder desde cualquier lugar con internet, facilitando el acceso y permitiendo escalar sin invertir constantemente en infraestructura física.",
      "Las bases de datos están muy relacionadas con los sistemas de información. Estos sistemas utilizan las bases de datos como el lugar donde se almacena toda la información que será utilizada por aplicaciones, usuarios o procesos dentro de una organización, permitiendo recopilar, almacenar y analizar información de manera más eficiente y mejorar la toma de decisiones.",
    ],
  },
  {
    id: "2",
    title: "Importancia de las Base de Datos",
    desc: "Apps web y sistemas dependen de BD para usuarios, transacciones y registros.",
    content: [
      "Las bases de datos tienen un papel muy importante dentro de la tecnología. Permiten gestionar grandes cantidades de información de forma eficiente, algo fundamental para prácticamente cualquier organización o sistema tecnológico. Las bases de datos no solo sirven para almacenar información sino también para procesarla, analizarla y utilizarla en diferentes aplicaciones, lo cual permite que las empresas puedan tomar mejores decisiones y optimizar muchos de sus procesos internos.",
      "Uno de los aspectos más importantes es que facilitan el desarrollo de aplicaciones. Muchas aplicaciones modernas dependen directamente del manejo de datos: aplicaciones web, sistemas empresariales o plataformas digitales necesitan almacenar información de usuarios, transacciones o registros. Las bases de datos permiten que toda esa información se mantenga organizada y disponible cuando sea necesaria.",
      "La capacidad de gestionar y analizar datos permite mejorar la toma de decisiones dentro de las organizaciones. Cuando una empresa puede manejar grandes volúmenes de información es posible identificar patrones, analizar comportamientos y entender mejor distintos procesos dentro del negocio, lo cual ayuda a que las empresas puedan tomar decisiones más estratégicas y mejorar su competitividad.",
      "Existen diferentes tipos. Las bases de datos relacionales organizan la información en tablas compuestas por filas y columnas, estableciendo relaciones mediante claves primarias y claves foráneas, lo cual facilita la organización y permite realizar consultas más complejas.",
      "Las bases de datos no relacionales fueron diseñadas para manejar información que muchas veces no sigue una estructura rígida. Este tipo permite almacenar información en distintos formatos y ofrece mayor flexibilidad para trabajar con aplicaciones modernas que manejan grandes volúmenes de datos.",
    ],
  },
  {
    id: "3",
    title: "Modelos de Base de Datos",
    desc: "Niveles: conceptual (entidades), lógico (tablas), físico (almacenamiento).",
    content: [
      "En el desarrollo de sistemas de bases de datos uno de los aspectos más importantes es el modelado de datos. Antes de construir una base de datos es necesario planificar cómo se va a organizar la información. El modelado permite entender los requisitos del sistema y definir cómo se relacionan los distintos datos dentro de una aplicación, evitando problemas en etapas posteriores del desarrollo.",
      "El modelado de bases de datos ayuda a mejorar la comunicación entre las personas que participan en el desarrollo. Cuando existe un modelo claro resulta mucho más sencillo entender cómo se va a estructurar la información y cuáles son los elementos principales del sistema, reduciendo confusiones y errores durante el proceso de desarrollo.",
      "Dentro del modelado existen diferentes niveles. El modelado conceptual se enfoca en identificar las entidades principales del sistema y las relaciones entre ellas. Por ejemplo: modelo de tienda en línea, sistema de gestión de hospital o aplicación de redes sociales, donde se identifican elementos como usuarios, productos, pedidos o publicaciones.",
      "El modelado lógico toma las ideas del modelo conceptual y las convierte en una estructura más detallada, definiendo tablas, campos y relaciones entre entidades. Transforma los requisitos en una estructura de datos más clara que posteriormente podrá implementarse dentro de una base de datos real.",
      "El modelado físico se enfoca en cómo se almacenarán realmente los datos, considerando rendimiento, seguridad y métodos de almacenamiento. Incluye optimización mediante índices, implementación de medidas de seguridad y monitoreo del sistema.",
      "Cuando no se realiza un modelado adecuado pueden aparecer datos inconsistentes, dificultades para escalar o costos adicionales por tener que rediseñar el sistema. Por esta razón el modelado de datos se considera una parte fundamental en el diseño de bases de datos modernas.",
    ],
  },
  {
    id: "4",
    title: "Rendimiento y Escalabilidad",
    desc: "Relacional, jerárquico, OO. Escala vertical vs horizontal.",
    content: [
      "El modelo de base de datos que se elige puede tener un impacto importante en el rendimiento y en la capacidad que tiene el sistema para crecer. La forma en que se organizan los datos influye directamente en la velocidad de las consultas y en qué tan bien puede adaptarse un sistema cuando la cantidad de información aumenta. Elegir un modelo adecuado desde el inicio es fundamental.",
      "El modelo relacional organiza la información en tablas donde cada tabla representa una entidad. Las relaciones se establecen mediante claves primarias y claves foráneas. Este modelo es muy utilizado porque permite manejar relaciones entre datos de forma clara y facilita realizar consultas más complejas.",
      "El modelo jerárquico organiza los datos en una estructura parecida a un árbol donde cada registro tiene un padre y puede tener varios hijos. Puede funcionar bien cuando los datos siguen una relación clara de uno a muchos. Sin embargo, puede volverse rígido cuando se necesitan relaciones más complejas, ya que modificar la estructura puede requerir cambios importantes.",
      "El modelo orientado a objetos agrupa datos y funciones dentro de objetos, similar a muchos lenguajes de programación. Puede resultar útil en sistemas más complejos donde existe una relación fuerte entre los datos y las operaciones que se realizan sobre ellos.",
      "La escalabilidad se refiere a la capacidad que tiene un sistema para adaptarse cuando aumenta la cantidad de datos o el número de usuarios. Si el modelo no se elige correctamente, el sistema puede tener problemas cuando crece. Existen dos formas: escalabilidad horizontal (agregar más servidores) y escalabilidad vertical (aumentar la capacidad de un solo servidor). Es importante analizar bien los requerimientos antes de decidir qué modelo utilizar.",
    ],
  },
  {
    id: "5",
    title: "SQL - DML y DDL",
    desc: "DDL: CREATE, ALTER, DROP. DML: INSERT, UPDATE, DELETE.",
    content: [
      "Los lenguajes DML y DDL tienen papeles distintos dentro del manejo de bases de datos en SQL. Ambos se utilizan para trabajar con la información pero desde funciones distintas: uno se enfoca en manipular los datos almacenados en las tablas mientras que el otro se encarga de definir la estructura donde esos datos van a existir. Entender esta diferencia es importante cuando se trabaja con bases de datos.",
      "DML corresponde al Lenguaje de Manipulación de Datos. Este tipo de comandos permite realizar operaciones sobre los registros almacenados: agregar información nueva, modificar registros que ya existen o eliminar datos cuando ya no son necesarios.",
      "Los ejemplos de cláusulas DML son INSERT, UPDATE y DELETE. INSERT se utiliza para agregar nuevos registros a una tabla. UPDATE permite modificar valores dentro de registros existentes. DELETE permite eliminar información que ya no se necesita. Estas operaciones permiten mantener la información actualizada dentro de una aplicación.",
      "DDL significa Lenguaje de Definición de Datos. Este tipo de comandos se utiliza para definir la estructura de la base de datos: crear tablas nuevas, modificar tablas existentes o eliminar estructuras completas. Los ejemplos son CREATE, ALTER y DROP, los cuales permiten crear nuevas estructuras, modificar columnas o eliminar tablas completas. Mientras DML trabaja con los datos, DDL se enfoca en cómo está organizada la base de datos.",
    ],
    code: `CREATE TABLE users (id INT, name VARCHAR(100));
INSERT INTO users VALUES (1, 'Ana');
UPDATE users SET name='Maria' WHERE id=1;
DELETE FROM users WHERE id=1;`,
  },
  {
    id: "6",
    title: "Consultas SQL",
    desc: "SELECT, WHERE, ORDER BY. Consultas sobre tablas.",
    content: [
      "SQL es el lenguaje que permite interactuar con la información almacenada en un sistema. Cuando una base de datos crece y contiene muchos registros se vuelve necesario contar con herramientas que permitan acceder a esos datos de forma ordenada. SQL cumple ese papel porque permite realizar consultas sobre la información y extraer datos específicos según lo que el usuario necesite.",
      "Una de las razones por las que SQL es tan utilizado es porque permite realizar operaciones complejas: consultar información distribuida en varias tablas o buscar registros que cumplen ciertas condiciones. Este tipo de consultas permite analizar grandes volúmenes de información y obtener resultados útiles.",
      "Los sistemas no solo necesitan consultar información sino también mantenerla actualizada. SQL permite insertar nuevos registros, modificar datos existentes o eliminar información que ya no es necesaria.",
      "SELECT se utiliza para realizar consultas sobre las tablas. Esta sentencia permite obtener datos específicos según lo que el usuario busque. Las cláusulas WHERE y ORDER BY permiten filtrar resultados u organizar la información según ciertos criterios, facilitando encontrar datos dentro de bases de datos grandes.",
      "SQL se considera un estándar en el mundo de las bases de datos. Muchos sistemas de gestión utilizan este lenguaje para interactuar con la información. Aprender a usar SQL resulta importante para quienes trabajan con sistemas de información o aplicaciones que dependen del manejo de datos.",
    ],
    code: `SELECT name FROM users WHERE age > 18 ORDER BY name;`,
  },
  {
    id: "7",
    title: "Modelo Entidad-Relación (MER)",
    desc: "Entidades, relaciones y atributos. Diseño antes de implementar.",
    content: [
      "El modelo entidad-relación es una herramienta importante para el diseño de bases de datos. Permite representar de forma visual los elementos que forman parte de un sistema y la forma en que esos elementos se relacionan entre sí. Se utiliza sobre todo en las primeras etapas del diseño porque permite estructurar la información antes de pasar a la implementación real.",
      "El modelo entidad-relación ayuda a identificar los requerimientos de información desde el inicio del proyecto. Cuando se analizan las entidades y las relaciones que existen entre ellas se puede entender qué datos son necesarios y cómo se van a conectar. Este proceso ayuda a evitar problemas más adelante porque permite detectar desde temprano qué información debe almacenarse.",
      "Otra ventaja es que el uso de un modelo conceptual ayuda a evitar redundancias. Cuando la información está bien organizada desde el diseño inicial es menos probable que se repitan datos o que existan inconsistencias. Esto hace que la base de datos sea más organizada y el manejo más eficiente.",
      "Dentro del modelo entidad-relación es importante identificar tres elementos principales. Las entidades representan los objetos o elementos principales del sistema. Las relaciones muestran cómo se conectan esas entidades entre sí. Los atributos representan las características que describen cada entidad. Entender estos tres elementos permite construir diagramas ER que representan la estructura de forma clara.",
      "Ejemplo: Usuario (entidad) coloca Pedido (entidad), Pedido contiene Producto (entidad).",
      "El desarrollo de un modelo ER suele seguir varios pasos: análisis de requerimientos, identificación de entidades y relaciones, construcción del diagrama ER, y revisión del modelo para asegurar que esté alineado con las necesidades del sistema. Este proceso ayuda a que el diseño sea más claro antes de la etapa de implementación.",
    ],
  },
  {
    id: "8",
    title: "Modelo Conceptual",
    desc: "Diseño previo. Casos: ecommerce, académico, retail.",
    content: [
      "El modelo conceptual se utiliza para representar la información de un sistema antes de construir la base de datos real. Su función es ayudar a entender qué datos existen dentro de un sistema y cómo se conectan entre sí. Esta etapa sirve para ordenar las ideas y tener una visión más clara del sistema que se quiere construir. Antes de crear tablas o estructuras técnicas es necesario entender qué información existe y qué relación tiene cada elemento con los demás.",
      "Existen distintos tipos de modelos dependiendo del tipo de sistema que se esté diseñando. Algunos modelos funcionan mejor cuando los datos son simples mientras que otros sirven más cuando la información es más compleja.",
      "El modelo entidad-relación ayuda a representar los elementos principales de un sistema de forma visual y fácil de entender. Permite identificar entidades, relaciones y atributos dentro de la estructura de datos, facilitando observar cómo se conectan los distintos datos entre sí antes de construir la base de datos real.",
      "La calidad del modelo puede influir en el funcionamiento de la base de datos. Cuando el diseño está bien pensado desde el inicio las consultas pueden ejecutarse con más rapidez. Si el modelo no está bien estructurado pueden aparecer problemas cuando la base de datos crece.",
      "La escalabilidad se refiere a la capacidad que tiene un sistema para manejar un aumento en la cantidad de datos o en el número de usuarios. Escalabilidad horizontal: agregar más servidores. Escalabilidad vertical: aumentar la capacidad de un solo servidor.",
      "Ejemplos de aplicación: sistema de retail (productos, inventarios, clientes), sistema académico (estudiantes, cursos, profesores), plataforma de comercio electrónico (productos, pagos, usuarios). Estos ejemplos ayudan a entender que el modelo conceptual es una herramienta que permite ordenar la información antes de construir la base de datos real.",
    ],
  },
];
