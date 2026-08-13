"use client";

import { useAuth } from "./AuthProvider";

const GoogleColorIcon = ({ className = "" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} width="1em" height="1em">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
  </svg>
);

export function AuthButton({
  variant = "default",
  className = "",
  onClickCallback,
}: {
  variant?: "nav" | "mobile" | "default";
  className?: string;
  onClickCallback?: () => void;
}) {
  const { isAuth, login, logout } = useAuth();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (isAuth) {
      await logout();
    } else {
      await login();
    }

    onClickCallback?.();
  };

  if (variant === "nav") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`inline-flex items-center gap-1.5 rounded-full border border-borderc dark:border-borderc-dark bg-transparent px-3 py-[7px] text-[11px] font-semibold text-textSecondary dark:text-textSecondary-dark transition-colors hover:text-textPrimary dark:hover:text-textPrimary-dark ${className}`}
      >
        {isAuth ? (
          <i className="fa-solid fa-right-from-bracket text-[10px]" />
        ) : (
          <GoogleColorIcon className="text-[11px]" />
        )}
        {isAuth ? "Logout" : "Login"}
      </button>
    );
  }

  if (variant === "mobile") {
    return (
      <button
        type="button"
        onClick={handleClick}
        className={`mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98] dark:bg-white dark:text-black ${className}`}
      >
        {isAuth ? (
          <>
            <i className="fa-solid fa-right-from-bracket text-[12px]" /> Logout
          </>
        ) : (
          <>
            <GoogleColorIcon className="text-[15px]" /> Login with Google
          </>
        )}
      </button>
    );
  }

  const pillBtn =
    "inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-borderc dark:border-borderc-dark px-3.5 py-2 text-[11px] font-semibold transition-all duration-[350ms] ease-smooth hover:-translate-y-0.5 hover:border-borderStrong dark:hover:border-borderStrong-dark";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${pillBtn} ${isAuth
          ? "bg-surface text-textPrimary dark:bg-surface-dark dark:text-textPrimary-dark"
          : "bg-surfaceHover text-textPrimary dark:bg-surfaceHover-dark dark:text-textPrimary-dark"
        } ${className}`}
    >
      {isAuth ? (
        <i className="fa-solid fa-right-from-bracket" />
      ) : (
        <GoogleColorIcon className="text-[13px]" />
      )}
      {isAuth ? "Logout" : "Authenticate with Google"}
    </button>
  );
}