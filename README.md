# Plantilla Frontend con Docker

## Producción con Docker

Puedes levantar el entorno de producción y personalizar el puerto expuesto fácilmente:

Por defecto, el proyecto se expone en el puerto 80:

```bash
docker compose up prod -d
```

## Usar un puerto personalizado en producción

Puedes definir el puerto que desees usando la variable de entorno `PORT` al ejecutar el comando:

En bash (Linux/Mac):

```bash
PORT=8080 docker compose up prod -d
```

En PowerShell (Windows):

```powershell
$env:PORT=8080; docker compose up prod -d
```

Esto expondrá la app en `http://localhost:PUERTO` (por ejemplo, `http://localhost:8080`).

El Dockerfile de producción también soporta el argumento de construcción `PORT` para mantener la documentación y el puerto expuesto alineados.

## Desarrollo con Docker

## Requisitos

- Docker
- Docker Compose

### Levantar el entorno de desarrollo

```bash
docker compose up dev -d
```

Por defecto, el proyecto se expone en el puerto 5173:

```bash
docker compose up dev -d
```

#### Usar un puerto personalizado

Puedes definir el puerto que desees usando la variable de entorno `PORT` al ejecutar el comando:

En bash (Linux/Mac):

```bash
PORT=3005 docker compose up dev -d
```

En PowerShell (Windows):

```powershell
$env:PORT=3005; docker compose up dev -d
```

Luego accede a la app en `http://localhost:PUERTO` (por ejemplo, `http://localhost:3005`).

### Hot reload

Los cambios en el código fuente se reflejan automáticamente en el navegador gracias al volumen montado y la configuración de Vite.
