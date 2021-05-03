import Imageinput from "../components/Imageinput";
import Head from "next/head";
import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/Drawimg";
import Imagebox from "../components/Imagebox";

const Home = () => {
  const [selected, setselected] = useState(false);
  const [img, setimg] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [allimg, setallimg] = useState([]);

  //get img from file
  const getimg = (img) => {
    setselected(true);
    setimg(img);
  };
  const clear = async (e) => {
    setselected(false);
    try {
      const croppedImage = await getCroppedImg(img, croppedAreaPixels);
      setallimg([...allimg, croppedImage]);
    } catch (e) {
      console.error(e);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    //console.log(croppedArea, croppedAreaPixels);
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  return (
    <>
      <Head>
        <title>Image Cropper</title>
      </Head>
      <div className="wrapper">
        <div className="row">
          <div className="label">
            <span>Select Images</span>
          </div>
          {allimg && (
            <div className="image__row">
              {allimg.map((a, i) => (
                <Imagebox img={a} key={i} />
              ))}
            </div>
          )}
          <div className="form__box">
            <form>
              <div className="form--item">
                <Imageinput getImg={getimg} />
              </div>
              <div className="form--item item--full">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          {selected && (
            <div className="crop--modal">
              <Cropper
                image={img}
                crop={crop}
                zoom={zoom}
                aspect={4 / 5}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
              <button type="button" onClick={clear}>
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
