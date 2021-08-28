import "bootstrap/dist/css/bootstrap.css";
import "./ToDoRows.css";
import TodoCard from "./TodoCard";
import Container from "react-bootstrap/Container";
import {Row, Col} from "react-bootstrap";
function ToDoRows() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <TodoCard></TodoCard>
        </Col>
        <Col xs={6} md={4}>
          <TodoCard></TodoCard>
        </Col>
        <Col xs={6} md={4}>
          <TodoCard></TodoCard>
        </Col>
      </Row>
    </Container>
  );
}
export default ToDoRows;
