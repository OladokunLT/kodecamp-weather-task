import axios from "axios";

export default axios.create({
   base_URL:`https://api.openweathermap.org/data/2.5/weather?`
});