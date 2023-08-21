import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    const [parentData, setParentData] = useState('Sonu');

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Parent data in parent component: {parentData} </p>
            <Child parentDataToChild={parentData} />
        </div>
    );
};
export default Parent;