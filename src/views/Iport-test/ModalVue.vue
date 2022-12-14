  <!-- <template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modal-dialog">

    <div class="modale card" style="top: 0%;">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
      <GMapMap 
      :center= "{lat:35, lng:7}"
      :zoom="4"
      map-type-id="satellite"
    :options="{
      zoomControl: false,
      scrollwheel: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: false,
    }"
    style="width: 25vw; height: 76vh; margin: 0; top: 30%;"
    ref="map"
  >


  </GMapMap>      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" v-on:click="toggleModale" data-bs-dismiss="modal">Close</button>
        <button type="button"  class="btn btn-primary" v-on:click="valideralert"  data-bs-dismiss="modal">oui </button>
      </div>
    </div>
  </div>
  
      </div>
</template> -->
<template>
	<div class="popup" v-if="revele">
		<div class="popup-inner">
			<slot />*
      <div class="modale card" style="top: 0%;">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>

      <div class="" style="    margin-top: 0.25rem;
    margin-left: -50px;
    margin-bottom: -33px;
    margin-right: -49px;">
            <div class="box sm:flex">
             
              <div
                class="px-8 py-12 flex flex-col justify-center flex-1 border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-darkmode-300 border-dashed"
              >
                <div class="text-slate-500 text-xs">Nom:</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">test</div>
                  <Tippy
                    tag="div"
                    class="text-danger flex text-xs font-medium cursor-pointer ml-2"
                    content="2% Lower than last month"
                  >
                    2%
                    <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
                <div class="text-slate-500 text-xs mt-5">Localisation</div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">2</div>
                  <Tippy
                    tag="div"
                    class="text-danger flex text-xs font-medium cursor-pointer ml-2"
                    content="0.1% Lower than last month"
                  >
                    0.1%
                    <ChevronDownIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
                <div class="text-slate-500 text-xs mt-5">
Speed                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">$72.000</div>
                  <Tippy
                    tag="div"
                    class="text-success flex text-xs font-medium cursor-pointer ml-2"
                    content="49% Higher than last month"
                  >
                    49% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
                <div class="text-slate-500 text-xs mt-5">
Status                </div>
                <div class="mt-1.5 flex items-center">
                  <div class="text-base">$54.000</div>
                  <Tippy
                    tag="div"
                    class="text-success flex text-xs font-medium cursor-pointer ml-2"
                    content="52% Higher than last month"
                  >
                    52% <ChevronUpIcon class="w-4 h-4 ml-0.5" />
                  </Tippy>
                </div>
             
              </div>
            </div>
          </div>
      <GMapMap  
      :center= "Navire[0]"
      :zoom="5"
      map-type-id="satellite"
    :options="{
      zoomControl: false,
      scrollwheel: true,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: false,
    }"
    style="width: 29vw; height: 55vh; margin: 0; top: 30%;    margin-right: -48px;
    margin-left: -49px;"
    ref="map"
  >
  <GMapMarker id="lololo"
  :key="index"
    v-for="(vertex, index) in Navire"
    :position="vertex"
    :draggable="false"
    @click="openMarker(index)"
    :icon="{
      url:
        // 'https://cdn-icons-png.flaticon.com/512/2979/2979602.png',
        'https://help.marinetraffic.com/hc/article_attachments/115003477691/MT_Square_BG-Transparent_white-blue.png',
      scaledSize: { width: 23, height: 23 },
    }"
   
  >

  <GMapInfoWindow
          :closeclick="true"
          @closeclick="openMarker(null)"
          :opened="openedMarkerID === index"
      >
        <div>Navire {{ index }} </div>
      </GMapInfoWindow>
  
    <!-- <GMapInfoWindow hidden>
        {{
         index
        }}
    </GMapInfoWindow> -->
  </GMapMarker>

  </GMapMap> 
  <div class="modal-footer">
        <button type="button" class="btn btn-secondary" v-on:click="toggleModale" data-bs-dismiss="modal">Close</button>
        <button type="button"  class="btn btn-primary" v-on:click="valideralert"  data-bs-dismiss="modal">oui </button>
      </div>
</div>

  
		</div>
	</div>
</template>

<script>
  import { ref } from "vue";
export default {
  name: "ModalVue",
  props: ["revele", "toggleModale",'valideralert','Navire'],
  data() {
    return {
      path:[
        {
          lat:    34.116280,
          lng: -8.441460,
        },
       
      ],
      
      
    }
    
  },
  setup(props) {
    console.warn(props.Navire[0])
  }
};
let openedMarkerID=ref(null);
function  openMarker(id) {
       openedMarkerID = id
    }
</script>


<style scoped>
.popup {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.2);
	
	display: flex;
	align-items: center;
	justify-content: center;
	/* .popup-inner {
		background: #FFF;
		padding: 32px;
	} */
}

.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 30%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>