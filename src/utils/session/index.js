export function setSession(key,val) {
  const value = JSON.stringify(val);
  sessionStorage.setItem(key, value)
}

export function getSession(key) {
  const val = sessionStorage.getItem(key);
  return JSON.parse(val)
}