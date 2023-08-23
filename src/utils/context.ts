import { createContext } from "react";

type EditorContextTypes = {
  isContent: string[];
};

const defaultState = {
  isContent: [],
};

export const EditorContext = createContext<EditorContextTypes>(defaultState);
