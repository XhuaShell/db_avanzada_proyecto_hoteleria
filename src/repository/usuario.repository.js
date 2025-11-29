import bcrypt, { compare } from "bcrypt";
import { pool } from "./config/pg.config";
import { SALT_ROUNDS } from "../config";
import { Validation } from "../validation";

export class UserRepository {
    constructor() {}

    static async findById(id) {
        const result = await pool.query("SELECT * FROM users WHERE id = ?", [
            id,
        ]);
        const row = result.rows[0];
        return row ? new User(row.id, row.username, row.password) : null;
    }

    static async findByUsername(username) {
        const result = await pool.query(
            "SELECT * FROM users WHERE username = $1",
            [username]
        );
        const row = result.rows[0];
        return row ? new User(row.id, row.username, row.password) : null;
    }

    static async create({ password, username }) {
        Validation.username(username);
        Validation.password(password);

        if (await this.findByUsername(username))
            throw new Error("The user has already been created");

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        const result = await pool.query(
            "INSERT INTO users (username, password) VALUES ($1, $2)",
            [username, hashedPassword]
        );

        return result.rowCount === 1 ? this.findByUsername(username) : null;
    }

    static async login({ username, password }) {
        Validation.username(username);
        Validation.password(password);

        const userFound = await this.findByUsername(username);
        if (!userFound) throw new Error("The username not exist in the system");

        const isValid = await bcrypt.compare(password, userFound.password);
        if (!isValid) throw new Error("The password is invalid");

        return userFound;
    }
}
