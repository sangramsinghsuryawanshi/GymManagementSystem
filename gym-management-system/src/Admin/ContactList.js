import React, { useState, useEffect } from "react";
import axios from "axios";
import "../AdminCSS/ContactForm.css";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/admin/contact");
      console.log(response.data);
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8080/api/admin/del/contact/${id}`);
        setContacts(contacts.filter((contact) => contact.contactId !== id));
        alert("Contact deleted successfully!");
      } catch (error) {
        console.error("Error deleting contact:", error);
        alert("Failed to delete contact.");
      }
    }
  };

  return (
    <div className="contact-container-1">
      <h2>Contact Messages</h2>

      {/* Contact List */}
      <div className="contact-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.contactId}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>
                  <button className="delete-btn" onClick={() => handleDelete(contact.contactId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
