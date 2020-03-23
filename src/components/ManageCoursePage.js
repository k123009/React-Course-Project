import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursePage = props => {
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: null
  });

  function handleChange({ target }) {
    setCourse({
      ...course,
      [target.name]: target.value
    });
  }

  return (
    <>
      <h2>Manage Course </h2>
      <CourseForm course={course} onChanged={handleChange} />
    </>
  );
};

export default ManageCoursePage;
