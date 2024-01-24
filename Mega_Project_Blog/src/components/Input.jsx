import { forwardRef, useId } from "react"
import PropTypes from 'prop-types';


const Input = forwardRef( function Input({
    label,
    type = 'text',
    className = '',
    ...props
},ref){
    const id = useId
    return(
        <div className="w-full">
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
}
)

Input.propTypes = {
    label: PropTypes.node.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
};

export default Input