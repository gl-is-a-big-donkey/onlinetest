package javas;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {
	public static Statement stmt = null;
	public static ResultSet res = null;
	public static Connection conn = null;
	public static String sql = "";

	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		BufferedReader reader = request.getReader();
		String[] str = reader.readLine().split(",");
		String username = str[0];
		String userpass = str[1];
		String usertype = str[2];
		try {
			conn = JdbcUtils.getConnection();
			stmt = conn.createStatement();
			if (usertype.equals("1")) {
				sql = "select * from ADMIN where id='" + username + "' and pwd='" + userpass + "'";
			} else {
				sql = "select * from STUDENT where sno='" + username + "' and pwd='" + userpass + "'";
			}
			res = stmt.executeQuery(sql);
			if (res != null && res.next()) {
				HttpSession session = request.getSession();
				if (usertype.equals("1")) {
					session.setAttribute("id", res.getString("id"));
					session.setAttribute("user", res.getString("name"));
				} else {
					session.setAttribute("id", res.getString("sno"));
					session.setAttribute("user", res.getString("sname"));
				}
				PrintWriter out = response.getWriter();
				out.print(usertype);
				out.close();
				conn.close();
			} else {
				PrintWriter out = response.getWriter();
				out.print("3");
				out.close();
			}
			conn.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
