import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-background shadow-md py-4 px-6 flex items-center justify-between">
        {/* <Image alt="" src={}></Image> */}
      <h1 className="text-2xl font-bold text-text">Hear Me</h1>
    </header>
  );
}
