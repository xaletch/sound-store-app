import { AudioControl, useAudioPlayer } from "@/features/audio-player";

const tracks = [
  'https://storage.yandexcloud.net/tma-dev-bits/audio/track-33?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Checksum-Mode=ENABLED&X-Amz-Credential=YCAJE4WdZjq2mm9lLqu6JbU8g%2F20250319%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250319T135628Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=8493aa4caa5e32a95bf8accdd730b56f5638189146f46d072cc045ed1e65a35e',
  'https://storage.yandexcloud.net/tma-dev-bits/audio/track-33?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Checksum-Mode=ENABLED&X-Amz-Credential=YCAJE4WdZjq2mm9lLqu6JbU8g%2F20250319%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250319T135628Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=8493aa4caa5e32a95bf8accdd730b56f5638189146f46d072cc045ed1e65a35e',
  'https://storage.yandexcloud.net/tma-dev-bits/audio/track-33?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Checksum-Mode=ENABLED&X-Amz-Credential=YCAJE4WdZjq2mm9lLqu6JbU8g%2F20250319%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250319T135628Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=8493aa4caa5e32a95bf8accdd730b56f5638189146f46d072cc045ed1e65a35e',
  'https://storage.yandexcloud.net/tma-dev-bits/audio/track-33?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Checksum-Mode=ENABLED&X-Amz-Credential=YCAJE4WdZjq2mm9lLqu6JbU8g%2F20250319%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250319T135628Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=8493aa4caa5e32a95bf8accdd730b56f5638189146f46d072cc045ed1e65a35e',
  'https://storage.yandexcloud.net/tma-dev-bits/audio/track-33?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Checksum-Mode=ENABLED&X-Amz-Credential=YCAJE4WdZjq2mm9lLqu6JbU8g%2F20250319%2Fru-central1%2Fs3%2Faws4_request&X-Amz-Date=20250319T135628Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&x-id=GetObject&X-Amz-Signature=8493aa4caa5e32a95bf8accdd730b56f5638189146f46d072cc045ed1e65a35e',
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
