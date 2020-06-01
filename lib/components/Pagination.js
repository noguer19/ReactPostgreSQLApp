import React, { useState, useEffect } from "react";


export default function Pagination({ filmsPerPage, totalFilms, paginate }) {

     const [pages, setPages] = useState([]);

     useEffect(() => {
          const pageNumbers = [];
          setPages([]);
          for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
               const pageObj = { pageNumber: i, active: i === 1 ? true : false };
               pageNumbers.push(pageObj);
          }
          setPages(pageNumbers);
     }, [filmsPerPage, totalFilms]);


     const onClickPageItem = (pageNumber) => {
          pages.map((item) => item.active = false);
          const selectedPageIndex = pages.findIndex(item => item.pageNumber === pageNumber);
          let newPagesArray = [...pages];
          newPagesArray[selectedPageIndex].active = true;
          setPages(newPagesArray);
     };

     return (
          <nav>
               <ul className="pagination justify-content-center">
                    {
                         pages.map(pageObj => (
                              <li key={pageObj.pageNumber} className={`page-item ${pageObj.active ? "active" : ""}`} onClick={() => onClickPageItem(pageObj.pageNumber)}>
                                   <a onClick={() => paginate(pageObj.pageNumber)} href="javascript:void(0)" className="page-link">{pageObj.pageNumber}</a>
                              </li>))
                    }
               </ul>
          </nav>
     );
}
