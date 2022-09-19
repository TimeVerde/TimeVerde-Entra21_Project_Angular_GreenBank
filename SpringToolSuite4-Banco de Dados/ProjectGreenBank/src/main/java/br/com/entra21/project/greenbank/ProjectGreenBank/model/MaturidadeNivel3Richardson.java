package br.com.entra21.project.greenbank.ProjectGreenBank.model;

import java.util.ArrayList;

public class MaturidadeNivel3Richardson {

	private ArrayList<ItemNivel3> links;

	MaturidadeNivel3Richardson() {
		super();
	}

	MaturidadeNivel3Richardson(ArrayList<ItemNivel3> links) {
		super();
		this.links = links;
	}

	public ArrayList<ItemNivel3> getLinks() {
		return links;
	}

	public void setLinks(ArrayList<ItemNivel3> links) {
		this.links = links;
	}
}
