import { render } from 'preact'
import { App } from './app.tsx'
import './index.css'
import '@esri/calcite-components/dist/calcite/calcite.css';
import '@esri/calcite-components';
import { defineCustomElements } from '@esri/calcite-components/dist/loader';

defineCustomElements(window);

render(<App />, document.getElementById('app') as HTMLElement)
