const Footer = () => {
  return null;

  return (
    <footer className="py-8 px-6 bg-white border-t border-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-800 font-medium">
          © {new Date().getFullYear()} 변지욱. All rights reserved.
        </p>
        <p className="text-gray-600 text-sm mt-2">
          Built with React, Tailwind CSS, and Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;
