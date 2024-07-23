import { GithubIcon, LinkedinIcon, MessagesSquare } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between py-20 gap-24">
      <div className="space-y-6 w-1/2">
        <h1 className="text-5xl font-extrabold">
          Hi, I am <span className="text-primary">Alexandre!</span>
          <br />
          Fullstack Developer
          <br />
          from France
        </h1>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          praesentium incidunt possimus tempora eius. Sit odit facilis
          voluptatem sunt adipisci asperiores placeat excepturi nam maxime. Eius
          explicabo modi nihil dolorem.
        </p>
        <ContactMeSection />
      </div>
      <div className=" w-1/2 bg-red-50">IMG</div>
    </header>
  );
};

const ContactMeSection = () => {
  return (
    <div className="flex items-center gap-4">
      <MessagesSquare className="size-10 text-primary" />
      <div className="space-y-2 border-l-4 border-primary pl-4">
        <Link
          href={"tel:+33768000673"}
          className="block text-base font-semibold"
        >
          +33 7 68 00 06 73
        </Link>
        <Link
          href={"mailto:hello@imalexx.com"}
          className="block text-base font-semibold"
        >
          hello@imalexx.com
        </Link>
        <div className="flex items-center gap-4 pt-2">
          <Link href={""} target="_blank">
            <LinkedinIcon className="w-5 h-5" />
          </Link>
          <Link href={""} target="_blank">
            <GithubIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
