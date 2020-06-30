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

class ArtistList extends Component {
  render() {
    const artists = this.props.artists;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Autor</th>
            <th>Title</th>
            <th>Img</th>
            <th>URL</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          {!artists || artists.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Sin datos</b>
              </td>
            </tr>
          ) : (
            artists.map((item) => (
              <tr >
                <td>{item.autor}</td>
                <td>{item.title}</td>
                <td><a href={item.url_pic}><img  width="100" src={item.url_pic} alt={item.title}/></a></td>
                <td><a href={item.url_pic}>{item.url_pic}</a></td>
                <td>{item.year}</td>


              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ArtistList;
