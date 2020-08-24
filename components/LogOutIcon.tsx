import React from 'react';
import Router from 'next/router';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Cookies from 'js-cookie';

import IconButton from '@material-ui/core/IconButton';

import AccountCircle from '@material-ui/icons/AccountCircle';
// const useStyles = makeStyles((theme: Theme) =>
// 	createStyles({
// 		root: {
// 			flexGrow: 1,
// 		},
// 		menuButton: {
// 			marginRight: theme.spacing(2),
// 		},
// 		title: {
// 			flexGrow: 1,
// 		},
// 	}),
// );

export default function PopoverPopupState() {
	// const classes = useStyles();
	// const [auth, setAuth] = React.useState(true);
	// auth;
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setAuth(event.target.checked);
	// };

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
		Cookies.remove('cookie-broadex');
		Router.push('/sign-in');
	};
	return (
		<div>
			<IconButton
				aria-label='account of current user'
				aria-controls='menu-appbar'
				aria-haspopup='true'
				onClick={handleMenu}
				color='default'>
				<AccountCircle />
			</IconButton>
			<Menu
				id='menu-appbar'
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={open}
				onClose={handleClose}>
				{/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
				<MenuItem onClick={handleClose}>LogOut</MenuItem>
			</Menu>
		</div>
	);
}
