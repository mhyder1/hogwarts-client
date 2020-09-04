import React from 'react';

const AppContext = React.createContext({
    students: [],
    removeStudent: () => {},
    addStudent: () => {}
})

export default AppContext;