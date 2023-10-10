import {products as initialProducts} from './mocks/products'
import Products from './components/Products'
import Filters from './components/Filters'

import { useState } from 'react'

function App() {
  const [products] = useState(initialProducts)

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  const filteredProducts = products.filter((product) => {
    return product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
  })

  return (
    <main className='flex flex-col justify-center text-xl'>
      <header className='container m-auto'>
        <h2 className='text-center font-bold '>SHOP</h2>
        <Filters />
      </header>
      <section>
        <Products products={filteredProducts} />
      </section>
    </main>
  )
}

export default App
