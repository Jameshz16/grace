## Alcance
- Aplicar animaciones de clic coherentes a todos los `button` del sitio (Hero, Navbar, Servicios, Proceso, Testimonios, Contacto, AboutAgent, FeaturedListings, Testimonials).
- Animación principal: “scale down” breve con atenuación de sombra; opcionalmente cambio de color en estado activo.

## Diseño de la animación
- Transición suave: `transition-all` + `duration-200`.
- Efecto al presionar: `active:scale-95` + `active:shadow-inner`.
- Coherencia cromática: `active:bg-*` acorde al color base del botón; en outline, `active:bg-*` + `active:text-white`.
- Sin JavaScript: usar variantes `active:` de Tailwind para rendimiento y consistencia.

## Archivos a modificar
- `src/components/Hero.tsx`:40–46
- `src/components/Navigation.tsx`:71–78, 107–109, 90–96 (hamburguesa)
- `src/components/ContactForm.tsx`:146–152, 155–169, 295–308
- `src/components/Proceso.tsx`:98–103
- `src/components/PorQueElegirnos.tsx`:79–84
- `src/components/Servicios.tsx`:101–110, 121–123
- `src/components/Testimonios.tsx`:142–144
- `src/components/Testimonials.tsx`:104–115, 138–145
- `src/components/AboutAgent.tsx`:66–68
- `src/components/FeaturedListings.tsx`:122–133 (flechas), 138–145 (dots)

## Detalle de cambios por tipo de botón
- Botones sólidos (ej. naranja/azul/verde/gris): añadir `transition-all duration-200 active:scale-95 active:shadow-inner active:bg-<tono-más-oscuro>`.
- Botones outline (bordes azules/verde): añadir `transition-all duration-200 active:scale-95 active:shadow-inner active:bg-<color> active:text-white`.
- Flechas/dots de sliders: añadir `active:scale-95` para feedback táctil.
- Menú móvil: conservar accesibilidad y añadir `active:scale-95` donde aplique.

## Verificación
- Ejecutar build y revisar que no haya errores.
- Correr dev server y comprobar visualmente que todos los botones reaccionan al clic de forma suave y consistente.
- Probar en desktop y móvil.

## Opcional (futuro)
- Ripple effect (onda): añadir keyframes y utilidades en `index.css` para `after:` y aplicarlo sólo a botones grandes. Lo haremos si te interesa ese estilo.

¿Confirmas que proceda con estos cambios en todos los botones?