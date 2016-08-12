import React from 'react';
import expect from 'expect';
import { mount, shallow}  from 'enzyme';
import {TestUtils} from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) { 
    const props = { 
        course : {}, saving: saving, errors: {}, 
        onSave: () => {},
        onChange: () => {}
    };
    //shallor only renders one layer deep 
    return (shallow(<CourseForm {...props}/>));
}
describe('CourseForm via react enzyme', function(){ 
    it('renders form and h1', function() { 
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1); 
        expect(wrapper.find('h1').text()).toEqual('Manage Course'); 
    });

    it('save button is labeled "Save"', function() { 
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save'); 
    });

    it('save button is labeled "Saving..."', function() { 
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving..'); 
    });
});