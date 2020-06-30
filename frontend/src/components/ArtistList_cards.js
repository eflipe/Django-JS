import React, { Component} from "react";
import { Table, Card, CardImg, CardText, CardBody,
  CardTitle, CardDeck, CardSubtitle} from "reactstrap";
import NewArtistsModal from "./NewArtistsModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ArtistList extends Component {
  render() {
    const artists = this.props.artists;
    return (
      <CardDeck>
        {!artists || artists.length <= 0 ? (
          <Card>
            <CardImg variant="top" src="" />
            <CardBody>
              <CardTitle>No hay IMG</CardTitle>
              <CardText>No hay imagen</CardText>
            </CardBody>
          </Card>
        ) : (
          artists.map((item) => (
            <Card key={item.pk}>
              <CardImg variant="top" src={item.url_pic} />
              <CardBody>
                <CardTitle>{item.title}</CardTitle>
                <CardText>
                  Autor: {item.autor}
                <CardSubtitle>Año: {item.year}</CardSubtitle>

                </CardText>
              </CardBody>
            </Card>
          ))
        )}
      </CardDeck>
    );
  }
}

export default ArtistList;
