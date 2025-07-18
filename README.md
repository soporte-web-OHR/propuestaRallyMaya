# Rally Maya México - Propuesta Landing Page

## 🎯 Descripción

Landing page optimizada para la propuesta económica del proyecto Rally Maya México. Convertida de un template multi-página de Astro a una experiencia de página única (one-page) con navegación sticky.

## ✨ Características Principales

### 🔧 Funcionalidades Implementadas
- **Menú Sticky Navigation**: Header fijo que permanece visible durante el scroll
- **Navegación por Secciones**: Enlaces que saltan automáticamente a cada sección
- **One-Page Design**: Todo el contenido en una sola página optimizada
- **Responsive**: Adaptado para escritorio, tablet y móvil
- **Smooth Scrolling**: Transiciones suaves entre secciones
- **Active Link Highlighting**: Destaca automáticamente la sección actual

### 📱 Secciones de la Landing Page
1. **Hero** - Introducción y video del proyecto
2. **Resumen** - Alcance y características del desarrollo
3. **Fases** - Metodología y timeline del proyecto
4. **Tecnología** - Stack tecnológico propuesto
5. **Presupuesto** - Precios detallados por fase
6. **Beneficios** - Ventajas competitivas
7. **Timeline** - Cronograma de desarrollo
8. **Contacto** - Formulario y información de contacto

## 🚀 Nuevos Componentes Creados

### `StickyHeader.astro`
Componente especializado para la navegación sticky con:
- Navegación desktop y móvil
- Iconos para cada sección
- Destacado automático de sección activa
- Efecto backdrop blur
- CTA button integrado

### `LandingLayout.astro`
Layout optimizado para landing pages con:
- Integración del StickyHeader
- Estilos globales para smooth scroll
- Compensación automática del scroll para el header fijo

## 🛠️ Estructura del Proyecto

```
src/
├── components/
│   └── widgets/
│       └── StickyHeader.astro     # Nuevo componente sticky header
├── layouts/
│   └── LandingLayout.astro        # Nuevo layout para landing page
├── pages/
│   ├── index.astro                # Landing page principal (actualizada)
│   └── propuesta.astro            # Versión alternativa con mismo contenido
└── ...
```

## 🎨 Personalización

### Modificar el Menú de Navegación
Edita las secciones en `StickyHeader.astro`:

```typescript
const navigationLinks = [
  { text: 'Inicio', href: '#hero', icon: 'tabler:home' },
  { text: 'Resumen', href: '#resumen', icon: 'tabler:file-description' },
  // Agregar o modificar secciones aquí
];
```

### Añadir Nuevas Secciones
1. Crear la nueva sección en `index.astro` con un ID único:
```astro
<section id="nueva-seccion">
  <!-- Contenido -->
</section>
```

2. Agregar el enlace correspondiente en `StickyHeader.astro`

### Personalizar Estilos
Los estilos están basados en Tailwind CSS. Principales clases modificables:
- Header: `bg-white/90 dark:bg-slate-900/90 backdrop-blur-md`
- Links activos: `.nav-link-active`
- Efectos hover: `hover:text-primary`

## 📱 Funcionalidad Móvil

El header sticky incluye:
- Menú hamburguesa automático en pantallas pequeñas
- Navegación móvil con overlay
- Cierre automático al hacer click en enlaces
- CTA button adaptado para móvil

## 🔧 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📄 Páginas Eliminadas/No Utilizadas

Las siguientes páginas del template original no se utilizan en esta landing page:
- `/about` - Página de empresa
- `/services` - Servicios generales
- `/pricing` - Precios generales
- `/contact` - Contacto separado
- `/homes/*` - Demos del template
- `/landing/*` - Ejemplos del template
- `/blog/*` - Blog

## 🎯 Optimizaciones Implementadas

### Performance
- Lazy loading de imágenes
- Código JavaScript minificado
- CSS optimizado con Tailwind
- Smooth scroll nativo del navegador

### UX/UI
- Navegación intuitiva por secciones
- Feedback visual del enlace activo
- Transiciones suaves
- Responsive design optimizado

### SEO
- Metadata optimizada
- Estructura semántica HTML5
- URLs amigables con anclas
- Contenido estructurado

## 📞 Contacto

**EliteKode**
- Email: juancarlos@elitekode.com
- Proyecto: Rally Maya México
- Propuesta: Desarrollo Web Completo

---

## 🔄 Próximos Pasos

Una vez aprobada la propuesta, el proyecto incluirá:
1. Diseño visual personalizado
2. Desarrollo de funcionalidades avanzadas
3. Sistema de pagos integrado
4. CMS para gestión de contenidos
5. Área privada de usuarios
6. Optimización SEO completa

---

*Landing page desarrollada con Astro + Tailwind CSS*
