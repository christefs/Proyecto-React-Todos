//import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon2 } from '../TodoIcon/DeleteIcon2';
import './TodoItem2.css';

function TodoItem2(props) {
    return (
      <li className='TodoItem'>
        {/*
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete}
        />
        
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
    >V</span> */}
        <p className={`TodoItem-p ${props.onComplete && "TodoItem-p--complete"}`}>{props.text}</p>
        
        <DeleteIcon2
          onDelete={props.onDelete} />
        {/*
        <span className='Icon Icon-delete'
        onClick={props.onDelete}
        >X</span> */}
      </li>
    );
  }

  export { TodoItem2 };