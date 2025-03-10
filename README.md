# szlatenyi.net - Personal Website

A personal website for Janos Szlatenyi built with Next.js and Tailwind CSS, designed to be hosted on Cloudflare.

## Features

for content, use the squarespace files. 

- Responsive design
- Landing page with personal information
- About page with skills and experience
- Companies page with information about Hermes Finances and Midas Finances (hermesfinances.com and midasfinances.com)
- Interactive CV page 
- Contact form
- Password-protected area for personal content

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Cloudflare Pages (for deployment)

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/szlatenj/szlatenyi.net.git
   cd szlatenyi.net
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Deployment to Cloudflare Pages

This website is designed to be deployed on Cloudflare Pages, which provides full support for Next.js applications.

1. Push your code to a GitHub repository.
2. Log in to your Cloudflare dashboard.
3. Navigate to Pages and create a new project.
4. Connect your GitHub repository.
5. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
6. Deploy the site.

## Project Structure

```
szlatenyi.net/
├── src/
│   ├── app/
│   │   ├── about/
│   │   ├── companies/
│   │   ├── contact/
│   │   ├── cv/
│   │   ├── protected/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── lib/
│   └── styles/
├── public/
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## License

ISC

## Author

Janos Szlatenyi