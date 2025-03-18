"use client";

const Newsletter = () => {
    return (
        <div id="join-section" className="bg-[#F5EFFF] -mt-32 relative z-10">
            <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-[#4B164C] rounded-lg shadow-xl">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-1 xl:gap-x-8">

                    {/* COLUMN-1 */}
                    <div className="text-center sm:text-left text-white">
                        <h3 className="text-5xl font-bold mb-3">Join Our Newsletter</h3>
                        <h4 className="text-lg font-medium mb-7">
                            Subscribe to our newsletter for discounts, promo offers, and more.
                        </h4>

                        <form className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="py-4 text-sm w-full sm:w-auto flex-grow text-black bg-white rounded-md pl-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Enter your email"
                                autoComplete="off"
                            />
                            <button
                                type="submit"
                                className="bg-white hover:bg-gray-100 text-black font-medium py-3 px-6 rounded-md transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Newsletter;

