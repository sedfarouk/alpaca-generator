import noseImg from './images/nose.png';
import Eyes from '../eyes/Eyes';

export default function Nose() {
    return <div style={{backgroundImage: `url(${noseImg})`}}>
        <Eyes />
    </div>
}