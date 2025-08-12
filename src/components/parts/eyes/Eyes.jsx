import eyesImg from './images/eyes/angry.png';
import Accessories from '../accessories/Accessories';

export default function Eyes() {
    return <div style={{backgroundImage: `url(${eyesImg})`}}>
        <Accessories />
    </div>
}