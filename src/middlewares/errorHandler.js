export default function errorHandler(err, req, res, next) {
  res
    .status(err.status || 500)
    .json({ error: err.message, details: err.details });
}
