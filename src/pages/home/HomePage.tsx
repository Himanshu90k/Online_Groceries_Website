import Navbar from "./Navbar";
import Products from "./Products";
// import LocationPopup from "./LocationPopup";
// import AddLocationPopup from "./AddLocationPopup";
import Footer from "../../components/footer";

const HomePage = () => {
    return (
        <div className="relative min-w-78 max-w-300 h-screen md:h-fit 2xl:h-screen mx-2 md:mx-4 lg:mx-9 xl:mx-auto bg-white flex flex-col items-center justify-start">
            <Navbar />
            <Products />
            {/* <LocationPopup /> */}
            {/* <AddLocationPopup /> */}
            <Footer />
        </div>
    );
};

export default HomePage;