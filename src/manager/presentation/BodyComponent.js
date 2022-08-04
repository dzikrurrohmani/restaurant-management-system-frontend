export default function BodyComponent(props) {
  return (
    <div
      style={{
        position: 'absolut',
        minHeight: '100vh',
        width: '100%',
        padding: '57px 0 25px 0',
        zIndex: '101'
      }}
    >
      {props.view}
    </div>
  );
}
