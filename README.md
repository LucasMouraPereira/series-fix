## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## PRODUCTION
You can access:
[https://series-fix.vercel.app/](https://series-fix.vercel.app/)

## ENV
```bash
NEXT_PUBLIC_GATEWAY_API=https://api.tvmaze.com/
```

## Requirements

Develop a FULLY responsive web application that lists TV series and
display the details.

Click on a series to see details

See details of each series

Where the details will be displayed, it must contain the episodes separated by
seasons and the possibility of choosing (through a select) which season
the user will see the list of episodes


Use TypeScript.

Build the application using React.

Manage states the way you want.

All requests must use the fetch api.

Styling only with CSS or SCSS/SASS.

## Requirements implemented
- Home
  - The Home displays the shows that will be released on the day the user accesses the page.
  - Endpoints
      - https://api.tvmaze.com/schedule?country=US&date=${date} -> get the shows whose episodes will be released on the day.

- Shows
    - The Shows page lists all the shows paginated
    - Endpoints
        - https://api.tvmaze.com/shows?page=${pagination}
- Show
    - The Show page displays the details of the selected show along with the details of the episodes per season.
    - On the Show page, the user can select their favorite show and store it in localstorage. This way, they can easily view it on the favorites page.
    - Endpoints
        - https://api.tvmaze.com/shows/${idShow}
        - https://api.tvmaze.com/shows/${idShow}/episodes
- Favorite
    - On the favorites page, the user can see the favorite shows they selected on the show page.
    - Use localstorage.
    - EndPoints
        - N/A
      
## Prints
Home

<img width="1440" alt="Captura de Tela 2024-04-22 às 20 25 10" src="https://github.com/LucasMouraPereira/series-fix/assets/44249663/baaaee1e-ba59-4540-8964-15bdcc742c58">

Shows
<img width="1440" alt="Captura de Tela 2024-04-22 às 20 25 33" src="https://github.com/LucasMouraPereira/series-fix/assets/44249663/ef6a62df-e2cf-4847-8911-db0b771d19a7">
<img width="1440" alt="Captura de Tela 2024-04-22 às 20 25 46" src="https://github.com/LucasMouraPereira/series-fix/assets/44249663/6e1b9371-0984-4349-ba77-82eddf7f7412">

Show
<img width="1440" alt="Captura de Tela 2024-04-22 às 20 26 11" src="https://github.com/LucasMouraPereira/series-fix/assets/44249663/e7935376-dd8f-40f3-8c2b-69dc02adc8fc">
<img width="1440" alt="Captura de Tela 2024-04-22 às 20 26 39" src="https://github.com/LucasMouraPereira/series-fix/assets/44249663/17873f2a-c080-46e7-939e-f210c4a848cc">
<img width="1439" alt="Captura de Tela 2024-04-22 às 20 26 48" src="https://github.com/LucasMouraPereira/series-fix/assets/44249663/4e504b7b-3a24-4a7f-9800-92a0f3f2c98b">

Favorites
<img width="1440" alt="Captura de Tela 2024-04-22 às 20 27 06" src="https://github.com/LucasMouraPereira/series-fix/assets/44249663/0cbfe435-8682-446c-bf4d-8f0c99195d25">

## Recording
[![Recodinf site](https://img.youtube.com/vi/Jqeyp2YDFik/0.jpg)](https://www.youtube.com/watch?v=Jqeyp2YDFik)

## Boilerplate

Files
- src
    - app
      - favoritos
        - page.tsx -> Favorites page
      - programas
        - [slug]
          - page.tsx -> Show page
        - page.tsx -> Shows page
      - layout.tsx -> Common rendering on all pages
      - page.tsx -> Home page
      - not-found -> 404 page
    - components -> Global Components
        - Button -> Button Component
            - index.tsx
            - styles.module.css
        - Card -> Card Component
            - index.tsx
            - styles.module.css
        - Collapse -> Collapse Component
            - index.tsx
            - styles.module.css
        - Grid -> Grid Component
            - index.tsx
            - styles.module.css
        - ListCards -> ListCards Component
            - BaseCard -> BaseCard Components
                - index.tsx
                - styles.module.css
                - types.ts
            - index.tsx
            - styles.module.css
            - types.ts
        - NavBar -> NavBar Component
            - ListNavLinks
                - index.tsx
                - styles.module.css
            - data.ts
            - index.tsx
            - styles.module.css
        - NavLink -> NavLink Component
            - index.tsx
        - Pagination -> Pagination Component
            - index.tsx
            - styles.module.css
        - Rating -> Rating Component
            - index.tsx
            - styles.module.css
        - ResponsiveBox -> ResponsiveBox Component
            - index.tsx
            - styles.module.css
            - types.ts
        - RoundButton -> RoundButton Component
            - index.tsx
            - styles.module.css
    - screens -> Building screens and specific components
        - FavoriteScreens
          - index.tsx
          - styles.module.css
        - HomeScreens
            - HomeContainers
                - index.tsx
                - styles.module.css
            - index.tsx
        - ShowScreens
            - ShowVontainers
                - index.tsx
                - styles.module.css
            - index.tsx
        - ShowsScreens
            - ShowsContainers
                - index.tsx
                - styles.module.css
            - index.tsx
        - NotFoundScreens
            - index.tsx
            - styles.module.css
    - utils
        - functions
            - url.ts -> Functions that manipulate the endpoints urls
            - images.ts -> Fuctions that manipulete images
            - text.ts -> Functions that manipulate the text structure
            - array.ts -> Functions that manipulate the array structure
        - hooks
            - usePathRouter.ts -> hook add the page number to the URL path
            - useShowPage.ts -> hook fetch api
        - services
            -api.ts -> service fetch api
        - styles
            - globals.css -> global styles
            - theme.css -> style theme used all aplication
        - types
            - tvShows.ts -> global types
        - constants.ts -> All url and endpoints in the project
        - data.ts -> data used on app file
