// components/ItemList.tsx
"use client";

import { useEffect, useState } from "react";

interface Item {
  id: number;
  name: string;
}

const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      setLoading(true);
      try {
        // Mock API data
        const data: Item[] = [
          { id: 1, name: "Item 1" },
          { id: 2, name: "Item 2" },
          { id: 3, name: "Item 3" },
        ];
        setTimeout(() => {
          setItems(data);
          setLoading(false);
        }, 1000); // Simulate network delay
      } catch (error) {
        console.error("Failed to fetch items", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold">Items</h2>
      <ul className="mt-4">
        {items.map((item) => (
          <li key={item.id} className="mb-2">
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
