import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import { bindActionCreators } from 'redux'

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props,context);

        this.state = {
            course: { title: '' }
        };

        //binds in the contructor are recommended 
        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event) {
        const course  = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course});
    }

    onClickSave() {
        //action is wrapped in call to dispatch down below
       this.props.actions.createCourse(this.state.course);
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
                <h2>Add Course</h2>
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" onClick={this.onClickSave} value="Save" />
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
