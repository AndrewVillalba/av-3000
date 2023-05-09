import "../Pads/Pads.scss";
import audio1 from "../../assets/audio/audio1.mp3";
import { useEffect } from "react";

function Pads() {
  // function playPad() {
  //     return(
  //     <audio data-key={65} src={audio1}></audio>
  //     )
  // }

  useEffect(() => {
    document.getElementById('keydown', Pads)
  }, []);

  function pressPad(e) {
    const key = e.key.toUpperCase()
    if ("QWEASDZXC".includes(key)) {
        document.getElementById(key).play();
    }
  }

  return (
    <>
      <div className="row">
        <button key={65} className="pad">
          <div className="pad__depth">
            <audio onClick={pressPad} src={audio1}></audio>
          </div>
        </button>
        <button className="pad">
          <div className="pad__depth"></div>
        </button>
        <button className="pad">
          <div className="pad__depth"></div>
        </button>
        <button className="pad">
          <div className="pad__depth"></div>
        </button>
      </div>
    </>
  );
}

export default Pads;
