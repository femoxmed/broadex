import { NextPageContext } from 'next';
import initialize from './initialize';
const getServerSideProps: any = async (ctx: NextPageContext) => {
	try {
		await initialize(ctx);

		return {
			props: {},
		};
	} catch (error) {}
};

export default getServerSideProps;
