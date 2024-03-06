import React from 'react';

const Test = () => {
    return React.createElement(
        'div',
        null,
        React.createElement('h1', null, '부모 패키지야ABCD')
    );
};

export default Test;
