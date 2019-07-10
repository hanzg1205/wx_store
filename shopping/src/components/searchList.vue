<template>
    <div class="searchList">
        <nav class="nav">
            <span 
                v-for="(item,index) in navList" 
                :class="index===idx?'active':''" 
                :key="index"
                @click="handleNav(index)"
            >{{item}}</span>
        </nav>
        <div class="list">
            <dl v-for="(item,index) in searchList" :key="index">
                <dt>
                    <image :src="item.mainImgUrl"></image>
                </dt>
                <dd>
                    <h3>{{item.title}}</h3>
                    <div class="price"> 
                        <p>￥<span>{{item.salesPrice}}</span></p>
                        <label>￥{{item.vipPrice}}</label>
                    </div>
                </dd>
            </dl>
        </div>    
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data(){
        return {
            navList: ['综合','最新','价格'] ,
            idx: 0 ,
            sortFlag: true // true：价格升序 ，false: 价格降序
        }
    },
    props: {
        handleTabFn: {
            type: Function,
            default: ()=>{}
        } ,
        searchList: {
            type: Array,
            default: []
        }
    },
    methods: {
        ...mapMutations({
            updateQueryType: 'search/updateQueryType',
            updateQuerySort: 'search/updateQuerySort'
        }),
        handleNav(index){
            this.idx = index;
            if(index == 2){
                if(this.sortFlag){
                    this.updateQuerySort('asc');
                    this.sortFlag = false;
                }else{
                    this.updateQuerySort('desc');
                    this.sortFlag = true;
                }       
            }else{
                this.updateQuerySort('asc');
            } 
            this.updateQueryType(index); 
            this.handleTabFn();
        }
    }
}
</script>

<style lang="scss" scoped>
    .searchList{
        background: #f7f7f7;
        .nav{
            display: flex;
            height:80rpx;
            line-height: 80rpx;
            justify-content: space-around;
            background: #fff;
            span{
                font-size: 28rpx;
            }
            .active{
                color: skyblue;
            }
        }
        .list{
            display: flex;
            flex-wrap: wrap;
            padding: 20rpx 15rpx; 
            justify-content: space-between;
            dl{
                width:49%;
                height:500rpx;
                background:#fff;
                border-radius:10rpx;
                display:flex;
                flex-direction:column;
                margin-top:15rpx;
                padding: 10rpx 0;
                dt{
                    display: flex;
                    height:400rpx;
                    text-align: center;
                    align-items: center;
                    image{
                        display:block;
                        width:295rpx;
                        height:277rpx;
                        margin:0 auto;
                    }
                }
                 dd{
                    width:100%;
                    flex:1;
                    h3{
                        font-size:26rpx;
                        padding-left:10rpx;
                        color:#323a45;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap;
                        line-height: 48rpx;
                    }
                    .price{
                        display: flex;
                        width:100%;
                        align-items:flex-end;
                        label{
                            font-size:22rpx;
                            color:#a87831;
                        }
                        p{
                            display:flex;
                            align-items:flex-end;
                            padding-left:6rpx;
                            font-size:28rpx;
                            color:#fc5d7b;
                            span{
                                font-size:36rpx;
                            }
                        }
                    }
                }
            }           
        }
    }
</style>

