"use client"; // クライアントコンポーネントとしてマーク
import React, { useState, useEffect } from "react";
import { fetchData } from "../services/fetchData";

type FetchDataProps = {
  collectionName: string;
  documentId: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_ENDPOINT;

const FetchData: React.FC<FetchDataProps> = ({ collectionName, documentId }) => {
  console.log("collectionName:", collectionName);
  console.log("documentId:", documentId);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const endpoint = `${BASE_URL}/get-data/${collectionName}/${documentId}`;
        const result = await fetchData(endpoint);
        console.log("Response Data:", result);
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [collectionName, documentId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchData;
