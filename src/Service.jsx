import React from "react";
import Card from "./Card";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Card
                imgSrc="https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
                title="Web Developer"
              />
              <Card
                imgSrc="https://miro.medium.com/max/1140/1*EPBoypOrvhDGsJySTjs0fw.jpeg"
                title="JAVA Developer"
              />
              <Card
                imgSrc="https://helpx.adobe.com/content/dam/help/en/illustrator/how-to/drawing-basics/jcr_content/main-pars/image/drawing-basics-intro_900x506.jpg"
                title="Illustrator"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
