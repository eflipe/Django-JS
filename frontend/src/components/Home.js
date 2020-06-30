import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ArtistList from "./ArtistList";
import NewArtistsModal from "./NewArtistsModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    artists: []
  };

  componentDidMount() {
    this.resetState();
  }

  getArtists = () => {
    axios.get(API_URL).then(res => this.setState({ artists: res.data }));
  };

  resetState = () => {
    this.getArtists();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ArtistList
              artists={this.state.artists}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <NewArtistsModal create={true} resetState={this.resetState} />
          </Col>
        </Row> */}
      </Container>
    );
  }
}

export default Home;
