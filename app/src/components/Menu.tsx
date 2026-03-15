import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowRight, X } from "lucide-react";

export default function Menu() {
    const links = [
        { href: "/about", label: "Sobre" },
        { href: "/privacy-policy", label: "Privacidade" },
        { href: "/contact", label: "Contato" },
        { href: "/faq", label: "Dúvidas" }
    ];

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="flex flex-col gap-1.5 items-end group cursor-pointer">
                    <div className="w-10 h-0.5 bg-white group-hover:bg-[#1ED760] transition-colors"></div>
                    <div className="w-7 h-0.5 bg-[#1ED760] group-hover:w-10 transition-all"></div>
                    <div className="w-4 h-0.5 bg-[#1ED760] group-hover:w-10 transition-all"></div>
                </button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="bg-[#121212] border-l border-white/10 p-6 flex flex-col justify-between [&>button]:hidden"
            >
                <header>
                    <div className="flex items-start justify-between border-b border-white/10 pb-6">
                        <div>
                            <h1 className="text-lg font-black text-white uppercase tracking-tight italic">
                                Music<span className="text-[#1ED760]">Analytics</span>
                            </h1>

                            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 mt-2">
                                Data-Driven Music Insights
                            </p>
                        </div>

                        <SheetClose asChild>
                            <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:border-[#1ED760] hover:bg-white/10 transition-all">
                                <X size={18} />
                            </button>
                        </SheetClose>
                    </div>

                    <nav className="flex flex-col gap-6 mt-8 text-[11px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center justify-between border-b border-white/5 pb-2 hover:text-[#1ED760] transition-colors group"
                            >
                                {link.label}

                                <span className="text-zinc-700 group-hover:text-[#1ED760] transition-colors">
                                    <ArrowRight size={16} />
                                </span>
                            </Link>
                        ))}
                    </nav>
                </header>

                <footer className="border-t text-center border-white/10 pt-6 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                    Made by{" "}
                    <a
                        href="https://github.com/edgaraugusto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1ED760] hover:underline"
                    >
                        Edgar Augusto
                    </a>
                </footer>
            </SheetContent>
        </Sheet>
    )
}