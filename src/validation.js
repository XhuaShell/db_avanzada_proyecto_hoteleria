
export class Validation {
    static username(username) {
        if (!username)
            throw new Error("The username is required to create a user");
        if (typeof username !== "string")
            throw new Error("The type username must be string");
        if (username.length < 3)
            throw new Error("The username length must be 3 characters long");
    }

    static password(password) {
        if (!password)
            throw new Error("The password is required to create a user");
        if (typeof password !== "string")
            throw new Error("The type username must be string");
        if (password.length < 3)
            throw new Error(
                "The password length must be at least 3 characters long"
            );
    }
}
