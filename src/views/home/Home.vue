<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<recommend-view :recommends="recommends"></recommend-view>
		<feature-view></feature-view>
		<tab-control class="tab-control"
		 :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
		<goods-list :goods="showGoods"></goods-list>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	
	import HomeSwiper from './childComps/HomeSwiper'
	import RecommendView from './childComps/RecommendView'
	import FeatureView from './childComps/FeatureView'
	import TabControl from 'components/content/tabControl/TabControl'
	import GoodsList from 'components/content/goods/GoodsList'
	import GoodsListItem from 'components/content/goods/GoodsListItem'
	
	import {getHomeMultidata, getHomeGoods} from 'network/home'
	export default {
		name: "Home",
		components: {
			NavBar,
			HomeSwiper,
			RecommendView,
			FeatureView,
			TabControl,
			GoodsList,
			GoodsListItem
		},
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					"pop": {page: 0, list: []},
					"new": {page: 0, list: []},
					"sell": {page: 0, list: []}
				},
				//设置一个变量来保存默认的，默认设置成pop页面内容
				currentType: 'pop'
			}
		},
		computed: {
			showGoods() {
				return this.goods[this.currentType].list
			}
		},
		created() {
			//请求多个数据
			this.getHomeMultidata()

			//请求商品数据
			this.getHomeGoods('pop')
			this.getHomeGoods('new')
			this.getHomeGoods('sell')
		},
		methods: {
			/**
			 * 事件监听相关方法
			 */
			tabClick(index) {
				switch(index) {
					case 0:
					this.currentType = 'pop'
					break
					case 1:
					this.currentType = 'new'
					break
					case 2:
					this.currentType = 'sell'
					break
				}
			},
			
			
			
			/**
			 * 网络请求相关
			 */
			//请求多个数据
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
			},
			//请求商品数据
			getHomeGoods(type) {
				const page = this.goods[type].page + 1;
				getHomeGoods(type, page).then(res => {
					this.goods[type].list.push(...res.data.list),
					this.goods[type].page += 1
				})
			}
		}
	}
</script>

<style>
	#home {
		padding-top: 44px;
	}
	.home-nav {
		background-color: var(--color-tint);
		color: white;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 10;
	}
	.tab-control {
		position: sticky;
		top: 44px;
		background-color: #FFFFFF;
		z-index: 9;
	}
</style>
