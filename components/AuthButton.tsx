"use client";
import { useAuth } from "./AuthProvider";

export function AuthButton({ 
  variant = "default", 
  className = "",
  onClickCallback
}: { 
  variant?: "nav" | "mobile" | "default";
  className?: string;
  onClickCallback?: () => void;
}) {
  const { isAuth, toggleLogin } = useAuth();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Simulate auth toggle or real auth redirect
    toggleLogin();
    if (onClickCallback) onClickCallback();
  };

  if (variant === "nav") {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 rounded-full border border-borderc dark:border-borderc-dark bg-transparent px-3 py-[7px] text-[11px] font-semibold text-textSecondary dark:text-textSecondary-dark transition-colors hover:text-textPrimary dark:hover:text-textPrimary-dark ${className}`}
      >
        <i className={`${isAuth ? "fa-solid fa-right-from-bracket" : "fa-brands fa-google"} text-[10px]`} />
        {isAuth ? "Logout" : "Login"}
      </button>
    );
  }

  if (variant === "mobile") {
    return (
      <button
        onClick={handleClick}
        className={`w-full text-left rounded-[9px] px-3 py-[11px] text-[13px] text-textSecondary dark:text-textSecondary-dark transition-colors hover:bg-borderc dark:hover:bg-borderc-dark hover:text-textPrimary dark:hover:text-textPrimary-dark ${className}`}
      >
        {isAuth ? "Logout" : "Login with Google"}
      </button>
    );
  }

  // Default blocky style
  const pillBtn = "inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-borderc dark:border-borderc-dark px-3.5 py-2 text-[11px] font-semibold transition-all duration-[350ms] ease-smooth hover:-translate-y-0.5 hover:border-borderStrong dark:hover:border-borderStrong-dark";

  return (
    <button
      onClick={handleClick}
      className={`${pillBtn} ${isAuth ? "bg-surface text-textPrimary dark:bg-surface-dark dark:text-textPrimary-dark" : "bg-surfaceHover text-textPrimary dark:bg-surfaceHover-dark dark:text-textPrimary-dark"} ${className}`}
    >
      <i className={isAuth ? "fa-solid fa-right-from-bracket" : "fa-brands fa-google"} /> 
      {isAuth ? "Logout" : "Authenticate with Google"}
    </button>
  );
}
