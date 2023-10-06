import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setcategories(data))
    },[])

    return (
        <div>
            <h2 className="text-xl font-semibold">All Caterogy</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className="block py-3 pl-10 text-xl font-medium" key={category.id}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;