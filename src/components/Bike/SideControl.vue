<template>
	<div class="productoption">
		<button class="productoption_header" @click="toggleAccordion">
        	{{optionName | upperCaseFirst}}
        </button>
        <div class="productoption_body" :ref="optionName">
        	<button 
        		class="productoption_btn"
        		v-for="value in optionValues"
        		@click.prevent="emitColorChangeEvent(value)"
    		>
        		{{value}}
        	</button>
        </div>
	</div>
</template>

<script>
	import {TweenMax, Power2} from 'gsap'

	export default {
		name: 'SideControl',
		props: {
	      optionName: {
	        default:null
	      },
	      optionValues: {
	        default: null
	      },
	      keyIndex: {
	        default: null
	      }
      	},
      	data() {
      		return {
    			accordionOpen: false,
      			bodyDefaultHeight: null
      		}
      	},
      	created(){
      		window.Event.$on('accordionOpenEvent', () => {
      			if(this.accordionOpen){
      				TweenMax.to(this.$refs[this.optionName], 0.05, {height: 0, ease: Power2.easeOut})
      				this.accordionOpen = false
      				this.$refs[this.optionName].style.visibility = 'hidden'
      			}
      		})
      	},
      	mounted() {
      		this.bodyDefaultHeight = this.$refs[this.optionName].clientHeight
      		this.$refs[this.optionName].style.height = 0
      		this.$refs[this.optionName].style.visibility = 'hidden'
      	},
      	methods: {
      		/*
		    * When a user clicks the the title of the control we 
		    * want to open the accordion, unless it is already
		    * open in which case we want to close it
		    */
      		toggleAccordion(e) {
      			//If accordion is not open
      			if(!this.accordion) {
      				this.accordion = true
      				this.$refs[this.optionName].style.visibility = 'visible'
      		
      				TweenMax.to(this.$refs[this.optionName], 0.05, {
      					height: this.bodyDefaultHeight,
      					ease: Power2.easeOut
      				})

      				/**
      				 * Emit event when the accordion open up
      				 */
      				window.Event.$emit('accordionOpenEvent')

      				/**
      				 * Emit even to Bike View to change section as per need
      				 */
      				window.Event.$emit('moveCamera', {
      					detail: this.optionName
      				})
      				
      				//return
      			}

      			else{
      				TweenMax.to(this.$refs[this.optionName], 0.05, {
	      				height: 0,
	      				ease: Power2.easeOut
	      			})

	      			this.accordion = false
	      			//this.$refs[this.optionName].style.visibility = 'hidden'
      			}
      		},
      		emitColorChangeEvent(color) {
      			window.Event.$emit('changeColor', {
      				detail: {
      					color,
      					meshName: this.optionName,
      				}
      			})
      		}
      	},
      	filters: {
      		upperCaseFirst(string) {
      			return string[0].toUpperCase()+ string.slice(1)
      		}
      	}
	}
</script>

<style scoped>
.productoption_header {
    cursor: pointer;
	font-size: 1em;
	padding: 10px 0 10px 0;
	background: #000;
	color: antiquewhite;
	display: block;
	width: 100%;
	border: 1px solid #222;
}
.productoption_body {
	overflow: hidden;
	transition: height 0.5s ease-out;
}
.productoption_btn {
    cursor: pointer;
	display: block;
	color: inherit;
	text-align: center;
	margin: 0 auto;
	border: none;
	background: transparent;
	text-decoration: none;
	padding: 10px 0 10px 0; 
	font-size: 1em;
}
.productoption { 
  background-color: #111;
  border: 1px solid #000;
  color: #fff;
}
</style>