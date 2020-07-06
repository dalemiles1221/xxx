<template>
	<div id="safe">
		<button type="button"
			class="btn btn-success btn-lg btn-block"
			@click="_randomUrl">
			点击随机切换
		</button>
		<div style="width:100%;display:flex;justify-content:center;">
			<video id="player"
				style="width:100%"
				ref="players"
				src="https://ssl-xiaoboke.cloud.okteto.net/video.php"
				controls
				preload
				autoplay
				webkit-playsinline='true'
				playsinline='true'
				x-webkit-airplay='true'
				x5-video-player-type='h5'
				x5-video-player-fullscreen='true'
				x5-video-ignore-metadata='true'
				controlslist="nodownload"
				poster="./img/bg.jpg"></video>
		</div>
	</div>
</template>

<script>
export default {
	name: 'safe',
	methods: {
		_randomUrl() {
			let timeStamp = +new Date()
			this.$refs.players.src = `https://ssl-xiaoboke.cloud.okteto.net/video.php?date=${timeStamp}`
		}
	}
}
</script>

<style>
</style>
