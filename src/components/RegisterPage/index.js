import {Component} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import app from '../firebase'
import './index.css'

const auth = getAuth(app)

class RegisterPage extends Component {
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

  signUpButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    try {
      await createUserWithEmailAndPassword(auth, username, password).then(
        data => {
          console.log(('data': data))
          window.location.href = '/login'
        },
      )
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
          autoComplete="current-password"
          className="password-input-field"
          value={password}
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
          className="username-input-field"
          autoComplete="current-username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Email"
        />
      </>
    )
  }

  render() {
    return (
      <div className="register-container">
        <form className="form-container" onSubmit={this.signUpButton}>
          <h1 className="heading"> Register Here</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="signup-button">
            Login
          </button>
          <p className="already-user">
            Allready User?{' '}
            <Link to="/login" className="link">
              Login
            </Link>
          </p>
        </form>
      </div>
    )
  }
}

export default RegisterPage
