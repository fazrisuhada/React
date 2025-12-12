import { useParams } from "react-router";

export default function Image() {
    const params = useParams();

    return (
        <div>
            <h1>Image </h1>
            <p>Image path : {params['*']}</p>
        </div>
    )
}
