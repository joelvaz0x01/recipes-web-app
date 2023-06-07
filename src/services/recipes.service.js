import http from "../http-common";

class RecipesDataService {
    getAll() {
        return http.get("/recipes");
    }

    get(id) {
        return http.get(`/recipes/${id}`);
    }

    create(data) {
        return http.post("/recipes", data);
    }

    update(id, data) {
        return http.put(`/recipes/${id}`, data);
    }

    delete(id) {
        return http.delete(`/recipes/${id}`);
    }

    deleteAll() {
        return http.delete(`/recipes`);
    }

    findByName(name) {
        return http.post(`/recipes/search`, name);
    }
}

export default new RecipesDataService();
