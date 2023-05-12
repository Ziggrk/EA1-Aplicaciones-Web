import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale:'en',
    messages:{
        en:{
            "home": "Home",
            "records": "Records",
            "food truck winner": "Food Truck Winner",
            "example": "Example Text",
            "name": "Name",
            "ownerFirstName": "Owner First Name",
            "ownerLastName": "Owner Last Name",
            "brandName": "Brand Name",
            "pageNotFound": "Ooops, Page Not Found",
            "backHome": "Back Home",
            "views": "Views",
            "like": "Likes",
            "seeMore": "See more",
            "author": "Author"
        },
        es:{
            "home": "Inicio",
            "records": "Registros",
            "food truck winner": "Carrito de comida Ganador",
            "example": "Texto de Ejemplo",
            "name": "Nombre",
            "ownerFirstName": "Nombre del propietario",
            "ownerLastName": "Apellido del propietario",
            "brandName": "Nombre de marca",
            "pageNotFound": "Ooops, pagina no encontrada",
            "backHome": "Regresar",
            "views": "Vistas",
            "like": "Me gusta",
            "seeMore": "Observar",
            "author": "Autor"
        }
    }
})

export  default  i18n;