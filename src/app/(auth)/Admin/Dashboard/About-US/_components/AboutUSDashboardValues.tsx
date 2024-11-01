"use client";
import React, { ChangeEvent, useState } from "react";

const initialValues =  [
    {
      title: "INTEGRITY",
      content:
        "We act with honesty and transparency in all our dealings, ensuring trust and loyalty from clients and partners. Our business aligns with our values, doing what we say and knowing it’s fundamental for our credibility.",
    },
    {
      title: "EXCELLENCE",
      content:
        "We strive for the highest standards in every transaction, with attention to detail and a commitment to quality service, ensuring our clients receive the best possible experience.",
    },
    {
      title: "EMPOWERMENT",
      content:
        "We believe in empowering both our clients and team members to achieve financial freedom and personal growth by providing the tools, knowledge, and support they need to succeed.",
    },
    {
      title: "CLIENT-CENTRIC",
      content:
        "Our focus is on understanding and fulfilling our clients' unique needs, creating tailored solutions for their real estate aspirations and ensuring their satisfaction.",
    },
    {
      title: "INNOVATION",
      content:
        "We stay ahead of market trends and embrace technology to offer a competitive edge in both client service and team operations, ensuring we remain agile in a fast-paced industry.",
    },
    {
      title: "LONG-TERM RELATIONSHIPS",
      content:
        "We believe in building lasting relationships with clients, partners, and team members, ensuring mutual growth and loyalty throughout our collaborations.",
    },
    {
      title: "TEAMWORK",
      content:
        "We thrive in a collaborative environment, driven by a shared vision of delivering exceptional service and exceeding expectations, knowing that the whole becomes greater than the sum of its parts.",
    },
    {
      title: "RESPONSIBILITY",
      content:
        "We take responsibility for our economic decisions and how we treat our partners, clients, and employees, ensuring we contribute positively to the community.",
    },
    {
      title: "TRANSPARENCY",
      content:
        "Transparency fosters trust and supports goal-oriented actions. It makes our decisions understandable and clear, enhancing our relationships with clients and partners.",
    },
    {
      title: "AGILITY",
      content:
        "We recognize the speed of change within the real estate market and believe this agility is essential for success, enabling us to adapt quickly to client needs and market dynamics.",
    },
  ];

const AboutUsDashboardValues = () => {
  const [values, setValues] = useState(initialValues);
  const [newValue, setNewValue] = useState({ title: "", content: "" });
  const [editValue, setEditValue] = useState<{
    index: number;
    title: string;
    content: string;
  } | null>(null);

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (editValue) {
      setEditValue((prev) => prev && { ...prev, [name]: value });
    } else {
      setNewValue((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Add a new value
  const addValue = () => {
    setValues([...values, { ...newValue }]);
    setNewValue({ title: "", content: "" });
  };

  // Update an existing value
  const updateValue = (index: number) => {
    setValues(
      values.map((val, i) => (i === index ? { title: editValue?.title || "", content: editValue?.content || "" } : val))
    );
    setEditValue(null);
  };

  // Delete a value
  const deleteValue = (index: number) => {
    setValues(values.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 space-y-8 bg-[#101010] text-white pt-[100px] min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-[#f5f5f5]">
        About Us Values Dashboard
      </h1>

      {/* Display Values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <div key={index} className="bg-[#1a1a1a] shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{value.title}</h2>
            <p className="text-gray-400 mb-4">{value.content}</p>
            <div className="flex justify-between items-center space-x-3">
              <button
                className="text-sm w-full text-white bg-[#555] px-4 py-2 rounded hover:bg-[#888] transition-colors"
                onClick={() => setEditValue({ index, ...value })}
              >
                Edit
              </button>
              <button
                className="text-sm w-full text-white bg-red-500 px-4 py-2 rounded hover:bg-red-400 transition-colors"
                onClick={() => deleteValue(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Value */}
      {!editValue && (
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 font-bold">Add New Value</h2>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={newValue.title}
            onChange={handleChange}
            className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500 mb-4"
          />
          <textarea
            placeholder="Content"
            name="content"
            value={newValue.content}
            onChange={handleChange}
            className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500 w-full"
          />
          <button
            onClick={addValue}
            className="mt-4 bg-[#555] hover:bg-[#888] px-6 py-2 rounded text-white font-semibold w-full"
          >
            Add Value
          </button>
        </div>
      )}

      {/* Edit Value */}
      {editValue && (
        <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl mb-4 font-bold">Edit Value</h2>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={editValue.title}
            onChange={handleChange}
            className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500 mb-4"
          />
          <textarea
            placeholder="Content"
            name="content"
            value={editValue.content}
            onChange={handleChange}
            className="p-3 bg-[#2a2a2a] rounded-md text-white placeholder-gray-500 w-full"
          />
          <button
            onClick={() => updateValue(editValue.index)}
            className="mt-4 bg-[#555] hover:bg-[#888] px-6 py-2 rounded text-white font-semibold w-full"
          >
            Update Value
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutUsDashboardValues;
