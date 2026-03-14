export function Layout({ children } : { children: React.ReactNode }) {
    return (
        <main className="max-w-3xl mx-auto py-20 px-6 min-h-screen">
            {children}
        </main>
    );
}