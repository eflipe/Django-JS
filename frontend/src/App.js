import React, { Component } from 'react';
import axios from 'axios'


class App extends Component {

    state = {
      galeria: []
    }
  componentDidMount() {
    this.getGaleria()
  }

  getGaleria() {
    axios
    .get('http://192.168.99.100:8000/api/v1/')
    .then(res => {
      this.setState({ galeria: res.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        {this.state.galeria.map(item => (
          <div key={item.id}>
          <h1>{item.autor}</h1>
          <span>{item.title}</span>
          <span>{item.url_pic}</span>
          </div>
        ))}
      </div>

  );
}
}

export default App;
