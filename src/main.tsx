import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './App';
import '@fontsource-variable/inter';
import '@fontsource/cormorant-garamond/500.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/cormorant-garamond/500-italic.css';
import '@fontsource/noto-sans-armenian/400.css';
import '@fontsource/noto-sans-armenian/500.css';
import '@fontsource/noto-sans-armenian/600.css';
import '@fontsource/noto-serif-armenian/500.css';
import '@fontsource/noto-serif-armenian/600.css';
import './index.css';

export const createRoot = ViteReactSSG({ routes });
