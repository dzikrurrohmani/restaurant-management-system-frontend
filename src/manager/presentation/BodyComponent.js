import { useRoutes } from 'react-router-dom';

export default function BodyComponent(props) {
  return useRoutes([
    {
      path: '/',
      element: (
        <div
          style={{
            position: 'absolut',
            minHeight: '100vh',
            width: '100%',
            padding: '57px 0 25px 0',
            zIndex: '101',
            // backgroundColor: 'white',
          }}
        >
          {props.view}
        </div>
      ),
    },
  ]);
}
