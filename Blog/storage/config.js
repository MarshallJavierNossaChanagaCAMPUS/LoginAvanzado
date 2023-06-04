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
                        paragraph1: 'Al inicio del juego, el jugador se encuentra en un mundo generado mediante un algoritmo, lo que permite que este sea teóricamente infinito y nunca se generen dos mundos iguales.',
                        paragraph2: 'El jugador es libre de desplazarse por el terreno, conformado por distintos biomas, entre los que se encuentran desiertos, sabanas, selvas, océanos, llanuras, tundras, etcétera.',
                        paragraph3: 'El juego posee su propio ciclo de tiempo de día y noche, siendo que un día en el juego equivale a 20 minutos en la realidad. El mundo no se genera por completo al principio, sino que está dividido en chunks («trozos», «pedazos» traducido literalmente al español, pero sin adaptación oficial) de 16  16 bloques en horizontal. Los chunks cercanos al jugador se cargan en la memoria. A medida que este se desplaza, se generan y añaden nuevos chunks al mundo.'
        
                    }
                },
                {
                    title: 'Nivel básico',
                    id: 'basico',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'Materiales básicos y herramientas: Al comenzar en Minecraft técnico vanilla, necesitarás recolectar materiales básicos como madera, piedra y carbón. La madera te permitirá construir herramientas básicas, como picos y hachas, mientras que la piedra te permitirá crear herramientas más duraderas y efectivas. Además, el carbón te será útil para obtener luz y fundir minerales. Estos materiales son esenciales para empezar a explorar y recolectar otros recursos valiosos como hierro, oro y diamantes.',
                        paragraph2: 'Construcción de refugio: Para protegerte de los peligros del mundo de Minecraft y tener un lugar seguro donde pasar las noches, es fundamental construir un refugio. Puedes comenzar con una estructura simple hecha de bloques de madera o piedra. A medida que avances, puedes expandir y mejorar tu refugio utilizando diferentes tipos de bloques y materiales. Asegúrate de incluir una cama para poder establecer tu punto de reaparición y evitar tener que volver al inicio en caso de muerte.',
                        paragraph3: 'Agricultura y alimentación: La agricultura es una habilidad importante para mantener una fuente constante de alimentos. Puedes empezar plantando semillas de trigo y cultivar otros alimentos como zanahorias y patatas. Además, la cría de animales te proporcionará carne y otros recursos. Recuerda construir un área cercada para tus animales y asegurarte de alimentarlos adecuadamente. La alimentación adecuada te permitirá mantener un suministro constante de alimentos para saciar tu hambre y evitar problemas de salud.'
                    }
                },
                {
                    title: 'Nivel intermedio',
                    id: 'intermedio',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'Minado eficiente: En un nivel intermedio, es importante dominar las técnicas de minado eficiente para recolectar recursos valiosos de manera más rápida y efectiva. Puedes utilizar estrategias como la creación de minas en forma de "túneles" a diferentes alturas para encontrar una amplia variedad de minerales. Además, puedes implementar la técnica de "branch mining" o minería en ramificaciones, que consiste en cavar túneles laterales a diferentes alturas para cubrir una mayor área y maximizar tus hallazgos de minerales.',
                        paragraph2: 'Redstone avanzado y automatización: A medida que avanzas en Minecraft técnico, puedes explorar conceptos de redstone más avanzados para crear sistemas automatizados. Puedes construir circuitos complejos utilizando repetidores, comparadores y pistones para diseñar sistemas de puertas automáticas, granjas automáticas y sistemas de clasificación de objetos. También puedes aprender a utilizar los raíles de redstone y los mecanismos de activación para crear sistemas de transporte automatizados para tus recursos.',
                        paragraph3: 'Construcción de proyectos técnicos avanzados: A nivel intermedio, puedes desafiarte a ti mismo construyendo proyectos técnicos más grandes y complejos. Puedes crear sistemas de almacenamiento y clasificación de objetos utilizando cofres y hopper. También puedes experimentar con la creación de máquinas redstone como relojes, dispensadores automáticos y sistemas de iluminación sofisticados. Además, puedes explorar la creación de granjas automáticas de cultivos y criaturas, así como la construcción de estructuras avanzadas como fábricas y estaciones de redstone.'
        
                    }
                },
                {
                    title: 'Mivel avanzado',
                    id: 'avanzado',
                    content: {
                        date: '23/03/2023',
                        paragraph1: 'Diseño y construcción de sistemas de redstone complejos: A nivel avanzado, puedes dedicarte a crear sistemas de redstone altamente complejos y sofisticados. Puedes explorar técnicas como la creación de circuitos lógicos avanzados utilizando compuertas lógicas y circuitos de memoria para diseñar sistemas de seguridad, contraseñas y desafíos. Además, puedes investigar sobre la utilización de bloques de comandos para crear mecanismos más avanzados y automatizar acciones en el juego.',
                        paragraph2: 'Granjas y producción masiva: En un nivel avanzado, puedes construir granjas y sistemas de producción masiva para obtener recursos en grandes cantidades. Puedes diseñar granjas automáticas para cultivos, ganado y criaturas hostiles. Además, puedes crear sistemas de procesamiento y almacenamiento automático para los recursos obtenidos. Esto te permitirá obtener una cantidad significativa de materiales y recursos para tus proyectos tecnológicos y construcciones.',
                        paragraph3: 'Proyectos técnicos complejos: A medida que avanzas en Minecraft técnico en un nivel avanzado, puedes embarcarte en proyectos técnicos aún más complejos y ambiciosos. Puedes construir sistemas de transporte masivo utilizando raíles y pistones para crear redes de transporte de objetos a larga distancia. También puedes experimentar con la creación de sistemas de energía renovable utilizando fuentes como energía solar o eólica. Además, puedes explorar la creación de sistemas de automatización avanzados para la producción de objetos y el procesamiento de recursos.'
                    }
                },
            ]
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