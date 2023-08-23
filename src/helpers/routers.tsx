// @ts-nocheck
import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./urls";
import EditorPage from "../pages/editor-page/editor-page";
import { EditorContext } from "../utils/context";

function Routers() {
  const [isContent, setIsContent] = useState();

  return (
    <EditorContext.Provider value={{ isContent, setIsContent }}>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen">
            <p>Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path={NonAuthRoutes.editorPage} element={<EditorPage />} />
        </Routes>
      </Suspense>
    </EditorContext.Provider>
  );
}
export default Routers;
