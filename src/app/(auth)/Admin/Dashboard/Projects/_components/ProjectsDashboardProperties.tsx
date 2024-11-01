"use client";
import React, { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Sample initial data
const initialProperties = [
  {
    id: 1,
    name: "Burj Vista Penthouse",
    location: "Downtown",
    price: "AED 65,000,000",
    image: "/images/projects/02-1-prop.png",
    link: "https://www.joyaproperties.ae/en/item/321-burj-vista-penthouse/",
  },
  {
    id: 2,
    name: "Address Villas",
    location: "Dubai Hills",
    price: "AED 28,500,000",
    image: "/images/projects/02-2prop.png",
    link: "https://www.joyaproperties.ae/en/item/339-address-hillcrest-villas/",
  },
  {
    id: 3,
    name: "Lamborghini Villas",
    location: "Dubai Hills",
    price: "AED 62,500,000",
    image: "/images/projects/02-3prop.png",
    link: "https://www.joyaproperties.ae/en/item/341-lamborghini-villas/",
  },
  {
    id: 4,
    name: "Four Seasons",
    location: "Dubai Canal",
    price: "AED 38,500,000",
    image: "/images/projects/02-4prop.png",
    link: "https://www.joyaproperties.ae/en/item/281-four-seasons-2-bed/",
  },
  {
    id: 11,
    name: "Burj Vista Penthouse",
    location: "Downtown",
    price: "AED 65,000,000",
    image: "/images/projects/02-1-prop.png",
    link: "https://www.joyaproperties.ae/en/item/321-burj-vista-penthouse/",
  },
  {
    id: 22,
    name: "Address Villas",
    location: "Dubai Hills",
    price: "AED 28,500,000",
    image: "/images/projects/02-2prop.png",
    link: "https://www.joyaproperties.ae/en/item/339-address-hillcrest-villas/",
  },
  {
    id: 33,
    name: "Lamborghini Villas",
    location: "Dubai Hills",
    price: "AED 62,500,000",
    image: "/images/projects/02-3prop.png",
    link: "https://www.joyaproperties.ae/en/item/341-lamborghini-villas/",
  },
  {
    id: 44,
    name: "Four Seasons",
    location: "Dubai Canal",
    price: "AED 38,500,000",
    image: "/images/projects/02-4prop.png",
    link: "https://www.joyaproperties.ae/en/item/281-four-seasons-2-bed/",
  },
  {
    id: 5,
    name: "Burj Vista Penthouse",
    location: "Downtown",
    price: "AED 65,000,000",
    image: "/images/projects/02-1-prop.png",
    link: "https://www.joyaproperties.ae/en/item/321-burj-vista-penthouse/",
  },
  {
    id: 6,
    name: "Address Villas",
    location: "Dubai Hills",
    price: "AED 28,500,000",
    image: "/images/projects/02-2prop.png",
    link: "https://www.joyaproperties.ae/en/item/339-address-hillcrest-villas/",
  },
  {
    id: 7,
    name: "Lamborghini Villas",
    location: "Dubai Hills",
    price: "AED 62,500,000",
    image: "/images/projects/02-3prop.png",
    link: "https://www.joyaproperties.ae/en/item/341-lamborghini-villas/",
  },
  {
    id: 8,
    name: "Four Seasons",
    location: "Dubai Canal",
    price: "AED 38,500,000",
    image: "/images/projects/02-4prop.png",
    link: "https://www.joyaproperties.ae/en/item/281-four-seasons-2-bed/",
  },
];

const FeaturesProperties = () => {
  const [properties, setProperties] = useState(initialProperties);
  const [newProperty, setNewProperty] = useState({
    name: "",
    location: "",
    price: "",
    image: "",
    link: "",
  });
  const [editProperty, setEditProperty] = useState<{
    id: number;
    name: string;
    location: string;
    price: string;
    image: string;
    link: string;
  } | null>(null);

  // Handle form changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Handling form change:", e.target.name, e.target.value);
    const { name, value } = e.target;
    setNewProperty((prev) => {
      console.log("Previous state of newProperty:", prev);
      const newState = { ...prev, [name]: value };
      console.log("New state of newProperty:", newState);
      return newState;
    });
  };

  /*************  ✨ Codeium Command 🌟  *************/
  // Add a new property
  // This function adds a new property to the state when called.
  // It does this by creating a new property object with the same key-value pairs as newProperty.
  // The new property object is then spread into a new array with all the existing properties.
  // The new array is then set as the new state of properties.
  // The newProperty state is then reset to an empty object.
  const addProperty = () => {
    console.groupCollapsed(
      "Attempting to add a new property",
      newProperty,
      "Current properties in state:",
      properties
    );
    console.log("Current state of newProperty:", newProperty);
    console.log("Adding a new property:", newProperty);
    const newId = properties.length + 1;
    const newPropertyObject = { ...newProperty, id: newId };
    console.log("New property object:", newPropertyObject);
    const newProperties = [...properties, newPropertyObject];
    console.log("New state of properties:", newProperties);
    setProperties(newProperties);
    console.log("New state of newProperty:", newProperty);
    setProperties([...properties, { ...newProperty, id: newId }]);
    console.log("New state of properties:", properties);
    setNewProperty({ name: "", location: "", price: "", image: "", link: "" });
    console.log("New state of newProperty:", newProperty);
    console.groupEnd();
  };
  /******  b100e8a6-e724-4a9f-bb86-3aeff103f512  *******/

  // Update a property
  // This function takes an id as an argument and updates the property with the matching id in the state.
  // It does this by using the map method to create a new array with all the properties that have not been updated.
  // The current property being edited is spread into the new property object, overwriting any existing key-value pairs.
  // The new array is then set as the new state of properties.
  const updateProperty = (id: number) => {
    console.groupCollapsed(
      "Attempting to update property with id",
      id,
      "Current properties in state:",
      properties
    );
    console.log("Current editProperty:", editProperty);
    setProperties(
      properties.map((prop) => {
        if (prop.id === id) {
          console.log(
            "Updating property with id",
            id,
            "with editProperty:",
            editProperty
          );
          return { ...prop, ...(editProperty || {}) };
        } else {
          console.log(
            "Not updating property with id",
            prop.id,
            "because it does not match the id provided"
          );
          return prop;
        }
      })
    );
    console.log("New state of properties:", properties);
    setEditProperty(null);
    console.log("New state of editProperty:", editProperty);
    console.groupEnd();
  };

  // Delete a property
  // This function takes an id as an argument and removes the property with the matching id from the state.
  // It does this by using the filter method to create a new array with all the properties that do not have the
  // matching id. The new array is then set as the new state of properties.
  const deleteProperty = (id: number) => {
    console.log(
      "Attempting to delete property with id:",
      id,
      "Current properties in state:",
      properties
    );
    setProperties(
      properties.filter((prop) => {
        console.log("Checking property with id:", prop.id);
        // If the id of the property does not match the id passed to the function, it is kept in the new array.
        return prop.id !== id;
      })
    );
    console.log(
      "Deleted property with id:",
      id,
      "New properties in state:",
      properties
    );
  };

  return (
    <div className="p-8 space-y-8 bg-[#101010] text-white pt-[100px] min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-[#f5f5f5]">
        Properties Dashboard
      </h1>

      {/* Property Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <motion.div
            key={property.id}
            className="bg-[#1a1a1a] shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <Link href={property.link} target="_blank">
                <Image
                  src={property.image}
                  alt={property.name}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              <div className="p-5">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-[#ffae00] transition-colors">
                  {property.name}
                </h2>
                <p className="text-gray-400 mb-4">{property.location}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-[#f1f0ec]">
                    {property.price}
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4 space-x-2">
                  <button
                    className=" w-full text-sm text-white bg-[#555] px-4 py-2 rounded hover:bg-[#888] transition-colors"
                    onClick={() => setEditProperty(property || null)}
                  >
                    Edit
                  </button>

                  <button
                    className="w-full text-sm text-white bg-red-500 px-4 py-2 rounded hover:bg-red-400 transition-colors"
                    onClick={() => deleteProperty(property.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add New Property */}
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 font-bold">Add New Property</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newProperty.name}
            onChange={handleChange}
            className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={newProperty.location}
            onChange={handleChange}
            className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={newProperty.price}
            onChange={handleChange}
            className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={newProperty.image}
            onChange={handleChange}
            className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
          />
          <input
            type="text"
            placeholder="Link"
            name="link"
            value={newProperty.link}
            onChange={handleChange}
            className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
          />
        </div>
        <button
          onClick={addProperty}
          className="mt-6 bg-[#555] hover:bg-[#888] px-6 py-2 rounded text-white font-semibold w-full"
        >
          Add Property
        </button>
      </div>

      {/* Edit Property */}
      {editProperty && (
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 font-bold">Edit Property</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={editProperty.name}
              onChange={(e) =>
                setEditProperty({ ...editProperty, name: e.target.value })
              }
              className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={editProperty.location}
              onChange={(e) =>
                setEditProperty({ ...editProperty, location: e.target.value })
              }
              className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={editProperty.price}
              onChange={(e) =>
                setEditProperty({ ...editProperty, price: e.target.value })
              }
              className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={editProperty.image}
              onChange={(e) =>
                setEditProperty({ ...editProperty, image: e.target.value })
              }
              className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Link"
              name="link"
              value={editProperty.link}
              onChange={(e) =>
                setEditProperty({ ...editProperty, link: e.target.value })
              }
              className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500"
            />
          </div>
          <button
            onClick={() => updateProperty(editProperty.id)}
            className="mt-6 bg-[#555] hover:bg-[#888] px-6 py-2 rounded text-white font-semibold w-full"
          >
            Update Property
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturesProperties;
