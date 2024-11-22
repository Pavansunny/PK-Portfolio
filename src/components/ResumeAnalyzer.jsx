import { useState } from 'react';
import { FiAward, FiX } from 'react-icons/fi';
import FloatingButton from './FloatingButton';

function ResumeAnalyzer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <FloatingButton 
          icon={FiAward}
          label="Resume Score"
          onClick={() => setIsOpen(true)}
          bottom="bottom-24"
        />
      )}

      {/* Rest of your ResumeAnalyzer component */}
      {/* ... */}
    </>
  );
}

export default ResumeAnalyzer; 