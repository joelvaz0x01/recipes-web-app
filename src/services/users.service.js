import http from "../http-common";

class UsersDataService {

    register(data) {
        return http.post("/users/register", data);
    }

    login(data) {
        return http.post("/users", data);
    }

    getAll() {
        return http.get("/users");
    }

    get(id) {
        return http.get(`/users/${id}`);
    }

    update(id, data) {
        return http.put(`/users/${id}`, data);
    }

    delete(id) {
        return http.delete(`/users/${id}`);
    }

    deleteAll() {
        return http.delete(`/users`);
    }

    isAdmin(id) {
        return http.get(`/users/admin/${id}`);
    }
}

export default new UsersDataService();
