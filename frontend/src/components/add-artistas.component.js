import React, { Component } from "react";
import ArtistasDataService from "../services/artistas.service";

export default class AddArtista extends Component {
  constructor(props) {
    super(props);
    this.onChangeAutor = this.onChangeAutor.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeUrl_pic = this.onChangeUrl_pic.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newArtista = this.newArtista.bind(this);

    this.state = {
      id: null,
      autor: "",
      title: "",
      url_pic: "",
      year: "",
    };
  }

  onChangeAutor(e) {
    this.setState({
      autor: e.target.value
    });
  }

  onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
    }

  onChangeUrl_pic(e) {
    this.setState({
      url_pic: e.target.value
    });
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    });
  }

  saveTutorial() {
    var data = {
      autor: this.state.title,
      title: this.state.title,
      url_pic: this.state.url_pic,
      year: this.state.year,

    };

    ArtistasDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          autor: response.data.autor,
          title: response.data.title,
          url_pic: response.data.url_pic,
          year: response.data.year,

        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newArtista() {
    this.setState({
      id: null,
      autor: "",
      title: "",
      url_pic: "",
      year: "",
    });
  }

  render() {
    return (
    <div className="submit-form">
         <div>
           <div className="form-group">
             <label htmlFor="autor">Autor</label>
             <input
               type="text"
               className="form-control"
               id="Autor"
               required
               value={this.state.Autor}
               onChange={this.onChangeAutor}
               name="Autor"
             />
           </div>

           <div className="form-group">
             <label htmlFor="title">Título</label>
             <input
               type="text"
               className="form-control"
               id="title"
               required
               value={this.state.title}
               onChange={this.onChangeTitle}
               name="title"
             />
           </div>

           <div className="form-group">
             <label htmlFor="url_pic">URL</label>
             <input
               type="text"
               className="form-control"
               id="url_pic"
               required
               value={this.state.url_pic}
               onChange={this.onChangeUrl_pic}
               name="url_pic"
             />
           </div>

           <div className="form-group">
             <label htmlFor="year">Año</label>
             <input
               type="text"
               className="form-control"
               id="year"
               required
               value={this.state.year}
               onChange={this.onChangeYear}
               name="year"
             />
           </div>

           <button onClick={this.saveTutorial} className="btn btn-success">
             Submit
           </button>
         </div>
       }
     </div>
   )
  }
}
