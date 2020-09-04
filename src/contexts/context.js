import React from 'react';

const AppContext = React.createContext({
    students: [],
    removeStudent: () => {},
    addStudent: () => {},
    randomizeHouse: () => {}
})

export default AppContext;