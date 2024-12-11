# 📝 Aplicación Todo List en React

## 🌟 Resumen del Proyecto

Este proyecto implementa una aplicación de gestión de tareas utilizando React.js. La app permite a los usuarios crear, filtrar y gestionar tareas mientras asegura un diseño intuitivo y visualmente atractivo. Las tareas se persisten en el navegador usando `localStorage`. La aplicación sigue prácticas modernas de React y está desplegada en línea para facilitar su acceso.

---

## ✨ Características

### 🎨 Diseño

- Personalización de colores, fuentes, íconos y fondo.
- Totalmente responsiva, adaptándose a diferentes tamaños de pantalla.

### 🚀 Funcionalidades Principales

1. **Agregar nuevas tareas** mediante un campo de entrada.
2. **Filtrar tareas** usando un menú desplegable (select) con opciones para:
   - Todas las tareas.
   - Tareas completadas.
   - Tareas pendientes.
3. **Gestionar tareas** con las siguientes acciones:
   - **Marcar como completada** (ícono ✔️):
     - Las tareas completadas se muestran con un texto tachado.
   - **Eliminar tarea** (ícono 🗑):
     - Las tareas eliminadas se reflejan tanto en el estado de la app como en `localStorage`.
4. **Sincronización** de todos los cambios (agregar, completar, eliminar) con `localStorage`.
5. **Filtrar tareas** dinámicamente según su estado de completitud.

### 📂 Estructura de Componentes

- **App**: Componente raíz.
- **TodoList**: Contiene la entrada y las opciones de filtrado.
- **List**: Muestra la lista de tareas.
- **Item**: Representa una tarea individual con acciones.

### 💾 Almacenamiento

- Utiliza `localStorage` para la persistencia de datos.
- Refleja actualizaciones en tiempo real en el estado de la app y en `localStorage`.

---

## 🔧 Herramientas y Tecnologías

- **React.js**: Para construir la interfaz de usuario.
- **Chakra UI** (versión 2): Para la librería de componentes y estilos.
- **localStorage**: Para la persistencia de tareas.
- **Vercel**: Para el despliegue.

---

## 🛠 Instalación y Configuración

### Requisitos

- Tener instalado Node.js en tu máquina.

### Pasos

1. **Clonar o descargar el repositorio:**

   ```bash
   git clone https://github.com/JazminAime/ToDoList.git

   ```

2. **Instalar dependencias:**
   npm install

3. **Ejecutar el servidor de desarrollo:**
   npm run dev

4. **Abrir el navegador en <http://localhost:5173> para ver la aplicación en acción.**
   ✅ Probar la Funcionalidad

- Agregar nuevas tareas utilizando el campo de entrada.
- Filtrar tareas usando el menú desplegable.
- Marcar tareas como completadas o eliminarlas.

## 🌐 Despliegue

La aplicación está desplegada en línea. Accede a través de este enlace: [🚀 https://my-todolist-app-two.vercel.app/]

---

## 💟 Agradecimientos

Este proyecto representa mi **primera aplicación desarrollada con React**. Agradezco a quienes me apoyaron durante este proceso de aprendizaje y espero que esta app sea de utilidad para organizar sus tareas. 🙌

**Diseñado con ♡ por Jazmín**
