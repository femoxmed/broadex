import { createContext } from 'react';
import React, { useReducer } from 'react';
export const initialState: any = {
	payload: '',
	token: '',
};

//pure reducer function
export const authReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'AUTH':
			return { ...action.payload };
		case 'AUTH_CLEAR':
			return {};
		default:
			return state;
	}
};
const AuthContext = createContext(initialState);

// import { authReducer, AuthContext } from '../store/auth/reducer';

const AuthProvider = ({ children }: any) => {
	const [authState, authDispatcher] = useReducer(authReducer, initialState);

	return (
		<AuthContext.Provider value={[authState, authDispatcher]}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
