import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import './App.css';

function App() {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (formData, history) => {
    const newMailbox = {
      _id: mailboxes.length + 1,
      boxholder: formData.boxholder,
      boxSize: formData.boxSize,
    };
    setMailboxes([...mailboxes, newMailbox]);
    history.push('/mailboxes');
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <main>
    <h1>Post Office</h1>
  </main>
);

export default App;
