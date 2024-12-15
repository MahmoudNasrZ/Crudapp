// import Table from "../component/Table";
import "./Home.css";
import { Table, Container, Row, Col } from "react-bootstrap";
import PostListItem from "../component/PostListItem";
import { memo } from "react";
const PostList = memo(function PostList({ records, deleteRecord }) {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th style={{ width: "6%" }}>Post No</th>
                <th style={{ width: "15%" }}>Title</th>
                <th>description</th>
                <th style={{ width: "10%" }}>Operation</th>
              </tr>
            </thead>
            <tbody>
              <PostListItem records={records} deleteRecord={deleteRecord} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
});
export default PostList;
