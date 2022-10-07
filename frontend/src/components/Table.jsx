import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1337/api/bookings").then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    });
  }, []);

  const deleteBooking = (e) => {
    const id = e.target.id;
    axios.delete(`http://localhost:1337/api/bookings/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 37b347445f50f738e57ccd8a6588b905d836269ac169d67f96e45df24d753ccdda4b97da0ed526bdeffc2f1c236ed7c758dd86c0ab923299ee65cad37ade26385bcc4fabaacb91b4a52aeb6c9964c7d1cf68279843d280ae2e1fe79b01f785275e871177533b5885733f7cfde80088c20d911574766bd1b8110484e9d981137a",
      },
    });

    const newData = data.filter((data) => data.id !== id);
    setData(newData);
  };

  const editBooking = () => {};

  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Room Number</th>
          <th scope="col">Days</th>
          <th scope="col">Room Type</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {data.map((att) => {
          const data = att.attributes;

          return (
            <tr key={att.id}>
              <th scope="row">{att.id}</th>
              <td>{data.FirstName}</td>
              <td>{data.LastName}</td>
              <td>{data.PhoneNumber}</td>
              <td>{data.RoomNumber}</td>
              <td>{data.StayDays}</td>
              <td>{data.RoomType}</td>
              <td>
                <button
                  id={att.id}
                  className="btn btn-danger"
                  onClick={deleteBooking}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  id={att.id}
                  className="btn btn-warning"
                  onClick={editBooking}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
