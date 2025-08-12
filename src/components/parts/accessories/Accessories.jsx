import headphoneImg from './images/accessories/headphone.png'
import Mouth from '../mouth/mouth'; 

export default function Accessories() {
    return <div style={{backgroundImage: `url(${headphoneImg})`}}> 
        <Mouth />
    </div>
}