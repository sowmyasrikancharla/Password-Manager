import {Component} from 'react'
import './index.css'

class Password extends Component {
  render() {
    const {passwordDetails, deletePassword, masked} = this.props
    const {website, username, id, password, initialClassName} = passwordDetails

    const classNAme = `${initialClassName}`

    const onClickDelete = () => {
      deletePassword(id)
    }

    console.log(id)

    const passwordItem = masked ? (
      <p className="para">{password}</p>
    ) : (
      <img
        className="star-set"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    )
    console.log({masked})
    return (
      <li className="password">
        <div className={classNAme}>{website[0]}</div>
        <div>
          <p className="text"> {website}</p>
          <p className="text">{username}</p>
          <p className="text">{passwordItem}</p>
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
export default Password
