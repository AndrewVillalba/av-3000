import "./AV3000.scss";
import Pads from "../../components/Pads/Pads";

function AV3000() {

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
              <div className="bottom-sliders__left"></div>
              <div className="bottom-sliders__right"></div>
            </div>
            <div className="bottom-buttons">
              <div className="bottom-buttons-pad-bank">
                <div className="pad-bank-left">
                  <div className="bottom-buttons-pad-bank__wrapper--left">
                    <span className="bottom-buttons-pad-bank__letter">A</span>
                    <button className="bottom-buttons-pad-bank__button"></button>
                  </div>
                  <div className="bottom-buttons-pad-bank__wrapper--left">
                    <span className="bottom-buttons-pad-bank__letter">B</span>
                    <button className="bottom-buttons-pad-bank__button"></button>
                  </div>
                </div>
                <div className="pad-bank-right">
                  <div className="bottom-buttons-pad-bank__wrapper--right">
                    <button className="bottom-buttons-pad-bank__button"></button>
                    <span className="bottom-buttons-pad-bank__letter">C</span>
                  </div>
                  <div className="bottom-buttons-pad-bank__wrapper--right">
                    <button className="bottom-buttons-pad-bank__button"></button>
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
              <Pads/>
            </div>
          </div>
        </div>
        <div className="beatpad-front"></div>
      </div>
    </>
  );
}

export default AV3000;
