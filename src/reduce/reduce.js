import React, { Component } from 'react';
import Total from './re';
const Reducess = () => {
    const course = {
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 90,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercises: 73,
          id: 2
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3
        }
      ]
    };
  
    return (
      <div>
        <Total parts={course.parts} />
      </div>
    );
  };
  

export default Reducess;