import React from "react";

const Imagebox = (img) => {
  console.log(img);
  return (
    <div className="image__box">
      <figure>
        <img src={img.img} alt="" />
      </figure>
    </div>
  );
};

export default Imagebox;
