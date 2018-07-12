/**
 * 
 */
var questions_seq = "";
var questions;
function func() {
	var sub = document.getElementById("sub").value;
	var key = sub + ",sub";
	$.ajax({
		type : "post",
		url : "QServlet",
		data : key,
		success : function(data) {
			var jsonarray = $.parseJSON(data);
			questions = jsonarray.questions;
			questions_seq="";
			var total_score = 0;
			while (total_score < 10) {
				var no = Math.floor(Math.random() * questions.length);
				var qs = questions_seq.split(",");
				var flag = 1;
				for (var i = 0; i < qs.length; i++) {
					if (qs[i] == no.toString()) {
						flag = 0;
						break;
					}
				}
				if ((flag == 1)
						&& (total_score + parseInt(questions[no].score) <= 20)) {
					questions_seq = questions_seq + no + ",";
					total_score = total_score + parseInt(questions[no].score);
				}
			}
			var qs = questions_seq.split(",");
			var form = $("form");
			form.empty();
			var num = 1;
			for (var i = 0; i < qs.length - 1; i++) {
				if (questions[qs[i]].type == "0") {
					var lb = $("<label id='lb"
							+ qs[i]
							+ "' class='q'><font class='stem'>"
							+ num
							+ "."
							+ questions[qs[i]].stem
							+ "</font><span>答案:</span><select id=\"answer"
							+ qs[i]
							+ "\" class='answer_choose'><option value=\"1\">正确</option><option value=\"0\">错误</option></select></label>");
					form.append(lb);
					num++;
				}
			}
			for (var i = 0; i < qs.length - 1; i++) {
				if (questions[qs[i]].type != "0") {
					var answers = questions[qs[i]].answer.split("  ");
					var str = "<label id='lb" + qs[i]
							+ "' class='q'><font class='stem'>" + num + "."
							+ questions[qs[i]].stem + "</font>";
					for (var j = 0; j < answers.length; j++) {
						var line = "<font class='answer'>" + answers[j]
								+ "</font>";
						str = str + line;
					}
					str = str + "<span>答案:</span><input id=\"answer" + qs[i]
							+ "\" class='answer_input' type='text'></label>";
					lb = $(str);
					form.append(lb);
					num++;
				}
			}
			var btn = $("<label id='btn_submit'><span>&nbsp;</span> <input type=\"button\"class=\"button\" value=\"提交\" id=\"confirm\" onclick=\"check_p();\"/></label>");
			form.append(btn);
		}
	});
}
function check_p() {
	var qs = questions_seq.split(",");
	var form = $("form");
	var defen=0;
	for (var i = 0; i < qs.length - 1; i++) {
		var temp = "answer" + qs[i];
		if (document.getElementById(temp).value == (questions[qs[i]].correctAnswer)) {
			if (questions[qs[i]].correctAnswer == "0") {
				var str = "<font class='result'>正确答案:错误    </font>";
				var f = $(str);
				var l = "#lb" + qs[i];
				$(l).append(f);
			} else if (questions[qs[i]].correctAnswer == "1") {
				var str = "<font class='result'>正确答案:正确    </font>";
				var f = $(str);
				var l = "#lb" + qs[i];
				$(l).append(f);
			} else {
				var str = "<font class='result'>正确答案:"
						+ questions[qs[i]].correctAnswer + "    </font>";
				var f = $(str);
				var l = "#lb" + qs[i];
				$(l).append(f);
			}
			var score = questions[qs[i]].score;
			defen=Number(defen)+Number(score);
			var f1 = $("<font class='score'>得分:" + score + "</font>");
			var l = "#lb" + qs[i];
			$(l).append(f1);
		} else if (questions[qs[i]].correctAnswer.indexOf(document
				.getElementById(temp).value) != -1&&document.getElementById(temp).value.length>0) {
			var str = "<font class='result'>正确答案:"
					+ questions[qs[i]].correctAnswer + "    </font>";
			var f = $(str);
			var score = questions[qs[i]].score / 2;
			defen=Number(defen)+Number(score);
			var f1 = $("<font class='score'>得分:" + score + "</font>");
			var l = "#lb" + qs[i];
			$(l).append(f);
			$(l).append(f1);
		} else {
			if (questions[qs[i]].correctAnswer == "0") {
				var str = "<font class='result'>正确答案:错误    </font>";
				var f = $(str);
				var l = "#lb" + qs[i];
				$(l).append(f);
			} else if (questions[qs[i]].correctAnswer == "1") {
				var str = "<font class='result'>正确答案:正确    </font>";
				var f = $(str);
				var l = "#lb" + qs[i];
				$(l).append(f);
			} else {
				var str = "<font class='result'>正确答案:"
						+ questions[qs[i]].correctAnswer + "    </font>";
				var f = $(str);
				var l = "#lb" + qs[i];
				$(l).append(f);
			}
			var f1 = $("<font class='score'>得分:0</font>");
			var l = "#lb" + qs[i];
			$(l).append(f);
			$(l).append(f1);
		}
	}
	var d=$("<h1 color='red'>总分:"+defen+"<h1>");
	form.append(d);
	var btn=$("#btn_submit");
	btn.hide();
}
function to_main() {
	window.location.href = 'stuMain.jsp';
}
function to_account() {
	window.location.href = 'account_s.jsp';
}
function practice() {
	window.location.href = 'practice.jsp';
}
func();