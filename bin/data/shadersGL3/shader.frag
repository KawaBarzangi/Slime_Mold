// fragment shader

#version 440

out vec4 outputColor;
uniform int screenWidth;
uniform int screenHeight;
uniform float decay;
uniform float maxTrailDensity;

struct Cell {
    vec4 val;
};

layout(binding = 2) buffer newTrail {
	Cell newTrailMap[];
};

void main()
{
    float x = gl_FragCoord.x; 
    float y = gl_FragCoord.y; 
    int index = int(x) + int(int(y) * screenWidth);
    vec4 val = newTrailMap[index].val;
    float color = val.r / maxTrailDensity;
    if (color > 0) {
        color += decay;
        
   }

   outputColor = vec4(color, min(242.0/255.0, color), min(255.0/255.0, color), color);
   //outputColor = vec4(color, color ,color, color);
}