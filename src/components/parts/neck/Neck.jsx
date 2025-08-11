import neckImg from './images/neck/default.png';
import Leg from '../leg/Leg';

export default function Neck() {
    return <div style={{backgroundImage: `url(${neckImg})`}}>
        <Leg />
    </div>
}