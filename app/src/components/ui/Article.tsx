type ArticleProps = {
    children: React.ReactNode
    variant?: "default" | "grid" | "columns" | "divided"
    className?: string
}

function ArticleRoot({
    children,
    variant = "default",
    className = ""
}: ArticleProps) {

    const variants = {
        default: "space-y-10",
        grid: "grid grid-cols-1 gap-10",
        columns: "grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10",
        divided: "divide-y divide-zinc-800/50"
    }

    return (
        <article className={`${variants[variant]} ${className}`}>
            {children}
        </article>
    )
}

export const Article = Object.assign(ArticleRoot, {})