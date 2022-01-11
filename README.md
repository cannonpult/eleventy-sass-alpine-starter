# Eleventy Sass Alpine Starter
This is a bare bones starter that will have you writing Markdown files and styling with SASS in minutes.

## Development Scripts
package.json contains available terminal commands to get started. 

**`npm start`**

> Run 11ty with hot reload at localhost:8080, including reload based on Sass changes

**`npm run build`**

> Production build includes minified, autoprefixed CSS

Use this as the "Publish command" if needed by hosting such as Netlify.

## SCSS Directory Structure 
sass/

- abstracts/
  - _mixins             // Sass Mixins Folder
  - _variables.scss     // Sass Variables

- core/
  - _reset.scss         // Reset
  - _typography.scss    // Typography Rules

- components/
  - _buttons.scss       // Buttons
  - _carousel.scss      // Carousel
  - _slider.scss        // Slider

- layout/
  - _navigation.scss    // Navigation
  - _header.scss        // Header
  - _footer.scss        // Footer
  - _sidebar.scss       // Sidebar
  - _grid.scss          // Grid

- pages/
  - _home.scss          // Home styles
  - _about.scss         // About styles

- sections/ (or blocks/)
  - _hero.scss          // Hero section
  - _cta.scss           // CTA section

- vendors/ (if needed)
  - _bootstrap.scss     // Bootstrap

- main.scss             // Main Sass file