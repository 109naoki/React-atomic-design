import { Header } from "../atoms/layout/Header";
export const HeaderOnly = () => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
