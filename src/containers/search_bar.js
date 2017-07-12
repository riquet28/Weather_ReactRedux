import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    // La valeur du button sera mappée dans ce state
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // Récupération de l'input de la search bar
  onInputChange(event) {
    this.setState({ term: event.target.value }); // Met à jour le state du composant
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Nous avons besoin d'aller recupérer les données météo
    // Lorsque le user click ou press enter il appele notre action creator
    this.props.fetchWeather(this.state.term);
    // Remet le state a vide et re-rend le formulaire vide
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
