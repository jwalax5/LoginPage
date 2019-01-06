import React from 'react';

export const UserItem = ({ ...rest }) => {
    return (
        <li >{rest.user.username} - {rest.user.password}</li>
    );
};