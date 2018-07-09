/**
 * 
 */
var pn = 1;
var page = 1;
var questions;
function search(){
	var stem=document.getElementById("get_stem").value;
	var key=stem+",search";
	$.ajax({
		type : "post",
		url : "QServlet",
		data:key,
		success : function(data) {
			console.log(data);
			var jsonarray = $.parseJSON(data);
			var table = $("table");
			table.hide();
			table.empty();
			questions = jsonarray.questions;
			if (questions.length % 5 == 0) {
				page = parseInt(questions.length / 5);
			} else
				page = parseInt(questions.length / 5) + 1;
			var th = $("<tr></tr>");
			var th0 = $("<th>序号</th>");
			var th1 = $("<th>题号</th>");
			var th2 = $("<th>科目</th>");
			var th3 = $("<th>类型</th>");
			var th4 = $("<th>题干</th>");
			var th5 = $("<th>    </th>");
			var th6 = $("<th>    </th>");
			th.append(th0);
			th.append(th1);
			th.append(th2);
			th.append(th3);
			th.append(th4);
			th.append(th5);
			th.append(th6);
			table.append(th);
			table.show();
			for (var i = 0; i < 5; i++) {
				if ((i + (pn - 1) * 5) < questions.length) {
					var tr = $("<tr></tr>");
					var td0 = $("<td>" + (i + (pn - 1) * 5 + 1)
							+ "</td>");
					var td1 = $("<td>"
							+ questions[i + (pn - 1) * 5].qno
							+ "</td>");
					var td2 = $("");
					if (questions[i + (pn - 1) * 5].subject == 0)
						td2 = $("<td>化学类安全题</td>");
					else if (questions[i + (pn - 1) * 5].subject == 1)
						td2 = $("<td>医学生物类安全题</td>");
					else if (questions[i + (pn - 1) * 5].subject == 2)
						td2 = $("<td>通识类安全题</td>");
					else
						td2 = $("<td>电气类安全题</td>");
					var td3 = $("");
					if (questions[i + (pn - 1) * 5].type == 0)
						td3 = $("<td>  判断题    </td>");
					else if (questions[i + (pn - 1) * 5].type == 1)
						td3 = $("<td>单项选择题</td>");
					else
						td3 = $("<td>单项选择题</td>");
					var stem_sub = questions[i + (pn - 1) * 5].stem
							.substring(0, 15);
					var td4 = $("<td>" + stem_sub + "</td>");
					var td5 = $("<td><a href='qEdit.jsp?no="
							+ (i + (pn - 1) * 5 + 1) + "'>修改</a></td>");
					var td6 = $("<td><a onclick='del("
							+ (i + (pn - 1) * 5) + ");'>删除</a></td>");
					tr.append(td0);
					tr.append(td1);
					tr.append(td2);
					tr.append(td3);
					tr.append(td4);
					tr.append(td5);
					tr.append(td6);
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
	if (confirm("确定要删除该题目吗？")) {
		var qno = questions[n].qno;
		var type = questions[n].type;
		var stem = questions[n].stem;
		var subject = questions[n].subject;
		var answer = questions[n].answer;
		var score = questions[n].score;
		var correctAnswer = questions[n].correctAnswer;
		var data = type + "," + stem + "," + subject + "," + answer + ","
				+ score + "," + correctAnswer + "," + qno + ",del";
		$.ajax({
			type : "post",
			url : "QuestionServlet",
			data : data,
			success : function(data) {
			},
			dateType : "text",
		});
		window.location.href = 'questionView.jsp';
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
function hide_page(){
	var label = $("#pagination");
	label.hide();
}
hide_page();