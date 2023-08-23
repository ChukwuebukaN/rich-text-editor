// @ts-nocheck
import React, { useContext, useState } from "react";
import Buttons from "../../components/buttons/buttons";
import Editors from "./editor";
import { EditorContext } from "../../utils/context";

function EditorPage() {
  const [title, setitle] = useState("Add post title");
  const { isContent } = useContext(EditorContext);

  return (
    <div className="h-screen w-screen flex mt-20 justify-center">
      <div className="w-3/5">
        <div className="border-[#E7F1E9] border rounded-[4px]">
          <div className="h-10 border-[#E7F1E9] border-b  " />
          <form id="Editor">
            <div className="">
              <label htmlFor="Title">
                <input
                  className="bg-[#FAFAFA] w-full text-[24px] leading-[36px] outline-none h-[33px] my-6 py-4 px-6 text-gray-800 font-ProximaNovaBold"
                  id="Title"
                  type="text"
                  defaultValue={title}
                  placeholder="Add post title"
                  onChange={(e) => setitle(e.target.value)}
                />
              </label>
            </div>
            <Editors />
          </form>
        </div>
        <div className="flex justify-end my-4 ">
          <Buttons
            title="Post"
            text="Post"
            styling="bg-[#23803D]  w-[62px] h-[35px] text-[14px] leading-[22px] text-white rounded-[4px] text-center font-ProximaNovaSemiBold"
            textStyling="text-base"
            // onClick={() => handleScroll(50, DownloadRef)}
          />
        </div>
        {isContent && isContent}
      </div>
    </div>
  );
}

export default EditorPage;
