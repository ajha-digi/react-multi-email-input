import { useState } from 'react';
import { ReactMultiEmail } from 'react-multi-email';
import 'react-multi-email/style.css';

const styles = {
  fontFamily: 'sans-serif',
  width: '500px',
  border: '1px solid #eee',
  padding: '25px',
  margin: '20px',
};

const MultiEmailInput = () => {
  const [emails, setEmails] = useState([]);
  return (
    <div style={styles}>
      <ReactMultiEmail
        placeholder="Input your Email Address"
        emails={emails}
        onChange={_emails => setEmails(_emails)}
        getLabel={(email, index, removeEmail) => {
          return (
            <div data-tag key={index}>
              {email}
              <span data-tag-handle onClick={() => removeEmail(index)}>
                ×
              </span>
            </div>
          );
        }}
      />
      <br />
      <p>{JSON.stringify(emails)}</p>
    </div>
  );
};

export default MultiEmailInput;
