import Image from "next/image";
import Marquee from "./magicui/marquee";

type MarqueeItem = {
  label: string;
  src: string;
};

export const MarqueeItems = [
  {
    label: "Unosial",
    src: "/marquee/unosial.png",
  },
  {
    label: "Saun'Activ Océan",
    src: "/marquee/saunactiv.webp",
  },
  {
    label: "Segnity",
    src: "/marquee/segnity.png",
  },
];

export const MarqueeLayout = () => {
  return (
    <div className="flex flex-row items-center gap-2 mt-10 mb-24">
      <div>
        <p className="text-primary/70 font-bold text-sm">In good hands</p>
      </div>
      <div className="relative flex w-full flex-col items-center overflow-hidden">
        <Marquee className="[--duration:10s]">
          {MarqueeItems.map((item: MarqueeItem) => (
            <MarqueeCard label={item.label} src={item.src} key={item.label} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f1f7ff] dark:from-[#0f1428] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f1f7ff] dark:from-[#0f1428]  to-transparent"></div>
      </div>
    </div>
  );
};

const MarqueeCard = ({ label, src }: MarqueeItem) => {
  return (
    <Image
      src={src}
      alt={label}
      height={45}
      width={140}
      className="object-center object-scale-down grayscale dark:invert mx-2 max-h-[45px]"
    />
  );
};
