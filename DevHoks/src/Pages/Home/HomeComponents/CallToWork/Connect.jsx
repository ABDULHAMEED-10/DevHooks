export const Connect = () => {
  return (
    <div className="py-10 mx-auto w-full max-w-6xl">
      <div className="mx-3 md:mx-0 px-8 py-4 bg-green-700 border border-gray-200 rounded-2xl">
        <div>
          <span className="text-2xl font-bold text-gray-100 md:text-3xl lg:text-4xl">
            Lets try our service now!
          </span>
        </div>
        <div className="mt-3 flex flex-col items-center justify-between gap-3 md:flex-row">
          <div>
            <p className="text-sm lg:text-md font-normal tracking-wide text-white max-w-3xl ">
              We are always ready to help you with your business. Let&apos;s
              connect and make your business more profitable. Press the button
              contact and email us or call us to get started. We are 24/7
              available for you.
            </p>
          </div>
          <div className="">
            <a
              href="https://wa.me/+923000713825"
              className="inline-block px-6 py-1.5 text-lg font-semibold text-gray-800 bg-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
