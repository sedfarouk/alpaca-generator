# 🦙 Alpaca Generator

A fun **React.js mini project** that lets you generate custom alpacas by mixing and matching different parts (backgrounds, hair, eyes, accessories, and more). You can also randomize alpaca styles and download your creation as an image.

---

## 🚀 Features
- 🖼️ Choose different alpaca parts (background, ears, hair, eyes, nose, mouth, etc.).
- 🎲 **Randomize**: Generate a random alpaca with one click.
- ⬇️ **Download** your customized alpaca as an image.
- 📱 Responsive design for desktop and mobile.

---

## 🛠️ Tech Stack
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [html2canvas](https://www.npmjs.com/package/html2canvas) for image download functionality

---

## 📂 Project Structure
src/
│── components/
│   ├── Alpaca.js        # Main container
│   ├── Part.js          # Renders each alpaca part
│   ├── Settings.js      # UI for selecting alpaca parts
│   ├── UI/
│   │   └── FeatureButton.js
│── utils/
│   └── imagePaths.js    # Maps all alpaca assets
│── assets/              # Image files (alpaca parts)

---

⚡ Getting Started
1. Clone the repository
```
git clone https://github.com/your-username/alpaca-generator.git
cd alpaca-generator
```

2. Install dependencies
```
npm install
```

3. Run the app
```
npm start
```

The app will be available at http://localhost:3000/.

📸 Screenshots

(Add screenshots of your app here — e.g., default alpaca and customized alpaca)