import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { userAgent } from "next/server";

export default function Chat() {
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  const [user, setUser] = useState(undefined);
  // const [name,SetName] = useState("");
  const router = useRouter();

  useEffect(() => {
    checking();
  }, []);
  
  const checking = async () => {
    if (!localStorage.getItem("chat-user")) {
      router.push("/login");
    } else {
      setUser(await JSON.parse(localStorage.getItem("chat-user")));
    }
  };
  



  
  return (
    <>
      <div className="bg-[#121246] flex justify-center items-center h-screen w-full ">
        <div className="bg-black rounded-xl w-11/12 h-5/6 flex">
    <h1 className="text-white">you are auhenticated</h1>
        </div>
      </div>
    </>
  );
}
