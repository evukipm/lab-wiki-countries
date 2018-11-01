import React, { Component } from 'react'
import countries from '../countries.json'
import Country from '../components/Country'

class CountryDetail extends Component {


  setCountry() {
    return countries.find(country => {
      return country.cca3 === this.props.match.params.id
    })
  }

  render() {
    const country = this.setCountry()
    
    return (
      <div>
        <Country country={country}/>
      </div>
    )
  }
}

export default CountryDetail;