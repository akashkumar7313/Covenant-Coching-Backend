import React, { useState, useEffect, useCallback } from "react";
import { firebase } from "../db/firebase"; // Import your Firebase configuration

export default function QueryDetail() {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedData, setEditedData] = useState({});
  const [error, setError] = useState(null);

  const fetchDataFromFirebase = useCallback(() => {
    try {
      // Reference to your Firebase data
      const queryFormsRef = firebase.database().ref('contactFormData');
      
      queryFormsRef.on('value', (snapshot) => {
        const queryFormData = snapshot.val();
        if (queryFormData) {
          const dataArray = Object.values(queryFormData);
          setData(dataArray);
          setError(null); // Clear any previous errors
        } else {
          setData([]); // No data available
        }
      });
    } catch (error) {
      setError('Error fetching data: ' + error.message);
    }
  }, []); // Empty dependency array

  useEffect(() => {
    fetchDataFromFirebase();
  }, [fetchDataFromFirebase]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedData({ ...data[index] });
  };

  const handleUpdate = async (index) => {
    try {
      const updatedData = { ...data[index], ...editedData };
      const queryFormRef = firebase.database().ref(`contactFormData/${data[index].id}`); // Replace 'id' with the actual key/id

      await queryFormRef.set(updatedData); // Update the data in Firebase

      setEditIndex(-1); // Reset edit mode
      setError(null); // Clear any previous errors
    } catch (error) {
      setError('Error updating data: ' + error.message);
    }
  };

  return (
    <div className="h-auto rounded-lg p-10">
      <div className="w-[80vw] rounded-lg flex-wrap">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div>
            <h2 className="text-white flex justify-center text-3xl mb-5 font-semibold">
              Student Query List
            </h2>
            <table className="text-white">
              <thead className="bg-gray-800">
                <tr>
                  <th className="py-2 px-10 text-white">SrNo.</th>
                  <th className="py-2 text-white">Name</th>
                  <th className="py-2 pl-5 text-white">Email</th>
                  <th className="py-2 pl-16 text-white">Mobile No</th>
                  <th className="py-2 pl-28 px-10 text-white">Applied Course</th>
                </tr>
              </thead>
              <tbody>
                {data.map((contactFormData, index) => (
                  <tr key={contactFormData.id}>
                    <td className="py-0 px-8 pl-10 text-white">{index + 1}.</td>
                    <td className="py-0 pl-5 text-white">
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={editedData.name}
                          onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                          className="bg-white text-black px-2 py-1 rounded"
                        />
                      ) : (
                        contactFormData.name
                      )}
                    </td>
                    <td className="py-0 pl-16 text-white">
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={editedData.email}
                          onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                          className="bg-white text-black px-2 py-1 rounded"
                        />
                      ) : (
                        contactFormData.email
                      )}
                    </td>
                    <td className="py-2 pl-28 px-10 text-white">
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={editedData.mobileNo}
                          onChange={(e) => setEditedData({ ...editedData, mobileNo: e.target.value })}
                          className="bg-white text-black px-2 py-1 rounded"
                        />
                      ) : (
                        contactFormData.mobileNo
                      )}
                    </td>
                    <td className="py-2 pl-28 px-10 text-white">
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={editedData.courseToApply}
                          onChange={(e) => setEditedData({ ...editedData, courseToApply: e.target.value })}
                          className="bg-white text-black px-2 py-1 rounded"
                        />
                      ) : (
                        contactFormData.courseToApply
                      )}
                    </td>
                    <td>
                      {editIndex === index ? (
                        <button
                          className="text-green-600 hover:text-green-900"
                          onClick={() => handleUpdate(index)}
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          onClick={() => handleEdit(index)}
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
