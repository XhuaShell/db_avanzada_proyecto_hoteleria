export class User {
    #id;
    #username;
    #password;

    constructor(id, username, password) {
        this.#id = id;
        this.#username = username;
        this.#password = password;
    }

    get id() {
        return this.#id;
    }
    get password() {
        return this.#password;
    }
    get username() {
        return this.#username;
    }

    toJSON() {
        return {
            id: this.#id,
            username: this.#username,
        };
    }
}