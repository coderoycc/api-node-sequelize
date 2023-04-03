# API REST USANDO SEQUELIZE - EXPRESS - POSTGRESQL
En esta API se maneja una base de datos con tablas en postgres.
* Las tablas son las siguientes:
- `music`: esta tabla contiene los atributos (id_m, title, artist, genre)
- `user`: una tabla adicional para identificar a los propietarios de las playlist contiene (id_u, name)
- `playlist`: que contiene (id_pl, name_p, id_u)
- `playlistMusic`: que es una relación con una única llave primaria (id_pl, id_m)

## DOCUMENTACIÓN IMPORTANTE SEQUELIZE
- <a href="https://sequelize.org/docs/v6/core-concepts/assocs/">CONCEPTOS DE ASOCIACIÓN</a>
- <a href="https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/">ASOCIACIÓN AVANZADA</a>

## CREACIÓN DE RELACIONES
* Para crear una relación UNO a UNO las asociaciones `hasOne` y `belongsTo` se usan juntas.
````js
Foo.hasOne(Bar); // FOO tiene un BAR
Bar.belongsTo(Foo); // BAR pertenece a un FOO
```
* Para crear una relación de UNO a MUCHOS las asociaciones ``hasMany`` y ``belongsTo`` se usan juntas;
* Para crear una relación de MUCHOS a MUCHOS ``belongsToMany`` se usa para dos llamadas juntas de las tablas involucradas.





