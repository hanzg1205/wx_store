<template>
    <div class="search">
        <header class="header">
            <div class="search-input">
                <image src="/static/images/search2.png"></image>
                <input type="text" placeholder="搜索" confirm-type="search" v-model="searchInput" @confirm="searchFn">
            </div>
            <div class="cancel" @click="cancelFn">取消</div>
        </header>
        <main class="main">
            <div class="history" v-if="historyFlag">
                <div class="top">
                    <span>历史搜索</span>
                    <image src="/static/images/del.png" @click="delHistory"></image>
                </div>
                <div class="list">
                    <span v-for="(item,index) in searchHistory" :key="index">{{item}}</span>
                </div>
            </div>
            <div class="content" v-if="listFlag">
                <SearchList />
            </div>
        </main>
    </div>
</template>

<script>
import SearchList from "@/components/searchList.vue";
export default {
    data(){
        return {
            searchInput:'', // 输入框内容
            searchHistory: wx.getStorageSync('searchHistory')&&JSON.parse(wx.getStorageSync('searchHistory')) || [] ,// 历史记录
            listFlag: false ,// 控制列表是否显示
            historyFlag: true
        }
    },
    components: {
        SearchList
    },
    computed: {
        
    },

    methods: {
        searchFn(){
            if(this.searchHistory.length == 0){
                this.searchHistory.push(this.searchInput);
            }
            let flag = this.searchHistory.some(item=>{
                return item === this.searchInput;
            })
            if(!flag){
                this.searchHistory.push(this.searchInput);
            }
            wx.setStorage({
                key:"searchHistory",
                data:JSON.stringify(this.searchHistory)
            });
            this.listFlag = true;
            this.historyFlag = false;
        },
        cancelFn(){
            this.searchInput = '';
            this.listFlag = false;
            this.historyFlag = true;
        },
        delHistory(){
            this.searchHistory = [];
            wx.removeStorageSync('searchHistory');
        }
    }
}
</script>

<style lang="scss" scoped>
    .search{
        .header{
            height:90rpx;
            background: #f9f9f9;
            padding:0 30rpx;
            display: flex;
            align-items: center;
            .search-input{
                display: flex;
                align-items: center;
                background: #ededed;
                flex: 1;
                height:60rpx;
                border-radius:10rpx;
                padding:0 20rpx;
                image{
                    width:32rpx;
                    height:32rpx;
                    margin-right:20rpx;
                }
                input{
                    height:100%;
                    flex: 1;
                }
            }
            .cancel{
                margin-left:40rpx;
                line-height: 80rpx;
            }
        }
    }
    .main{   
        .history{
            padding:0 30rpx;
            .top{
                display: flex;
                height: 110rpx;
                line-height: 110rpx;
                justify-content: space-between;   
                align-items: center;
                image{
                    width:34rpx;
                    height:34rpx;
                } 
            }
            .list{
                display: flex;
                flex-wrap: wrap;
                span{
                    font-size:28rpx;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:#333;
                    padding:10rpx 38rpx 10rpx 34rpx;
                    background:#f5f5f4;
                    border-radius:12rpx;
                    margin-bottom:30rpx;
                    margin-right:28rpx;
                }
            }
        }
    }
</style>

