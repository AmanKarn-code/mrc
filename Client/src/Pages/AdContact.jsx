import React, { useState, useEffect } from "react";
import "./AdUser.css";

const AdContact = () => {
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const contactsPerPage = 5;

  // Fetch all users
  const getAllUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/admin/users`, {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("Error fetching users from admin page", error);
    }
  };

  // Fetch all contacts
  const getAllContacts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/admin/contacts`, {
        method: "GET",
      });
      const data = await response.json();
      setContacts(data);
      setTotalPages(Math.ceil(data.length / contactsPerPage));
    } catch (error) {
      console.log("Error fetching contacts from admin page", error);
    }
  };

  useEffect(() => {
    getAllContacts();
    getAllUsers();
  }, []);

  // Handle delete contact
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/admin/contacts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setContacts(contacts.filter(contact => contact._id !== id));
        setTotalPages(Math.ceil((contacts.length - 1) / contactsPerPage));
      } else {
        console.log("Error deleting contact:", response.statusText);
      }
    } catch (error) {
      console.log("Error deleting contact:", error);
    }
  };

  // Find the username for a given contact's userId
  const findUsernameById = (userId) => {
    const user = users.find(user => user._id === userId);
    return user ? user.username : "Unknown User";
  };

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="contact-table-container">
      <h2>All Contacts</h2>
      <table className="contact-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentContacts.length > 0 ? (
            currentContacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact._id}</td>
                <td>{findUsernameById(contact.userId)}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(contact._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No contacts found</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => paginate(i + 1)}
            className={currentPage === i + 1 ? 'active' : ''}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdContact;
