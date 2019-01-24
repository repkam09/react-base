import React, { Component } from 'react';
import './Index.css';
import { Example } from "../examples/Examples";
import { FetchApiData } from "../examples/FetchApiData";
import { ChangeOnTimer } from "../examples/ChangeOnTimer";

class Index extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>Repka React Base</h3>
        </header>
        <section>
          <Example />
        </section>
        <section>
          <FetchApiData />
        </section>
        <section>
          <ChangeOnTimer />
        </section>
      </div>
    );
  }
}

export default Index;
