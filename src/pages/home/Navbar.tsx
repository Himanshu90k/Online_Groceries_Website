import { useState, useEffect } from "react";

const Navbar = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => {
            setScreenWidth(() => window.innerWidth);
            console.log(window.innerWidth)
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <div className="flex items-center gap-9 md:gap-24 min-w-71 my-4">

            {/* profile details */}
            <div className="flex items-center gap-1 md:gap-4">
                <div className="flex items-center justify-center w-8 h-8 md:w-16 md:h-16 rounded-4-xl border-2 border-solid border-customYellow bg-customRed">
                    <svg xmlns="http://www.w3.org/2000/svg" width={(screenWidth > 768)? "32" : '14'} height={(screenWidth > 768)? "38" : "18"} viewBox="0 0 32 38" fill="none">
                        <path d="M16 15.5C19.866 15.5 23 12.366 23 8.5C23 4.63401 19.866 1.5 16 1.5C12.134 1.5 9 4.63401 9 8.5C9 12.366 12.134 15.5 16 15.5Z" stroke="white" strokeWidth={(screenWidth > 768)? "3" : "2"} />
                        <path d="M30 28.625C30 32.9737 30 36.5 16 36.5C2 36.5 2 32.9737 2 28.625C2 24.2763 8.2685 20.75 16 20.75C23.7315 20.75 30 24.2763 30 28.625Z" stroke="white" strokeWidth={(screenWidth > 768)? "3" : "2"} />
                    </svg>
                </div>
                <div className="flex flex-col items-start gap-1 md:gap-6-px">
                    <div className="flex gap-1 md:gap-2 items-center">
                        <h2 className="text-black font-inter text-xs md:text-xl font-semibold">Welcome Guest</h2>
                        <p className="text-customRed font-inter text-xs md:text-xl font-medium">( Login )</p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={(screenWidth > 768)? "14":"7"} height={(screenWidth > 768)? "20":"10"} viewBox="0 0 14 20" fill="none">
                            <path
                                d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 
                            5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 
                            9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 
                            9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 
                            2.05025C10.637 0.737498 8.85652 0 7 0Z" fill="#D31F28"
                            />
                        </svg>
                        {/* address */}
                        <div className="flex items-center gap-1 md:gap-2">
                            <p className="text-black font-inter text-xxs md:text-sm font-medium">Deliver to 400071</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width={(screenWidth > 768)? "10":"6"} height={(screenWidth > 768)? "6":"5"} viewBox="0 0 10 6" fill="none">
                                <path d="M9 1L5 5L1 1H9Z" fill="black" stroke="black" strokeWidth="2" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* cart and search */}
            <div className="flex items-center gap-2 md:gap-4">
                {/* search */}
                <div className={`h-10 ${(screenWidth > 768)? 'block': 'hidden'} w-120 bg-lightRed rounded`}>
                    <input
                        type="search"
                        title="search"
                        className="w-full h-full bg-inherit pl-2 rounded"
                    />
                </div>

                {/* cart and search-button */}
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width={(screenWidth > 768)? "26":"20"} height={(screenWidth > 768)? "26":"20"} viewBox="0 0 26 26" fill="none">
                        <path
                            d="M9.61593 19.2319C6.9284 19.2319 4.65411 18.3008 2.79306 16.4388C0.976806 14.5768 0.000987032 12.3025 7.82738e-07 
                            9.61593C-0.000985467 6.92939 0.930034 4.6551 2.79306 2.79306C4.65608 0.931019 6.93038 0 9.61593 0C12.3015 0 14.5763 0.931019 
                            16.4403 2.79306C18.3043 4.6551 19.2348 6.92939 19.2319 9.61593C19.2319 10.7008 19.0593 11.724 18.7141 12.6856C18.3689 13.6472 17.9004 14.4979 
                            17.3087 15.2376L25.5932 23.522C25.8644 23.7933 26 24.1385 26 24.5576C26 24.9768 25.8644 25.322 25.5932 25.5932C25.322 25.8644 24.9768 26 24.5576 26C24.1385 
                            26 23.7933 25.8644 23.522 25.5932L15.2376 17.3087C14.4979 17.9004 13.6472 18.3689 12.6856 18.7141C11.724 19.0593 10.7008 19.2319 9.61593 19.2319ZM9.61593 16.2731C11.4651 
                            16.2731 13.0372 15.6261 14.3322 14.3322C15.6271 13.0382 16.2741 11.4661 16.2731 9.61593C16.2721 7.76573 15.6251 6.19414 14.3322 4.90117C13.0392 3.60819 11.4671 2.96072 9.61593 2.95875C7.76474 
                            2.95678 6.19315 3.60425 4.90117 4.90117C3.60918 6.19808 2.96171 7.76967 2.95875 9.61593C2.95579 11.4622 3.60326 13.0343 4.90117 14.3322C6.19907 15.6301 7.77066 16.2771 9.61593 16.2731Z" fill="black"
                        />
                    </svg>

                    <div className="flex items-center justify-center w-8 h-8 md:w-11 md:h-11 border-2 border-solid border-customYellow rounded-3xl bg-customRed">
                        <svg xmlns="http://www.w3.org/2000/svg" width={(screenWidth > 768)? "20":"16"} height={(screenWidth > 768)? "20":"16"} viewBox="0 0 20 20" fill="none">
                            <path
                                d="M19.4494 0.0314848C19.3525 0.00285292 19.2508 -0.00637972 19.1503 0.00431508C19.0497 0.0150099 18.9523 0.0454223 
                                18.8635 0.0938125C18.7747 0.142203 18.6964 0.207621 18.6329 0.286326C18.5694 0.365031 18.5221 0.455477 18.4936 0.552492L17.9296 
                                2.46217H2.9003C1.01331 2.46217 -0.427574 4.22313 0.115961 6.06204L1.81323 11.8054C2.17422 13.03 3.3218 13.8464 4.59757 13.8464H13.9874C15.2632 
                                13.8464 16.4097 13.03 16.7717 11.8054L19.9684 0.988374C20.0263 0.792801 20.0041 0.582237 19.9068 0.402986C19.8095 0.223735 19.645 0.0894492 19.4494 
                                0.0314848ZM15.898 17.6924C15.898 17.0804 15.6549 16.4934 15.2221 16.0607C14.7894 15.6279 14.2025 15.3848 13.5905 15.3848C12.9785 15.3848 12.3916 15.6279 11.9589 
                                16.0607C11.5262 16.4934 11.2831 17.0804 11.2831 17.6924C11.2831 18.3044 11.5262 18.8914 11.9589 19.3241C12.3916 19.7569 12.9785 20 13.5905 20C14.2025 20 14.7894 19.7569 
                                15.2221 19.3241C15.6549 18.8914 15.898 18.3044 15.898 17.6924ZM7.69367 17.6924C7.69367 17.3894 7.63399 17.0893 7.51803 16.8093C7.40207 16.5293 7.2321 16.2749 7.01783 16.0607C6.80356 
                                15.8464 6.54919 15.6764 6.26924 15.5604C5.98928 15.4445 5.68923 15.3848 5.38621 15.3848C5.08319 15.3848 4.78313 15.4445 4.50318 15.5604C4.22323 15.6764 3.96885 15.8464 3.75459 16.0607C3.54032 
                                16.2749 3.37035 16.5293 3.25439 16.8093C3.13843 17.0893 3.07874 17.3894 3.07874 17.6924C3.07874 18.3044 3.32185 18.8914 3.75459 19.3241C4.18732 19.7569 4.77423 20 5.38621 20C5.99819 20 6.5851 19.7569 7.01783 
                                19.3241C7.45056 18.8914 7.69367 18.3044 7.69367 17.6924Z" fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;