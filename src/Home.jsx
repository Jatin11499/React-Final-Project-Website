import React from "react";
import Common from "./Common";
import web from "../src/images/img2.svg";

function Home() {
  return (
    <>
      <Common
        name="Grow your business with"
        imgSrc={web}
        visit="/service"
        btnName="Get Started"
      />
    </>
  );
}

export default Home;
