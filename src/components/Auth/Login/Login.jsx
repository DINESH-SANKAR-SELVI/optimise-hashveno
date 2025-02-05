import React, { useState, useRef, useEffect } from 'react';
// import { useHistory } from 'react-router-dom'; // Import useHistory

import { FaFacebook, FaGoogle, FaTimes, FaTwitter } from 'react-icons/fa';

// import { signInWithGoogle, signInWithFacebook, signInWithGitHub } from './authService'; 

import './Login.css';

const Login = ({setShowLogin}) => {
  const [formData, setFormData] = useState({
      username: '',
      password: '',
  });
  const [errors, setErrors] = useState({});
  const inputRefs = {
      username: useRef(null),
      password: useRef(null),
  };

  const handleloginCloseButtonClick = () => {
    setShowLogin(false);
    }

  useEffect(() => {
      const inputs = document.querySelectorAll('.login-input100');

      inputs.forEach((input) => {
          input.addEventListener('blur', function () {
              if (this.value.trim() !== "") {
                  this.classList.add('login-has-val');
              } else {
                  this.classList.remove('login-has-val');
              }
          });
      });

      return () => {
          inputs.forEach((input) => {
              input.removeEventListener('blur', function () {});
          });
      };
  }, []);

  const validate = (input) => {
      if (input.name === 'username' || input.name === 'password') {
          if (input.value.trim() === '') {
              return false;
          }
      }
      return true;
  };

  const showValidate = (input) => {
      const thisAlert = input.parentElement;
      thisAlert.classList.add('login-alert-validate');
  };

  const hideValidate = (input) => {
      const thisAlert = input.parentElement;
      thisAlert.classList.remove('login-alert-validate');
  };

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value,
      });

      hideValidate(e.target);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
      let check = true;

      for (const key in inputRefs) {
          const input = inputRefs[key].current;
          if (!validate(input)) {
              showValidate(input);
              check = false;
          }
      }

      if (check) {
          // Handle successful form submission
          console.log('Form submitted:', formData);

          setFormData({
            username: '',
            password: '',
        })
      }
    } catch (err) {
      console.log('Login failed. Please try again.');
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
        console.log(provider)
      if (provider === 'google') {
        // await signInWithGoogle();
        console.log('google')
      } else if (provider === 'facebook') {
        // await signInWithFacebook();
        console.log('facebook')
      } else if (provider === 'twitter') {
        // await signInWithGitHub();
        console.log('twitter')
      }
    //   history.push('/dashboard'); // Redirect on successful login
    } catch (err) {
      setError('Social login failed. Please try again.');
    }
  };

  return (
      <div className="login-limiter">
          <div className="login-container-login100" style={{ backgroundImage: 'url(assets/home-screeen-resources/login-bg-01.jpg)' }}>
              <div className="login-wrap-login100 login-p-l-55 login-p-r-55 login-p-t-65 login-p-b-54">
                  <form className="login-login100-form login-validate-form" onSubmit={handleSubmit}>
                  <span onClick={handleloginCloseButtonClick}><FaTimes /></span>
                      <span className="login-login100-form-title login-p-b-49">Login</span> 
        
                      <div className="login-wrap-input100 login-validate-input login-m-b-23" data-validate="Username is required">
                          <span className="login-label-input100">Username</span>
                          <input
                              className="login-input100"
                              type="text"
                              name="username"
                              placeholder="Type your username"
                              ref={inputRefs.username}
                              value={formData.username}
                              onChange={handleChange}
                          />
                          <span className="login-focus-input100" data-symbol="&#129333;"></span>
                      </div>

                      <div className="login-wrap-input100 login-validate-input" data-validate="Password is required">
                          <span className="login-label-input100">Password</span>
                          <input
                              className="login-input100"
                              type="password"
                              name="password"
                              placeholder="Type your password"
                              ref={inputRefs.password}
                              value={formData.password}
                              onChange={handleChange}
                          />
                          <span className="login-focus-input100" data-symbol="&#128273;"></span>
                      </div>

                      <div className="login-text-right login-p-t-8 login-p-b-31">
                          <a href="#">Forgot password?</a>
                      </div>

                      <div className="login-container-login100-form-btn">
                          <div className="login-wrap-login100-form-btn">
                              <div className="login-login100-form-bgbtn"></div>
                              <button className="login-login100-form-btn">Login</button>
                          </div>
                      </div>

                      <div className="login-txt1 login-text-center login-p-t-54 login-p-b-20">
                          <span>Or Sign Up Using</span>
                      </div>

                      <div onClick={() => handleSocialLogin('facebook')} className="login-flex-c-m">
                          <a  className="login-login100-social-item login-bg1" style={{color: 'white'}}>
                              <FaFacebook />
                          </a>

                          <a onClick={() => handleSocialLogin('twitter')} className="login-login100-social-item login-bg2" style={{color: 'white'}}>
                              <FaTwitter />
                          </a>

                          <a onClick={() => handleSocialLogin('google')} className="login-login100-social-item login-bg3" style={{color: 'white'}}>
                              <FaGoogle />
                          </a>
                      </div>

                      {/* <div className="flex-col-c p-t-155">
                          <span className="txt1 p-b-17">Or Sign Up Using</span>
                          <a href="#" className="txt2">Sign Up</a>
                      </div> */}
                  </form>
              </div>
          </div>
      </div>
  );
};

export default Login;