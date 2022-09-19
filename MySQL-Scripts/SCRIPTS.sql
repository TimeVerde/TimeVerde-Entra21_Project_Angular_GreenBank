INSERT INTO greenbank (nome, cpf, rg, data_nascimento, mae, pai, senha, cep, endereco, celular) 
VALUES ("Elias Leandro Lopes", "921.909.491-65", "48.692.343-5", "24/07/1991", "Gabrielly Elaine Stella", "Theo Joaquim Gael Lopes", 
"Fs6okRWlet", "66033-180", "Praça Batista Campos", "(91) 98964-8548");

SELECT * FROM greenbank;

INSERT INTO greenbank (nome, cpf, rg, data_nascimento, mae, pai, senha, cep, endereco, celular)
VALUES ("Ricardo Bruno Manoel Rodrigues", "312.326.606-04", "29.575.694-9", "07/08/1990", "Vanessa Cecília Bianca", "Isaac Thomas Matheus Rodrigues", 
"CWfZORiSn4", "71010-087", "Quadra QI 10 Bloco H", "(61) 98385-8490");

INSERT INTO greenbank (nome, cpf, rg, data_nascimento, mae, pai, senha, cep, endereco, celular) 
VALUES ("Guilherme Igor Pires", "771.181.197-76", "45.922.144-9", "01/06/1977", "Aurora Bárbara", "Enzo Pietro Gael Pires", 
"myupJfLiZi", "57010-371", "Avenida Assis Chateaubriand", "(82) 99218-8836");

UPDATE greenbank SET email = "elias_leandro@moppe.com.br" WHERE id = 1;
UPDATE greenbank SET email = "ricardo_bruno@resource.com.br" WHERE id = 2;
UPDATE greenbank SET email = "guilherme.igor.pires@vilasites.com.br" WHERE id = 3;

DELETE FROM greenbank WHERE id = 10;