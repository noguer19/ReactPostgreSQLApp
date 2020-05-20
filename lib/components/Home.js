import React from "react";

const Home = () => {
     return (
          <div className="row">
               <div className="col">
                    <div className="jumbotron">
                         <h2>Welcome to my React App</h2>
                         <p>
                              This app was created using ExpressJS on the backend with Webpack, Babel and ESlint.
                              It displays data from an Express API which gets those data from the PostgreSQL dvdrent sample database.
                    </p>
                    </div>
               </div>
          </div>
     );
};

export default Home;