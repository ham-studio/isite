/*! The file is creted by lxa --Fri May 19 2017 17:06:48 GMT+0800 (中国标准时间) */
webpackJsonp([1],{5:function(t,r,n){function a(t,r,n){if(""==t||!r||!n)return"";if(r<2||r>36)return alert("输入进制只能介于2-36之间！"),NaN;if(n<2||n>36)return alert("输出进制只能介于2-36之间！"),NaN;try{return parseInt(t,r).toString(n)}catch(t){return NaN}}function u(){var t=a($("#number").val(),parseInt($("#input_radix").val()),parseInt($("#output_radix").val()));$("#result").html(t)}n(0),$("#input_radix,#output_radix,#number").on("input",u),u()}},[5]);