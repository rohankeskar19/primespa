import axios from "axios";

export const apiCall = async ({ method, url, data, auth=1 }) => {
    try {
        const axiosConfig = {
            method,
            url: `/api/${url}`
        };
        if(auth == 1) {
            axiosConfig.headers = {
                'Authorization': `${sessionStorage.getItem("jwt")}`
            }
        }
        if(method == "post") axiosConfig.data = data;
        const response = await axios(axiosConfig);
        return response;
    } catch(err) {
        console.log("Error in API call => ", err);
        throw new Error(err);
    }
}