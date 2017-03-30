<?php
// 获取POST方式传递的数据
$un2 = $_POST["username"];
$pw2 = $_POST["password"];
if($un2 == "admin" and $pw2 == "123456"){
    // 登录成功，跳转到系统首页index.html
    header("location:indexaa.html");// 使用header("location:url")方式进行页面跳转
    exit(1);// 退出
} else{
    // 登录失败，返回登录页面
    header("location:index.html");// 使用header进行跳转
    exit(1);
}
