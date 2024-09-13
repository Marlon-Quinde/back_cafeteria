import bcrypt from "bcrypt"

export const hastPassword = async (pass: string) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(pass, salt)
}
export const verificarPassword = async (password: string, hashPasword: string) => {
    return bcrypt.compareSync(password, hashPasword);
}