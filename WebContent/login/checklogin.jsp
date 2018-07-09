<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>

<% 

response.sendRedirect("../welcome.jsp");  //跳转到一个中转页面，在那个页面等待5秒，用来通过输入的id在数据库里查询到信息显示在主界面上
%>

</body>
</html>