import { METHODS } from "http";
import { User } from "../@types/users";

class UserService {
    baseUrl: string
    constructor() {
        this.baseUrl = 'http://localhost:3004/users'
    }

    async get() {
        const result = await fetch(this.baseUrl);
        const user = await result.json();
        return user;
    }
    async getById(id: string | number) {
        try {
            const url = `${this.baseUrl}/${id}`;
            const result = await fetch(url);
            const user = await result.json();
            return user
        } catch (error) {
            return error;
        }
    }
    async post(user: User) {
        try {
            await fetch(this.baseUrl, {
                body: JSON.stringify(user),
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
            return "Cadastrado com sucesso!"
        } catch (error) {
            return error
        }
    }
    async update(id: string | number, user: User) {
        const url = `${this.baseUrl}/${id}`;

        try {
            await fetch(url, {
                body: JSON.stringify(user),
                method: 'PUT',
                headers: { 'Content-type': "application/json; charset=UTF-8" }
            })
            return "Usuário alterado com sucesso!"
        } catch (error) {
            return error
        }
    }
    async delete(id: string | number) {
        const url = `${this.baseUrl}/${id}`;
        try {
            await fetch(url, {
                method: 'DELETE',
                headers: { 'Content-type': "application/json; chartset=UTF-8" }
            })
            return "Usuário deletado com sucesso!"
        } catch (error) {
            return error;
        }
    }
}

export default new UserService