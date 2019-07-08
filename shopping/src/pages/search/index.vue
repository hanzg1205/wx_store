<template>
    <div class="search">
        <header class="header">
            <div class="search-input">
                <image src="/static/images/search2.png"></image>
                <input type="text" placeholder="搜索">
            </div>
            <div class="cancel">取消</div>
        </header>
        <main class="main">
            <div class="history">
                <div class="top">
                    <span>历史搜索</span>
                    <image src="/static/images/del.png"></image>
                </div>
                <div class="list">
                    <span>儿童装</span>
                    <span>双肩包</span>
                    <span>皮鞋</span>
                    <span>皮鞋</span>
                    <span>儿童装</span>
                    <span>双肩背包</span>
                    <span>皮鞋</span>
                </div>
            </div>
            <div class="content">
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
            
        }
    },
    components: {
        SearchList
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

