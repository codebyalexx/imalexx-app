import { cn } from "@/lib/utils";
import { Satisfy } from "next/font/google";
import { ModeToggle } from "./mode-toggle";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-4 justify-between py-20">
      <div className="flex items-center gap-3">
        {/*<Image src={"/logo.png"} alt="Logo" height={50} width={50} />*/}
        <span
          className={cn(satisfy.className, "font-bold text-primary text-4xl")}
        >
          ImAlexx
        </span>
      </div>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
};
