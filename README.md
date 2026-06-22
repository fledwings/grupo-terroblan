# CAMR — Sitio web

Sitio web de **Comercializadora de Aceros y Materiales Reyes (CAMR)** construido con
[TanStack Start](https://tanstack.com/start) + React 19 + Tailwind CSS v4.

---

## 🚀 Subir a GitHub y desplegar en Vercel

### 1. Subir el código a GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### 2. Desplegar en Vercel

1. Entra a [vercel.com](https://vercel.com) y haz **"Add New → Project"**.
2. Importa el repositorio de GitHub que acabas de crear.
3. Vercel detectará el proyecto automáticamente. **No cambies nada** — `vercel.json` ya está configurado.
4. Antes de hacer deploy, agrega las **Environment Variables** (ver siguiente sección).
5. Click en **Deploy**. En ~1 minuto tendrás tu sitio en vivo en `tu-proyecto.vercel.app`.

> El archivo `vite.config.ts` ya detecta automáticamente que está corriendo en Vercel
> (variable `VERCEL=1`) y usa el preset `vercel` de Nitro para generar funciones serverless.

### 3. Variables de entorno (Vercel → Settings → Environment Variables)

Copia los nombres del archivo `.env.example`:

| Variable | Para qué sirve | Ejemplo |
|---|---|---|
| `RESEND_API_KEY` | Enviar las cotizaciones del formulario por email. Crea una cuenta gratuita en [resend.com](https://resend.com) y genera una API key. | `re_AbCd1234...` |
| `CONTACT_FROM_EMAIL` | Remitente del correo. Para probar puedes dejar `onboarding@resend.dev`. En producción usa tu dominio verificado. | `CAMR Web <web@tudominio.com>` |
| `CONTACT_TO_EMAIL` | Email donde llegan las cotizaciones. | `ventas1@acerosymetalesreyes.com` |
| `CONTACT_CC_EMAIL` | Copia opcional. | `administracion@acerosymetalesreyes.com` |

Después de agregar las variables, ve a **Deployments → ⋯ → Redeploy** para que tomen efecto.

---

## 💻 Desarrollo local

Requiere [Bun](https://bun.sh) (o npm).

```bash
bun install
bun run dev           # http://localhost:8080
bun run build         # build de producción
bun run preview       # ver el build localmente
```

Para probar el envío de email en local, copia `.env.example` como `.env` y rellena `RESEND_API_KEY`.

---

## 📁 Estructura

```
src/
├── routes/
│   ├── __root.tsx         # layout raíz (head, providers)
│   └── index.tsx          # página principal (Hero, Productos, Maquinaria, etc.)
├── lib/
│   └── contact.functions.ts  # server function que envía cotizaciones vía Resend
└── styles.css             # tema y tokens Tailwind v4

public/
└── images/                # imágenes estáticas listas para GitHub/Vercel
```

---

## 🔧 Cambiar el contenido

Casi todo el contenido (productos, maquinaria, servicios, proyectos, teléfonos, emails) está
en arrays al inicio de `src/routes/index.tsx`. Edita esos arrays y el sitio se actualiza solo.

---

## 📜 Licencia

© CAMR — Comercializadora de Aceros y Materiales Reyes SA de CV. Todos los derechos reservados.