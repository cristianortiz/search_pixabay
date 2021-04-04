import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Form = ({ handleSearch }) => {
  //hook to track and hanldle the State of input form field
  const [term, handleTerm] = useState("");

  //hook to keep track and handle error validation form
  const [error, handleError] = useState(false);

  //user submit the form
  const searchImages = (e) => {
    e.preventDefault();

    //validate form
    if (term.trim() === "") {
      handleError(true);
      return;
    }
    handleError(false);
    //send the search term to App comp to their hook function handler
    handleSearch(term);
  };

  return (
    <form onSubmit={searchImages}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search an Image by any term"
            onChange={(e) => handleTerm(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn  btn-lg btn-danger btn-block"
            value="Search"
          ></input>
        </div>
      </div>
      {error ? <Error msg="Add a search term" /> : null}
    </form>
  );
};
Form.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
export default Form;
