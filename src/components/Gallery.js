import "./Gallery.css";
import Pictures from "./Pictures";
import React, { useState, useEffect } from "react";

const Gallery = () => {
  const [switchToggle, setSwitchToggle] = useState(true);
  const [res, setRes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const Access_Key = "d57SqERduFLBmdqXYCfqj_ULjf3DZLdbKDeelDSLtsI";
  const url = `https://api.unsplash.com/search/photos?page=1&query=modern art&client_id=${Access_Key}&orientation=landscape&per_page=40`;

  const fetchRequest = async () => {
    const response = await fetch(url);
    const responseJson = await response.json();
    const result = responseJson.results;
    setRes(result);
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  const btnPrev = () => {
    const nextIndex = (currentIndex + 1) % res.length; //인덱스 값 초과시 0으로 돌아가게
    setCurrentIndex(nextIndex);
  };
  const btnNext = () => {
    const prevIndex = currentIndex === 0 ? res.length - 1 : currentIndex - 1; //인덱스 값 0 미만으로 안되게
    setCurrentIndex(prevIndex);
  };

  //스위치 토글
  const isClicked = () => {
    setSwitchToggle(!switchToggle);
  };

  return (
    <div className="scene">
      <div className={switchToggle ? 'cube' : 'cube off'}>
        <div className="cube_face cube_face_back">
          <div className="frame_wrap" >
            <div className="frame">
              <Pictures res={res} currentIndex={currentIndex} btnNext={btnNext} />
            </div>
            <div className="switch" title="스위치" onClick={() => { isClicked() }}></div>
          </div>
        </div>
        <div className="cube_face cube_face_right">
          <div className="exit">
            <div className="exit_door">
              <div className="deco_wrap">
                <div className="deco"></div>
                <div className="deco"></div>
                <div className="deco"></div>
                <div className="deco"></div>
              </div>
              <div className="handle"></div>
            </div>
            <div className="exit_sign"></div>
          </div>
        </div>
        <div className="cube_face cube_face_left"></div>
        <div className="cube_face cube_face_top">
          <div className="light">
            <div className="stick"></div>
            <div className="wing wing1"></div>
            <div className="wing wing2"></div>
            <div className="wing wing3"></div>
          </div>
        </div>
        <div className="cube_face cube_face_bottom">
          <div className="control_wrap">
            <div className="control">
              <div className="c_top">
                <div
                  className="c_left"
                  onClick={() => {
                    btnPrev();
                  }}
                ></div>
                <div
                  className="c_right"
                  onClick={() => {
                    btnNext();
                  }}
                ></div>
              </div>
              <div className="c_stick"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
