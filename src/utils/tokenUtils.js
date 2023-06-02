export const extractTokenFromURL = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const token = searchParams.get("t");
    return token ? token : null;
  };
  
  export const parseToken = (token) => {
    if (!token) {
      throw new Error("Invalid token");
    }
  
    const tokenParts = token.split(".");
    if (tokenParts.length !== 3) {
      throw new Error("Invalid token format");
    }
  
    const base64Url = tokenParts[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  
    try {
      return JSON.parse(jsonPayload);
    } catch (error) {
      throw new Error("Failed to parse token payload");
    }
  };
  