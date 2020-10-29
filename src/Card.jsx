import React from "react";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div class="card">
          <img
            src={props.imgSrc}
            class="card-img-top"
            alt="webdev"
            height="175"
          />
          <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              interdum ante ut sem mattis, iaculis dignissim velit pretium.
              Praesent eu imperdiet tellus. Sed tempus ligula eu tristique
              pulvinar.
            </p>
            <NavLink to="" class="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
