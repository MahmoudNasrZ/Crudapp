import usePostDetails from "../hooks/use-post-details";
import Loading from "../component/Loading";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editPost, cleanRecord } from "../Store/postSlice";
import WithGuard from "../component/withGuard";
function EditPost() {
  const { record, loading: dataLoading, error: dataError } = usePostDetails();
  const [title, setTItle] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //condtion Statement if record is not empty , Title is empty and description =>
  useEffect(() => {
    if (record && !title && !description) {
      setTItle(record?.title);
      setDescription(record?.description);
    }
  }, [record, title, description]);
  // cleanRecord Bug fix
  useEffect(() => {
    return () => {
      dispatch(cleanRecord());
    };
  }, [dispatch]);

  //Form Handler
  const formHandler = (e) => {
    e.preventDefault();
    dispatch(
      editPost({
        id: record.id,
        title: title,
        description: description,
      })
    )
      .unwrap()
      .then(() => navigate("..", { replace: true }));
  };
  return (
    <WithGuard>
      <Loading loading={dataLoading} error={dataError}>
        <Container className="insertPostContainer mt-5">
          <Row className="justify-content-md-center">
            <Col xs={8} className="shadow-lg p-3 mb-5 bg-body rounded">
              <Form onSubmit={formHandler}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Product Title"
                    value={title ?? ""}
                    onChange={(title) => setTItle(title.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={description ?? ""}
                    onChange={(description) =>
                      setDescription(description.target.value)
                    }
                  />
                </Form.Group>
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Loading>
    </WithGuard>
  );
}
export default EditPost;
