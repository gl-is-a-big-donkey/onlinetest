<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>管理考试系统</title>
 <script type="text/javascript"></script>
    <script type="text/javascript">
        function to_main(){
        	window.location.href='http://localhost:8080/OnlineAnswer/adminMain.jsp';
        }
        function to_control(){
        	window.location.href='http://localhost:8080/OnlineAnswer/userControl.jsp';
        }
        function to_questions(){
        	window.location.href='http://localhost:8080/OnlineAnswer/questions.jsp';
        }
    </script>
 <link rel="stylesheet" type="text/css" href="adminMain/adminMain.css"/>  
</head>
<body>
<div id="admin_top">
<p id="admin_logo"><img src="login/hashiqi.jpg"></p>
<font id="admin_toptext" size="24" color="grey">厦门大学网络安全考试中心</font>
<a id="user_center" href="account.jsp">欢迎,<%=session.getAttribute("user")%></a>
<a id="exit" href="login.jsp">退出系统</a>
</div>
<div id="admin_left">
<p><input type="button" id="btn_main" value="首页" onclick="to_main();"/> </p>
<p><input type="button" id="btn_account_control" value="用户管理" onclick="to_control();"/> </p>
<p><input type="button" id="btn_personal_account" value="个人中心" onclick="to_account();"/> </p>
<p><input type="button" id="btn_questions_input" value="试题管理" onclick="to_questions();"/> </p>
</div>
<div id="admin_mid">

</div>
</body>
</html>