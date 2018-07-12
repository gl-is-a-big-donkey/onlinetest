<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>管理考试系统</title>
<link rel="stylesheet" type="text/css" href="css/addUser.css" />
<link rel="stylesheet" type="text/css" href="css/userControl.css" />
<script src="jquery-3.3.1.js" type="text/javascript"></script>
<script type="text/javascript" src="scripts/addUser.js"></script>
</head>
<body>
	<div id="admin_top">
		<p id="logo">
			<img src="login/hashiqi.jpg">
		</p>
		<font id="admin_toptext" size="24" color="grey">厦门大学网络安全考试中心</font> 
		<font id="user_center" >欢迎,<%=session.getAttribute("user")%></font>
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
		<p>
			<input type="button" class="btn" value="用户列表" onclick="show_user();" />
		</p>
		<p>
			<input type="button" class="btn" value="查找用户"
				onclick="search_user();" />
		</p>
		<p>
			<input type="button" class="btn" value="新增用户" onclick="add_user();" />
		</p>
	</div>
	<div id="admin_mid">
		<form action="" method="post" class="STYLE-NAME" id="edit">
			<h1>
				新增用户 <span>填写用户信息.</span>
			</h1>
			<label> <span>姓名 :</span> <input id="name" type="text"
				class="userinfo" placeholder="最多16位" /></label> <label> <span>学号
					:</span> <input id="id" type="text" class="userinfo" placeholder="8位" /></label>
			<label> <span>密码 :</span> <input id="pwd" type="text"
				class="userinfo" placeholder="6-8位" />
			</label> <label> <span>手机 :</span> <input id="pno" type="text"
				class="userinfo" placeholder="11位" /></label> <label> <span>邮箱
					:</span> <input id="mail" type="text" class="userinfo"
				placeholder="xx@xx.xx" /></label> <label> <span>性别 :</span><select
				name="sex" id="sex">
					<option value="1">男</option>
					<option value="0">女</option>
			</select></label>
			<div id="btns">
				<span>&nbsp;</span> <input type="button" class="button" value="提交"
					onclick="submit_info();" /> <span>&nbsp;</span> <input
					type="button" class="button" value="返回" onclick="show_user();" />

			</div>
		</form>
	</div>

</body>
</html>