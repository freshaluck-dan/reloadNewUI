import React from "react";
import PropTypes from "prop-types";
import NextImage from "../NextImage";

const BlogPost = ({ className, ThumbUrl, title, excerpt, link }) => {
  // Add all classes to an array
  const addAllClasses = ["blog_post"];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <div className={addAllClasses.join(" ")}>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="thumbnail"
      >
        {ThumbUrl}
        {/* <NextImage src={thumbUrl} alt={title} /> */}
      </div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="excerpt">{excerpt}</p>
        {link && <div className="learn_more">{link}</div>}
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  className: PropTypes.string,
  thumbUrl: PropTypes.object,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.element,
};

export default BlogPost;
