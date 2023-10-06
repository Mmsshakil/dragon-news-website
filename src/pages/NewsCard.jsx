import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    console.log(news);

    const { title, thumbnail_url, details, _id } = news;

    return (
        <div className="card bg-base-100 shadow-xl border-b-2 mb-4 rounded-none">
            <figure><img src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 
                    ? 
                    <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600 font-semibold">Read More...</Link></p>
                    :
                    <p>{details}</p>
                }
                
            </div>
        </div>
    );
};

export default NewsCard;