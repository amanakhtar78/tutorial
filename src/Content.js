import React from "react";

const Content = () => {
  const chanege = () => {
    const names = ["c", "f", "e"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  const handleclick1 = () => {
    console.log("you clicjed it ");
  };
  const handleclick2 = (name) => {
    console.log(`${name} was you click  `);
  };
  const handleclick3 = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <article>
      <p onDoubleClick={handleclick1}>yeyeye eyey {chanege()}</p>
      <button onClick={handleclick1}>click</button>
      <button onClick={() => handleclick2("dave")}>click</button>
      <button onClick={(e) => handleclick3(e)}>click 3it</button>
    </article>
  );
};

export default Content;
