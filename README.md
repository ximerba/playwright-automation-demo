# Playwright Automation Demo

![Playwright Tests](https://github.com/ximerba/playwright-automation-demo/actions/workflows/playwright.yml/badge.svg)

Framework de automatización de pruebas construido con Playwright y JavaScript,
desarrollado como proyecto de práctica y portfolio.

## Stack tecnológico

- [Playwright](https://playwright.dev/) — framework de automatización
- JavaScript (ES Modules)
- GitHub Actions — CI/CD pipeline

## Estructura del proyecto
tests/
├── pages/
│   └── TodoPage.js       # Page Objects
├── example.spec.js       # Tests de UI
└── api.spec.js           # Tests de API
.github/
└── workflows/
└── playwright.yml    # Pipeline CI/CD
## Qué cubre este proyecto

### Tests de UI
- Crear una tarea nueva
- Marcar una tarea como completada
- Eliminar una tarea

Aplicando **Page Object Model** para separar la lógica de navegación
de los casos de prueba.

### Tests de API
- GET — obtener un recurso
- POST — crear un recurso
- PUT — actualizar un recurso
- DELETE — eliminar un recurso

Usando el contexto `request` nativo de Playwright, sin plugins externos.

## Cómo ejecutar localmente

```bash
# Instalar dependencias
npm install

# Instalar browsers
npx playwright install

# Correr todos los tests
npx playwright test

# Modo visual (recomendado para desarrollo)
npx playwright test --ui
```

## CI/CD

Los tests corren automáticamente en cada push y pull request a `main`
mediante GitHub Actions. El reporte de resultados queda disponible
como artifact descargable en la pestaña Actions del repositorio.

## Autor

Ximena — QA Engineer  
[LinkedIn](https://www.linkedin.com/in/ximenarodriguez) | 
[QAShield](https://cypress-insights.vercel.app)
