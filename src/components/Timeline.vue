<template>
	<div class="timeline">
		<!-- <div class="inner-inline row-line"></div> -->
		<div class="date-list" @touchstart="showMask" @touchMove="getMove">
			<template v-for="node in timeNodes">
				<div class="year-item">
					<p class="line up inner-inline">
						<span class="node node-year" v-text="node.year"></span>
						<span class="vertical-up-line"></span>
					</p>
					<template v-for="month in node.months">
						<p class="line inner-inline">
							<span class="vertical-line"></span>
							<span class="node node-month" v-text="month.month"></span>
						</p>
						<!-- <p> -->
							<span class="node node-day inner-inline" v-for="day in month.days" v-text="day"></span>
						<!-- </p> -->
					</template>
				</div>
			</template>
		</div>
		<div class="time-current">

		</div>
	</div>
</template>
<script type="text/javascript">
//一次最多显示10天的量，可以是不连续的
	export default {
		data(){
			return {
				currentY:'',
				currentM:'',
				currentD:'',
				length:10,
				timeNodes:[
					{
						year: 18,
						months:[
							{
								month:1,
								days:[1,3,17,26]
							},
							{
								month:5,
								days:[4,6,10]
							}
						]
					},
					{
						year: 17,
						months:[
							{
								month:1,
								days:[3,5]
							},
							{
								month:3,
								days:[13,15,27]
							},
							{
								month:6,
								days:[4,19]
							},
							// {
							// 	month:10,
							// 	days:[2,4,8,17,29]
							// }
						]
					}
				]
			}
		},
		mounted:function(){

		},
		methods:{
			showMask:function(){

			},
			getMove:function(){

			}
		}
	}
</script>
<style lang="stylus">
*
	padding:0
	margin:0
	list-style:none
	box-sizing:border-box
body
	background black
.timeline
	width: 100%
	height: 200px
	padding-top:50px
	overflow:hidden
	.row-line
		height:0px
		width: 100%
		border:5px solid #fff
		border-radius:5px
		box-sizing:border-box
	.date-list
		box-sizing:border-box
		position:relative
		padding:10px
		width:9999px
		.year-item
			float:left
			&:after
				content:''
				clear:both
	.node
		color: white
		width: 30px
		font-size:16px
		text-align:left
		font-weight:bold
	.node-year
		color: #27d643
		font-size:20px
		position:absolute

	.node-month
		color: #f2ec52
		font-size:18px
	.node-day
		color: white
.inner-inline
	display:inline-block
	*
		display:inline-block
.line
	position:absolute
	width:5px
	height:30px
	top:30px
	.vertical-line
		width:3px
		height:100%
		background:#fff
		&:after
			position:absolute
			content:''
			width:0px
			height:0px
			border:5px solid #fff
			border-radius:50%
			bottom:0
			left:-2.5px
.line.up
	top:-30px
	.vertical-up-line
		width:3px
		height:100%
		background:#fff
		&:before
			position:absolute
			content:''
			width:0px
			height:0px
			border:5px solid #fff
			border-radius:50%
			background:#fff
			left:-2.5px
	.node-year
		display:block
		bottom:30px
		transform:translateX(-50%)
</style>
