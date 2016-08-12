import React from 'react';
import expect from 'expect';
import { mount, shallow}  from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', function()  {
    it('sets error message when trying to save an empty form', function()  {

        let course = {
        id: '',
        title: '',
        watchHref: '',
        authorId: '',
        length: '',
        category: ''
        };

        const props = {
            actions : { saveCourse: () => { return Promise.reslove(); }},
            course: course,
            authors: []
        };

        //mount searches all of children too 
        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');

    });
});