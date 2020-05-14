<template>
	<div class="controls">
		<div v-for="(option, cnt) in options">
			<side-control 
				:key="option"
				:optionName="option"
				:optionValues="optionValues[cnt]"
			>
			</side-control>
		</div>
	</div>
</template>

<script>
	import SideControl from './SideControl'

	export default {
		name: 'Control',
		components: {SideControl},
		props: {
	      options: {
	        default:null
	      },
	      optionValues: {
	        default: null
	      }
      	},
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
.controls {
  position: absolute;
  width: 20%;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: lightgrey;
}	
</style>