import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Password from '../Password'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    count: 0,
    website: '',
    username: '',
    password: '',
    masked: false,
    search: '',
  }

  display = () => {
    const {passwordsList, masked, search} = this.state
    const filteredPasswords = this.getFilteredPasswords()
    const count = filteredPasswords.length

    if (count === 0) {
      return (
        <div>
          <img
            className="no-pass-img"
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
          />
          <p className="no-passwords">No Passwords</p>
        </div>
      )
    }
    if (count !== 0) {
      return filteredPasswords.map(eachPassword => (
        <ul>
          <Password
            key={eachPassword.id}
            passwordDetails={eachPassword}
            className="password"
            deletePassword={this.deletePassword}
            masked={masked}
          />
        </ul>
      ))
    }

    return 0
  }

  getFilteredPasswords = () => {
    const {passwordsList, search, count} = this.state
    const filteredPasswords = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(search.toLowerCase()),
    )
    console.log(filteredPasswords.length)
    return filteredPasswords
  }

  checked = () => {
    const {masked} = this.state
    this.setState(prevState => ({masked: !prevState.masked}))
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  changeSearch = event => {
    this.setState({search: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  add = event => {
    const {
      passwordsList,
      count,
      website,
      username,
      password,
      search,
    } = this.state
    event.preventDefault()

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newItem = {
      id: uuidv4(),
      website,
      username,
      password,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newItem],
      website: '',
      username: '',
      password: '',
      count: prevState.count + 1,
    }))
  }

  deletePassword = id => {
    const {passwordsList} = this.state
    const updatedPasswords = passwordsList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState(prevState => ({
      passwordsList: updatedPasswords,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      passwordsList,
      search,
      count,
    } = this.state

    return (
      <div className="main-con">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="top-con">
          <form className="left-con" onSubmit={this.add}>
            <h1 className="new-password-head">Add New Password</h1>
            <div className="input-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="inp"
                onChange={this.changeWebsite}
                value={website}
              />
            </div>
            <div className="input-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="inp"
                onChange={this.changeUsername}
                value={username}
              />
            </div>
            <div className="input-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="inp"
                onChange={this.changePassword}
                value={password}
              />
            </div>
            <button type="submit" className="but">
              Add
            </button>
          </form>
          <img
            className="image-set"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
        </div>

        <div className="bottom-con">
          <div className="row-con">
            <h1 className="new-password-head">Your Passwords</h1>
            <div className="count-con">
              <p className="count">{count}</p>
            </div>
            <div className="search-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search"
                className="inp"
                value={search}
                onChange={this.changeSearch}
              />
            </div>
          </div>
          <hr />
          <div className="row-con">
            <input
              type="checkbox"
              value="false"
              className="check-box"
              name="pass"
              onClick={this.checked}
              id="Show passwords"
            />
            <label
              className="new-password-head"
              name="Show passwords"
              htmlFor="Show passwords"
            >
              {' '}
              Show Passwords
            </label>
          </div>
          <div className="passwords-con"> {this.display()}</div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
