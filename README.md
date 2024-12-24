# New-CSEC-Website

This repository contains the source code for the new website of the CyberSecurity Club (CSEC) at the University of Texas at Arlington (UTA). The website is built using Nuxt.js, a powerful Vue.js framework, and includes various components and pages to showcase the club's activities, events, and members.

### Dependencies:
* Nuxt v3.14
* NuxtUI
* bun [packagemanager]

To easily install bun run: 
```sh
npm install -g bun
```

Full documentation is available at [bun documentation](https://bun.sh/docs/cli/run).

To update all dependencies, run:
```sh
bun install
```

### Scripts

The following scripts are defined in the `package.json` file:

* `bun run build` - Build the project (`nuxt build`)
* `bun run dev` - Start the development server (`nuxt dev`)
* `bun run generate` - Generate static files (`nuxt generate`)
* `bun run preview` - Preview the production build (`nuxt preview`)
* `bun run postinstall` - Prepare the project after installation (`nuxt prepare`)

### Project Structure

The project has the following structure:

```
csec-website/
├── .gitignore
├── .nuxt/
├── .output/
├── app.config.ts
├── app.vue
├── assets/
├── bun.lockb
├── components/
│   ├── archeived/
│   │   ├── AppAlert.vue
│   │   ├── CustomButton.vue
│   │   └── footer_navbar_home_help.md
│   ├── AboutUs.vue
│   ├── CurrentEventBox.vue
│   ├── EmailForm.vue
│   ├── Footer.vue
│   ├── Home.vue
│   ├── LightDarkSwitch.vue
│   ├── Navbar.vue
│   ├── OfficerBlocks.vue
│   ├── PastCarasol.vue
│   └── SponsorBlocks.vue
├── nuxt.config.ts
├── package.json
├── pages/
│   ├── calendar.vue
│   ├── events.vue
│   ├── index.vue
│   ├── officers.vue
│   └── sponsors.vue
├── public/
├── README.md
├── server/
├── tsconfig.json
└── ui.config/
    └── tailwind.config.ts
```

### Components

The project includes several Vue components:

* `AboutUs.vue` - Information about what the club offers and why to join.
* `CurrentEventBox.vue` - Displays upcoming events fetched from an external feed.
* `EmailForm.vue` - A form to send emails to the club.
* `Footer.vue` - The footer of the website with contact information and social links.
* `Home.vue` - The home page content.
* `LightDarkSwitch.vue` - A switch to toggle between light and dark themes.
* `Navbar.vue` - The navigation bar with links to different pages.
* `OfficerBlocks.vue` - Displays information about the club officers.
* `PastCarasol.vue` - A carousel showcasing past events.
* `SponsorBlocks.vue` - Displays information about the club sponsors.

### Pages

The project includes several pages:

* `calendar.vue` - Displays the current events.
* `events.vue` - Displays past events.
* `index.vue` - The home page.
* `officers.vue` - Displays the club officers.
* `sponsors.vue` - Displays the club sponsors.

### Configuration

* `app.config.ts` - Configuration for the Nuxt application.
* `nuxt.config.ts` - Nuxt configuration file.
* `tailwind.config.ts` - Tailwind CSS configuration.

### Development

To start the development server on `http://localhost:3000`, run:

```sh
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

To build the application for production, run:

```sh
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

To locally preview the production build, run:

```sh
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### Useful Resources

* [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
* [Tailwind CSS Components Cheatsheet](https://www.creative-tim.com/twcomponents/cheatsheet/)