# Exercise Tracker

## About
This is my project of the [Exercise Tracker challenge](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker) challenge for the freeCodeCamp API and Microservice certification. It was built based on the boilerplate available [here](https://github.com/freeCodeCamp/boilerplate-project-exercisetracker/).

- I can POST to /api/users with form data username to create a new user. The returned response will be an object with username and _id properties.
- I can make a GET request to /api/users to get a list of all users returning an array.Each element in the array is an object literal containing a user's username and _id.

![image](https://user-images.githubusercontent.com/48526020/205167518-58e68058-ecf8-4ff9-8aed-4169846d336c.png)

- I can POST to /api/users/:_id/exercises with form data description, duration, and optionally date. If no date is supplied, the current date will be used.The response will be the user object with the exercise fields added.

![image](https://user-images.githubusercontent.com/48526020/205167684-b36e9501-3fcb-4023-a5f3-7f8ce4f20fde.png)

- I can make a GET request to /api/users/:_id/logs to retrieve a full exercise log of any user that returns a user object with a count property representing the number of exercises that belong to that user and the user object with a log array of all the exercises added. Each item in the log array is an object that should have a description, duration, and date properties.
- The description property should be a string. The duration property should be a number. The date property should be a string. Should use the dateString format of the Date API.
- I can add from, to and limit parameters to a GET /api/users/:_id/logs request to retrieve part of the log of any user. from and to are dates in yyyy-mm-dd format. limit is an integer of how many logs to send back.

![image](https://user-images.githubusercontent.com/48526020/205168310-f7abdbc3-d785-461d-be8e-7ce586f29102.png)

## Feedback
I'm a student and I really would like to hear in case you have any tips, correction suggestions or comments about any my of projects. Thanks in advance.
