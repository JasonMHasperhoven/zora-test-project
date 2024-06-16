## Getting Started

```bash
yarn # or yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Lib Choices & Notes

I’ve chosen NextJS as I believe it’s a better choice for production apps compared to create react app.

I choose to use @tanstack/react-query since I wanted something quick, even though it was my first time using the library.

I ran into a complication with @tanstack/react-query and NextJS, which I solved by adding the <Provider /> component (from google ngl) and the "use client" at the top of page.tsx. I have also experience with redux saga, redux toolkit, rematch & apollo client (which is similar with its hooks).

Additionally for styling, I opted for tailwind since I noticed that mint.fun uses it as well =). I'm familiar with BEM, css modules, styled components as well.

The search input is debouncing and I'm aware that there’s quite a bit of prop drilling. On that point, I could’ve used useContext or plain old redux, but this implementation is still simple imo.

Furthermore it’s fully responsive and changes colors when you select them.

The only thing that’s lacking is tests, but then I would’ve exceeded the time.
