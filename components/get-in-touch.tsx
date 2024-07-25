import { ContactMeSection } from "./header";

export const GetInTouch = () => {
  return (
    <article className="my-24 gap-14 flex flex-col items-center justify-center">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Let&apos;s get in touch!</h2>
        <p className="font-bold text-lg">
          Ignite new possibilities in your software projects with Alex
        </p>
      </div>
      <ContactMeSection />
    </article>
  );
};
