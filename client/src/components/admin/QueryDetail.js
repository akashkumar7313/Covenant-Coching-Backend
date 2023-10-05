import React, { useState, useEffect, useCallback } from "react";
import { firebase } from "../db/firebase";
import { AiFillEdit, AiOutlineCheck, AiOutlineClose, } from "react-icons/ai";
import Home from "./Home";
import { Breadcrumbs } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const QueryDetail = () => {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedData, setEditedData] = useState({});
  const [error, setError] = useState(null);

  const fetchDataFromFirebase = useCallback(() => {
    try {
      const queryFormsRef = firebase.database().ref('contactFormData');

      queryFormsRef.on('value', (snapshot) => {
        const queryFormData = snapshot.val();
        if (queryFormData) {
          const dataArray = Object.values(queryFormData);
          setData(dataArray);
          setError(null);
        } else {
          setData([]);
        }
      });
    } catch (error) {
      setError('Error fetching data: ' + error.message);
    }
  }, []);

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
      const queryFormRef = firebase.database().ref(`contactFormData/${data[index].id}`);
  
      await queryFormRef.update(updatedData);
  
      // Update the state data with the updatedData
      const updatedDataArray = [...data];
      updatedDataArray[index] = updatedData;
      setData(updatedDataArray);
  
      setEditIndex(-1);
      setError(null);
    } catch (error) {
      setError('Error updating data: ' + error.message);
    }
  };

  const handleDelete = async (idToDelete) => {
    try {
      const queryFormRef = firebase.database().ref(`contactFormData/${idToDelete}`);
  
      await queryFormRef.remove();
  
      // Update the state data by removing the deleted item
      const updatedDataArray = data.filter((item) => item.id !== idToDelete);
      setData(updatedDataArray);
  
      setError(null);
    } catch (error) {
      setError('Error deleting data: ' + error.message);
    }
  };

  return (
    <div className="bg-blue-500">
    <Breadcrumbs className="flex justify-end px-4 text-white static top-5">
            <NavLink
              to="/Home"
              className="text-[16px] font-semibold leading-10  text-black hover:text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/Students/QueryDetail"
              className="text-[18px] font-semibold leading-10  text-white hover:text-black"
            >
              Students Offer
            </NavLink>
          </Breadcrumbs>
    <section className="relative bg-blueGray-50 ">
      <div className="w-full">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded bg-pink-200 text-black">
          <div className="block w-full overflow-x-auto">
            <div className="overflow-y-auto h-screen">
              <div className='bg-pink-200 h-16 sticky top-0'>
                <h2 className="text-black flex justify-center pt-3 text-3xl font-bold ">
                  Student Query List
                </h2>
              </div>
              <table className="items-center w-full bg-transparent border-collapse">
                <thead className="sticky top-[60px]">
                  <tr className=' w-[100vw]'>
                    <th className="px-6 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-blue-500 text-white border-cyan-500">
                      SrNo.
                    </th>
                    <th className="px-14 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-blue-500 text-white border-cyan-500">
                      Name
                    </th>
                    <th className="px-28 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-blue-500 text-white border-cyan-500">
                      Email
                    </th>
                    <th className="px-16 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-blue-500 text-white border-cyan-500">
                      Mobile No
                    </th>
                    <th className=" align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-blue-500 text-white border-cyan-500">
                      Applied Course
                    </th>
                    <th className=" px-10 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-blue-500 text-white border-cyan-500">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((contactFormData, index) => (
                    <tr key={contactFormData.id}>
                    <td className="px-8 text-black align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">{index + 1}.</td>
                      <td className="py-0 pl-5  text-black">
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
                      <td className="px-8 text-black align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
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
                      <td className="px-8 text-black align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
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
                      <td className="px-8 text-black align-middle border-l-0 border-r-0 text-[16px] whitespace-nowrap p-4">
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
                            className="text-white bg-black hover:bg-emerald-500 hover:text-white active:bg-emerald-600 uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                            onClick={() => handleUpdate(index)}
                          >
                            <AiOutlineCheck/> save
                          </button>
                        ) : (
                          <button
                            className="text-white bg-green-500 hover:bg-emerald-800 hover:text-white active:bg-emerald-600 uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                            onClick={() => handleEdit(index)}
                          >
                            <AiFillEdit/> edit
                          </button>
                        )}
                        <button
                           className="text-white bg-red-500 hover:bg-red-800 hover:text-white active:bg-emerald-600 uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => handleDelete(contactFormData.id)}
                        >
                          <AiOutlineClose/> delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default QueryDetail;
