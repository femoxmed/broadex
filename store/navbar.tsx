import { createContext } from 'react';
import React, { useReducer } from 'react';
export const initialState: any = false;
//pure reducer function
export const navReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'FLIP':
			return !state;
	}
};
const NavContext = createContext(initialState);

const NavProvider = ({ children }: any) => {
	const [navState, authDispatcher] = useReducer(navReducer, initialState);

	return (
		<NavContext.Provider value={[navState, authDispatcher]}>
			{children}
		</NavContext.Provider>
	);
};

export { NavContext, NavProvider };
