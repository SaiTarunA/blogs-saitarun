import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllBlogs } from "../app/actions";
import { useParams } from "react-router-dom";
import BlogDetailPage from "../components/BlogDetailPage";

const BlogDetail = (props) => {
  const { blogId } = useParams();
  const { allBlogs, allBlogsLoading, fetchAllBlogs } = props;

  const blogDetail = Object.values(allBlogs).filter(
    (obj) => obj.uuid === blogId
  )[0];

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  }, []);

  useEffect(() => {
    if (!Object.keys(allBlogs).length) {
      fetchAllBlogs();
    }
  }, [allBlogs]);

  return (
    <BlogDetailPage
      allBlogs={allBlogs}
      allBlogsLoading={allBlogsLoading}
      blogDetail={blogDetail}
    />
  );
};

const mapStateToProps = (state) => {
  const { homePage } = state;
  return {
    allBlogs: homePage.allBlogs,
    allBlogsLoading: homePage.loading.allBlogs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBlogs: () => {
      dispatch(fetchAllBlogs());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetail);
