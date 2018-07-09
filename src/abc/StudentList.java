package abc;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class StudentList {
	public static String sql = "";
	public static Statement stmt = null;
	public static ResultSet res = null;
	public static Connection conn = null;
	public static ArrayList<StudentInfo> list = new ArrayList<StudentInfo>();

	public static ArrayList<StudentInfo> getStudentInfo(String sno, String sname) {
		try {
			conn = JdbcUtils.getConnection();
			stmt = conn.createStatement();
			if (sno == null && sname == null) {
				sql = "select * from STUDENT";
			}
			else
				sql="select * from STUDENT WHERE sno LIKE '%"+sno+"%' and sname like '%"+sname+"%'";
			res = stmt.executeQuery(sql);
			list.clear();
			while (res.next()) {
				StudentInfo data = new StudentInfo();
				data.setSno(res.getString("sno"));
				data.setSname(res.getString("sname"));
				data.setPno(res.getString("pno"));
				data.setMail(res.getString("mail"));
				data.setSex(res.getString("sex"));
				data.setPwd(res.getString("pwd"));
				list.add(data);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;

	}

	// 将list转成json样式的字符串
	public static String dataJson(ArrayList<StudentInfo> list) {
		String json = "{\"peoples\":[";
		for (StudentInfo s : list) {
			String line = "{\"id\":" + "\"" + s.getSno() + "\"," + "\"pwd\":" + "\"" + s.getPwd() + "\"," + "\"name\":"
					+ "\"" + s.getSname() + "\"," + "\"sex\":" + "\"" + s.getSex() + "\"," + "\"pno\":" + "\""
					+ s.getPno() + "\"," + "\"mail\":" + "\"" + s.getMail() + "\"},";
			json = json + line;
		}
		json = json.substring(0, json.length() - 1);
		String line = "]}";
		json = json + line;
		return json;
	}
}