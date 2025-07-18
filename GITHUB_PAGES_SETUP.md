# 🚀 Instrucciones para Habilitar GitHub Pages

## ⚠️ IMPORTANTE: Configuración Manual Requerida

Para que tu sitio se publique correctamente, necesitas habilitar GitHub Pages manualmente:

### 📋 Pasos para Activar GitHub Pages:

1. **Ve a Settings del repositorio**:
   - Navega a: https://github.com/soporte-web-OHR/propuestaRallyMaya/settings/pages

2. **Configura la fuente de deploy**:
   - En "Build and deployment"
   - En "Source", selecciona: **"GitHub Actions"**
   - NO selecciones "Deploy from a branch"

3. **Confirma la configuración**:
   - Una vez seleccionado "GitHub Actions", GitHub creará automáticamente el environment `github-pages`
   - Esto habilitará el deploy automático

### 🔧 ¿Qué pasará después?

1. **Deploy Automático**: Cada push a `main` activará el workflow
2. **Build Process**: GitHub Actions ejecutará el build de Astro
3. **Publicación**: El sitio se publicará en GitHub Pages
4. **URL Final**: https://soporte-web-ohr.github.io/propuestaRallyMaya/

### ⏱️ Timeframe:
- **Primera vez**: 5-10 minutos
- **Deploys subsecuentes**: 2-3 minutos

### 🔍 Verificar el Estado:
- **Actions**: https://github.com/soporte-web-OHR/propuestaRallyMaya/actions
- **Environments**: https://github.com/soporte-web-OHR/propuestaRallyMaya/settings/environments

### ✅ Configuración Técnica Completada:

- ✅ GitHub Actions workflow configurado (`.github/workflows/deploy.yml`)
- ✅ Astro config optimizado para GitHub Pages
- ✅ Base URL configurada: `/propuestaRallyMaya`
- ✅ Site URL configurada: `https://soporte-web-ohr.github.io`
- ✅ `.nojekyll` agregado para evitar procesamiento Jekyll
- ✅ Permisos correctos para Pages y OIDC token

### 🎯 Resultado Final:

Una vez habilitado GitHub Pages, tendrás:
- ✅ **Landing page funcional** con menú sticky
- ✅ **Deploy automático** en cada push
- ✅ **URL pública** para compartir la propuesta
- ✅ **Navegación por secciones** completamente funcional
- ✅ **Responsive design** para todos los dispositivos

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:
1. Verifica que GitHub Pages esté habilitado en Settings
2. Revisa que la fuente sea "GitHub Actions" (no branch)
3. Espera unos minutos para el primer deploy
4. Contacta: juancarlos@elitekode.com

¡Tu landing page estará lista en minutos! 🎉
