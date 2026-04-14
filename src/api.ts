const API_KEY = "7d093a5478ef90c885ca8edad0128e53";
const BASE_URL = "https://v1.mma.api-sports.io";

export const apiFetch = (endpoint:string) => {
    return fetch(`${BASE_URL}${endpoint}`, {
        method: "GET",
        headers: {
            "x-apisports-key": API_KEY
        }
    }).then(res => res.json());
};