function fetchLogos() {
  return fetch('logoOptions.json').then(response => response.json())
}