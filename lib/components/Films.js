import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";


const Films = () => {
     const [filmList, setFilmList] = useState([]);

     const [filter, setFilter] = useState("");

     const [currentPage, setCurrentPage] = useState(1);
     const [filmsPerPage] = useState(12);

     useEffect(() => {

          const getFilmList = async () => {
               try {
                    setFilmList([]);
                    const response = await fetch("http://localhost:8080/api/films");
                    const data = await response.json();
                    setFilmList(data);
               }
               catch (error) {
                    alert(error);
               }
          };
          getFilmList();
     }, []);

     let paginatedFilms;
     let filteredFilms;

     const indexOfLastFilm = currentPage * filmsPerPage;
     const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;

     if (filter == "") {
          paginatedFilms = filmList.slice(indexOfFirstFilm, indexOfLastFilm);
     }

     if (filter != "") {

          filteredFilms = filmList.filter((film) => {
               let filmTitle = film.title.toLowerCase();
               return filmTitle.indexOf(filter.toLowerCase()) !== -1;
          });

          if (filteredFilms.length > indexOfFirstFilm) {
               paginatedFilms = filteredFilms.slice(indexOfFirstFilm, indexOfLastFilm);
          } else {
               paginatedFilms = filteredFilms.slice(0, filmsPerPage);
          }

     }



     const paginate = (pageNumber) => {
          setCurrentPage(pageNumber);
     };

     return (

          <>
               <h4 className="text-center text-primary mt-2">Films List</h4>
               <hr></hr>


               <div className="form-group">
                    <b>Filter List By Film Title</b>
                    <input type="text"
                         placeholder="Type the film title here and press your keyboard´s ENTER key"
                         className="form-control col-6"
                         value={filter}
                         onChange={(e) => setFilter(e.target.value)} />
               </div>



               <div className="row">
                    {
                         paginatedFilms.map((film) => (
                              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={film.film_id}>
                                   <div className="card">
                                        <div className="card-header">
                                             <h4 className="text-center">{film.title}</h4>
                                        </div>
                                        <div className="card-body" style={{ minHeight: "350px" }}>
                                             <div className="text-center">
                                                  <img src={"/film.png"} className="img-fluid mb-2" style={{ maxHeight: "200px" }} />
                                             </div>
                                             <br></br>
                                             {film.description}
                                        </div>
                                        <div className="card-footer">
                                             {film.film_language} | {film.film_type} | {film.rental_rate}

                                             <Link to={{ pathname: "/FilmDetails", state: { film_id: film.film_id } }} title="watch details">
                                                  <span className="float-right fa fa-info-circle fa-2x text-info"></span>
                                             </Link>
                                        </div>
                                   </div>
                                   <br></br>
                              </div>
                         ))
                    }
                    {

                         paginatedFilms.length === 0 ? (
                              <div className="col-12">
                                   <h2 className="text-center">
                                        <span className="fa fa-info-circle text-danger"> No Films found given the current title.</span>
                                   </h2>
                              </div>

                         ) : null
                    }
               </div>

               <div className="text-center">
                    <Pagination totalFilms={filter === "" ? filmList.length : filteredFilms.length} filmsPerPage={filmsPerPage} paginate={paginate}></Pagination>
               </div>
          </>
     );
};


export default Films;
