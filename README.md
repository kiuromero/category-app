# 🌿 CategoriesApp

<p align="left">
  <img src="https://img.shields.io/badge/Angular-16.2-DD0031.svg?logo=angular" alt="Angular">
  <img src="https://img.shields.io/badge/Arquitectura-Clean/Domain--Driven-blue.svg" alt="Clean Architecture">
  <img src="https://img.shields.io/badge/Estilos-SCSS-bf616a.svg?logo=sass" alt="SCSS">
</p>

**CategoriesApp** es una aplicación de Angular de alto rendimiento diseñada para la gestión eficiente de categorías. Cuenta con una interfaz **Light** altamente optimizada, priorizando la claridad visual y la velocidad operativa.

---

## 🚀 Características Clave

- **Dashboard de Inventario**: Gestión integral y en tiempo real.
- **Búsqueda Avanzada**: Filtrado dinámico instantáneo por nombre o código.
- **Experiencia Modal**: Flujos de CRUD modernos mediante modales centrados y fondos atenuados.
- **Diseño Minimalista**: Interfaz plana (Flat Design) sin sombras innecesarias para una carga cognitiva reducida.
- **Arquitectura Responsiva**: Interfaz adaptativa diseñada para cualquier dispositivo.

---

## 🎨 Sistema de Diseño:

La aplicación implementa un lenguaje visual curado y coherente:

- **Acento Primario**: Verdes Esmeralda (`#10b981`) para una sensación de frescura y precisión.
- **Base Neutral**: Grises pizarra suaves (`#f8fafc`) para entornos de trabajo limpios.
- **Tipografía**: Outfit - moderna, geométrica y optimizada para lectura rápida.
- **Componentes Atómicos**: Sistema modular basado en Tabla, Modal, Badges y Botones Planos.

---

## 🏗️ Arquitectura Técnica

Estructura basada en **Clean Architecture** y **Domain-Driven Design (DDD)** para garantizar la escalabilidad:

```text
src/app/
├── core/               # Tokens de Diseño, Mixins y Configuración Global
├── shared/             # Componentes base (Modal, Tabla, Botones)
└── features/
    └── categories/     # Módulo funcional de Categorías
        ├── domain/         # Modelos de negocio e interfaces
        ├── infrastructure/ # Implementación de servicios y Mock Data
        └── presentation/   # Componentes UI, Facades y Páginas
```

---

## 🛠️ Comenzando

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v16+)
- [Angular CLI](https://angular.io/cli)

### Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/kiuromero/category-app.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Lanza el servidor de desarrollo:
   ```bash
   ng serve
   ```
   Accede a `http://localhost:4200/`.

---

## 📦 Construcción y Despliegue

Genera el paquete de producción optimizado:

```bash
ng build --configuration production
```

---

## 👨‍💻 Autor

**Kelmer Romero** - _Desarrollador Frontend_

---
