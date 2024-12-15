// import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { postDetails } from "../Store/postSlice";
import { useParams } from "react-router-dom";
const usePostDetails = () => {
  const { id } = useParams();
  const { record, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postDetails(id));
  }, [dispatch, id]);
  return { record, loading, error };
};
export default usePostDetails;
 