import { Footer, Header, PopularFolders, PopularSamples, ReferralSystem, Slider } from "@/widgets"

export const Home = () => {
  return (
    <div className="flex flex-col gap-6.5">
      <Header />
      <Slider />
      <PopularFolders />
      <PopularSamples />
      <ReferralSystem />
      <Footer />
    </div>
  )
}
