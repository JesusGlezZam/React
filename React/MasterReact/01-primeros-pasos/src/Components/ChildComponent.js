/*import React from 'react'


// Es posible solo hacer un componente y usarlo en return o render
const ChildComponent = (props) => {
    return (
      <div>
        <h2>Child Component</h2>
        <p>{props.message}</p>
        <p>Name: {props.name}</p>
      </div>
    );
  };

  export default ChildComponent;*/


  // ejemplo pasandolo recibiendo e iniciando el valor inicial desde statedebe ser una clase
  
  import React, { Component } from 'react';

  class ChildComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        childMessage: `Received: ${props.message}`,
        childName: props.name
      };
    }
  
    render() {
      return (
        <div>
          <h2>Child Component</h2>
          <p> {this.state.childMessage}</p>
          <p>Name: {this.state.childName}</p>
        </div>
      );
    }
  }
  
  export default ChildComponent;
  