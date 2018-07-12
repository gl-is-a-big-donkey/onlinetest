/**
 * 
 */
function login() {
	var id = document.getElementById("username").value;
	var pwd = document.getElementById("password").value;
	var type="";
	var radios = document.getElementsByName('user');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked == true) {
            type=radios[i].value;
        }
    }
	var data=id+","+pwd+","+type;
	$.ajax({
		type : "post",
		url : "LoginServlet",
		data:data,
		success : function(flag) {
			if(flag==1)
				window.location.href = 'adminMain.jsp';
			else if(flag==2)
				window.location.href = 'stuMain.jsp';
			else
				alert("账号或密码错误,请重新输入");
		}
		});
}