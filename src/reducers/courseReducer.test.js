import expect from 'expect';
import { mount, shallow}  from 'enzyme';
import courseReducer from './courseReducer';
import * as actions from '../actions/courseActions';

describe('Course Reducer', function() { 
    it('should add course when passed _CREATE_COURSE_SUCCESS', function() {
    //arrange 
    const initialState = [
        {title: 'A'},
        {title: 'B'}
    ];

    const newCourse = { title: 'C'};

    const action = actions.createCourseSuccess(newCourse);

    //act 
    const newState = courseReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('A');
    expect(newState[1].title).toEqual('B');
     expect(newState[2].title).toEqual('C');
    });

    it('should add course when passed _UPDATE_COURSE_SUCCESS', function() {
    //arrange 
    const initialState = [
        {title: 'A', id: '1'},
        {title: 'B' , id: '2'},
        {title: 'C' , id: '3'}
    ];

    const course = {title: 'BBBBB' , id: '2'};

    const action = actions.updateCourseSuccess(course);

    //act 
    const newState = courseReducer(initialState, action);

    const updatedCourse = newState.find(a => a.id == course.id);
    const untouchedCourse = newState.find(a => a.id == '1');


    //assert
        expect(newState.length).toEqual(3);
        expect(updatedCourse.title).toEqual('BBBBB');
        expect(untouchedCourse.title).toEqual('A');
    });
});
