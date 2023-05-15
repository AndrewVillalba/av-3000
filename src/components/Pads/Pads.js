import "../Pads/Pads.scss";
import audioFiles from "../../assets/audio-files";
import { useEffect, useState } from "react";

const padBankA = [
    {
      keyCode: 81,
      key: "Q",
      id: "pad-1",
      audio: audioFiles.acidhorns,
    },
    {
      keyCode: 87,
      key: "W",
      id: "pad-2",
      audio: audioFiles.tom1,
    },
    {
      keyCode: 69,
      key: "E",
      id: "pad-3",
      audio: audioFiles.tom2,
    },
    {
      keyCode: 82,
      key: "R",
      id: "pad-4",
      audio: audioFiles.clap1,
    },
    {
      keyCode: 85,
      key: "U",
      id: "pad-5",
      audio: audioFiles.openh1,
    },
    {
      keyCode: 73,
      key: "I",
      id: "pad-6",
      audio: audioFiles.clav909,
    },
    {
      keyCode: 79,
      key: "O",
      id: "pad-7",
      audio: audioFiles.shaker,
    },
    {
      keyCode: 80,
      key: "P",
      id: "pad-8",
      audio: audioFiles.crash1,
    },
    {
      keyCode: 65,
      key: "A",
      id: "pad-9",
      audio: audioFiles.kick1,
    },
    {
      keyCode: 83,
      key: "S",
      id: "pad-10",
      audio: audioFiles.kick2,
    },
    {
      keyCode: 68,
      key: "D",
      id: "pad-11",
      audio: audioFiles.snare2,
    },
    {
      keyCode: 70,
      key: "F",
      id: "pad-12",
      audio: audioFiles.snare1,
    },
    {
      keyCode: 72,
      key: "H",
      id: "pad-13",
      audio: audioFiles.closedh1,
    },
    {
      keyCode: 74,
      key: "J",
      id: "pad-14",
      audio: audioFiles.closedh2,
    },
    {
      keyCode: 75,
      key: "K",
      id: "pad-15",
      audio: audioFiles.ride,
    },
    {
      keyCode: 76,
      key: "L",
      id: "pad-16",
      audio: audioFiles.kick3,
    },
];

const padBankB = [
    {
      keyCode: 81,
      key: "Q",
      id: "pad-1",
      audio: audioFiles.runnin,
    },
    {
      keyCode: 87,
      key: "W",
      id: "pad-2",
      audio: audioFiles.tom1,
    },
    {
      keyCode: 69,
      key: "E",
      id: "pad-3",
      audio: audioFiles.tom2,
    },
    {
      keyCode: 82,
      key: "R",
      id: "pad-4",
      audio: audioFiles.clap1,
    },
    {
      keyCode: 85,
      key: "U",
      id: "pad-5",
      audio: audioFiles.openh1,
    },
    {
      keyCode: 73,
      key: "I",
      id: "pad-6",
      audio: audioFiles.clav909,
    },
    {
      keyCode: 79,
      key: "O",
      id: "pad-7",
      audio: audioFiles.shaker,
    },
    {
      keyCode: 80,
      key: "P",
      id: "pad-8",
      audio: audioFiles.crash1,
    },
    {
      keyCode: 65,
      key: "A",
      id: "pad-9",
      audio: audioFiles.kick1,
    },
    {
      keyCode: 83,
      key: "S",
      id: "pad-10",
      audio: audioFiles.kick2,
    },
    {
      keyCode: 68,
      key: "D",
      id: "pad-11",
      audio: audioFiles.snare1,
    },
    {
      keyCode: 70,
      key: "F",
      id: "pad-12",
      audio: audioFiles.snare2,
    },
    {
      keyCode: 72,
      key: "H",
      id: "pad-13",
      audio: audioFiles.closedh1,
    },
    {
      keyCode: 74,
      key: "J",
      id: "pad-14",
      audio: audioFiles.closedh2,
    },
    {
      keyCode: 75,
      key: "K",
      id: "pad-15",
      audio: audioFiles.ride,
    },
    {
      keyCode: 76,
      key: "L",
      id: "pad-16",
      audio: audioFiles.kick3,
    },
];

const padBankC = [
    {
      keyCode: 81,
      key: "Q",
      id: "pad-1",
      audio: audioFiles.audio1,
    },
    {
      keyCode: 87,
      key: "W",
      id: "pad-2",
      audio: audioFiles.tom1,
    },
    {
      keyCode: 69,
      key: "E",
      id: "pad-3",
      audio: audioFiles.tom2,
    },
    {
      keyCode: 82,
      key: "R",
      id: "pad-4",
      audio: audioFiles.clap1,
    },
    {
      keyCode: 85,
      key: "U",
      id: "pad-5",
      audio: audioFiles.openh1,
    },
    {
      keyCode: 73,
      key: "I",
      id: "pad-6",
      audio: audioFiles.clav909,
    },
    {
      keyCode: 79,
      key: "O",
      id: "pad-7",
      audio: audioFiles.shaker,
    },
    {
      keyCode: 80,
      key: "P",
      id: "pad-8",
      audio: audioFiles.crash1,
    },
    {
      keyCode: 65,
      key: "A",
      id: "pad-9",
      audio: audioFiles.kick1,
    },
    {
      keyCode: 83,
      key: "S",
      id: "pad-10",
      audio: audioFiles.kick2,
    },
    {
      keyCode: 68,
      key: "D",
      id: "pad-11",
      audio: audioFiles.snare1,
    },
    {
      keyCode: 70,
      key: "F",
      id: "pad-12",
      audio: audioFiles.snare2,
    },
    {
      keyCode: 72,
      key: "H",
      id: "pad-13",
      audio: audioFiles.closedh1,
    },
    {
      keyCode: 74,
      key: "J",
      id: "pad-14",
      audio: audioFiles.closedh2,
    },
    {
      keyCode: 75,
      key: "K",
      id: "pad-15",
      audio: audioFiles.ride,
    },
    {
      keyCode: 76,
      key: "L",
      id: "pad-16",
      audio: audioFiles.kick3,
    },
];

const padBankD = [
  {
    keyCode: 81,
    key: "Q",
    id: "pad-1",
    audio: audioFiles.acidhorns,
  },
  {
    keyCode: 87,
    key: "W",
    id: "pad-2",
    audio: audioFiles.tom1,
  },
  {
    keyCode: 69,
    key: "E",
    id: "pad-3",
    audio: audioFiles.tom2,
  },
  {
    keyCode: 82,
    key: "R",
    id: "pad-4",
    audio: audioFiles.clap1,
  },
  {
    keyCode: 85,
    key: "U",
    id: "pad-5",
    audio: audioFiles.openh1,
  },
  {
    keyCode: 73,
    key: "I",
    id: "pad-6",
    audio: audioFiles.clav909,
  },
  {
    keyCode: 79,
    key: "O",
    id: "pad-7",
    audio: audioFiles.shaker,
  },
  {
    keyCode: 80,
    key: "P",
    id: "pad-8",
    audio: audioFiles.crash1,
  },
  {
    keyCode: 65,
    key: "A",
    id: "pad-9",
    audio: audioFiles.kick1,
  },
  {
    keyCode: 83,
    key: "S",
    id: "pad-10",
    audio: audioFiles.kick2,
  },
  {
    keyCode: 68,
    key: "D",
    id: "pad-11",
    audio: audioFiles.snare1,
  },
  {
    keyCode: 70,
    key: "F",
    id: "pad-12",
    audio: audioFiles.snare2,
  },
  {
    keyCode: 72,
    key: "H",
    id: "pad-13",
    audio: audioFiles.closedh1,
  },
  {
    keyCode: 74,
    key: "J",
    id: "pad-14",
    audio: audioFiles.closedh2,
  },
  {
    keyCode: 75,
    key: "K",
    id: "pad-15",
    audio: audioFiles.ride,
  },
  {
    keyCode: 76,
    key: "L",
    id: "pad-16",
    audio: audioFiles.kick3,
  },
];


const PadSingle = ({ play, sound: { key, audio, keyCode }}) => {

  const [active, setActive] = useState(false)

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
    }, []);  

    const handleKeyDown = (e) => {
        if(e.keyCode === keyCode) {
            play(key)
            setActive(true)
        }
    }

    const handleKeyUp = (e) => {
      if(e.keyCode === keyCode) {
        setActive(false)
      }
    }

    return (
        <button className={`pad${active ? ' pad--active' : ''}`} onClick={() => play(key)}>
            <audio preload id={key} src={audio} />
        <div id={key} className={`pad__depth${active ? ' pad__depth--active' : ''}`}>{key}</div>
        </button>
    );
}

const Pad = ({ play, padBank }) => {

  let selectedPadBank = padBank

  if(selectedPadBank === 'A') {
    selectedPadBank = padBankA;
  } 
  else if (selectedPadBank === 'B') {
    selectedPadBank = padBankB;
  }
  else if (selectedPadBank === 'C') {
    selectedPadBank = padBankC;
  }
  else if (selectedPadBank === 'D') {
    selectedPadBank = padBankD;
  }

  return selectedPadBank.map((sound) => <PadSingle sound={sound} play={play}/>);
};

function Pads({padBank, volume}) {

    const play = (key) => {
        const audio = document.getElementById(key);
        
        audio.volume = volume
        console.log(volume)
        audio.currentTime = 0;
        audio.play()
    }
 
  return (
    <>
      <Pad padBank={padBank} play={play}/>
    </>
  );
}

export default Pads;
