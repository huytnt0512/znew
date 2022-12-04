import axios from "axios";

const URL = "https://638b70a281df38ab3469438a.mockapi.io";

const getListLeftService = () => axios.get(`${URL}/LeftContent`);

const createLeftService = (payload) =>
  axios.post(`${URL}/LeftContent`, payload);

const updateLeftService = (payload) =>
  axios.put(`${URL}/LeftContent/${payload.id}`, payload);

const deleteLeftService = (id) => axios.delete(`${URL}/LeftContent/${id}`);

const getDetailLeftService = (id) => axios.get(`${URL}/LeftContent/${id}`);

const getMultipleDetailLeftService = (payload) =>
  axios.all(
    payload.map((id) =>
      axios.get(`${URL}/LeftContent/${id}`).then((response) => response.data)
    )
  );

const getFilterLeftService = () => axios.get(`${URL}/LeftContent?display=true`);
export {
  getListLeftService,
  createLeftService,
  updateLeftService,
  deleteLeftService,
  getDetailLeftService,
  getMultipleDetailLeftService,
  getFilterLeftService,
};
