<template>
	<div>
		<!-- {{ test }} -->
		<img :src="test">
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	// data() {
	// 	return {
	// 		message
	// 	}
	// },
	computed: {
		...mapGetters([
			'requesting',
			'error',
			'test'
		])
	},
	mounted() {
		this.$store.dispatch('test');
	},
	// components: {
	// 	BContentTopItem
	// }
	

}
</script>

<style lang="stylus" scoped>
	
</style>