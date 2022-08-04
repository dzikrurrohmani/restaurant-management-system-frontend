export default function Welcome(props) {
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
        <button style={{width: '150px', height: '100px'}} onClick={props.menuView}>MENU MANAGEMENT</button>
        <button style={{width: '150px', height: '100px'}} onClick={props.tableView}>TABLE MANAGEMENT</button>
        <button style={{width: '150px', height: '100px'}} onClick={props.transactionView}>TRANSACTION MANAGEMENT</button>
      </div>
    </div>
  );
}
