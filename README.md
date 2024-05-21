# GithubAPI
This app connects to the Github API and displays all public repositories and its latest commits of a given user.

-- SETTING UP THE PROJECT --

1. Start by cloning this repository in your directory 
    - git clone https://github.com/dachig/GithubAPI.git
2. npm install - yarn install - npx install
3. create an .env file and add: GITHUB_ACCESS_TOKEN = {your_acces_token}
    - https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens  

-- EXECUTING TESTS --
1. npm run test or npm run test:watch

-- ES6 FUNCTIONS --
1. Promises: I used a promise to handle fetching the user profile when a user input has been submitted on the home page.
    --> why? Promises offer more control, but I am aware that in this case it might be unnecessary. I would probably be off better with async/await as it is more readable and straightforward.

2. Const: 
    --> why? I always use const for fetched data. Fetched data is constant and doesnt change due to external factors. This ensures immutability and keeps the varirable from accidentally changing its value. 
    Besides, it makes clear what your intentions are. 
    Also, const (as is a let), are both block-scoped. Unlike the var, const doesn't have scope leakage.

3. Spread Operator [...]:
    --> why? For the clear filter option on the user page, an array is created with a spread operator, so the array stays dynamic. With the spread operator a shallow copy is made and keeps the array updateable. without it, no modifications would be seen to the sortedRepositores array.


-- Limitations I encountered --
1. Next.js server- and client-side rendering is tough to work around. This was the greatest limiting factor when it came to the infinite scroll component.
You can't make a default function (component) async when it uses client-side rendering and you can't use useStates in a server-side component. Combining these, made it impossible to implement an infinite scroll component, because you have to fetch data each time the scroll component calls the "next" method. I was thinking to migrate to Remix, but it was too late. Perhaps my technical knowledge plays a factor here too.

2. Can't pass props to parent with the standard method of passing the useState callback from parent to child, because as I said; you can't use useStates in server-side components. Seeing the task was to render everything server-side, this resulted in a big trade off.