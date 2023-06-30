import Cookies from 'js-cookie'

import './index.css'

const PreviewPage = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }
  return (
    <div className="container">
      <nav>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button type="button" className="logout-btn" onClick={onClickLogout}>
          Logout
        </button>
      </nav>
      <div className="card-container">
        <h1 className="title">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
          alt="digital card"
          className="img-card"
        />
      </div>
    </div>
  )
}

export default PreviewPage
