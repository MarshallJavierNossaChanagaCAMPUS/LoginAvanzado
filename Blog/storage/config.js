export default {
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
            title: {
                name: "INICIO",
                href: "../inicio.php"
            },
            games: [
            {
                name: "Nivel básico",
                href: "#basico"
            },
            {
                name: "Nivel intermedio",
                href: "#intermedio"
            },
            {
                name: "Nivel avanzado",
                href: "#avanzado"
            }
            ]
        }))
    },

    dataMyBanner(){
        localStorage.setItem("myBanner", JSON.stringify({
            banner:
                {
                titleBanner: "Te damos la bienvenida al sitio no oficial de Minecraft",
                descripcion: "Este es un blog personal donde les dejo todo mi conocimiento y noticias sobre la comunidad de minecraft técnico, echale un vistazo a la pagina oficial de minecraft :D!",
                image: "./img/fondobanner.jpg",
            },
        }))
    },

    dataMyCards(){
        localStorage.setItem("myCards", JSON.stringify({
            cards: [
                {
                    articulo: "Actualizacion",
                    titulo: "MINECRAFT TRAILS & TALES",
                    fecha: "Mar 02",
                    descripcion: "La version 1.20 de minecraft ya tiene nombre oficial",
                    boton: "Sigue leyendo...",
                    imagen: `<img src="img/minecraft.jpeg" width="250" height="250" alt=""></img>`,
                    href: "https://www.muycomputer.com/2023/03/05/minecraft-1-20-ya-tiene-nombre-trails-tales/#:~:text=As%C3%AD%2C%20unos%20meses%20despu%C3%A9s%2C%20con,que%20personalmente%20me%20parece%20muy"
                },
                {
                    articulo: "Historia",
                    titulo: "Elrich consigue Bedrock en survival",
                    fecha: "Ago 02",
                    descripcion: "El jugador 'ElrichMC' ha conseguido el item de bedrock en modo supervivencia",
                    boton: "Sigue leyendo...",
                    imagen: `<img src="img/elrich.jpg" width="250" height="250" alt="">`,
                    href: "https://www.youtube.com/watch?v=VkrYzPefX3I"
                },
                {
                    articulo: "Promesa",
                    titulo: "Don Piola el jugador promesa",
                    fecha: "Mar 23",
                    descripcion: "Este jugador està logrando cosas increibles...",
                    boton: "Sigue leyendo...",
                    imagen: `<img src="img/donpiola.png" width="250" height="250" alt="">`,
                    href: "https://www.twitch.tv/donpiola"
                }
                ]
        }))
    },

    dataMyAside(){
        localStorage.setItem("myAside", JSON.stringify({
            nav: [
                {
                    name: "Sobre minecraft técnico",
                    description: "El Minecraft técnico es para aquellos jugadores que les gusta construir cosas complejas y hacer trucos ingeniosos usando circuitos y sistemas automatizados dentro del juego."
                },
                {
                    title: "Versions trailers",
                    link: [
                        {
                            name: "Nivel básico",
                            href: "#basico"
                        },
                        {
                            name: "Nivel intermedio",
                            href: "#intermedio"
                        },
                        {
                            name: "Nivel avanzado",
                            href: "#avanzado"
                        }
                    ]
                },
                {
                    title: "Social medias",
                    link: [
                        {
                            name: "Twitch",
                            href: "",
                        },
                        {
                            name: "YouTube",
                            href: "",
                        },
                        {
                            name: "Twitter",
                            href: "",
                        },
                        {
                            name: "Github",
                            href: "",
                        },
                        {
                            name: "Instagram",
                            href: "",
                        }
                    ]
                }
            ],
        }))
    },

    dataMyBlog(){
        localStorage.setItem("myBlog", JSON.stringify({
            blog: [
                {
                    title: 'Minecraft',
                    id: 'Minecraft',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'Al inicio del juego, el jugador se encuentra en un mundo generado mediante un algoritmo, lo que permite que este sea teóricamente infinito y nunca se generen dos mundos iguales. El jugador es libre de desplazarse por el terreno, conformado por distintos biomas, entre los que se encuentran desiertos, sabanas, selvas, océanos, llanuras, tundras, etcétera. El juego posee su propio ciclo de tiempo de día y noche, siendo que un día en el juego equivale a 20 minutos en la realidad. El mundo no se genera por completo al principio, sino que está dividido en chunks («trozos», «pedazos» traducido literalmente al español, pero sin adaptación oficial) de 16  16 bloques en horizontal. Los chunks cercanos al jugador se cargan en la memoria. A medida que este se desplaza, se generan y añaden nuevos chunks al mundo.',
                        paragraph2: 'si',
                        paragraph3: 'no'
        
                    }
                },
                {
                    title: 'Nivel básico',
                    id: 'basico',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'Introducción al Minecraft técnico: Proporciona una introducción amigable y accesible al mundo del Minecraft técnico, explicando los conceptos básicos de la redstone, la automatización y las construcciones avanzadas.',
                        paragraph2: 'Tutoriales paso a paso para principiantes: Crea tutoriales detallados y fáciles de seguir que guíen a los principiantes a través de construcciones técnicas básicas. Puedes enseñar cómo construir una puerta automática, un sistema de iluminación con redstone o una granja de cultivos sencilla.',
                        paragraph3: 'Consejos para principiantes: Ofrece consejos prácticos y útiles para los jugadores que están comenzando con el Minecraft técnico. Puedes incluir consejos sobre cómo obtener recursos básicos, cómo aprender los fundamentos de la redstone y cómo explorar nuevas construcciones.'
                    }
                },
                {
                    title: 'Nivel intermedio',
                    id: 'intermedio',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'Construcciones avanzadas: Comparte tutoriales más complejos para jugadores intermedios, explicando cómo construir sistemas más sofisticados. Puedes mostrar cómo crear un sistema de clasificación de objetos, un sistema de transporte rápido o una granja de mobs automática.',
                        paragraph2: 'Optimización y eficiencia: Proporciona consejos para mejorar la eficiencia y optimizar las construcciones técnicas. Puedes enseñar técnicas para reducir el uso de recursos, mejorar la velocidad de los sistemas automatizados y minimizar la interferencia de señales de redstone.',
                        paragraph3: 'Diseños compactos e inteligentes: Explora diseños compactos e inteligentes que ahorren espacio en las construcciones técnicas. Comparte ideas y consejos sobre cómo crear sistemas más compactos sin sacrificar funcionalidad.'
        
                    }
                },
                {
                    title: 'Mivel avanzado',
                    id: 'avanzado',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'Redstone avanzada y circuitos complejos: Dedica esta sección a tutoriales y guías sobre redstone avanzada, como la creación de circuitos lógicos complejos, contadores, sistemas de memoria y sistemas de acceso seguro.',
                        paragraph2: 'Modificaciones y herramientas avanzadas: Explora mods y herramientas avanzadas que pueden mejorar y ampliar las posibilidades del Minecraft técnico. Comparte reseñas de mods populares y cómo utilizarlos en construcciones técnicas.',
                        paragraph3: 'Retos y proyectos avanzados: Propón retos y proyectos desafiantes para jugadores avanzados. Puedes pedirles que construyan una computadora funcional dentro del juego, un sistema de redstone para resolver un problema complejo o una construcción impresionante utilizando técnicas avanzadas.'
                    }
                },
            ],
            part5: {
                title: 'Servidores técnicos',
                content: {
                    date: '23/03/2023',
                    paragraph1: 'El modo multijugador en Minecraft permite que varios jugadores interactúen y se comuniquen entre sí en un solo mundo. Está disponible a través de multijugador directo de juego a juego, juego LAN, pantalla dividida local (solo consola) y servidores (alojados por jugadores y negocios). Los jugadores pueden ejecutar sus propios servidores, usar un proveedor de alojamiento o conectarse directamente al juego de otro jugador a través de Xbox Live. Los mundos de un solo jugador tienen soporte de red de área local, lo que permite a los jugadores unirse a un mundo en computadoras interconectadas localmente sin una configuración de servidor. Los servidores multijugador de Minecraft están guiados por operadores de servidores, que tienen acceso a los comandos del servidor, como configurar la hora del día y teletransportar a los jugadores. Los operadores también pueden establecer restricciones con respecto a qué nombres de usuario o direcciones IP pueden o no ingresar al servidor. Los servidores multijugador tienen una amplia gama de actividades, y algunos servidores tienen sus propias reglas y costumbres únicas. El servidor más grande y popular es Hypixel, que ha sido visitado por más de 14 millones de jugadores únicos. El combate jugador contra jugador (PvP) se puede habilitar para permitir la lucha entre jugadores. Muchos servidores tienen complementos personalizados que permiten acciones que normalmente no son posibles.',
                },
                table: [
                    {
                        server: "Hypixel",
                        players: "29715 jugadores en este momento",
                        ip: "mc.hypixel.net",
                    },
                    {
                        server: "Librecraft",
                        players: "6969 jugadores en este momento",
                        ip: "mc.librecraft.com",
                    },
                    {
                        server: "Complex Gaming",
                        players: "2891 jugadores en este momento",
                        ip: "hub.mc-complex.com",
                    }
                ]
            }
        }))
    },

    dataMyFooter(){
        localStorage.setItem("myFooter", JSON.stringify({
            footer: {
                creditos: "Blog para minecraft hecho por: Don Piola ",
                twitter: "@piola_don",
                link: "https://twitter.com/piola_don"
            },
        }))
    }
}

//importamos todos los objetos desde aqui hacia el local storage

//usaremos los objetos desde el local storage para meterlos en el worker y luego a las funciones asignadas

//importamos esto a cada uno