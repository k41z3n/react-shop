
import { useState } from "react"

export default function Filters() {

    const [minPrice, setMinPrice] = useState(0)
    const [category, setCategory] = useState("all")

    const handleRangeInput = (event) => { 
        
        setMinPrice(event.target.value)
    }
    const handleCategotyInput = (event) => { 
        setCategory(event.target.value)
    }

    const categoies = [
        "home-decoration",
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
    ]

    return (
        <div className="flex justify-center gap-10">
            <div>
                <label htmlFor="range"></label>
                <input type="range" name="range" id="range" value={minPrice} onChange={handleRangeInput} />
            </div>
            <div>
                <label htmlFor="category"></label>
                <select name="category" id="category" value={category} onChange={handleCategotyInput}>
                    <option value="all">All</option>
                    {
                        categoies.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}