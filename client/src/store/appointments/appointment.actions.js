import axios from "axios";
// import { routerActions } from "connected-react-router";

const API_URL = process.env.API_URL || "http://localhost:4000";

const GET_ALL_APPOINTMENTS = "GET_ALL_APPOINTMENTS";
const POST = "POST";

export const APPOINTMENT_ACTIONS = {
  GET_ALL_APPOINTMENTS,
  POST
}


const getAppointments = appointments => ({
  type: APPOINTMENT_ACTIONS.GET_ALL_APPOINTMENTS,
  appointments
});

const attemptGetAppointments = dispatch => {
  axios.get(`${API_URL}/appointments`)
    .then(res => {
      console.log(res);
      dispatch(getAppointments(res.data));
      // dispatch(routerActions.push("/appointments"));
    })
    .catch(err => console.log(err))
}



export const appointmentActions = {
  attemptGetAppointments,
  getAppointments
};