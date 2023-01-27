import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Topic6 = () => {
  let Navigate = useNavigate();
  const [name, setName] = useState("Pavan");

  const ChangeName = () => {
    setName("hhhhhhhhhhh");
  };
  useEffect(() => {
   setTimeout(() => {
   Navigate("/");
   }, 1000);
    }, [name,Navigate]);

  return (
    <>
      {/* <button onClick={Goback}>Go Back</button> */}
      <div>
        <h1>{name}</h1>
        <h3>Hello Pagal Log</h3>

        <button onClick={ChangeName}>Submit</button>
      </div>
    </>
  );
};

export default Topic6;
