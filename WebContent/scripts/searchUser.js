/**
 * 
 */
var pn = 1;
var page = 1;
var peoples;
function search(){
	var id=document.getElementById("get_no").value;
	var name=document.getElementById("get_name").value;
	var key=id+" , "+name;
	$.ajax({
		type : "post",
		url : "StuServlet",
		data:key,
		success : function(data) {
			var jsonarray = $.parseJSON(data);
			var table = $("#table");
			table.hide();
			table.empty();
			peoples = jsonarray.peoples;
			if (peoples.length % 5 == 0) {
				page = parseInt(peoples.length / 5);
			} else
				page = parseInt(peoples.length / 5) + 1;
			var th = $("<tr></tr>");
			var th0 = $("<th>序号</th>");
			var th1 = $("<th>姓名</th>");
			var th2 = $("<th>学号</th>");
			var th3 = $("<th>性别</th>");
			var th4 = $("<th>手机</th>");
			var th5 = $("<th>邮箱</th>");
			var th6 = $("<th>    </th>");
			var th7 = $("<th>    </th>");
			th.append(th0);
			th.append(th1);
			th.append(th2);
			th.append(th3);
			th.append(th4);
			th.append(th5);
			th.append(th6);
			th.append(th7);
			table.append(th);
			table.show();
			for (var i = 0; i < 5; i++) {
				if ((i + (pn - 1) * 5) < peoples.length) {
					var tr = $("<tr></tr>");
					var td0 = $("<td>" + (i + (pn - 1) * 5 + 1)
							+ "</td>");
					var td1 = $("<td>"
							+ peoples[i + (pn - 1) * 5].name + "</td>");
					var td2 = $("<td>" + peoples[i + (pn - 1) * 5].id
							+ "</td>");
					if (peoples[i + (pn - 1) * 5].sex == 1)
						var td3 = $("<td>男</td>");
					else
						var td3 = $("<td>女</td>");
					var td4 = $("<td>" + peoples[i + (pn - 1) * 5].pno
							+ "</td>");
					var td5 = $("<td>"
							+ peoples[i + (pn - 1) * 5].mail + "</td>");
					var td6 = $("<td><a href='userEdit.jsp?no="
							+ peoples[i + (pn - 1) * 5].id + "'>修改</a></td>");
					var td7 = $("<td><a onclick='del("
							+ (i + (pn - 1) * 5) + ");'>删除</a></td>");
					tr.append(td0);
					tr.append(td1);
					tr.append(td2);
					tr.append(td3);
					tr.append(td4);
					tr.append(td5);
					tr.append(td6);
					tr.append(td7);
					table.append(tr);
				}
			}
			var table = document.getElementById("alternatecolor");
			var rows = document.getElementsByTagName("tr");

			for (i = 0; i < rows.length; i++) {
				if (i % 2 == 0) {
					rows[i].className = "evenrowcolor";
				} else {
					rows[i].className = "oddrowcolor";
				}
			}
			var label = $("#pagination");
			label.empty();
			label.show();
			var li0 = $("<li class=\"first\"><a onclick=\"to_firstpage();\" title=\"第一页\">第一页</a> </li>");
			var li1 = $("<li class=\"previous\"><a onclick=\"to_previouspage();\" title=\"上一页\">上一页</a> </li>");
			var li6 = $("<li class=\"next\"><a onclick=\"to_nextpage();\" title=\"下一页\">下一页</a> </li>");
			var li7 = $("<li class=\"last\"><a onclick=\"to_lastpage();\" title=\"最后一页\">最后一页</a> </li>");
			label.append(li0);
			label.append(li1);
			if (page > 4) {
				for (var i = 0; i < 5; i++) {
					if ((pn + i - 2) <= page && (pn + i - 2) >= 1) {
						var li = $("<li><a onclick=\"to_page("
								+ (pn + i - 2) + ");\">" + (pn + i - 2)
								+ "</a></li>");
						label.append(li);
					}
				}
			} else {
				for (var i = 0; i < page; i++) {
					var li = $("<li><a onclick=\"to_page(" + (i + 1)
							+ ");\">" + (i + 1) + "</a></li>");
					label.append(li);
				}
			}
			label.append(li6);
			label.append(li7);

		}
	});
}
function del(n) {
	if (confirm("确定要删除该用户吗？")) {
		var name = peoples[n].name;
		var id = peoples[n].id;
		var pwd = peoples[n].pwd;
		var sex = peoples[n].sex;
		var pno = peoples[n].pno;
		var mail = peoples[n].mail;
		var type = "del";
		var data = name + "," + id + "," + pwd + "," + sex + "," + pno + ","
				+ mail + "," + type;
		$.ajax({
			type : "post",
			url : "InfoServlet",
			data : data,
			success : function(data) {
			},
			dateType : "text",
		});
		window.location.href = 'userControl.jsp';
	}
}
function to_previouspage() {
	if (pn == 1)
		alert("已到第一页！");
	else {
		pn = pn - 1;
		search();
	}
}
function to_firstpage() {
	pn = 1;
	search();
}
function to_lastpage() {
	pn = page;
	search();
}
function to_nextpage() {
	if (pn == page)
		alert("已到最后一页！");
	else {
		pn = pn + 1;
		search();
	}
}
function to_page(n) {
	pn = n;
	search();
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
function hide_page(){
	var label = $("#pagination");
	label.hide();
}
hide_page();
