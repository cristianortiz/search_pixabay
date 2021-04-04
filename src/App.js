import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import axios from "axios";
import ImageList from "./components/ImageList";

function App() {
  //hook to keep track and handle the search term submit by the user
  const [search, handleSearch] = useState("");
  //hook to keep tranck and handle the State of API response data
  const [images, handleImages] = useState([]);
  //hook to handle pagination, current page an total pages to paginate results
  const [curr_page, handleCurrPage] = useState(1);
  const [total_pages, handleTotalPages] = useState(1);

  //useEffect hook to request the API every time and only if the user submit a search term
  useEffect(() => {
    const requestAPI = async () => {
      //request API ONLY when user submit form whit some search term
      if (search === "") return;

      const imagesPerPage = 30;
      const apiKey = "your apikey";
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${imagesPerPage}&page=${curr_page}`;
      const response = await axios.get(url);
      handleImages(response.data.hits);

      //calculate total_pages from total results and images per pages requested
      const calculateTotalPages = Math.ceil(
        response.data.totalHits / imagesPerPage
      );
      handleTotalPages(calculateTotalPages);

      //scroll up in every new page of results
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };

    requestAPI();
  }, [search, curr_page]);

  //define previous and next page ant state their values
  const previousPage = () => {
    const actualCurrPage = curr_page - 1;
    if (actualCurrPage === 0) return;
    handleCurrPage(actualCurrPage);
  };

  const nextPage = () => {
    const actualCurrPage = curr_page + 1;
    if (actualCurrPage > total_pages) return;
    handleCurrPage(actualCurrPage);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Search Image in Pixabay API</p>
        <Form handleSearch={handleSearch} />
      </div>
      <div className="row justify-content-center">
        <ImageList images={images} />
        {curr_page === 1 ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={previousPage}
          >
            &laquo; Previous
          </button>
        )}
        {curr_page === total_pages ? null : (
          <button type="button" className="bbtn btn-info" onClick={nextPage}>
            Next &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
