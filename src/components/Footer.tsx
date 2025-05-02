import useTime from "../hook/useTime";

const Footer: React.FC = () => {
  const { year } = useTime();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center space-x-6">
          <p className="text-xl font-medium">
            &copy; {year} React Project, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

