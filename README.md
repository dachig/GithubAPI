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