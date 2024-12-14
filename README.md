# **itops-cli**

**itops-cli** is a Command Line Interface (CLI) tool designed to simplify administrative tasks for Google Workspace. The tool provides functionality to manage users, groups, and validate email addresses through a simple and efficient interface.

---

## **Features**

- **Add users to groups:** Easily assign users to specific Google Workspace groups.
- **List group members:** View all members of a specified group.
- **List user groups:** Check all groups a user belongs to.
- **Validate users:** Validate email addresses from a Google Sheet using external APIs.

---

## **Installation**

### **System Requirements**
- **Node.js:** Version 18.x or higher
- **npm:** Version 6.x or higher

### **Steps to Install**
1. Clone the repository:
   ```bash
   git clone https://github.com/ashmigol/itops-cli.git
   ```
2. Navigate to the project directory:
   ```bash
   cd itops-cli
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Link the CLI globally:
   ```bash
   npm link
   ```

---

## **Commands**

### **Add a user to a group**
Add a user to a Google Workspace group:
```bash
itops add-to-group <userEmail> <groupEmail>
```
**Example:**
```bash
itops add-to-group user@example.com group@example.com
```

### **List group members**
List all members of a specific group:
```bash
itops list-group-members <groupEmail>
```
**Example:**
```bash
itops list-group-members group@example.com
```

### **List user groups**
View all groups a specific user belongs to:
```bash
itops list-user-groups <userEmail>
```
**Example:**
```bash
itops list-user-groups user@example.com
```

### **Validate users from a Google Sheet**
Validate email addresses using a Google Sheet ID:
```bash
itops validate-users <sheetID>
```
**Example:**
```bash
itops validate-users 1UiTVsoEm1nij71WgpcdhwMXkLJjr2Ecf50KTR2wonGc
```

---

## **Configuration**

### **Secrets**
To securely manage your authentication token, create a `secrets.js` file in the project root with the following content:
```javascript
module.exports = {
  AUTH_BEARER_TOKEN: 'your-secret-token',
};
```

Add the file to `.gitignore`:
1. Open (or create) a `.gitignore` file in the project root.
2. Add the following line:
   ```
   secrets.js
   ```
This ensures that your `secrets.js` file is not pushed to GitHub or exposed publicly.

---

## **Usage Examples**

### **Validate users**
Validate email addresses from a Google Sheet:
```bash
itops validate-users 1UiTVsoEm1nij71WgpcdhwMXkLJjr2Ecf50KTR2wonGc
```

### **List user groups**
Check all groups a user is a member of:
```bash
itops list-user-groups user@example.com
```

---

