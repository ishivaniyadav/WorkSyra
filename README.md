# 🚀 WorkSyra - Job Tracking Dashboard

**WorkSyra** is a modern, responsive job tracking web application built with **React**, **React Router**, and **Tailwind CSS**. It allows users to manage their job applications by adding, viewing, and tracking statuses, along with managing their personal profiles.

---

## 🌐 Live Demo

🔗 [Click here to view the live site](https://worksyra.vercel.app/)

---

## 📸 Screenshots

![Dashboard](https://github.com/user-attachments/assets/d9ba0c71-d9f0-48a5-96a4-eee072a2238a)
![Job Form](https://github.com/user-attachments/assets/217ac9aa-da81-4b4e-b8b9-cf3d8949b109)
![All Jobs](https://github.com/user-attachments/assets/221c1934-82d3-4505-af1d-0720bb1c599a)
![Profile](https://github.com/user-attachments/assets/e8766849-d343-4b68-8cd8-a10dcca13ebe)
![Mobile View](https://github.com/user-attachments/assets/3821d7c1-6bc3-459e-b64e-aac9aa2a9b86)

---

## 🛠 Tech Stack

<div align="left">
  <img src="https://skillicons.dev/icons?i=react,tailwind,js,vite" alt="Tech stack" height="40" />
</div>

- ⚛️ **React**
- 🧭 **React Router DOM**
- 💨 **Tailwind CSS**
- ⚡ **Vite**

---

## 🧑‍💻 Features

- 📊 **Stats Dashboard** — Track job applications (Pending, Interview, Declined)
- 📝 **Add Job** — Add position, company, job type, and status
- 📋 **All Jobs** — View all your submitted applications
- 🔍 **Edit/Delete Jobs** — Update or remove job entries
- 👤 **Profile Management** — Update your personal info like name, email, location
- 🎨 **Responsive UI** — Seamlessly adapts to desktop, tablet, and mobile devices

---

## 🧰 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ishivaniyadav/WorkSyra.git
cd WorkSyra
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Tailwind

If Tailwind isn't already set up, do the following:

```bash
npx tailwindcss init -p
```

Then, update `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

And in `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Run the App

```bash
npm run dev
```

> App will be live at `http://localhost:5173/` by default.

---

## 📝 License

This project is licensed under the **MIT License**.
Feel free to use, fork, and improve!

---

## 🙋‍♀️ Author

Made with ❤ by [Shivani Yadav](https://github.com/ishivaniyadav)

> Contributions and feedback are always welcome!
