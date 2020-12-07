import axios from "axios";

async function getImages() {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
        params: {
            count: 10
        },
        headers: {
            Authorization: "Client-ID C-Wt2vPcFiOGgLrL_7sM8Ho4A-QfBU0PwBMRHMQyIO8"
        }
    });

}

export default getImages;