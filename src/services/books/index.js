import axios from "axios";

export const getBooks = () => {
    return axios.get(`${process.env.REACT_APP_SITE}/books`);
}