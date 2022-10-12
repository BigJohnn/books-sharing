precision highp float;
varying vec2 v_uv;

uniform sampler2D inputImageTexture;

void main() {
  vec4 color = texture2D(inputImageTexture, v_uv);

  gl_FragColor = vec4(0.4, v_uv, 1.);
//  gl_FragColor = vec4(0.4,0.,0.,0.4);
}
