import React from 'react';
import expect from 'expect';

import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) { 
    let props = { 
        course : {}, saving: saving, errors: {}, 
        onSave: () => {},
        onChange: () => {}
    };
    //render the form 
    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    let output = renderer.getRenderOutput();

    return { 
        props,
        output,
        renderer
    };
}

describe('CourseForm via react test utils', function(){ 
    it('renders form and h1', function() { 
         const { output } = setup(false);
         expect(output.type).toBe('form'); 
         let [h1] = output.props.children;
         expect(h1.type).toBe('h1');   
    });

    it('save button is labeled "Save" when saving', function() { 
         const { output } = setup(false);
         
         const submitButton = output.props.children[5];
         expect(submitButton.props.value).toBe('Save');   
    });

     it('save button is labeled "Saving..." when saving', function() { 
         const { output } = setup(true);
         
         const submitButton = output.props.children[5];
         expect(submitButton.props.value).toBe('Saving..');   
    });

});