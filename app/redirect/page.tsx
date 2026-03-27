"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Redirect({ bool, route }: { bool: boolean; route: string }) {
    const router = useRouter();

    useEffect(() => {
        if (bool) {
            router.replace(route);
        }
    }, [bool, route, router]);

    if (!bool) return null;

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-4">
            <div className="w-5 h-5 border-2 border-zinc-800 border-t-[#1ED760] rounded-full animate-spin" />
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                Sincronizando Dados
            </p>
        </div>
    );
}