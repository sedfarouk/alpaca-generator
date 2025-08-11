import mouthImg from './images/mouth/default.png';
import Hair from '../hair/hair';

export default function Mouth() {
    return <div style={{backgroundImage: `url(${mouthImg})`}}>
        <Hair />
    </div>
}