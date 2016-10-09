import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute  } from 'react-router'


import NavigationLayout from './components/layout/NavigationLayout'

import uploadFilePage  from './components/File/uploadFile'
import currentFilePage from './components/File/currentFile'
import allFilesPage    from './components/File/allFilesList'

import signInPage from './components/Authentication/signin'
import signUpPage from './components/Authentication/signup'

import NotFoundPage from './components/NotFound'


render((
    <Router history={browserHistory}>
        <Route component={NavigationLayout} path='/'>
            <IndexRoute component={uploadFilePage} />
            <Route component={allFilesPage} path='files' />
            <Route component={signInPage} path='signin' />
            <Route component={signUpPage} path='signup' />
            <Route component={currentFilePage} path=':fileToken' />
            <Route component={NotFoundPage} path='*' />
        </Route>
    </Router>
), document.getElementById('app'))
