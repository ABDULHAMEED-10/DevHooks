export const Description = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-green-600 to-gray-700 p-5">
      <p className="text-2xl text-white text-center max-w-xl mx-5 sm:text-xl font-bold leading-relaxed">
        Our website is currently under development. For inquiries about our
        services, please contact us or chat with our virtual assistant.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
        <a
          href="tel:+923000713825"
          className="mt-5 px-4 py-2 border border-white text-gray-100 rounded hover:bg-gray-200 hover:text-gray-900 sm:mt-3 sm:px-3 sm:py-1"
        >
          Contact Us
        </a>
        <a
          href="https://wa.me/+923000713825"
          className="mt-5 px-4 py-2 border border-gray-900 text-gray-900 rounded bg-gray-100 hover:bg-transparent hover:text-gray-100 sm:mt-3 sm:px-3 sm:py-1"
        >
          Chat with agent
        </a>
      </div>
    </div>
  );
};

export default Description;
