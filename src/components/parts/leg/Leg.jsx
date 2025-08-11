import legImg from './images/leg/default.png';
import Nose from '../nose/Nose';

export default function Leg() {
    return <div style={{backgroundImage: `url(${legImg})`}}>
        <Nose />
    </div>
}