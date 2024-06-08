"use client";

import {
  getChapter,
  getReciterAudioMapping,
  getReciterNames,
} from "@/lib/chapter";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";
import BurdaPara from "@/components/BurdaPara/BurdaPara";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import BurdaPlayer from "@/components/BurdaPlayer/BurdaPlayer";

interface Para {
  id: number | string;
  arabicLines: string[];
  englishLines: string[];
  tafseer?: string;
}

interface ChapterObject {
  arabicTitle: string;
  englishTitle: string;
  chapterDetails: Para[];
}

interface ChapterAudio {
  audioStart: number;
  audioEnd: number;
  disabled?: boolean;
}
interface Reciter {
  id: number;
  name: string;
  fullAudioUrls: string[];
  audioMapping: Record<string, ChapterAudio[]>;
}

const Chapter: React.FC<{ params: { chapterId: string } }> = ({ params }) => {
  const chapterId = params.chapterId;
  const chapter: ChapterObject = getChapter(chapterId);
  const reciterNames: string[] = getReciterNames();
  const [selectedReciter, setSelectedReciter] = useState(reciterNames[0]);
  const reciter: Reciter = getReciterAudioMapping(selectedReciter);

  const audioUrl = reciter.fullAudioUrls[+chapterId - 1];

  const [audioTime, setAudioTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSetAudioTime = (timeInSeconds: number) => {
    setAudioTime(timeInSeconds);
  };

  const handleSetAudioRefTime = (timeInSeconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = timeInSeconds;
    }
  };

  const togglePlay = (flag: boolean) => {
    if (audioRef.current) {
      if (flag == true) {
        audioRef.current.play();
        setIsPlaying(true);
        return;
      }
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleReciterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedReciter(event.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={`${styles.chapterTitle} ${styles["text-cycle"]}`}>
        <h1 className="arabic">{chapter.arabicTitle}</h1>
        <h1>{chapter.englishTitle}</h1>
      </div>
      {chapter.chapterDetails.map((para: Para, index) => (
        <React.Fragment key={para.id}>
          <BurdaPara
            para={para}
            audioMapping={reciter.audioMapping["chapter" + chapterId][index]}
            setPlaybackTime={handleSetAudioRefTime}
            togglePlay={() => {}}
            isPlaying={isPlaying}
            currentTime={audioTime}
            key={para.id}
          />
        </React.Fragment>
      ))}
      {+chapterId < 10 ? (
        <Link
          href={"/chapters/" + (+chapterId + 1)}
          style={{
            marginTop: "40px",
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Next Chapter {+chapterId + 1}
          <FaArrowRight />
        </Link>
      ) : null}
      <BurdaPlayer
        setPlaybackTime={handleSetAudioTime}
        currentTime={audioTime}
        audioRef={audioRef}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        audioUrl={audioUrl}
        reciters={reciterNames}
        handleReciterChange={handleReciterChange}
        selectedReciter={selectedReciter}
      />
    </div>
  );
};

export default Chapter;
