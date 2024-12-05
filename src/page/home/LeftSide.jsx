import React from "react";

const LeftSide = () => {
  return (
    <div className="fixed left-0 bottom-0 px-10">
      <div className=" flex flex-col gap-3">
        <a href="https://github.com/rozaANDSO">
          <i class="ri-github-fill text-gray-400 text-lg"></i>
        </a>
        <a href=" https://www.linkedin.com/in/rozabelay/ ">
          <i class="ri-linkedin-fill text-gray-400 text-lg"></i>
        </a>
        <a href=" rozabelaytiruneh@gmail.com ">
          <i class="ri-mail-fill text-gray-400 text-lg"></i>
        </a>
        <a href="https://t.me/@RRRBB21">
          <i class="ri-telegram-fill text-gray-400 text-lg"></i>
        </a>
        <a href="tel:+0922887221">
          <i class="ri-phone-line text-gray-400 text-lg"></i>
        </a>
      </div>
      <div className="w-[1px] h-32 bg-green-400"></div>
    </div>
  );
};

export default LeftSide;
