import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute  } from 'react-router'

import AppNavigation from './components/AppNavigation'

import UploadFilesPage from './components/File/UploadFiles'
import currentFilePage from './components/File/CurrentFile'
import allFilesPage    from './components/File/AllFilesList'

import signInPage from './components/Authentication/SignIn'
import signUpPage from './components/Authentication/SignUp'

import NotFoundPage from './components/NotFound'


render((
    <Router history={browserHistory}>
        <Route component={AppNavigation} path='/'>
            <IndexRoute component={UploadFilesPage} />
            <Route component={allFilesPage} path='files' />
            <Route component={signInPage} path='signin' />
            <Route component={signUpPage} path='signup' />
            <Route component={currentFilePage} path=':fileToken' />
            <Route component={NotFoundPage} path='*' />
        </Route>
    </Router>
), document.getElementById('app'))
