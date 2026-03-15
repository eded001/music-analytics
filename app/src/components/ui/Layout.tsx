export function Layout({ children, className } : { children: React.ReactNode; className?: string }) {
    return (
        <main className={`max-w-3xl mx-auto py-20 px-6 min-h-screen ${className || ''}`}>
            {children}
        </main>
    );
}