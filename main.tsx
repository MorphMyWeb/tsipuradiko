@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
@import "tailwindcss";

@theme {
  --font-display: "Playfair Display", Georgia, serif;
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  
  --color-primary: #054a91; /* Warm Aegean Blue */
  --color-primary-light: #e8f1f5; /* Light soft sky blue */
  --color-accent: #b26c31; /* Earthy greek tavern terracotta / wood */
  --color-wood: #8b5a2b; /* Deep rustic wood */
  --color-cream: #fcfbf9; /* Warm off-white / parchment */
}

/* Custom transitions and scroll behaviors */
html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-cream);
  color: #2d3748;
}

/* Style custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: var(--color-cream);
}
::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent);
}
