precision highp float;
varying vec2 v_uv;

uniform sampler2D inputImageTexture;

void main() {
  gl_FragColor = texture2D(inputImageTexture, v_uv);
//  gl_FragColor.r += .1;
}
