precision highp float;
varying vec2 v_uv;

// uniform sampler2D inputImageTexture;

void main() {
  gl_FragColor = vec4(0.4, v_uv, 1.);

  // gl_FragColor = texture2D(inputImageTexture, v_uv);
  // gl_FragColor.g += .6;
  // gl_FragColor = vec4(1.,1.,0.,1.);
}
