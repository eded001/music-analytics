type SectionVariant = "default" | "card" | "bordered"
type SectionTitleVariant = "default" | "secondary"

type SectionProps = {
    children: React.ReactNode
    variant?: SectionVariant
    className?: string
}

type SectionTitleProps = {
    children: React.ReactNode
    variant?: SectionTitleVariant
    className?: string
}

type ChildrenProps = {
    children: React.ReactNode
    className?: string
}

const sectionVariants: Record<SectionVariant, string> = {
    default: "",
    card: "bg-zinc-900/20 border border-zinc-800 p-6 rounded-sm",
    bordered: "pt-6 border-t border-zinc-800"
}

const titleVariants: Record<SectionTitleVariant, string> = {
    default: "text-white text-sm font-bold uppercase tracking-wider mb-4",
    secondary: "text-[#1ED760] text-[10px] font-bold uppercase tracking-widest mb-4"
}

export function Section({
    children,
    variant = "default",
    className = ""
}: SectionProps) {
    return (
        <section className={`${sectionVariants[variant]} ${className}`}>
            {children}
        </section>
    )
}

export function SectionTitle({
    children,
    variant = "default",
    className = ""
}: SectionTitleProps) {
    return (
        <h2 className={`${titleVariants[variant]} ${className}`}>
            {children}
        </h2>
    )
}

export function SectionContent({ children, className = "" }: ChildrenProps) {
    return (
        <div className={`text-zinc-400 text-sm leading-relaxed ${className}`}>
            {children}
        </div>
    )
}