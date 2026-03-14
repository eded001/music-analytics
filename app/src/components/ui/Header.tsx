type HeaderProps = {
    children: React.ReactNode
}

function HeaderRoot({ children }: HeaderProps) {
    return (
        <header className="mb-12 border-b border-zinc-800 pb-8">
            {children}
        </header>
    )
}

export function HeaderTitle({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-3xl font-semibold text-white tracking-tight">
            {children}
        </h1>
    )
}

export function HeaderSubtitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-zinc-500 mt-2 text-xs uppercase tracking-widest">
            {children}
        </h2>
    )
}

export const Header = Object.assign(HeaderRoot, {
    Title: HeaderTitle,
    Subtitle: HeaderSubtitle
})