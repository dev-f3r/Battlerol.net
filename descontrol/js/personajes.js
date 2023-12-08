const personajesDict = {
    "default": {
        nombre: "default",
        descripcion: "personaje sin descripción",
        imagen: "img/nuevopjico.png",
        ataque: 0,
        esquiva: 0,
        velocidad: 0,
        vida: 0,
        accion: 0,
    },
    "test1": {
        nombre: "test1",
        descripcion: "descripcion test1",
        imagen: "img/nuevopjico.png",
        ataque: 6,
        esquiva: 5,
        velocidad: 4,
        vida: 18,
        accion: 2,
    },
    "test2": {
        nombre: "test2",
        descripcion: "descripcion test2",
        imagen: "img/nuevopjico.png",
        ataque: 5,
        esquiva: 4,
        velocidad: 3,
        vida: 18,
        accion: 1,
    },
    "test3": {
        nombre: "test3",
        descripcion: "descripcion test3",
        imagen: "img/nuevopjico.png",
        ataque: 4,
        esquiva: 3,
        velocidad: 2,
        vida: 18,
        accion: 6,
    },

    "test4": {
        nombre: "test4",
        descripcion: "descripcion test4",
        imagen: "img/nuevopjico.png",
        ataque: 3,
        esquiva: 2,
        velocidad: 1,
        vida: 18,
        accion: 5,
    },

    "test5": {
        nombre: "test5",
        descripcion: "descripcion test5",
        imagen: "img/nuevopjico.png",
        ataque: 2,
        esquiva: 1,
        velocidad: 6,
        vida: 18,
        accion: 4,
    }
}

const estadosDict = {
    ebrio: {
        general: {
            nombre: "ebrio",
            imagen: "img/ebrio.png",
        },
        atributos: {
            ataque: 0,
            esquiva: -2,
            velocidad: -2,
            vida: -2,
            accion: 2,
        },
    },
    lucido: {
        general: {
            nombre: "lucido",
            imagen: "img/lucido.png",
        },
        atributos: {
            ataque: 0,
            esquiva: 0,
            velocidad: 0,
            vida: 0,
            accion: 0,
        },
    },
    extaciado: {
        general: {
            nombre: "extaciado",
            imagen: "img/extaciado.png",
        },
        atributos: {
            ataque: 2,
            esquiva: 2,
            velocidad: 2,
            vida: 0,
            accion: -2,
        },
    }
}