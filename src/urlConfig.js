const baseUrl = process.env.API || "https://flipkart-rest-server.herokuapp.com";
//const baseUrl = "http://localhost:8080";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
