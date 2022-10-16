# Citas Clínica Veterinaria

Aplicación para la gestión de citas de una clínica veterinaria, con posibilidad de añadir, editar y eliminar pacientes.

**Aquí puedes ver la [aplicación](https://fastidious-seahorse-98f522.netlify.app/).**

## Tecnologías

La aplicación ha sido creada con las siguientes tecnologías:

- **ReactJS**
- **TailwindCSS**
- **ViteJS**
- **JavaScript**

## Persistencia de datos

Se permite la persistencia de datos en el cliente a través del uso de LocalStorage, de modo que aunque se cierre la aplicación la información introducida por el usuario permanecerá siempre y cuando el LocalStorage del navegador no se borre.

## Despliegue local

Para un despliegue local de la aplicación, simplemente clona el repositorio y ejecuta los siguientes comandos:

```bash
npm install
npm run dev
```

ViteJS abrirá automáticamente la aplicación en tu navegador.

## CI/CD

La aplicación se encuentra desplegada en **Netlify** a través de GitHub, por lo que implementa CI/CD de manera automática, desplegando de nuevo la aplicación ante cualquier cambio en la **rama main**.
