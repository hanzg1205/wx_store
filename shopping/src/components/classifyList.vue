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
            <dl v-for="item in classifyList" :key="item.pid">
                <dt>
                    <image :src="item.mainImgUrl"></image>
                </dt>
                <dd>
                    <h3>{{item.title}}</h3>
                    <div class="price"> 
                        <p>￥<span>{{item.salesPrice}}</span></p>
                        <div>
                            <label>￥{{item.vipPrice}}</label>
                            <span>赚￥{{item.earnMoney}}</span>
                        </div>                      
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
        classifyList:{
            type: Array,
            default: []
        },
        handleTabFn: {
            type: Function,
            default: ()=>{}
        }    
    },
    methods: {
        handleNav(index){
            this.idx = index;
            if(index == 2){
                if(this.sortFlag){
                    this.updateSortType(3);
                    this.sortFlag = false;
                }else{
                    this.updateSortType(4);
                    this.sortFlag = true;
                }       
            }else{
                this.updateSortType(index+1);
            }
            this.handleTabFn();
        },
        ...mapMutations({
            updateSortType: 'classify/updateSortType'
        })
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
                        width:100%;
                        align-items:flex-end;
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
                        div{
                            display: flex;
                            align-items:flex-end;
                            margin-top:10rpx;
                            label{
                                font-size:22rpx;
                                color:#a87831;
                                padding:5rpx;
                            }
                            span{
                                background:#ffe8ed;
                                color:#fc5d7b;
                                margin-left:10rpx;
                                font-size:22rpx;
                                padding:5rpx;
                            }
                        }
                    }
                }
            }           
        }
    }
</style>

