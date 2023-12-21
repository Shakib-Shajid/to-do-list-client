import { Helmet } from "react-helmet-async";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Contact></Contact>
            <Helmet>
                <title>To Do | Home</title>
            </Helmet>
        </div >
    );
};

export default Home;