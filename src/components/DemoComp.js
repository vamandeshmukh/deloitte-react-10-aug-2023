
import { useState } from "react";

// form in react 
const DemoComp = () => {

    const [empData, setEmpData] = useState({ eid: '', firstName: '', salary: '' });
    const [empData2, setEmpData2] = useState({ eid: '', firstName: '', salary: '' });

    const handleEmpInput = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
    };

    const handleEmpSubmit = (evt) => {
        console.log(empData);
        alert('Sobmitted!');
        setEmpData2(empData);
        setEmpData({ eid: '', firstName: '', salary: '' });
        evt.preventDefault();
    };

    return (
        <div className="container">
            <h1>Demo Component</h1>
            <p>This is demo component.</p>
            <div>
                <form onSubmit={handleEmpSubmit}>
                    <input type={'number'} name="eid" value={empData.eid}
                        onChange={handleEmpInput} placeholder="Eid" />
                    <input type={'text'} name="firstName" value={empData.firstName}
                        onChange={handleEmpInput} placeholder="First name" />
                    <input type={'number'} name="salary" value={empData.salary}
                        onChange={handleEmpInput} placeholder="salary" />
                    <input type={'submit'} value="Submit" />
                </form>
                {/* <form >
                    <input type={'number'} name="eid" value={empData.eid}
                        onChange={handleEmpInput} placeholder="Eid" />
                    <input type={'text'} name="firstName" value={empData.firstName}
                        onChange={handleEmpInput} placeholder="First name" />
                    <input type={'number'} name="salary" value={empData.salary}
                        onChange={handleEmpInput} placeholder="salary" />
                    <input type={'button'} value="Submit" onClick={handleEmpSubmit} />
                </form> */}
                {/* <form>
                    <input type={'number'} name="eid" value={empData.eid}
                        onChange={(evt) => { setEmpData({ eid: evt.target.value }); }} placeholder="Eid" />
                    <input type={'text'} name="firstName" value={empData.firstName}
                        onChange={(evt) => { setEmpData({ firstName: evt.target.value }); }} placeholder="First name" />
                    <input type={'number'} name="salary" value={empData.salary}
                        onChange={(evt) => { setEmpData({ salary: evt.target.value }); }} placeholder="salary" />
                </form> */}
            </div>

            <div>
                <h4>Form data as entered:</h4>
                <p>Eid: {empData.eid} </p>
                <p>Name: {empData.firstName}</p>
                <p>Salary: {empData.salary}</p>
            </div>
            <div>
                <h4>Form data after submit:</h4>
                <p>Eid: {empData2.eid} </p>
                <p>Name: {empData2.firstName}</p>
                <p>Salary: {empData2.salary}</p>
            </div>

        </div>
    );
};

export default DemoComp;


// import { useState } from "react";

// const DemoComp = () => {

//     // const [empData, setEmpData] = useState({ eid: 101, firstName: 'Sonu', salary: 10.50 });
//     const [empList, setEmpList] = useState([
//         { eid: 101, firstName: 'Sonu', salary: 10.50 },
//         { eid: 102, firstName: 'Monu', salary: 15.50 },
//         { eid: 103, firstName: 'Tonu', salary: 12.50 }
//     ]);

//     return (
//         <div>
//             <h1>Demo Component</h1>
//             <p>This is demo component.</p>
//             <p>EID NAME SALARY</p>
//             <p> {empList.map((e) => {
//                 return <div><span>{e.eid}</span><span>{e.firstName}</span><span>{e.salary}</span></div>
//             })
//             } </p>
//         </div>
//     );
// };

// export default DemoComp;


// import { useState } from "react";

// const DemoComp = () => {

//     const [eid, setEid] = useState(1);
//     let eid2 = 2;

//     const updateEid = () => {
//         setEid(eid + 1);
//         eid2 += 1;
//     };

//     return (
//         <div>
//             <h1>Demo Component</h1>
//             <p>This is demo component.</p>
//             <p>Eid {eid} </p>
//             <p>Eid2 {eid2} </p>
//             <button onClick={updateEid}>Update</button>
//         </div>
//     );

// };

// export default DemoComp;



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