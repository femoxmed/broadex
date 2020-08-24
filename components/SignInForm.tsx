import React from 'react';
import { Formik, Field, useField } from 'formik';
import {
	LinearProgress,
	FormControlLabel,
	InputAdornment,
	Input,
	IconButton,
	FormControl,
	InputLabel,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { TextField } from 'formik-material-ui';
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/RadioButtonChecked';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleIcon from './Vectors/GoogleIcon';
import FacebookIcon from './Vectors/FacebookIcon';
import * as Yup from 'yup';
import Cookies from 'js-cookie';

//
import { AuthContext } from '../store/auth/reducer';
import { useContext, useState } from 'react';
// const [authDispatcher] = useContext(AuthContext);
import axios from 'axios';
import { useRouter } from 'next/router';

//

const Schema = Yup.object().shape({
	email: Yup.string().email().required('Email field is required'),
	password: Yup.string().required('Password field is required'),
});
export const CheckboxCustom = ({ ...props }) => {
	const [field] = useField(props.name);
	return (
		<Checkbox
			{...field}
			checked={field.value}
			icon={<CircleUnchecked fontSize='small' />}
			checkedIcon={<CircleCheckedFilled fontSize='small' />}
			name='rememberMe'
		/>
	);
};

export const CustomFIlledInput = ({ ...props }: any) => {
	const {
		form: { setFieldValue },
		field: { name },
	} = props;
	const onChange = React.useCallback(
		(event) => {
			const { value } = event.target;
			setFieldValue(name, value ? value : '');
		},
		[setFieldValue, name],
	);
	interface State {
		amount: string;
		password: string;
		weight: string;
		weightRange: string;
		showPassword: boolean;
	}
	const [values, setValues] = React.useState<State>({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	});

	const handleClickShowPassword = () => {
		setValues({ ...values, showPassword: !values.showPassword });
	};

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>,
	) => {
		event.preventDefault();
	};
	// const [field] = useField(props.name);
	return (
		<FormControl fullWidth>
			<InputLabel htmlFor='input-with-icon-adornment'>Password</InputLabel>
			<Input
				id='input-with-icon-adornment'
				// {...field}
				// {...fieldToTextField(props)}
				onChange={onChange}
				type={values.showPassword ? 'text' : 'password'}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge='end'>
							{values.showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}></Input>
		</FormControl>
	);
};
const url = process.env.NEXT_PUBLIC_API_URL;
const SignIn = () => {
	const [, authDispatcher] = useContext(AuthContext);
	const [errorData, setError] = useState({ status: false, message: '' });
	const [success, setSuccess] = useState({ status: false, message: '' });
	const router = useRouter();
	const loginUser = async (data: any) => {
		const { email, password, rememberMe } = data;
		try {
			let { data } = await axios({
				method: 'post',
				url: url + '/auth/login',
				data: {
					email,
					password,
				},
			});
			Cookies.set('cookie-broadex', data.data.token, {
				expires: rememberMe ? 7 : 1,
				path: '/',
			});

			setSuccess({ status: true, message: 'Authenticated Succesfully' });
			authDispatcher({
				type: 'AUTH',
				payload: data.data,
			});

			router.push('/user');
			return data;
		} catch (error) {
			if (!error.response)
				return setError({
					status: true,
					message: 'Network Error!!! Check Your Network',
				});
			if (error && error.response) {
				console.log(error.response.data);
				setError({ status: true, message: error.response.data.message });
				// return error.response;
			} else {
				setError({ status: true, message: error.response });
			}
		}
	};

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				rememberMe: false,
			}}
			validationSchema={Schema}
			onSubmit={async (values, { setSubmitting }) => {
				setError({ status: false, message: '' });
				const { email, password, rememberMe } = values;
				await loginUser({ email, password, rememberMe });
				setSubmitting(false);
			}}>
			{({ submitForm, isSubmitting }) => {
				return (
					<>
						{/* // <Form> */}

						<form className='w-100 p-5 p-md-3 p-lg-3 p-xl-5'>
							<NoSsr>
								{errorData.status && (
									<div>
										<Alert severity='error'>{errorData.message}</Alert>
									</div>
								)}
								{success.status && (
									<Alert severity='success'>{success.message}</Alert>
								)}

								<div className='form-group my-4 mb-5'>
									<Field
										fullWidth
										component={TextField}
										type='email'
										label='Email'
										name='email'
									/>
								</div>

								<div className='form-group my-4'>
									<Field
										fullWidth
										component={CustomFIlledInput}
										type='password'
										label='Password'
										name='password'></Field>
								</div>

								<div className='form-group my-4'>
									<FormControlLabel
										name='rememberMe'
										control={<CheckboxCustom />}
										label='Remember Me'
									/>
								</div>

								<div>
									<div className='form-group my-4'>
										{isSubmitting && <LinearProgress />}
										<br />
										<button
											className='brdx-btn w-100 btn'
											disabled={isSubmitting}
											onClick={(e) => {
												e.preventDefault(), submitForm();
											}}>
											Submit
										</button>
									</div>
									<div>
										<p className='d-flex justify-content-center align-items-center m-0 auth-callout'>
											or Register with
											<button className='btn p-0 ml-2 mr-1'>
												<GoogleIcon />
											</button>
											<button className='btn p-0'>
												<FacebookIcon />
											</button>
										</p>
									</div>
								</div>
							</NoSsr>
						</form>

						{/* // </Form> */}
					</>
				);
			}}
		</Formik>
	);
};

export default SignIn;
