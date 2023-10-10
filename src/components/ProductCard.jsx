export default function ProductCard({ product }) {
    return (
        <div className="card w-96 bg-base-100 shadow hover:shadow-xl">
            <figure><img src={product.thumbnail} alt={product.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="text-sm">{product.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}