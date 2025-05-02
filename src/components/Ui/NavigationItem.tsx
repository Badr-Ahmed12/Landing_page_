 
import React from 'react';
import { JSX } from 'react';

interface Props {
  label: string;
  icon: JSX.Element;
  href: string;
  onClick?: () => void;
}

const NavigationItem: React.FC<Props> = ({ label, icon, href, onClick }) => {
  return (
    <li role="menuitem">
      <a
        href={href}
        className="flex items-center text-white text-base font-medium px-4 py-3 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={onClick}
      >
        <span className="mr-3 text-xl">{icon}</span>
        {label}
      </a>
    </li>
  );
};

export default NavigationItem;
