import map from '../../assets/map.png';

const MapPage = () => {
    return (
        <div className="min-w-78 max-w-300 h-screen md:h-fit 2xl:h-fit mx-2 md:mx-4 lg:mx-9 xl:mx-auto bg-white flex flex-col items-center justify-start">

            {/* heading */}
            <div className="w-full h-10 lg:h-20 bg-customRed shadow-locationBarShadow flex justify-center items-center">
                <h1 className="text-white font-inter text-sm lg:text-3xl font-extrabold">Location Information</h1>
            </div>

            {/* map */}
            <div className="relative w-full h-screen xl:h-190">
                <img className='w-full h-full object-cover' src={map} alt='map' />

                <div className='absolute z-10 inset-0 top-1/3 flex flex-col items-center gap-2'>

                    {/* dialog box */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-70 lg:w-98 h-16 lg:h-21' viewBox="0 0 392 86" fill="none">
                        <g filter="url(#filter0_d_7_11)">
                            <path d="M4 16C4 7.16344 11.1634 0 20 0H372C380.837 0 388 7.16344 388 16V44C388 52.8366 380.837 60 372 60H20C11.1635 60 4 52.8366 4 44V16Z" fill="#D31F28" />
                            <path d="M214 60L196 78L178 60H214Z" fill="#D31F28" />
                        </g>
                        <defs>
                            <filter id="filter0_d_7_11" x="0" y="0" className='w-70 lg:w-98 h-16 lg:h-21' filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_11" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_11" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    <p className='z-20 absolute text-white font-inter text-xs lg:text-base font-bold top-1'>Your order will be delivered here<br /> Move pin to your exact location</p>

                    {/* location marker */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-27px lg:w-47px h-41px lg:h-67px' width="47" height="67" viewBox="0 0 47 67" fill="none">
                        <path
                            d="M16.7337 29.933C18.484 31.6833 20.858 32.6667 23.3333 32.6667C24.559 32.6667 25.7727 32.4253 26.905 31.9562C28.0374 
                            31.4872 29.0663 30.7997 29.933 29.933C30.7997 29.0663 31.4872 28.0374 31.9562 26.905C32.4253 25.7727 32.6667 24.559 32.6667 23.3333C32.6667 
                            20.858 31.6833 18.484 29.933 16.7337C28.1827 14.9833 25.8087 14 23.3333 14C20.858 14 18.484 14.9833 16.7337 16.7337C14.9833 18.484 14 20.858 14 23.3333C14 
                            25.8087 14.9833 28.1827 16.7337 29.933ZM23.3333 65.1531C23.257 65.0651 23.1752 64.9706 23.0883 64.8698C22.4559 64.1357 21.5508 63.0658 20.464 61.7266C18.2893 59.0472 15.3915 
                            55.2953 12.4956 51.0032C9.59785 46.7083 6.7144 41.8905 4.55844 37.0781C2.39661 32.2526 1 27.506 1 23.3333C1 17.4102 3.35297 11.7296 7.54128 7.54128C11.7296 3.35297 17.4102 1 23.3333 
                            1C29.2565 1 34.9371 3.35297 39.1254 7.54128C43.3137 11.7296 45.6667 17.4102 45.6667 23.3333C45.6667 27.506 44.2701 32.2526 42.1082 37.0781C39.9523 41.8905 37.0688 46.7083 34.171 51.0032C31.2752 55.2953 
                            28.3773 59.0472 26.2027 61.7266C25.1158 63.0658 24.2107 64.1357 23.5783 64.8698C23.4914 64.9706 23.4097 65.0651 23.3333 65.1531Z" fill="#D31F28" stroke="black" strokeWidth="2"
                        />
                    </svg>
                </div>

                {/* address and location button */}
                <div className='absolute w-full z-10 bottom-0 h-fit lg:-bottom-32 flex flex-col items-center gap-6'>

                    {/* location button */}
                    <div className='w-29 lg:w-52 h-5 lg:h-9 gap-1 lg:gap-3 flex items-center justify-center rounded-2xl bg-white shadow-locationBoxShadow'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-15px h-14px lg:w-29px lg:h-28px' width="29" height="28" viewBox="0 0 29 28" fill="none">
                            <path
                                d="M27.4073 12.9756H25.5088C25.2606 10.3936 24.1218 7.97829 22.2876 6.14409C20.4534 4.30989 18.0382 3.17106 15.4561 2.92293V1.02439C15.4561 0.752705 
                                15.3482 0.492147 15.1561 0.300037C14.964 0.107927 14.7034 0 14.4317 0C14.16 0 13.8995 0.107927 13.7074 0.300037C13.5152 0.492147 13.4073 0.752705 13.4073 1.02439V2.92293C10.8366 
                                3.18347 8.43589 4.32807 6.61502 6.1614C4.79415 7.99472 3.66594 10.4031 3.42293 12.9756H1.52439C1.38987 12.9756 1.25666 13.0021 1.13237 13.0536C1.00809 13.1051 0.89516 13.1805 0.800037 
                                13.2756C0.704914 13.3708 0.629457 13.4837 0.577977 13.608C0.526497 13.7323 0.5 13.8655 0.5 14C0.5 14.1345 0.526497 14.2677 0.577977 14.392C0.629457 14.5163 0.704914 14.6292 0.800037 14.7244C0.89516 14.8195 
                                1.00809 14.8949 1.13237 14.9464C1.25666 14.9979 1.38987 15.0244 1.52439 15.0244H3.42293C3.67106 17.6064 4.80989 20.0217 6.64409 21.8559C8.47829 23.6901 10.8936 24.8289 13.4756 25.0771V26.9756C13.4756 27.2473 13.5835 27.5079 13.7756 
                                27.7C13.9678 27.8921 14.2283 28 14.5 28C14.7717 28 15.0322 27.8921 15.2244 27.7C15.4165 27.5079 15.5244 27.2473 15.5244 26.9756V25.0771C18.1055 24.8264 20.5193 23.6868 22.3531 21.8531C24.1868 20.0193 25.3264 17.6055 25.5771 15.0244H27.4756C27.6101 15.0244 
                                27.7433 14.9979 27.8676 14.9464C27.9919 14.8949 28.1048 14.8195 28.2 14.7244C28.2951 14.6292 28.3705 14.5163 28.422 14.392C28.4735 14.2677 28.5 14.1345 28.5 14C28.5 13.8655 28.4735 13.7323 28.422 13.608C28.3705 13.4837 28.2951 13.3708 28.2 13.2756C28.1048 13.1805 27.9919 13.1051 27.8676 
                                13.0536C27.7433 13.0021 27.6101 12.9756 27.4756 12.9756H27.4073ZM14.4317 23.0693C12.638 23.0693 10.8845 22.5374 9.39309 21.5408C7.90166 20.5443 6.73923 19.1278 6.0528 17.4707C5.36636 15.8135 5.18676 13.9899 5.5367 12.2307C5.88664 10.4714 6.75041 8.85542 8.01877 7.58706C9.28713 6.3187 10.9031 
                                5.45494 12.6624 5.105C14.4216 4.75506 16.2452 4.93466 17.9024 5.62109C19.5596 6.30752 20.976 7.46995 21.9725 8.96138C22.9691 10.4528 23.501 12.2063 23.501 14C23.501 16.4066 22.5459 18.7148 20.8455 20.4178C19.1451 22.1208 16.8383 23.0793 14.4317 23.0829V23.0693Z" fill="#D31F28"
                            />
                            <path
                                d="M20.6191 14.0135C20.6191 15.2405 20.255 16.4399 19.5731 17.46C18.8911 18.48 17.9218 19.2748 16.7879 19.7437C15.6541 20.2127 14.4065 20.3347 13.2033 
                                20.0943C12.0001 19.8539 10.8952 19.262 10.0285 18.3934C9.16183 17.5248 8.57232 16.4186 8.3346 15.2148C8.09688 14.0111 8.22163 12.7638 8.69306 11.631C9.16449 10.4982 9.96141 9.53065 
                                10.983 8.85092C12.0045 8.17119 13.2047 7.80981 14.4317 7.81252C15.2454 7.81251 16.0511 7.973 16.8027 8.2848C17.5543 8.5966 18.2369 9.05357 18.8117 9.62956C19.3864 10.2056 19.8419 10.8893 20.152 
                                11.6415C20.4621 12.3938 20.6209 13.1998 20.6191 14.0135Z" fill="#D31F28"
                            />
                        </svg>
                        <h3 className='text-black font-inter text-xs lg:text-xl font-semibold'>Locate Me</h3>
                    </div>

                    {/* address */}
                    <div className='w-full h-32 lg:h-60 px-3 min-[475px]:px-6 md:px-10 lg:px-20 rounded-t-4-xl lg:rounded-t-8-xl bg-white flex items-center justify-between'>

                        {/* location */}
                        <div className='flex flex-col items-start gap-3 lg:gap-8'>
                            <p className='text-lightBlack font-inter text-xs lg:text-2xl font-medium'>Select Your Delivery Location</p>
                            <div className='flex flex-col justify-start'>
                                <div className='flex items-center gap-1 lg:gap-6'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-17px lg:w-47px h-6.5 lg:h-67px' viewBox="0 0 47 67" fill="none">
                                        <path 
                                            d="M23.3333 31.6667C21.1232 31.6667 19.0036 30.7887 17.4408 29.2259C15.878 27.6631 15 25.5435 15 23.3333C15 21.1232 15.878 
                                            19.0036 17.4408 17.4408C19.0036 15.878 21.1232 15 23.3333 15C25.5435 15 27.6631 15.878 29.2259 17.4408C30.7887 19.0036 31.6667 21.1232 31.6667 
                                            23.3333C31.6667 24.4277 31.4511 25.5113 31.0323 26.5224C30.6135 27.5334 29.9997 28.4521 29.2259 29.2259C28.4521 29.9997 27.5334 30.6135 26.5224 31.0323C25.5113 
                                            31.4511 24.4277 31.6667 23.3333 31.6667ZM23.3333 0C17.1449 0 11.21 2.45833 6.83418 6.83417C2.45833 11.21 0 17.1449 0 23.3333C0 40.8333 23.3333 66.6667 23.3333 66.6667C23.3333 
                                            66.6667 46.6667 40.8333 46.6667 23.3333C46.6667 17.1449 44.2083 11.21 39.8325 6.83417C35.4566 2.45833 29.5217 0 23.3333 0Z" fill="#D31F28" 
                                        />
                                    </svg>
                                    <h2 className='text-black font-inter text-xl lg:text-4.5xl font-bold'>Raj Infrabuilds</h2>
                                </div>

                                <p className='text-black font-inter text-xxs lg:text-xl font-normal'>near Shitla Devi Mandir, Chembur Colony, Chembur,</p>
                            </div>
                        </div>

                        {/* buttons */}
                        <div className='flex flex-col items-center gap-2 lg:gap-4'>
                            <button className='text-black font-inter text-xs md:text-base lg:text-3.5xl font-semibold lg:font-bold rounded-4-xl w-16 md:w-29 lg:w-60 h-6 md:h-10 lg:h-15 border-2 lg:border-4 border-solid border-customRed'>
                                Select
                            </button>
                            <button className='text-white font-inter text-xs md:text-base lg:text-3.5xl font-semibold lg:font-bold rounded-4-xl w-16 md:w-29 lg:w-60 h-6 md:h-10 lg:h-15 bg-customRed'>
                                Change
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapPage;