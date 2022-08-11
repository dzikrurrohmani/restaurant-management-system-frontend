import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
  const navigate = useNavigate()
  return (
    <div style={{ paddingTop: '11%' }}>
      <h2>Welcome, Admin</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20%',
          paddingTop: '10%',
        }}
      >
        <button style={{width: '150px', height: '100px'}} onClick={()=> navigate('menu')}>MENU MANAGEMENT</button>
        <button style={{width: '150px', height: '100px'}} onClick={()=> navigate('table')}>TABLE MANAGEMENT</button>
        <button style={{width: '150px', height: '100px'}} onClick={()=> navigate('transaction')}>TRANSACTION MANAGEMENT</button>
      </div>
    </div>
  );
}

export default Welcome
