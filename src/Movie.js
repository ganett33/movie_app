import React from "react";
import PropTypes from "prop-types";

function Movie({id, title, summary, poster, year}) {
    return <h4>{title}</h4>
}

Movie.prototype = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired


}

export default Movie;