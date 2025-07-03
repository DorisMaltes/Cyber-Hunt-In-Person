// components/BackgroundMusic.tsx
import React, { useRef, useState } from "react";
import music from "./../assets/music.mp3";

import volumeOn from "../assets/imgs/SpeakerWave.gif";
import volumeOff from "../assets/imgs/SpeakerXMarc.png";

interface BackgroundMusicProps {
  iconSize?: string; // tailwind class (e.g., "w-20 h-20")
}

export default function BackgroundMusic({ iconSize = "w-20 h-20" }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.volume = 0.3; // moderate volume
      audio.play().catch((err) => {
        console.warn("User interaction required to play audio:", err);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={music} loop preload="auto" />
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 bg-black bg-opacity-50 text-white p-4 rounded-full shadow-md hover:bg-opacity-80 transition"
      >
        <img
          src={isPlaying ? volumeOn : volumeOff}
          className={`${iconSize}`}
          alt="Volume icon"
        />
      </button>
    </>
  );
}
