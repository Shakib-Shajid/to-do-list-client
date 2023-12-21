import { Helmet } from "react-helmet-async";
import About from "./About";
import Banner from "./Banner";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Helmet>
                <title>To Do | Home</title>
            </Helmet>
        </div >
    );
};

export default Home;