import { defineStore } from "pinia";
import axios from 'axios'

export const UsePortGestion = defineStore("Portgestion", {
  state: () => ({
    ListPort:[{}],
    etat:100,
  }),
  getters: {
    async GetAllPort(state) {
      console.warn("debut")
     await axios
      .get('http://localhost:8000/api/GetAllPort')
      .then((response) => {
        state.ListPort=response.data.AllPort
      })
      return state.ListPort

    },
     Getetat(state) {
      state.etat=3256;
      return  state.etat;
    },
  },
  actions: {
    addPort(port) {
      
    },
  },
});

