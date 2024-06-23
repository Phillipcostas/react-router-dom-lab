import React, { useState } from 'react';

const MailboxForm = ({ addBox, history }) => {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small'); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMailbox = {
      boxholder,
      boxSize,
    };

    addBox(newMailbox);
 
    history.push('/mailboxes');
  };

  return (
    <div>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Boxholder:
          <input
            type="text"
            value={boxholder}
            onChange={(e) => setBoxholder(e.target.value)}
            required
          />
        </label>
        <label>
          Box Size:
          <select value={boxSize} onChange={(e) => setBoxSize(e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Create Mailbox</button>
      </form>
    </div>
  );
};

export default MailboxForm;
