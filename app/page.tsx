import { Header } from "@/components/header";
import { MarqueeLayout } from "@/components/marquee";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <>
      <div className="bg-sky-100/30">
        <div className="w-full flex items-center justify-center">
          <div className="flex-1 w-full max-w-7xl">
            <Navigation />
            <Header />
            <MarqueeLayout />
          </div>
        </div>
      </div>
    </>
  );
}
