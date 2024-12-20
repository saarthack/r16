import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    name: "",
    company: "",
    phone: "",
    favorite: false,
  });

  const [contacts, setContacts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setContact({
      ...contact,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addContact = () => {
    if (contact.name && contact.phone) {
      setContacts([...contacts, contact]);
      setContact({ name: "", company: "", phone: "", favorite: false });
    } else {
      alert("Please fill out the required fields (Name and Phone).");
    }
  };

  return (
    <div className="flex h-screen p-4 bg-gray-100">
      {/* Left Section: Add Contact Form */}
      <div className="w-1/2 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-xl font-bold text-gray-700 mb-4">Add Contact</h1>
        <form className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={contact.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Company
            </label>
            <input
              type="text"
              name="company"
              value={contact.company}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter company"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="phone"
              value={contact.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter phone number"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="favorite"
              checked={contact.favorite}
              onChange={handleInputChange}
              className="w-4 h-4"
            />
            <label className="text-sm font-medium text-gray-600">Favorite</label>
          </div>
          <button
            type="button"
            onClick={addContact}
            className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Add Contact
          </button>
        </form>
      </div>

      {/* Right Section: Contact List */}
      <div className="w-1/2 p-6 overflow-y-auto">
        <h1 className="text-xl font-bold text-gray-700 mb-4">Contact List</h1>
        {contacts.length === 0 ? (
          <p className="text-gray-500">No contacts added yet.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {contacts.map((c, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md border border-gray-200"
              >
                <h2 className="text-lg font-semibold text-gray-700">{c.name}</h2>
                <p className="text-sm text-gray-600">Company: {c.company || "N/A"}</p>
                <p className="text-sm text-gray-600">Phone: {c.phone}</p>
                {c.favorite && (
                  <span className="px-2 py-1 mt-2 text-xs font-medium text-white bg-yellow-500 rounded-full">
                    Favorite
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
