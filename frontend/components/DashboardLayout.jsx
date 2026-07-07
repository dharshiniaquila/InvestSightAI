export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-700/20 blur-[150px] rounded-full top-10 left-20"></div>

        <div className="absolute w-96 h-96 bg-cyan-600/20 blur-[150px] rounded-full bottom-0 right-10"></div>
      </div>

      {children}

    </div>
  );
}