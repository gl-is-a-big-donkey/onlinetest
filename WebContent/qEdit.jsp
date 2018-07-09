<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>管理考试系统</title>
<link rel="stylesheet" type="text/css" href="css/userControl.css" />
<link rel="stylesheet" type="text/css" href="css/addQuestion.css" />
<script src="jquery-3.3.1.js" type="text/javascript"></script>
</head>
<body>
	<div id="admin_top">
		<p id="logo">
			<img src="login/hashiqi.jpg">
		</p>
		<font id="admin_toptext" size="24" color="grey">厦门大学网络安全考试中心</font> <a
			id="user_center" href="account.jsp">欢迎,<%=session.getAttribute("user")%></a>
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
						<li><a onclick="show_question();">查看试题</a></li>
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
		<p>
			<input type="button" class="btn" value="新增试题"
				onclick="add_question();" />
		</p>
		<p>
			<input type="button" class="btn" value="查找试题"
				onclick="search_question();" />
		</p>
		<p>
			<input type="button" class="btn" value="试题列表"
				onclick="show_question();" />
		</p>
	</div>
	<div id="admin_mid">
		<form id="form">
			<div id="q_type">
				<span id=span_type>题目类型:</span>
				<div class='radio-check'>
					<input type='radio' id='radio1' name="radio_type"
						onclick="true_false();"  checked="true"/> <label for='radio1' class>判断题</label>
				</div>
				<div class='radio-check'>
					<input type='radio' id='radio2' name="radio_type"
						onclick="single_choice();" /> <label for='radio2' class>单项选择题</label>
				</div>
				<div class='radio-check'>
					<input type='radio' id='radio3' name="radio_type"
						onclick="multi_choice();" /> <label for='radio3' class>多项选择题</label>
				</div>
			</div>
			<div id="q_title"></div>
			<div id="q_main"></div>
		</form>
	</div>
	<script type="text/javascript" src="scripts/qEdit.js"></script>
</body>
</html>