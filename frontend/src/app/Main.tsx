export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-grow items-center justify-center">
      {children}
    </main>
  );
}
