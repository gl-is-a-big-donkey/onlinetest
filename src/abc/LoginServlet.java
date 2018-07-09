package abc;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet{
	public static Statement stmt = null;
    public static ResultSet res = null;
    public static Connection conn = null;
	public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        doPost(request, response);
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("utf-8"); 
        response.setContentType("text/html;charset=utf-8"); 
        response.setCharacterEncoding("utf-8"); 

        String username = request.getParameter("username");
        String userpass = request.getParameter("password");
 
        
        try {
        	String sql="select * from ADMIN where id='"+username+"' and pwd='"+userpass+"'";
        	conn=JdbcUtils.getConnection();
            stmt = conn.createStatement();
            res = stmt.executeQuery(sql);
            if(res!=null&& res.next())
            {
            	HttpSession session = request.getSession();
            	session.setAttribute("user", res.getString("name"));
            	response.sendRedirect("/OnlineAnswer/welcome.jsp");
            }
            else{
            	PrintWriter out = response.getWriter();
                out.print("用户名或密码错误！");
                out.print("<br><a href = 'login.jsp'>重新登陆</a>");
            }
            conn.close();
        }
        catch(Exception e)
        {
        	e.printStackTrace();
        }
        
    }
}
