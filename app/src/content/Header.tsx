"use client";

import List from "@/components/List";
import Menu from "@/components/Menu";
import Link from "next/link";

export default function Header() {
    const links = [
        { href: "/about", label: "Sobre" },
        { href: "/privacy-policy", label: "Privacidade" },
        { href: "/contact", label: "Contato" },
        { href: "/faq", label: "Dúvidas" }
    ];

    return (
        <header className="sticky top-0 z-50 bg-[#121212]/90 backdrop-blur-xl border-b border-white/5 px-6 py-5 md:px-12 flex justify-between items-center">
            <div className="flex items-center gap-4 group cursor-default">
                <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter italic whitespace-nowrap">
                    <Link href="/" target="_self">
                        Music<span className="text-[#1ED760]">Analytics</span>
                    </Link>
                </h1>

                <span className="hidden lg:block text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 border-l border-white/10 pl-4 py-1">
                    Data-Driven Music Insights
                </span>
            </div>

            <nav className="hidden md:block">
                <List
                    className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
                    items={links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-[#1ED760] transition-colors border-b-2 border-transparent hover:border-[#1ED760] pb-1"
                        >
                            {link.label}
                        </Link>
                    ))}
                />
            </nav>

            <div className="md:hidden">
                <Menu />
            </div>
        </header>
    );
}