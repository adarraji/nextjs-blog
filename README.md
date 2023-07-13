This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


========================================================================
========================================================================

## Built With

* HTML
* CSS
* Javascript
* Next.js
* MongoDB / Mongoose
* NextAuth.js
* Google Cloud as auth provider


## Environmental Variables

### MongoDB URL

In `src/utils/db.js` replace `process.env.MONGO` with your MongoDB url 

### BASE URL
Replace `process.env.BASE_URL` with the api base url in:

* `src/app/blog/page.jsx`



Example: `http://localhost:8800/api`

### Google Cloud Auth

In `src\app\api\auth\register\route.js` Add the Client ID and Client secret from Google cloud Credentials in APIs & Services 

for more information:

* [Next Auth.js Google Provider](https://next-auth.js.org/providers/google)
* [Google Cloud APIs Credentials](https://console.developers.google.com/apis/credentials)
* [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2)



### NEXTAUTH_SECRET

Used to encrypt the NextAuth.js JWT, and to hash email verification tokens. This is the default value for the secret option in NextAuth and Middleware.

For more information
* [Auth.js OAuth authentication](https://authjs.dev/getting-started/oauth-tutorial)
* [NEXTAUTH_SECRET](https://next-auth.js.org/configuration/options#nextauth_secret)


