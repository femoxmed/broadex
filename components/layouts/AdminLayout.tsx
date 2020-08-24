import React from 'react';
import AdminSideBar from '../AdminSideBar';

const AdminLayout = (props: any) => {
	return (
		<>
			<div className='container'>
				<div className='row flex-row'>
					<div className='col-lg-3 px-0'>
						<AdminSideBar />
					</div>

					<div className='col-lg-9'>{props.children}</div>
				</div>
			</div>

			<style jsx>{``}</style>
		</>
	);
};

export default AdminLayout;
