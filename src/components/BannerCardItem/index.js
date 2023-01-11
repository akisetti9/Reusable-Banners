// Write your code here.
import './index.css'

const Banner = props => {
  const {bannerCard, key} = props
  const {headerText, description, className} = bannerCard
  return (
    <li className={`${className} list-item`} key={key}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button type="button" className="show-more-btn" id={key}>
          Show More
        </button>
      </div>
    </li>
  )
}

export default Banner
