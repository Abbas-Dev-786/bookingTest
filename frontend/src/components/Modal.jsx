import React, { useRef } from "react";

const Modal = ({ fn, ln, c, pn, ip, nd, cd, m, fn, rn, rt }) => {
  const firstName = useRef(fn);
  const lastName = useRef(ln);
  const city = useRef(c);
  const phoneNumber = useRef(pn);
  const identityProof = useRef(ip);
  const noOfDays = useRef(nd);
  const checkoutDate = useRef(cd);
  const amount = useRef(m);
  const floorNumber = useRef(fn);
  const roomNumber = useRef(rn);
  const roomType = useRef(rt);

  const post = async () => {
    const data = {
      data: {
        FirstName: firstName.current.value,
        LastName: lastName.current.value,
        City: city.current.value,
        PhoneNumber: phoneNumber.current.value,
        Proof: identityProof.current.value,
        StayDays: +noOfDays.current.value,
        CheckoutDate: checkoutDate.current.value,
        Amount: amount.current.value,
        FloorNumber: +floorNumber.current.value,
        RoomNumber: +roomNumber.current.value,
        RoomType: roomType.current.value,
      },
    };

    try {
      fetch("http://localhost:1337/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 37b347445f50f738e57ccd8a6588b905d836269ac169d67f96e45df24d753ccdda4b97da0ed526bdeffc2f1c236ed7c758dd86c0ab923299ee65cad37ade26385bcc4fabaacb91b4a52aeb6c9964c7d1cf68279843d280ae2e1fe79b01f785275e871177533b5885733f7cfde80088c20d911574766bd1b8110484e9d981137a",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log("Request complete! response:", res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    post();
  };

  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="inputEmail4" className="form-label">
          First Name
        </label>
        <input
          type="text"
          ref={firstName}
          className="form-control"
          id="inputEmail4"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputPassword4" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          ref={lastName}
          className="form-control"
          id="inputPassword4"
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputCity" className="form-label">
          City
        </label>
        <input type="text" ref={city} className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">
          Phone Number
        </label>
        <input type="tel" ref={phoneNumber} className="form-control" />
      </div>
      <div className="col-md-4">
        <label htmlFor="inputproof" className="form-label">
          Identity Proof
        </label>
        <select id="inputproof" ref={identityProof} className="form-select">
          <option value="Adhar Card" defaultValue>
            Adhar Card{" "}
          </option>
          <option value="Passport">Passport </option>
          <option value="Voter ID">Voter ID </option>
          <option value="Driving License">Driving License </option>
        </select>
      </div>
      <div className="col-4">
        <label htmlFor="inputEmail4" className="form-label">
          Number of days to stay
        </label>
        <input
          type="number"
          ref={noOfDays}
          className="form-control"
          id="inputEmail4"
        />
      </div>
      <div className="col-4">
        <label htmlFor="inputEmail4" className="form-label">
          checkout date
        </label>
        <input
          type="date"
          ref={checkoutDate}
          className="form-control"
          id="inputEmail4"
        />
      </div>
      <div className="col-4">
        <label htmlFor="inputEmail4" className="form-label">
          Amount
        </label>
        <input
          type="number"
          ref={amount}
          className="form-control"
          id="inputEmail4"
        />
      </div>
      <div className="col-4">
        <label htmlFor="inputEmail4" className="form-label">
          Floor Number
        </label>
        <input
          type="number"
          ref={floorNumber}
          className="form-control"
          id="inputEmail4"
        />
      </div>
      <div className="col-4">
        <label htmlFor="inputEmail4" className="form-label">
          Room Number
        </label>
        <input
          type="number"
          ref={roomNumber}
          className="form-control"
          id="inputEmail4"
        />
      </div>
      <div className="col-4">
        <label htmlFor="inputState" className="form-label">
          Room Type
        </label>
        <select id="inputState" ref={roomType} className="form-select">
          <option value="Single Room" defaultValue>
            Single Room
          </option>
          <option value="Double Room">Double Room</option>
          <option value="Delux">Delux </option>
        </select>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" onClick={submitForm}>
          Book
        </button>
      </div>
    </form>
  );
};

export default Modal;
