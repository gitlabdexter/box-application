import { FaStar } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

export function Products(props) {
  return (
    <div className='productList'>
      <div key={props.id} className='productCard'>
        <img src={props.image} alt='app-img' className='productImage' />
        <div className='productCard__content'>
          <h3 className='productName'>{props.name}</h3>
          <div className='displayStack__1'>
          <select className='productPrice'>
              {props.description.map((desOption, index) => (
                <option key={index} value={desOption}>
                  {desOption}
                </option>
              ))}
            </select>
            <div className='productRating'>
              {[...Array(props.rating)].map((_, index) => (
                <FaStar id={index + 1} key={index} />
              ))}
            </div>
          </div>
          <div className='displayStack__2'>
          <a className='appLink' href={props.appLink}>
            <button className='productTime'>DOWNLOAD</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
