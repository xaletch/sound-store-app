import { IPlayerTrack } from "../model/types";
import { NextButton } from "./next-button";
import { PauseButton } from "./payse-button";
import { PlayButton } from "./play-button";
import { PrevButton } from "./prev-button";

interface AudioControlProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  trackData: IPlayerTrack | null;
}

export const AudioControl = ({ isPlaying, onPlay, onPause, onNext, onPrev, trackData }: AudioControlProps) => {
  return (
    <div className="px-6 py-3">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h4 className="text-base md:text-lg font-medium">{trackData?.name || ''}</h4>
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
        </div>
      </div>
    </div>
  );
}
