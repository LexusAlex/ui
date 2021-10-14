import React from 'react';

function Menu () {
  return (
      <nav className="uk-navbar-container tm-navbar-container" uk-navbar={""} uk-sticky={"media: 960"}>
        <div className="uk-navbar-left">
          <a className="uk-navbar-item uk-logo" href="#">UIKIT</a>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li className=""><a href="/join"><span uk-icon={"users"}></span>Join To Us</a></li>
            <li className=""><a href="/signin"><span uk-icon={"sign-in"}></span>Sign In</a></li>
          </ul>
        </div>
      </nav>
  );
}

export default Menu;
