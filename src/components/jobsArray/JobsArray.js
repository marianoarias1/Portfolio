import NUCBA from '../../images/jobsImg/0800NUCBA.png'
import Living from '../../images/jobsImg/Living Photography.png'
import Shift from '../../images/jobsImg/ShiftKeys.png'
import Simpsons from '../../images/jobsImg/simpsons.png'

export const jobs=[
    {
        id:'1',
        name:'Living Photography',
        desc:'Un fake e-commerce realizado en mis inicios solo con HTML&CSS. Diseño responsive usando meadia queries.',
        url:Living,
        link:'https://proyecto-integrador-five.vercel.app/',
    },
    {
        id:'2',
        name:'ShiftKeys',
        desc:'Fake e-commerce realizado con HTML, CSS Y JAVASCRIPT. Manejo de DOM realizado con JS, carrito hecho con JS y uso de Local Storage para persistir los datos del usuario.',
        url:Shift,
        link:'https://shiftkeys.vercel.app/',
    }, 
    {
        id:'3',
        name:'0800NUCBA',
        desc:'Fake e-commerce Realizado con React.js, styled components, Redux y FireBase, manejo de registro y logueo con formik.',
        url:NUCBA,
        link:'https://0800-nucba-ckbw.vercel.app/home',
    },
    {
        id:'4',
        name:'API-Simpons',
        desc:'Una página que utiliza una api para consultar los datos de personajes de los Simpsons, tales como el nombre, la imagen, y una frase aleatoria (hay diferentes frases para un mismo personaje)',
        url:Simpsons,
        link:'https://api-simpons.vercel.app/',
    }
]