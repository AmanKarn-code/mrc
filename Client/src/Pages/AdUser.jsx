import React, { useState, useEffect } from "react";
import "./AdUser.css";
import { Link } from "lucide-react";

const AdUser = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const usersPerPage = 10;

  const getAllUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/admin/users`, {
        method: "GET",
      });
      const data = await response.json();
      setUsers(data);
      setTotalPages(Math.ceil(data.length / usersPerPage));
    } catch (error) {
      console.log("Error fetching users from admin page", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleEdit = (id) => {
    alert(`Edit user with ID: ${id}`);
  };




 const handleDelete = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/admin/users/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Successfully deleted the user
      setUsers(users.filter(user => user._id !== id));
      setTotalPages(Math.ceil((users.length - 1) / usersPerPage));
    } else {
      console.log("Error deleting user:", response.statusText);
    }
  } catch (error) {
    console.log("Error deleting user:", error);
  }
};


  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="user-table-container">
      <h2>All Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map(user => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <a href={`/admin/user/:id/edit`}
                    className="edit-btn"
                  >
                    Edit
                  </a>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No users found</td>
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

export default AdUser;