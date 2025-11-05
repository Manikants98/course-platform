# Admin Panel URLs

## 🔐 Admin Access

### Admin Login
**URL**: `/admin/login`
- **Full URL**: `http://localhost:3000/admin/login`
- **Demo Credentials**:
  - Email: `admin@eduverse.com`
  - Password: `admin123`

---

## 📊 Admin Dashboard Pages

### 1. Dashboard Home
**URL**: `/admin/dashboard`
- **Full URL**: `http://localhost:3000/admin/dashboard`
- **Features**:
  - Overview statistics (Users, Courses, Revenue, Enrollments)
  - Top performing courses table
  - Recent users list
  - Trend indicators

### 2. Course Management
**URL**: `/admin/dashboard/courses`
- **Full URL**: `http://localhost:3000/admin/dashboard/courses`
- **Features**:
  - View all courses in table format
  - Search courses by title or instructor
  - Filter by status (Active, Draft, Archived)
  - Edit and delete course actions
  - Add new course button
  - Course details: image, instructor, students, price, rating, level

### 3. User Management
**URL**: `/admin/dashboard/users`
- **Full URL**: `http://localhost:3000/admin/dashboard/users`
- **Status**: Coming soon

### 4. Analytics
**URL**: `/admin/dashboard/analytics`
- **Full URL**: `http://localhost:3000/admin/dashboard/analytics`
- **Status**: Coming soon

### 5. Settings
**URL**: `/admin/dashboard/settings`
- **Full URL**: `http://localhost:3000/admin/dashboard/settings`
- **Status**: Coming soon

---

## 🎨 Admin Panel Features

### Navigation
- **Sidebar Navigation** (Desktop)
  - Collapsible menu with icons
  - Active page highlighting
  - Logout option at bottom

- **Mobile Navigation**
  - Hamburger menu
  - Slide-out sidebar
  - Full-screen overlay

### Design
- **Color Scheme**: Indigo primary color
- **Layout**: Fixed sidebar with scrollable content
- **Responsive**: Mobile, tablet, and desktop optimized
- **Icons**: Heroicons library

### Security
- Demo authentication system
- Protected routes (layout wrapper)
- Logout functionality

---

## 🚀 Quick Start

1. **Start the dev server**:
   ```bash
   npm run dev
   ```

2. **Access admin login**:
   - Navigate to: `http://localhost:3000/admin/login`

3. **Login with demo credentials**:
   - Email: `admin@eduverse.com`
   - Password: `admin123`

4. **You'll be redirected to**:
   - Dashboard: `http://localhost:3000/admin/dashboard`

---

## 📁 File Structure

```
app/admin/
├── login/
│   └── page.tsx                    # Admin login page
└── dashboard/
    ├── layout.tsx                  # Admin dashboard layout (sidebar)
    ├── page.tsx                    # Dashboard home
    └── courses/
        └── page.tsx                # Course management
```

---

## ✨ Features Implemented

### ✅ Login Page
- Clean, centered login form
- Demo credentials display
- Form validation
- Toast notifications
- Back to main site link

### ✅ Dashboard Layout
- Fixed sidebar navigation
- Mobile-responsive hamburger menu
- Top bar with user info
- Active page highlighting
- Logout button

### ✅ Dashboard Home
- 4 stat cards with trend indicators
- Top performing courses table
- Recent users table
- Real-time data display

### ✅ Course Management
- Full course listing table
- Search functionality
- Status filter dropdown
- Edit/Delete actions
- Add new course button
- Pagination controls
- Course thumbnails

---

## 🔜 Coming Soon

- User management page
- Analytics and reports
- Settings page
- Course editor (add/edit)
- Bulk actions
- Export functionality
- Advanced filters
- Role-based access control

---

## 📝 Notes

- All admin routes are prefixed with `/admin`
- Dashboard routes are nested under `/admin/dashboard`
- Authentication is demo-only (not production-ready)
- Toast notifications for user feedback
- Responsive design for all screen sizes
