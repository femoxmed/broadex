import React from "react";
import Link from "next/link";

import CloseIcon from "../../components/Vectors/CloseIcon";
import GoogleIcon from "../../components/Vectors/GoogleIcon";
import FacebookIcon from "../../components/Vectors/FacebookIcon";

interface Props { }

const SignIn = ({ }: Props) => {
  return (
    <>
      <header className='auth-header'>
        <div className='d-flex justify-content-between align-items-center'>
          <img width={34} height={36} src='/images/LOGO@2x.png' />

          <p className='m-0'>
            Not a member?{" "}
            <Link href='/sign-up'>
              <a className='auth-link'>Sign up</a>
            </Link>
          </p>

          <button className='btn pr-0'>
            <CloseIcon />
          </button>
        </div>
      </header>

      <section className='d-flex h-100 flex-column align-items-center justify-content-center auth-content'>

        <div className="auth-label text-center">
          <p>Welcome Back</p>
        </div>

        <form className="text-center auth-form">
          <div>
            <div className="form-group auth-form-group">
              <input type="email" className="form-control auth-input" id="email" placeholder="Email address" required />
              <span className="auth-input-span"></span>
              {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <div className="form-group auth-form-group">
              <input type="password" className="form-control auth-input" id="password" placeholder="Password" />
              <span className="auth-input-span"></span>
            </div>

            <div className="form-group auth-form-group">
              <input type="password" className="form-control auth-input" id="confirmPassword" placeholder="Confirm password" />
              <span className="auth-input-span"></span>
            </div>

            <div className="form-group form-check auth-form-check">
              <div className="auth-radio">
                <input type="checkbox" className="form-check-input auth-radio-input" id="rememberDevice" />
                <span className="checkmark"></span>
                <label className="form-check-label auth-radio-label" htmlFor="rememberDevice">Remember this device</label>
              </div>
            </div>

            <button type="submit" className="btn auth-btn brdx-btn">Submit</button>

            <div className="auth-fp">
              <Link href="/"><a className="auth-fp-link">Forgot password?</a></Link>
            </div>

            <div>
              <p className="d-flex justify-content-center align-items-center m-0 auth-callout">or Register with
                  <button className="btn p-0 ml-2 mr-1"><GoogleIcon /></button>
                <button className="btn p-0"><FacebookIcon /></button>
              </p>
            </div>
          </div>

        </form>

      </section>
    </>
  );
};

export default SignIn;
