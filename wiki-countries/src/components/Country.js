import React, { Component } from 'react'

class Country extends Component {
  render() {
    const {country} = this.props
    return (
      <div>
          <h1>{country.name.official}</h1>
            <table class="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{country.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    {country.borders}
                  </td>
                </tr>
              </tbody>
            </table>
      </div>
    )
  }
}

export default Country;