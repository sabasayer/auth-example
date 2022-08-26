# Sample Project for Nextjs Authentication

This project is an example of basic authentication flow with mocking the api with localeStorage.

In this project React hooks and functional components are used.

## Stack

- Nextjs
- Typescript
- MUI 

## Getting Started

I recommend you to install 'pnpm'.

First, install the dependencies :

```bash
pnpm i
```

Then, run the development server:

```bash
pnpm dev
```

Go to localhost:3000 you will see running project.


 ## Structure

 MUI initialized in the _app.tsx with a base theme. 

 _document.tsx is used for adding Roboto font.

 **panel.tsx** page is guarded with authentication check on the client side because we are storing the auth data in localeStorage

 **login.tsx** and **signup.tsx** is using **auth-layout.tsx** layout. In that component navigation between two of them is handled.

 **panel-layout.tsx** layout is used for **panel.tsx** and showing after successfull login messages.

 **login.tsx** and **signup.tsx** pages are using the **use-auth** and **use-auth-form** hooks to handle form and events.

 **types** directory holds the types and interfaces.

