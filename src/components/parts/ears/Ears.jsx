import earImg from './images/ears/default.png';
import Neck from '../neck/Neck';

export default function Ears() {
    return <div style={{backgroundImage: `url(${earImg})`}}>
        <Neck />
    </div>
}