# Ferramentas utilizadas

* React: versão "^18.2.0",
* Node: versão v18.16.1
* PostgreSQL: 11.7

# Testando a aplicação localmente

## Banco de dados
* Primeiro será necessário preparar o banco de dados.

* Crie o database.
```
create database db_gerencia
```

Dê um refresh no banco.

* Em seguida, acesse o query tool do db_gerencia e crie a sequence para o auto increment dos ids.
```SQL
create sequence id_cliente_seq 
increment by 1 
```

* Agora crie a tabela abaixo.

```SQL
-- Table: public.tb_cliente

-- DROP TABLE IF EXISTS public.tb_cliente;

CREATE TABLE IF NOT EXISTS public.tb_cliente
(
    id_cliente integer NOT NULL DEFAULT nextval('id_cliente_seq'::regclass),
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    telefone character varying(255) COLLATE pg_catalog."default" NOT NULL,
    eixo_x integer,
    eixo_y integer,
    CONSTRAINT tb_cliente_pkey PRIMARY KEY (id_cliente),
    CONSTRAINT ct_email UNIQUE (email),
    CONSTRAINT ct_telefone UNIQUE (telefone)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.tb_cliente
    OWNER to postgres;

```

## Front e Back
* Após executar o clone do projeto
```SH
git clone https://github.com/italosaager/code-test.git
```

* Dentro da pasta back, crie o arquivo ".env" e coloque as variáveis de ambiente necessárias para conectar ao banco e escolher a porta da api. Fiz utilizando a porta 3005. Caso queira utilizar outra porta, lembre-se de alterar no front-end no arquivo 'service' localizado em front/src/services.

```SH
USER=
HOST=
DATABASE=
PASSWORD=

API_PORT=3005

DOMINIOS=*
```

* Acesse as pastas do front e back e instale o node_modules
```SH
npm install
```

* Dentro das pastas do front e back, dê start nas aplicações.
```SH
npm start
```

Fim.
