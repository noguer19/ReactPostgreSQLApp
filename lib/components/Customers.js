import React from "react";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

export default class Customers extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               customerList: []
          };
     }

     getCustomers() {
          fetch("http://localhost:8080/api/customers")
               .then(res => res.json())
               .then(res => this.setState({ customerList: res }))
               .catch(err => alert(err));
     }

     componentDidMount() {
          this.getCustomers();
     }

     render() {

          const { customerList } = this.state;

          return (
               <Col>
                    <h4 className="text-center text-primary mt-2">Customers List</h4>

                    <Table responsive striped bordered hover>
                         <thead>
                              <tr className="text-center">
                                   <th>First Name</th>
                                   <th>Last Name</th>
                                   <th>Email</th>
                                   <th>Active</th>
                                   <th>Address</th>
                              </tr>
                         </thead>
                         <tbody>
                              {
                                   customerList.map((customer) => (
                                        <tr key={customer.customer_id}>
                                             <td>{customer.first_name}</td>
                                             <td>{customer.last_name}</td>
                                             <td>{customer.email}</td>
                                             <td><input readOnly type="checkbox" checked={customer.active}></input> </td>
                                             <td>{customer.address}, {customer.district}, {customer.postal_code}, {customer.city}, {customer.country} </td>
                                        </tr>
                                   ))
                              }
                         </tbody>
                    </Table>

               </Col>


          );
     }
}
