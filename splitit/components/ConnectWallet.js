import {
    useAddress,
    useUser,
    useLogin,
    useLogout,
    useMetamask,
  } from "@thirdweb-dev/react";
  
  const Home = () => {
    const address = useAddress();
    const connect = useMetamask();
  
    const login = useLogin();
    const logout = useLogout();
    const { user } = useUser();
  
    return (
      <div>
        {address ? (
          <>
            <button onClick={() => login()}>Login with Wallet</button>
            <button onClick={logout}>Logout</button>
            <pre>User: {JSON.stringify(user || null)}</pre>
          </>
        ) : (
          <button onClick={connect} className='font-bold text-xl transition ease-in-out delay-50 hover:-translate-y-1'  >Connect Wallet</button>
        )}
      </div>
    );
  };
  
  export default Home;