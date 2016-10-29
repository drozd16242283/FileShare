import React from 'react'

import './signup.css'

const SignUpPage = React.createClass({
    render() {
        return (
            <div className="container">
                <form className="registerForm"
                        method="post"
                        name="registerForm">

                        <ul>
                            <li>
                                <h2>Регистрация</h2>
                            </li>
                            <li>
                                <label for="name">* Имя</label>
                                <input type="text" name="name" required/>
                            </li>
                            <li>
                                <label for="email">* Email</label>
                                <input type="text" name="email" required/>
                            </li>
                            <li>
                                <label for="password">* Пароль</label>
                                <input type="password" name="password" required/>
                            </li>
                            <li>
                                <label for="password_confirm">* Повторите</label>
                                <input type="password" name="password_confirm" required/>
                            </li>
                            <li>
                                <button className="btn btn-success" type="submit">Зарегистрироваться</button>
                            </li>
                        </ul>
                </form>
            </div>
        )
    }
})

export default SignUpPage
