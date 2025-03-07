export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex-center min-h-screen w-full">
            <main className="flex-1 wrapper">
                {children}
            </main>
        </div>
    );
}