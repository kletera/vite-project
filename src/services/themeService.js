// src/services/themeService.js
import dompurify from 'dompurify';
const THEME_KEY = 'app-theme'; // Pour sauvegarder le choix dans le localStorage

/**
 * Applique un thème DaisyUI à la racine du document.
 * @param {string} theme - Nom du thème DaisyUI (ex: 'light', 'dark', 'cupcake', etc.)
 */
export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
}

/**
 * Retourne le thème actuel appliqué.
 * @returns {string|null}
 */
export function getCurrentTheme() {
  return localStorage.getItem(THEME_KEY);
}

/**
 * Alterne entre "light" et "dark"
 */
export function toggleTheme() {
  const current = getCurrentTheme() || 'light';
  const next = current === 'light' ? 'dark' : 'light';
  setTheme(next);
  return next;
}

/**
 * Initialise le thème au démarrage de l'app
 */
export function initTheme() {
  const saved = getCurrentTheme();
  if (saved) {
    setTheme(saved);
  } else {
    // Détection automatique du thème système
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
}

export function initToggleBtn() {
    const toggleBtn = document.createElement('button');
  toggleBtn.className = 'btn btn-outline btn-sm fixed bottom-5 right-1 z-50';
  //Pas oublier dom purify ou bleach 
  toggleBtn.innerHTML = dompurify.sanitize('🌓'); 
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener('click', () => {
    const theme = toggleTheme();
    toggleBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
  });
}