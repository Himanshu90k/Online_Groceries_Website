const LocationPage = () => {
    return (
        <div className="flex flex-col items-center bg-white w-300 mx-auto justify-start h-max">
            {/* heading */}
            <div className="w-300 h-20 bg-customRed flex items-center justify-center">
                <h1 className="text-white font-inter text-4xl font-extrabold">YOUR LOCATION</h1>
            </div>

            {/* search bar */}
            <div className="w-280 h-19 rounded-4-xl border-3 border-solid border-extraLightBlack shadow-searchBoxShadow mb-9 mt-24 flex items-center justify-start">
                <div className="flex gap-5 items-center m-7">
                    <button type="button" title="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                            <path
                                d="M12.5747 25.1494C9.06022 25.1494 6.08615 23.9319 3.65246 21.4969C1.21878 19.0619 0.00129073 16.0879 1.02358e-06 12.5747C-0.00128869 9.06151 1.2162 
                                6.08743 3.65246 3.65246C6.08873 1.21749 9.0628 0 12.5747 0C16.0866 0 19.0613 1.21749 21.4988 3.65246C23.9364 6.08743 25.1532 9.06151 25.1494 12.5747C25.1494 13.9934 
                                24.9237 15.3314 24.4723 16.5889C24.0209 17.8464 23.4083 18.9587 22.6344 19.926L33.468 30.7596C33.8227 31.1143 34 31.5657 34 32.1138C34 32.6619 33.8227 33.1133 33.468 33.468C33.1133 
                                33.8227 32.6619 34 32.1138 34C31.5657 34 31.1143 33.8227 30.7596 33.468L19.926 22.6344C18.9587 23.4082 17.8464 24.0209 16.5889 24.4723C15.3314 24.9237 13.9934 25.1494 12.5747 25.1494ZM12.5747 21.2802C14.9929 
                                21.2802 17.0487 20.4342 18.7421 18.7421C20.4355 17.05 21.2815 14.9942 21.2802 12.5747C21.2789 10.1552 20.4329 8.10003 18.7421 6.40922C17.0513 4.71841 14.9955 3.87171 12.5747 3.86913C10.1539 3.86655 8.09874 4.71325 6.40922 
                                6.40922C4.7197 8.10519 3.873 10.1603 3.86913 12.5747C3.86526 14.989 4.71196 17.0448 6.40922 18.7421C8.10648 20.4393 10.1616 21.2854 12.5747 21.2802Z" fill="black" fillOpacity="0.6"
                            />
                        </svg>
                    </button>
                    <p className="text-extraLightBlack font-inter text-2xl font-semibold">Search your area/pincode/apartment</p>
                </div>
            </div>

            {/* location buttons */}
            <div className="w-280 h-16 mb-12 flex justify-between items-center">
                <div className="h-full flex items-center gap-7">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                        <path
                            d="M61.5024 29.6585H57.1629C56.5958 23.7567 53.9927 18.2361 49.8003 14.0436C45.6078 9.85119 40.0872 7.24814 34.1854 6.68098V2.34146C34.1854 1.72047 
                            33.9387 1.12491 33.4996 0.685799C33.0605 0.246689 32.4649 0 31.8439 0C31.2229 0 30.6273 0.246689 30.1882 0.685799C29.7491 1.12491 29.5024 1.72047 29.5024 2.34146V6.68098C23.6264 
                            7.27649 18.1392 9.89273 13.9772 14.0832C9.8152 18.2737 7.23643 23.7786 6.68098 29.6585H2.34146C2.03398 29.6585 1.7295 29.7191 1.44542 29.8368C1.16134 29.9544 0.903224 30.1269 0.685799 30.3443C0.468374 
                            30.5618 0.295903 30.8199 0.178233 31.104C0.0605635 31.388 0 31.6925 0 32C0 32.3075 0.0605635 32.612 0.178233 32.896C0.295903 33.1801 0.468374 33.4382 0.685799 33.6557C0.903224 33.8731 1.16134 34.0456 1.44542 
                            34.1632C1.7295 34.2809 2.03398 34.3415 2.34146 34.3415H6.68098C7.24814 40.2433 9.85118 45.7639 14.0436 49.9564C18.2361 54.1488 23.7567 56.7519 29.6585 57.319V61.6585C29.6585 62.2795 29.9052 62.8751 30.3443 63.3142C30.7834 
                            63.7533 31.379 64 32 64C32.621 64 33.2166 63.7533 33.6557 63.3142C34.0948 62.8751 34.3415 62.2795 34.3415 61.6585V57.319C40.2411 56.7461 45.7585 54.1412 49.9498 49.9498C54.1412 45.7585 56.7461 40.2411 57.319 34.3415H61.6585C61.966 34.3415 
                            62.2705 34.2809 62.5546 34.1632C62.8386 34.0456 63.0968 33.8731 63.3142 33.6557C63.5316 33.4382 63.7041 33.1801 63.8218 32.896C63.9394 32.612 64 32.3075 64 32C64 31.6925 63.9394 31.388 63.8218 31.104C63.7041 30.8199 63.5316 30.5618 63.3142 30.3443C63.0968 30.1269 62.8386 
                            29.9544 62.5546 29.8368C62.2705 29.7191 61.966 29.6585 61.6585 29.6585H61.5024ZM31.8439 52.7298C27.7439 52.7298 23.7361 51.514 20.3271 49.2362C16.9181 46.9583 14.2611 43.7208 12.6921 39.9329C11.1231 36.1451 10.7126 31.977 11.5125 27.9558C12.3123 23.9346 14.2866 20.241 17.1858 
                            17.3418C20.0849 14.4427 23.7785 12.4684 27.7997 11.6686C31.8209 10.8687 35.989 11.2792 39.7768 12.8482C43.5647 14.4172 46.8022 17.0742 49.0801 20.4832C51.3579 23.8922 52.5737 27.9 52.5737 32C52.5737 37.5007 50.3906 42.7767 46.504 46.6692C42.6173 50.5617 37.3446 52.7527 31.8439 
                            52.761V52.7298Z" fill="#D31F28"
                        />
                        <path
                            d="M45.9864 32.0311C45.9864 34.8357 45.1544 37.5773 43.5955 39.9088C42.0367 42.2403 39.8213 44.057 37.2296 45.1288C34.6378 46.2007 31.7864 46.4795 29.0361 45.9301C26.2858 45.3807 
                            23.7604 44.0277 21.7794 42.0423C19.7985 40.057 18.451 37.5285 17.9077 34.7771C17.3643 32.0256 17.6494 29.1748 18.727 26.5854C19.8046 23.9961 21.6261 21.7846 23.961 20.231C26.296 18.6773 29.0394 17.8513 
                            31.844 17.8575C33.7038 17.8575 35.5454 18.2243 37.2633 18.937C38.9812 19.6496 40.5416 20.6942 41.8553 22.0107C43.1689 23.3273 44.21 24.89 44.9189 26.6094C45.6278 28.3289 45.9905 30.1713 45.9864 32.0311Z" fill="#D31F28"
                        />
                    </svg>
                    <h3 className="text-customRed font-inter font-semibold text-3.5xl">Current location</h3>
                </div>

                <button type="button" title="enable" className="text-black font-inter text-3.5xl font-bold w-56 h-16 rounded-4-xl border-4 border-solid border-customRed">
                    Enable
                </button>
            </div>

            {/* break */}
            <svg xmlns="http://www.w3.org/2000/svg" width="1242" height="3" viewBox="0 0 1242 3" fill="none">
                <path d="M1 1.5L1241 1.50011" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* saved locations */}
            <div className="w-280 h-auto flex flex-col items-start my-9">
                <h2 className="text-customBlack font-inter text-2xl font-semibold mb-7">Saved Locations</h2>

                {/* home location */}
                <div className="flex flex-col items-start gap-2 mb-8">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path
                                d="M27.1269 15.5555C27.0115 15.5562 26.8971 15.5331 26.7903 15.4876C26.6835 15.442 26.5863 15.3749 26.5044 15.29L13.9757 
                                2.19799L1.44703 15.29C1.27931 15.44 1.06356 15.5184 0.842906 15.5095C0.62225 15.5006 0.412937 15.4051 0.256793 15.242C0.10065 15.079 0.00917683 14.8604 
                                0.00065386 14.63C-0.00786911 14.3996 0.0671856 14.1743 0.210819 13.9991L13.362 0.266229C13.5263 0.0957109 13.7485 0 13.9801 0C14.2117 0 14.4339 0.0957109 14.5982 0.266229L27.7494 13.9991C27.87 
                                14.1277 27.9517 14.2905 27.9842 14.4672C28.0168 14.644 27.9987 14.8268 27.9323 14.9929C27.8659 15.1589 27.754 15.3009 27.6108 15.4009C27.4675 15.501 27.2992 15.5548 27.1269 15.5555Z" fill="#1E1E1E"
                            />
                            <path
                                d="M14 4.66663L3.11108 15.3852V26.2195C3.11108 26.6917 3.30229 27.1446 3.64263 27.4785C3.98297 27.8124 4.44458 28 4.9259 28H11.2778V19.0975H16.7222V28H23.074C23.5554 
                                28 24.017 27.8124 24.3573 27.4785C24.6977 27.1446 24.8889 26.6917 24.8889 26.2195V15.3229L14 4.66663Z" fill="#1E1E1E"
                            />
                        </svg>
                        <p className="text-black font-inter text-xl font-extrabold">Home</p>
                    </div>

                    <p className="pl-10 text-black font-inter text-base font-medium">near Shitla Devi Mandir, Chembur Colony, Chembur,<br />Mumbai, Maharashtra India.</p>
                </div>

                {/* office location */}
                <div className="flex flex-col items-start gap-2 mb-8">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.33337 14.315C5.31843 15.4763 8.46856 16.1575 11.6667 16.3334V18.6666H16.3334V16.3334C19.5238 16.1335 22.668 15.4693 25.6667 14.3616V23.3334H2.33337V14.315ZM17.5 3.5L18.6667 4.66665V7H25.6667V13.0784C22.0895 14.414 18.3082 15.1205 14.49 15.1666H13.65C9.78066 15.1248 5.94929 14.398 2.33337 13.02V7H9.33337V4.66665L10.5 3.5H17.5ZM16.3334 5.83335H11.6667V7H16.3334V5.83335Z" fill="#1E1E1E" />
                        </svg>
                        <p className="text-black font-inter text-xl font-extrabold">Office</p>
                    </div>

                    <p className="pl-10 text-black font-inter text-base font-medium">near Shitla Devi Mandir, Chembur Colony, Chembur,<br />Mumbai, Maharashtra India.</p>
                </div>

                {/* Friends & Family location */}
                <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M19.6875 14C17.5129 14 15.75 12.2371 15.75 10.0625C15.75 7.88788 17.5129 6.125 19.6875 6.125C21.8621 6.125 23.625 7.88788 23.625 10.0625C23.625 12.2371 21.8621 14 19.6875 14Z" fill="#1E1E1E" />
                            <path d="M15.2031 16.1875C16.7431 15.4055 18.4428 15.0938 19.6875 15.0938C22.1255 15.0938 27.125 16.5889 27.125 19.5781V21.875H18.9219V20.9962C18.9219 19.9571 18.4844 18.9153 17.7188 18.0469C17.1079 17.3534 16.2526 16.7098 15.2031 16.1875Z" fill="#1E1E1E" />
                            <path d="M9.40625 15.75C12.2538 15.75 17.9375 17.5087 17.9375 21V23.625H0.875V21C0.875 17.5087 6.55867 15.75 9.40625 15.75Z" fill="#1E1E1E" />
                            <path d="M9.40625 14C6.74838 14 4.59375 11.8454 4.59375 9.1875C4.59375 6.52963 6.74838 4.375 9.40625 4.375C12.0641 4.375 14.2188 6.52963 14.2188 9.1875C14.2188 11.8454 12.0641 14 9.40625 14Z" fill="#1E1E1E" />
                        </svg>
                        <p className="text-black font-inter text-xl font-extrabold">Friends & Family</p>
                    </div>

                    <p className="pl-10 text-black font-inter text-base font-medium">near Shitla Devi Mandir, Chembur Colony, Chembur,<br />Mumbai, Maharashtra India.</p>
                </div>
            </div>

            {/* break */}
            <svg xmlns="http://www.w3.org/2000/svg" width="1242" height="3" viewBox="0 0 1242 3" fill="none">
                <path d="M1 1.5L1241 1.50011" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* recent searches */}
            <div className="w-280 h-auto flex flex-col items-start my-9">
                <h2 className="text-customBlack font-inter text-2xl font-semibold mb-7">Recent Searches</h2>

                {/* recent location */}
                <div className="flex flex-col items-start gap-2 mb-8">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path
                                d="M14 1.75C9.16945 1.75 5.25 5.27789 5.25 9.625C5.25 16.625 14 26.25 14 26.25C14 26.25 22.75 16.625 22.75 9.625C22.75 5.27789 18.8305 1.75 14 
                                1.75ZM14 14C13.3078 14 12.6311 13.7947 12.0555 13.4101C11.4799 13.0256 11.0313 12.4789 10.7664 11.8394C10.5015 11.1999 10.4322 10.4961 10.5673 9.81718C10.7023 9.13825 11.0356 8.51461 11.5251 8.02513C12.0146 
                                7.53564 12.6383 7.2023 13.3172 7.06725C13.9961 6.9322 14.6999 7.00151 15.3394 7.26642C15.9789 7.53133 16.5256 7.97993 16.9101 8.5555C17.2947 9.13108 17.5 9.80777 17.5 10.5C17.499 11.4279 17.1299 12.3176 16.4738 
                                12.9738C15.8176 13.6299 14.9279 13.999 14 14Z" fill="#D31F28"
                            />
                        </svg>
                        <p className="text-black font-inter text-xl font-extrabold">Wadala West</p>
                    </div>

                    <p className="pl-10 text-black font-inter text-base font-medium">near Shitla Devi Mandir, Chembur Colony, Chembur,<br />Mumbai, Maharashtra India.</p>
                </div>

                {/* recent location */}
                <div className="flex flex-col items-start gap-2 mb-8">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path
                                d="M14 1.75C9.16945 1.75 5.25 5.27789 5.25 9.625C5.25 16.625 14 26.25 14 26.25C14 26.25 22.75 16.625 22.75 9.625C22.75 5.27789 18.8305 1.75 14 
                                1.75ZM14 14C13.3078 14 12.6311 13.7947 12.0555 13.4101C11.4799 13.0256 11.0313 12.4789 10.7664 11.8394C10.5015 11.1999 10.4322 10.4961 10.5673 9.81718C10.7023 9.13825 11.0356 8.51461 11.5251 8.02513C12.0146 
                                7.53564 12.6383 7.2023 13.3172 7.06725C13.9961 6.9322 14.6999 7.00151 15.3394 7.26642C15.9789 7.53133 16.5256 7.97993 16.9101 8.5555C17.2947 9.13108 17.5 9.80777 17.5 10.5C17.499 11.4279 17.1299 12.3176 16.4738 
                                12.9738C15.8176 13.6299 14.9279 13.999 14 14Z" fill="#D31F28"
                            />
                        </svg>
                        <p className="text-black font-inter text-xl font-extrabold">Wadala West</p>
                    </div>

                    <p className="pl-10 text-black font-inter text-base font-medium">near Shitla Devi Mandir, Chembur Colony, Chembur,<br />Mumbai, Maharashtra India.</p>
                </div>

                {/* recent location */}
                <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path
                                d="M14 1.75C9.16945 1.75 5.25 5.27789 5.25 9.625C5.25 16.625 14 26.25 14 26.25C14 26.25 22.75 16.625 22.75 9.625C22.75 5.27789 18.8305 1.75 14 
                                1.75ZM14 14C13.3078 14 12.6311 13.7947 12.0555 13.4101C11.4799 13.0256 11.0313 12.4789 10.7664 11.8394C10.5015 11.1999 10.4322 10.4961 10.5673 9.81718C10.7023 9.13825 11.0356 8.51461 11.5251 8.02513C12.0146 
                                7.53564 12.6383 7.2023 13.3172 7.06725C13.9961 6.9322 14.6999 7.00151 15.3394 7.26642C15.9789 7.53133 16.5256 7.97993 16.9101 8.5555C17.2947 9.13108 17.5 9.80777 17.5 10.5C17.499 11.4279 17.1299 12.3176 16.4738 
                                12.9738C15.8176 13.6299 14.9279 13.999 14 14Z" fill="#D31F28"
                            />
                        </svg>
                        <p className="text-black font-inter text-xl font-extrabold">Wadala West</p>
                    </div>

                    <p className="pl-10 text-black font-inter text-base font-medium">near Shitla Devi Mandir, Chembur Colony, Chembur,<br />Mumbai, Maharashtra India.</p>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;