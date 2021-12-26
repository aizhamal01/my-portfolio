import React from "react";
import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url: "./img/main.jpg" },
  { url: "./img/main2.jpg" },

];

const App = () => {
  return (
    <div>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}