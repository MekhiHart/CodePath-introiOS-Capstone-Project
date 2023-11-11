# CodePath-introiOS-Capstone-

##    First Step: Initial Ideas

1. Cooking App
2. Roomate Finder
3. University Schedule maker


## Step 2: Evaluating App Ideas
### Top 2 Ideas:
- Cooking App
- Roomate Finder


#### Cooking App:
- Mobile:
    - Users will be able to store recipes in their phone without the need of an internet
    - Users will be able to access native iOS widgets for features such as calorie tracking
    - Users will be able to have access to seamless animation and transisitons when switching to different screeens

- Story:
    - The value of the app is signficant when users are using the app to rack their recipes, find recipes
    - Friends or peers will respond positively since it can help them pick a recipe they want to cook, create a meal plan, keep track of ingredients at home by a pantry, and a grocery list.

- Habit:
    - Users will use the app when saving recipes they want to save, and being able to find it later on
    - User will mostly create content from the recipes they make, interact with the grocery list, and creating a meal plan

- Market:
    - The size and scale of the app might be big be broad since it's available for anyone who likes to keep track of the food they want to eat.
    
- Scope: 
    - In terms of the technical challenges, it will be a lot of workload since this is a full-stack application that requires a database store the user's recipes, and the frontend will be a lot of work since there are multiple screens to this


#### Roomate Finder
- Description: Allows college university students, or apartment finders to match with roomates. It also has a system to delegate responsibilities for roomates, and preferences to what roomate they're looking for
- Category: Social Networking
- Mobile: Mobile is necessary since features include tracking bills and notify users of incoming bills. The camera is also use to take a picture of what the user looks like
- Story: Creates matches between multiple users. Preferences of users will be used to match other users to create the best possible match.
- Market: Large market for university students since some are commuters and finding an apartment near University.
- Habit: Users will initially use the app to find matches. After finding matches, they will use the calendar to keep track of events related to the apartment


- Scope: This app will be technically difficult since it is a networking app

### Final Decision
- I will be building the Cooking App since I personally have a problem of tracking recipes. Builing an app that helps me and other users is something I want

## Second Step: Sprint Planning:
- Sprint 1: Work with Graphic Design team in developing wireframes. Start developing system design to ensure app has the ability to scale if user base grows.
- Sprint 2: Identifying reusable UI components, graphics team work on high-fidelity prototype, and we get feedback for user testing. I will study SwiftUI to be able to write declarative code. I will also start studying on how to write an authorization service where the client will make a request to successfully login and sign up. Will probably use OAuth so I don't risk violating data privacy laws (GDPR & CCPA). Will need support with a law student to help us write out legal stuff too.
- Sprint 3: Start building login and sign up screen. Set up CI/CD pipeline to be able to test client app and backend server. Jenkins for the automation server but need to set up docker agent to test for both client and backend. 
- Sprint 4: Same thing from Sprint 3 but just the stuff I missed.


### Main features I want to focus on for now: Login and Sign with OAuth
- Allow the user to sign in with valid credentials
- Allow the user to sign in with an Identity provider: Apple & Google
- If user closes the app and opens the app again, the user NEEDS to remain logged in

- Allow the user to sign up for an account
- After a successful sign up, navigate the user in creating a profile


