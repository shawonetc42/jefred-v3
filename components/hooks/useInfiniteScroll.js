"use client";
import { useState, useEffect } from "react";

const useInfiniteScroll = (fetchData, pageSize) => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      const result = await fetchData();
      setData(result.reverse());
    };

    fetchInitialData();
  }, [fetchData]);

  useEffect(() => {
    loadMoreData();
  }, [data]);

  const loadMoreData = () => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= data.length) {
      setHasMore(false);
      return;
    }
    const newItems = data.slice(startIndex, endIndex);
    setDisplayData((prevDisplayData) => [...prevDisplayData, ...newItems]);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight
      ) {
        loadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data, page]);

  return { displayData, hasMore, loadMoreData };
};

export default useInfiniteScroll;
