<template>
	<div class="bike">
		<BikeCanvas />
		<Control
			:options="optionNames"
			:optionValues="optionValues"
		/>
	</div>
</template>

<script>
	import BikeCanvas from '@/components/Bike/Bike.vue'
	import Control from '@/components/Bike/Control.vue'

	export default {
		name: 'Bike',
		components: {BikeCanvas, Control},
		data(){
			return {
				optionNames: [ 'frame', 'seat', 'waterbottle', 'handlebars' ],   
				optionValues: [
					[ 'white', 'red', 'blue', 'green' ],
					[ 'grey', 'white', 'black' ],
					[ 'grey', 'white', 'black' ],
					[ 'grey', 'white', 'black' ]
				]
			}
		}
	}
</script>

<style scoped>
.bike {
  text-align: center;
}
.bike {
  height  : 60vh;
  touch-action: none;
  padding-right: 20%;
}

.bike-logo {
  animation: bike-logo-spin infinite 20s linear;
  height: 80px;
}

.bike-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.bike-title {
  font-size: 1.5em;
}

.bike-intro {
  font-size: large;
}

@keyframes bike-logo-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>