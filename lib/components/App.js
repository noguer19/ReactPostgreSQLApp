import React from "react";
import Navegacion from "./Navegacion";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Container from "react-bootstrap/Container";
import { Route } from "react-router-dom";
import Customers from "./Customers";
import Actors from "./Actors";
import Films from "./Films";
import Home from "./Home";
import FilmDetails from "./FilmDetails";


export default function App() {
     return (
          <>
               <Navegacion />
               <Container>
                    <Route path="/" exact component={Home} />
                    <Route path="/customers" render={() => <Customers customerName="Luis Carlos Noguera" />} />
                    <Route path="/actors" component={Actors} />
                    <Route path="/films" component={Films} />
                    <Route path="/filmDetails" component={FilmDetails} />
               </Container>

          </>
     );
}
