import React from "react";

import { Link } from "react-router-dom";

const NotFound =()=>(
    <main className="principal">
        <h2>404!</h2>
        <p>Página Não encontra ou removida<Link to="/">Ir Para Home Page</Link></p>
    </main>
);
export default NotFound;