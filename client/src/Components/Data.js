import React from 'react';
import axios from 'axios';

class PlayerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: ""
    };

  componentDidMount()
    axios.get("http://localhost:5000/api/players")
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
  };

    render() {
      return <h1>Data</h1>;
    };
}};


export default PlayerList;
