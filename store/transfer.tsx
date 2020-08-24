import { createContext } from 'react';
import React, { useReducer } from 'react';

// interface TransferFlow {
// 	amount: {
// 		amount: string;
// 		sender_country: string;
// 		receipient_country: string;
// 	};
// 	receipient: {
// 		user_id: string;
// 	};
// }

export const initialState: any = {
	amount: {
		amount: '',
		sender_country: '',
		receipient_country: '',
	},
	receipient: {
		user_id: '',
	},
	steps: {
		one: true,
		two: false,
	},
};
//pure reducer function
export const transferReducer = (state: any, action: any) => {
	switch (action.type) {
		case 'am':
			return state;
	}
};
const TransferContext = createContext(initialState);

const TransferProvider = ({ children }: any) => {
	const [transferState, transferDispatcher] = useReducer(
		transferReducer,
		initialState,
	);

	return (
		<TransferContext.Provider value={[transferState, transferDispatcher]}>
			{children}
		</TransferContext.Provider>
	);
};

export { TransferContext, TransferProvider };
