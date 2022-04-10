import "./App.css";
import React, { Component } from "react";
import ImportIndex from "./ImportIndex";
// this program is created to learn IMPORT and Export in React.it is an exercise from colt tutotrial its handout(question format) is present in react-bootcamp-materials=>create-react-app=>module-exercise-handout

 class App extends Component {
 
  render() {
    const heading={
     backgroundColor:"#ee9b00",
     color:"#bb3e03",
     textTransform:"upperCase",
     width:"60%",
     margin:" 12px auto",
    }
    return <div className="App">
      <h1 style={heading}>this program is created to learn IMPORT and Export in React</h1>
      <ImportIndex/>
    </div>;
  }
}

export default App;
