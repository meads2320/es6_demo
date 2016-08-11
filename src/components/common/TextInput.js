import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const TextInput = function(name,label,onChange,placeholder,value, error) { 

     let wrapperClass= 'form-group';
        if(error && error.length > 0) {
            wrapperClass += " " + 'has-error';
        }   
        return (
           <div className={wrapperClass}>
                    <label htmlFor={name}>{label}</label>
                    <div className="field">
                        <input type="text" 
                        className="form-control" 
                        name={name} 
                        onChange={onChange}
                        placeholder={placeholder} 
                        value={value} />
                        {error && <div className="alert alert-danger">{error}</div>}
                     </div>
            </div>
        );
};

 TextInput.propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        error: PropTypes.string
};

export default TextInput;