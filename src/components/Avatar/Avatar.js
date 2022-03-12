import './Avatar.css'
import Button from '../Button/Button'

const Avatar = ({name, age}) => {

const logger = ()=> {
    console.log('Esta función está en Avatar');
}

    return (
        <picture>
            <img src="https://randomuser.me/api/portraits/lego/5.jpg" alt="lego" />
            <p>Nombre: {name} </p>
            <p> Edad: {age}</p>
            <Button func={logger} />
        </picture>
    )
}



export default Avatar
