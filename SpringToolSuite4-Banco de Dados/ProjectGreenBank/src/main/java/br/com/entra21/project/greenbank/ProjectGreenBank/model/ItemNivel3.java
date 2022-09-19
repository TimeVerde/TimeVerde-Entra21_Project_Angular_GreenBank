package br.com.entra21.project.greenbank.ProjectGreenBank.model;

import java.util.ArrayList;

public class ItemNivel3 {

	private String red;
	private String url;
	private ArrayList<String> headers;
	private String body;

	ItemNivel3() {
		super();
	}

	public ItemNivel3(String red, String url, ArrayList<String> headers, String body) {
		super();
		this.red = red;
		this.url = url;
		this.headers = headers;
		this.body = body;
	}

	public String getRed() {
		return red;
	}

	public void setRed(String red) {
		this.red = red;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public ArrayList<String> getHeaders() {
		return headers;
	}

	public void setHeaders(ArrayList<String> headers) {
		this.headers = headers;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}
}
