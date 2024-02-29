import React, { useEffect, useState } from "react";
import "./Speech.css";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Speech = ({ btnPrev, btnNext }) => {
  const [message, setMessage] = useState("");
  const commands = [
    {
      command: ["다음으로", "다음", "넘겨"],
      callback: () => setMessage("next"),
    },
    {
      command: ["이전으로", "이전", "뒤로"],
      callback: () => setMessage("prev"),
    },
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  if (browserSupportsSpeechRecognition) {
    SpeechRecognition.startListening({ language: "ko" });
  }

  useEffect(() => {
    if (message === "prev") {
      //음성인식 이전으로
      btnPrev();
    }
    if (message === "next") {
      //음성인식 다음으로
      btnNext();
    }
  }, [message, btnPrev, btnNext]);

  if (!browserSupportsSpeechRecognition) {
    return <span>녹음 기능을 사용할 수 없는 브라우져입니다.</span>;
  }

  return (
    <div className="speech">
      <p>{listening ? "듣고있습니다." : "듣는중아님"}</p>
      {/* <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button> */}
      <p>{transcript}</p>
    </div>
  );
};
export default Speech;
