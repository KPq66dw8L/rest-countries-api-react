import { useParams, useLocation } from 'react-router-dom';

const Details = () => {
    const { country } = useLocation();
    console.log(country);
    return <div>
        <h1>hello</h1>
    </div>;
}

export default Details;