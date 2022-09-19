package br.com.entra21.project.greenbank.ProjectGreenBank.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.HttpStatus;

import br.com.entra21.project.greenbank.ProjectGreenBank.model.ItemNivel3;
import br.com.entra21.project.greenbank.ProjectGreenBank.model.Pessoa;
import br.com.entra21.project.greenbank.ProjectGreenBank.repository.IPessoaRepository;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/pessoas")
public class PessoaController {

	@Autowired
	private IPessoaRepository pessoaRepository;

	@GetMapping("")
	@ResponseStatus(HttpStatus.OK)
	public List<Pessoa> listAll() {
		List<Pessoa> response = pessoaRepository.findAll();
		response.forEach(pessoa -> {
			setMaturidadeNivel3(pessoa);
		});
		return response;
	}

	@GetMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody List<Pessoa> get(@PathVariable("id") int id) {
		List<Pessoa> response = pessoaRepository.findById(id).stream().toList();
		response.forEach(pessoa -> {
			setMaturidadeNivel3(pessoa);
		});
		return response;
	}

	@PostMapping()
	@ResponseStatus(HttpStatus.CREATED)
	public @ResponseBody Pessoa create(@RequestBody Pessoa novaPessoa) {
		Pessoa response = pessoaRepository.save(novaPessoa);
		setMaturidadeNivel3(novaPessoa);
		return novaPessoa;
	}

	@PutMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody Pessoa update(@PathVariable("id") int id, @RequestBody Pessoa pessoaEditada) {
		Pessoa atual = pessoaRepository.findById(id).get();

		atual.setNome(pessoaEditada.getNome());
		atual.setCpf(pessoaEditada.getCpf());
		atual.setRg(pessoaEditada.getRg());
		atual.setData_nascimento(pessoaEditada.getData_nascimento());
		atual.setMae(pessoaEditada.getMae());
		atual.setPai(pessoaEditada.getPai());
		atual.setCep(pessoaEditada.getCep());
		atual.setEndereco(pessoaEditada.getEndereco());
		atual.setCelular(pessoaEditada.getCelular());
		atual.setSenha(pessoaEditada.getSenha());
		atual.setEmail(pessoaEditada.getEmail());

		atual = pessoaRepository.save(atual);
		setMaturidadeNivel3(atual);
		return atual;
	}

	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.OK)
	public @ResponseBody boolean delete(@PathVariable("id") int id) {

		pessoaRepository.deleteById(id);
		return !pessoaRepository.existsById(id);
	}

	private void setMaturidadeNivel3(Pessoa pessoa) {

		final String PATH = "localhost:8080/personagens";

		ArrayList<String> headers = new ArrayList<String>();

		headers.add("Accept : application/json");

		headers.add("Content-type : application/json");

		ObjectMapper mapper = new ObjectMapper();

		mapper.setSerializationInclusion(Include.NON_NULL);

		try {

			Pessoa clone = mapper.readValue(mapper.writeValueAsString(pessoa), Pessoa.class);

			clone.setLinks(null);

			String nomeAtual = clone.getNome();

			clone.setNome("Nome diferente");

			String jsonUpdate = mapper.writeValueAsString(clone);

			clone.setNome(nomeAtual);

			clone.setId(null);

			String jsonCreate = mapper.writeValueAsString(clone);

			pessoa.setLinks(new ArrayList<>());

			pessoa.getLinks().add(new ItemNivel3("GET", PATH, null, null));

			pessoa.getLinks().add(new ItemNivel3("GET", PATH + "/" + pessoa.getId(), null, null));

			pessoa.getLinks().add(new ItemNivel3("POST", PATH, headers, jsonCreate));

			pessoa.getLinks().add(new ItemNivel3("PUT", PATH + "/" + pessoa.getId(), headers, jsonUpdate));

		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}
}
