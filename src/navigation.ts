import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Propuesta Rally Maya',
      href: getPermalink('/propuesta'),
    },
    {
      text: 'Demos',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    {
      text: 'Páginas',
      links: [
        {
          text: 'Servicios',
          href: getPermalink('/services'),
        },
        {
          text: 'Precios',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Acerca de',
          href: getPermalink('/about'),
        },
        {
          text: 'Contacto',
          href: getPermalink('/contact'),
        },
      ],
    },
    {
      text: 'Landing',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Long-form Sales',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Click-Through',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Product Details',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Lista de Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Artículo',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Artículo (con MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Página de Categoría',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Página de Tag',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
  ],
  actions: [
    { 
      text: 'Ver Propuesta', 
      href: getPermalink('/propuesta'),
      variant: 'primary'
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Rally Maya México',
      links: [
        { text: 'Propuesta Económica', href: getPermalink('/propuesta') },
        { text: 'Características', href: getPermalink('/propuesta#features') },
        { text: 'Calculadora de Precios', href: getPermalink('/propuesta#pricing') },
        { text: 'Timeline del Proyecto', href: getPermalink('/propuesta#timeline') },
        { text: 'Contacto', href: getPermalink('/propuesta#contact') },
      ],
    },
    {
      title: 'Servicios',
      links: [
        { text: 'Desarrollo Web', href: getPermalink('/services') },
        { text: 'Diseño UX/UI', href: getPermalink('/services') },
        { text: 'E-commerce', href: getPermalink('/services') },
        { text: 'SEO', href: getPermalink('/services') },
        { text: 'Mantenimiento', href: getPermalink('/services') },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Precios', href: getPermalink('/pricing') },
        { text: 'Casos de Éxito', href: '#' },
        { text: 'Testimonios', href: '#' },
        { text: 'FAQ', href: '#' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Acerca de EliteKode', href: getPermalink('/about') },
        { text: 'Contacto', href: getPermalink('/contact') },
        { text: 'Trabajos', href: '#' },
        { text: 'Prensa', href: '#' },
        { text: 'Privacidad', href: getPermalink('/privacy') },
        { text: 'Términos', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos', href: getPermalink('/terms') },
    { text: 'Política de Privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/soporte-web-OHR' },
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://via.placeholder.com/32x32?text=EK" alt="EliteKode logo" loading="lazy"></img>
    Desarrollado por <a class="text-blue-600 underline dark:text-muted" href="mailto:juancarlos@elitekode.com">EliteKode</a> · Propuesta Rally Maya México.
  `,
};
