<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>管理考试系统</title>
 <link rel="stylesheet" type="text/css" href="css/adminMain.css"/>  
 <script type="text/javascript" src="scripts/adminMain.js"></script>
</head>
<body>
<div id="admin_top">
<p id="logo"><img src="login/hashiqi.jpg"></p>
<font id="admin_toptext">厦门大学网络安全考试中心</font>
<a id="user_center" href="account.jsp">欢迎,<%=session.getAttribute("user")%></a>
<a id="exit" href="login.jsp">退出系统</a>
</div>
<div id="navi">
		<nav>
		<ul id="main">
			<li><a onclick="to_main();">主页</a></li>
			<li><a onclick="show_user();">用户管理</a>
				<ul class="drop">
					<div>
						<li><a onclick="show_user();">用户列表</a></li>
						<li><a onclick="search_user();">查找用户</a></li>
						<li><a onclick="add_user();">新增用户</a></li>
					</div>
				</ul></li>
			<li><a onclick="show_question();">试题管理</a>
				<ul class="drop">
					<div>
						<li><a onclick="add_question();">新增试题</a></li>
						<li><a onclick="search_question();">查找试题</a></li>
						<li><a onclick="show_question();">试题列表</a></li>
					</div>
				</ul></li>
			<li>数据统计
				<ul class="drop">
					<div>
						<li></a>试题统计</a></li>
						<li></a>学生统计</a></li>
					</div>
				</ul>
			</li>
			<div id="marker"></div>
		</ul>
		</nav>
	</div>
<div id="admin_left">
<p><input type="button"  class="btn" value="系统首页" onclick="to_main();"/> </p>
<p><input type="button"  class="btn" value="个人中心" onclick="to_account();"/> </p>
<p><input type="button"  class="btn" value="用户管理" onclick="show_user();"/> </p>
<p><input type="button"  class="btn" value="试题管理" onclick="show_question();"/> </p>
<p><input type="button"  class="btn" value="数据分析" onclick="to_ana();"/> </p>
</div>
<div id="admin_mid">
</div>
</body>
</html>