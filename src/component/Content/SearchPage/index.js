import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShopSidebar from "../ShopPage/ShopSidebar";
import ProductShop from "../ShopPage/ProductShop";
import ShopOption from "../ShopPage/ShopOption";

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const [sortOrder, setSortOrder] = useState("asc")
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: Infinity })
    const [categoryFilter, setCategoryFilter] = useState("All")
    const [brandFilter, setBrandFilter] = useState(null)
    const [products, setProducts] = useState([])
    const searchQuery = searchParams.get('query')

    useEffect(() => {
        if (searchQuery) {
            // Fetch products và lọc theo searchQuery
            fetch("http://localhost:4000/products")
                .then((response) => response.json())
                .then((data) => {
                    const filtered = data.filter(product =>
                        product.name.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                    setProducts(filtered);
                })
                .catch(error => console.error("Error fetching products:", error));
        } else {
            setProducts([]); // Không có sản phẩm nào khi không có từ khóa
        }
    }, [searchQuery])

    const handleSortOrderChange = (order) => setSortOrder(order)
    const handleFilterByPrice = (minPrice, maxPrice) => setPriceFilter({ min: minPrice, max: maxPrice })
    const handleFilterByCategory = (category) => setCategoryFilter(category)
    const handleFilterByBrand = (brand) => setBrandFilter(brand)

    if (!searchQuery) {
        return (
            <div className="container text-center mt-5">
                <h4>Nhập sản phẩm cần tìm kiếm</h4>
            </div>
        );
    }

    if (searchQuery && products.length === 0) {
        return (
            <div className="container text-center mt-5">
                <h4>Không tìm thấy sản phẩm</h4>
            </div>
        );
    }

    return (
        <div className="container">
            <h4>Results for: <strong>{searchQuery}</strong></h4>
            <div className="row">
                <div className="col-lg-3">
                    <ShopSidebar
                        onFilterByCategory={handleFilterByCategory}
                        onFilterByBrand={handleFilterByBrand}
                        onFilterByPrice={handleFilterByPrice}
                    />
                </div>
                <div className="col-lg-9">
                    <ShopOption onSortChange={handleSortOrderChange} />
                    <ProductShop
                        sortOrder={sortOrder}
                        priceFilter={priceFilter}
                        categoryFilter={categoryFilter}
                        brandFilter={brandFilter}
                        products={products} // Chỉ truyền các sản phẩm sau tìm kiếm
                    />
                </div>
            </div>
        </div>
    );

}

export default SearchPage;