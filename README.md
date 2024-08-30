# CGES Website Documentation

## Overview

To allow dynamic content with a minimum of programming knowledge, components are controlled by a single JSON structure. For ease of use, this is derived from the spreadsheet file "content.xlsx" at the repository root.

As an example: In the building of this project, all changes were:

- Edit Google Sheet file
- Exported as XLXS
- Navigate to cges/docs/content.xlsx in the repository
- Click on edit (pencil) and change the name of the file to YYMMDDcontent.xlsx and commit the changes
- Navigate to cges/docs
- Upload the exported google content.xlsx file

**Location:**

## Fonts

The fonts and their respective uses are listed below. For consistency, please use the same when creating PDFs for the carousel. All fonts used are provided free of charge by Google.

**Headers**: Raleway - Deprecated
**Content**: Avenir - Deprecated
**ALL FONT**: Noto Sans

## Components and columns in the JSON

There are three basic programmatic components created for this project. They are a:

- Carousel component
- Grid component
- List component
- Map component

The rest of this document will be devoted to documenting each column required for each of the above components.

### Carousel

This creates the carousel on the landing page that features rotating pictures and a contextual document when the user clicks on an image.

Columns

- picture: The JPEG file name
- title: The visible label for the picture
- file: The PDF file name that will be opened when clicked or empty

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

NOTE: If using a spreadsheet, Section content can be enclosed in "".

- Section: Text copy
- Type: The type of content in the row (See below)
- Foreground: Foreground (text) HTML color
- Background: Background HTML color
- Notes: Arbitrary designer notes

#### Row "type" values

Accepted values and functions are:

**title:** The section text should be in a large font
**normal: **The section text should be in a normal font
**space:** Used to pad space between two text sections
**bg-image:** Specify the name of a sheet in the _Section_ column to nest into this one. Additionally, encapsulate the content in an image specified in the _Background_ column.
**bg-parallax:** Specify the name of a sheet in the _Section_ column to nest into this one. Additionally, encapsulate the content in an image specified in the _Background_ column.

#### List Component Images

**Location:** cges/public/cges/img

### Card Grid

This creates a grid of info boxes (cards). If the items specified in the sheet have multiple types, a filter component will appear on the side to select between sub-groups.

- title: The card title
- subtitle: The card subtitle
- abstract_image: The image that will appear in the card
- abstract: Abstract text
- type: Item rubric (If there are multiple types, the filter will show.)
- link: Card link when clicked.

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
