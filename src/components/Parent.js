import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "../redux/Store";
import Child from "./Child";
import Child2 from "./Child2";

const Parent = () => {

    const [childDataInParent, setChildDataInParent] = useState('');

    const dataFromStore = useSelector((store) => { return store.writer.writerObj });

    useEffect(() => {
        console.log(dataFromStore);
    },
        [dataFromStore]);

    // call to this funciotn 
    const getChildData = (arg) => {
        console.log(arg);
        setChildDataInParent(arg);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Parent component</p>
            {/* <Child getData={getChildData} /> */}
            {/* <Child2 ch1ToCh2={childDataInParent} /> */}
            {/* {
                childDataInParent &&
                <Child2 ch1ToCh2={childDataInParent} />
            } */}
        </div>
    );
};
export default Parent;


// import Child from "./Child";
// import Child2 from "./Child2";

// const Parent = () => {

//     return (
//         <div>
//             <h1>Parent Component</h1>
//             <p>Parent component</p>
//             <Child />
//             <Child2 />
//         </div>
//     );
// };
// export default Parent;


// import { useState } from "react";
// import Child from "./Child";

// const Parent = () => {
//     const [parentData, setParentData] = useState('Sonu');
//     const [childDataInParent, setChildDataInParent] = useState('');
//     const getChildData = (arg) => { setChildDataInParent(arg); };
//     return (
//         <div>
//             <h1>Parent Component</h1>
//             <p>Parent data in parent component: {parentData} </p>
//             <p>Child data in parent component: {childDataInParent} </p>
//             <Child parentDataToChild={parentData} childDataToParent={getChildData} />
//         </div>
//     );
// };
// export default Parent;
