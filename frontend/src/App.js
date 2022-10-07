import React from "react";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-12">
          <div className="container">
            <Form />
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
