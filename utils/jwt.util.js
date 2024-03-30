import jwt from 'jsonwebtoken'

export const createJwtToken = (payload) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE_TIME
    })
    return token
}

export const jwtVerify = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
}
