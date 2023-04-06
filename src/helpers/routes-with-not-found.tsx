import { Routes, Route } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
}
export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not Found 404</div>} />
    </Routes>
  );
};
