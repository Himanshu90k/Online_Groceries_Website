const LocationPopup = () => {
    return (
        <div className="absolute w-full h-full flex justify-center">
            {/* background */}
            <div className="z-10 relative w-full h-full bg-black opacity-35"></div>

            {/* popup */}
            <div className="z-20 fixed bottom-0 w-278 h-140 items-center justify-center flex border rounded-t-5-xl bg-white">
                <div className="w-190 flex flex-col items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="121" viewBox="0 0 120 121" fill="none">
                        <path
                            d="M111.943 120.5L84.8057 93.4577C81.7903 96.6502 78.5866 99.8897 75.1944 103.176C71.8021 106.462 68.0801 109.796 64.0283 113.176C48.8575 
                            100.312 37.5274 88.3648 30.0382 77.3338C22.5489 66.3028 18.8024 56.0906 18.7986 46.6972C18.7986 43.6925 19.0342 40.8286 19.5053 38.1056C19.9764 35.3826 20.636 32.8005 
                            21.4841 30.3592L0 8.9507L8.05654 0.922535L120 112.472L111.943 120.5ZM99.0813 75.5704L74.0636 50.6408C74.5347 49.8897 74.8645 49.0916 75.053 48.2465C75.2415 47.4014 75.3357 46.5094 
                            75.3357 45.5704C75.3357 42.4718 74.2294 39.8202 72.017 37.6155C69.8045 35.4108 67.1416 34.3066 64.0283 34.3028C63.086 34.3028 62.1908 34.3967 61.3428 34.5845C60.4947 34.7723 59.6938 35.1009 
                            58.9399 35.5704L34.4876 11.2042C38.5395 7.73005 43.1095 5.0784 48.1979 3.2493C53.2862 1.42019 58.563 0.503756 64.0283 0.5C75.9953 0.5 86.5263 4.6784 95.6212 13.0352C104.716 21.392 109.262 32.6127 109.258 
                            46.6972C109.258 51.2042 108.41 55.8296 106.714 60.5732C105.018 65.3169 102.474 70.316 99.0813 75.5704Z" fill="#D31F28"
                        />
                    </svg>

                    {/* location block message */}
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-black font-inter font-extrabold text-6xl">Location Permission is off</h2>
                        <p className="text-center font-inter text-xl font-semibold">We need your location to find the nearest store & provide you a<br />seamless delivery experience.</p>
                    </div>

                    {/* buttons */}
                    <div className="flex flex-col gap-4 w-full">
                        <button type="button" title="enable location" className="h-20 bg-customRed rounded-2xl w-full text-white font-inter text-3.5xl font-extrabold">
                            Enable Location
                        </button>

                        <button type="button" title="search your location manually" className="h-20 border-4 border-solid border-customRed rounded-2xl w-full text-black font-inter text-3.5xl font-extrabold">
                            Search Your Location Manually
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationPopup;