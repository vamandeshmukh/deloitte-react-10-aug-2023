import { useState } from "react";

const Child = (props) => {

    const [childData, setChildData] = useState('Monu');

    const sendDataToParent = () => {
        console.log(childData);
        props.getData(childData); // function call 
    };
    return (
        <div>
            <h1>Child Component</h1>
            <p>Child data in child component: {childData}</p>
            <button type="button" onClick={sendDataToParent}>Send Data To Parent</button>
        </div>
    );
};
export default Child;


