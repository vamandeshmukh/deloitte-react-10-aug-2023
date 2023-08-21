import { useState } from "react";

const DemoComp = () => {

    const [eid, setEid] = useState(1);
    let eid2 = 2;

    const updateEid = () => {
        setEid(eid + 1);
        eid2 += 1;
    };

    return (
        <div>
            <h1>Demo Component</h1>
            <p>This is demo component.</p>
            <p>Eid {eid} </p>
            <p>Eid2 {eid2} </p>
            <button onClick={updateEid}>Update Values</button>
        </div>
    );

};

export default DemoComp;



// import { useState } from "react";

// // STATE - One object for one component

// const DemoComp = () => {

//     const [eid, setEid] = useState(''); // number field
//     const [firstName, setFirstName] = useState(''); // string field
//     const [salary, setSalary] = useState(''); // number field
//     const [isMarried, setIsMarried] = useState(false); // boolean field

//     const [empData, setEmpData] = useState({}); // object field
//     // const [empData, setEmpData] = useState({ eid: '', firstName: '', salary: '' }); // object field

//     const [phones, setPhones] = useState([]); // array field

//     // const eid = 101;
//     // const firstName = 'Sonu'; // print this only if available
//     // const salary = 100;

//     return (
//         <div>
//             <h1>Demo Component</h1>
//             <p>This is demo component.</p>
//             {/* {firstName && <p>First Name: {firstName} </p>}
//             <p> {salary + 10} </p> */}
//         </div>
//     );

// };

// export default DemoComp;


// const DemoComp = () => {

//     const firstName = 'Sonu'; // print this only if available
//     const salary = 100;

//     // let renderName = '';
//     // if (firstName)
//     //     renderName = '<p>First Name: {firstName} </p>'
//     // else
//     //     renderName = 'Not available';

//     return (
//         <div>
//             <h1>Demo Component</h1>
//             <p>This is demo component.</p>
//             {firstName && <p>First Name: {firstName} </p>}
//             <p> {salary + 10} </p>
//         </div>
//     );

// };

// export default DemoComp;


// // class component

// import { Component } from "react";

// class DemoComp extends Component {

//     render() {
//         return (
//             <div>
//                 <h1>Demo Component</h1>
//                 <p>This is demo component.</p>
//             </div>
//         );
//     }
// };

// export default DemoComp;

// function component with arrow function syntax
// const DemoComp = () => {

//     return (
//         <div>
//             <h1>Demo Component</h1>
//             <p>This is demo component.</p>
//         </div>
//     );

// };

// export default DemoComp;

// function component with old JS function syntax
// function DemoComp() {

// };

// export default DemoComp;