import { Footer } from "@/components/footer";
import { GetInTouch } from "@/components/get-in-touch";
import { Header } from "@/components/header";
import { MarqueeLayout } from "@/components/marquee";
import { Navigation } from "@/components/navigation";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <div className="bg-blue-100/40">
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 w-full max-w-7xl">
            <Navigation />
            <Header />
            <MarqueeLayout />
          </div>
        </div>
      </div>
      <div className="bg-background">
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 w-full max-w-7xl">
            <Skills />
          </div>
        </div>
      </div>
      <div className="bg-blue-100/40">
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 w-full max-w-7xl">
            <GetInTouch />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
