import { useEffect, useRef, useState } from "react";
import Confetti from "react-dom-confetti";
import Tmi from "tmi.js";

function ConfettiApp() {
  const [active, setActive] = useState(false);
  const [audio] = useState(new Audio("/assets/audio/audio.mp3"));
  const tmiClient = useRef(
    new Tmi.Client({
      channels: ["rusgunx"],
    })
  );

  const handleConfetti = () => {
    if (active) return;

    const timer$ = setInterval(() => {
      setActive(true);

      audio.play();

      setTimeout(() => {
        setActive(false);
      }, 1000);
    }, 1100);

    setTimeout(() => {
      clearInterval(timer$);
    }, 3500);
  };

  useEffect(() => {
    tmiClient.current.connect();

    tmiClient.current.on("message", (channel, tags, message, self) => {
      if (self) return;

      ["!yeah", "!confetti", "!c"].forEach((cmd) => {
        if (message.toLowerCase().includes(cmd)) {
          handleConfetti();
        }
      });
    });

    return () => {
      tmiClient.current.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <Confetti
        active={active}
        config={{
          angle: 360,
          spread: 360,
          startVelocity: 30,
          elementCount: 150,
          dragFriction: 0.07,
          duration: 3000,
          stagger: 2,
          width: "10px",
          height: "10px",
          perspective: "1920px",
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        }}
      />
    </div>
  );
}

export default ConfettiApp;
