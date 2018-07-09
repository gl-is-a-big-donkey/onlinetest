package abc;

public class Admin {
	private String ano;
	private String pwd;
	private String aname;
	private boolean sex=false;
	private String pno;
	private String mail;
	public String getAno() {
		return ano;
	}
	public void setAno(String ano) {
		this.ano = ano;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getAname() {
		return aname;
	}
	public void setAname(String aname) {
		this.aname = aname;
	}
	public boolean isSex() {
		return sex;
	}
	public void setSex(boolean sex) {
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
	public void set(String ano,String pwd,String aname,boolean sex,String pno,String mail)
	{
		this.ano=ano;
		this.pwd=pwd;
		this.aname=aname;
		this.sex=sex;
		this.pno=pno;
		this.mail=mail;
	}
	@Override
	public String toString() {
		return "Admin [ano=" + ano + ", pwd=" + pwd + ", aname=" + aname + ", sex=" + sex + ", pno=" + pno + ", mail="
				+ mail + "]";
	}
	
}
