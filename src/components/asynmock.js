

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
    }
]

export const getProducts =() =>{
    return new Promise ((resolve) =>{
        setTimeout (() => {
            resolve (products)
        }, 2000)
    })
}