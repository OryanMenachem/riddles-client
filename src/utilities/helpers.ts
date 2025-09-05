export function parseJWT(token: string) {
  if (token) {
    const payload = token.split(".")[1];
    const decoded = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decoded);
  }
  return null;
}

export async function sendHttpReq(
  endPoint: string,
  method: string,
  body?: object
) {
  let res;

  const url = `http://localhost:3000/${endPoint}`;
  const options: any = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (method.toUpperCase() !== "GET" && body !== null) {
    options.body = JSON.stringify(body);
  }

  await new Promise((res) => setTimeout(res, 1000));

  try {
    res = await fetch(url, options);

    if (res.ok) {
      return await res.json();
    }
  } catch (error) {
    return error;
  }
}

// const url = {
//   protocol: `http://`,
//   host: `localhost:`,
//   port: 3000,
// };
