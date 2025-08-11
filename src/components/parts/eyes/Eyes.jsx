import eyesImg from './images/eyes/angry.png';
import Mouth from '../mouth/mouth';

export default function Eyes() {
    return <div style={{backgroundImage: `url(${eyesImg})`}}>
        <Mouth />
    </div>
}