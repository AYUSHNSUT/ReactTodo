import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import './ToDoCard.css'

function TodoCard() {
    return (

        <div className="Card">
            <div className = "ListText">Hello!</div>
            <div className = "btnDiv">
                <Button className = "btnCrd" variant='warning'>Delete</Button>{' '}
            </div>
        </div>
    )
}
export default TodoCard;