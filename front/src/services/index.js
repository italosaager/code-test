import axios from "axios";

const base_url = 'http://localhost:3005/api'

export const service = {

    getClients: async () => {
        return await axios.get(`${base_url}/list-users`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    },
    createClient: async (name, email, telefone, eixoX, eixoY) => {
        const newClient =
        {
            "nome": name,
            "email": email,
            "telefone": telefone,
            "eixo_x": eixoX,
            "eixo_y": eixoY
        }
        return await axios.post(`${base_url}/create-client`, newClient, {headers: {'Content-Type': 'application/json'}})
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    },
    calculateRoute: async () => {
        return await axios.get(`${base_url}/calculate-route`)
        .then(response => response.data)
        .catch(error => {
            throw error;
        })
    }
};