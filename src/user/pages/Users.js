import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
	const USERS = [
		{
			id: 'u1',
			name: 'James Hagood',
			image:
				'https://www.timesnews.net/image/2016/04/21/x700_q30/Hagood-James-Ralph-2016-Jpg.jpg',
			places: 3
		}
	];

	return <UsersList items={USERS} />;
};

export default Users;
