import React from 'react';
import Link from 'next/link';

import CloseIcon from '../../components/Vectors/CloseIcon';
import GoogleIcon from '../../components/Vectors/GoogleIcon';
import FacebookIcon from '../../components/Vectors/FacebookIcon';

interface Props { }

const SignIn = ({ }: Props) => {
  return (
    <>
      <header className='auth-header'>
        <div className='d-flex justify-content-between align-items-center'>
          <img width={34} height={36} src='/images/LOGO@2x.png' />

          <p className='m-0'>
            Already a member?{' '}
            <Link href='/sign-in'>
              <a className='auth-link'>Sign in</a>
            </Link>
          </p>

          <button className='btn pr-0'>
            <CloseIcon />
          </button>
        </div>
      </header>

      <section className='d-flex h-100 flex-column align-items-center justify-content-center auth-content'>

        <div className='auth-label text-center'>
          <p>The safest and fastest way to <br /> send Money</p>
        </div>

        <form className='text-center auth-form'>
          <div>
            <div className='form-row auth-form-group'>

              <div className='col'>
                <div className='auth-radio'>
                  <input type='radio' name='type' className='form-check-input auth-radio-input' />
                  <span className='checkmark'></span>
                  <label className='form-check-label auth-radio-label ml-2 text-blue' htmlFor='type'>Personal</label>
                </div>
              </div>

              <div className='col'>
                <div className='auth-radio'>
                  <input type='radio' name='type' className='form-check-input auth-radio-input' />
                  <span className='checkmark'></span>
                  <label className='form-check-label auth-radio-label ml-2 text-blue' htmlFor='type'>Business</label>
                </div>
              </div>

            </div>

            <div className='form-row auth-form-group'>
              <div className='col'>
                <input type='text' className='form-control auth-input' placeholder='First name' />
                <span className='auth-input-span'></span>

              </div>
              <div className='col'>
                <input type='text' className='form-control auth-input' placeholder='Last name' />
                <span className='auth-input-span'></span>

              </div>
            </div>

            <div className='form-group auth-form-group'>
              <input type='email' className='form-control auth-input' id='email' placeholder='Email address' required />
              <span className='auth-input-span'></span>
              {/* <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small> */}
            </div>

            <div className='form-group auth-form-group'>
              <input type='password' className='form-control auth-input' id='password' placeholder='Password' />
              <span className='auth-input-span'></span>
            </div>

            <div className='form-group auth-form-group'>
              <input type='password' className='form-control auth-input' id='confirmPassword' placeholder='Confirm password' />
              <span className='auth-input-span'></span>
            </div>

            <div className='form-group auth-form-group text-left'>
              <label className='auth-select-label'>Country of residence</label>
              <select className='form-control auth-select'>
                <option>Nigeria</option>
                <option>London</option>
                <option>Brazil</option>
              </select>
            </div>

            <button type='submit' className='btn auth-btn brdx-btn'>Sign up</button>

            <div>
              <p className='d-flex justify-content-center align-items-center m-0 auth-callout'>or Register with
                  <button className='btn p-0 ml-2 mr-1'><GoogleIcon /></button>
                <button className='btn p-0'><FacebookIcon /></button>
              </p>
            </div>
          </div>

        </form>

      </section>
    </>
  );
};

export default SignIn;
