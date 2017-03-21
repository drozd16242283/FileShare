import React from 'react'

import './Signin.css'

const SignInPage = () => {
    return (
        <div className="container">
            <form className="loginForm"
                action="/api/signin"
                method="post"
                name="loginForm">

                <ul>
                    <li>
                        <h2>Войти</h2>
                    </li>
                    <li>
                        <label for="email">* Email</label>
                        <input type="email" name="email" required/>
                    </li>
                    <li>
                        <label for="password">* Пароль</label>
                        <input type="password" name="passwd" required/>
                        </li>
                        <li>
                            <button className="btn btn-success" type="submit">Войти</button>
                        </li>
                    </ul>
            </form>
        </div>
    )
}

export default SignInPage
