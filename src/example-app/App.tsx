import React from 'react';
import { ColoredButton } from '../components';

export default function App() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <p>This is a white button</p>
            </td>
            <td>
              <ColoredButton
                onClick={() => window.alert('You clicked the white button')}
                color="white"
                title="White button"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>This is a blue button</p>
            </td>
            <td>
              <ColoredButton
                onClick={() => window.alert('You clicked the blue button')}
                color="blue"
                title="Blue button"
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>This is a red button</p>
            </td>
            <td>
              <ColoredButton
                onClick={() => window.alert('You clicked the red button')}
                color="red"
                title="Red button"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
