import hairImg from './images/hair/bang.png';

export default function Hair(props) {
    return <div>
        <img src={hairImg} />
        {props.children}
    </div>
}