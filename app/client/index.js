import React from 'react'
import { render } from 'react-dom'
import { browserHistory, hashHistory, Router, Route, IndexRoute  } from 'react-router'


import NavigationLayout from './components/layout/NavigationLayout'

import uploadFilePage  from './components/uploadFile'
import currentFilePage from './components/currentFile'
import allFilesPage    from './components/allFiles'

import signInPage from './components/Authentication/signin'
import signUpPage from './components/Authentication/signup'


render((
    <Router history={browserHistory}>
        <Route component={NavigationLayout}>
            <Route path="/" component={uploadFilePage}/>
            <Route path="/file/:fileId" component={currentFilePage}/>
            <Route path="/files" component={allFilesPage}/>
            <Route path="/signin" component={signInPage}/>
            <Route path="/signup" component={signUpPage}/>
        </Route>
    </Router>
), document.getElementById('app'))
