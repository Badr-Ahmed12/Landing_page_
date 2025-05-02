"use client";
import { motion } from "framer-motion";
import Img from "../asset/image/Lorem.webp";
import useSwiper from "../hook/useSwiper";
import { useRef } from "react";

const companies = [
  { id: 1, logo: Img },
  { id: 2, logo: Img },
  { id: 3, logo: Img },
  { id: 4, logo: Img },
  { id: 5, logo: Img },
  { id: 6, logo: Img },
];

export default function CompaniesSwiper() {
  const containerRef = useRef<HTMLDivElement>(null);
  useSwiper(containerRef);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-10 bg-white border-t border-b border-gray-200"
    >
       <h2 className="mt-10 uppercase text-blue-600 text-center text-5xl font-extrabold mb-12">
        Our Partners
      </h2>

      <div ref={containerRef} className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar px-4 md:px-12">
        <div className="flex flex-nowrap">
          {companies.map((company) => (
            <div key={company.id} className="mr-12 ml-12 min-w-[100px] md:min-w-[140px] h-[100px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <img src={company.logo} alt={`Partner number ${company.id}`} className="h-full w-full object-contain rounded-full" />
            </div>
          ))}
        </div>
      </div>
     </motion.div>
  );
}

