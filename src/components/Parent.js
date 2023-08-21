import { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [parentData, setParentData] = useState('Sonu');
    const [childDataInParent, setChildDataInParent] = useState('');
    const getChildData = (arg) => { setChildDataInParent(arg); };
    return (
        <div>
            <h1>Parent Component</h1>
            <p>Parent data in parent component: {parentData} </p>
            <p>Child data in parent component: {childDataInParent} </p>
            <Child parentDataToChild={parentData} childDataToParent={getChildData} />
        </div>
    );
};
export default Parent;