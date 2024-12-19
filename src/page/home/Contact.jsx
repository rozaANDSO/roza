import React from "react";
import SectionTitle from "../../component/SectionTitle";

const Contact = () => {
  const user = {
    name: "Roza Belay",
    address: "Addis Ababa Ethiopia",
    city: "Addis Ababa",
    country: "Ethiopia",
    zip: "1000",
    email: "rozabelay112@gmail.com",
    phone: "0922887221",
  };
  return (
    <div className="mt-10">
      <SectionTitle title="Hello" />
      <div className="flex text-black items-center">
        <div className="flex  flex-col gap-2 text-black">
          <h1>Name: {user.name}</h1>
          <h1>Address: {user.address}</h1>
          <h1>City: {user.city}</h1>
          <h1>Country: {user.country}</h1>
          <h1>Zip: {user.zip}</h1>
          <h1>Email: {user.email}</h1>
          <h1>Phone: {user.phone}</h1>
        </div>
        <div className="h-[300px] mb-3">
          <lottie-player
            src="https://lottie.host/e0e86451-b9d0-4247-88a5-bf57cb861b14/ijgCkAIUbh.json"
            speed="1"
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
