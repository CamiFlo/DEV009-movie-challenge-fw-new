## 1.1.2 - 2023.11.08

### Sprint learnings
- Dar funcionalidad a pagination
- usar iconos de react para la paginación
- usar tipografias en el proyecto desde la carpeta fonts en assets e impotarlas en css


### Added
- Componente Pagination, con uso dinámico de las páginas

### Changed

- Cambié el nombre de footer a pagination.
- Pagination lo movié de App a MoviesGrid


### Fixed

- No se visualizaban las peliculas por página, solo se veia en consola, ahora ya se renderiza el objeto cuando se cambia la página



## 1.1.1 - 2023.10.31

### Sprint learnings

- Uso de React Router con Router/Routes/Route y Link.
- Aprendí que Switch ya no se usa en V6 :P
- Consumir la Api
- Ir ordenando el proyecto en componentes, páginas/vistas, servicios y como van comunicándose entre si.
- Aprendí a usar module.css como otra forma de da estilo a los componentes.

### Added
- Conexión con la API
- React Router para que la App funciones como SPA
- Módulos de CSS para componentes


### Changed

- Cambié etiquetas de HTML de `div ` y `< p >`a etiquetas más especificas como li, ul, h4, nav que no habia usado antes
- Separé en carpetas components, pages y services

### Fixed

- Estuve usando Switch de React Router que no funcionaba, hasta reemplazarlo por Routes.
- Consumo de la Api, no traia la data, pues no la estaba retornando y no la estaba llamando correctamente en el componente.

### Removed

- eliminé el componente Api y lo reemplacé por una carpeta Services y archivo api.js


## 1.0.0 - 2023.10.18



### Sprint learnings

- Identificar componentes, como partes de la UI que pueden volver a ser usadas en otras partes de la página.
- Cree el primer componente que reutiliza otro componente
- Familiaricé con JSX, props y como envolver elementos
- Como importar archivos y componentes, como jerarquizar con "default" en la importación.
- Tener archivos CSS por componente para facilitar la organización y mantenimiento del código y mejorar la lectura del estilo teniendo cerca su archivo css y su componente.

### Added

- En este sprint trabajé en base la HU1, desarrollé componentes que se muestran en la página: Header(logo),MovieBoard(muestra componente movie(poster,title & year) en 2 filas y 5 columnas), Footer(paginación)
- Di estilo básico en CSS para visualizar en el local host las ubicaciones inciales
- Movie tiene una pelicula de muestra de TMDB para visualizar la información de 1 pelicula

