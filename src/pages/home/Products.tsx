import eggs from '../../assets/eggs.jpg';
import fruits from '../../assets/fruits.jpg';
import chips from '../../assets/chips.jpg';
import vegetables from '../../assets/vegetables.jpg';
import '../../index.css';

const Products = () => {
    return (
        <div className='my-9 w-full flex flex-col items-center gap-4'>

            {/* groceries */}
            <div className="bg-customRed w-full h-36 md:h-100 flex items-center gap-4 md:gap-8 overflow-x-scroll px-4">
                <div className="bg-white rounded-lg md:rounded-4-xl w-64 h-28 md:h-78 md:w-140 flex-shrink-0">
                    <img src={chips} alt='chips' className='w-full h-full object-cover rounded-lg md:rounded-4-xl border-2 border-solid border-white' />
                </div>
                <div className="bg-white rounded-lg md:rounded-4-xl w-64 h-28 md:h-78 md:w-140 flex-shrink-0">
                    <img src={fruits} alt='fruits' className='w-full h-full object-cover rounded-lg md:rounded-4-xl border-2 border-solid border-white' />
                </div>
                <div className="bg-white rounded-lg md:rounded-4-xl w-64 h-28 md:h-78 md:w-140 flex-shrink-0">
                    <img src={vegetables} alt='vegetables' className='w-full h-full object-cover rounded-lg md:rounded-4-xl border-2 border-solid border-white' />
                </div>
                <div className="bg-white rounded-lg md:rounded-4-xl w-64 h-28 md:h-78 md:w-140 flex-shrink-0">
                    <img src={eggs} alt='eggs' className='w-full h-full object-cover rounded-lg md:rounded-4-xl border-2 border-solid border-white' />
                </div>
            </div>

            {/* circle bar */}
            <div className='flex gap-1 md:gap-2 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3 md:w-5 h-3 md:h-5' viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" transform="matrix(-1 0 0 1 20 0)" fill="#F4C6C6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3 md:w-5 h-3 md:h-5' viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" transform="matrix(-1 0 0 1 20 0)" fill="#F4C6C6" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-3 md:w-5 h-3 md:h-5' viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="10" transform="matrix(-1 0 0 1 20 0)" fill="#F4C6C6" />
                </svg>
                <div className='w-6 md:w-10 h-3 md:h-5 rounded-4-xl md:rounded-2xl bg-customRed'>

                </div>
            </div>

            {/* Discount Message */}
            <div className='w-full px-3 my-9 h-fit flex justify-center items-center'>
                <div className='w-full px-2 py-2 md:px-4 md:py-4 max-w-270 md:h-96 h-32 rounded-2xl md:rounded-5-xl border-6 md:border-16 border-solid border-lightRed flex justify-center items-center'>
                    <div className='w-full h-full rounded-2xl md:rounded-5-xl bg-customPink flex gap-2 md:gap-7 flex-col items-center justify-center'>
                        <h2 className='text-white font-inter text-base md:text-4xl lg:text-5xl xl:text-6xl font-black drop-shadow-textShadow'>FLAT 50% OFF ON NEW YEAR</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-48 md:w-96 lg:w-116 h-3 md:h-4 stroke-3 md:stroke-8' viewBox="0 0 517 16" fill="none">
                            <g filter="url(#filter0_d_4_64)">
                                <path d="M8.5 4H508.5" stroke="#FEFEFE" strokeLinecap="round" />
                            </g>
                            <defs>
                                <filter id="filter0_d_4_64" x="0.5" y="0" className='md:w-116 md:h-4' filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_64" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_64" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
