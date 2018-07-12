package javas;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class StuServlet
 */
public class StuServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		BufferedReader reader = request.getReader();
		String line=reader.readLine();
		if (line != null) {
			String[] str = line.split(",");
			String id = str[0].substring(0, str[0].length() - 1);
			String name = str[1].substring(1, str[1].length());
			System.out.print(name);
			ArrayList<StudentInfo> list = StudentList.getStudentInfo(id, name);
			String json = StudentList.dataJson(list);
			PrintWriter out = response.getWriter();
			out.println(json);
			out.close();
		} else {
			ArrayList<StudentInfo> list = StudentList.getStudentInfo(null, null);
			String json = StudentList.dataJson(list);
			PrintWriter out = response.getWriter();
			out.println(json);
			out.close();
		}
	}
}
