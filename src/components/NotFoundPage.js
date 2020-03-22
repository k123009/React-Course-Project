import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>Not Found Page</h1>
      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
