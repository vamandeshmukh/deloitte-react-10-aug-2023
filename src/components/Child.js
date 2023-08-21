
const Child = (props) => {
    return (
        <div>
            <h1>Child Component</h1>
            <p>Parent data in child component: {props.parentDataToChild} </p>
        </div>
    );
};
export default Child;