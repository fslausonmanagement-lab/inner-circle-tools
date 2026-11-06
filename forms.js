// Where the Store Review and Request a Module forms send their answers.
// This is Finn's Google Apps Script web app: it emails Finn and saves each submission to a Google Sheet.
window.FORM_URL = "";
window.formLive = () => !!window.FORM_URL && /\.github\.io$/.test(location.hostname);
window.sendForm = async (form, fields) => {
  if (!window.formLive()) { await new Promise(r => setTimeout(r, 500)); return "preview"; }
  await fetch(window.FORM_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ form, ...fields }) });
  return "sent";
};
