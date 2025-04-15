import Navigo from "navigo";
import { camelCase } from "lodash";
import * as store from "./store";
import { header, nav, main, footer } from "./components";
import axios from "axios";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
      ${header(state)}
      ${nav(store.nav)}
      ${main(state)}
      ${footer()}
    `;
}

router.hooks({
  before: (done, match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    switch (view) {
      case "home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
          )
          .then((response) => {
            console.log("response.data", response.data);
            store.home.weather = {
              city: response.data.name,
              temp: response.data.main.temp,
              feelsLike: response.data.main.feels_like,
              description: response.data.weather[0].main,
            };
            done();
          })
          .catch((err) => {
            console.log(err);
            done();
          });
        break;
      //switch statement for chakra axios
      case "meditation":
        axios.get(`${process.env.CHAKRASURI}`).then((response) => {
          console.log("This is a axios request", response.data);
        });
      default:
        done();
    }
  },

  already: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);
  },
  after: (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    if (view === "contact") {
      document.querySelector("#contactform").addEventListener("submit", (event) => {
        event.preventDefault();
        // Get the form element
        const inputList = event.target.elements;
        console.log("Input Chakra List", inputList);
        const requestData = {
          name: inputList.name.value,
          chakra: inputList.chakra.value,
          email: inputList.email.value
        };
        // Log the request body to the console
        console.log("request Body", requestData);
        axios
          // Make a POST request to the API to create a new pizza
          .post(`${process.env.CAPSTONEURL}/contact`, requestData)
          .then((response) => {
          })
          // If there is an error log it to the console
          .catch((error) => {
            console.log("It puked", error);
          });
      });
    };
    router.updatePageLinks();
    document.querySelector(".fa-bars").addEventListener("click", () => {
    document.querySelector("nav > ul").classList.toggle("hidden--mobile");
 //   });
});

router
  .on({
    "/": () => render(),
    "/:view": function(match) {
      const view = match?.data?.view ? camelCase(match.data.view) : "home";
      if (view in store) {
        render(store[view]);
      } else {
        render(store.viewNotFound);
        console.log(`View ${view} not defined`);
      }
    },
  })
  .resolve();
