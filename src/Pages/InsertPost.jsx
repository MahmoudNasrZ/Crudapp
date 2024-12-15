import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { insertPost } from "../Store/postSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../component/Loading";
import { useSelector } from "react-redux";
function InsertPost() {
  //decleration
  const [title, settitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.authorization);

  //formHandler
  const formHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 500).toString();
    dispatch(insertPost({ id, title, description }))
      .unwrap()
      .then(() => navigate("/"))
      .catch((error) => {
        console.log(error);
        // handle error here
      });
  };
  return (
    <Container className="insertPostContainer mt-5">
      <Row className="justify-content-md-center">
        <Col xs={8} className="shadow-lg p-3 mb-5 bg-body rounded">
          <Form onSubmit={formHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Title"
                value={title ?? ""}
                onChange={(title) => settitle(title.target.value)}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>description</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={3}
                value={description ?? ""}
                onChange={(description) =>
                  setDescription(description.target.value)
                }
              />
            </Form.Group>
            <Loading loading={loading} error={error}>
              <Button disabled={!isLoggedIn} variant="success" type="submit">
                Submit
              </Button>
            </Loading>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default InsertPost;
