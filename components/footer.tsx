import { cn } from "@/lib/utils";
import { Satisfy } from "next/font/google";
import Link from "next/link";

const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export const Footer = () => (
  <div className="bg-blue-800 py-8">
    <div className="w-full flex items-center justify-center">
      <div className="flex-1 w-full max-w-7xl">
        <div className="w-full flex items-start justify-between">
          <div className="space-y-1">
            <span
              className={cn(satisfy.className, "font-bold text-white text-2xl")}
            >
              ImAlexx
            </span>
            <p className="text-white/80 text-sm">
              Alexandre - Freelance web developer <br />
              based in France
            </p>
          </div>
          <div>
            <ul className="space-y-1">
              <li className="font-semibold uppercase text-sm text-white tracking-widest">
                Legal
              </li>
              <li>
                <Link
                  href={"/privacy"}
                  className="text-white/90 text-xs hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={"/terms"}
                  className="text-white/90 text-xs hover:underline"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);
