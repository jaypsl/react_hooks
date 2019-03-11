import React  from 'react';
import useResources from './useResource';

const UserList = () => {
    const users = useResources('users');

    return(
    <ol>{users.map(user => <li key={user.id}>{user.name}</li>)}</ol>
    )
}

export default UserList;

