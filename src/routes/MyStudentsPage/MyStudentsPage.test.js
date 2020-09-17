import React from 'react';
import ReactDOM from 'react-dom';
import MyStudentsPage from './MyStudentsPage'
import {BrowserRouter} from 'react-router-dom'

it('renders without crashing',() => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <MyStudentsPage />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})