import { useParams } from "react-router";

export default function ProductDetail() {
    const params = useParams();

    return (
        <div>
            <h1>Product Detail {params.productId}</h1>
            <p>Welcome to the Product Detail Page</p>
        </div>
    )
}
