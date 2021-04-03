import React from "react";
const Form = () => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search an Image by any term"
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
    </form>
  );
};

export default Form;