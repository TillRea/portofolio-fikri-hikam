import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

// Entry prerender (build SSR): merender App menjadi HTML statis di build time
// untuk disuntikkan ke <div id="root"> pada index.html produksi.
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
