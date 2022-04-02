const products = [
    {
        id:1,
        name: 'Tote bag roja',
        price: 690,
        category: 'Tote bag',
        img:  'https://scontent.fmvd1-1.fna.fbcdn.net/v/t39.30808-6/240826460_346337270518304_3216991033106185439_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=hkjY8WpHS08AX-01uGp&_nc_ht=scontent.fmvd1-1.fna&oh=00_AT_5Nr4nkFDgDxCEEeUW0yOE_FISP0wmOxiH71q-HnL5ow&oe=62475345',
        stock:10,
        description: 'Tote bag rojo de pana con bolsillo interior',
    },

    {
        id:2,
        name: 'Tote bag verde',
        price: 690,
        category: 'Tote bag',
        img: 'https://scontent.fmvd1-1.fna.fbcdn.net/v/t39.30808-6/241068985_346339413851423_4152060256157166162_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=gmEd7lmBntkAX-uaYw4&_nc_ht=scontent.fmvd1-1.fna&oh=00_AT-zNJSOUecFN56Q2-cosID1iS0pPf93zI6Z0DrvL4YdPw&oe=62480EBB',
        stock:10,
        description: 'Tote bag verde de pana con bolsillo interior',
    },

    {
        id:3,
        name: 'Tote bag bordó',
        price: 690,
        category: 'Tote bag',
        img: 'https://scontent.fmvd1-1.fna.fbcdn.net/v/t39.30808-6/240976567_346340330517998_3198879985097829006_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=19Nw3x80084AX_1lMVA&_nc_ht=scontent.fmvd1-1.fna&oh=00_AT_txqPZXLclfAsmhTOT34DY55KL_MVCG44HfJDWN8EnoQ&oe=62465FDB',
        stock:10,
        description: 'Tote bag bordó de pana con bolsillo interior',
    },

    {
        id:4,
        name: 'Scrunchies',
        price: 230,
        category: 'Scrunchies',
        img: 'https://scontent.fmvd3-1.fna.fbcdn.net/v/t39.30808-6/241680195_352214329930598_6077932755530452988_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=dYjtLNMnJPcAX_9_QeA&_nc_oc=AQkiFyiJA1gI2RMxw550C_Z9-_XEZooMg9B7IbxQeKoTRlmnQHDilgITaHrjemCcMFc&_nc_ht=scontent.fmvd3-1.fna&oh=00_AT9nn5kPZRkGTd8wcDN4TPcCYQlbShcTuXgm3Q3g_XuioA&oe=624D1DF2',
        stock:30,
        description: 'Scrunchies de pana',
    },

    {
        id:5,
        name: 'Gorro',
        price: 590,
        category: 'Tejido',
        img: 'https://scontent.fmvd3-1.fna.fbcdn.net/v/t1.6435-9/200252219_297087795443252_614362874547591892_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a26aad&_nc_ohc=Wbp3AmL_xCUAX-7eJF9&_nc_ht=scontent.fmvd3-1.fna&oh=00_AT-gUY4wF_pjPCi8sZ7RzoRZwjYBPePQZgVOFluw28BQgw&oe=626DD4CF',
        stock:3,
        description: 'Gorro de lana merino tejido a mano',
    },

    {
        id:6,
        name: 'Gorro',
        price: 590,
        category: 'Tejido',
        img: 'https://scontent.fmvd3-1.fna.fbcdn.net/v/t1.6435-9/201016664_297086792110019_2311000256854232423_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=a26aad&_nc_ohc=S4LL0A3jM8sAX_e8wp4&_nc_ht=scontent.fmvd3-1.fna&oh=00_AT_q2yglcgXmM6z4ZoL2qAvuOwJgpTIRTQoroRjcOr_pZw&oe=626F3784',
        stock:5,
        description: 'Gorro de lana merino tejido a mano',
    },
]

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            category ? resolve(products.filter(prod => prod.category === category)) : resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === parseInt(id)))
        }, 2000)
    })
}
