// App.js
import React, { Component } from 'react';
import Header from './component/Header';
import MessageList from './component/MessageList';
import MessageBox from './component/MessageBox';
import firebase from 'firebase';
class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyCLFoZr_8Z3IHM3YathznkjMGTkDZyaIwY",
      authDomain: "onbase-7e9f3.firebaseapp.com",
      databaseURL: "https://onbase-7e9f3.firebaseio.com",
      projectId: "onbase-7e9f3",
      storageBucket: "",
      messagingSenderId: "334244975788",
      appId: "1:334244975788:web:f2feabc2aa4e276a"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;