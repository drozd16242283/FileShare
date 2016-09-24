import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute  } from 'react-router'


import NavigationLayout from './components/layout/NavigationLayout'

import uploadFilePage  from './components/uploadFile'
import currentFilePage from './components/currentFile'
import allFilesPage    from './components/allFiles'

import signInPage from './components/Authentication/signin'
import signUpPage from './components/Authentication/signup'

import NotFoundPage from './components/NotFound'



render((
    <Router history={browserHistory}>
        <Route component={NavigationLayout} path='/'>
            <IndexRoute component={uploadFilePage} />
            <Route component={currentFilePage} path='file/:fileId' />
            <Route component={allFilesPage} path='files' />
            <Route component={signInPage} path='signin' />
            <Route component={signUpPage} path='signup' />
        </Route>
    </Router>
), document.getElementById('app'))
