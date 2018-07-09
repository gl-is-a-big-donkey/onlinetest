/**
 * 
 */
function submit_info() {
	var name = document.getElementById("name").value;
	var id = document.getElementById("id").value;
	var pwd = document.getElementById("pwd").value;
	var sex = document.getElementById("sex").value;
	var pno = document.getElementById("pno").value;
	var mail = document.getElementById("mail").value;
	var mail_form = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
	var type = "add";
	var data=name+","+id+","+pwd+","+sex+","+pno+","+mail+","+type;
	if (name.length > 16 || name == null)
		alert("姓名过长或为空");
	else if (id.length != 8)
		alert("学号长度必须为8");
	else if (pwd.length > 8 || pwd.length < 6)
		alert("密码长度应为6-8位");
	else if (pno.length != 11)
		alert("手机号应为11位");
	else if ((!mail_form.test(mail)) || mail.length > 20)
		alert("邮箱格式错误");
	$.ajax({
		type : "post",
		url : "InfoServlet",		
		data :data,
		success : function(data) {
			if(data==1)
			{
				alert("添加成功！");
			window.location.href='userControl.jsp';
			}
			else
				alert("学号重复,请检查");
		},
		error:function(data){
			alert("提交失败")
		},
		dateType : "text"
	});
}
function to_main() {
	window.location.href = 'adminMain.jsp';
}
function to_account() {
	window.location.href = 'account.jsp';
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