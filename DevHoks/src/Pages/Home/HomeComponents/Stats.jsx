export const Stats = () => {
  return (
      <section className="">
          <div className="mx-auto text-center ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center sm:items-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 font-medium text-green-600 ring-1 ring-green-600 uppercase">
              Why People Choose Us
            </div>
          </div>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 items-center sm:text-6xl">
          Over 6,600+ satisfied customers !
              </p>
              <p className="mt-2 text-lg font-medium tracking-nomral text-gray-900 items-center sm:text-1xl">
              With over 1 million agencies out there, here&apos;s what sets us apart and keeps clients winning
              </p>
        </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20  flex items-center justify-between flex-col gap-16 lg:flex-row">
          <div className="w-full lg:w-60">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              Our Stats
            </h2>
            <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
              We help you to unleash the power within your business
            </p>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-green-600 mb-3 text-center lg:text-left">
                  260+
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Expert Consultants
                </span>
              </div>
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-green-600 mb-3 text-center lg:text-left">
                  975+
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Active Clients
                </span>
              </div>
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-green-600 mb-3 text-center lg:text-left">
                  724+
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Projects Delivered
                </span>
              </div>
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-green-600 mb-3 text-center lg:text-left">
                  89+
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Orders in Queue
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
