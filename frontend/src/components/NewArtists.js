import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewArtists extends React.Component {
  state = {
    pk: 0,
    autor: "",
    title: "",
    url_pic: "",
    year: ""
  };

  componentDidMount() {
    if (this.props.artist) {
      const { pk, autor, title, url_pic, year } = this.props.artist;
      this.setState({ pk, autor, title, url_pic, year });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // HTTP POST
  createArtist = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {

      this.props.resetState();
      this.props.toggle();
    });
  };

  // HTTP PUT
  editArtist = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.artist ? this.editArtist : this.createArtist}>
        <FormGroup>
          <Label for="autor">Autor:</Label>
          <Input
            type="text"
            name="autor"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.autor)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="url_pic">URL:</Label>
          <Input
            type="text"
            name="url_pic"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.url_pic)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="year">Year:</Label>
          <Input
            type="text"
            name="year"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.year)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewArtists;
