import React, { useEffect } from "react";
import { fetchAllBlogs } from "../app/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomePage from "../components/HomePage";

const Home = (props) => {
  const navigate = useNavigate();

  const MAX_FEATURED_BLOGS = 3;
  const { allBlogs, allBlogsLoading, fetchAllBlogs } = props;

  let featuredBlogs =
    allBlogs && Object.keys(allBlogs).length && Object.values(allBlogs);
  featuredBlogs =
    featuredBlogs?.length &&
    featuredBlogs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  const handleAllBlogsClick = () => {
    navigate("/all");
  };

  const handleBlogClick = (blog) => {
    navigate(`/blog-detail/${blog.uuid}`);
  };

  return (
    <HomePage
      allBlogsLoading={allBlogsLoading}
      handleAllBlogsClick={handleAllBlogsClick}
      handleBlogClick={handleBlogClick}
      featuredBlogs={featuredBlogs}
      MAX_FEATURED_BLOGS={MAX_FEATURED_BLOGS}
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
