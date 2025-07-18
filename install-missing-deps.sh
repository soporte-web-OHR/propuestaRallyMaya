#!/bin/bash

# Script para instalar las dependencias faltantes
echo "Instalando dependencias faltantes..."

# Instalar dependencias principales
npm install --save @astrolib/analytics @astrolib/seo tailwind-merge @astrojs/rss astro-embed

echo "Dependencias instaladas correctamente"
echo "Ejecuta: npm run build para verificar que se solucionaron los errores"
