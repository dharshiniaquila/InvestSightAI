export default function GlowBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-20 bg-[#050816]" />

      <div className="fixed top-20 left-20 w-72 h-72 rounded-full bg-purple-600 opacity-20 blur-[140px] animate-pulse" />

      <div className="fixed bottom-20 right-20 w-72 h-72 rounded-full bg-cyan-500 opacity-20 blur-[140px] animate-pulse" />

      <div className="fixed top-1/2 left-1/2 w-96 h-96 rounded-full bg-indigo-600 opacity-10 blur-[180px] -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}