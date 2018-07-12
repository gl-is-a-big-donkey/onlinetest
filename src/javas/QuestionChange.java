package javas;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class QuestionChange {
	public static Statement stmt = null;
	public static ResultSet res = null;
	public static Connection conn = null;
	public static String sql = "";

	public static void add(String type, String stem, String subject, String answer, String score,
			String correctAnswer) {
		try {
			conn = JdbcUtils.getConnection();
			stmt = conn.createStatement();
			sql = "SELECT * FROM QUESTION";
			res = stmt.executeQuery(sql);	
			int qno = 1;
			while (res.next()) {
				qno++;
			}
			sql = "INSERT INTO QUESTION VALUES(" + qno + ",'" + stem + "','" + type + "'," + score + ",'" + answer
					+ "','" + correctAnswer + "','" + subject + "')";
			res = stmt.executeQuery(sql);
			System.out.println("插入成功");
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void update(String qno, String type, String stem, String subject, String answer, String score,
			String correctAnswer) {
		try {
			conn = JdbcUtils.getConnection();
			stmt = conn.createStatement();
			sql = "UPDATE QUESTION SET Q_TYPE ='" + type + "',STEM='" + stem + "',SUB='" + subject + "',ANSWER='" + answer
					+ "',SCORE='" + score + "',CORRECT_ANSWER='" + correctAnswer + "' WHERE qno =" + qno + "";
			res = stmt.executeQuery(sql);
			System.out.println(sql);
			System.out.println("修改成功");
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public static void del(String qno) {
		try {
			conn = JdbcUtils.getConnection();
			stmt = conn.createStatement();
			sql = "DELETE FROM QUESTION WHERE QNO =" + qno;
			res = stmt.executeQuery(sql);
			System.out.println("删除成功");
			conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}
