import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router';

const TrendingProduct = () => {
  return (
    <div className='my-5'>
      <div className='flex justify-between align-center'>
        <h2 className='text-2xl font-bold'>Trending Product</h2>
        <Link className='btn btn-primary btn-link' to='/products'>
          All products
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-1.5 sm:gap-0'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default TrendingProduct;
