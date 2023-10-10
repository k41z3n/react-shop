import ProductCard from "./ProductCard"
export default function Products({ products }) {
    return (
        
            <div className="p-4 flex flex-wrap gap-4 justify-center">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        
    )
}