import './TodoTwoList.css';

function TodoTwoList({ children }) {
    return (
        <div className='columns'>
            {children}
        </div>
    )
}

export { TodoTwoList };