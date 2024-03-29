const pgp = require("pg-promise")(/*options*/);
require("dotenv").config();

const conexion = {
     host: process.env.PGHOST,
     port: process.env.PGPORT,
     database: process.env.PGDATABASE,
     user: process.env.PGUSER,
     password: process.env.PGPASSWORD
};

const db = pgp(conexion);

const getCustomers = () => {
     return db.query(`SELECT * 
                      FROM Customer as cu INNER JOIN address as a using (address_id)
                      INNER JOIN city as ci using (city_id)
                      INNER JOIN country as co using (country_id)
                      limit 100`)
          .then(function (data) {
               return data;
          })
          .catch(function (error) {
               console.log(error);
          });
};

const getActors = () => {
     return db.query("SELECT * FROM Actor limit 100")
          .then(function (data) {
               return data;
          })
          .catch(function (error) {
               console.log(error);
          });
};

const getFilms = () => {
     const query = `SELECT F.film_id
	                      ,F.title
	                      ,F.description
	                      ,L.name as film_language
	                      ,F.rating as film_type
	                      ,F.rental_rate
                    FROM film as F INNER JOIN language as L using (language_id) limit 200`;
     return db.query(query)
          .then((data) => (data))
          .catch((error) => { console.log(error); });
};

const getFilmById = (film_id) => {
     const query = `SELECT F.film_id
                         ,F.title
                         ,F.description
                         ,L.name as film_language
                         ,F.rating as film_type
                         ,F.rental_rate
                         ,F.release_year
                         ,AC.first_name || ' ' || AC.last_name as Actor	
                         ,AC.actor_id
                         ,CT.name as Category
                    FROM film as F INNER JOIN language as L using (language_id)
                         INNER JOIN film_actor as FA using (film_id)
                         INNER JOIN actor as AC using (actor_id) 
                         INNER JOIN film_category as FC using (film_id)
                         INNER JOIN category as CT using (category_id)
                    WHERE F.film_id = ${film_id}`;

     return db.query(query)
          .then((data) => (data))
          .catch((error) => { console.log(error); });
};

const getFilmsByActorId = (actor_id) => {
     const query = `SELECT a.actor_id,
                           a.first_name,
                           a.last_name,
                           f.title as film_title,
                           c.name as category,
                           f.release_year,
                           (select cast(count(*) as int) from film_actor where actor_id = a.actor_id) as film_count
                    FROM actor as a inner join film_actor as fa on a.actor_id = fa.actor_id
                         inner join film as f on f.film_id = fa.film_id 
                         inner join film_category as fc on f.film_id = fc.film_id
                         inner join category as c on c.category_id = fc.category_id
                    WHERE a.actor_id = ${actor_id}`;

     return db.query(query)
          .then((data) => (data))
          .catch((error) => { console.log(error); });

};




module.exports = {
     getCustomers,
     getActors,
     getFilms,
     getFilmById,
     getFilmsByActorId
};