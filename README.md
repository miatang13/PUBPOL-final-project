# The Automated Workforce

A static website exploring how robots are automating jobs across industries.

---

## Running the project

```bash
npm install       # first time only
npm run dev       # start local dev server at http://localhost:5173
```

---

## Updating industry data

Each industry has its own file in `src/data/`. **Only edit your field's file** — this avoids merge conflicts with teammates.

| Industry | File |
|---|---|
| Warehousing | `src/data/warehousing.js` |
| Manufacturing | `src/data/manufacturing.js` |
| Retail | `src/data/retail.js` |
| Healthcare | `src/data/healthcare.js` |
| Agriculture | `src/data/agriculture.js` |

### Job schema

Each job object looks like this:

```js
{
  title: 'Job Title',
  humanImage: 'images/<field>/filename.png',   // path relative to /public
  robotImage: 'images/<field>/robot.png',
  annualIncome: 45000,                          // number, no $ or commas
  robots: [
    {
      name: 'Robot Name',
      company: 'Company Name',
      description: `Markdown supported here.

**Bold**, *italic*, bullet lists, numbered lists all work.`,
      price: '$50,000 / year',
      image: 'images/<field>/robot.png',
    }
  ]
}
```

### Adding images

Drop image files in `public/images/<your-field>/`. Reference them as `images/<field>/filename.png` (no leading slash, no `/public` prefix).

### Adding a new job

Copy an existing job block within your field file and fill in the fields. Each job can have one or more robots in its `robots` array.

---

## Updating text sections

### Background & Motivation

Edit `src/data/background.js`. The file exports a `title` and a `paragraphs` array — each string in the array is one paragraph.

```js
export default {
  title: 'Background and Motivation',
  paragraphs: [
    'First paragraph text...',
    'Second paragraph text...',
  ],
}
```

### Policy & Geopolitics

Same structure, edit `src/data/policy.js`.

```js
export default {
  title: 'Policy and Geopolitics',
  paragraphs: [
    'First paragraph text...',
    'Second paragraph text...',
  ],
}
```
