import { message } from 'antd'
import Crypto from 'crypto-js'
import generateId from '../utils/generateId'

const USERS_KEY = "pulseux_users"

function hashPassword(password) {
    return Crypto.SHA256(password).toString()
}

export function registerUser({ name, email, password }) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || []

    const userAlreadyExists = users.some(user => user.email === email)

    if (userAlreadyExists) {
        return {
            success: false,
            message: "Usuário já existe"
        }
    }

    const newUser = {
        id: generateId(),
        name,
        email,
        password: hashPassword(password)
    }

    users.push(newUser)

    localStorage.setItem(USERS_KEY, JSON.stringify(users))
    return { success: true, message: `Usuário criado` }
}

export function loginUser({ email, password }) {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || []

    const hashedPassword = hashPassword(password)

    const user = users.find(user => user.email === email && user.password === hashedPassword)

    if (!user) {
        return { success: false, message: "Email ou senha inválidos" }
    }

    localStorage.setItem("pulseux_logged_user", JSON.stringify(user))

    return { success: true, user }
}

export function logoutUser() {
    localStorage.setItem("pulseux_logged_user", null)
    
    if (getLoggedUser() == null) {
        return true
    } else{
        return false
    }
}

export function getLoggedUser() {
    return JSON.parse(localStorage.getItem("pulseux_logged_user"))
}