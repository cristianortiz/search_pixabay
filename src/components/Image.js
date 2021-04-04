import React from "react";
import PropTypes from "prop-types";
const Image = ({ image }) => {
  //destructuring image object
  const { largeImageURL, views, likes, previewURL, tags } = image;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top"></img>
      </div>
      <div className="card-body">
        <p className="card-text">{likes} Likes</p>
        <p className="card-text">{views} Views</p>
      </div>
      <div className="card-footer">
        <a
          href={largeImageURL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-block"
        >
          View Full size
        </a>
      </div>
    </div>
  );
};
Image.propTypes = {
  image: PropTypes.object.isRequired,
};
export default Image;
