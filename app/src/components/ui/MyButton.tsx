export function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="inline-block text-[10px] font-black text-black bg-white px-4 py-2 hover:bg-[#1ED760] transition-colors uppercase tracking-widest">
            {children}
        </button>
    )
}