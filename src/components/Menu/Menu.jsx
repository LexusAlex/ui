import React from 'react';

function Menu () {
  return (
    <div className="container-fluid">
      <header
        className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center col-md-3 mb-md-0 p-3 text-dark text-decoration-none">
          <img src="images/logo-cut.png" className="img-fluid" alt="..." width={"50px"} height={"50px"}/>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 link-secondary">Главная</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <a href={"/join"} className="btn btn-outline-dark me-2">
            <i className="bi bi-person-plus"/>
            Join to us</a>
          <a href={""} className="btn btn-dark">Sign-up</a>
        </div>
      </header>
    </div>
  );
}

export default Menu;
