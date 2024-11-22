export default function Layout({ children }) {
  return (
    <div className="bg-[#F2E9E4]">
      <nav className="fixed top-0 w-full bg-[#F2E9E4] z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-[#E07A5F] text-xl font-bold">
              Pavan
            </a>
            <div className="flex gap-8">
              <a href="#projects" className="text-[#81B29A] hover:text-[#E07A5F]">Projects</a>
              <a href="#contact" className="text-[#81B29A] hover:text-[#E07A5F]">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {children}

      <footer className="bg-[#E07A5F] text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Pavan. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#F2E9E4]">LinkedIn</a>
              <a href="#" className="hover:text-[#F2E9E4]">GitHub</a>
              <a href="#" className="hover:text-[#F2E9E4]">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 