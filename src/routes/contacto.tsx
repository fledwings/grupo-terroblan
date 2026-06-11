import { createFileRoute } from "@tanstack/react-router";
import Contacto from "../pages/Contacto";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Grupo Terroblan" },
      { name: "description", content: "Ponte en contacto con Grupo Terroblan." },
      { property: "og:title", content: "Contacto — Grupo Terroblan" },
      { property: "og:description", content: "Ponte en contacto con Grupo Terroblan." },
    ],
  }),
  component: Contacto,
});
