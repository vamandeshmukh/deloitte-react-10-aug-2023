import { useState } from "react";

const Child = () => {
    const [childData, setChildData] = useState('Monu');

    return (
        <div>
            <h1>Child Component</h1>
            <p>Child data in child component: {childData}</p>
        </div>
    );
};
export default Child;
