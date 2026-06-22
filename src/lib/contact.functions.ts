import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().min(2).max(120),
  empresa: z.string().max(120).optional().default(""),
  telefono: z.string().min(7).max(40),
  email: z.string().email().max(160),
  producto: z.string().min(1).max(160),
  mensaje: z.string().min(5).max(4000),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const sendContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL || "ventas1@acerosymetalesreyes.com";
    const cc = process.env.CONTACT_CC_EMAIL || "administracion@acerosymetalesreyes.com";
    const from = process.env.CONTACT_FROM_EMAIL || "CAMR Web <onboarding@resend.dev>";

    if (!apiKey) {
      throw new Error("RESEND_API_KEY no está configurada en el servidor.");
    }

    const subject = `Cotización CAMR — ${data.producto}`;
    const text = [
      `Nombre: ${data.nombre}`,
      `Empresa: ${data.empresa || "(no especificada)"}`,
      `Teléfono: ${data.telefono}`,
      `Email: ${data.email}`,
      `Producto/Servicio: ${data.producto}`,
      ``,
      `Mensaje:`,
      data.mensaje,
    ].join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:560px;margin:0 auto;color:#111">
        <h2 style="margin:0 0 12px">Nueva cotización desde el sitio CAMR</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px">
          <tr><td style="padding:6px 8px;background:#f3f4f6;font-weight:bold">Nombre</td><td style="padding:6px 8px">${escapeHtml(data.nombre)}</td></tr>
          <tr><td style="padding:6px 8px;background:#f3f4f6;font-weight:bold">Empresa</td><td style="padding:6px 8px">${escapeHtml(data.empresa || "—")}</td></tr>
          <tr><td style="padding:6px 8px;background:#f3f4f6;font-weight:bold">Teléfono</td><td style="padding:6px 8px">${escapeHtml(data.telefono)}</td></tr>
          <tr><td style="padding:6px 8px;background:#f3f4f6;font-weight:bold">Email</td><td style="padding:6px 8px">${escapeHtml(data.email)}</td></tr>
          <tr><td style="padding:6px 8px;background:#f3f4f6;font-weight:bold">Producto/Servicio</td><td style="padding:6px 8px">${escapeHtml(data.producto)}</td></tr>
        </table>
        <h3 style="margin:20px 0 8px">Mensaje</h3>
        <p style="white-space:pre-wrap;font-size:14px;line-height:1.5">${escapeHtml(data.mensaje)}</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        cc: cc ? [cc] : undefined,
        reply_to: data.email,
        subject,
        text,
        html,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("Resend error", res.status, body);
      throw new Error(`No se pudo enviar el correo (HTTP ${res.status}).`);
    }

    return { ok: true as const };
  });

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}