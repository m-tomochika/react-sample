import React, { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
// interface FetchDataProps の定義
interface FetchDataProps {
  collectionName: string;
  documentId: string;
}

const FetchData: React.FC<FetchDataProps> = ({ collectionName, documentId }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/get-data/${collectionName}/${documentId}`
        );
        setData(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [collectionName, documentId]);

  if (loading) return React.createElement('p', null, 'Loading...');
  if (error) return React.createElement('p', null, `Error: ${error}`);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Fetched Data:"),
    React.createElement("pre", null, JSON.stringify(data, null, 2))
  );
};

export default FetchData;