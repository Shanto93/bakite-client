"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import GoogleMapReact from "google-map-react";
import { FiMapPin } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md"; // Import the new location icon
import { calculateDistance } from "@/components/utils/distance";

const allShops = [
  {
    id: 1,
    name: "Dhaka Electronics",
    location: "Dhaka",
    lat: 23.8103,
    lng: 90.4125,
  },
  {
    id: 2,
    name: "Khulna Gadgets",
    location: "Khulna",
    lat: 22.8456,
    lng: 89.5403,
  },
  {
    id: 3,
    name: "Sylhet Super Store",
    location: "Sylhet",
    lat: 24.8949,
    lng: 91.8687,
  },
  {
    id: 4,
    name: "Rajshahi Tech",
    location: "Rajshahi",
    lat: 24.3745,
    lng: 88.6042,
  },
  {
    id: 5,
    name: "Dhaka Mega Mall",
    location: "Dhaka",
    lat: 23.7771,
    lng: 90.3994,
  },
];

const defaultCenter = { lat: 23.8103, lng: 90.4125 };
const userLocation = { lat: 23.75, lng: 90.38 };

const ShopMarker = ({
  text,
  isHovered,
}: {
  text?: string;
  isHovered: boolean;
  lat: number;
  lng: number;
}) => (
  <div
    className="relative flex items-center justify-center"
    style={{
      transform: "translate(-50%, -100%)",
      zIndex: isHovered ? 1000 : 1,
    }}
  >
    {isHovered ? (
      // Hovered State: Show location icon and name
      <div>
        <FiMapPin className="text-[#0aa9a2]" style={{ fontSize: "1.5rem" }} />
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-4">
          <div className="ml-1 mb-1 whitespace-nowrap bg-white px-2 py-1 text-sm font-bold rounded-md shadow-lg">
            {text}
          </div>
        </div>
      </div>
    ) : (
      <div>
        <FiMapPin className="text-red-500" style={{ fontSize: "1.5rem" }} />
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-4">
          <div className="ml-1 mb-1 whitespace-nowrap bg-white px-2 py-1 text-sm font-bold rounded-md shadow-lg">
            Dhaka Electronics
          </div>
        </div>
      </div>
    )}
  </div>
);

const StorePage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const [filteredShops, setFilteredShops] = useState(allShops);
  const [hoveredShopId, setHoveredShopId] = useState<number | null>(null);
  const [mapCenter, setMapCenter] = useState(defaultCenter);

  useEffect(() => {
    if (query) {
      const results = allShops.filter(
        (shop) =>
          shop.name.toLowerCase().includes(query.toLowerCase()) ||
          shop.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredShops(results);
    } else {
      setFilteredShops(allShops);
    }
  }, [query]);

  useEffect(() => {
    if (hoveredShopId) {
      const hoveredShop = allShops.find((shop) => shop.id === hoveredShopId);
      if (hoveredShop) {
        setMapCenter({ lat: hoveredShop.lat, lng: hoveredShop.lng });
      }
    } else {
      setMapCenter(defaultCenter);
    }
  }, [hoveredShopId]);

  const distanceToShop = useMemo(() => {
    if (!hoveredShopId) return null;
    const shop = allShops.find((s) => s.id === hoveredShopId);
    if (!shop) return null;

    return calculateDistance(
      userLocation.lat,
      userLocation.lng,
      shop.lat,
      shop.lng
    );
  }, [hoveredShopId]);

  return (
    <div className="flex h-screen">
      {/* Shop List Section */}
      <div className="w-1/3 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">
          Shops Found: {filteredShops.length}
        </h2>
        {filteredShops.map((shop) => (
          <div
            key={shop.id}
            className={`p-4 border rounded-lg mb-3 cursor-pointer transition-all ${
              hoveredShopId === shop.id
                ? "bg-[#0aa9a2]/10 border-[#0aa9a2] shadow-md"
                : "bg-white"
            }`}
            onMouseEnter={() => setHoveredShopId(shop.id)}
            onMouseLeave={() => setHoveredShopId(null)}
          >
            <h3 className="font-bold">{shop.name}</h3>
            <p className="text-gray-600 flex items-center">
              <FiMapPin className="mr-2" />
              {shop.location}
            </p>
            {hoveredShopId === shop.id && distanceToShop && (
              <p className="text-sm text-[#0aa9a2] mt-1">
                Distance: {distanceToShop.toFixed(2)} km away
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="w-2/3 h-full">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
          }}
          center={mapCenter}
          zoom={14}
        >
          {filteredShops.map((shop) => (
            <ShopMarker
              key={shop.id}
              lat={shop.lat}
              lng={shop.lng}
              text={shop.name}
              isHovered={hoveredShopId === shop.id}
            />
          ))}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default StorePage;
