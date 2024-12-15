// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, deletePost } from "../Store/postSlice";
import { useEffect, useCallback } from "react";
import PostList from "./PostList";
import Loading from "../component/Loading";
const Index = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const { records, loading, error } = posts;
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  const deleteRecord = useCallback(
    (id) => dispatch(deletePost(id)),
    [dispatch]
  );

  return (
    <>
      <Loading loading={loading} error={error}>
        <PostList records={records} deleteRecord={deleteRecord} />
      </Loading>
    </>
  );
};
export default Index;
