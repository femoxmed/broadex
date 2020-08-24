import Router from 'next/router';
import cookieParser from 'cookie';
import jwt_decode from 'jwt-decode';
export function getServerCookie(req: any, name: string) {
	const cookies = extractCookies(req);
	const cookie = cookies ? cookies[name] : null;

	return cookie;
}

function extractCookies(req: any) {
	const cookies = req.headers.cookie;
	if (!cookies) return null;

	return cookieParser.parse(cookies);
}

const initialize = (ctx: any) => {
	try {
		let token;
		if (ctx.req) {
			token = getServerCookie(ctx.req, 'cookie-broadex');
			if (token) {
				let check: any = jwt_decode(token);
				let expired = check.exp * 1000 <= Date.now();
				if (expired) {
					ctx.res.setHeader('location', '/sign-in');
					ctx.res.statusCode = 302;
					ctx.res.end();
				}
			} else {
				ctx.res.setHeader('location', '/sign-in');
				ctx.res.statusCode = 302;
				ctx.res.end();
			}
		} else {
			Router.push('/redirect-route');
		}

		return { token };
	} catch (error) {
		console.log(error);
	}
};

export default initialize;
