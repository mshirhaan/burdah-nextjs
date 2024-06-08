import React, { useRef, useState } from "react";
import BurdaContainer from "@/components/BurdaContainer/BurdaContainer";

interface GenerateMetadataParams {
  params: {
    [key: string]: any; // Adjust this as per your specific route parameters
  };
}
export async function generateMetadata({ params }: GenerateMetadataParams) {
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
