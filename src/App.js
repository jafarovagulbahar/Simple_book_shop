import React from "react";
import {connect} from 'react-redux'
import "./App.css";
import { Route } from "react-router-dom";

import Products from "./component/Product";
import Card from "./component/Card";

import 'antd/dist/antd.css';
import Hero from "./component/Hero";

const App =(props)=> {
  return (
    <div className="App">
     <Hero/>
      <Route exact path="/" component={Products} />
      <Route path="/card" component={Card} />
    </div>
  );
}

const mapStateToProps = state =>{
  return {
    bookList:state.bookList
    
  }
}

export default connect(mapStateToProps)(App);
