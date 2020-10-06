export function getTextExcerpt(value, maxChars) {
  return value.length > maxChars ? `${value.slice(0, maxChars)}...` : value;
}
