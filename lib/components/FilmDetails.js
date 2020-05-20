import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const FilmDetails = (props) => {

     const [film, setFilm] = useState([]);
     const { id } = props.location.state;

     useEffect(() => {
          setFilm([]);
          fetch(`/api/films/${id}`)
               .then(res => res.json())
               .then(res => {
                    setFilm(res);

               })
               .catch(err => alert(err));
     }, [id]);


     return (
          <>
               <h4 className="text-center text-primary mt-2">Films Details</h4>
               <hr></hr>

               <div className="row">
                    <div className="col-6">
                         <div className="card">
                              <div className="card-header">
                                   <h4 className="text-center">Film Data</h4>
                              </div>
                              <div className="card-body">
                                   <h3>Title: {film[0]?.title}</h3>
                                   <h3><u>Description:</u></h3>
                                   {film[0]?.description}
                                   <h3>Category: <small>{film[0]?.category}</small> </h3>
                                   <h3>Language: <small>{film[0]?.film_language}</small> </h3>
                                   <h3>Public: <small>{film[0]?.film_type}</small> </h3>
                                   <h3>Release year: <small>{film[0]?.release_year}</small> </h3>
                                   <h3>Rental Price: <small>${film[0]?.rental_rate}</small> </h3>
                              </div>
                              <div className="card-footer">
                                   <Link className="btn btn-primary" to="/films">
                                        <span className="fa fa-arrow-circle-left"> Back to Films List</span>
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <div className="col-6">
                         <div className="card">
                              <div className="card-header">
                                   <h4 className="text-center">Film Actors</h4>
                              </div>
                              <div className="card-body">
                                   {
                                        film.map((filmData, index) => (<h5 key={index}>{filmData.actor}</h5>))
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );


};

export default FilmDetails;

