package br.com.entra21.project.greenbank.ProjectGreenBank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.com.entra21.project.greenbank.ProjectGreenBank.model.Pessoa;

public interface IPessoaRepository extends JpaRepository<Pessoa, Integer> {

}
