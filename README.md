# Next.js, TypeScript, and Sanity Studio v3 Starter

This starter uses Next.js with TypeScript and includes ESLint and TypeScript ESLint with their recommended configurations. Additionally, it includes a basic implementation of Sanity Studio v3.

## Getting Started

Clone the project:

```bash
git clone https://github.com/keplux/typescript-next-sanity-v3.git
```

## Set Up Sanity
Next, you need to create a Sanity project if you don't already have one.

### Using an existing project
If you already have a Sanity project, copy your `projectId` and `dataset` name into the properties provided in both `sanity.cli.ts` and `sanity.config.ts`.

### Creating a new project
If you don't have a project, you can create one in your terminal. Use the following command to create your project:
```bash
npx create sanity@dev-preview
```

You can then delete the new project it created.

Go to your [Sanity account](https://www.sanity.io) to get your `projectId` and `dataset` and copy them into the properties provided in both `sanity.cli.ts` and `sanity.config.ts`.

### Allow CORS origin to Next.js server
*Note: If you don't do this, you won't be able to access your studio.*

1. In your [Sanity account](https://www.sanity.io), click the `API` tab. Under `CORS origins`, delete the host `http://localhost:3333`.

2. Click `Add CORS origin` and enter the URL to your Next.js server. Unless you've changed something, it will be `http://localhost:3000`.

3. Click `Save`.

If you deploy your project, make sure to add the deployment URL to `CORS origins` here as well.

## View the Studio

You can now run your project:
```bash
npm run dev
```

By default, this template hosts the Studio at the `/studio` route. You can view your Studio at `http://localhost:3000/studio`.

### Changing the Studio route
This is a basic dynamic routing change with Next.js. If you don't know about dynamic routing, [click here](https://nextjs.org/docs/routing/dynamic-routes) to learn more.

The Studio can be found in `/pages/studio/[[...index]].tsx`.

## More Information

If you'd like to learn more about the tools and technologies used in this template, check out the following links:

- [Next.js](https://nextjs.org/docs/getting-started)

- [Sanity Studio v3](https://www.sanity.io/blog/sanity-studio-v3-developer-preview)

- [ESLint Rules](https://eslint.org/docs/latest/rules/)

- [TypeScript ESLint Rules](https://typescript-eslint.io/rules/)

In a future update, I'll add a link to a blog post for a deep dive into how I built this template.

## Need help?
Feel free to open up an issue if something's not working right.