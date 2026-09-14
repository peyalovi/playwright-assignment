# Postman API Automation with Newman

This is a beginner-level API automation project using **Postman** and **Newman**.

API used:

`https://jsonplaceholder.typicode.com/users`

## Tasks

### Task 1 - Get All Users

- Send a GET request to `/users`
- Check that the status code is `200`
- Check that user data is present
- Check that every user has:
  - `id`
  - `name`
  - `email`

### Task 2 - Extract User ID

- Send a GET request to `/users`
- Take the first user's `id`
- Store it in a collection variable called `userId`
- Also store the user's phone number in `userPhone`

### Task 3 - Build User Endpoint

Use the stored `userId` to create:

`/users/{{userId}}`

Check that the status code is `200`.

### Task 4 - Update User

Send a PUT request to:

`/users/{{userId}}`

Update:

- name
- email
- company.name

The values are generated dynamically.

Check that:

- Status code is `200`
- Returned ID matches `userId`
- Phone is not empty

## Collection Structure

The collection has 4 requests:

```text
API_Automation
│
├── Task 1 - Get All Users
├── Task 2 - Extract User ID
├── Task 3 - Build User Endpoint
└── Task 4 - Update User
```

## Files

```text
API_Automation.postman_collection.json
README.md
```

## Requirements

You need:

- Node.js
- npm
- Newman

Check Node.js:

```terminal
node --version
```

Check npm:

```terminal
npm --version
```

Install Newman:

```terminal
npm install -g newman
```

Check Newman:

```terminal
newman --version
```

## Run All Tasks

Open the terminal in the project folder and run:

```terminal
newman run API_Automation.postman_collection.json
```

This runs all 4 tasks together.

```text
Task 1
   ↓
Task 2
   ↓
Task 3
   ↓
Task 4
```

At the end, check that:

```text
failed: 0
```

## Run Individual Tasks

### Task 1

```terminal
newman run API_Automation.postman_collection.json --folder "Task 1 - Get All Users"
```

### Task 2

```terminal
newman run API_Automation.postman_collection.json --folder "Task 2 - Extract User ID"
```

### Task 3

Task 3 needs a `userId`, so when running it separately:

```terminal
newman run API_Automation.postman_collection.json --folder "Task 3 - Build User Endpoint" --env-var "userId=1"
```

### Task 4

Task 4 needs `userId` and `userPhone` when running separately:

```terminal
newman run API_Automation.postman_collection.json --folder "Task 4 - Update User" --env-var "userId=1" --env-var "userPhone=1-770-736-8031"
```

## Variables

Task 2 stores:

```text
userId
userPhone
```

The complete flow is:

```text
GET users
   ↓
Get user ID
   ↓
Save userId
   ↓
Use {{userId}}
   ↓
GET /users/{{userId}}
   ↓
PUT /users/{{userId}}
```

When running all tasks together, the variables are passed from Task 2 to the later tasks.

When running Task 3 or Task 4 separately, use `--env-var` to provide the required values.

## Expected Result

A successful run should show tests passing for each task.

For example:

```text
Task 1
✓ Status code is 200
✓ Response contains user data
✓ Each user has id, name and email

Task 2
✓ Status code is 200
✓ User ID was stored

Task 3
✓ Status code is 200

Task 4
✓ Status code is 200
✓ Returned ID matches stored ID
✓ Phone field is not empty
```

## Tools Used

- Postman
- Newman
- JavaScript
- REST API
- JSON
- Node.js
