import React from "react";
import Header from "./Header";

function DashBoard() {
  return (
    <>
      <Header />

      <div>
        <h1 className="text-center">Welcome To DashBoard</h1>
        <div className="d-flex justify-content-center  align-items-center">
         <a href="/createmp"> <button   className="btn btn-primary mt-5 mx-5 d-flex justify-content-center">
            Create New Employee
          </button></a>
        </div>
      </div>
    </>
  );
}
export default DashBoard;
