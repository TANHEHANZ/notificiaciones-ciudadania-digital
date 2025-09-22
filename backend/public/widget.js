(function () {
  const script = document.currentScript;
  const token = script.getAttribute("data-token");
  const targetSelector = script.getAttribute("data-target");

  let userData = {
    documento: null,
    accessToken: null,
  };

  window.WidgetCiudadania = {
    setUser: (data) => {
      userData = data;
    },
  };

  const container = document.createElement("div");
  const shadow = container.attachShadow({ mode: "open" });

  function waitForContainer(selector, callback) {
    const parent = document.querySelector(selector);
    if (parent) return callback(parent);
    setTimeout(() => waitForContainer(selector, callback), 50);
  }

  if (targetSelector) {
    waitForContainer(targetSelector, (parent) => parent.appendChild(container));
  } else {
    script.parentNode.appendChild(container);
  }

  function createModal() {
    const modal = document.createElement("div");
    modal.style.cssText = `
      display: none !important;
      position: fixed !important;
      top: 0 !important; left: 0 !important; right: 0 !important; bottom: 0 !important;
      background: rgba(0,0,0,0.6) !important;
      justify-content: center !important;
      align-items: center !important;
      z-index: 9999 !important;
    `;
    const content = document.createElement("div");
    content.style.cssText = `
  background: white !important;
  padding: 20px !important;
  border-radius: 10px !important;
  max-width: 500px !important;
  width: 100% !important;
  font-family: Arial, sans-serif !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;

    modal.appendChild(content);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
    return { modal, content };
  }

  function createButton() {
    const button = document.createElement("button");
    button.innerHTML = `
      <img src="http://192.168.220.119:3001/public/img/logo.svg" 
           alt="Logo" 
           style="width:20px; height:20px; margin-right:8px;" />
      Aprobar con Ciudadanía Digital
    `;
    button.style.cssText = `
      font-family: Arial, sans-serif !important;
      font-size: 16px !important;
      background: #2B3486 !important;
      color: white !important;
      border: none !important;
      padding: 10px 16px !important;
      border-radius: 8px !important;
      cursor: pointer !important;
      display: inline-flex !important;
      align-items: center !important;
    `;
    return button;
  }

  const button = createButton();
  const { modal, content } = createModal();

  shadow.appendChild(button);
  shadow.appendChild(modal);

  button.addEventListener("click", () => {
    fetch(`http://192.168.220.119:3001/v1/api/test/form?token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.text())
      .then((html) => {
        content.innerHTML = html;
        modal.style.display = "flex";
      })
      .catch(() => {
        content.innerHTML = "<p>Error cargando formulario</p>";
        modal.style.display = "flex";
      });
  });
})();
