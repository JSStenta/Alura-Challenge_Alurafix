# AluraFlix

AluraFlix es una aplicación web para gestionar y visualizar videos. Está construida con React y Vite, y utiliza styled-components para el estilo.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/JSStenta/aluraflix.git
   ```

2. Navega al directorio del proyecto:
```
cd aluraflix
```
3. Instala las dependencias:
```
npm install
```
## Uso
Para iniciar la aplicación en modo de desarrollo, ejecuta:
```
npm run dev
```
Para construir la aplicación para producción, ejecuta:
```
npm run build
```
Para previsualizar la aplicación construida, ejecuta:
```
npm run preview
```

## Estructura del proyecto
```
.gitignore
eslint.config.js
index.html
package.json
public/
README.md
src/
    assets/
    Components/
        Banner/
            Banner.jsx
            Banner.styled.js
        Button/
            Button.jsx
            Button.styled.js
        Card/
            Card.jsx
            Card.styled.js
        CategoryVideos/
            CategoryVideos.jsx
            CategoryVideos.styled.js
        Footer/
            Footer.jsx
            Footer.styled.js
        Header/
            Header.jsx
            Header.styled.js
    Contexts/
        VideoContext.jsx
    main.jsx
    Pages/
        BasePage/
            BasePage.jsx
            BasePage.styled.js
        Home/
            Home.jsx
            Home.styled.js
        NewVideo/
            NewVideo.jsx
            NewVideo.styled.js
        NotFound/
            NotFound.jsx
            NotFound.styled.js
    routes.jsx
    Services/
        api.js
    Styles/
        GlobalStyles.js
        Theme.js
vite.config.js
```