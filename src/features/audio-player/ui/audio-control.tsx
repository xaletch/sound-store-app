import { LikeIcon, LikeSelectPlayerIcon } from "@/shared/icons";
import { IPlayerTrack } from "../model/types";
import { NextButton } from "./next-button";
import { PauseButton } from "./payse-button";
import { PlayButton } from "./play-button";
import { PrevButton } from "./prev-button";
import { useSelector } from "react-redux";
import { playerSelector } from "../model/selector";
import { Link } from "@tanstack/react-router";

interface AudioControlProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onLike: () => void;
  trackData: IPlayerTrack | null;
}

export const AudioControl = ({ isPlaying, onPlay, onPause, onNext, onPrev, onLike, trackData }: AudioControlProps) => {
  const { lovedTracks } = useSelector(playerSelector);

  const IS_LOVE = trackData?.id ? lovedTracks[trackData.id] : false;

  console.log(trackData);

  return (
    <div className="px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        <div>
          <Link to="/sound/$name" params={{ name: trackData?.packId.toString() || '' }} className="hover:text-green-800 duration-300">
            <h4 className="text-base md:text-lg font-medium">{trackData?.name || ''}</h4>
          </Link>
          <p className="text-[#b6b6b6] text-xs md:text-base font-medium">{trackData?.creator || ''}</p>
        </div>
        <div className="flex items-center gap-6.5">
          <PrevButton onClick={onPrev} />
          {isPlaying ? (
            <PauseButton onClick={onPause} />
          ) : (
            <PlayButton onClick={onPlay} />
          )}
          <NextButton onClick={onNext} /> 
          <button onClick={onLike} className="cursor-pointer">{IS_LOVE ? <LikeSelectPlayerIcon /> : <LikeIcon />}</button>
        </div>
      </div>
    </div>
  );
}
