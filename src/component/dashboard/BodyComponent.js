export default function BodyComponent(props) {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      {props.view}
    </div>
  );
}
