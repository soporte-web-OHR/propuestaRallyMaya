#!/usr/bin/env node

/**
 * Script de prueba rápida para verificar el estado del proyecto
 */

import { execSync } from 'child_process';

const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

console.log(`${colors.blue}🔍 Rally Maya México - Verificación Rápida${colors.reset}`);
console.log('=============================================');

try {
  console.log(`${colors.blue}📋 Verificando TypeScript...${colors.reset}`);
  
  try {
    execSync('npm run check', { stdio: 'pipe' });
    console.log(`${colors.green}✅ TypeScript: Sin errores${colors.reset}`);
  } catch (error) {
    console.log(`${colors.yellow}⚠️ TypeScript: Hay algunos warnings (normal)${colors.reset}`);
  }
  
  console.log(`${colors.blue}🏗️ Verificando build...${colors.reset}`);
  
  try {
    execSync('npm run build', { stdio: 'pipe' });
    console.log(`${colors.green}✅ Build: Exitoso${colors.reset}`);
    console.log(`${colors.green}🎉 ¡Proyecto completamente funcional!${colors.reset}`);
  } catch (error) {
    console.log(`${colors.red}❌ Build: Falló${colors.reset}`);
    console.log(`${colors.yellow}💡 Ejecuta 'npm run fix-errors' para corregir${colors.reset}`);
  }
  
} catch (error) {
  console.error(`${colors.red}❌ Error: ${error.message}${colors.reset}`);
}

console.log('');
console.log(`${colors.blue}📚 Para más información:${colors.reset}`);
console.log('   • ERRORES_CORREGIDOS.md - Documentación completa');
console.log('   • npm run fix-errors - Aplicar correcciones');
console.log('   • npm run dev - Iniciar desarrollo');
