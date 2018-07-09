package abc;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * Servlet implementation class InfoServlet
 */

public class InfoServlet extends HttpServlet {
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
        String name=str[0];
        String id=str[1];
        String pwd=str[2];
        String sex=str[3];
        String pno=str[4];
        String mail=str[5];
        String type=str[6];
        if(type.equals("edit"))
        {
        	InfoChange.update(name, id, sex, mail, pno, pwd);
        }
        else if(type.equals("add"))
        {
        	PrintWriter out = response.getWriter();
        	if(InfoChange.add(name, id, sex, mail, pno, pwd))  
        	out.println("1");
            out.close();
        }
        else if(type.equals("del"))
        {
        	InfoChange.delete(id);
        }
    }
}