import ProductCard from '../../components/ProductCard/ProductCard';

const Products = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Products</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    );
};

export default Products;