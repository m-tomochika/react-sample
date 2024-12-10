import axios from "axios";
export const fetchData = async (endpoint: string) => {
  try {
    const response = await axios.get(
        endpoint,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false, // 必要に応じてtrueに設定
        }
    );
    
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};