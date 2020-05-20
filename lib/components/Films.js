import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Films = () => {
     const [filmList, setFilmList] = useState([]);

     useEffect(() => {
          setFilmList([]);
          fetch("http://localhost:8080/api/films")
               .then(res => res.json())
               .then(res => setFilmList(res))
               .catch(err => alert(err));
     }, []);


     return (

          <>
               <h4 className="text-center text-primary mt-2">Films List</h4>
               <hr></hr>

               <div className="row">


                    {
                         filmList.map((film) => (
                              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={film.film_id}>
                                   <div className="card">
                                        <div className="card-header">
                                             <h4 className="text-center">{film.title}</h4>
                                        </div>
                                        <div className="card-body">
                                             {film.description}
                                        </div>
                                        <div className="card-footer">
                                             {film.film_language} | {film.film_type} | {film.rental_rate}

                                             <Link to={{ pathname: "/FilmDetails", state: { id: film.film_id } }} title="watch details">
                                                  <span className="float-right fa fa-info-circle fa-2x text-info"></span>
                                             </Link>
                                        </div>
                                   </div>
                                   <br></br>
                              </div>
                         ))
                    }
               </div>
          </>
     );
};




export default Films;
