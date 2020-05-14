<template>
	<div class="body">
		<canvas 
		id="canvas"
		ref="vuecanvas"
		@mouseup="finishedPainting"
		@mousemove="draw"
		@mousedown="startPainting"
		>			
		</canvas>
	</div>
</template>

<script>
	export default {
		name: 'DrawingPad',
		data() {
			return {
				canvas: null,
				ctx: null,
				vueCanvas: null,
				painting:false
			}
		},
		mounted() {
			this.canvas = this.$refs.vuecanvas
			this.ctx = canvas.getContext("2d")

			this.canvas.height = 250,
			this.canvas.width = 1000;

			this.vueCanvas = this.ctx;

			this.ctx.rect(20, 20, 150, 100);
			this.ctx.stroke();
		},
		methods: {
			startPainting(e) {
		      this.painting = true;
		      //this.draw(e)
		    },
		    finishedPainting() {
		      this.painting = false;
		      this.ctx.beginPath()
		    },
		    draw(e) {
		    	if(!this.painting) return 
	    		
	    		// this.ctx.lineWidth = 3
	    		// this.ctx.lineCap = 'round'
	    		// this.ctx.lineTo(e.clientX, e.clientY)
	    		// this.ctx.stroke()

	    		// this.ctx.beginPath()
	    		// this.ctx.moveTo(e.clientX, e.clientY)
		    }
		}
	}
</script>

<style scoped>
	#canvas {
		background-color: grey;
	}
</style>