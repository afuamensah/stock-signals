const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/api/signals", (req, res, next) => {
  const signals = [
    {id: 1, sName: 'GBP/USD', rate: '(+0.02%)', slName:'British Pound/US Dollar', price: 1.2860, open: 1.286, high: 1.287, low: 1.286},
    {id: 2, sName: 'EUR/USD', rate: '(+0.07%)', slName:'Euro/US Dollar', price: 1.175, open: 1.175, high: 1.175, low: 1.173},
    {id: 3, sName: 'AUD/USD', rate: '(+0.09%)', slName:'Australian Dollar/US Dollar', price: 0.713, open: 0.713, high: 0.714, low: 0.713}
  ];
  res.status(200).json(
    {message: "Signals Successfully Loaded", signals: signals}
    );
});

module.exports = app;
