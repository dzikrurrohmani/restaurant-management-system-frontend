export default function FooterComponent() {
  return (
    <footer
      className="bg-dark"
      style={{
        textAlign: 'center',
        position: 'absolut',
        marginTop: '-25px',
        width: '100%',
        height: '25px',
      }}
    >
      <p className="text-white" style={{fontSize: '90%', marginBottom: '0'}}>© 2022 WMB, Inc. (All Rights Reserved)</p>
    </footer>
  );
}
