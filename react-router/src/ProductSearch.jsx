import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router"

export default function ProductSearch() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    
    const [search, setSearch] = useState(searchParams.get("search") || "")

    function handleSubmit() {
        if(search) {
            navigate({
                pathname: "/data/products/search",
                search: `?search=${search}`
            })
        }
    }

    return(
        <>
            <h1>Search Product</h1>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)} />
            <button onClick={handleSubmit}>Search</button>

            <p>kamu mencari : {searchParams.get("search")}</p>
        </>
    )
}