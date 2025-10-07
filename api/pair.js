export default function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: 'Missing number parameter' });
  }

  // Mock pair code generation logic
  const pairCode = `PAIR-${number.slice(-4)}-${Math.floor(Math.random() * 8999 + 1000)}`;

  res.json({ code: pairCode });
}
