# Learn Database Fundamentals

Plataforma educativa para aprender fundamentos de bases de datos. Contenido basado en el resumen de lectura del curso de Base de Datos.

## Características

- **8 módulos** de contenido: fundamentos, importancia, modelos, rendimiento, SQL (DML/DDL), consultas, MER, modelo conceptual
- **Quiz** de 5 preguntas con puntuación
- **Dashboard** de progreso (módulos completados y puntuación)
- **Modo oscuro** por defecto
- Solo frontend, sin base de datos

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Zustand (estado local)

## Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Modo desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm start
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

## Estructura

```
├── app/
│   ├── page.tsx          # Home
│   ├── modules/          # Lista de módulos
│   ├── modules/[id]/     # Detalle de cada módulo
│   ├── quiz/             # Quiz interactivo
│   └── dashboard/        # Progreso del estudiante
├── components/
│   └── Nav.tsx           # Navegación
└── lib/
    ├── modules.ts        # Contenido de los módulos
    ├── quiz.ts           # Preguntas del quiz
    └── store.ts          # Estado (Zustand)
```

---

*Base de Datos — Prof. Jonathan Mora Barrientos*
