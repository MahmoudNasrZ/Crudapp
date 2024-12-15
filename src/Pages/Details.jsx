// import { Container, Row, Col } from "react-bootstrap";
import usePostDetails from "../hooks/use-post-details";
import Loading from "../component/Loading";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { cleanRecord } from "../Store/postSlice";
const Details = () => {
  const { record, loading, error } = usePostDetails();
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(cleanRecord());
    };
  }, [dispatch]);
  return (
    <Loading loading={loading} error={error}>
      <p>ID:{record?.id}</p>
      <p>Title:{record?.title}</p>
      <p>Description:{record?.description}</p>
    </Loading>
  );
};
export default Details;
