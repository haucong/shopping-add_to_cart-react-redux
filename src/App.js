import React, { Component } from "react";
import Products from "./components/Products";
import data from './data.json';
class App extends Component {
  constructor(){
    super();
    this.state ={
      products : data.products,
      size: "",
      sort: "",
    };
  }
  render(){

    return (
      <div className='grid-container'>
        <header className='App-header'>
          <a href='/'>React shopping cart</a>
        </header>
        <main>
          <div className='content'>
            <div className='main'>
              <Products products= {this.state.products} />
            </div>
            <div className='side-bar'>cart item</div>
          </div>
        </main>
        <footer>All right is reserved</footer>
      </div>
    )
}
}

export default App;
