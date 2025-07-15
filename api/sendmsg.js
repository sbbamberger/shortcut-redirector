export default function handler(req, res) {
  const { query } = req;
  const inputParts = Object.entries(query).map(
    ([k, v]) => `${k}=${encodeURIComponent(v)}`
  );
  const input = inputParts.join('%26');
  const shortcutName = encodeURIComponent('Send Conference Message');
  const redirectUrl = `shortcuts://run-shortcut?name=${shortcutName}&input=${input}`;
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
