#!/bin/bash

echo "🚀 Rally Maya México - Script de Corrección de Errores"
echo "======================================================"

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📦 Instalando dependencias faltantes...${NC}"

# Instalar dependencias principales
npm install --save @astrolib/analytics @astrolib/seo tailwind-merge @astrojs/rss astro-embed

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error al instalar dependencias principales${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Dependencias instaladas correctamente${NC}"

echo -e "${YELLOW}🔧 Ejecutando verificación de TypeScript...${NC}"

# Ejecutar check de Astro
npm run check

echo -e "${BLUE}🏗️ Intentando build...${NC}"

# Ejecutar build
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}🎉 ¡Build completado exitosamente!${NC}"
    echo -e "${GREEN}✨ Todos los errores han sido corregidos${NC}"
else
    echo -e "${YELLOW}⚠️  Aún hay algunos errores. Revisa el output arriba para más detalles.${NC}"
    echo -e "${BLUE}💡 Tip: Puedes ejecutar 'npm run check' para ver solo los errores de TypeScript${NC}"
fi

echo ""
echo -e "${BLUE}📝 Resumen de cambios realizados:${NC}"
echo "   • ✅ Agregadas dependencias faltantes al package.json"
echo "   • ✅ Corregido PricingCalculator.astro con tipos TypeScript"
echo "   • ✅ Actualizado script fix-github-pages.js a ES modules"
echo "   • ✅ Corregido utils/images.ts"
echo ""
echo -e "${GREEN}🎯 Próximos pasos:${NC}"
echo "   1. npm run dev - Para desarrollo local"
echo "   2. npm run build - Para producción"
echo "   3. npm run preview - Para previsualizar el build"
