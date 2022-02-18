// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const myCylinderSurface = new Surface(
    1000, /* width */
    600, /* height */
    Surface.SurfaceShape.Cylinder   /* shape */
  );

  const myFlatSurface = new Surface(
    500, /* width */
    720, /* height */
    Surface.SurfaceShape.Flat /* shape */
  );

  myFlatSurface.setAngle(
    100, /* yaw angle about y*/
    0, /* pitch angle about x*/
    0 /* roll angle about z*/
  );

  r360.renderToSurface(
    r360.createRoot('WelcomeTo360', { /* initial props */ }),
    myCylinderSurface
  );

  r360.renderToSurface(
    r360.createRoot('flatcomponent', { /* initial props */ }),
    myFlatSurface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
