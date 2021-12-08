INSERT INTO tb_user (name,email, password) VALUES ('Bob Brow', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name,email, password) VALUES ('Ana Maria', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);

INSERT INTO tb_genre (name) VALUES ('Ação');
INSERT INTO tb_genre (name) VALUES ('Suspense');
INSERT INTO tb_genre (name) VALUES ('Terror');



INSERT INTO tb_movie (title, sub_Title, year, img_Url,synopsis,genre_id) VALUES ('Duna','Duna',2021,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTOC8VCTSrgc4jn8tBEgZ0u1C7L40AKaniCkCpD0j2UNCJmXiVj','Situada em um futuro distante, a trama se passa em um império intergaláctico feudal. Feudos planetários estão sob o controle de Casas Nobres, que obedecem à casta imperial da Casa Corrino. Neste contexto, acompanhamos o jovem Paul Atreides, herdeiro de sua casa, quando sua família precisa ser transferida para o planeta Arrakis. Abordando tecnologia, ecologia, política, religião, emoções humanas e outros temas, o filme promete fazer história sob a direção de Denis Villeneuve.' , 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url,synopsis,genre_id) VALUES ('Eternos','Eternos',2021,'https://img.ibxk.com.br/2021/11/05/05093831349060.jpg','Seguindo os acontecimentos de Vingadores: Ultimato, a trama acompanha os Eternos, um dos grupos de seres que foram resultados das experiências dos Celestiais, uma raça de seres extraterrestres superpoderosos, na Terra. Seus experimentos deram origem a três raças: os humanos, os Eternos e os Deviantes. E chegou o momento de os Eternos saírem das sombras para enfrentar os Deviantes.' , 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url,synopsis,genre_id) VALUES ('Matrix 4','Matrix 4',2021,'https://multiversonoticias.com.br/wp-content/uploads/2021/07/matrix-4.jpg','18 anos depois do último filme da trilogia Matrix, a franquia vai ganhar uma continuação. Keanu Reeves e Carrie-Anne Moss retornam aos papéis de Neo e Trinity. Entre os novos nomes estão Yahya Abdul-Mateen II (Aquaman), Neil Patrick Harris (How I Met Your Mother) e alguns atores de Sense8, série da Netflix criada pelas irmãs Wachowski. Lana Wachowski, inclusive, retorna para comandar Matrix 4.' , 1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url,synopsis,genre_id) VALUES ('Um Lugar Silencioso - Parte II','Um Lugar Silencioso - Parte II',2021,'https://br.web.img3.acsta.net/c_310_420/pictures/21/07/07/00/23/1802515.jpg','ASeguindo os acontecimentos mortais dentro de casa, a família Abbott precisa agora encarar o terror mundo afora, continuando a lutar para sobreviver em silêncio. Obrigados a se aventurar pelo desconhecido, eles rapidamente percebem que as criaturas que caçam pelo som não são as únicas ameaças que os observam pelo caminho de areia.' , 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url,synopsis,genre_id) VALUES ('A Guerra do Amanhã','A Guerra do Amanhã',2021,'https://br.web.img2.acsta.net/c_310_420/pictures/21/05/26/20/19/2966501.jpg','Um pai de família precisa lutar numa futura guerra, em que o destino da humanidade dependerá de como ele lidará com os erros do passado.' , 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url,synopsis,genre_id) VALUES ('Oxigênio','Oxigênio',2021,'https://br.web.img3.acsta.net/c_310_420/pictures/21/04/22/12/02/2540935.jpg','Uma mulher presa em uma câmaera criogênica deve agir com precisão e calma para conseguir escapar com vida.' , 2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url,synopsis,genre_id) VALUES ('Halloween Kills: O Terror Continua','Halloween Kills: O Terror Continua',2021,'https://media.fstatic.com/Zpf6hkJNBtNMFuFCeV8AJjJ7iGI=/210x312/smart/media/movies/covers/2021/08/2569_c.jpg','Depois de quatro décadas se preparando para enfrentar Michael Myers, Laurie Strode acredita que enfim venceu. Porém, ela é surpreendida pelo retorno de seu grande inimigo em um novo desdobramento de mais um capítulo na saga Halloween.' , 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url,synopsis,genre_id) VALUES ('Maligno','Maligno',2021,'https://media.fstatic.com/XrqRmLG26JK3_Muqe8ekytZzUXs=/210x312/smart/media/movies/covers/2021/09/malignant-tw-fb3-1626740454219.jpg','Paralisada por visões chocantes de assassinatos brutais, Madison logo descobre que seu tormento irá piorar quando percebe que esses sonhos lúcidos são realidades.' , 3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url,synopsis,genre_id) VALUES ('Noite Passada em Soho','Noite Passada em Soho',2021,'https://media.fstatic.com/lThWbMtKOyJ33XLRpzjiUXdXe6I=/268x386/smart/media/movies/covers/2021/05/Noite_Passada_em_Soho_POSTER_E_CARTAZ_OFICIAL.jpg','Uma jovem apaixonada por moda (Thomasin McKenzie) misteriosamente ganha a chance de voltar aos anos 60 e encontrar sua ídola, uma encantadora cantora aspirante (Anya Taylor-Joy). Mas a Londres dessa década não é o que parece e logo o tempo começa a desmorona com perigosas consequências.' , 3);

 


