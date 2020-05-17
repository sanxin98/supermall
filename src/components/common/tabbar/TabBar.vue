<template>
	<div id="tab-bar">
	<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "TabBar"
	}
</script>

<style>
	#tab-bar {
		display: flex;
		background-color: #f2f2f2;
		position: fixed;
		left: 0px;
		right: 0px;
		bottom: 0px;
		/* 写阴影效果 */
		box-shadow: 0px -2px 3px rgba(1, 1, 1, .2);
	}

</style>
