import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const {text, type, modifier} = props;

    return (
        <button className={!modifier ? 'btn' : 'btn btn--' + modifier} type={type}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    modifier: PropTypes.string
}

export default Button;