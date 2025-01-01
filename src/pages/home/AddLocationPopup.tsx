import '../../index.css';

const AddLocationPopup = () => {
    return (
        <div className="absolute w-full h-full flex justify-center">
            {/* background */}
            <div className="z-10 relative w-full h-full bg-black opacity-35"></div>

            {/* popup */}
            <div className="z-20 fixed bottom-0 w-278 h-140 items-center justify-start flex border rounded-t-5-xl bg-white">
                <div className="w-fit h-fit pl-16 flex flex-col items-start gap-16">
                    {/* address */}
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex gap-6 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="47" height="67" viewBox="0 0 47 67" fill="none">
                                <path
                                    d="M23.3333 31.6667C21.1232 31.6667 19.0036 30.7887 17.4408 29.2259C15.878 27.6631 15 25.5435 15 23.3333C15 21.1232 15.878 19.0036 17.4408 17.4408C19.0036 
                                    15.878 21.1232 15 23.3333 15C25.5435 15 27.6631 15.878 29.2259 17.4408C30.7887 19.0036 31.6667 21.1232 31.6667 23.3333C31.6667 24.4277 31.4511 25.5113 31.0323 26.5224C30.6135 27.5334 
                                    29.9997 28.4521 29.2259 29.2259C28.4521 29.9997 27.5334 30.6135 26.5224 31.0323C25.5113 31.4511 24.4277 31.6667 23.3333 31.6667ZM23.3333 0C17.1449 0 11.21 2.45833 6.83418 6.83417C2.45833 11.21 0 
                                    17.1449 0 23.3333C0 40.8333 23.3333 66.6667 23.3333 66.6667C23.3333 66.6667 46.6667 40.8333 46.6667 23.3333C46.6667 17.1449 44.2083 11.21 39.8325 6.83417C35.4566 2.45833 29.5217 0 23.3333 0Z" fill="#D31F28"
                                />
                            </svg>

                            <h2 className="font-inter font-bold text-4.5xl">Raj Infrabuilds</h2>
                        </div>

                        <p className="font-inter text-xl font-medium">near Shitla Devi Mandir, Chembur Colony, Chembur,<br />Mumbai, Maharashtra India.</p>
                    </div>

                    {/* set and save address */}
                    <form className='flex flex-col items-start gap-9'>
                        <div className='flex flex-col items-start'> {/* house/flat/block no */}
                            <label htmlFor="houseNo" className="text-extraLightBlack font-inter text-xl font-medium">HOUSE / FLAT / BLOCK NO.</label>
                            <input
                                type="text"
                                name="houseNo"
                                title='houseNo'
                                className="w-full h-8 font-inter text-xl pt-4 font-medium align-text-bottom"
                            />

                            <svg xmlns="http://www.w3.org/2000/svg" width="1004" height="4" viewBox="0 0 1004 4" fill="none">
                                <path d="M2 1.66663H1002" stroke="black" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div> {/* Apartment/Road Area */}
                            <label htmlFor="roadArea" className="text-extraLightBlack font-inter text-xl font-medium">APARTMENT / ROAD AREA</label>
                            <input
                                type="roadArea"
                                name="roadArea"
                                title='roadArea'
                                className="w-full h-8 font-inter text-xl pt-4 font-medium align-text-bottom"
                            />

                            <svg xmlns="http://www.w3.org/2000/svg" width="1004" height="4" viewBox="0 0 1004 4" fill="none">
                                <path d="M2 1.66663H1002" stroke="black" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>

                        <div className='flex flex-col items-start gap-4'> {/* save options */}
                            <p className="text-extraLightBlack font-inter text-xl font-medium">SAVE AS</p>
                            <div className='flex gap-3'>
                                {/* house option */}
                                <button type='submit' title='save-as-home' className='w-15 h-7 border-2 border-solid border-lightBlack rounded-4-xl flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                        <path
                                            d="M17.4387 10.6666C17.3645 10.6671 17.291 10.6522 17.2223 10.6229C17.1537 10.5936 17.0912 10.5505 17.0385 10.4959L8.98439 2.07962L0.930233 10.4959C0.822412 
                                            10.5924 0.683718 10.6427 0.541868 10.637C0.400018 10.6313 0.265459 10.5699 0.165081 10.4651C0.0647034 10.3603 0.00589939 10.2197 0.000420339 10.0716C-0.00505871 9.9235 
                                            0.0431907 9.77867 0.135527 9.66607L8.58985 0.837773C8.69545 0.728154 8.8383 0.666626 8.9872 0.666626C9.1361 0.666626 9.27895 0.728154 9.38456 0.837773L17.8389 9.66607C17.9164 
                                            9.7487 17.969 9.85336 17.9899 9.96698C18.0108 10.0806 17.9992 10.1981 17.9565 10.3049C17.9138 10.4116 17.8419 10.5029 17.7498 10.5672C17.6577 10.6316 17.5495 10.6661 17.4387 10.6666Z" fill="#1E1E1E"
                                        />
                                        <path
                                            d="M9 3.66663L2 10.5571V17.522C2 17.8256 2.12292 18.1167 2.34171 18.3314C2.5605 18.546 2.85725 18.6666 3.16667 18.6666H7.25V12.9436H10.75V18.6666H14.8333C15.1428 18.6666 15.4395 18.546 
                                            15.6583 18.3314C15.8771 18.1167 16 17.8256 16 17.522V10.5171L9 3.66663Z" fill="#1E1E1E"
                                        />
                                    </svg>
                                </button>

                                {/* office option */}
                                <button type='submit' title='save-as-office' className='w-15 h-7 border-2 border-solid border-lightBlack rounded-4-xl flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M1.5 9.86913C3.41896 10.6157 5.44405 11.0536 7.50001 11.1666V12.6666H10.5V11.1666C12.551 11.0382 14.5723 10.6112 16.5 9.89911V15.6666H1.5V9.86913ZM11.25 
                                            2.91663L12 3.66661V5.16663H16.5V9.07414C14.2004 9.93275 11.7695 10.3869 9.31499 10.4166H8.77499C6.28754 10.3897 3.82451 9.92249 1.5 9.03663V5.16663H6V3.66661L6.74999 
                                            2.91663H11.25ZM10.5 4.41664H7.50001V5.16663H10.5V4.41664Z" fill="#1E1E1E"
                                        />
                                    </svg>
                                </button>

                                {/* friends option */}
                                <button type='submit' title='save-as-friends' className='w-15 h-7 border-2 border-solid border-lightBlack rounded-4-xl flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                        <path d="M12.6562 9.66663C11.2583 9.66663 10.125 8.53335 10.125 7.13538C10.125 5.73741 11.2583 4.60413 12.6562 4.60413C14.0542 4.60413 15.1875 5.73741 15.1875 7.13538C15.1875 8.53335 14.0542 9.66663 12.6562 9.66663Z" fill="#1E1E1E" />
                                        <path d="M9.77344 11.0729C10.7634 10.5701 11.8561 10.3698 12.6562 10.3698C14.2235 10.3698 17.4375 11.3309 17.4375 13.2526V14.7291H12.1641V14.1642C12.1641 13.4962 11.8828 12.8265 11.3906 12.2682C10.9979 11.8224 10.4481 11.4086 9.77344 11.0729Z" fill="#1E1E1E" />
                                        <path d="M6.04688 10.7916C7.87746 10.7916 11.5312 11.9223 11.5312 14.1666V15.8541H0.5625V14.1666C0.5625 11.9223 4.21629 10.7916 6.04688 10.7916Z" fill="#1E1E1E" />
                                        <path d="M6.04688 9.66663C4.33824 9.66663 2.95312 8.28151 2.95312 6.57288C2.95312 4.86424 4.33824 3.47913 6.04688 3.47913C7.75551 3.47913 9.14062 4.86424 9.14062 6.57288C9.14062 8.28151 7.75551 9.66663 6.04688 9.66663Z" fill="#1E1E1E" />
                                    </svg>
                                </button>

                                {/* location option */}
                                <button type='submit' title='save-as-location' className='w-15 h-7 border-2 border-solid border-lightBlack rounded-4-xl flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                        <path 
                                            d="M9 9.29163C8.50272 9.29163 8.02581 9.09408 7.67417 8.74245C7.32254 8.39082 7.125 7.91391 7.125 7.41663C7.125 6.91934 7.32254 6.44243 7.67417 6.0908C8.02581 5.73917 8.50272 
                                            5.54163 9 5.54163C9.49728 5.54163 9.97419 5.73917 10.3258 6.0908C10.6775 6.44243 10.875 6.91934 10.875 7.41663C10.875 7.66285 10.8265 7.90667 10.7323 8.13416C10.638 8.36164 10.4999 8.56834 
                                            10.3258 8.74245C10.1517 8.91656 9.94502 9.05467 9.71753 9.1489C9.49005 9.24313 9.24623 9.29163 9 9.29163ZM9 2.16663C7.60761 2.16663 6.27226 2.71975 5.28769 3.70432C4.30312 4.68888 3.75 6.02424 3.75 7.41663C3.75 
                                            11.3541 9 17.1666 9 17.1666C9 17.1666 14.25 11.3541 14.25 7.41663C14.25 6.02424 13.6969 4.68888 12.7123 3.70432C11.7277 2.71975 10.3924 2.16663 9 2.16663Z" fill="#1E1E1E" 
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddLocationPopup;