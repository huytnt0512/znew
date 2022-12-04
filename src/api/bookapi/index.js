import axios from "axios";

const URL = "https://638b70a281df38ab3469438a.mockapi.io";

const getListBookService = () => axios.get(`${URL}/Books`);

const createBookService = (payload) => axios.post(`${URL}/Books`, payload);

const updateBookService = (payload) =>
  axios.put(`${URL}/Books/${payload.id}`, payload);

const deleteBookService = (id) => axios.delete(`${URL}/Books/${id}`);

const getDetailBookService = (id) => axios.get(`${URL}/Books/${id}`);

const getMultipleDetailBookService = (payload) =>
  axios.all(
    payload.map((id) =>
      axios.get(`${URL}/Books/${id}`).then((response) => response.data)
    )
  );

const getFilterBookService = () => axios.get(`${URL}/Books?display=true`);
export {
  getListBookService,
  createBookService,
  updateBookService,
  deleteBookService,
  getDetailBookService,
  getMultipleDetailBookService,
  getFilterBookService,
};
