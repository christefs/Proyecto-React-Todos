import './TodoFinished.css';

function TodoFinished({ children }) {
    return (
      <ul className='TodoFinished'>
        {children}
      </ul>
    )
  }

  export { TodoFinished };