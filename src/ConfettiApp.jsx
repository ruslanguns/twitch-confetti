import { useEffect } from "react";
import { useState } from "react";
import Confetti from "react-dom-confetti";
import Tmi from "tmi.js";

function ConfettiApp() {
  const [active, setActive] = useState(false);
  const [audio] = useState(new Audio("/assets/audio/audio.mp3"));
  const [client] = useState(
    new Tmi.Client({
      channels: ["rusgunx"],
    })
  );

  const handleConfetti = () => {
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
    client.connect();

    client.on("message", (channel, tags, message, self) => {
      if (self) return;

      if (message.toLowerCase().includes("!yeah")) {
        !active && handleConfetti();
      }
    });

    return () => {
      client.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <Confetti
        active={active}
        config={{
          angle: 90,
          spread: 360,
          startVelocity: 40,
          elementCount: 70,
          dragFriction: 0.12,
          duration: 3000,
          stagger: 3,
          width: "10px",
          height: "10px",
          perspective: "500px",
          colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
        }}
      />
    </div>
  );
}

export default ConfettiApp;
