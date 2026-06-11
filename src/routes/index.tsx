import { createFileRoute } from "@tanstack/react-router";
import Home from "../pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo Terroblan" },
      { name: "description", content: "Soluciones industriales y servicios técnicos especializados." },
      { property: "og:title", content: "Grupo Terroblan" },
      { property: "og:description", content: "Soluciones industriales y servicios técnicos especializados." },
    ],
  }),
  component: Home,
});
