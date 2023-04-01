# API REST USANDO SEQUELIZE - EXPRESS - POSTGRESQL
En esta API se maneja una base de datos con tablas en postgres.
* Las tablas son las siguientes:
- `music`: esta tabla contiene los atributos (id_m, title, artist, genre)
- `user`: una tabla adicional para identificar a los propietarios de las playlist contiene (id_u, name)
- `playlist`: que contiene (id_pl, name, id_u)
- `playlistMusic`: que es una relación con una única llave primaria (id_pl, id_m)




