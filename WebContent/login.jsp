<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>实验室安全考试-登陆</title>
 <link rel="stylesheet" type="text/css" href="login/login.css"/>  
 <script type="text/javascript" src="scripts/login.js"></script>
 <script src="jquery-3.3.1.js" type="text/javascript"></script>
</head>
<body>
 <div id="login_frame"> 
 
 <p id="image_logo"><img src="login/hashiqi.jpg"></p>  
 
 <form method="post" action="LoginServlet" id="login_form">  
 
  <p><label class="label_input">用户名</label><input type="text" name="username" id="username" class="text_field"/></p>  
        <p><label class="label_input">密码</label><input type="text" name="password" id="password" class="text_field"/></p> 
        <div id="user_select">  
                      <input type="radio" name="user" value="1" checked="checked" > 管理员
                       <input type="radio" name="user" value="2" > 学生       
                       </div>             
            <input id="btn_login" value="登录"  onclick="login()"/>   
          
    </form>  
        
</div>  
 
</body>
</html>