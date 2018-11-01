import React, { Component } from 'react';
import countries from './countries.json'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom'
import CountryDetail from './pages/CountryDetail.js';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
        <div class="container">
          <div class="row">
            <div class="col-5">
              <div class="list-group">
              {countries.map(country => {
                return <Link className="list-group-item list-group-item-action" to={country.cca3}>{country.flag} {country.name.official}</Link>
              })}
              </div>
            </div>
            <div class="col-7">
              <Route path="/:id" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
