import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (email, password, confirmPassword, username) => {
    try {
      const response = await $host.post("/api/v1/authenticate/register", {
        username,
        password,
        confirmPassword,
        email
      });
      localStorage.setItem("token", response.data.token);
      return jwt_decode(response.data.token);
    } catch (error) {
      console.error(error);
      // Handle any errors appropriately
    }
  };
  
export const login = async (email, password) => {
    const response = await $host.post("/api/v1/authenticate/login", { email, password });
    localStorage.setItem('token', response.data.accessToken);
    return jwt_decode(response.data.accessToken);
}
export const check = async () => {
  const tocken = localStorage.getItem('token');
    return jwt_decode(tocken);
}

export const logout = () => {
    localStorage.removeItem('token')
}
export const fetchUsers = async () => {
    const response = await $authHost.get("api/v1/authenticate/users");
    return response.data.users
}
export const fetchUsersById = async (id) => {

  const response = await $authHost.get("api/v1/authenticate/user/"+id)
  console.log(response.data)

  return response.data
}
export const deleteUser = async (id) => {
    const response = await $authHost.delete("/users/" + id);
    return response
}
export const updateUser = async (id,  username) => {
    const response = await $authHost.put("/users/" + id, {  USERNAME: username });
    return response
}
export const getUserById = async (id) => {
    const response = await $authHost.get("/users/" + id);
    return response
}
export const getAllByPagesU = async (page, limit) => {
    const response = await $host.get("/users/getAllByPages", {
        params: {
            page, limit
        }
    });
    return response.data;
}