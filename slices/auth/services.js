import { toast } from "react-toastify";
import axios from "axios";
import { USER_LOGIN,USER_REGISTER } from "../../Helpers/urlHelpers";

const getLogin = async (loginInfo,router) => {
    try {
      const response = await toast.promise(
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/${USER_LOGIN}`, loginInfo, {
          headers: {
            Accept: "application/json",
          },
        }),
        {
          pending: "Signing In...",
        }
      );
      if (response?.data?.status === true) {
          router.push("/");
        sessionStorage?.setItem("authUser", JSON?.stringify(response?.data?.auth));
        toast.success("Signed In Successfully!");
      } else {
        toast.error(response?.data?.message);
      }
      return response?.data?.user;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

const getLogout = async () => {
  try {
    sessionStorage.removeItem("authUser");
    toast.success("Logged Out");
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  } catch (error) {
    toast.error(error)
  }
};

const getRegistered = async (signupInfo,router) => {
    try {
      const response = await toast.promise(
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/${USER_REGISTER}`, signupInfo, {
          headers: {
            Accept: "application/json",
          },
        }),
        {
          pending: "Signing Up...",
        }
      );
      if (response?.data?.status === true) {
        router.push("/");
        sessionStorage?.setItem("authUser", JSON?.stringify(response?.data?.auth));
        toast.success("Signed Up Successfully!");
      } else {
        toast.error(response?.data?.message);
      }
      return response?.data?.user;
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };
const getUpdate = async (userId, user) => {
  try {
    const obj = JSON.parse(sessionStorage.getItem("authUser"));
    obj.otherCountries = user.otherCountries;
    obj.country = user.country;
    obj.scope = user.scope;
    obj.backgroundPic = user.banner;

    let resp = await axios.patch(
      process.env.REACT_APP_USER_URL + `user/${userId}`,
      user
    );
    sessionStorage.setItem("authUser", JSON.stringify(obj));
    return resp;
  } catch (error) {
  }
};

export const services = {
  getLogin,
  getLogout,
  getRegistered,
  getUpdate,
};