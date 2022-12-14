import { defineStore } from "pinia";
import axios from 'axios'

export const UseNavireGestion = defineStore("Naviregestion", {
  state: () => ({
    ListeNavire:[{}],
  }),
  getters: {
    async GetAllNavire(state) {
      console.warn("debut navire")
     await axios
      .get('http://localhost:8000/api/GetAllNavire')
      .then((response) => {
        state.ListeNavire=response.data.allnavire
      })
      return state.ListeNavire
    },

    

  },
  actions: {
    async GetAllNavireByPort(url) {
      // console.warn("uel navire")
      // console.warn(url)
     await axios
      .get(url)
      .then((response) => {
        this.ListeNavire=response.data.allnavire
      })
      console.warn("store test ")
      console.warn( this.ListeNavire);
      return this.ListeNavire
    },
    // addPort(port) {
      
    // // },
  },
});

