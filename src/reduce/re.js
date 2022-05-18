import React from "react";

const Total = props => {
  const total = props.parts.reduce(
    (a,b) => a + b.exercises,
    0
  );
  return <p>TOTAL: {total}</p>;
};

export default Total;