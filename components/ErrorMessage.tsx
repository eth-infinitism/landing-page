import React from 'react';

type ErrorMessageProps = {
  showError: boolean;
  message: string;
};

function ErrorMessage({ showError, message }: ErrorMessageProps) {
  if (!showError) {
    return null;
  }

  return (
    <div style={{ color: 'red', fontWeight: 'bold', padding: '10px', border: '1px solid red', borderRadius: '5px', marginBottom: '10px' }}>
      {message}
    </div>
  );
}

export default ErrorMessage;
