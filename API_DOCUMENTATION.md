# WordPress API Documentation for Next.js

This document outlines the custom and default WordPress REST API endpoints used in this Next.js application. It is meant to help future developers understand where data is coming from and how it maps to the UI.

---

## 1. Global Layout (Header & Footer)

**File location:** `src/app/layout.js`

This file fetches data that appears on every page of the application.

### A. Navigation Menu

- **Endpoint:** `/wp-json/twentytwentyfive/v1/menu/primary_menu`
- **Purpose:** Fetches the dynamic list of header links (Home, About, Projects).
- **Setup in WP:** Created via a custom REST API endpoint in the theme's `functions.php`.

### B. Theme Settings (ACF Options)

- **Endpoint:** `/wp-json/twentytwentyfive/v1/theme-settings`
- **Purpose:** Fetches global site settings from the ACF Options page.
- **Fields Used:**
  - `header_logo`: Image URL used in `src/components/Navbar.js`.
  - `footer_copyright`: HTML string used in `src/components/Footer.js`.
- **Setup in WP:** Created via a custom REST API endpoint in the theme's `functions.php` which hooks into `get_field('...', 'option')`.

---

## 2. About Us Page

**File location:** `src/app/about/page.js`

- **Endpoint:** `/wp-json/wp/v2/pages?slug=about&_embed`
- **Purpose:** Fetches the content and ACF fields for the "About Us" page.
- **Data Structure:** Uses an **ACF Flexible Content** field named `page_section`.
- **Layouts Used:**
  - `about_section`: Contains `hero_subtitle`, `hero_title_start`, `hero_title_highlight`, `hero_description`.
  - `content_section`: Contains `values_title`, `core_values` (repeater with `titlle` and `description`), `journey_title`, `journey_text` (WYSIWYG), `journey_button` (Link).

---

## 3. Projects Gallery Component

**File location:** `src/components/ProjectsGallery/ProjectsGallery.js`

- **Endpoint:** `/wp-json/wp/v2/posts?_embed&per_page=6`
- **Purpose:** Fetches standard WordPress blog posts to display as project cards.
- **Why `_embed`?:** It tells WordPress to include the attached Featured Media (images) and Terms (categories) in the response so we don't have to make additional API calls for them.
- **Fields Used:**
  - `title.rendered`: Post title.
  - `_embedded['wp:featuredmedia']`: Post thumbnail.
  - `_embedded['wp:term']`: Post categories.
  - `acf.color`: A custom ACF color picker field on posts used for the card background color.

---

## Caching Strategy

All fetch requests in this Next.js app use **Incremental Static Regeneration (ISR)** via the following code:

```javascript
{
  next: {
    revalidate: 60;
  }
}
```

This means Next.js will cache the WordPress API responses for 60 seconds. Updates made in WordPress will take up to 60 seconds to reflect on the live Next.js production site. This guarantees lightning-fast load times for end users.
