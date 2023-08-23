import { useState } from "react";

const Child2 = () => {
    const [child2Data, setChild2Data] = useState('');

    return (
        <div>
            <h1>Child2 Component</h1>
            <p>Child data in child2 component: {child2Data}</p>
        </div>
    );
};
export default Child2;
