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
                    <span v-for="(item,index) in searchHistory" :key="index" @click="historyTab(item)">{{item}}</span>
                </div>
            </div>
            <div class="content" v-if="listFlag">
                <SearchList :handleTabFn="handleTabFn" :searchList="searchList"/>
            </div>
        </main>
    </div>
</template>

<script>
import SearchList from "@/components/searchList.vue";
import { mapActions, mapState } from 'vuex';
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
        ...mapState({
            searchList: state => state.search.searchList,
            queryType: state => state.search.queryType,
            querySort: state => state.search.querySort
        })
    },
    onShow(){
        this.listFlag = false ;
        this.historyFlag = true;
        this.searchInput = ''
    },
    methods: {
        ...mapActions({
            getSearchList: 'search/getSearchList'
        }),
        // 去搜索
        searchFn(){    
            if(this.searchHistory.length == 0){
                this.searchHistory.push(this.searchInput);
            }
            // 判断是否添加本条搜索到历史记录
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
            // 控制列表显示隐藏
            this.listFlag = true;
            this.historyFlag = false;
            // 调请求列表接口方法
            this.handleTabFn();
        },
        // 取消搜索
        cancelFn(){
            this.searchInput = '';
            this.listFlag = false;
            this.historyFlag = true;
        },
        // 删除历史记录
        delHistory(){
            this.searchHistory = [];
            wx.removeStorageSync('searchHistory');
        },
        // 获取搜索列表
        handleTabFn(){
            this.getSearchList({
                queryWord: this.searchInput,
                queryType: this.queryType,
                querySort: this.querySort,
                pageIndex: 1
            })
        },
        // 点击搜索历史按钮
        historyTab(item){
            this.searchInput = item;
            this.handleTabFn();
            // 控制列表显示隐藏
            this.listFlag = true;
            this.historyFlag = false;
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

