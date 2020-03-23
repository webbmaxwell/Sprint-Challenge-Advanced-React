import React from 'react';
import { axios } from 'axios';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  axios.get("http://localhost:5000/api/players")
    .then(function(response) {
      console.log(response)
    })
    .catch(function(error) {
      console.log(error)
    });
}};


export default Data;
