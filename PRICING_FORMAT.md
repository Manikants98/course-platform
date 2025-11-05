# EduVerse - Pricing Format Guide

## 💰 Indian Rupee (₹) Pricing

All prices across the platform are now displayed in **Indian Rupees (₹)** following the Flipkart/Amazon style.

---

## 📊 Price Display Examples

### Course Cards
```
₹4,999
₹24,999
₹3,499
₹5,999
₹2,999
```

### Course Detail Page
```
₹4,999 (Large, bold text)
```

### Admin Dashboard
```
Revenue: ₹12,45,000
Course Revenue: ₹62,48,750
```

---

## 🎯 Pricing Structure

| Course Type | Price Range | Format |
|-------------|-------------|--------|
| **SSC CHSL** | ₹2,999 - ₹3,499 | ₹3,499 |
| **SSC CGL** | ₹4,999 - ₹5,999 | ₹4,999 |
| **Banking/IBPS** | ₹5,999 - ₹7,999 | ₹5,999 |
| **Railway RRB** | ₹2,999 - ₹3,999 | ₹2,999 |
| **UPSC CSE** | ₹24,999 - ₹29,999 | ₹24,999 |

---

## 🔢 Number Formatting

### Indian Number System
Following the Indian numbering system with commas:

- **Thousands**: ₹2,999
- **Lakhs**: ₹2,45,000 (2.45 lakhs)
- **Crores**: ₹1,25,00,000 (1.25 crores)

### Implementation
```typescript
// Using toLocaleString('en-IN')
₹{course.price.toLocaleString('en-IN')}

// Examples:
2999 → ₹2,999
24999 → ₹24,999
124500 → ₹1,24,500
6248750 → ₹62,48,750
```

---

## 📱 Display Locations

### 1. **Course Cards** (`CourseCard.tsx`)
- Font: Large, bold
- Color: Dark gray (#111827)
- Format: `₹{price.toLocaleString('en-IN')}`

### 2. **Course Detail Page** (`/courses/[slug]/page.tsx`)
- Font: Extra large (3xl), bold
- Color: Dark gray (#111827)
- Format: `₹{price.toLocaleString('en-IN')}`

### 3. **Admin Dashboard** (`/admin/dashboard/page.tsx`)
- Revenue stat: `₹12,45,000`
- Course revenue table: `₹62,48,750`
- Format: Indian comma separation

### 4. **Admin Course Management** (`/admin/dashboard/courses/page.tsx`)
- Table column: Price
- Font: Semibold
- Format: `₹{price.toLocaleString('en-IN')}`

---

## 🎨 Styling Guidelines

### Typography
```css
/* Course Card Price */
text-lg font-bold text-gray-900

/* Course Detail Price */
text-3xl font-bold tracking-tight text-gray-900

/* Admin Table Price */
text-sm font-semibold text-gray-900
```

### Color Palette
- **Primary Text**: `text-gray-900` (#111827)
- **Rupee Symbol**: Same as price (₹)
- **Background**: White or light gray

---

## 💡 Best Practices

### ✅ DO
- Use Indian Rupee symbol (₹)
- Format with Indian comma system
- Make prices bold and prominent
- Use consistent formatting across platform
- Show prices without decimals for whole numbers

### ❌ DON'T
- Don't use dollar sign ($)
- Don't use Western comma format (1,000,000)
- Don't show unnecessary decimals (.00)
- Don't use small font sizes for prices
- Don't hide pricing information

---

## 📊 Revenue Calculations

### Example Calculations
```
SSC CGL Course:
- Price: ₹4,999
- Students: 1,250
- Revenue: ₹62,48,750

UPSC Course:
- Price: ₹24,999
- Students: 850
- Revenue: ₹2,12,49,150

Banking Course:
- Price: ₹5,999
- Students: 1,500
- Revenue: ₹89,98,500
```

---

## 🌐 Localization

### Current: India (en-IN)
```javascript
price.toLocaleString('en-IN')
```

### Future Support
- Regional language pricing
- State-specific offers
- Festival discounts
- Bulk purchase pricing

---

## 🎯 Competitive Analysis

### Similar to:
- **Flipkart**: ₹4,999 (bold, prominent)
- **Amazon India**: ₹24,999 (large font)
- **Unacademy**: ₹3,499 (clear pricing)
- **BYJU'S**: ₹5,999 (upfront pricing)

### Our Advantage:
- ✅ Clear, upfront pricing
- ✅ No hidden charges
- ✅ Indian Rupee format
- ✅ Competitive rates
- ✅ Value for money

---

## 📈 Pricing Strategy

### Tier 1: Entry Level (₹2,999 - ₹3,999)
- Railway RRB
- SSC CHSL
- State exams

### Tier 2: Mid Level (₹4,999 - ₹6,999)
- SSC CGL
- Banking exams
- Teaching exams

### Tier 3: Premium (₹24,999+)
- UPSC CSE
- IAS/IPS preparation
- Comprehensive programs

---

**EduVerse - Transparent Pricing, Quality Education** 🇮🇳
