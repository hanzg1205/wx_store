<template>
    <div class="searchList">
        <nav class="nav">
            <span class="active">综合</span>
            <span>最新</span>
            <span>价格</span>
        </nav>
        <div class="list">
            <dl>
                <dt>
                    <image src="http://haitao.nos.netease.com/39a6a3f28170435eb767ae3188178c041560495052884jwvqgoxq11560.jpg"></image>
                </dt>
                <dd>
                    <h3>芙丽芳丝保湿修护柔润乳液15毫升1*1</h3>
                    <div class="price"> 
                        <p>￥<span>19.9</span></p>
                        <label>￥14.06</label>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <image src="http://haitao.nos.netease.com/39a6a3f28170435eb767ae3188178c041560495052884jwvqgoxq11560.jpg"></image>
                </dt>
                <dd>
                    <h3>芙丽芳丝保湿修护柔润乳液15毫升1*1</h3>
                    <div class="price"> 
                        <p>￥<span>19.9</span></p>
                        <label>￥14.06</label>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <image src="http://haitao.nos.netease.com/39a6a3f28170435eb767ae3188178c041560495052884jwvqgoxq11560.jpg"></image>
                </dt>
                <dd>
                    <h3>芙丽芳丝保湿修护柔润乳液15毫升1*1</h3>
                    <div class="price"> 
                        <p>￥<span>19.9</span></p>
                        <label>￥14.06</label>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <image src="http://haitao.nos.netease.com/39a6a3f28170435eb767ae3188178c041560495052884jwvqgoxq11560.jpg"></image>
                </dt>
                <dd>
                    <h3>芙丽芳丝保湿修护柔润乳液15毫升1*1</h3>
                    <div class="price"> 
                        <p>￥<span>19.9</span></p>
                        <label>￥14.06</label>
                    </div>
                </dd>
            </dl>
            <dl>
                <dt>
                    <image src="http://haitao.nos.netease.com/39a6a3f28170435eb767ae3188178c041560495052884jwvqgoxq11560.jpg"></image>
                </dt>
                <dd>
                    <h3>芙丽芳丝保湿修护柔润乳液15毫升1*1</h3>
                    <div class="price"> 
                        <p>￥<span>19.9</span></p>
                        <label>￥14.06</label>
                    </div>
                </dd>
            </dl>
        </div>
        
    </div>
</template>

<script>
export default {

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

