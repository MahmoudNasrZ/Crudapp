import "../Pages/Home.css";
import { ButtonGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostListItem({ records, deleteRecord }) {
  const { isLoggedIn } = useSelector((state) => state.authorization);
  const navigate = useNavigate();
  const deleteHandler = (item) => {
    if (window.confirm(`Do you really want to delete ?${item.title}`)) {
      deleteRecord(item.id);
    }
  };
  const postData = records.map((data, postNumber) => {
    return (
      <tr key={++postNumber}>
        <td>{++postNumber}</td>
        <td>
          <Link
            to={`post/${data.id}/details`}
            style={{ color: "black", textDecoration: "none" }}
          >
            {data.title}
          </Link>
        </td>
        <td>{data.description}</td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button
              disabled={!isLoggedIn}
              variant="success"
              onClick={() => navigate(`post/${data.id}/edit-post`)}
            >
              Edit
            </Button>
            <Button
              disabled={!isLoggedIn}
              variant="danger"
              onClick={() => {
                deleteHandler(data);
              }}
            >
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  });
  return <>{postData}</>;
}
export default PostListItem;
