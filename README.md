# CGES Website Documentation

## Overview

To allow dynamic content with a minimum of programming knowledge, components are controlled by a single JSON structure derived from "content.xlsx" in docs.

Suggested Github workflow:

- Navigate to cges/docs/ in the repository in a browser
- Download the current content.xlsx file
- Modify it locally as needed
- Upload (overwrite) the xlsx & commit it

NOTE: To view the changed site, use an Incognito browser as it will take some time before the old assets age-out of your normal browser cache.
NOTE: When changing spreadsheet content, make sure the spreadsheet program isn't overly "helpful". In my experience a copy/paste of file names could result in unwanted changes. Ex: A normal short dash used in a PDF file name being changed to a long "Em Dash" which in addition to being a totally different character, rendered the PDF inaccessable.

## Technical Notes

It is expected that most changes after deployment will be to the static content on Github in "docs".

The Nuxt framework uses the common distinction between the bundled static content for deploying and unbundled development files. The distinction is important because, while the static site was built to be dynamic in that content/styles/assets can be modified, when deployed, these assets derive from the unbundled "public" directory.

If the core code is ever modified and re-deployed, verify that backups of all changes to "docs" are also added to "public" as a redeploy will overwrite all static content. See Nuxt.txt for deploy notes.

That said, nothing will likely get lost while hosting on Github as git saves file versions automatically.

## App Colors

The XLSX contains a sheet AppColors wherein UI related colors can be modified.

The headers are:

- Primary: The top and bottom app bars
- Secondary: The donate button
- map-color-0: Countries with no data
- map-color-1: Abolitionist
- map-color-2: Abolitionist for common law crimes
- map-color-3: De facto abolitionist
- map-color-4: Retentionist

## Fonts

The fonts and their respective uses are listed below. For consistency, please use the same when creating PDFs for the carousel. All fonts used are provided free of charge by Google.

**Headers**: Raleway - Deprecated

**Content**: Avenir - Deprecated

**ALL FONT**: Noto Sans

## Components and columns in the config files

There are four basic programmatic components created for this project. They are a:

- Carousel component
- Grid component
- List component
- Map component

The rest of this document will be devoted to documenting each column required for each of the above components. All file locations are for developers. To change the static content only, (see warning above) the directories would be docs. Ex: cges/public/cges/img would be cges/docs/img.

### Carousel

This creates the carousel on the landing page that features rotating pictures and a contextual document when the user clicks on an image.

Columns

- picture: The JPEG file name
- title: The visible label for the picture
- file: The PDF file name that will be opened when clicked if any

#### Carousel Images

**Location:** cges/public/cges/img

#### Carousel PDFs

**Location:** cges/public/cges/pdf

The PDF format was chosen for the content of the carousel links.  
Using Google Docs to generate documents is recommended as they are assured to have the required fonts.

- Create the document
- Export as PDF
- Upload to the location above
- Use the title in the carousel configuration spreadsheet

### Text List

This creates a sectioned vertical list of text items that can each have their respective foreground and background color. The component allows nesting such that content is further encapsulated in a static or parallax image.
In its simplest form, all content would be in one sheet. For the advanced nested functionality, the main sheet specifies the background image and nests the content of secondary sheets .

NOTE: Text content can be enclosed in "".

- Text: Text copy
- Type: The type of content in the row (See below)
- Foreground: Foreground (text) HTML color
- Background: Background HTML color

#### Row "type" values

Accepted values and functions are:

- title: The section text should be in a large font and centered
- normal: The section text should be in a normal font and left justified
- space: Used to pad space between two text sections
- picture: A centered image

Deprecated

- bg-image: Specify the name of a sheet in the _Section_ column to nest into this one. Additionally, encapsulate the content in an image specified in the _Background_ column.
- bg-parallax: Specify the name of a sheet in the _Section_ column to nest into this one. Additionally, encapsulate the content in an image specified in the _Background_ column.

#### List Component Images

**Location:** cges/public/cges/img

### Card Grid

This creates a grid of info boxes (cards). If the items specified in the sheet have multiple types, a filter component will appear on the side to select between sub-groups.

- Title: The card title
- Subtitle: The card subtitle
- Image: The image that will appear in the card
- Abstract: Abstract text
- Attachments: Card action when clicked. Can be a PDF name or a full URL.
- Type: Item rubric (If there are multiple types, the filter will show.)

#### Card Component Images

**Location:** cges/public/cges/img

#### Card Component PDFs

**Location:** cges/public/cges/pdf

### Map

This creates the map in the WODR section.

- Name: The country name
- ISO: The ISO 2-letter country descriptor
- WODR: Integer of women on death row
- Crime: Comma separated list of crimes
- Legend: One of: "Abolitionist", "Abolitionist for common law crimes", "De facto abolitionist", "Retentionist",

## ===

## Nuxt framework README below

## ===

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
