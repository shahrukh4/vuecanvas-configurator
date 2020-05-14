<template>
	<div class="body">
		<div>
			<canvas 
				id="myCanvas"
				ref="vuecanvas"
				resize="true"
				width="800" height="800"
				@mouseup="handleMouseUp"
				@mousemove="drawSnake"
				@mousedown="handleMouseDown"
			>			
			</canvas>
			<button @click="clickme">clickme</button>
		</div>
	</div>
</template>

<script>
	import {Point, Path} from "paper";

	export default {
		name: 'DrawingPad',
		data() {
			return {
				canvas: null,
				ctx: null,
				painting:false,
				points: 25,
				length: 35,
				path: null
			}
		},
		mounted() {
			this.canvas = this.$refs.vuecanvas
			this.ctx = this.canvas.getContext("2d")

			this.canvas.height = 250,
			this.canvas.width = 1000;

			this.path = new Path({
				strokeColor: '#E4141B',
				strokeWidth: 20,
				strokeCap: 'round'
			});
			
//console.log(this.path, Path)
			var start = view.center / [10, 1];
			for (var i = 0; i < this.points; i++)
				path.add(start + new Point(i * length, 0));
		},
		methods: {
			clickme() {
				this.path = new Path({
					strokeColor: '#E4141B',
					strokeWidth: 20,
					strokeCap: 'round'
				});
			},
			drawSnake(event) {
				this.path.firstSegment.point = event.point;
				
				for (var i = 0; i < this.points - 1; i++) {
					var segment = this.path.segments[i];
					var nextSegment = segment.next;
					var vector = segment.point - nextSegment.point;
					vector.length = length;
					nextSegment.point = segment.point - vector;
				}
				
				this.path.smooth({ type: 'continuous' });
			},
			handleMouseDown(event) {
				this.path.fullySelected = true;
				this.path.strokeColor = '#e08285';
			},
			handleMouseUp(event) {
				this.path.fullySelected = false;
				this.path.strokeColor = '#e4141b';
			}
		}
	}
</script>

<style scoped>
	#myCanvas {
		background-color: grey;
	}
</style>