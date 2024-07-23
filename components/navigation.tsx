import Image from "next/image";

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-4 justify-between py-20">
      <div className="flex items-center gap-3">
        <Image src={"/logo.png"} alt="Logo" height={50} width={50} />
        <span className="font-bold text-primary text-2xl">ImAlexx</span>
      </div>
      <div>Language Selector / Theme Selector</div>
    </nav>
  );
};
