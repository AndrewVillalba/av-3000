import "./AV3000.scss";
import Pads from "../../components/Pads/Pads";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function AV3000() {
  const [padBank, setPadBank] = useState("A");
  const [volume, setVolume] = useState(0.75);

  const changePadBank = (button) => {
    setPadBank(button);
  };

  return (
    <>
      <div className="beatpad">
        <div className="beatpad-top">
          <div className="display">
            <button className="display-add">+</button>
            <div className="display-screen"></div>
          </div>
          <div className="bottom">
            <div className="bottom-sliders">
              <div className="bottom-sliders__left">
                {/* <input
                  className="bottom-sliders__left-slider"
                  aria-orientation="vertical"
                  onChange={(e) => setVolume(e.target.value)}
                  type="range"
                  step="0.1"
                  value={volume}
                  min="0"
                  max="1"
                /> */}
                <Box 
                sx={{ height: 220 }}>
                  <Slider
                    className="bottom-sliders__left-slider"
                    sx={{
                      '& input[type="range"]': {
                        WebkitAppearance: "slider-vertical",
                      },
                    }}
                    orientation="vertical"
                    defaultValue={volume}
                    aria-label="Temperature"
                    valueLabelDisplay={volume}
                    step={0.01}
                    value={volume}
                    min={0}
                    max={1}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </Box>
                <div className="bottom-sliders__left-label--wrapper">
                  <span className="bottom-sliders__left-label">MASTER</span>
                </div>
              </div>
              <div className="bottom-sliders__right"></div>
            </div>
            <div className="bottom-buttons">
              <div className="bottom-buttons-pad-bank">
                <div className="pad-bank-left">
                  <div className="bottom-buttons-pad-bank__wrapper--left">
                    <span className="bottom-buttons-pad-bank__letter">A</span>
                    <button
                      onClick={() => changePadBank("A")}
                      className={`bottom-buttons-pad-bank__button${
                        padBank === "A"
                          ? " bottom-buttons-pad-bank__button--active"
                          : ""
                      }`}
                    ></button>
                  </div>
                  <div className="bottom-buttons-pad-bank__wrapper--left">
                    <span className="bottom-buttons-pad-bank__letter">B</span>
                    <button
                      onClick={() => changePadBank("B")}
                      className={`bottom-buttons-pad-bank__button${
                        padBank === "B"
                          ? " bottom-buttons-pad-bank__button--active"
                          : ""
                      }`}
                    ></button>
                  </div>
                </div>
                <div className="pad-bank-right">
                  <div className="bottom-buttons-pad-bank__wrapper--right">
                    <button
                      onClick={() => changePadBank("C")}
                      className={`bottom-buttons-pad-bank__button${
                        padBank === "C"
                          ? " bottom-buttons-pad-bank__button--active"
                          : ""
                      }`}
                    ></button>
                    <span className="bottom-buttons-pad-bank__letter">C</span>
                  </div>
                  <div className="bottom-buttons-pad-bank__wrapper--right">
                    <button
                      onClick={() => changePadBank("D")}
                      className={`bottom-buttons-pad-bank__button${
                        padBank === "D"
                          ? " bottom-buttons-pad-bank__button--active"
                          : ""
                      }`}
                    ></button>
                    <span className="bottom-buttons-pad-bank__letter">D</span>
                  </div>
                </div>
              </div>
              <div className="bottom-buttons-playback">
                <button className="bottom-buttons-playback__play"></button>
                <button className="bottom-buttons-playback__record"></button>
              </div>
            </div>
            <div className="bottom-pads">
              <Pads volume={volume} padBank={padBank} />
            </div>
          </div>
        </div>
        <div className="beatpad-front"></div>
      </div>
    </>
  );
}

export default AV3000;
