import { useEffect, useState } from "react"
import StoreListCarousel from "../components/StoreListCarousel"

const Home = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/api/shop/store')
            const jasonData = await response.json()

            if (response.ok) {
                setProducts(jasonData)
            }
        }
        fetchProducts()
    }, [])

    return (
        <div className="main-store">
            <StoreListCarousel />
            <div className="store-products">
                {products && products.map((product) => (
                    <div className="product-card" key={product._id}>
                        <div className="product-card-inner">
                            <div className="product-card-upper">
                                <div className="product-image-box">
                                    <img src={product.image} />
                                </div>
                            </div>
                            <div className="product-card-lower">
                                <div className="product-detail-box">
                                    <p>{product.title}</p>
                                    <p>{product.price}</p>
                                    <p>{product.weight}</p>
                                </div>
                                <div className="add-to-cart-button-box">
                                    <button className="add-to-cart-button">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;