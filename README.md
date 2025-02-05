
# Testing Express Application with JWT Authentication

To test your Express application with JWT authentication, you can use tools like **Postman** or **cURL** to make HTTP requests. Below are the steps to test each route:

## Step 1: Install Required Dependencies

First, ensure you have the necessary dependencies installed by running:

```bash
npm install express jsonwebtoken
```

## Step 2: Run the Server

Make sure your server is running. You can start it by running the following command in the terminal:

```bash
node server.js
```

## Step 3: Test Routes Using Postman

### 1. **Test the `POST /login` Route**

- **Request Type**: `POST`
- **URL**: `http://localhost:5000/login`
- **Body**: No body is required. This route only simulates a login and returns a JWT token.

- Click **Send** in Postman.
  
- **Response**: You should get a response containing the JWT token:

  ```json
  {
    "token": "<JWT_TOKEN>"
  }
  ```

### 2. **Test the `GET /protected` Route**

- **Request Type**: `GET`
- **URL**: `http://localhost:5000/protected`

- **Headers**: Add an `Authorization` header:
  - Key: `Authorization`
  - Value: `Bearer <JWT_TOKEN>` (Replace `<JWT_TOKEN>` with the token you received in the previous step)

- Click **Send** in Postman.

- **Response**: If the token is valid, you'll get:

  ```text
  Protected Route
  ```

  If the token is invalid or missing, you'll get:

  ```text
  Access Denied
  ```

  Or:

  ```text
  Invalid Token
  ```

## Step 4: Test Routes Using cURL

If you prefer using the command line, you can test with **cURL**.

### 1. **Test the `POST /login` Route**

Run the following `cURL` command to get the JWT token:

```bash
curl -X POST http://localhost:5000/login
```

You should receive a response with the token:

```json
{
  "token": "<JWT_TOKEN>"
}
```

### 2. **Test the `GET /protected` Route**

Once you have the token from the previous step, use it in the following `cURL` request to access the protected route:

```bash
curl -X GET http://localhost:5000/protected -H "Authorization: Bearer <JWT_TOKEN>"
```

If the token is valid, you'll get a response:

```text
Protected Route
```

If the token is invalid or missing, you'll see:

```text
Access Denied
```

Or:

```text
Invalid Token
```

## Step 5: Test Edge Cases

- **No Token Provided**: If you make a request to the `/protected` route without the `Authorization` header, you should receive:

  ```text
  Access Denied
  ```

- **Invalid Token**: If you pass an invalid or expired token, you should receive:

  ```text
  Invalid Token
  ```

Let me know if you need more help with testing or any other part!
