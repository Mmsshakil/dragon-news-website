import { useLoaderData, useParams } from "react-router-dom";
import BreakingNews from "../BreakingNews";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";


const News = () => {

    const { id, title, image_url, details } = useParams();

    // const news = useLoaderData();
    // console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div className="col-span-3" >
                    <h2 className="text-xl font-semibold">Dragon News</h2>
                    <p>{id}</p>
                    {/* <img src={image_url} alt="" />
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p>{details}</p> */}
                </div>

                <div className=" col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;