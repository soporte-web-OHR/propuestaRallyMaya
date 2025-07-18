# Deploy automático a GitHub Pages configurado

## 🚀 Tu sitio se está publicando automáticamente

### URL de tu landing page:
**https://soporte-web-ohr.github.io/propuestaRallyMaya/**

### ¿Cómo funciona el despliegue?

1. **Automático**: Cada vez que haces push a la rama `main`, se ejecuta el deploy
2. **GitHub Actions**: Usa el workflow `.github/workflows/deploy.yml`
3. **Build con Astro**: Genera el sitio estático optimizado
4. **Deploy a Pages**: Publica automáticamente en GitHub Pages

### Estado del deploy:
Puedes ver el estado en: https://github.com/soporte-web-OHR/propuestaRallyMaya/actions

### ⚙️ Configuración aplicada:

- ✅ Output: `static` (sitio estático)
- ✅ Site: `https://soporte-web-ohr.github.io`
- ✅ Base: `/propuestaRallyMaya`
- ✅ Workflow automático configurado
- ✅ Permisos de GitHub Pages habilitados

### 🔧 Comandos para desarrollo local:

```bash
# Desarrollo
npm run dev

# Build local (igual al de producción)
npm run build

# Preview del build
npm run preview
```

### 📱 Funcionalidades incluidas en la landing page:

- ✅ **Menú sticky** con navegación por secciones
- ✅ **Responsive design** para todos los dispositivos  
- ✅ **Smooth scroll** entre secciones
- ✅ **Active link highlighting** automático
- ✅ **Menú móvil** con hamburguesa
- ✅ **Optimización automática** (CSS, JS, imágenes)

### 🎯 Secciones navegables:

1. **Inicio** (#hero) - Presentación del proyecto
2. **Resumen** (#resumen) - Alcance del desarrollo
3. **Fases** (#fases) - Metodología del proyecto
4. **Tecnología** (#tecnologia) - Stack tecnológico
5. **Presupuesto** (#pricing) - Precios detallados
6. **Beneficios** (#features) - Ventajas competitivas
7. **Contacto** (#contact) - Formulario de contacto

### ⏱️ Tiempo de build:
- **Aproximadamente 2-3 minutos** desde el push hasta que esté disponible

### 🔄 Para actualizar el sitio:
Solo necesitas hacer push a la rama main:

```bash
git add .
git commit -m "Actualizar contenido"
git push origin main
```

### 🌐 Dominio personalizado (opcional):
Si quieres usar un dominio custom como `rallymaya.com`:

1. Agregar archivo `CNAME` con tu dominio
2. Configurar DNS en tu proveedor
3. Habilitar HTTPS en GitHub Pages

### 📊 Analytics y SEO:
- ✅ Sitemap automático generado
- ✅ Meta tags optimizados
- ✅ Estructura semántica HTML5
- ✅ Performance optimizado

---

## 🎉 ¡Tu landing page ya está online!

Visita: **https://soporte-web-ohr.github.io/propuestaRallyMaya/**

El primer deploy puede tardar unos minutos. Puedes monitorear el progreso en la pestaña "Actions" de tu repositorio.
