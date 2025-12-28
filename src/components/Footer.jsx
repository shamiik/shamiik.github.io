
const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 relative z-10">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} Shamik Deepto. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
