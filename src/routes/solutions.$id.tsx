import { createFileRoute } from "@tanstack/react-router";
import SolutionDetail from "../pages/SolutionDetail";

export const Route = createFileRoute("/solutions/$id")({
  head: () => ({
    meta: [
      { title: "Solución — Grupo Terroblan" },
      { name: "description", content: "Detalle de solución industrial." },
    ],
  }),
  component: SolutionDetail,
});
