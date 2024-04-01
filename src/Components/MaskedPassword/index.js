import {Component} from 'react'
import './index.css'

class MaskedPassword extends Component {
  render() {
    const {passwordDetails, deletePassword} = this.props
    const {website, username, id, password, initialClassName} = passwordDetails

    const classNAme = `${initialClassName}`

    const onClickDelete = () => {
      deletePassword(id)
    }

    return (
      <li className="password">
        <div className={classNAme}>{website[0]}</div>
        <div>
          <p className="text"> {website}</p>
          <p className="text">{username}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-set"
          />
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
            className="del"
            onClick={onClickDelete}
            data-testid="delete"
          />
        </div>
      </li>
    )
  }
}
export default MaskedPassword
