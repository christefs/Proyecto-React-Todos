import React from 'react';
import { TodoIcon } from './';

function DeleteIcon2({ onDelete }) {
    return (
        <TodoIcon
            type='delete'
            color='gray'
            onClick={onDelete}
        />
    );
}

export { DeleteIcon2 };