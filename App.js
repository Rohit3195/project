// import React from "react";
// import ReactDom from "react-dom/client";

// const Title = () => (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX
//     </h1>
// );

const heading=document.createElement("h1");
heading.innerHTML = "Hello World from javascript!";

const root = document.getElementById("root");
root.appendChild(heading);