import axios from "axios";

const URL = "https://638b70a281df38ab3469438a.mockapi.io";

const getListMiddleService = () => axios.get(`${URL}/MiddleContent`);

const createMiddleService = (payload) =>
  axios.post(`${URL}/MiddleContent`, payload);

const updateMiddleService = (payload) =>
  axios.put(`${URL}/MiddleContent/${payload.id}`, payload);

const deleteMiddleService = (id) => axios.delete(`${URL}/MiddleContent/${id}`);

const getDetailMiddleService = (id) => axios.get(`${URL}/MiddleContent/${id}`);

const getMultipleDetailMiddleService = (payload) =>
  axios.all(
    payload.map((id) =>
      axios.get(`${URL}/MiddleContent/${id}`).then((response) => response.data)
    )
  );

const getFilterMiddleService = () =>
  axios.get(`${URL}/MiddleContent?display=true`);
export {
  getListMiddleService,
  createMiddleService,
  updateMiddleService,
  deleteMiddleService,
  getDetailMiddleService,
  getMultipleDetailMiddleService,
  getFilterMiddleService,
};
