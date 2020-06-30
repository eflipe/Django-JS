import React, { Component } from "react";
import {
  Table,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardDeck,
  CardSubtitle,
} from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ArtistList extends Component {
  render() {
    const artists = this.props.artists;
    return (
      <div className="carousel-wrapper">
          {!artists || artists.length <= 0 ? (
            <Card>
              <CardImg variant="top" src="" />
              <CardBody>
                <CardTitle>No hay IMG</CardTitle>
                <CardText>No hay imagen</CardText>
              </CardBody>
            </Card>
          ) : (
        <Carousel width={500} infiniteLoop useKeyboardArrows autoPlay >
            artists.map((item) => (
              <div key={item.pk}>
                <img src={item.url_pic} />
              </div>
            ))
          </Carousel>
          )}
      </div>
    );
  }
}

export default ArtistList;
