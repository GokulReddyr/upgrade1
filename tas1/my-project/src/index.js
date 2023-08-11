import React from "react";
import ReactDOM from "react-dom";
import Table from "./table";

import "./styles.css";
import ExportExcel from "./excelexport";
import { allData } from "./constants";

function App() {
  return (
    <div className="App">
      <div class="heading">Resume List</div>
      <Table />
      <div>
        <h1 style={{marginTop:"20%"}}>Excel Export</h1>
        <ExportExcel excelData={allData} fileName={"Excel Export"}/>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
