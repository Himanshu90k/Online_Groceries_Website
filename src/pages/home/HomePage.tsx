import Navbar from "./Navbar";
import Products from "./Products";

const HomePage = () => {
    return (
        <div className="w-300 h-auto mx-auto bg-white flex flex-col items-center justify-start">
            <Navbar />
            <Products />
        </div>
    );
};

export default HomePage;