/*! The file is creted by lxa --Thu May 18 2017 14:15:04 GMT+0800 (中国标准时间) */
webpackJsonp([3],{3:function(i,t,n){function a(i,t,n){var a=n||$.trim($("#"+i).html());if((t=t||{})instanceof Array)for(var e=0;e<t.length;e++)a+='<option value="'+t[e]+'">'+t[e]+"</option>";else for(var e in t)a+='<option value="'+e+'">'+t[e].value+"</option>";$("#"+i).html(a)}function e(i,t,n,a,e,o,r){var l="";return i||t||n||(l=xei.getRandom(v)),a=a||xei.getRandom(s),e=e||xei.getRandom(u),o=o||xei.getRandom(d),r="man"==r?xei.getRandom([1,3,5,7,9]):"woman"==r?xei.getRandom([2,4,6,8,0]):xei.getRandom(10),l+=a+""+e+o+xei.fixNumber(xei.getRandom(100),2)+r,l+=xei.getIdCardLastChar(l)}function o(){for(var i,t=parseInt($("#make_idcard_count").val())||100,n="",a=0;a<t;a++)i=e(),n+=i+"："+r(i)+"\n";$("#idcard_list").html(n)}function r(i){var t="";if(18!=i.length)t="身份证长度必须是18位！";else{var n=xei.getIdCardLastChar(i);if(n!=i[17])t="身份证不合法，校验码错误，正确校验码为："+n;else{var a=i.substring(16,17)%2==0?"女":"男";t="籍贯："+c[i.substring(0,6)]+"，出身日期："+i.substring(6,10)+"年"+parseInt(i.substring(10,12))+"月"+parseInt(i.substring(12,14))+"日，性别："+a}}return t}n(0);var l=cityUtil.getCityMap(all_city_codes),c=cityUtil.getAllCuntys(all_city_codes),s=[],u=[],d=[],v=[];!function(){for(var i=1950;i<2020;i++)s.push(i);for(var i=1;i<13;i++)u.push(xei.fixNumber(i,2));for(var i=1;i<32;i++)d.push(xei.fixNumber(i,2));for(var i in c)v.push(i);a("year_list",s),a("month_list",u),a("date_list",d)}(),function(){a("province_list",l,'<option value="">--省(随机)--</option>'),$("#province_list").on("change",function(){a("city_list",(l[this.value]||{}).children,'<option value="">--市(随机)--</option>')}),$("#city_list").on("change",function(){var i=this.value,t={};i&&(t=l[i.substring(0,2)+"0000"].children[i].children),a("county_list",t,'<option value="">--县(随机)--</option>')})}(),$("#btn_validate").on("click",function(){var i=$("#input_idcard").val();$("#validate_result").html(r(i))}),$("#btn_random_idcard").on("click",function(){$("#input_idcard").val(e())}),$("#btn_batch_make_idcard").on("click",o),o()}},[3]);