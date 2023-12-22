import { Helmet } from "react-helmet-async";
import Guideline from "./Guideline";
import Banner from "./Banner";
import Contact from "./Contact";

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Guideline></Guideline>
            <Contact></Contact>
            <Helmet>
                <title>To Do | Home</title>
            </Helmet>
        </div >
    );
};

export default Home;