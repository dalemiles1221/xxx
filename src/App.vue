<template>
	<div id="app">
		<h1 class="text-muted"
			align="center">Life is Fantastic</h1>
		<div style="text-align:center;width:100%;margin-bottom:50px;">
			<button type="button"
				class="btn btn-success btn-lg btn-block"
				@click="currentTab = 2">
				Not Safe
			</button>
			<button type="button"
				class="btn btn-success btn-lg btn-block"
				@click="currentTab = 1">
				Safe
			</button>
		</div>
		<component :is="currentComponent"></component>
	</div>
</template>

<script>
import Safe from './components/safe'
import Not from './components/not'
export default {
	name: 'App',
	components: {
		Safe,
		Not
	},
	data() {
		return {
			currentTab: 2
		}
	},
	computed: {
		currentComponent() {
			if (this.currentTab === 1) {
				return Safe
			} else if (this.currentTab === 2) {
				return Not
			}
			return Not
		}
	}
}
</script>

<style></style>
