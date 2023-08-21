import { useState } from "react";

const Child = (props) => {
    const [childData, setChildData] = useState('Monu');
    const [parentDataInChild, setParentDataInChild] = useState(props.parentDataToChild);
    const sendDataToParent = () => { props.childDataToParent(childData); };
    return (
        <div>
            <h1>Child Component</h1>
            <p>Parent data in child component: {parentDataInChild}</p>
            <p>Child data in child component: {childData}</p>
            <button onClick={sendDataToParent}>Send Data To Parent</button>
        </div>
    );
};
export default Child;