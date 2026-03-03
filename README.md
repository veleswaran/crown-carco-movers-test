# Crown cargo movers

Courier & Logistics

## Project Structure

```
/ crown-cargo-movers       
├──app/
|   └── actions.ts       
│   ├── globals.css                 
│   ├── layout.tsx
│   ├── page.tsx
│   ├── constants.ts
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── tracking/
│   │   └── page.tsx
|──components/
│   ├── AboutSection.tsx        
│   ├── CargoEnquiry.tsx
│   ├── ContactSection.tsx                 
│   ├── DrivingScene.tsx   # Canvas Animation (Plane)
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── MobileBottomBar.tsx         
│   ├── MobileMenu.tsx                
│   ├── NavLink.tsx           
|   ├── ServicesSection.tsx
|   ├── TrackingSection.tsx 
|   └── WelcomeSection.tsx       
|____         
```

## Prompt for Canvas Animation

"Create a Next.js client component using Three.js that features a stylized 3D logistics plane taking off from a runway. The scene should have a morning sky palette, high-performance basic shadows, and a parallax background of clouds. The plane should have a takeoff animation sequence, and the camera should follow the plane's movement. Ensure the code includes full resource disposal to prevent memory leaks during hot reloads."

## Local Development

```bash
# Install dependencies
npm install

# Set environment variables
cp .env.local.example .env.local
# Edit .env.local with your GEMINI_API_KEY

# Start dev server
npm run dev
# Opens http://localhost:3000
```

© 2026 Crown Cargo movers 
