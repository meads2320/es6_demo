import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const SelectInput = ({ name,label,onChange,defaultOption,value, error, options }) => { 

     let wrapperClass= 'form-group';
        if(error && error.length > 0) {
            wrapperClass += " " + 'has-error';
        }   
        return (
           <div className={wrapperClass}>
                    <label htmlFor={name}>{label}</label>
                    <div className="field">
                        <select 
                        className="form-control" 
                        name={name} 
                        onChange={onChange}
                        value={value} >
                        <option value="">{defaultOption}</option>
                        {options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })
                        }
                        </select>
                        {error && <div className="alert alert-danger">{error}</div>}
                     </div>
            </div>
        );
};

 SelectInput.propTypes = {
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        error: PropTypes.string,
        options : PropTypes.arrayOf(PropTypes.object),
        defaultOption : PropTypes.array
};

export default SelectInput;