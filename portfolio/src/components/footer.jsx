export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold">
          Cybersecurity Enthusiast | Aspiring Full-Stack Developer
        </h3>
        <p className="text-sm mt-2">
          Passionate about creating impactful projects and solving real-world problems through technology.
        </p>
        <div className="mt-4 text-sm border-t border-gray-700 pt-4">
          Copyright &copy; {new Date().getFullYear()} Swastik Kumar Mohanty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
