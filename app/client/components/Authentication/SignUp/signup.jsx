import React from 'react'

import './Signup.css'

const SignUpPage = () => {
    return (
        <div className="container">
            <form className="registerForm"
                action="/api/signup"
                method="post"
                name="registerForm">

                <ul>
                    <li>
                        <h2>Регистрация</h2>
                    </li>
                    <li>
                        <label for="name">* Имя</label>
                        <input type="text" name="username" required/>
                    </li>
                    <li>
                        <label for="email">* Email</label>
                        <input type="email" name="registerEmail" required/>
                    </li>
                    <li>
                        <label for="password">* Пароль</label>
                        <input type="password" name="password" required/>
                    </li>
                    <li>
                        <button className="btn btn-success" type="submit">Зарегистрироваться</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default SignUpPage
