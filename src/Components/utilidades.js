import axios from "axios";

export async function getCats() {
    return (await axios.get("http://localhost:3000/images")).data;
}
