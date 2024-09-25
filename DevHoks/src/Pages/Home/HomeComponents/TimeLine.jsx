export const TimeLine = () => {
  return (
    <div>
      <div className="mx-auto max-w-8xl px-4 lg:px-8 ">
        <div className="mx-auto text-center mb-5">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
            <div className="relative uppercase rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600">
              Thats How We Work
            </div>
          </div>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Experience Elitechain&apos;s Flows.
          </p>
          <p className="mt-4 text-lg font-medium tracking-wide leading-8 text-gray-600">
            Think of our algorithm like butter on bread—smooth and effortless.
            It&apos;s that simple! Each step flows seamlessly, making meetings a
            breeze.
          </p>
        </div>
      </div>
      <div className="px-48 flex items-center">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
              Contact
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
              Quick Text
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-500">
              Submit your query on our official Whatsapp Handle. Our agents will
              connect you with tech experts to discuss your needs, recommend
              solutions, and show you ways to boost your business.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-green-700 transition rounded ring-1 ring-green-700 hover:bg-green-700 hover:text-white focus-visible:outline focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
            >
              Learn More{" "}
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
              Meeting
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
              Insights & Action Planning Session
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-500">
              During your meeting, our team of tech experts will gain a
              comprehensive understanding of your problem or idea. They will
              then develop the best possible solutions and demonstrate a clear
              roadmap for growing and scaling your business.
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
              Promise
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-black">
              Proposal and Execution
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-500">
              Once you choose our customized proposal to unlock success for your
              business, we&apos;ll maintain close communication every step of
              the way. You&apos;ll receive weekly comprehensive updates,
              ensuring you&apos;re always informed and empowered. And of course,
              your valuable feedback is always welcome,and Yeah Fast Delivery
              forsure.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};
export default TimeLine;
