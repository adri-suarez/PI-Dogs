### Preview actual:

#### Landing
![image](https://user-images.githubusercontent.com/107125191/228409528-d91b03d7-fe45-47fd-ba11-e93bb8efbf67.png)
#### Home
![image](https://user-images.githubusercontent.com/107125191/228409627-4f76af12-da93-4c04-b7b5-2d6ad18b9e23.png)
#### Breed Detail
![image](https://user-images.githubusercontent.com/107125191/228409800-2d15c3ae-b962-448d-81b5-251fd3d5c0a9.png)
#### Create form
![image](https://user-images.githubusercontent.com/107125191/228409840-aac9f5f4-58e5-443f-9317-7f9b8069720d.png)

## Objetivos y funcionalidades de la App

- Construcción de una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.

- __Node__: 12.18.3 o mayor
- __NPM__: 6.14.16 o mayor

Versiones de dependencias:

- __react__: 17.0.1
- __react-dom__: 17.0.1
- __react-router-dom__: 5.2.0
- __redux__: 4.0.5
- __react-redux__: 7.2.3

La idea general es crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

- Buscar perros
- Filtrarlos / Ordenarlos (sin uso de endpoints de la API sino propios de la App)
- Agregar nuevos perros

#### Tecnologías

- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## Frontend

Desarrollo de una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Pagina inicial__: Landing page con

- [ ] Una imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: Contiene

- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros en forma de "Cards". Mostrando:
  - Imagen
  - Nombre
  - Temperamento
  - Peso
- [ ] Botones/Opciones para filtrar por:
  - Temperamento
  - Raza existente (es decir las que vienen de la API) o agregada por nosotros (creadas mediante el form)
- [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por:
  - Orden alfabético
  - Peso
- [ ] Paginado para ir buscando y mostrando las siguientes razas, mostrando 8 razas por página.

__IMPORTANTE__: Dentro de la Ruta Principal se muestran tanto las razas de perros traidas desde la API como así también las de la base de datos, pero NO se almacena en la base de datos las razas de perros de la API sino que solamente se pueden guardar aquellas creadas desde el form.

__Ruta de detalle de raza de perro__: contiene

- [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

__Ruta de creación de raza de perro__: contiene

- [ ] Un formulario __controlado con JavaScript__ con los siguientes campos:
  - Nombre
  - Altura (mínima y máxima)
  - Peso (mínimo y máximo)
  - Años de vida
- [ ] Posibilidad de seleccionar/agregar uno o más temperamentos
- [ ] Botón/Opción para crear una nueva raza de perro

## Base de datos

- [ ] Razas:
  - ID *
  - Nombre *
  - Altura *
  - Peso *
  - Años de vida
- [ ] Temperamentos:
  - ID
  - Nombre

La relación entre ambas entidades es de muchos a muchos ya que una raza de perro puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a múltiples razas de perro distintas.

## Backend

Servidor en Node/Express con las siguientes rutas:

__IMPORTANTE__: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades estan implementadas por mi.

- [ ] __GET /dogs__:
  - Obtener un listado de las razas de perro
  - Debe devolver solo los datos necesarios para la ruta principal
- [ ] __GET /dogs?name="..."__:
  - Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro mostrar un mensaje adecuado
- [ ] __GET /dogs/{idRaza}__:
  - Obtener el detalle de una raza de perro en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluir los temperamentos asociados
- [ ] __POST /dogs__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos relacionada con sus temperamentos
- [ ] __GET /temperaments__:
  - Obtener todos los temperamentos posibles
  - En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
