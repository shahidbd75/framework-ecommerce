import {Link} from 'react-router';


const ProductCard = () => {
  return (
    <div className='card bg-base-100 shadow-sm sm:m-2'>
      <figure>
        <img
          src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>Lotto Shoes</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className='card-actions justify-between items-end'>
          <div className='text-primary'>$500/kg</div>
          <Link className='btn btn-primary' to='/product/1'>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
