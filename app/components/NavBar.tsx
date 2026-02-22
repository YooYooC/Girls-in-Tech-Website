"use client";
import Link from "next/link";
const navLinks = [
    { title: "Home", link: "/" },
    { title: "Gallery", link: "/gallery" },
    { title: "Programs", link: "/programs" },
    { title: "Contact", link: "/contact" },
];

export default function NavBar() {
    return (
        <div className={`fixed top-0 w-full px-4 md:px-8 pt-2.5 pb-2 z-50`}>
            <div className="flex justify-end md:space-x-30 space-x-8">
                {navLinks.map((navLink) => {
                    return (
                        <div key={navLink.link} className="relative flex">
                            <Link
                                href={navLink.link}
                                className="inline-flex p-2 rounded-md"
                                aria-label={navLink.title}
                            >
                                <p
                                    className="mr-2 top-1/2 -translate-y-1/2
                                           whitespace-nowrap underline
                                           transition-opacity duration-200 pointer-events-auto"
                                    aria-hidden="true"
                                >
                                    {navLink.title}
                                </p>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
