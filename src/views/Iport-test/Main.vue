<template>
  <h2 class="intro-y text-lg font-medium mt-10">Gestion navires</h2>
  <div class="grid grid-cols-12 gap-6 mt-5">
    <div
      class="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2"
    >
      <div class="flex w-full sm:w-auto">
        <div class="w-48 relative text-slate-500">
         
        </div>
      
      </div>
      <div class="hidden xl:block mx-auto text-slate-500">
        Showing 1 to 10 of 150 entries
      </div>
      <div class="w-full xl:w-auto flex items-center mt-3 xl:mt-0">
    
        <Dropdown>
        
          
          <select @change="GetNavireByport" class="form-select box ml-2" v-model="portselectionne">
          <option
        v-for="port in Listport"
        :value="port"
      >
        {{port.nom}}
      </option>
        </select>
        </Dropdown>
      </div>
    </div>
    <div class="container my-5">
    <modale :revele="revele" :toggleModale="toggleModale" :valideralert="valideralert" :Navire="Navireselectionner"></modale>
  </div>
  
    <div class="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
      <div class="flex items-center justify-center space-x-2" v-if="cherchenavire" >
  <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
  <div class="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

      <table class="table table-report -mt-2" v-else="cherchenavire">
        <thead>
          <tr>
           
            <th class="whitespace-nowrap">#Id</th>
            <th class="whitespace-nowrap">NOM</th>
            <th class="whitespace-nowrap">LAT</th>
            <th class="whitespace-nowrap">LON</th>
            <th class="whitespace-nowrap">
              <div class="pr-16">SPEED</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(navire, index) in Listnavire "
            :key="index"
            class="intro-x"
          >
            <td class="w-10">
              {{navire.id}}
            </td>
            <td class="w-40 !py-4">
            
              {{navire.SHIPNAME}}
            </td>
            <td class="w-40">
            
              {{navire.LAT}}
            </td>
            <td class="text-center">
          
              {{navire.LON}}
            </td>
            <td>
                <div class="whitespace-nowrap">                           {{navire.SPEED}}

</div>
                <div class="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                 km
                </div>
             
            </td>
          
            <td class="table-report__action"  @click="toggleModale(navire)">
              <div class="flex justify-center items-center">
                <a  
                  class="flex items-center text-primary whitespace-nowrap mr-5"
                  href="javascript:;"
                >
                  <CheckSquareIcon class="w-4 h-4 mr-1"/> View Details
                </a>
            
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
  <Modal
    :show="deleteConfirmationModal"
    @hidden="deleteConfirmationModal = false"
  >
    <ModalBody class="p-0">
      <div class="p-5 text-center">
        <XCircleIcon class="w-16 h-16 text-danger mx-auto mt-3" />
        <div class="text-3xl mt-5">Are you sure?</div>
        <div class="text-slate-500 mt-2">
          Do you really want to delete these records? <br />This process cannot
          be undone.
        </div>
      </div>
      <div class="px-5 pb-8 text-center">
        <button
          type="button"
          @click="deleteConfirmationModal = false"
          class="btn btn-outline-secondary w-24 mr-1"
        >
          Cancel
        </button>
        <button type="button" class="btn btn-danger w-24">Delete</button>
      </div>
    </ModalBody>
  </Modal>
</template>

<script setup>


import { ref } from "vue";
import { UsePortGestion } from "@/stores/port-gestion";
import { UseNavireGestion } from "@/stores/navire-gestion";
import Modale from "./ModalVue.vue";

const portgestion = UsePortGestion();
const naviregestion = UseNavireGestion();
let revele=ref(false)
function valideralert(){
//     this.circleOptions[this.indexalertselected]={
// strokeColor: "#FF0000",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#FF0000",
//         fillOpacity: 0.35,
// }
toggleModale()
  }
function toggleModale(navire) {


      Navireselectionner.value[0]= {
          lat:   parseFloat(navire.LAT),
          lng: parseFloat(navire.LON),
        };
       

      revele.value = !revele.value;
      
    }
let Navireselectionner=ref([{ lat:    0,
          lng: 0,}])
let portselectionne=ref({});
let Listport=ref([{}])
let navireselectionne=ref({});
let Listnavire=ref([{}])
// let showselect=false
Listport.value= await portgestion.GetAllPort
console.warn(Listport)
Listnavire.value= await naviregestion.GetAllNavire
console.warn(Listnavire)
navireselectionne=Listnavire[0]
portselectionne=Listport[0]

//
let cherchenavire=ref(false);
async function GetNavireByport(){
  cherchenavire.value=true
  console.warn("portselectionne.port_traffic_id")

  console.warn(portselectionne.port_traffic_id)

//   http://localhost:8000/api/GetNavireByPort/portselectionne.port_traffic_id
  Listnavire.value= await naviregestion.GetAllNavireByPort('http://localhost:8000/api/GetNavireByPort/'+portselectionne.port_traffic_id)
  cherchenavire.value=false
// navireselectionne=Listnavire[0]
  // console.warn(portselectionne)
  // console.warn(navireselectionne)
  // portselectionne


};
</script>
