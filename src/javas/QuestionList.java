package javas;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class QuestionList {
	public static String sql = "";
	public static Statement stmt = null;
	public static ResultSet res = null;
	public static Connection conn = null;
	public static ArrayList<Question> list = new ArrayList<Question>();

	public static ArrayList<Question> getQuestion(String i) {
		try {
			conn = JdbcUtils.getConnection();
			stmt = conn.createStatement();
			if (!i.equals("4"))
				sql = "select * from QUESTION WHERE SUB='" + i + "'";
			else
				sql = "select * from QUESTION";
			res = stmt.executeQuery(sql);
			list.clear();
			while (res.next()) {
				Question data = new Question();
				data.setQno(res.getInt("qno"));
				data.setStem(res.getString("stem"));
				data.setType(res.getString("q_type"));
				data.setScore(res.getInt("score"));
				data.setAnswer(res.getString("answer"));
				data.setCorrectAnswer(res.getString("correct_answer"));
				data.setSubject(res.getString("sub"));
				list.add(data);
			}
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}
	public static ArrayList<Question> searchQuestion(String stem) {
		try {
			conn = JdbcUtils.getConnection();
			stmt = conn.createStatement();
			if (stem == null) {
				sql = "select * from QUESTION";
			}
			else
				sql="select * from QUESTION WHERE STEM LIKE '%"+stem+"%'";
			res = stmt.executeQuery(sql);
			list.clear();
			while (res.next()) {
				Question data = new Question();
				data.setQno(res.getInt("qno"));
				data.setStem(res.getString("stem"));
				data.setType(res.getString("q_type"));
				data.setScore(res.getInt("score"));
				data.setAnswer(res.getString("answer"));
				data.setCorrectAnswer(res.getString("correct_answer"));
				data.setSubject(res.getString("sub"));
				list.add(data);
			}
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}
	
	public static ArrayList<Question> searchQuestion_no(String qno) { //为修改时提供单条信息
		try {
			conn = JdbcUtils.getConnection();
			stmt = conn.createStatement();
			sql="select * from QUESTION WHERE qno ="+qno;
			res = stmt.executeQuery(sql);
			list.clear();
			while (res.next()) {
				Question data = new Question();
				data.setQno(res.getInt("qno"));
				data.setStem(res.getString("stem"));
				data.setType(res.getString("q_type"));
				data.setScore(res.getInt("score"));
				data.setAnswer(res.getString("answer"));
				data.setCorrectAnswer(res.getString("correct_answer"));
				data.setSubject(res.getString("sub"));
				list.add(data);
			}
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}
	
	// 将list转成json样式的字符串
	public static String dataJson(ArrayList<Question> list) {
		String json = "{\"questions\":[";
		for (Question q : list) {
			String line = "{\"qno\":" + "\"" + q.getQno() + "\"," + "\"stem\":" + "\"" + q.getStem() + "\","
					+ "\"type\":" + "\"" + q.getType() + "\"," + "\"score\":" + "\"" + q.getScore() + "\","
					+ "\"answer\":" + "\"" + q.getAnswer() + "\"," + "\"correctAnswer\":" + "\"" + q.getCorrectAnswer()
					+ "\"," + "\"subject\":" + "\"" + q.getSubject() + "\"},";
			json = json + line;
		}
		json = json.substring(0, json.length() - 1);
		String line = "]}";
		json = json + line;
		return json;
	}
}