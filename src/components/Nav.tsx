import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data';
import NavigationItem from './Ui/NavigationItem';
import useMenu from '../hook/useMenu';

const Navbar: React.FC = () => {
  const { isMenuOpen, isScrolling, toggleMenu, closeMenu } = useMenu();

  return (
    <nav
      className={`bg-gray-900 p-4 shadow-xl fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isScrolling ? 'transform -translate-y-2' : 'transform translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center text-white text-2xl font-extrabold tracking-widest hover:text-blue-400 transition"
        >
          <svg
            className="h-8 w-8 mr-2 text-blue-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Brandify
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-3xl focus:outline-none transition-transform hover:scale-110"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className="hidden md:flex space-x-6" role="menubar">
          {navLinks.map((link) => (
            <li key={link.label} role="menuitem">
              <a
                href={link.href}
                className="flex items-center text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
              >
                <span className="mr-2 text-lg">{link.icon}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <ul
          className="md:hidden mt-4 px-6 py-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl shadow-xl space-y-4 animate-fade-in"
          role="menu"
        >
          {navLinks.map((link) => (
            <NavigationItem key={link.label} {...link} onClick={closeMenu} />
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

