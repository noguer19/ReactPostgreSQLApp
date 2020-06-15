import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ActorDetails = (props) => {

     const [actor, setActor] = useState([]);
     const { actor_id, film_id } = props.location.state;


     useEffect(() => {
          setActor([]);
          fetch(`/api/actors/${actor_id}`)
               .then(res => res.json())
               .then(res => {
                    setActor(res);
               })
               .catch(err => alert(err));
     }, [actor_id]);

     return (
          <>
               <h4 className="text-center text-primary mt-2">Actor Details</h4>
               <hr></hr>

               <div className="row">
                    <div className="col-8 mx-auto">
                         <div className="card">
                              <div className="card-header">
                                   <h4 className="text-center">
                                        {actor[0]?.first_name} {actor[0]?.last_name}
                                        <span className="badge badge-primary ml-2"> Films Appearances {actor[0]?.film_count}</span>
                                   </h4>
                              </div>
                              <div className="card-body">
                                   <div className="text-center">
                                        <table className="table table-hover table-striped">
                                             <thead>
                                                  <tr>
                                                       <th colSpan="4" className="text-center bg-dark text-white">Films Appearances Details</th>
                                                  </tr>
                                                  <tr>
                                                       <th>N.</th>
                                                       <th className="text-center">Film Title</th>
                                                       <th className="text-center">Film Category</th>
                                                       <th className="text-center">Release Year</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  {
                                                       actor.map((actor_data, index) => (
                                                            <tr key={index}>
                                                                 <td>{index + 1}</td>
                                                                 <td>{actor_data.film_title}</td>
                                                                 <td>{actor_data.category}</td>
                                                                 <td>{actor_data.release_year}</td>
                                                            </tr>))
                                                  }
                                             </tbody>
                                        </table>
                                   </div>
                              </div>
                              <div className="card-footer">
                                   {
                                        typeof film_id === "undefined" ? (
                                             <Link className="btn btn-primary" to="/actors">
                                                  <span className="fa fa-arrow-circle-left"> Back to Actors List</span>
                                             </Link>
                                        ) :

                                             (

                                                  <Link className="btn btn-primary" to={{ pathname: "/FilmDetails", state: { film_id: film_id } }} >
                                                       <span className="fa fa-arrow-circle-left"> Back to Film Details</span>
                                                  </Link>
                                             )
                                   }

                              </div>
                         </div>
                    </div>
               </div>
          </>

     );

};

export default ActorDetails;