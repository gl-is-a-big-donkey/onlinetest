/**
 * 
 */
function default_info() {
	var url = location.search; // 获取url中参数
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("=");
		var no = strs[1]+" , ";
		$.ajax({
			type : "post",
			url : "StuServlet",
			data:no,
			success : function(data) {
				var jsonarray = $.parseJSON(data);
				peoples = jsonarray.peoples;
				var name = $("#name");
				var id = $("#id");
				var pwd = $("#pwd");
				var pno = $("#pno");
				var mail = $("#mail");
				var sex = $("#sex");
				name.val(peoples[0].name);
				id.val(peoples[0].id);
				pwd.val(peoples[0].pwd);
				pno.val(peoples[0].pno);
				mail.val(peoples[0].mail);
				sex.val(peoples[0].sex);
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
			},
			dateType : "text",
		});
		alert("提交成功");
		window.location.href = 'userControl.jsp';
	}
}
function to_main() {
	window.location.href = 'adminMain.jsp';
}
function show_user() {
	window.location.href = 'userControl.jsp';
}
function search_user() {
	window.location.href = 'searchUser.jsp';
}
function add_user() {
	window.location.href = 'addUser.jsp';
}
function show_question() {
	window.location.href = 'questionView.jsp';
}
function search_question() {
	window.location.href = 'searchQuestion.jsp';
}
function add_question() {
	window.location.href = 'addQuestion.jsp';
}
default_info();