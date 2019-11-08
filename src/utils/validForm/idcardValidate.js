export function IdCardValidate(idcard){

  var Y, JYM;
  var S, M;
  const idcard_array = idcard.split('');
  //alert("idCheck");
  //身份号码位数及格式检验
  switch (idcard.length) {
    case 18:
      //18位身份号码检测
      //出生日期的合法性检查
      //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
      //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
      var ereg;
      if (parseInt(idcard.substr(6, 4)) % 4 === 0 || (parseInt(idcard.substr(6, 4)) % 100 === 0 && parseInt(idcard.substr(6, 4)) % 4 === 0)) {
        ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式
      } else {
        ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式
      }
      if (ereg.test(idcard)) {//测试出生日期的合法性
        //计算校验位
        S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
          + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
          + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
          + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
          + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
          + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
          + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
          + parseInt(idcard_array[7])
          + parseInt(idcard_array[8]) * 6
          + parseInt(idcard_array[9]) * 3;
        Y = S % 11;
        M = 'F';
        JYM = '10X98765432';
        M = JYM.substr(Y, 1);
        if (M == idcard_array[17].toUpperCase()) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
      break;
    default:
      return false;
      break;
  }

}
// export function IdCardValidate(idcard) {
//
//   var Y, JYM;
//   var S, M;
//   const idcard_array = idcard.split('');
//   //alert("idCheck");
//   //身份号码位数及格式检验
//   switch (idcard.length) {
//     case 18:
//       //18位身份号码检测
//       //出生日期的合法性检查
//       //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
//       //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
//       var ereg;
//       if (parseInt(idcard.substr(6, 4)) % 4 === 0 || (parseInt(idcard.substr(6, 4)) % 100 === 0 && parseInt(idcard.substr(6, 4)) % 4 === 0)) {
//         ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/; //闰年出生日期的合法性正则表达式
//       } else {
//         ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/; //平年出生日期的合法性正则表达式
//       }
//       if (ereg.test(idcard)) {//测试出生日期的合法性
//         //计算校验位
//         S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
//           + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
//           + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
//           + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
//           + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
//           + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
//           + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
//           + parseInt(idcard_array[7])
//           + parseInt(idcard_array[8]) * 6
//           + parseInt(idcard_array[9]) * 3;
//         Y = S % 11;
//         M = 'F';
//         JYM = '10X98765432';
//         M = JYM.substr(Y, 1);
//       }
//   }
// }

// const Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];    // 加权因子
// const ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];            // 身份证验证位值.10代表X
// /**
//  * @return {boolean}
//  */
// export function IdCardValidate(idCard) {
//   idCard = trim(idCard.replace(/ /g, ""));               //去掉字符串头尾空格
//   if (idCard.length === 15) {
//     return isValidityBrithBy15IdCard(idCard);       //进行15位身份证的验证
//   } else if (idCard.length === 18) {
//     let a_idCard = idCard.split("");                // 得到身份证数组
//     return !!(isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard));
//   } else {
//     return false;
//   }
// }
//
// /**
//  * 判断身份证号码为18位时最后的验证位是否正确
//  * @param a_idCard 身份证号码数组
//  * @return
//  */
// function isTrueValidateCodeBy18IdCard(a_idCard) {
//   let sum = 0;                             // 声明加权求和变量
//   if (a_idCard[17].toLowerCase() === 'x') {
//     a_idCard[17] = 10;                    // 将最后位为x的验证码替换为10方便后续操作
//   }
//   for ( var i = 0; i < 17; i++) {
//     sum += Wi[i] * a_idCard[i];            // 加权求和
//   }
//   let valCodePosition = sum % 11;                // 得到验证码所位置
//   return a_idCard[17] === ValideCode[valCodePosition];
// }
// /**
//  * 验证18位数身份证号码中的生日是否是有效生日
//  * @param idCard 18位书身份证字符串
//  */
// function isValidityBrithBy18IdCard(idCard18){
//   const year = idCard18.substring(6, 10);
//   const month = idCard18.substring(10,12);
//   const day = idCard18.substring(12,14);
//   const temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
// // 这里用getFullYear()获取年份，避免千年虫问题
//   return !(temp_date.getFullYear() !== parseFloat(year)
//     || temp_date.getMonth() !== parseFloat(month) - 1
//     || temp_date.getDate() !== parseFloat(day));
// }
// /**
//  * 验证15位数身份证号码中的生日是否是有效生日
//  * @param idCard15 15位书身份证字符串
//  * @return
//  */
// function isValidityBrithBy15IdCard(idCard15){
//   const year =  idCard15.substring(6,8);
//   const month = idCard15.substring(8,10);
//   const day = idCard15.substring(10,12);
//   const temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));
// // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
//   return !(temp_date.getYear() !== parseFloat(year)
//     || temp_date.getMonth() !== parseFloat(month) - 1
//     || temp_date.getDate() !== parseFloat(day));
// }
// //去掉字符串头尾空格
// function trim(str) {
//   return str.replace(/(^\s*)|(\s*$)/g, "");
// }
// // 根据身份证号对其进行性别的判定
//
// /**
//  * 通过身份证判断是男是女
//  * @param idCard 15/18位身份证号码
//  */
// export function maleOrFemalByIdCard(idCard){
//   idCard = trim(idCard.replace(/ /g, ""));        // 对身份证号码做处理。包括字符间有空格。
//   if(idCard.length===15){
//     if(idCard.substring(14,15)%2===0){
//       return 'female';
//     }else{
//       return 'male';
//     }
//   }else if(idCard.length ===18){
//     if(idCard.substring(14,17)%2===0){
//       return 'female';
//     }else{
//       return 'male';
//     }
//   }else{
//     return null;
//   }
// }