import { DownloadIcon } from "@/shared/icons"

export const TrackDownload = ({ id }: { id: number }) => {
  const handleDownload = () => {
    console.log("Download", id)
  }

  return (
    <button onClick={handleDownload}><DownloadIcon /></button>
  )
}
