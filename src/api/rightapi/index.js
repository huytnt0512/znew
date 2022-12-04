import axios from "axios";

const URL = "https://638b70a281df38ab3469438a.mockapi.io";

const getListRightService = () => axios.get(`${URL}/RightContent`);

const createRightService = (payload) =>
  axios.post(`${URL}/RightContent`, payload);

const updateRightService = (payload) =>
  axios.put(`${URL}/RightContent/${payload.id}`, payload);

const deleteRightService = (id) => axios.delete(`${URL}/RightContent/${id}`);

const getDetailRightService = (id) => axios.get(`${URL}/RightContent/${id}`);

const getMultipleDetailRightService = (payload) =>
  axios.all(
    payload.map((id) =>
      axios.get(`${URL}/RightContent/${id}`).then((response) => response.data)
    )
  );

const getFilterRightService = () =>
  axios.get(`${URL}/RightContent?display=true`);
export {
  getListRightService,
  createRightService,
  updateRightService,
  deleteRightService,
  getDetailRightService,
  getMultipleDetailRightService,
  getFilterRightService,
};
