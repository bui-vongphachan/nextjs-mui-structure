const CalendarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
    >
      <rect x="0" y="0" width="512" height="512" fill="none" stroke="none" />
      <rect
        width="416"
        height="384"
        x="48"
        y="80"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
        rx="48"
      />
      <circle cx="296" cy="232" r="24" fill="currentColor" />
      <circle cx="376" cy="232" r="24" fill="currentColor" />
      <circle cx="296" cy="312" r="24" fill="currentColor" />
      <circle cx="376" cy="312" r="24" fill="currentColor" />
      <circle cx="136" cy="312" r="24" fill="currentColor" />
      <circle cx="216" cy="312" r="24" fill="currentColor" />
      <circle cx="136" cy="392" r="24" fill="currentColor" />
      <circle cx="216" cy="392" r="24" fill="currentColor" />
      <circle cx="296" cy="392" r="24" fill="currentColor" />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M128 48v32m256-32v32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M464 160H48"
      />
    </svg>
  );
};

export default CalendarIcon;
