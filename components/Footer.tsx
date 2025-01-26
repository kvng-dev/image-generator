const Footer = () => {
  return (
    <div className="py-16 bg-black">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start pb-8 border-b-2 border-gray-900 space-y-6 sm:space-y-0">
        <div className="col-span-2">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white w-[70%] font-bold">
            We develop & create digital future
          </p>
        </div>

        <div>
          <h1 className="text-xl font-bold text-white ">Address</h1>
          <p className="text-white opacity-55 mt-4">123, Main street</p>
          <p className="text-white opacity-55">Maryland, US</p>
        </div>

        <div>
          <h1 className="text-xl font-bold text-white ">Contact</h1>
          <p className="text-white opacity-55 mt-4">Email</p>
          <p className="text-white opacity-55">
            <a href="mailto:your-email@example.com">info@gmail.com</a>
          </p>

          <p className="text-white opacity-55 mt-4">Phone</p>
          <p className="text-white opacity-55">
            <a href="tel:1234567890">+1 123 456 7890</a>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <p className="text-white opacity-55 w-[80%] mx-auto">
          Kvng Dev &copy; 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
