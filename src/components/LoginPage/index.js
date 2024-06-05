import {Component} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase'
import './index.css'

const auth = getAuth(app)

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  loginButton = event => {
    event.preventDefault()
    const {username, password} = this.state

    try {
      signInWithEmailAndPassword(auth, username, password).then(data => {
        console.log(data)
        window.location.href = '/home'
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          required
          className="password-input-field"
          value={password}
          autoComplete="current-password"
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="email"
          required
          autoComplete="current-username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Email"
        />
      </>
    )
  }

  render() {
    return (
      <div className="login-container">
        <form className="form-container" onSubmit={this.loginButton}>
          <h1 className="heading">Login Page</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="signin-button">
            Login
          </button>

          <p className="already-user">
            New User?{' '}
            <Link to="/" className="link">
              Register
            </Link>
          </p>
        </form>
      </div>
    )
  }
}

export default LoginPage
