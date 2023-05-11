import "../Pads/Pads.scss";
import audio1 from "../../assets/audio/audio1.mp3";
import audio2 from '../../assets/audio/runnin.mp3';
import { useEffect } from "react";

const padBankA = [
    {
      keyCode: 81,
      key: "Q",
      id: "pad-1",
      audio: audio2,
    },
    {
      keyCode: 87,
      key: "W",
      id: "pad-2",
      audio: audio1,
    },
    {
      keyCode: 69,
      key: "E",
      id: "pad-3",
      audio: audio1,
    },
    {
      keyCode: 82,
      key: "R",
      id: "pad-4",
      audio: audio1,
    },
    {
      keyCode: 85,
      key: "U",
      id: "pad-5",
      audio: audio1,
    },
    {
      keyCode: 73,
      key: "I",
      id: "pad-6",
      audio: audio1,
    },
    {
      keyCode: 79,
      key: "O",
      id: "pad-7",
      audio: audio1,
    },
    {
      keyCode: 80,
      key: "P",
      id: "pad-8",
      audio: audio1,
    },
    {
      keyCode: 65,
      key: "A",
      id: "pad-9",
      audio: audio1,
    },
    {
      keyCode: 83,
      key: "S",
      id: "pad-10",
      audio: audio1,
    },
    {
      keyCode: 68,
      key: "D",
      id: "pad-11",
      audio: audio1,
    },
    {
      keyCode: 70,
      key: "F",
      id: "pad-12",
      audio: audio1,
    },
    {
      keyCode: 72,
      key: "H",
      id: "pad-13",
      audio: audio1,
    },
    {
      keyCode: 74,
      key: "J",
      id: "pad-14",
      audio: audio1,
    },
    {
      keyCode: 75,
      key: "K",
      id: "pad-15",
      audio: audio1,
    },
    {
      keyCode: 76,
      key: "L",
      id: "pad-16",
      audio: audio1,
    },
];

const PadSingle = ({ play, sound: { key, audio, keyCode }}) => {


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
    }, []);  

    const handleKeyDown = (e) => {

        if(e.keyCode === keyCode) {
            play(key)
            console.log(key)
            console.log(audio)
        }
    }

    return (
        <button className="pad" onClick={() => play(key)}>
            <audio id={key} src={audio} />
        <div className="pad__depth">{key}</div>
        </button>
    );
}

const Pad = ({ play }) => {
  return padBankA.map((sound) => <PadSingle key={sound.id} sound={sound} play={play} />);
};

function Pads() {

    const play = (key) => {
        const audio = document.getElementById(key)
        audio.currentTime = 0;
        audio.play()
    }
 
  return (
    <>
      <Pad play={play}/>
    </>
  );
}

export default Pads;
