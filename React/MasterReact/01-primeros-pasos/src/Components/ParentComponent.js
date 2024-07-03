import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class ParentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          message: 'Hello from Parent Component!',
          name: 'John Doe'
        };
      }

  render() {
    return (
      <div>
            <h1>Parent Component</h1>
            <ChildComponent 
                message={this.state.message} 
                name={this.state.name} 
            />
            <h2>Pasando las propiedades en el componente</h2>
            <p>
                {this.state.message} <br/> 
                {this.state.name} 
            </p>

    
      </div>
    )
  }
}
