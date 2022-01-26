import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return <div className="jumbotron" style={{textAlign:'center'}}>
        <h2 style={{marginTop: 100}} className="display-4">404 - Not found!</h2>
        <p style={{marginBottom: 100}} className="lead">Page you are looking for does not exist.</p>
        <hr className="my-4"/>
        <p>Wróć na stronę główną</p>
        <Link className="btn btn-primary btn-lg" to="/" role="button">Strona Główna</Link>
    </div>;
};

export default NotFound;
