let toastCount = 0;
const TOAST_HEIGHT = 60; // approximate height in pixels
const TOAST_GAP = 10; // gap between toasts

function createToast(toastConfig) {
  return function (notification) {
    let div = document.createElement("div");
    
    // Calculate vertical position based on number of existing toasts
    const offset = toastCount * (TOAST_HEIGHT + TOAST_GAP);
    const topOrBottomValue = toastConfig.positionY === "top" 
      ? `top-[${10 + offset}px]` 
      : `bottom-[${10 + offset}px]`;

    div.className = `fixed ${
      toastConfig.theme === "dark"
        ? "bg-gray-800 text-white"
        : "bg-gray-100 text-black"
    } px-6 py-3 rounded shadow-lg pointer-events-none ${
      toastConfig.positionX === "right" ? "right-10" : "left-10"
    }`;
    
    // Use inline style for dynamic positioning since Tailwind classes are static
    if (toastConfig.positionY === "top") {
      div.style.top = (100 + offset) + "px";
    } else {
      div.style.bottom = (10 + offset) + "px";
    }
    
    div.textContent = notification;
    document.body.appendChild(div);
    toastCount++;
    
    //clears the toaster after duration
    setTimeout(()=>{
        document.body.removeChild(div);
        toastCount--;
    }, toastConfig.duration * 1000);
    
    };
}
let toaster = createToast({
    positionX: "left",
    positionY: "top",
    theme: "dark",
    duration: 3
});

toaster("This toaster is raised via JS");
toaster("New Toaster");
