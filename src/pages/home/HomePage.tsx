import Navbar from "./Navbar";
import Products from "./Products";
import LocationPopup from "./LocationPopup";
import AddLocationPopup from "./AddLocationPopup";

const HomePage = () => {
    return (
        <div className="relative w-300 h-auto mx-auto bg-white flex flex-col items-center justify-start">
            <Navbar />
            <Products />
            {/* <LocationPopup /> */}
            <AddLocationPopup />
        </div>
    );
};

export default HomePage;