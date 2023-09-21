const LeftCircleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 48 48"
    >
      <mask id="ipSLeftC0">
        <g fill="none" strokeLinejoin="round" strokeWidth="4">
          <path
            fill="#fff"
            stroke="#fff"
            d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
          />
          <path stroke="#000" strokeLinecap="round" d="m27 33l-9-9l9-9" />
        </g>
      </mask>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSLeftC0)" />
    </svg>
  );
};

export default LeftCircleIcon;
