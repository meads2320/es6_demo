import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props,context);
        //binds in the contructor are recommended 
    }

    courseRow(course, index) {
        return (
            <div key={index}>{course.title}</div>
        );
    }
    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions : PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) { 
    return { 
        courses : state.courses // courses comes from the reducer name 
    };
}

function mapDispatchToProps(dispatch) { 
    //decide what actions to dispatch
    return { 
        actions : bindActionCreators(courseActions, dispatch)  //  (course) => dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
