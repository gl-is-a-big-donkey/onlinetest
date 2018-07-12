package javas;

import java.io.BufferedReader;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class QuestionServlet extends HttpServlet {
	public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        doPost(request, response);
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("utf-8"); 
        response.setContentType("text/html;charset=utf-8"); 
        response.setCharacterEncoding("utf-8");       
        BufferedReader reader = request.getReader();
        String []str = reader.readLine().split(",");
        String type=str[0];
        String stem=str[1];
        String subject=str[2];
        String answer=str[3];
        String score=str[4];
        String correctAnswer=str[5];
        String qno=str[6];
        String func=str[7];
        if(func.equals("add"))
        {
        	QuestionChange.add(type, stem, subject, answer, score, correctAnswer);
        }
        else if(func.equals("del"))
        {
        	QuestionChange.del(qno);
        }
        else 
        {
        	QuestionChange.update(qno, type, stem, subject, answer, score, correctAnswer);
        }
    }
}