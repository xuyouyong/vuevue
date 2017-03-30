<?php
//Author:avirtuous
$con = mysql_connect("localhost","root","root") or die('Cloud not connect:'.mysql_error());
mysql_select_db("demo",$con);
$un = $_POST['username'];
$pwd = $_POST['password'];
$result=mysql_query("INSERT INTO user (username,password) VALUES ($un,$pwd)");
if($result){
    echo "注册成功";
} else {
    echo "注册失败";
}
?>