import React from 'react';
import UsersList from '../components/UserList';

const Users = () =>{
    const USERS = [
        {
            id: 'u1',
            name:'abc',
            image:'https://images.unsplash.com/photo-1491484925566-336b202157a5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYWNlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            places: 3
        }
    ];
    
    return <UsersList items={USERS} />

};

export default Users;
