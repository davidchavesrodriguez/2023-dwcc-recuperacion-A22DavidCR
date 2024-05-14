function addEuroSign(amount) {
  return `${amount}€`;
}
function addDolarSign(amount) {
  return `$${amount}`;
}
module.exports = {
  addEuroSign,
  addDolarSign,
};
