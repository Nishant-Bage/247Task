import { useEffect, useRef, useState } from "react";

const DEFAULT_IDLE_TIME = 10 * 60 * 1000; 
const WARNING_TIME = 60 * 1000; 

const useIdleTimer = ({ onLogout, idleTime = DEFAULT_IDLE_TIME }) => {
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const timerRef = useRef(null);
  const warningRef = useRef(null);
  const countdownRef = useRef(null);

  const resetTimer = () => {
    clearTimeout(timerRef.current);
    clearTimeout(warningRef.current);
    clearInterval(countdownRef.current);
    setShowWarning(false);
    setCountdown(60);

    timerRef.current = setTimeout(() => {
      setShowWarning(true);
      let timeLeft = 60;
      setCountdown(timeLeft);

      countdownRef.current = setInterval(() => {
        timeLeft -= 1;
        setCountdown(timeLeft);
      }, 1000);

      warningRef.current = setTimeout(() => {
        onLogout();
      }, WARNING_TIME);
    }, idleTime);
  };

  const handleActivity = () => {
    resetTimer();
  };

  const stayLoggedIn = () => {
    resetTimer();
  };

  const logoutNow = () => {
    clearTimeout(timerRef.current);
    clearTimeout(warningRef.current);
    clearInterval(countdownRef.current);
    onLogout();
  };

  useEffect(() => {
    resetTimer();
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);

    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(warningRef.current);
      clearInterval(countdownRef.current);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, []);

  return { showWarning, countdown, stayLoggedIn, logoutNow };
};

export default useIdleTimer;