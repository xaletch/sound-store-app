import { AudioControl, useAudioPlayer } from "@/features/audio-player";

const tracks = [
  'https://storage.yandexcloud.net/tma-dev-bits/audio/track-32?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEGYuKPjNlESjNCbip2Anw%2F20250319%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250319T143042Z&X-Amz-Expires=3600&X-Amz-Signature=3C404CA193F041E2E4B7B596ACD72BC102BFA4D301C787233BF310C6DC3E20AA&X-Amz-SignedHeaders=host'
];

export const AudioPlayer = () => {
  const {
    isPlaying,
    currentTrack,
    audioRef,
    play,
    pause,
    nextTrack,
    prevTrack,
  } = useAudioPlayer(tracks[0]);

  const handleNext = () => {
    const currentIndex = tracks.indexOf(currentTrack);
    const nextIndex = (currentIndex + 1) % tracks.length;
    nextTrack(tracks[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = tracks.indexOf(currentTrack);
    const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    prevTrack(tracks[prevIndex]);
  };

  return (
    <div className="fixed bottom-20 left-0 w-full px-5 md:px-5">
      <div className="bg-[#e7e4dd] border border-black rounded-3xl">
        <AudioControl
          isPlaying={isPlaying}
          onPlay={play}
          onPause={pause}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
      <audio ref={audioRef} src={currentTrack} />
    </div>
  )
}
