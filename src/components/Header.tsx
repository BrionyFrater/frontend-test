import Image from "next/image";

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-background gap-4 py-4 px-6 flex items-center justify-start">
            <Image alt="" src={"/alt_logo.png"} width={50} height={50}></Image>
            <h1 className="font-medium">Hear Me</h1>
        </header>
    );
}
