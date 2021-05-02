import React from "react";

const Imageinput = ({ getImg }) => {
  const sendImg = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        getImg(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="input-item">
      <input type="file" onChange={sendImg} />
    </div>
  );
};

export default Imageinput;
