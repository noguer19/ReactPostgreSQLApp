import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export default function Actors() {

     const [actorList, setActorList] = useState([]);


     useEffect(() => {
          setActorList([]);
          fetch("http://localhost:8080/api/actors")
               .then(res => res.json())
               .then(res => setActorList(res))
               .catch(err => alert(err));
     }, []);

     return (
          <Col>
               <h4 className="text-center text-primary mt-2">Actors List</h4>

               <Table responsive striped bordered hover>
                    <thead>
                         <tr className="text-center">
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Options</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              actorList.map((actor) => (
                                   <tr key={actor.actor_id}>
                                        <td>{actor.first_name}</td>
                                        <td>{actor.last_name}</td>
                                        <td style={{ width: "5%" }} className="text-center">
                                             <Link className="text-dark" to={{ pathname: "/ActorDetails", state: { actor_id: actor.actor_id } }}>
                                                  <span className="badge badge-primary">Watch Details</span>
                                             </Link>
                                        </td>
                                   </tr>
                              ))
                         }
                    </tbody>
               </Table>

          </Col>
     );
}
