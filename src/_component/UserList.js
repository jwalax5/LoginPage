import React from 'react';
import { UserItem } from './UserItem';

export const UserList = ({ ...rest }) => {
    return (

        <div>
            <ul>
                {rest.userList.map(t =>
                    <UserItem key={t.username} user={t} />
                )}
            </ul>
        </div>
    );
};