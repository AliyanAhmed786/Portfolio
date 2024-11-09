import Link from "next/link";

export default function Header() {
    return (
        <header className="py-3 flex justify-evenly items-center px-4 text-2xl bg-black">
            <div className="flex justify-start text-white">
                LOGO
            </div>
            <ul className="flex gap-6 text-white">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/services">Services</Link>
                </li>
            </ul>
        </header>
    );
}
