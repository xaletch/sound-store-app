import { useGetSoundQuery } from "@/entities/sound/model/services";
import { setSoundPack, setSoundTracks } from "@/entities/sound/model/slice";
import { Route } from "@/routes/_app/_layout/sound/$name";
import { SoundContent, SoundInformation } from "@/widgets"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Sound = () => {
  const { name } = Route.useParams();
  const dispatch = useDispatch();

  const { data: sounds, isSuccess } = useGetSoundQuery({ id:  name});

  useEffect(() => {
    if (sounds && isSuccess) {
      dispatch(setSoundPack(sounds.PackInfo.Pack));
      dispatch(setSoundTracks(sounds.PackInfo.Tracks));
    }
  }, [sounds]);

  return (
    <div className="px-4 pb-4">
      <SoundInformation />
      <SoundContent />
    </div>
  )
}
