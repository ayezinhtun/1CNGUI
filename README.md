# OneCloudNextGeneration – React + Vite Website

This is the source code for the One Cloud Next Generation website, built with React and Vite. The site is fully deployed and accessible on the 1CNG’s internal cloud server.

---

## 🔗 Live Site

http://10.0.116.46/

> Note: This is an internal IP address. Ensure you're connected to the correct network to access it.

---

## 🛠 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- Deployed on: **Ubuntu 24.04**
- Web Server: **Nginx**

---

## 📁 Source Code Access

The full source code is provided by email. To set up the project locally:

1. Download and extract the `.zip` file.
2. Open the project folder in your terminal.

---

## 📂 Local Development Setup

### 1. Install Dependencies

```bash
npm install
# or
yarn
```

### 2. Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view the app in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

This will create a `dist/` folder with the optimized static files.

---

## 🚀 Deployment Details

- **Deployed Build Location**: `/var/www/html` on the cloud server
- **Web Server**: Nginx
- **Nginx Config File**: `/etc/nginx/sites-available/onecloudng`

### 🔧 Example Nginx Config

```nginx
server {
    listen 80;
    server_name _;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

After updating Nginx config, run:

```bash
sudo systemctl restart nginx
```

---

## 📄 License

This project is proprietary and delivered for 1CNG use only. Redistribution or resale is not permitted.

---

## 👨‍💻 Developed By

- **Phyu Sin Thant**
- Freelance Web Developer
- Contact: phyusinthant.94@gmail.com