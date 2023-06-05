// import addToCart from '../../../assets/addToCart.svg';
import wishList from '../../../assets/wishList.svg';
function Buyer () {
  return (
    <div className='flex w-24 h-24 xs:w-14 xs:h-14'>
      <img src={wishList} onClick={()=>alert('Added to wishes')}/>
      {/* <img src={addToCart} onClick={()=>alert('Added to cart')}/> */}
    </div>
  );
}

export default Buyer;
