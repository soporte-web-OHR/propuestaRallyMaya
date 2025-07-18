#!/usr/bin/env node

/**
 * Script para corregir rutas de assets en GitHub Pages
 * Se ejecuta después del build para asegurar que todas las rutas sean correctas
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

const DIST_DIR = './dist';
const BASE_PATH = '/propuestaRallyMaya';

function fixHtmlFiles() {
  console.log('🔧 Corrigiendo rutas en archivos HTML...');
  
  const htmlFiles = glob.sync(`${DIST_DIR}/**/*.html`);
  
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Corregir rutas CSS que no incluyan el base path
    content = content.replace(
      /href="\/_astro\//g,
      `href="${BASE_PATH}/_astro/`
    );
    
    // Corregir rutas JS que no incluyan el base path
    content = content.replace(
      /src="\/_astro\//g,
      `src="${BASE_PATH}/_astro/`
    );
    
    // Asegurar que las rutas de imágenes incluyan el base path
    content = content.replace(
      /src="\/(?!propuestaRallyMaya)/g,
      `src="${BASE_PATH}/`
    );
    
    fs.writeFileSync(file, content);
    console.log(`✅ Corregido: ${file}`);
  });
}

function fixCSSFiles() {
  console.log('🎨 Corrigiendo rutas en archivos CSS...');
  
  const cssFiles = glob.sync(`${DIST_DIR}/**/*.css`);
  
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Corregir URLs en CSS
    content = content.replace(
      /url\(\"?\/(?!propuestaRallyMaya)/g,
      `url("${BASE_PATH}/`
    );
    
    fs.writeFileSync(file, content);
    console.log(`✅ Corregido CSS: ${file}`);
  });
}

// Verificar que el directorio dist existe
if (!fs.existsSync(DIST_DIR)) {
  console.error('❌ Directorio dist no encontrado. Ejecuta npm run build primero.');
  process.exit(1);
}

console.log('🚀 Iniciando corrección de rutas para GitHub Pages...');
fixHtmlFiles();
fixCSSFiles();
console.log('✨ Corrección completada exitosamente!');
