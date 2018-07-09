/**
 * 
 */
var type = 0;
var answernum = 0;
function true_false() {
	radio = document.getElementsByName('radio_type');
	radio[1].checked = false;
	radio[2].checked = false;
	type = 0;
	func()
}
function single_choice() {
	radio = document.getElementsByName('radio_type');
	radio[0].checked = false;
	radio[2].checked = false;
	type = 1;
	func()
}
function multi_choice() {
	radio = document.getElementsByName('radio_type');
	radio[1].checked = false;
	radio[0].checked = false;
	type = 2;
	func();
}
function func() {
	var title = $("#q_title");
	var main = $("#q_main");
	title.empty();
	title.hide();
	main.empty();
	main.hide();
	if (type == 0) {
		var h1 = $("<h1>试题录入<span>判断题</span></h1>");
		var l3 = $("<label id=\"label1\"> <span>所属科目 :</span><select id=\"sub\"><option value=\"0\">化学类安全题</option><option value=\"1\">医学生物类安全题</option><option value=\"2\">通识类安全题</option>"
				+ "<option value=\"3\">电气类安全题</option></select></label>");
		var l4 = $("<label id=\"label2\"> <span>分值 :</span> <input id=\"score\" type=\"text\" placeholder=\"分数需小于10\"></label>");
		var cf = $("<span>&nbsp;</span> <input type=\"button\"class=\"button\" value=\"确定\" id=\"confirm\" onclick=\"create_table();\"/>");
		title.append(h1);
		title.append(l3);
		title.append(l4);
		title.append(cf);
	} else if (type == 1) {
		var h1 = $("<h1>试题录入<span>单项选择题</span></h1>");
		var l2 = $("<label id=\"label3\"> <span>备选答案数 :</span> <input id=\"answernum\" type=\"text\" placeholder=\"1-7\"></label>");
		var l3 = $("<label id=\"label1\"> <span>所属科目 :</span><select id=\"sub\"><option value=\"0\">化学类安全题</option><option value=\"1\">医学生物类安全题</option><option value=\"2\">通识类安全题</option>"
				+ "<option value=\"3\">电气类安全题</option></select></label>");
		var l4 = $("<label id=\"label2\"> <span>分值 :</span> <input id=\"score\" type=\"text\" placeholder=\"分数需小于10\"></label>");
		var cf = $("<span>&nbsp;</span> <input type=\"button\"class=\"button\" value=\"确定\" id=\"confirm\" onclick=\"create_table();\"/>");
		title.append(h1);
		title.append(l2);
		title.append(l3);
		title.append(l4);
		title.append(cf);
	} else {
		var h1 = $("<h1>试题录入<span>多项选择题</span></h1>");
		var l2 = $("<label id=\"label3\"> <span>备选答案数 :</span> <input id=\"answernum\" type=\"text\" placeholder=\"1-7\"></label>");
		var l3 = $("<label id=\"label1\"> <span>所属科目 :</span><select id=\"sub\"><option value=\"0\">化学类安全题</option><option value=\"1\">医学生物类安全题</option><option value=\"2\">通识类安全题</option>"
				+ "<option value=\"3\">电气类安全题</option></select></label>");
		var l4 = $("<label id=\"label2\"> <span>分值 :</span> <input id=\"score\" type=\"text\" placeholder=\"分数需小于10\"></label>");
		var cf = $("<span>&nbsp;</span> <input type=\"button\"class=\"button\" value=\"确定\" id=\"confirm\" onclick=\"create_table();\"/>");
		title.append(h1);
		title.append(l2);
		title.append(l3);
		title.append(l4);
		title.append(cf);
	}
	title.show();
}
function create_table() {
	var main = $("#q_main");
	main.empty();
	if (document.getElementById("score").value > 10) {
		alert("单个题目分值不能超过10");
	} else {
		if (type != 0) {
			answernum = document.getElementById("answernum").value;
		}
		if (answernum > 7) {
			alert("选项不能多于7个");
		} else {
			var l1 = $("<label id=\"lb_stem\"> <span>题干 :</span> <textarea id=\"stem\"  placeholder=\"请输入题干\"></textarea></label>");
			main.append(l1);
			if (type == 0) {
				var corretAnswer = $("<label id=\"is_true\"> <span>是否正确 :</span><select id=\"correct\"><option value=\"1\">是</option><option value=\"0\">否</option></select></label>");
			} else {
				for (var i = 0; i < answernum; i++) {
					var str = "answer" + i;
					var temp = $("<label id=\"a_"+i+"\"> <span>答案"
							+ (String.fromCharCode(65 + i))
							+ " :</span> <textarea id=\"" + str
							+ "\" placeholder=\"请输入选项内容\" ></textarea></label>");

					main.append(temp);
				}
				var corretAnswer = $("<label id=\"correct_answer\"> <span>正确答案 :</span> <input id=\"correct\" type=\"text\" placeholder=\"输入答案序号A,B,C...\"></textarea></label>");
			}
			var submit = $("<span>&nbsp;</span> <input type=\"button\"class=\"button\" value=\"提交\" id=\"submit\" onclick=\"submit_q();\"/>");
			var back = $("<span>&nbsp;</span> <input type=\"button\"class=\"button\" value=\"返回\" id=\"back\" onclick=\"show_question();\"/>");
			main.append(corretAnswer)
			$("#form").append(submit);
			$("#form").append(back);
		}
	}
	main.show();
}
function submit_q() {
	var stem = document.getElementById("stem").value;
	var new_stem=stem.replace(/,/g,"，");    //替换逗号方便后台解析字符串
	var subject = document.getElementById("sub").value;
	var answer = "";
	for (var i = 0; i < answernum; i++) {
		var line = (String.fromCharCode(65 + i)) + '.'
				+ document.getElementById("answer" + i).value + "  ";
		answer = answer + line;
	}
	var new_answer=answer.replace(/,/g,"，");
	var correctAnswer = document.getElementById("correct").value;
	var score = document.getElementById("score").value;
	var data = type + "," + new_stem + "," + subject + "," + new_answer + "," + score
			+ "," + correctAnswer+ ",-1,add";
	$.ajax({
		type : "post",
		url : "QuestionServlet",
		data : data,
		success : function(data) {
		},
		dateType : "text",
	});
	alert("提交成功");
	window.location.href = 'questionView.jsp';
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
func();