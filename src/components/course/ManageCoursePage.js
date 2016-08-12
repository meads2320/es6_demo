import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';
import {authorsFormattedForDropdown} from '../../selectors/selectors';

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props,context);

        this.state = {
            course : Object.assign({}, this.props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) { 
        if(this.props.course.id != nextProps.course.id) {
            this.setState({course : Object.assign({}, nextProps.course)});
        }
    }

    courseFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if(this.state.course.title.length < 5) { 
            errors.title = "Title must be at least 5 characters.";
            formIsValid = false;
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    saveCourse(event)  {
        event.preventDefault();

        if(!this.courseFormIsValid()) {
            return;
        }

        this.setState({ saving : true});
        
        this.props.actions.saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
            toastr.error(error);
            this.setState({ saving : false});
        });
       
    }

    redirect() { 
        toastr.success("Saved");
        this.setState({ saving : false});
        this.context.router.push('/courses');
    }

     updateCourseState(event)  {
       
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({ course : course});
    }

    render() {
	
        return (
            <CourseForm 
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
                saving={this.state.saving} />
        );
    }
}


ManageCoursePage.propTypes = {
    course : PropTypes.object.isRequired,
    authors : PropTypes.array.isRequired,
    actions : PropTypes.object.isRequired,
    saving : PropTypes.bool
};

// pulls in the react router context so access is granted 
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const coursesArray = courses.filter(course => course.id == id);
    if(coursesArray) return coursesArray[0];
    return null;
}

function mapStateToProps(state, ownProps) { 

 let course = {
        id: '',
        title: '',
        watchHref: '',
        authorId: '',
        length: '',
        category: ''
    };

    //ownProps reference to own props
    const courseId = ownProps.params.id;
    if(courseId && state.courses.length > 0) {
        course = getCourseById(state.courses, courseId);
    }

    //authors map
  
    return { 
        course : course,
        authors : authorsFormattedForDropdown(state.authors)
    };
}

function mapDispatchToProps(dispatch) { 
    return { 
        actions : bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);