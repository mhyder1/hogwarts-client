import React from 'react';
import ReactDOM from 'react-dom';
import CreatePageForm from './CreatePageForm'
import {BrowserRouter} from 'react-router-dom'

it('renders without crashing',() => {
    const div = document.createElement('div')
    ReactDOM.render(
    <BrowserRouter>
        <CreatePageForm />
    </BrowserRouter>, div)
    ReactDOM.unmountComponentAtNode(div)
})