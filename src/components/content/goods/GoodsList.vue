<template>
	<div class="goods">
		<goods-List-item v-for="item in goods" :goods-item="item"></goods-List-item>
	</div>
</template>

<script>
	import GoodsListItem from './GoodsListItem'
	
	export default {
		name: "GoodsList",
		components: {
			GoodsListItem
		},
		props: {
			goods: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style>
	.goods {
		display: flex;
		/* flex-wrap 包裹会根据宽度来显示多少个 */
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px;
	}
</style>
