# How to Run Your Lewis Hamilton Website

## ⚠️ IMPORTANT: Do NOT Open index.html Directly!

**Never** double-click `index.html` or open it directly in your browser using `file://` protocol. This will cause CORS errors and the dashboard numbers won't show!

## ✅ Correct Way to Run the Website

### Step 1: Open Terminal/PowerShell
Navigate to your project folder:
```powershell
cd "c:\Vinnovate Project"
```

### Step 2: Start the Local Server
Run this command:
```powershell
python -m http.server 8000
```

You should see:
```
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

### Step 3: Open in Browser
Open your web browser and go to:
```
http://localhost:8000/indxex.html
```

### Step 4: Stop the Server (When Done)
Press `Ctrl + C` in the terminal to stop the server.

---

## 🎯 Quick Reference

| Action | Command |
|--------|---------|
| Start Server | `python -m http.server 8000` |
| View Website | `http://localhost:8000/index.html` |
| Stop Server | `Ctrl + C` |

---

## 🔧 Troubleshooting

### Problem: "python is not recognized"
**Solution:** Install Python from [python.org](https://www.python.org/downloads/)

### Problem: "Port 8000 is already in use"
**Solution:** Use a different port:
```powershell
python -m http.server 8080
```
Then visit: `http://localhost:8080/index.html`

### Problem: Numbers still showing as 0
**Solution:** 
1. Make sure you're using `http://localhost:8000` (NOT `file://`)
2. Clear browser cache (Ctrl + Shift + Delete)
3. Hard refresh the page (Ctrl + F5)

---

## 📝 Why This is Necessary

Modern browsers block JavaScript modules and JSON file loading when using the `file://` protocol for security reasons (CORS policy). A local development server solves this by serving files over HTTP, just like a real website.

---

**Happy Coding! 🏎️💨**
