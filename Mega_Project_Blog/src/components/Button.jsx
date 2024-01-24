import PropTypes from 'prop-types';

function Button({
    children,
    type = 'text',
    bgColor = 'bg-blue-600',
    textColor = 'white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} type={type} {...props}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string, 
    bgColor: PropTypes.string, 
    textColor: PropTypes.string, 
    className: PropTypes.string, 
};

export default Button;
