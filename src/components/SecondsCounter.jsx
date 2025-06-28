import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

function SecondsCounter(props){
    let arrMax = 6
    let counter = props.counter.toString().padStart(arrMax, "0").split("").map(Number)

    return (
        <div className="container">
            <div className="card">
                <h1><FontAwesomeIcon icon={faClock} flip="horizontal" style={{color: "#e1e0db",}} /></h1>
            </div>
            <div className="card">
                <h1>{counter[0]}</h1>
            </div>
            <div className="card">
                <h1>{counter[1]}</h1>
            </div>
            <div className="card">
                <h1>{counter[2]}</h1>
            </div>
            <div className="card">
                <h1>{counter[3]}</h1>
            </div>
            <div className="card">
                <h1>{counter[4]}</h1>
            </div>
            <div className="card">
                <h1>{counter[5]}</h1>
            </div>
        </div>
    );
}

export default SecondsCounter;