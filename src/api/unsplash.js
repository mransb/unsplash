import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9jWFCnngv33EbOSivve8pjPXY8ZyRWm3hvpJYIrx6TI",
  },
});
