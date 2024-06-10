import React, { useState, useRef, useEffect } from "react";
import styles from "./BurdaPlayer.module.css";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import ThemeIcon from "../ThemeIcon/ThemeIcon";

import * as Slider from "@radix-ui/react-slider";
import "./styles.css";

function BurdaPlayer({
  setPlaybackTime,
  currentTime,
  audioRef,
  togglePlay,
  isPlaying,
  audioUrl,
  reciters,
  handleReciterChange,
  selectedReciter,
}: any) {
  const [isHidden, setIsHidden] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const { theme } = useTheme();

  const isScrollAtEnd = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;

    let subtractValue = 100;

    return windowHeight + scrollPosition >= documentHeight - subtractValue;
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleScroll = () => {
    if (isScrollAtEnd()) {
      setIsHidden(true); // Hide the player when scroll is at the end
    } else {
      setIsHidden(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLProgressElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickX = e.clientX - progressBar.getBoundingClientRect().left;
      const percent = (clickX / progressBar.offsetWidth) * 100;
      const duration = audioRef.current.duration;
      const newTime = (duration * percent) / 100;

      audioRef.current.currentTime = newTime;
      setPlaybackTime(newTime);
    }
  };

  const handleSliderChange = (value: [number]) => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = value[0];
      setPlaybackTime(value[0]);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", () => {
        setPlaybackTime(audioRef.current?.currentTime || 0);
      });
    }
  }, []);

  useEffect(() => {
    setMaxValue(audioRef.current?.duration);
  }, [audioRef.current]);

  // Function to format time in HH:MM:SS format
  const formatTime = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    const paddedMinutes = minutes.toString().padStart(2, "0");
    const paddedSeconds = seconds.toString().padStart(2, "0");

    return `${hours}:${paddedMinutes}:${paddedSeconds}`;
  };

  const [maxValue, setMaxValue] = useState(0);

  return (
    <div
      className={`${styles.container} ${
        isHidden || !audioUrl ? styles.hidden : ""
      } ${theme == "dark" ? styles.dark : ""}`}
    >
      {/* Dropdown for selecting the reciter */}
      <select value={selectedReciter} onChange={handleReciterChange}>
        {reciters.map((reciterName: string) => (
          <option key={reciterName} value={reciterName}>
            {reciterName}
          </option>
        ))}
      </select>
      <audio ref={audioRef} src={audioUrl} autoPlay={isPlaying}>
        Your browser does not support the audio element.
      </audio>
      <div className={styles.player}>
        <button
          onClick={togglePlay}
          className={`${theme == "dark" ? "dark" : ""}`}
        >
          {isPlaying ? (
            <ThemeIcon Icon={FaPause} />
          ) : (
            <ThemeIcon Icon={FaPlay} />
          )}
        </button>
        <button
          onClick={toggleMute}
          className={`${theme == "dark" ? "dark" : ""}`}
        >
          {isMuted ? (
            <ThemeIcon Icon={FaVolumeMute} />
          ) : (
            <ThemeIcon Icon={FaVolumeUp} />
          )}{" "}
          {/* Toggle mute/unmute icon */}
        </button>
        {/* <progress
          max={audioRef.current?.duration || 0}
          value={currentTime}
          style={{ width: "100%", cursor: "pointer" }}
          onClick={handleProgressBarClick}
        ></progress> */}

        <Slider.Root
          className="SliderRoot"
          value={[currentTime]}
          onValueChange={handleSliderChange}
          max={maxValue}
          step={1}
        >
          <Slider.Track className="SliderTrack">
            <Slider.Range
              className={`${
                theme == "light" ? "DarkSliderRange" : ""
              } SliderRange`}
            />
          </Slider.Track>
          <Slider.Thumb
            className={`${
              theme == "light" ? "DarkSliderThumb" : ""
            } SliderThumb`}
            aria-label="Volume"
          />
        </Slider.Root>
      </div>
      <div className={styles.timer}>
        <span>{formatTime(currentTime)}</span>
        <span> / </span>
        <span>{formatTime(audioRef.current?.duration || 0)}</span>
      </div>
    </div>
  );
}

export default BurdaPlayer;
