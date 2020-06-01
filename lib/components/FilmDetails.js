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
                                   <h4 className="text-center">{film[0]?.title}</h4>
                              </div>
                              <div className="card-body">
                                   <div className="text-center">
                                        <img src={"/film.png"} className="img-fluid mb-2" style={{ maxHeight: "200px" }} />
                                   </div>
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
                                   <div className="row">
                                        {
                                             film.map((filmData, index) => (
                                                  <div className="col text-center" key={index}>
                                                       <span className="fa fa-5x fa-user p-4"></span>
                                                       <p>{filmData.actor}</p>
                                                  </div>
                                             ))
                                        }
                                   </div>


                              </div>
                         </div>
                    </div>
               </div>
          </>
     );


};

export default FilmDetails;

