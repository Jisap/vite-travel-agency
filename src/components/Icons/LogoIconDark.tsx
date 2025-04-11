export default function LogoIconDark(props: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="54"
      height="57"
      fill="none"
      className={props.className}
    >
      <rect width="49" height="49" fill="#0891AA" rx="7" />
      <rect width="49" height="49" x="5" y="5" fill="#fff" rx="7" />
      <path
        fill="#18ABC6"
        d="M34.228 24.026a4.285 4.285 0 0 0-1.786-1.634c-.735-.38-1.609-.57-2.622-.57-1.875 0-3.357.608-4.446 1.824-1.064 1.216-1.596 2.85-1.596 4.902 0 2.305.57 4.066 1.71 5.282 1.165 1.19 2.85 1.786 5.054 1.786 2.61 0 4.471-1.178 5.586-3.534h-7.486v-5.358H42.55v7.22c-.583 1.419-1.444 2.749-2.584 3.99-1.115 1.241-2.533 2.267-4.256 3.078-1.723.785-3.686 1.178-5.89 1.178-2.685 0-5.067-.57-7.144-1.71a12.35 12.35 0 0 1-4.788-4.826c-1.115-2.077-1.672-4.446-1.672-7.106 0-2.635.557-4.978 1.672-7.03 1.14-2.077 2.736-3.686 4.788-4.826 2.052-1.165 4.42-1.748 7.106-1.748 3.37 0 6.156.81 8.36 2.432 2.204 1.621 3.572 3.838 4.104 6.65h-8.018Z"
      />
    </svg>
  );
}
