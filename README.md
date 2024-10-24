# Namaste React 🚀


# Parcel
- Dev Build
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in c++ / parcel
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling 
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

//component composition Example.
//What is Component Composition?
Component composition in React refers to the practice of building complex user interfaces by combining smaller, reusable components. In this approach, a parent component can render child components within its structure.

import React from 'react';
import ReactDOM from 'react-dom/client';

const TitleComponent = () => (
  <h1 className="head" tabIndex="1">
    Hello Pavan using JSX Concept
  </h1>
);

//React Functional Component and rendering it on the screen.

const FooterComponent = () => (
  <div id="container">
    <TitleComponent />
    <h1 className="heading">Footer Component1</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<FooterComponent />);
