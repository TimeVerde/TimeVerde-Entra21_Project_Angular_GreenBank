package br.com.entra21.project.greenbank.ProjectGreenBank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class ProjectGreenBankApplication implements CommandLineRunner {

	@Autowired
	private JdbcTemplate jdbc;
	
	public static void main(String[] args) {
		SpringApplication.run(ProjectGreenBankApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// run when start the project
	}

}
