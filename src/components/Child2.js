// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// const Child2 = (props) => {

//     const [child2Data, setChild2Data] = useState('');

//     useEffect(() => {
//         console.log(props);
//         setChild2Data(props.ch1ToCh2);
//     },
//         [props]);

//     return (
//         <div>
//             <h1>Child2 Component</h1>
//             <p>Child data in child2 component: {child2Data}</p>
//         </div>
//     );
// };

// export default Child2;

const Child2 = (props) => {

    const [ch1DataInCh2, setCh1DataInCh2] = useState('');

    // useEffect(() => { }, []);

    useEffect(() => {
        setCh1DataInCh2(props.ch1ToCh2);
    },
        [props]);

    return (
        <div>
            <h1>Child2 Component</h1>
            <p>Child data in child2 component: {ch1DataInCh2}</p>
        </div>
    );
};

export default Child2;




// import { useState } from "react";

// const Child2 = () => {
//     const [child2Data, setChild2Data] = useState('');

//     return (
//         <div>
//             <h1>Child2 Component</h1>
//             <p>Child data in child2 component: {child2Data}</p>
//         </div>
//     );
// };
// export default Child2;
