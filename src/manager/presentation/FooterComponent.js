export default function FooterComponent() {
  return (
    <footer
      className="text-center p-1 bg-dark"
      style={{
        position: 'absolute',
        bottom: '0',
        width: '-moz-available',
      }}
    >
      <h6 className="text-white">© 2022 WMB, Inc. (All Rights Reserved)</h6>
    </footer>
  );
}
