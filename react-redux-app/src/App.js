import React, { useState } from 'react';
import { connect } from 'react-redux'
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Form from './components/Form';
import Saved from './components/Saved'
import SavedContext from './contexts/ProductContext'

import { saved } from './actions'


function App(props) {
  const [savedInfo, setSavedInfo] = useState([])

  const addItem = (item) => {
    console.log('saved action', props.saved())
    return setSavedInfo([...savedInfo, item])
  }

  return (
    <div className="main-container">
      <SavedContext.Provider value={{ savedInfo, addItem }}>
        <Header />
        <Route exact path='/' component={Form} />
        <Route exact path='/saved' component={Saved} />
      </SavedContext.Provider>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isSaved: state.isSaved
  }
}

export default connect(mapStateToProps, { saved })(App);
