import headphoneImg from './images/accessories/headphone.png'
import Ears from '../ears/Ears'

export default function Accessories() {
    return <div style={{backgroundImage: `url(${headphoneImg})`}}> 
        <Ears />
    </div>
}