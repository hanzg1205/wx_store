<template>
    <div>
a
    </div>
</template>
<script>
// export default {
//     props:{

//     },
//     components:{

//     },
//     data(){
//         return {
//         }
//     },
//     computed:{

//     },
//     methods:{
// getAvaterInfo: function (cardInfo) {//cardInfo是传入的信息参数，按实际需要。
//     wx.showLoading({ title: '生成中...',mask: true,});
//     var that = this;
//     if (cardInfo.CardInfo.Avater) {
//       wx.downloadFile({
//         url: '图片路径',
//         success: function (res) {
//           wx.hideLoading();
//           if (res.statusCode === 200) {
//             var avaterSrc = res.tempFilePath;
//             that.getQrCode(avaterSrc, cardInfo);
//           }else{
//             wx.showToast({
//               title: '头像下载失败！',
//               icon:'none',
//               duration: 2000,
//               success:function(){
//                 that.getQrCode(avaterSrc = "", cardInfo);//回调另一个图片下载
//               }
//             })
//           }
//         }
//       })
//     } else {
//       wx.hideLoading();
//       that.getQrCode(avaterSrc = "", cardInfo);//回调另一个图片下载
//     }
//   },

//   getQrCode: function (avaterSrc, cardInfo) {
//     wx.showLoading({ title: '生成中...', mask: true, });
//     var that = this;
//     if (cardInfo.CardInfo.QrCode) {
//       wx.downloadFile({
//         url: cardInfo.CardInfo.QrCode,
//         success: function (res) {
//           wx.hideLoading();
//           if (res.statusCode === 200) {
//             var codeSrc = res.tempFilePath;
//             that.sharePosteCanvas(cardInfo, avaterSrc, codeSrc);//真正的绘图方法
//           } else {
//             wx.showToast({
//               title: '二维码下载失败！',
//               icon: 'none',
//               duration: 2000,
//               success: function () {
//                 var codeSrc  = "";
//                 that.sharePosteCanvas(cardInfo, avaterSrc, codeSrc);//真正的绘图方法
//               }
//             })
//           }
//         }
//       })
//     } else {
//       wx.hideLoading();
//      var codeSrc  = "";
//       that.sharePosteCanvas(cardInfo, avaterSrc, codeSrc);//真正的绘图方法
//     }
//   },



//   sharePosteCanvas: function (cardInfo, avaterSrc, codeSrc) {
//     wx.showLoading({
//       title: '生成中...',
//       mask: true,
//     })
//     var that = this;
//     const ctx = wx.createCanvasContext('myCanvas');
//     var width = "";
//     wx.createSelectorQuery().select('#canvas-container').boundingClientRect(function (rect) {
//       var height = rect.height;
//       var right = rect.right;
//       width = rect.width * 0.8;
//       var left = rect.left + 5;
//       ctx.setFillStyle('#fff');
//       ctx.fillRect(0, 0, rect.width, height);

//       //头像
//       if (avaterSrc) {
//         ctx.drawImage(avaterSrc, left, 20, width, width);
//         ctx.setFontSize(14);
//         ctx.setFillStyle('#fff');
//         ctx.setTextAlign('left');
//       }

//       if (cardInfo.TagList.length > 0) {
//         ctx.fillText(cardInfo.TagList[0].TagName, left + 20, width - 4); //标签
//         const metrics = ctx.measureText(cardInfo.TagList[0].TagName); //测量文本信息
//         ctx.stroke();
//         ctx.rect(left + 10, width - 20, metrics.width + 40, 25);
//         ctx.setFillStyle('rgba(255,255,255,0.4)');
//         ctx.fill();
//       }

//       if (cardInfo.CardInfo.Name) {
//         ctx.setFontSize(14);
//         ctx.setFillStyle('#000');
//         ctx.setTextAlign('left');
//         ctx.fillText(cardInfo.CardInfo.Name, left, width + 60); //姓名
//       }

//       if (cardInfo.CardInfo.Position) {
//         ctx.setFontSize(12);
//         ctx.setFillStyle('#666');
//         ctx.setTextAlign('left');
//         ctx.fillText(cardInfo.CardInfo.Position, left, width + 85); //职位
//       }

//       if (cardInfo.CardInfo.Mobile) {
//         ctx.setFontSize(12);
//         ctx.setFillStyle('#666');
//         ctx.setTextAlign('left');
//         ctx.fillText(cardInfo.CardInfo.Mobile, left, width + 105); //电话
//       }

//       if (cardInfo.CardInfo.Company) {
//         // 公司名称
//         const CONTENT_ROW_LENGTH = 24; // 正文 单行显示字符长度
//         let [contentLeng, contentArray, contentRows] = that.textByteLength(cardInfo.CardInfo.Company, CONTENT_ROW_LENGTH);
//         ctx.setTextAlign('left');
//         ctx.setFillStyle('#000');
//         ctx.setFontSize(10);
//         let contentHh = 22 * 1;
//         for (let m = 0; m < contentArray.length; m++) {
//           ctx.fillText(contentArray[m], left, width + 150 + contentHh * m);
//         }
//       }

//       //  绘制二维码cardInfo.CardInfo.QrCode
//       if (codeSrc) {
//         ctx.drawImage(codeSrc, left + 150, width + 40, width / 3, width / 3)
//         ctx.setFontSize(10);
//         ctx.setFillStyle('#000');
//         ctx.setTextAlign('right');
//         ctx.fillText("微信扫码或长按识别", left + 235, width + 150);
//       }

//     }).exec()

//     setTimeout(function () {
//       ctx.draw(); 
//     //    这里有个需要注意就是，这个方法是在绘制完成之后在调用，不然容易其它被覆盖。
//       wx.hideLoading();
//     }, 1000)

//   },

// textByteLength(text, num) { // text为传入的文本  num为单行显示的字节长度
//     let strLength = 0; // text byte length
//     let rows = 1;
//     let str = 0;
//     let arr = [];
//     for (let j = 0; j < text.length; j++) {
//       if (text.charCodeAt(j) > 255) {
//         strLength += 2;
//         if (strLength > rows * num) {
//           strLength++;
//           arr.push(text.slice(str, j));
//           str = j;
//           rows++;
//         }
//       } else {
//         strLength++;
//         if (strLength > rows * num) {
//           arr.push(text.slice(str, j));
//           str = j;
//           rows++;
//         }
//       }
//     }
//     arr.push(text.slice(str, text.length));
//     return [strLength, arr, rows] //  [处理文字的总字节长度，每行显示内容的数组，行数]
//   },

// //点击保存到相册
//   saveShareImg: function () {
//     var that = this;
//     wx.showLoading({
//       title: '正在保存',
//       mask: true,
//     })
//     setTimeout(function () {
//       wx.canvasToTempFilePath({
//         canvasId: 'myCanvas',
//         success: function (res) {
//           wx.hideLoading();
//           var tempFilePath = res.tempFilePath;
//           wx.saveImageToPhotosAlbum({
//             filePath: tempFilePath,
//             success(res) {
//               wx.showModal({
//                 content: '图片已保存到相册，赶紧晒一下吧~',
//                 showCancel: false,
//                 confirmText: '好的',
//                 confirmColor: '#333',
//                 success: function (res) {
//                   if (res.confirm) { }
//                 },
//                 fail: function (res) { }
//               })
//             },
//             fail: function (res) {
//               wx.showToast({
//                 title: res.errMsg,
//                 icon: 'none',
//                 duration: 2000
//               })
//             }
//           })
//         }
//         });
//           }, 1000);
//        }






//     },
//     created(){

//     },
//     mounted(){

//     }
// }
</script>
<style scoped lang="">

</style>