"use client";

import Link from "next/dist/client/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#121212] border-t border-white/5 py-5 overflow-hidden">
            <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-0.5 bg-[#1ED760] mb-2 opacity-50"></div>

                <div className="text-white text-lg md:text-xl font-black uppercase italic tracking-widest">
                    Made by
                    <span className="ml-1 text-[#1ED760] hover:text-[#1ED760]/ transition-all px-1 inline-block hover:underline">
                        <Link
                            href="https://eded001.github.io/portfolio/"
                            target="_blank"
                        >
                            Edgar Augusto
                        </Link>
                    </span>
                </div>

                {/* Copyright/Ano Minimalista */}
                <span className="text-[9px] font-medium text-zinc-600 uppercase tracking-widest mt-4">
                    © {new Date().getFullYear()} Music Analytics — Todos os direitos reservados.
                </span>
            </div>
        </footer>
    );
}