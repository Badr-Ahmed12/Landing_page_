import img from '../asset/image/uiux.png';
import img2 from '../asset/image/frontend.png';
import img3 from '../asset/image/backend.png';
import { FaHome, FaInfoCircle, FaConciergeBell, FaEnvelope } from 'react-icons/fa';
import { ReactNode } from 'react';

export type Card = {
  title: string;
  description: string;
  more: string;
};

export type Service = {
  title: string;
  description: string;
  details: string;
  price: string;
  reviews: string;
  image: string;
};


export interface NavLink {
  label: string;
  icon: ReactNode;
  href: string;
}


export type Testimonial = {
  quote: string;
  author: string;
  position: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We are very happy with the services provided by Brandify. They were very professional and responsive to our needs. We would definitely recommend them to anyone looking for a design agency.",
    author: "John Doe",
    position: "CEO",
    company: "XYZ Corporation",
  },
  {
    quote:
      "Brandify did an amazing job with our website. They were very easy to work with and the end result was exactly what we were looking for. We would definitely recommend them to anyone looking for a web design agency.",
    author: "Jane Doe",
    position: "Marketing Manager",
    company: "ABC Inc.",
  },
  {
    quote:
      "We were very impressed with the level of service provided by Brandify. They were very responsive to our needs and the end result was exactly what we were looking for. We would definitely recommend them to anyone looking for a design agency.",
    author: "Bob Smith",
    position: "Owner",
    company: "DEF LLC",
  },
];


export const navLinks: NavLink[] = [
  { label: 'Home', icon: <FaHome />, href: '#home' },
  { label: 'About', icon: <FaInfoCircle />, href: '#about' },
  { label: 'Services', icon: <FaConciergeBell />, href: '#services' },
  { label: 'Contact', icon: <FaEnvelope />, href: '#contact' },
];


export const services: Service[] = [
  {
    title: 'UI/UX Design',
    description: 'We create stunning, intuitive, and user-friendly designs...',
    details: 'Using the latest design tools and techniques...',
    price: '$1500 - $3000',
    reviews: '★★★★★ (50 reviews)',
    image: img,
  },
  {
    title: 'Frontend Development',
    description: 'Building fast, scalable, and responsive web applications...',
    details: 'We specialize in React.js, Next.js, and TypeScript...',
    price: '$2000 - $5000',
    reviews: '★★★★★ (40 reviews)',
    image: img2,
  },
  {
    title: 'Backend Development',
    description: 'Developing secure and scalable backend systems...',
    details: 'We use Node.js, Express, and modern databases...',
    price: '$2500 - $6000',
    reviews: '★★★★★ (30 reviews)',
    image: img3,
  },
];

export const cards: Card[] = [
  {
    title: 'UI/UX Design Excellence',
    description:
      'We craft stunning user interfaces and intuitive experiences that captivate users and maximize engagement.',
    more:
      'We use the latest design tools to create visually appealing and user-friendly interfaces that drive conversions.'
  },
  {
    title: 'Frontend Development',
    description:
      'Building blazing-fast, responsive web applications using the latest technologies like React, Next.js, and TypeScript.',
    more:
      'We use modern frontend frameworks to build fast, scalable, and maintainable web applications.'
  },
  {
    title: 'Backend Solutions & APIs',
    description:
      'Developing secure, scalable backend systems and seamless APIs that power your applications and integrate flawlessly.',
    more:
      'We use modern backend frameworks to build secure, scalable, and maintainable backend systems.'
  }
];
