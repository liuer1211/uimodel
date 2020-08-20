
//     byDateAddDay: (date, day) => { // day 为0 者加一年
//         if (day === 0) {
//             let ndate = new Date(date.setFullYear(date.getFullYear() + 1) - (24 * 60 * 60 * 1000))
//             return dateUtil.formatDateStr(ndate);
//         } else {
//             return dateUtil.formatDateStr(new Date(date.getTime() + day * 24 * 60 * 60 * 1000))
//         }
//     },
//     byMonthAddDay: (day, month) => {
//         var date = new Date(); // 当前时间
//         var date1 = new Date(date.getTime() + day * 24 * 60 * 60 * 1000); // 当前时间 +n天
//         var date2 = dateUtil.formatDateStr(new Date(date1.setMonth(date1.getMonth() + month))); // 当前时间 +n天 +n月
//         return date2
//     },

// var myDate = new Date();
// myDate.getYear(); //获取当前年份(2位)
// myDate.getFullYear(); //获取完整的年份(4位,1970-????)
// myDate.getMonth(); //获取当前月份(0-11,0代表1月)         // 所以获取当前月份是myDate.getMonth()+1;
// myDate.getDate(); //获取当前日(1-31)
// myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
// myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
// myDate.getHours(); //获取当前小时数(0-23)
// myDate.getMinutes(); //获取当前分钟数(0-59)
// myDate.getSeconds(); //获取当前秒数(0-59)
// myDate.getMilliseconds(); //获取当前毫秒数(0-999)
// myDate.toLocaleDateString(); //获取当前日期
// var mytime=myDate.toLocaleTimeString(); //获取当前时间
// myDate.toLocaleString( ); //获取日期与时间


// 转化日期格式yyyy-MM-dd
function formatDateStr(date) {
    let MM = '',
        DD = '';
    if (date.getMonth() > 8) { // 9  -》 代表十月份，两位数不需要加0 ，获取当前月份(0-11,0代表1月)
        MM = (date.getMonth() + 1).toString();
    } else {
        MM = '0' + (date.getMonth() + 1).toString();
    }
    if (date.getDate() > 9) { // 10 后的不加0
        DD = date.getDate().toString();
    } else {
        DD = '0' + date.getDate().toString();
    }
    return date.getFullYear() + '-' + MM + '-' + DD;
}

// 转化日期格式 yyyy-MM-dd hh:mm:ss
var formatDateTime = function (date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h=h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second=date.getSeconds();
    second=second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
};

// 通过身份证获取出生日期
function getBirthdayFromIdCard (idCard) {
    let birthday = '';
    if (idCard != null && idCard !== '') {
        if (idCard.length === 15) {
            birthday = '19' + idCard.substr(6, 6);
        } else if (idCard.length === 18) {
            birthday = idCard.substr(6, 8);
        }
        birthday = birthday.replace(/(.{4})(.{2})/, '$1-$2-');
    }
    return birthday;
}

// 日期比较
function compareDate(date1, date2) { // 日期比较
    let strValue1 = date1.split('-')
    let date1Temp = new Date(strValue1[0], parseInt(strValue1[1], 10) - 1, parseInt(strValue1[2], 10))
    let strValue2 = date2.split('-')
    let date2Temp = new Date(strValue2[0], parseInt(strValue2[1], 10) - 1, parseInt(strValue2[2], 10))
    if (date1Temp.getTime() === date2Temp.getTime()) {
        return 0// date1等于date2
    } else if (date1Temp.getTime() > date2Temp.getTime()) {
        return 1// date1大于date2
    } else {
        return -1// date1小于date2
    }
}

// 加年
function byDateAddYear(code) {
    let date = new Date()
    let ndate = new Date(date.setFullYear(date.getFullYear() + code))
    return formatDateStr(ndate);
}

// 加月
function byDateAddMonth(m) {
    let date = new Date()
    let ndate = new Date(date.setMonth(date.getMonth() + m ))
    return formatDateStr(ndate);
}

// 加天
function byDateAddDay(day) {
    let date = new Date()
    // console.log(date.getTime()) // 都能获得时间戳  Date.now()
    let ndate = new Date(date.getTime() + day * 24 * 60 * 60 * 1000)
    return formatDateStr(ndate);
}

// 加年月日
function byYmdAddDate(day, month, year){
    var date = new Date(); // 当前时间
    var date1 = new Date(date.getTime() + day * 24 * 60 * 60 * 1000 ); // 当前时间 +n天
    var date2 = new Date(date1.setMonth(date1.getMonth() + month)); // 当前时间 +n天 +n月
    var data3 = new Date(date2.setFullYear(date2.getFullYear()+ year)) // 当前时间 +n天 +n月 +n年
    return formatDateStr(data3)
}
