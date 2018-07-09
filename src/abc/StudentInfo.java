package abc;

public class StudentInfo {
	private String sno;
	private String pwd;
	private String sname;
	private String sex;
	private String pno;
	private String mail;
	public String getSno() {
		return sno;
	}
	public void setSno(String sno) {
		this.sno = sno;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getPno() {
		return pno;
	}
	public void setPno(String pno) {
		this.pno = pno;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	@Override
	public String toString() {
		return "Student [sno=" + sno + ", pwd=" + pwd + ", sname=" + sname + ", sex=" + sex + ", pno=" + pno + ", mail="
				+ mail + "]";
	}
	
}
