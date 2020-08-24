import { AuthContext } from './reducer';
import { useContext } from 'react';
const [authDispatcher] = useContext(AuthContext);
import axios from 'axios';
export const loginUser = async (data: any) => {
	const { email, password } = data;
	try {
		let { data } = await axios({
			method: 'post',
			url: process.env.API_URL + '/auth/login',
			data: {
				email,
				password,
			},
		});

		authDispatcher({
			type: 'AUTH',
			payload: data.data,
		});
		return data;
	} catch (error) {
		console.log(error);
		if (error && error.response) {
			return error.response;
		}
	}
};
