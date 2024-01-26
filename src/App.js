import "./App.css";
import Form from "./components/Form.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="d-flex justify-content-end align-items-center px-4 text-light" style={{height: "100px" , backgroundColor: "	rgb(48,48,48)" , fontSize: "25px"}}>
        Web Based Expression Engine UI 
      </div>
      <Form />
    </div>
  );
}

export default App;
