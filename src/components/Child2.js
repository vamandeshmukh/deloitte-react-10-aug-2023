import { useState } from "react";

const Child2 = () => {
    const [childData, setChildData] = useState('Monu');

    return (
        <div>
            <h1>Child2 Component</h1>
            <p>Child data in child2 component: {childData}</p>
        </div>
    );
};
export default Child2;
