import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAllBlogs } from "../app/actions";
import AllBlogsPage from "../components/AllBlogsPage";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AllBlogs = (props) => {
  const navigate = useNavigate();
  const { allBlogs, allBlogsLoading, fetchAllBlogs } = props;

  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlogs = Object.values(allBlogs).filter(
    (obj) =>
      obj.title.toUpperCase().includes(searchTerm.toUpperCase()) ||
      obj.keywords.some((val) =>
        val.toUpperCase().includes(searchTerm.toUpperCase())
      )
  );

  const handleBlogClick = (blog) => {
    navigate(`/blog-detail/${blog.uuid}`);
  };

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
    <AllBlogsPage
      allBlogsLoading={allBlogsLoading}
      handleBlogClick={handleBlogClick}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      filteredBlogs={filteredBlogs}
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

export default connect(mapStateToProps, mapDispatchToProps)(AllBlogs);
