// Write your code here
import {Component} from 'react'

import './index.css'

const LEFT_ARROW = 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const RIGHT_ARROW =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  onRightButton = () => {
    const {reviewsList} = this.props
    const {activeReview} = this.state

    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  onLeftButton = () => {
    const {activeReview} = this.state

    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  render() {
    const {activeReview} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      activeReview
    ]

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <div className="carousel-container">
          <button
            onClick={this.onLeftButton}
            data-testid="leftArrow"
            className="button"
            type="button"
          >
            <img src={LEFT_ARROW} alt="left arrow" />
          </button>
          <p className="user-name">{username}</p>
          <button
            onClick={this.onRightButton}
            data-testid="rightArrow"
            className="button"
            type="button"
          >
            <img src={RIGHT_ARROW} alt="right arrow" />
          </button>
        </div>
        <div className="company-details-container">
          <p className="details">{companyName}</p>
          <p className="details">{description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
