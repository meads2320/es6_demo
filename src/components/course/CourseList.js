import React, { Component, PropTypes } from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({ courses }) => {
        return ( 
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Watch</th>
                            <th>Delete</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Category</th>
                            <th>Course Length</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => 
                            <CourseListRow key={course.id} course={course} />
                        )}
                    </tbody>
                </table>
            </div>
        );
};

CourseList.propTypes = {
    courses :PropTypes.array.isRequired
};

export default CourseList;