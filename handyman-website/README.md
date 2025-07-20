# HandyPro - Handyman Service Website

A modern, fully responsive handyman service website built with React, Vite, Tailwind CSS, and Framer Motion. Features smooth animations, clean design, and professional presentation.

## 🌟 Features

- **Modern Design**: Clean, professional design with soft colors (whites, light blue, warm gray, beige)
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Sticky Navigation**: Fixed navbar with animated hamburger menu
- **Full-Screen Menu**: Animated overlay menu with staggered link animations
- **Hero Section**: Compelling hero with background image and call-to-action
- **Services Showcase**: Comprehensive services overview with hover effects
- **Customer Testimonials**: Social proof with animated testimonial cards
- **Contact Form**: Functional contact form with form validation
- **Google Maps Integration**: Interactive map showing service area
- **SEO Optimized**: Clean structure and semantic HTML

## 📱 Pages

1. **Home (/)** - Hero section, services overview, testimonials, and CTA
2. **Services (/services)** - Detailed service listings with images and features
3. **About (/about)** - Company story, mission, team, and values
4. **Contact (/contact)** - Contact form, map, and contact information

## 🛠 Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd handyman-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Colors

The color palette can be customized in `tailwind.config.js`:

- **Primary**: Blue tones for buttons and accents
- **Warm**: Gray tones for text and backgrounds
- **Beige**: Warm accent colors for highlights

### Content

- Update company information in the component files
- Replace placeholder images with actual photos
- Modify contact information and service area
- Customize the Google Maps embed with your location

### Styling

- All styles use Tailwind CSS utility classes
- Custom components are defined in `src/index.css`
- Responsive breakpoints: `sm`, `md`, `lg`, `xl`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Navigation with hamburger menu
│   ├── Footer.jsx           # Footer with links and contact info
│   ├── HeroSection.jsx      # Homepage hero section
│   ├── ServicesOverview.jsx # Services cards overview
│   ├── TestimonialsSection.jsx # Customer testimonials
│   └── CTASection.jsx       # Call-to-action section
├── pages/
│   ├── Home.jsx             # Homepage
│   ├── Services.jsx         # Services page
│   ├── About.jsx            # About page
│   └── Contact.jsx          # Contact page
├── App.jsx                  # Main app component
├── main.jsx                 # App entry point
└── index.css                # Global styles and Tailwind
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images and layouts
- Fast loading on all devices

## 🔧 Development Tips

1. **Hot Reload**: Development server includes hot reload for instant updates
2. **Component Development**: Each component is modular and reusable
3. **Animation Performance**: Framer Motion animations are optimized for performance
4. **Accessibility**: Includes proper ARIA labels and semantic HTML

## 📞 Contact Information

Update the following files with your actual contact information:
- `src/components/HeroSection.jsx`
- `src/components/CTASection.jsx`
- `src/components/Footer.jsx`
- `src/pages/Contact.jsx`

## 📄 License

This project is licensed under the MIT License.
