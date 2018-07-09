/**
 * 
 */
function default_info() {
	var url = location.search; // 获取url中参数
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("=");
		var no = parseInt(strs[1]) + 1;
		$.ajax({
			type : "post",
			url : "StuServlet",
			success : function(data) {
				var jsonarray = $.parseJSON(data);
				peoples = jsonarray.peoples;
				var name = $("#name");
				var id = $("#id");
				var pwd = $("#pwd");
				var pno = $("#pno");
				var mail = $("#mail");
				var sex = $("#sex");
				name.val(peoples[no].name);
				id.val(peoples[no].id);
				pwd.val(peoples[no].pwd);
				pno.val(peoples[no].pno);
				mail.val(peoples[no].mail);
				sex.val(peoples[no].sex);
			}
		});
	}
}
function submit_info() {
	var name = document.getElementById("name").value;
	var id = document.getElementById("id").value;
	var pwd = document.getElementById("pwd").value;
	var sex = document.getElementById("sex").value;
	var pno = document.getElementById("pno").value;
	var mail = document.getElementById("mail").value;
	var mail_form = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	var type = "edit";
	var data = name + "," + id + "," + pwd + "," + sex + "," + pno + "," + mail
			+ "," + type;
	if (name.length > 16 || name == null)
		alert("姓名过长或为空");
	else if (pwd.length > 8 || pwd.length < 6)
		alert("密码长度应为6-8位");
	else if (pno.length != 11)
		alert("手机号应为11位");
	else if ((!mail_form.test(mail)) || mail.length > 20)
		alert("邮箱格式错误");
	else {
		$.ajax({
			type : "post",
			url : "InfoServlet",
			data : data,
			success : function(data) {
				alert("提交成功");
			},
			dateType : "text",
		});
		window.location.href = 'userControl.jsp';
	}
}
default_info();