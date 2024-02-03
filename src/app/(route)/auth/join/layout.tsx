const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="sub-container">
      <div>{children}</div>
    </div>
  )
};

export default Layout;
