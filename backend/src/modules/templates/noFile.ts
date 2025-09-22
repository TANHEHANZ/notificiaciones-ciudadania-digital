export const getFormHtml = (
  nombre: string,
  documento: string,
  correo: string,
  telefono: string
): string => `
  <form method="POST" enctype="multipart/form-data" 
    style="display:flex;flex-direction:column;gap:0.5rem;align-items:center;justify-content:center;min-height:32rem;">
    
    <h1>Aprobación de documentos</h1>

    <p style="font-weight:600;">Verifica tus datos antes de continuar:</p>

    <div style="display:grid;gap:0.75rem;border-radius:12px;padding:1.5rem;border:1px solid #e2e8f0;width:100%;background-color:#f9fafb;">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:0.85rem;color:#6b7280;">Nombre registrado:</span>
        <strong style="font-size:0.85rem;color:#1f2937;">${nombre}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:0.85rem;color:#6b7280;">Número de documento:</span>
        <strong style="font-size:0.85rem;color:#1f2937;">${documento}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:0.85rem;color:#6b7280;">Correo electrónico:</span>
        <strong style="font-size:0.85rem;color:#1f2937;">${correo}</strong>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-size:0.85rem;color:#6b7280;">Número de contacto:</span>
        <strong style="font-size:0.85rem;color:#1f2937;">${telefono}</strong>
      </div>
    </div>
<div style="width:100%;min-height:20rem;border:2px dashed #0002;border-radius:1em;display:flex;align-items:center;justify-content:center;cursor:pointer; position:relative;">
  <input type="file" name="documento" style="opacity:0;position:absolute;width:100%;height:100%;cursor:pointer;" />
  <span>Haz clic o arrastra tu documento aquí</span>
</div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;width:100%;max-width:20rem;margin-top:1rem;">
      <button type="button" style="padding:0.8rem;font-size:1rem;border:none;cursor:pointer;border-radius:0.5rem;background-color:rgba(206,205,205,0.3);">Cancelar</button>
      <button type="submit" style="padding:0.8rem;font-size:1rem;border:none;cursor:pointer;border-radius:0.5rem;background-color:black;color:white;">Subir documento</button>
    </div>
  </form>
`;
