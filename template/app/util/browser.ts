export function setCookie(
  cname: string,
  cvalue: string | number | undefined | null,
  expiryTime: number | string | null | undefined,
): void {
  if (cvalue === null || cvalue === undefined) return;

  let expireTimeString = "";
  if (expiryTime) {
    expireTimeString =
      ";expires=" + new Date(parseInt(expiryTime as string)).toUTCString();
  }
  document.cookie =
    cname + "=" + String(cvalue) + expireTimeString + ";path=/;Secure";
}

export function getCookie(cname: string): string {
  if (typeof document === "undefined") return "";

  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// got this from here https://stackoverflow.com/questions/179355/clearing-all-cookies-with-javascript
export function clearAllCookie() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    setCookie(name, "", 0);
  }
}
