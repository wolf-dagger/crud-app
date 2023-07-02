import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <>
      <div
        className="justify-content-center d-grid bg-dark"
        style={{ color: "white" }}
      >
        <h1>CRUD OPREATION APP</h1>
      </div>
      <div className="container justify-content-center">
        <Routes>
          <Route exact path="/" element={<Read />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
        {/* <Create /> */}
      </div>
    </>
  );
}

export default App;
