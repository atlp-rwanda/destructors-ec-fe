import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import send from "../../assets/send_message.svg";
import chat from "../../assets/message_icon.svg";
import avatar1 from "../../assets/avatar1.svg";
import avatar2 from "../../assets/avatar3.svg";
import cross from "../../assets/cross.svg";
import getUserInfo from "../../utils/getUserInfo";

const ChatApp = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [oldMessages, setOldMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [newMessageCount, setNewMessageCount] = useState(0);
  const chatBodyRef = useRef(null);
  const [userId, setUser] = useState(null);
  const info = getUserInfo();
  useEffect(() => {
    setUser(info?.data?.id);
  }, []);

  useEffect(() => {
    const newSocket = io(`${import.meta.env.VITE_REACT_APP_API_URLs}`);
    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("connected!");
      newSocket.emit("newuser", userId);
    });

    newSocket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    newSocket.on("getOldMessages", (messagesData) => {
      const messages = messagesData.map((message) => ({
        userId: message.isMine ? userId : message.senderId,
        username: message.username,
        text: message.text,
        time: message.time,
      }));
      if (oldMessages.length === 0) {
        setOldMessages((prevMessages) => [...prevMessages, ...messages]);
      } else {
        setOldMessages(messages);
      }
    });

    newSocket.on("chat", (message) => {
      setOldMessages((prevMessages) => [...prevMessages, message]);
      setNewMessageCount((prevCount) => prevCount + 1);
      if (chatVisible) {
        scrollToBottom();
      }
    });

    return () => {
      newSocket.emit("exituser", userId);
      newSocket.disconnect();
      newSocket.off("getOldMessages");
      newSocket.off("chat");
    };
  }, [userId]);

  useEffect(() => {
    if (chatVisible) {
      scrollToBottom();
      setNewMessageCount(0);
    }
  }, [chatVisible]);

  useEffect(() => {
    const chatBody = document.getElementById("body");
    if (chatBody) {
      chatBody.scrollTo(0, chatBody.scrollHeight);
    }
  }, [oldMessages]);

  const scrollToBottom = () => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  };

  const handleChatSubmit = async () => {
    if (message.trim() !== "") {
      const newMessage = {
        userId: userId,
        text: message,
        time: "now",
      };
      setOldMessages((prevMessages) => [
        ...prevMessages,
        { type: "my", ...newMessage },
      ]);
      socket.emit("chat", newMessage);
      setMessage("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleChatSubmit();
    }
  };

  const handleChatVisible = () => {
    setChatVisible((prevChatVisible) => !prevChatVisible);
    if (!chatVisible) {
      scrollToBottom();
    }
  };

  const renderOldMessages = () => {
    return oldMessages.map((message, index) => (
      <div
        className={`px-[12px] text-[12px] ${
          message.userId === userId
            ? "bg-[#a4a1a1]  ml-auto rounded-tl-[25px] rounded-tr-[25px] rounded-bl-[25px]"
            : "bg-[#f7f7f7] rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px]"
        } w-fit p-[5px] shadow-md`}
        key={index}
        data-testid='chat-message'
      >
        {message.userId === userId ? (
          <div className='flex flex-row-reverse justify-between py-2'>
            <h3 className='font-[700] text-[#142735]'>you</h3>
            <img className='w-[20px]' src={avatar1} alt='' />
          </div>
        ) : (
          <div className='flex flex-row-reverse justify-between py-2'>
            <h3 className='font-[700] text-[#142735]'>{message.username}</h3>
            <img className='w-[20px]' src={avatar2} alt='' />
          </div>
        )}
        <p className='font-[200] text-[#333434]  w-[150px] xs:w-[100px] text-[16px] break-all'>
          {message.text}
        </p>
        <p className='font-[200] text-[#363535] text-[10px]'>{message.time}</p>
      </div>
    ));
  };

  return (
    <div className='flex flex-col-reverse content-center mt-[30%] w-full'>
      {chatVisible && (
        <div
          id='main'
          className='fixed flex flex-col h-[60vh] gap-2 w-[50%] xs:w-[93%] overflow-x-hidden shadow-2xl rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] bg-[#ffffff]  mt-auto mr-auto'
        >
          <div className='bg-[#103547] text-[white] h-[10%] p-[25px] flex items-center'>
            <h1>Chat</h1>
          </div>
          <div
            id='body'
            className='p-[20px] flex flex-col gap-2 flex-grow overflow-y-auto bg-[#ffffff]'
            ref={chatBodyRef}
          >
            {renderOldMessages()}
          </div>
          <div className='w-[80%] border-[1px] border-[#dad6d6] relative flex rounded-md mb-7 self-center'>
            <input
              id='input-message'
              type='text'
              placeholder='enter message ....'
              className='w-3/4 py-2 px-3 rounded-l-md text-[gray] text-xs focus:outline-none'
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              onKeyPress={handleKeyPress}
              data-testid='input-message'
            />
            <button
              className='w-1/4 bg-white py-2 px-3 rounded-r-md focus:outline-none'
              onClick={handleChatSubmit}
            >
              <img
                className='h-5 ml-auto text-white w-5'
                src={send}
                alt='Send'
              />
            </button>
          </div>
        </div>
      )}
      <button onClick={handleChatVisible} className='fixed'>
        {chatVisible ? (
          <img
            className='h-10 p-[6px] ml-auto text-white w-10'
            src={cross}
            alt=''
          />
        ) : (
          <img className='h-10 ml-auto text-white w-10' src={chat} alt='' />
        )}
        {!chatVisible && newMessageCount > 0 && (
          <span className='bg-red-500 text-[#ffffff] bg-[red] text-xs px-2 py-1 rounded-full absolute -top-1 -right-1'>
            {newMessageCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatApp;
