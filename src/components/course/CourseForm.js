import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({ course, allAuthors, onSave, onChange, loading, errors }) => { 
    return(
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={error.title} />
                
                <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                onChange={onChange}
                options={allAuthors}
                error={error.authorId} />

                <TextInput
                name="catergory"
                label="Catergory"
                value={course.catergory}
                onChange={onChange}
                error={error.catergory} />

                <TextInput
                name="length"
                label="Length"
                value={course.length}
                onChange={onChange}
                error={error.length} />

                <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={error.title} />

                <input 
                type="submit"
                disabled={loading}
                value={loading ? 'Saving..' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}
                />

        </form>
    );
};

CourseForm.propTypes = { 
    course : React.PropTypes.object.isRequired,
    allAuthors : React.PropTypes.array,
    onSave:  React.PropTypes.func,
    onChange:  React.PropTypes.func,
    loading:  React.PropTypes.bool,
    errors:  React.PropTypes.object,
};

export default CourseForm;