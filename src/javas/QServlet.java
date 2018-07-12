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
public class QServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html;charset=utf-8");
		BufferedReader reader = request.getReader();
		String[] str = reader.readLine().split(",");
		if (str[1].equals("search")) {
			ArrayList<Question> list = QuestionList.searchQuestion(str[0]);
			String json = QuestionList.dataJson(list);
			PrintWriter out = response.getWriter();
			out.println(json);
			out.close();
		} 
		else if(str[1].equals("edit"))
		{
			ArrayList<Question> list = QuestionList.searchQuestion_no(str[0]);
			String json = QuestionList.dataJson(list);
			PrintWriter out = response.getWriter();
			out.println(json);
			out.close();
		}
		else {
			ArrayList<Question> list = QuestionList.getQuestion(str[0]);
			String json = QuestionList.dataJson(list);
			PrintWriter out = response.getWriter();
			out.println(json);
			out.close();
		}
	}
}