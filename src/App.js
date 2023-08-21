import DemoComp from "./components/DemoComp";

function App() {

  return (
    <div>
      <h1>App Component</h1>
      <p>This is App component.</p>
      <DemoComp />
    </div>
  );

}

export default App;


// components, JSX, state, props 

// JSX - 
// 1. Returns only one element 
// 2. All tags should be closed 
// 3. camelCase attributes 

// function App() {

//   return (
//     <div>
//       <p>Hello world!</p>
//       {/* <p style="color: blue">Hello world!</p> */}
//       <p style={{ color: 'blue' }}>Hello world!</p>
//       <p style={{ color: 'blue', fontFamily: 'Arial' }}>Hello world!</p>
//       <form>
//         <input type={'text'} />
//       </form>
//       <img height={'200px'} src="https://programmerhumor.io/wp-content/uploads/2023/01/programmerhumor-io-javascript-memes-backend-memes-80da323d5892363-608x823.jpg" />
//     </div>
//   );

// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

