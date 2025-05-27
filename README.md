# QR Code Generator React 

A modern, customizable QR code generator built with React.  
Includes animated intro screen, multiple logo/design options, and advanced customization like colors, sizes, and scan text.

---

## Features

- **Animated Intro Screen** with bouncing QR code  
- **Dynamic QR Code Display** with SVG rendering  
- Multiple **Logo & Design Selector** options (default + popular social media logos)  
- Customizable **QR color**, **background color**, **text color**, and **text size**  
- Responsive layout: on smaller screens, the QR code displays above the design selector  
- Clean and modern UI with gradient backgrounds and smooth animations  
- Accessibility and usability improvements  
- Fully functional **Hero**, **About**, and **Contact** sections  

---

## Technologies Used

- React (functional components and hooks)  
- [qrcode.react](https://github.com/zpao/qrcode.react) for SVG QR code generation  
- FontAwesome for icons  
- CSS-in-JS for styling and animations  

---

## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/attiqzahoor/qr-code-generator-react.git
   cd qr-code-generator-react
Install dependencies:


npm install
# or
yarn install
Run the development server:


npm start
# or
yarn start
Open http://localhost:3000 to view the app in your browser.

Usage
Enter a URL or text in the input field to generate a QR code.

Select from different logo/design styles.

Customize the QR code color, background, text, and logo size using the controls.

The app automatically adapts layout for mobile and desktop screens.

Use the animated intro screen on load for a smooth user experience.

Folder Structure


src/
├── components/
│   ├── QRCodeDisplay.jsx      # Main QR code rendering component
│   ├── DesignSelector.jsx     # Logo/design and customization controls
│   ├── HeroSection.jsx        # Top section with input URL field
│   ├── AboutSection.jsx       # About info section
│   ├── ContactSection.jsx     # Contact form and details
│   ├── QRIntroAnimation.jsx   # Animated QR code intro screen
├── App.jsx                   # Main app component combining all sections
├── index.js                  # React entry point
Customization
You can easily customize:

Default QR code colors and text

Add or remove logo options in DesignSelector.jsx

Modify animation timing and styles

Extend with more sections or features

Contributing
Contributions are welcome! Feel free to:

Submit bug reports or feature requests

Fork the repo and open pull requests

Improve documentation or add tests

Please follow the standard GitHub flow.

License
This project is licensed under the MIT License. See LICENSE for details.

Contact
Muhammad Attiq
📞 +92 302 1183906
✉️ attiqmuhammad51@gmail.com
🔗 LinkedIn Profile
