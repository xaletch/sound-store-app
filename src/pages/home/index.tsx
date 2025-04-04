import { Shadow } from "@/shared/ui"
import { Footer, Header, PopularFolders, PopularSamples, ReferralSystem, Slider } from "@/widgets"

export const Home = () => {
  return (
    <>
      <Shadow cl="w-62 -translate-x-2/4 h-62 1080:w-104 1080:h-104  blur-[120px] 1080:blur-[200px] left-20 -top-16 1080:-top-10 1080:left-134" />
      <div className="flex flex-col gap-6.5 relative z-[2]">
        <Header />
        <Slider />
        <PopularFolders />
        <PopularSamples />
        <ReferralSystem />
        <Footer />
      </div>
    </>
  )
}
