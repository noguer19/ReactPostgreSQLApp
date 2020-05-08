import React from "react";
import Navegacion from "./Navegacion";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Route } from "react-router-dom";
import Customers from "./Customers";
import Actors from "./Actors";
import Films from "./Films";


export default function App() {
     return (
          <>
               <Navegacion />
               <Container>
                    <Row>
                         {/* <Route path="/" exact component={App} /> */}
                         <Route path="/customers" render={() => <Customers customerName="Luis Carlos Noguera" />} />
                         <Route path="/actors" component={Actors} />
                         <Route path="/films" component={Films} />
                    </Row>
               </Container>

          </>
     );
}
