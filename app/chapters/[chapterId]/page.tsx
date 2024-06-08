import React, { useRef, useState } from "react";
import BurdaContainer from "@/components/BurdaContainer/BurdaContainer";

export async function generateMetadata({ params }) {
  return {
    title: `Qaseeda Burdah - Chapter ${params.chapterId}`,
    description: `Read Qaseeda Burdah Chapter ${params.chapterId} along with audio, translations and tasfeer`,
  };
}

const Chapter: React.FC<{ params: { chapterId: string } }> = ({ params }) => {
  const chapterId = params.chapterId;

  return <BurdaContainer chapterId={chapterId} />;
};

export default Chapter;
