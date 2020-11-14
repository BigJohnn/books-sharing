precision highp float;
varying vec2 v_uv;

uniform sampler2D inputImageTexture;

void main() {
  gl_FragColor = texture2D(inputImageTexture, v_uv);
  gl_FragColor.r += .3;
  gl_FragColor*=0.5;
//  gl_FragColor = vec4(0.4,0.,0.,0.4);
}
