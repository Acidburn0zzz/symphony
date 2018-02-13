function IOHP2(where){
(function ($hx_exports, $global) { "use strict";
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw new js__$Boot_HaxeError("EReg::matched");
		}
	}
	,matchedLeft: function() {
		if(this.r.m == null) {
			throw new js__$Boot_HaxeError("No string matched");
		}
		return HxOverrides.substr(this.r.s,0,this.r.m.index);
	}
	,matchedRight: function() {
		if(this.r.m == null) {
			throw new js__$Boot_HaxeError("No string matched");
		}
		var sz = this.r.m.index + this.r.m[0].length;
		return HxOverrides.substr(this.r.s,sz,this.r.s.length - sz);
	}
	,matchedPos: function() {
		if(this.r.m == null) {
			throw new js__$Boot_HaxeError("No string matched");
		}
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,__class__: EReg
};
var GPUCapabilities = function() { };
$hxClasses["GPUCapabilities"] = GPUCapabilities;
GPUCapabilities.__name__ = ["GPUCapabilities"];
GPUCapabilities.report = function() {
	haxe_Log.trace("writeToFloat: " + Std.string(GPUCapabilities.get_writeToFloat()),{ fileName : "GPUCapabilities.hx", lineNumber : 40, className : "GPUCapabilities", methodName : "report"});
	haxe_Log.trace("writeToHalfFloat: " + Std.string(GPUCapabilities.get_writeToHalfFloat()),{ fileName : "GPUCapabilities.hx", lineNumber : 41, className : "GPUCapabilities", methodName : "report"});
	haxe_Log.trace("readFromFloat: " + Std.string(GPUCapabilities.get_readFromFloat()),{ fileName : "GPUCapabilities.hx", lineNumber : 42, className : "GPUCapabilities", methodName : "report"});
	haxe_Log.trace("readFromHalfFloat: " + Std.string(GPUCapabilities.get_readFromHalfFloat()),{ fileName : "GPUCapabilities.hx", lineNumber : 43, className : "GPUCapabilities", methodName : "report"});
	haxe_Log.trace("floatTextureLinear: " + Std.string(GPUCapabilities.get_floatTextureLinear()),{ fileName : "GPUCapabilities.hx", lineNumber : 44, className : "GPUCapabilities", methodName : "report"});
	haxe_Log.trace("halfFloatTextureLinear: " + Std.string(GPUCapabilities.get_halfFloatTextureLinear()),{ fileName : "GPUCapabilities.hx", lineNumber : 45, className : "GPUCapabilities", methodName : "report"});
	haxe_Log.trace("HALF_FLOAT: " + "0x" + StringTools.hex(GPUCapabilities.get_HALF_FLOAT()),{ fileName : "GPUCapabilities.hx", lineNumber : 46, className : "GPUCapabilities", methodName : "report"});
};
GPUCapabilities.get_writeToFloat = function() {
	if(GPUCapabilities.get_extTextureFloat() == null) {
		return false;
	}
	var texture = gltoolbox_TextureTools.createTexture(2,2,{ channelType : 6408, dataType : 5126, filter : 9728, wrapS : 33071, wrapT : 33071, unpackAlignment : 4});
	var framebuffer = snow_modules_opengl_web_GL.gl.createFramebuffer();
	snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,framebuffer);
	snow_modules_opengl_web_GL.gl.framebufferTexture2D(36160,36064,3553,texture,0);
	var isValid = snow_modules_opengl_web_GL.gl.checkFramebufferStatus(36160) == 36053;
	snow_modules_opengl_web_GL.gl.deleteTexture(texture);
	snow_modules_opengl_web_GL.gl.deleteFramebuffer(framebuffer);
	snow_modules_opengl_web_GL.gl.bindTexture(3553,null);
	snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,null);
	return isValid;
};
GPUCapabilities.get_writeToHalfFloat = function() {
	if(GPUCapabilities.get_extTextureHalfFloat() == null) {
		return false;
	}
	var texture = gltoolbox_TextureTools.createTexture(2,2,{ channelType : 6408, dataType : GPUCapabilities.get_HALF_FLOAT(), filter : 9728, wrapS : 33071, wrapT : 33071, unpackAlignment : 4});
	var framebuffer = snow_modules_opengl_web_GL.gl.createFramebuffer();
	snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,framebuffer);
	snow_modules_opengl_web_GL.gl.framebufferTexture2D(36160,36064,3553,texture,0);
	var isValid = snow_modules_opengl_web_GL.gl.checkFramebufferStatus(36160) == 36053;
	snow_modules_opengl_web_GL.gl.deleteTexture(texture);
	snow_modules_opengl_web_GL.gl.deleteFramebuffer(framebuffer);
	snow_modules_opengl_web_GL.gl.bindTexture(3553,null);
	snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,null);
	return isValid;
};
GPUCapabilities.get_readFromFloat = function() {
	if(GPUCapabilities._readFromFloat == null) {
		GPUCapabilities._readFromFloat = GPUCapabilities.get_extTextureFloat() != null;
	}
	return GPUCapabilities._readFromFloat;
};
GPUCapabilities.get_readFromHalfFloat = function() {
	if(GPUCapabilities._readFromHalfFloat == null) {
		GPUCapabilities._readFromHalfFloat = GPUCapabilities.get_extTextureHalfFloat() != null;
	}
	return GPUCapabilities._readFromHalfFloat;
};
GPUCapabilities.get_floatTextureLinear = function() {
	if(GPUCapabilities._floatTextureLinear == null) {
		GPUCapabilities._floatTextureLinear = GPUCapabilities.get_extTextureFloatLinear() != null;
	}
	return GPUCapabilities._floatTextureLinear;
};
GPUCapabilities.get_halfFloatTextureLinear = function() {
	if(GPUCapabilities._halfFloatTextureLinear == null) {
		GPUCapabilities._halfFloatTextureLinear = GPUCapabilities.get_extTextureHalfFloatLinear() != null;
	}
	return GPUCapabilities._halfFloatTextureLinear;
};
GPUCapabilities.get_HALF_FLOAT = function() {
	if(GPUCapabilities._HALF_FLOAT == null) {
		var ext = GPUCapabilities.get_extTextureHalfFloat();
		if(ext != null) {
			GPUCapabilities._HALF_FLOAT = ext.HALF_FLOAT_OES;
		} else {
			GPUCapabilities._HALF_FLOAT = 36193;
		}
	}
	return GPUCapabilities._HALF_FLOAT;
};
GPUCapabilities.get_extTextureFloat = function() {
	if(GPUCapabilities._extTextureFloat == null) {
		GPUCapabilities._extTextureFloat = snow_modules_opengl_web_GL.gl.getExtension("OES_texture_float");
	}
	return GPUCapabilities._extTextureFloat;
};
GPUCapabilities.get_extTextureHalfFloat = function() {
	if(GPUCapabilities._extTextureHalfFloat == null) {
		GPUCapabilities._extTextureHalfFloat = snow_modules_opengl_web_GL.gl.getExtension("OES_texture_half_float");
	}
	return GPUCapabilities._extTextureHalfFloat;
};
GPUCapabilities.get_extTextureFloatLinear = function() {
	if(GPUCapabilities._extTextureFloatLinear == null) {
		GPUCapabilities._extTextureFloatLinear = snow_modules_opengl_web_GL.gl.getExtension("OES_texture_float_linear");
	}
	return GPUCapabilities._extTextureFloatLinear;
};
GPUCapabilities.get_extTextureHalfFloatLinear = function() {
	if(GPUCapabilities._extTextureHalfFloatLinear == null) {
		GPUCapabilities._extTextureHalfFloatLinear = snow_modules_opengl_web_GL.gl.getExtension("OES_texture_half_float_linear");
	}
	return GPUCapabilities._extTextureHalfFloatLinear;
};
var GPUFluid = function(width,height,cellSize,solverIterations) {
	if(solverIterations == null) {
		solverIterations = 18;
	}
	if(cellSize == null) {
		cellSize = 8;
	}
	this.floatDye = false;
	this.floatDivergence = false;
	this.floatPressure = false;
	this.floatVelocity = false;
	this.clearPressureShader = new ClearPressure();
	this.clearVelocityShader = new ClearVelocity();
	this.pressureGradientSubstractShader = new PressureGradientSubstract();
	this.pressureSolveShader = new PressureSolve();
	this.divergenceShader = new Divergence();
	this.advectVelocityShader = new AdvectVelocity();
	this.advectShader = new Advect();
	this.gl = snow_modules_opengl_web_GL;
	this.width = width;
	this.height = height;
	this.solverIterations = solverIterations;
	this.aspectRatio = this.width / this.height;
	this.cellSize = cellSize;
	var _this = this.advectShader.rdx;
	_this.dirty = true;
	_this.data = 1 / this.cellSize;
	var _this1 = this.advectVelocityShader.rdx;
	_this1.dirty = true;
	_this1.data = 1 / this.cellSize;
	var _this2 = this.divergenceShader.halfrdx;
	_this2.dirty = true;
	_this2.data = 0.5 * (1 / this.cellSize);
	var _this3 = this.pressureGradientSubstractShader.halfrdx;
	_this3.dirty = true;
	_this3.data = 0.5 * (1 / this.cellSize);
	var _this4 = this.pressureSolveShader.alpha;
	_this4.dirty = true;
	_this4.data = -this.cellSize * this.cellSize;
	this.textureQuad = gltoolbox_GeometryTools.getCachedUnitQuad();
	var floatDataType = null;
	if(GPUCapabilities.get_writeToFloat()) {
		floatDataType = 5126;
		GPUCapabilities.get_floatTextureLinear();
	} else if(GPUCapabilities.get_writeToHalfFloat()) {
		floatDataType = GPUCapabilities.get_HALF_FLOAT();
		GPUCapabilities.get_halfFloatTextureLinear();
	}
	this.floatVelocity = this.floatPressure = this.floatDivergence = floatDataType != null;
	this.floatDye = false;
	var params = { channelType : 6408, dataType : this.floatVelocity?floatDataType:5121, filter : 9728};
	this.velocityRenderTarget = new gltoolbox_render_RenderTarget2Phase(width,height,function(width1,height1) {
		return gltoolbox_TextureTools.createTexture(width1,height1,params);
	});
	var params1 = { channelType : 6407, dataType : this.floatPressure?floatDataType:5121, filter : 9728};
	this.pressureRenderTarget = new gltoolbox_render_RenderTarget2Phase(width,height,function(width2,height2) {
		return gltoolbox_TextureTools.createTexture(width2,height2,params1);
	});
	var params2 = { channelType : 6407, dataType : this.floatDivergence?floatDataType:5121, filter : 9728};
	this.divergenceRenderTarget = new gltoolbox_render_RenderTarget(width,height,function(width3,height3) {
		return gltoolbox_TextureTools.createTexture(width3,height3,params2);
	});
	var params3 = { channelType : 6407, dataType : this.floatDye?floatDataType:5121, filter : 9729};
	this.dyeRenderTarget = new gltoolbox_render_RenderTarget2Phase(width,height,function(width4,height4) {
		return gltoolbox_TextureTools.createTexture(width4,height4,params3);
	});
	this.updateAllCoreShaderUniforms();
	snow_modules_opengl_web_GL.gl.viewport(0,0,this.width,this.height);
	snow_modules_opengl_web_GL.gl.disable(3042);
	snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
	var shader = this.clearVelocityShader;
	var target = this.velocityRenderTarget;
	if(shader._active) {
		var _g = 0;
		var _g1 = shader._uniforms;
		while(_g < _g1.length) {
			var u = _g1[_g];
			++_g;
			u.apply();
		}
		var offset = 0;
		var _g11 = 0;
		var _g2 = shader._attributes.length;
		while(_g11 < _g2) {
			var att = shader._attributes[_g11++];
			var location = att.location;
			if(location != -1) {
				snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
				snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
			}
			offset += att.byteSize;
		}
	} else {
		if(!shader._ready) {
			shader.create();
		}
		snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
		var _g3 = 0;
		var _g12 = shader._uniforms;
		while(_g3 < _g12.length) {
			var u1 = _g12[_g3];
			++_g3;
			u1.apply();
		}
		var offset1 = 0;
		var _g13 = 0;
		var _g4 = shader._attributes.length;
		while(_g13 < _g4) {
			var att1 = shader._attributes[_g13++];
			var location1 = att1.location;
			if(location1 != -1) {
				snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
				snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
			}
			offset1 += att1.byteSize;
		}
		shader._active = true;
	}
	target.activate();
	snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
	shader.deactivate();
	var _this5 = this.velocityRenderTarget;
	_this5.tmpFBO = _this5.writeFrameBufferObject;
	_this5.writeFrameBufferObject = _this5.readFrameBufferObject;
	_this5.readFrameBufferObject = _this5.tmpFBO;
	_this5.tmpTex = _this5.writeToTexture;
	_this5.writeToTexture = _this5.readFromTexture;
	_this5.readFromTexture = _this5.tmpTex;
	var shader1 = this.clearPressureShader;
	var target1 = this.pressureRenderTarget;
	if(shader1._active) {
		var _g5 = 0;
		var _g14 = shader1._uniforms;
		while(_g5 < _g14.length) {
			var u2 = _g14[_g5];
			++_g5;
			u2.apply();
		}
		var offset2 = 0;
		var _g15 = 0;
		var _g6 = shader1._attributes.length;
		while(_g15 < _g6) {
			var att2 = shader1._attributes[_g15++];
			var location2 = att2.location;
			if(location2 != -1) {
				snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
				snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,shader1._aStride,offset2);
			}
			offset2 += att2.byteSize;
		}
	} else {
		if(!shader1._ready) {
			shader1.create();
		}
		snow_modules_opengl_web_GL.gl.useProgram(shader1._prog);
		var _g7 = 0;
		var _g16 = shader1._uniforms;
		while(_g7 < _g16.length) {
			var u3 = _g16[_g7];
			++_g7;
			u3.apply();
		}
		var offset3 = 0;
		var _g17 = 0;
		var _g8 = shader1._attributes.length;
		while(_g17 < _g8) {
			var att3 = shader1._attributes[_g17++];
			var location3 = att3.location;
			if(location3 != -1) {
				snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
				snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,shader1._aStride,offset3);
			}
			offset3 += att3.byteSize;
		}
		shader1._active = true;
	}
	target1.activate();
	snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
	shader1.deactivate();
	var _this6 = this.pressureRenderTarget;
	_this6.tmpFBO = _this6.writeFrameBufferObject;
	_this6.writeFrameBufferObject = _this6.readFrameBufferObject;
	_this6.readFrameBufferObject = _this6.tmpFBO;
	_this6.tmpTex = _this6.writeToTexture;
	_this6.writeToTexture = _this6.readFromTexture;
	_this6.readFromTexture = _this6.tmpTex;
	var _this7 = this.dyeRenderTarget;
	snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this7.readFrameBufferObject);
	snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
	snow_modules_opengl_web_GL.gl.clear(16384);
	snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this7.writeFrameBufferObject);
	snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
	snow_modules_opengl_web_GL.gl.clear(16384);
};
$hxClasses["GPUFluid"] = GPUFluid;
GPUFluid.__name__ = ["GPUFluid"];
GPUFluid.prototype = {
	step: function(dt) {
		snow_modules_opengl_web_GL.gl.viewport(0,0,this.width,this.height);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
		var _this = this.advectVelocityShader.dt;
		_this.dirty = true;
		_this.data = dt;
		var _this1 = this.advectVelocityShader.velocity;
		_this1.dirty = true;
		_this1.data = this.velocityRenderTarget.readFromTexture;
		var shader = this.advectVelocityShader;
		var target = this.velocityRenderTarget;
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		target.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		var _this2 = this.velocityRenderTarget;
		_this2.tmpFBO = _this2.writeFrameBufferObject;
		_this2.writeFrameBufferObject = _this2.readFrameBufferObject;
		_this2.readFrameBufferObject = _this2.tmpFBO;
		_this2.tmpTex = _this2.writeToTexture;
		_this2.writeToTexture = _this2.readFromTexture;
		_this2.readFromTexture = _this2.tmpTex;
		if(this.applyForcesShader != null) {
			var _this3 = this.applyForcesShader.dt;
			_this3.dirty = true;
			_this3.data = dt;
			var _this4 = this.applyForcesShader.velocity;
			_this4.dirty = true;
			_this4.data = this.velocityRenderTarget.readFromTexture;
			var shader1 = this.applyForcesShader;
			var target1 = this.velocityRenderTarget;
			if(shader1._active) {
				var _g5 = 0;
				var _g14 = shader1._uniforms;
				while(_g5 < _g14.length) {
					var u2 = _g14[_g5];
					++_g5;
					u2.apply();
				}
				var offset2 = 0;
				var _g15 = 0;
				var _g6 = shader1._attributes.length;
				while(_g15 < _g6) {
					var att2 = shader1._attributes[_g15++];
					var location2 = att2.location;
					if(location2 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,shader1._aStride,offset2);
					}
					offset2 += att2.byteSize;
				}
			} else {
				if(!shader1._ready) {
					shader1.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(shader1._prog);
				var _g7 = 0;
				var _g16 = shader1._uniforms;
				while(_g7 < _g16.length) {
					var u3 = _g16[_g7];
					++_g7;
					u3.apply();
				}
				var offset3 = 0;
				var _g17 = 0;
				var _g8 = shader1._attributes.length;
				while(_g17 < _g8) {
					var att3 = shader1._attributes[_g17++];
					var location3 = att3.location;
					if(location3 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,shader1._aStride,offset3);
					}
					offset3 += att3.byteSize;
				}
				shader1._active = true;
			}
			target1.activate();
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			shader1.deactivate();
			var _this5 = this.velocityRenderTarget;
			_this5.tmpFBO = _this5.writeFrameBufferObject;
			_this5.writeFrameBufferObject = _this5.readFrameBufferObject;
			_this5.readFrameBufferObject = _this5.tmpFBO;
			_this5.tmpTex = _this5.writeToTexture;
			_this5.writeToTexture = _this5.readFromTexture;
			_this5.readFromTexture = _this5.tmpTex;
		}
		var _this6 = this.divergenceShader.velocity;
		_this6.dirty = true;
		_this6.data = this.velocityRenderTarget.readFromTexture;
		var shader2 = this.divergenceShader;
		var target2 = this.divergenceRenderTarget;
		if(shader2._active) {
			var _g9 = 0;
			var _g18 = shader2._uniforms;
			while(_g9 < _g18.length) {
				var u4 = _g18[_g9];
				++_g9;
				u4.apply();
			}
			var offset4 = 0;
			var _g19 = 0;
			var _g10 = shader2._attributes.length;
			while(_g19 < _g10) {
				var att4 = shader2._attributes[_g19++];
				var location4 = att4.location;
				if(location4 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location4);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location4,att4.itemCount,att4.type,false,shader2._aStride,offset4);
				}
				offset4 += att4.byteSize;
			}
		} else {
			if(!shader2._ready) {
				shader2.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader2._prog);
			var _g20 = 0;
			var _g110 = shader2._uniforms;
			while(_g20 < _g110.length) {
				var u5 = _g110[_g20];
				++_g20;
				u5.apply();
			}
			var offset5 = 0;
			var _g111 = 0;
			var _g21 = shader2._attributes.length;
			while(_g111 < _g21) {
				var att5 = shader2._attributes[_g111++];
				var location5 = att5.location;
				if(location5 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location5);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location5,att5.itemCount,att5.type,false,shader2._aStride,offset5);
				}
				offset5 += att5.byteSize;
			}
			shader2._active = true;
		}
		target2.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader2.deactivate();
		var _this7 = this.pressureSolveShader.divergence;
		_this7.dirty = true;
		_this7.data = this.divergenceRenderTarget.texture;
		var _this8 = this.pressureSolveShader;
		if(_this8._active) {
			var _g22 = 0;
			var _g112 = _this8._uniforms;
			while(_g22 < _g112.length) {
				var u6 = _g112[_g22];
				++_g22;
				u6.apply();
			}
			var offset6 = 0;
			var _g113 = 0;
			var _g23 = _this8._attributes.length;
			while(_g113 < _g23) {
				var att6 = _this8._attributes[_g113++];
				var location6 = att6.location;
				if(location6 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location6);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location6,att6.itemCount,att6.type,false,_this8._aStride,offset6);
				}
				offset6 += att6.byteSize;
			}
		} else {
			if(!_this8._ready) {
				_this8.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(_this8._prog);
			var _g24 = 0;
			var _g114 = _this8._uniforms;
			while(_g24 < _g114.length) {
				var u7 = _g114[_g24];
				++_g24;
				u7.apply();
			}
			var offset7 = 0;
			var _g115 = 0;
			var _g25 = _this8._attributes.length;
			while(_g115 < _g25) {
				var att7 = _this8._attributes[_g115++];
				var location7 = att7.location;
				if(location7 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location7);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location7,att7.itemCount,att7.type,false,_this8._aStride,offset7);
				}
				offset7 += att7.byteSize;
			}
			_this8._active = true;
		}
		var _g116 = 0;
		var _g26 = this.solverIterations;
		while(_g116 < _g26) {
			++_g116;
			var _this9 = this.pressureSolveShader.pressure;
			_this9.dirty = true;
			_this9.data = this.pressureRenderTarget.readFromTexture;
			var _g27 = 0;
			var _g117 = this.pressureSolveShader._uniforms;
			while(_g27 < _g117.length) {
				var u8 = _g117[_g27];
				++_g27;
				u8.apply();
			}
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.pressureRenderTarget.writeFrameBufferObject);
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			var _this10 = this.pressureRenderTarget;
			_this10.tmpFBO = _this10.writeFrameBufferObject;
			_this10.writeFrameBufferObject = _this10.readFrameBufferObject;
			_this10.readFrameBufferObject = _this10.tmpFBO;
			_this10.tmpTex = _this10.writeToTexture;
			_this10.writeToTexture = _this10.readFromTexture;
			_this10.readFromTexture = _this10.tmpTex;
		}
		this.pressureSolveShader.deactivate();
		var _this11 = this.pressureGradientSubstractShader.pressure;
		_this11.dirty = true;
		_this11.data = this.pressureRenderTarget.readFromTexture;
		var _this12 = this.pressureGradientSubstractShader.velocity;
		_this12.dirty = true;
		_this12.data = this.velocityRenderTarget.readFromTexture;
		var shader3 = this.pressureGradientSubstractShader;
		var target3 = this.velocityRenderTarget;
		if(shader3._active) {
			var _g28 = 0;
			var _g118 = shader3._uniforms;
			while(_g28 < _g118.length) {
				var u9 = _g118[_g28];
				++_g28;
				u9.apply();
			}
			var offset8 = 0;
			var _g119 = 0;
			var _g29 = shader3._attributes.length;
			while(_g119 < _g29) {
				var att8 = shader3._attributes[_g119++];
				var location8 = att8.location;
				if(location8 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location8);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location8,att8.itemCount,att8.type,false,shader3._aStride,offset8);
				}
				offset8 += att8.byteSize;
			}
		} else {
			if(!shader3._ready) {
				shader3.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader3._prog);
			var _g30 = 0;
			var _g120 = shader3._uniforms;
			while(_g30 < _g120.length) {
				var u10 = _g120[_g30];
				++_g30;
				u10.apply();
			}
			var offset9 = 0;
			var _g121 = 0;
			var _g31 = shader3._attributes.length;
			while(_g121 < _g31) {
				var att9 = shader3._attributes[_g121++];
				var location9 = att9.location;
				if(location9 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location9);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location9,att9.itemCount,att9.type,false,shader3._aStride,offset9);
				}
				offset9 += att9.byteSize;
			}
			shader3._active = true;
		}
		target3.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader3.deactivate();
		var _this13 = this.velocityRenderTarget;
		_this13.tmpFBO = _this13.writeFrameBufferObject;
		_this13.writeFrameBufferObject = _this13.readFrameBufferObject;
		_this13.readFrameBufferObject = _this13.tmpFBO;
		_this13.tmpTex = _this13.writeToTexture;
		_this13.writeToTexture = _this13.readFromTexture;
		_this13.readFromTexture = _this13.tmpTex;
		if(this.updateDyeShader != null) {
			var _this14 = this.updateDyeShader.dt;
			_this14.dirty = true;
			_this14.data = dt;
			var _this15 = this.updateDyeShader.dye;
			_this15.dirty = true;
			_this15.data = this.dyeRenderTarget.readFromTexture;
			var shader4 = this.updateDyeShader;
			var target4 = this.dyeRenderTarget;
			if(shader4._active) {
				var _g32 = 0;
				var _g122 = shader4._uniforms;
				while(_g32 < _g122.length) {
					var u11 = _g122[_g32];
					++_g32;
					u11.apply();
				}
				var offset10 = 0;
				var _g123 = 0;
				var _g33 = shader4._attributes.length;
				while(_g123 < _g33) {
					var att10 = shader4._attributes[_g123++];
					var location10 = att10.location;
					if(location10 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location10);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location10,att10.itemCount,att10.type,false,shader4._aStride,offset10);
					}
					offset10 += att10.byteSize;
				}
			} else {
				if(!shader4._ready) {
					shader4.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(shader4._prog);
				var _g34 = 0;
				var _g124 = shader4._uniforms;
				while(_g34 < _g124.length) {
					var u12 = _g124[_g34];
					++_g34;
					u12.apply();
				}
				var offset11 = 0;
				var _g125 = 0;
				var _g35 = shader4._attributes.length;
				while(_g125 < _g35) {
					var att11 = shader4._attributes[_g125++];
					var location11 = att11.location;
					if(location11 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location11);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location11,att11.itemCount,att11.type,false,shader4._aStride,offset11);
					}
					offset11 += att11.byteSize;
				}
				shader4._active = true;
			}
			target4.activate();
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			shader4.deactivate();
			var _this16 = this.dyeRenderTarget;
			_this16.tmpFBO = _this16.writeFrameBufferObject;
			_this16.writeFrameBufferObject = _this16.readFrameBufferObject;
			_this16.readFrameBufferObject = _this16.tmpFBO;
			_this16.tmpTex = _this16.writeToTexture;
			_this16.writeToTexture = _this16.readFromTexture;
			_this16.readFromTexture = _this16.tmpTex;
		}
		var target5 = this.dyeRenderTarget;
		var _this17 = this.advectShader.dt;
		_this17.dirty = true;
		_this17.data = dt;
		var _this18 = this.advectShader.target;
		_this18.dirty = true;
		_this18.data = target5.readFromTexture;
		var _this19 = this.advectShader.velocity;
		_this19.dirty = true;
		_this19.data = this.velocityRenderTarget.readFromTexture;
		var shader5 = this.advectShader;
		if(shader5._active) {
			var _g36 = 0;
			var _g126 = shader5._uniforms;
			while(_g36 < _g126.length) {
				var u13 = _g126[_g36];
				++_g36;
				u13.apply();
			}
			var offset12 = 0;
			var _g127 = 0;
			var _g37 = shader5._attributes.length;
			while(_g127 < _g37) {
				var att12 = shader5._attributes[_g127++];
				var location12 = att12.location;
				if(location12 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location12);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location12,att12.itemCount,att12.type,false,shader5._aStride,offset12);
				}
				offset12 += att12.byteSize;
			}
		} else {
			if(!shader5._ready) {
				shader5.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader5._prog);
			var _g38 = 0;
			var _g128 = shader5._uniforms;
			while(_g38 < _g128.length) {
				var u14 = _g128[_g38];
				++_g38;
				u14.apply();
			}
			var offset13 = 0;
			var _g129 = 0;
			var _g39 = shader5._attributes.length;
			while(_g129 < _g39) {
				var att13 = shader5._attributes[_g129++];
				var location13 = att13.location;
				if(location13 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location13);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location13,att13.itemCount,att13.type,false,shader5._aStride,offset13);
				}
				offset13 += att13.byteSize;
			}
			shader5._active = true;
		}
		target5.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader5.deactivate();
		target5.tmpFBO = target5.writeFrameBufferObject;
		target5.writeFrameBufferObject = target5.readFrameBufferObject;
		target5.readFrameBufferObject = target5.tmpFBO;
		target5.tmpTex = target5.writeToTexture;
		target5.writeToTexture = target5.readFromTexture;
		target5.readFromTexture = target5.tmpTex;
	}
	,resize: function(width,height) {
		this.velocityRenderTarget.resize(width,height);
		this.pressureRenderTarget.resize(width,height);
		var _this = this.divergenceRenderTarget;
		var newTexture = _this.textureFactory(width,height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this.frameBufferObject);
		snow_modules_opengl_web_GL.gl.framebufferTexture2D(36160,36064,3553,newTexture,0);
		if(_this.texture != null) {
			var resampler = gltoolbox_shaders_Resample.instance;
			var _this1 = resampler.texture;
			_this1.dirty = true;
			_this1.data = _this.texture;
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this.frameBufferObject);
			snow_modules_opengl_web_GL.gl.viewport(0,0,width,height);
			snow_modules_opengl_web_GL.gl.bindBuffer(34962,gltoolbox_render_RenderTarget.textureQuad);
			if(resampler._active) {
				var _g = 0;
				var _g1 = resampler._uniforms;
				while(_g < _g1.length) {
					var u = _g1[_g];
					++_g;
					u.apply();
				}
				var offset = 0;
				var _g11 = 0;
				var _g2 = resampler._attributes.length;
				while(_g11 < _g2) {
					var att = resampler._attributes[_g11++];
					var location = att.location;
					if(location != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,resampler._aStride,offset);
					}
					offset += att.byteSize;
				}
			} else {
				if(!resampler._ready) {
					resampler.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(resampler._prog);
				var _g3 = 0;
				var _g12 = resampler._uniforms;
				while(_g3 < _g12.length) {
					var u1 = _g12[_g3];
					++_g3;
					u1.apply();
				}
				var offset1 = 0;
				var _g13 = 0;
				var _g4 = resampler._attributes.length;
				while(_g13 < _g4) {
					var att1 = resampler._attributes[_g13++];
					var location1 = att1.location;
					if(location1 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,resampler._aStride,offset1);
					}
					offset1 += att1.byteSize;
				}
				resampler._active = true;
			}
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			resampler.deactivate();
			snow_modules_opengl_web_GL.gl.deleteTexture(_this.texture);
		} else {
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this.frameBufferObject);
			snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
			snow_modules_opengl_web_GL.gl.clear(16384);
		}
		_this.width = width;
		_this.height = height;
		_this.texture = newTexture;
		this.dyeRenderTarget.resize(width,height);
		this.width = width;
		this.height = height;
		this.aspectRatio = width / height;
		this.updateAllCoreShaderUniforms();
	}
	,updateAllCoreShaderUniforms: function() {
		var shader = this.advectShader;
		if(shader != null) {
			var _this = shader.aspectRatio;
			_this.dirty = true;
			_this.data = this.aspectRatio;
			shader.invresolution.data.x = 1 / this.width;
			shader.invresolution.data.y = 1 / this.height;
			var v = this.floatVelocity?"true":"false";
			if(shader.FLOAT_VELOCITY != v) {
				shader.set_FLOAT_VELOCITY(v);
			}
			if(this.floatPressure) {
				v = "true";
			} else {
				v = "false";
			}
			if(shader.FLOAT_PRESSURE != v) {
				shader.set_FLOAT_PRESSURE(v);
			}
			if(this.floatDivergence) {
				v = "true";
			} else {
				v = "false";
			}
			if(shader.FLOAT_DIVERGENCE != v) {
				shader.set_FLOAT_DIVERGENCE(v);
			}
		}
		var shader1 = this.advectVelocityShader;
		if(shader1 != null) {
			var _this1 = shader1.aspectRatio;
			_this1.dirty = true;
			_this1.data = this.aspectRatio;
			shader1.invresolution.data.x = 1 / this.width;
			shader1.invresolution.data.y = 1 / this.height;
			var v1 = this.floatVelocity?"true":"false";
			if(shader1.FLOAT_VELOCITY != v1) {
				shader1.set_FLOAT_VELOCITY(v1);
			}
			if(this.floatPressure) {
				v1 = "true";
			} else {
				v1 = "false";
			}
			if(shader1.FLOAT_PRESSURE != v1) {
				shader1.set_FLOAT_PRESSURE(v1);
			}
			if(this.floatDivergence) {
				v1 = "true";
			} else {
				v1 = "false";
			}
			if(shader1.FLOAT_DIVERGENCE != v1) {
				shader1.set_FLOAT_DIVERGENCE(v1);
			}
		}
		var shader2 = this.divergenceShader;
		if(shader2 != null) {
			var _this2 = shader2.aspectRatio;
			_this2.dirty = true;
			_this2.data = this.aspectRatio;
			shader2.invresolution.data.x = 1 / this.width;
			shader2.invresolution.data.y = 1 / this.height;
			var v2 = this.floatVelocity?"true":"false";
			if(shader2.FLOAT_VELOCITY != v2) {
				shader2.set_FLOAT_VELOCITY(v2);
			}
			if(this.floatPressure) {
				v2 = "true";
			} else {
				v2 = "false";
			}
			if(shader2.FLOAT_PRESSURE != v2) {
				shader2.set_FLOAT_PRESSURE(v2);
			}
			if(this.floatDivergence) {
				v2 = "true";
			} else {
				v2 = "false";
			}
			if(shader2.FLOAT_DIVERGENCE != v2) {
				shader2.set_FLOAT_DIVERGENCE(v2);
			}
		}
		var shader3 = this.pressureSolveShader;
		if(shader3 != null) {
			var _this3 = shader3.aspectRatio;
			_this3.dirty = true;
			_this3.data = this.aspectRatio;
			shader3.invresolution.data.x = 1 / this.width;
			shader3.invresolution.data.y = 1 / this.height;
			var v3 = this.floatVelocity?"true":"false";
			if(shader3.FLOAT_VELOCITY != v3) {
				shader3.set_FLOAT_VELOCITY(v3);
			}
			if(this.floatPressure) {
				v3 = "true";
			} else {
				v3 = "false";
			}
			if(shader3.FLOAT_PRESSURE != v3) {
				shader3.set_FLOAT_PRESSURE(v3);
			}
			if(this.floatDivergence) {
				v3 = "true";
			} else {
				v3 = "false";
			}
			if(shader3.FLOAT_DIVERGENCE != v3) {
				shader3.set_FLOAT_DIVERGENCE(v3);
			}
		}
		var shader4 = this.pressureGradientSubstractShader;
		if(shader4 != null) {
			var _this4 = shader4.aspectRatio;
			_this4.dirty = true;
			_this4.data = this.aspectRatio;
			shader4.invresolution.data.x = 1 / this.width;
			shader4.invresolution.data.y = 1 / this.height;
			var v4 = this.floatVelocity?"true":"false";
			if(shader4.FLOAT_VELOCITY != v4) {
				shader4.set_FLOAT_VELOCITY(v4);
			}
			if(this.floatPressure) {
				v4 = "true";
			} else {
				v4 = "false";
			}
			if(shader4.FLOAT_PRESSURE != v4) {
				shader4.set_FLOAT_PRESSURE(v4);
			}
			if(this.floatDivergence) {
				v4 = "true";
			} else {
				v4 = "false";
			}
			if(shader4.FLOAT_DIVERGENCE != v4) {
				shader4.set_FLOAT_DIVERGENCE(v4);
			}
		}
		var shader5 = this.clearVelocityShader;
		if(shader5 != null) {
			var _this5 = shader5.aspectRatio;
			_this5.dirty = true;
			_this5.data = this.aspectRatio;
			shader5.invresolution.data.x = 1 / this.width;
			shader5.invresolution.data.y = 1 / this.height;
			var v5 = this.floatVelocity?"true":"false";
			if(shader5.FLOAT_VELOCITY != v5) {
				shader5.set_FLOAT_VELOCITY(v5);
			}
			if(this.floatPressure) {
				v5 = "true";
			} else {
				v5 = "false";
			}
			if(shader5.FLOAT_PRESSURE != v5) {
				shader5.set_FLOAT_PRESSURE(v5);
			}
			if(this.floatDivergence) {
				v5 = "true";
			} else {
				v5 = "false";
			}
			if(shader5.FLOAT_DIVERGENCE != v5) {
				shader5.set_FLOAT_DIVERGENCE(v5);
			}
		}
		var shader6 = this.clearPressureShader;
		if(shader6 != null) {
			var _this6 = shader6.aspectRatio;
			_this6.dirty = true;
			_this6.data = this.aspectRatio;
			shader6.invresolution.data.x = 1 / this.width;
			shader6.invresolution.data.y = 1 / this.height;
			var v6 = this.floatVelocity?"true":"false";
			if(shader6.FLOAT_VELOCITY != v6) {
				shader6.set_FLOAT_VELOCITY(v6);
			}
			if(this.floatPressure) {
				v6 = "true";
			} else {
				v6 = "false";
			}
			if(shader6.FLOAT_PRESSURE != v6) {
				shader6.set_FLOAT_PRESSURE(v6);
			}
			if(this.floatDivergence) {
				v6 = "true";
			} else {
				v6 = "false";
			}
			if(shader6.FLOAT_DIVERGENCE != v6) {
				shader6.set_FLOAT_DIVERGENCE(v6);
			}
		}
		var shader7 = this.applyForcesShader;
		if(shader7 != null) {
			var _this7 = shader7.aspectRatio;
			_this7.dirty = true;
			_this7.data = this.aspectRatio;
			shader7.invresolution.data.x = 1 / this.width;
			shader7.invresolution.data.y = 1 / this.height;
			var v7 = this.floatVelocity?"true":"false";
			if(shader7.FLOAT_VELOCITY != v7) {
				shader7.set_FLOAT_VELOCITY(v7);
			}
			if(this.floatPressure) {
				v7 = "true";
			} else {
				v7 = "false";
			}
			if(shader7.FLOAT_PRESSURE != v7) {
				shader7.set_FLOAT_PRESSURE(v7);
			}
			if(this.floatDivergence) {
				v7 = "true";
			} else {
				v7 = "false";
			}
			if(shader7.FLOAT_DIVERGENCE != v7) {
				shader7.set_FLOAT_DIVERGENCE(v7);
			}
		}
		var shader8 = this.updateDyeShader;
		if(shader8 != null) {
			var _this8 = shader8.aspectRatio;
			_this8.dirty = true;
			_this8.data = this.aspectRatio;
			shader8.invresolution.data.x = 1 / this.width;
			shader8.invresolution.data.y = 1 / this.height;
			var v8 = this.floatVelocity?"true":"false";
			if(shader8.FLOAT_VELOCITY != v8) {
				shader8.set_FLOAT_VELOCITY(v8);
			}
			if(this.floatPressure) {
				v8 = "true";
			} else {
				v8 = "false";
			}
			if(shader8.FLOAT_PRESSURE != v8) {
				shader8.set_FLOAT_PRESSURE(v8);
			}
			if(this.floatDivergence) {
				v8 = "true";
			} else {
				v8 = "false";
			}
			if(shader8.FLOAT_DIVERGENCE != v8) {
				shader8.set_FLOAT_DIVERGENCE(v8);
			}
		}
	}
	,clear: function() {
		snow_modules_opengl_web_GL.gl.viewport(0,0,this.width,this.height);
		snow_modules_opengl_web_GL.gl.disable(3042);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
		var shader = this.clearVelocityShader;
		var target = this.velocityRenderTarget;
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		target.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		var _this = this.velocityRenderTarget;
		_this.tmpFBO = _this.writeFrameBufferObject;
		_this.writeFrameBufferObject = _this.readFrameBufferObject;
		_this.readFrameBufferObject = _this.tmpFBO;
		_this.tmpTex = _this.writeToTexture;
		_this.writeToTexture = _this.readFromTexture;
		_this.readFromTexture = _this.tmpTex;
		var shader1 = this.clearPressureShader;
		var target1 = this.pressureRenderTarget;
		if(shader1._active) {
			var _g5 = 0;
			var _g14 = shader1._uniforms;
			while(_g5 < _g14.length) {
				var u2 = _g14[_g5];
				++_g5;
				u2.apply();
			}
			var offset2 = 0;
			var _g15 = 0;
			var _g6 = shader1._attributes.length;
			while(_g15 < _g6) {
				var att2 = shader1._attributes[_g15++];
				var location2 = att2.location;
				if(location2 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,shader1._aStride,offset2);
				}
				offset2 += att2.byteSize;
			}
		} else {
			if(!shader1._ready) {
				shader1.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader1._prog);
			var _g7 = 0;
			var _g16 = shader1._uniforms;
			while(_g7 < _g16.length) {
				var u3 = _g16[_g7];
				++_g7;
				u3.apply();
			}
			var offset3 = 0;
			var _g17 = 0;
			var _g8 = shader1._attributes.length;
			while(_g17 < _g8) {
				var att3 = shader1._attributes[_g17++];
				var location3 = att3.location;
				if(location3 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,shader1._aStride,offset3);
				}
				offset3 += att3.byteSize;
			}
			shader1._active = true;
		}
		target1.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader1.deactivate();
		var _this1 = this.pressureRenderTarget;
		_this1.tmpFBO = _this1.writeFrameBufferObject;
		_this1.writeFrameBufferObject = _this1.readFrameBufferObject;
		_this1.readFrameBufferObject = _this1.tmpFBO;
		_this1.tmpTex = _this1.writeToTexture;
		_this1.writeToTexture = _this1.readFromTexture;
		_this1.readFromTexture = _this1.tmpTex;
		var _this2 = this.dyeRenderTarget;
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this2.readFrameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(16384);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this2.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(16384);
	}
	,advect: function(target,dt) {
		var _this = this.advectShader.dt;
		_this.dirty = true;
		_this.data = dt;
		var _this1 = this.advectShader.target;
		_this1.dirty = true;
		_this1.data = target.readFromTexture;
		var _this2 = this.advectShader.velocity;
		_this2.dirty = true;
		_this2.data = this.velocityRenderTarget.readFromTexture;
		var shader = this.advectShader;
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		target.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		target.tmpFBO = target.writeFrameBufferObject;
		target.writeFrameBufferObject = target.readFrameBufferObject;
		target.readFrameBufferObject = target.tmpFBO;
		target.tmpTex = target.writeToTexture;
		target.writeToTexture = target.readFromTexture;
		target.readFromTexture = target.tmpTex;
	}
	,selfAdvectVelocity: function(dt) {
		var _this = this.advectVelocityShader.dt;
		_this.dirty = true;
		_this.data = dt;
		var _this1 = this.advectVelocityShader.velocity;
		_this1.dirty = true;
		_this1.data = this.velocityRenderTarget.readFromTexture;
		var shader = this.advectVelocityShader;
		var target = this.velocityRenderTarget;
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		target.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		var _this2 = this.velocityRenderTarget;
		_this2.tmpFBO = _this2.writeFrameBufferObject;
		_this2.writeFrameBufferObject = _this2.readFrameBufferObject;
		_this2.readFrameBufferObject = _this2.tmpFBO;
		_this2.tmpTex = _this2.writeToTexture;
		_this2.writeToTexture = _this2.readFromTexture;
		_this2.readFromTexture = _this2.tmpTex;
	}
	,applyForces: function(dt) {
		if(this.applyForcesShader == null) {
			return;
		}
		var _this = this.applyForcesShader.dt;
		_this.dirty = true;
		_this.data = dt;
		var _this1 = this.applyForcesShader.velocity;
		_this1.dirty = true;
		_this1.data = this.velocityRenderTarget.readFromTexture;
		var shader = this.applyForcesShader;
		var target = this.velocityRenderTarget;
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		target.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		var _this2 = this.velocityRenderTarget;
		_this2.tmpFBO = _this2.writeFrameBufferObject;
		_this2.writeFrameBufferObject = _this2.readFrameBufferObject;
		_this2.readFrameBufferObject = _this2.tmpFBO;
		_this2.tmpTex = _this2.writeToTexture;
		_this2.writeToTexture = _this2.readFromTexture;
		_this2.readFromTexture = _this2.tmpTex;
	}
	,computeDivergence: function() {
		var _this = this.divergenceShader.velocity;
		_this.dirty = true;
		_this.data = this.velocityRenderTarget.readFromTexture;
		var shader = this.divergenceShader;
		var target = this.divergenceRenderTarget;
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		target.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
	}
	,solvePressure: function() {
		var _this = this.pressureSolveShader.divergence;
		_this.dirty = true;
		_this.data = this.divergenceRenderTarget.texture;
		var _this1 = this.pressureSolveShader;
		if(_this1._active) {
			var _g = 0;
			var _g1 = _this1._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = _this1._attributes.length;
			while(_g11 < _g2) {
				var att = _this1._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,_this1._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!_this1._ready) {
				_this1.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(_this1._prog);
			var _g3 = 0;
			var _g12 = _this1._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = _this1._attributes.length;
			while(_g13 < _g4) {
				var att1 = _this1._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,_this1._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			_this1._active = true;
		}
		var _g14 = 0;
		var _g5 = this.solverIterations;
		while(_g14 < _g5) {
			++_g14;
			var _this2 = this.pressureSolveShader.pressure;
			_this2.dirty = true;
			_this2.data = this.pressureRenderTarget.readFromTexture;
			var _g6 = 0;
			var _g15 = this.pressureSolveShader._uniforms;
			while(_g6 < _g15.length) {
				var u2 = _g15[_g6];
				++_g6;
				u2.apply();
			}
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.pressureRenderTarget.writeFrameBufferObject);
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			var _this3 = this.pressureRenderTarget;
			_this3.tmpFBO = _this3.writeFrameBufferObject;
			_this3.writeFrameBufferObject = _this3.readFrameBufferObject;
			_this3.readFrameBufferObject = _this3.tmpFBO;
			_this3.tmpTex = _this3.writeToTexture;
			_this3.writeToTexture = _this3.readFromTexture;
			_this3.readFromTexture = _this3.tmpTex;
		}
		this.pressureSolveShader.deactivate();
	}
	,subtractPressureGradient: function() {
		var _this = this.pressureGradientSubstractShader.pressure;
		_this.dirty = true;
		_this.data = this.pressureRenderTarget.readFromTexture;
		var _this1 = this.pressureGradientSubstractShader.velocity;
		_this1.dirty = true;
		_this1.data = this.velocityRenderTarget.readFromTexture;
		var shader = this.pressureGradientSubstractShader;
		var target = this.velocityRenderTarget;
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		target.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		var _this2 = this.velocityRenderTarget;
		_this2.tmpFBO = _this2.writeFrameBufferObject;
		_this2.writeFrameBufferObject = _this2.readFrameBufferObject;
		_this2.readFrameBufferObject = _this2.tmpFBO;
		_this2.tmpTex = _this2.writeToTexture;
		_this2.writeToTexture = _this2.readFromTexture;
		_this2.readFromTexture = _this2.tmpTex;
	}
	,updateDye: function(dt) {
		if(this.updateDyeShader == null) {
			return;
		}
		var _this = this.updateDyeShader.dt;
		_this.dirty = true;
		_this.data = dt;
		var _this1 = this.updateDyeShader.dye;
		_this1.dirty = true;
		_this1.data = this.dyeRenderTarget.readFromTexture;
		var shader = this.updateDyeShader;
		var target = this.dyeRenderTarget;
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		target.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		var _this2 = this.dyeRenderTarget;
		_this2.tmpFBO = _this2.writeFrameBufferObject;
		_this2.writeFrameBufferObject = _this2.readFrameBufferObject;
		_this2.readFrameBufferObject = _this2.tmpFBO;
		_this2.tmpTex = _this2.writeToTexture;
		_this2.writeToTexture = _this2.readFromTexture;
		_this2.readFromTexture = _this2.tmpTex;
	}
	,renderShaderTo: function(shader,target) {
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		target.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
	}
	,updateCoreShaderUniforms: function(shader) {
		if(shader == null) {
			return;
		}
		var _this = shader.aspectRatio;
		_this.dirty = true;
		_this.data = this.aspectRatio;
		shader.invresolution.data.x = 1 / this.width;
		shader.invresolution.data.y = 1 / this.height;
		var v = this.floatVelocity?"true":"false";
		if(shader.FLOAT_VELOCITY != v) {
			shader.set_FLOAT_VELOCITY(v);
		}
		if(this.floatPressure) {
			v = "true";
		} else {
			v = "false";
		}
		if(shader.FLOAT_PRESSURE != v) {
			shader.set_FLOAT_PRESSURE(v);
		}
		if(this.floatDivergence) {
			v = "true";
		} else {
			v = "false";
		}
		if(shader.FLOAT_DIVERGENCE != v) {
			shader.set_FLOAT_DIVERGENCE(v);
		}
	}
	,set_applyForcesShader: function(v) {
		this.applyForcesShader = v;
		var _this = this.applyForcesShader.dx;
		_this.dirty = true;
		_this.data = this.cellSize;
		var shader = this.applyForcesShader;
		if(shader != null) {
			var _this1 = shader.aspectRatio;
			_this1.dirty = true;
			_this1.data = this.aspectRatio;
			shader.invresolution.data.x = 1 / this.width;
			shader.invresolution.data.y = 1 / this.height;
			var v1 = this.floatVelocity?"true":"false";
			if(shader.FLOAT_VELOCITY != v1) {
				shader.set_FLOAT_VELOCITY(v1);
			}
			if(this.floatPressure) {
				v1 = "true";
			} else {
				v1 = "false";
			}
			if(shader.FLOAT_PRESSURE != v1) {
				shader.set_FLOAT_PRESSURE(v1);
			}
			if(this.floatDivergence) {
				v1 = "true";
			} else {
				v1 = "false";
			}
			if(shader.FLOAT_DIVERGENCE != v1) {
				shader.set_FLOAT_DIVERGENCE(v1);
			}
		}
		return this.applyForcesShader;
	}
	,set_updateDyeShader: function(v) {
		this.updateDyeShader = v;
		var _this = this.updateDyeShader.dx;
		_this.dirty = true;
		_this.data = this.cellSize;
		var shader = this.updateDyeShader;
		if(shader != null) {
			var _this1 = shader.aspectRatio;
			_this1.dirty = true;
			_this1.data = this.aspectRatio;
			shader.invresolution.data.x = 1 / this.width;
			shader.invresolution.data.y = 1 / this.height;
			var v1 = this.floatVelocity?"true":"false";
			if(shader.FLOAT_VELOCITY != v1) {
				shader.set_FLOAT_VELOCITY(v1);
			}
			if(this.floatPressure) {
				v1 = "true";
			} else {
				v1 = "false";
			}
			if(shader.FLOAT_PRESSURE != v1) {
				shader.set_FLOAT_PRESSURE(v1);
			}
			if(this.floatDivergence) {
				v1 = "true";
			} else {
				v1 = "false";
			}
			if(shader.FLOAT_DIVERGENCE != v1) {
				shader.set_FLOAT_DIVERGENCE(v1);
			}
		}
		return this.updateDyeShader;
	}
	,set_cellSize: function(v) {
		this.cellSize = v;
		var _this = this.advectShader.rdx;
		_this.dirty = true;
		_this.data = 1 / this.cellSize;
		var _this1 = this.advectVelocityShader.rdx;
		_this1.dirty = true;
		_this1.data = 1 / this.cellSize;
		var _this2 = this.divergenceShader.halfrdx;
		_this2.dirty = true;
		_this2.data = 0.5 * (1 / this.cellSize);
		var _this3 = this.pressureGradientSubstractShader.halfrdx;
		_this3.dirty = true;
		_this3.data = 0.5 * (1 / this.cellSize);
		var _this4 = this.pressureSolveShader.alpha;
		_this4.dirty = true;
		_this4.data = -this.cellSize * this.cellSize;
		return this.cellSize;
	}
	,clipToAspectSpaceX: function(clipX) {
		return clipX * this.aspectRatio;
	}
	,clipToAspectSpaceY: function(clipY) {
		return clipY;
	}
	,__class__: GPUFluid
};
var shaderblox_ShaderBase = function() {
	this._textures = [];
	this._attributes = [];
	this._uniforms = [];
	this._name = ("" + Std.string(js_Boot.getClass(this))).split(".").pop();
	this.initSources();
	this.createProperties();
};
$hxClasses["shaderblox.ShaderBase"] = shaderblox_ShaderBase;
shaderblox_ShaderBase.__name__ = ["shaderblox","ShaderBase"];
shaderblox_ShaderBase.prototype = {
	initSources: function() {
	}
	,createProperties: function() {
	}
	,create: function() {
		this.compile(this._vertSource,this._fragSource);
		this._ready = true;
	}
	,destroy: function() {
		snow_modules_opengl_web_GL.gl.deleteShader(this._vert);
		snow_modules_opengl_web_GL.gl.deleteShader(this._frag);
		snow_modules_opengl_web_GL.gl.deleteProgram(this._prog);
		this._prog = null;
		this._vert = null;
		this._frag = null;
		this._ready = false;
	}
	,compile: function(vertSource,fragSource) {
		var vertexShader = snow_modules_opengl_web_GL.gl.createShader(35633);
		snow_modules_opengl_web_GL.gl.shaderSource(vertexShader,vertSource);
		snow_modules_opengl_web_GL.gl.compileShader(vertexShader);
		if(snow_modules_opengl_web_GL.gl.getShaderParameter(vertexShader,35713) == 0) {
			haxe_Log.trace("Error compiling vertex shader: " + snow_modules_opengl_web_GL.gl.getShaderInfoLog(vertexShader),{ fileName : "ShaderBase.hx", lineNumber : 74, className : "shaderblox.ShaderBase", methodName : "compile"});
			haxe_Log.trace("\n" + vertSource,{ fileName : "ShaderBase.hx", lineNumber : 75, className : "shaderblox.ShaderBase", methodName : "compile"});
			throw new js__$Boot_HaxeError("Error compiling vertex shader");
		}
		var fragmentShader = snow_modules_opengl_web_GL.gl.createShader(35632);
		snow_modules_opengl_web_GL.gl.shaderSource(fragmentShader,fragSource);
		snow_modules_opengl_web_GL.gl.compileShader(fragmentShader);
		if(snow_modules_opengl_web_GL.gl.getShaderParameter(fragmentShader,35713) == 0) {
			haxe_Log.trace("Error compiling fragment shader: " + snow_modules_opengl_web_GL.gl.getShaderInfoLog(fragmentShader) + "\n",{ fileName : "ShaderBase.hx", lineNumber : 84, className : "shaderblox.ShaderBase", methodName : "compile"});
			var lines = fragSource.split("\n");
			var i = 0;
			var _g = 0;
			while(_g < lines.length) {
				var l = lines[_g];
				++_g;
				haxe_Log.trace(i++ + " - " + l,{ fileName : "ShaderBase.hx", lineNumber : 88, className : "shaderblox.ShaderBase", methodName : "compile"});
			}
			throw new js__$Boot_HaxeError("Error compiling fragment shader");
		}
		var shaderProgram = snow_modules_opengl_web_GL.gl.createProgram();
		snow_modules_opengl_web_GL.gl.attachShader(shaderProgram,vertexShader);
		snow_modules_opengl_web_GL.gl.attachShader(shaderProgram,fragmentShader);
		snow_modules_opengl_web_GL.gl.linkProgram(shaderProgram);
		if(snow_modules_opengl_web_GL.gl.getProgramParameter(shaderProgram,35714) == 0) {
			throw new js__$Boot_HaxeError("Unable to initialize the shader program.\n" + snow_modules_opengl_web_GL.gl.getProgramInfoLog(shaderProgram));
		}
		var numUniforms = snow_modules_opengl_web_GL.gl.getProgramParameter(shaderProgram,35718);
		var uniformLocations = new haxe_ds_StringMap();
		while(numUniforms-- > 0) {
			var uInfo = snow_modules_opengl_web_GL.gl.getActiveUniform(shaderProgram,numUniforms);
			var loc = snow_modules_opengl_web_GL.gl.getUniformLocation(shaderProgram,uInfo.name);
			var k = uInfo.name;
			if(__map_reserved[k] != null) {
				uniformLocations.setReserved(k,loc);
			} else {
				uniformLocations.h[k] = loc;
			}
		}
		var numAttributes = snow_modules_opengl_web_GL.gl.getProgramParameter(shaderProgram,35721);
		var attributeLocations = new haxe_ds_StringMap();
		while(numAttributes-- > 0) {
			var aInfo = snow_modules_opengl_web_GL.gl.getActiveAttrib(shaderProgram,numAttributes);
			var loc1 = snow_modules_opengl_web_GL.gl.getAttribLocation(shaderProgram,aInfo.name);
			var k1 = aInfo.name;
			if(__map_reserved[k1] != null) {
				attributeLocations.setReserved(k1,loc1);
			} else {
				attributeLocations.h[k1] = loc1;
			}
		}
		this._vert = vertexShader;
		this._frag = fragmentShader;
		this._prog = shaderProgram;
		var removeList = [];
		this._numTextures = 0;
		this._textures = [];
		var _g1 = 0;
		var _g11 = this._uniforms;
		while(_g1 < _g11.length) {
			var u = _g11[_g1];
			++_g1;
			var key = u.name;
			var loc2 = __map_reserved[key] != null?uniformLocations.getReserved(key):uniformLocations.h[key];
			if(js_Boot.__instanceof(u,shaderblox_uniforms_UTexture)) {
				var t = u;
				t.samplerIndex = this._numTextures++;
				this._textures[t.samplerIndex] = t;
			}
			if(loc2 != null) {
				u.location = loc2;
			} else {
				removeList.push(u);
			}
		}
		while(removeList.length > 0) HxOverrides.remove(this._uniforms,removeList.pop());
		var _g2 = 0;
		var _g12 = this._attributes;
		while(_g2 < _g12.length) {
			var a = _g12[_g2];
			++_g2;
			var key1 = a.name;
			var loc3 = __map_reserved[key1] != null?attributeLocations.getReserved(key1):attributeLocations.h[key1];
			a.location = loc3 == null?-1:loc3;
		}
	}
	,activate: function(initUniforms,initAttribs) {
		if(initAttribs == null) {
			initAttribs = false;
		}
		if(initUniforms == null) {
			initUniforms = true;
		}
		if(this._active) {
			if(initUniforms) {
				var _g = 0;
				var _g1 = this._uniforms;
				while(_g < _g1.length) {
					var u = _g1[_g];
					++_g;
					u.apply();
				}
			}
			if(initAttribs) {
				var offset = 0;
				var _g11 = 0;
				var _g2 = this._attributes.length;
				while(_g11 < _g2) {
					var att = this._attributes[_g11++];
					var location = att.location;
					if(location != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,this._aStride,offset);
					}
					offset += att.byteSize;
				}
			}
			return;
		}
		if(!this._ready) {
			this.create();
		}
		snow_modules_opengl_web_GL.gl.useProgram(this._prog);
		if(initUniforms) {
			var _g3 = 0;
			var _g12 = this._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
		}
		if(initAttribs) {
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = this._attributes.length;
			while(_g13 < _g4) {
				var att1 = this._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,this._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
		}
		this._active = true;
	}
	,deactivate: function() {
		if(!this._active) {
			return;
		}
		this._active = false;
		this.disableAttributes();
	}
	,setUniforms: function() {
		var _g = 0;
		var _g1 = this._uniforms;
		while(_g < _g1.length) {
			var u = _g1[_g];
			++_g;
			u.apply();
		}
	}
	,setAttributes: function() {
		var offset = 0;
		var _g1 = 0;
		var _g = this._attributes.length;
		while(_g1 < _g) {
			var att = this._attributes[_g1++];
			var location = att.location;
			if(location != -1) {
				snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
				snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,this._aStride,offset);
			}
			offset += att.byteSize;
		}
	}
	,disableAttributes: function() {
		var _g1 = 0;
		var _g = this._attributes.length;
		while(_g1 < _g) {
			var idx = this._attributes[_g1++].location;
			if(idx == -1) {
				continue;
			}
			snow_modules_opengl_web_GL.gl.disableVertexAttribArray(idx);
		}
	}
	,toString: function() {
		return "[Shader(" + this._name + ", attributes:" + this._attributes.length + ", uniforms:" + this._uniforms.length + ")]";
	}
	,__class__: shaderblox_ShaderBase
};
var FluidBase = function() {
	shaderblox_ShaderBase.call(this);
};
$hxClasses["FluidBase"] = FluidBase;
FluidBase.__name__ = ["FluidBase"];
FluidBase.__super__ = shaderblox_ShaderBase;
FluidBase.prototype = $extend(shaderblox_ShaderBase.prototype,{
	set_PACK_FLUID_VELOCITY_SCALE: function(value) {
		this.PACK_FLUID_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_FLUID_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_PACK_FLUID_PRESSURE_SCALE: function(value) {
		this.PACK_FLUID_PRESSURE_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_FLUID_PRESSURE_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_PACK_FLUID_DIVERGENCE_SCALE: function(value) {
		this.PACK_FLUID_DIVERGENCE_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_FLUID_DIVERGENCE_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_VELOCITY: function(value) {
		this.FLOAT_VELOCITY = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_VELOCITY",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_PRESSURE: function(value) {
		this.FLOAT_PRESSURE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_PRESSURE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_DIVERGENCE: function(value) {
		this.FLOAT_DIVERGENCE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_DIVERGENCE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_FLUID_VELOCITY_SCALE: function(value) {
		this.INV_PACK_FLUID_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_FLUID_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_FLUID_PRESSURE_SCALE: function(value) {
		this.INV_PACK_FLUID_PRESSURE_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_FLUID_PRESSURE_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_FLUID_DIVERGENCE_SCALE: function(value) {
		this.INV_PACK_FLUID_DIVERGENCE_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_FLUID_DIVERGENCE_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,createProperties: function() {
		shaderblox_ShaderBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UFloat("aspectRatio",null);
		this.aspectRatio = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UVec2("invresolution",null);
		this.invresolution = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_attributes_FloatAttribute("vertexPosition",0,2);
		this.vertexPosition = instance2;
		this._attributes.push(instance2);
		this._aStride += 8;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n";
	}
	,__class__: FluidBase
});
var Advect = function() {
	FluidBase.call(this);
};
$hxClasses["Advect"] = Advect;
Advect.__name__ = ["Advect"];
Advect.__super__ = FluidBase;
Advect.prototype = $extend(FluidBase.prototype,{
	createProperties: function() {
		FluidBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("velocity",null,false);
		this.velocity = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UTexture("target",null,false);
		this.target = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UFloat("dt",null);
		this.dt = instance2;
		this._uniforms.push(instance2);
		var instance3 = new shaderblox_uniforms_UFloat("rdx",null);
		this.rdx = instance3;
		this._uniforms.push(instance3);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nuniform sampler2D velocity;\r\nuniform sampler2D target;\r\nuniform float dt;\r\nuniform float rdx; \n\r\nvarying vec2 texelCoord;\r\nvarying vec2 p;\n\r\nvoid main(void){\r\n  \n\r\n  vec2 tracedPos = p - dt * rdx * sampleVelocity(velocity, texelCoord ).xy; \n\r\n  \n  \n  tracedPos = aspectToTexelSpace(tracedPos);\r\n  \n  tracedPos /= invresolution;\r\n\r\n  vec4 st;\r\n  st.xy = floor(tracedPos-.5)+.5; \n  st.zw = st.xy+1.;               \n\r\n  vec2 t = tracedPos - st.xy;\r\n\r\n  st *= invresolution.xyxy; \n\r\n  vec4 tex11 = texture2D(target, st.xy );\r\n  vec4 tex21 = texture2D(target, st.zy );\r\n  vec4 tex12 = texture2D(target, st.xw );\r\n  vec4 tex22 = texture2D(target, st.zw );\r\n\r\n  \n  gl_FragColor = mix(mix(tex11, tex21, t.x), mix(tex12, tex22, t.x), t.y);\r\n}\r\n\n";
	}
	,__class__: Advect
});
var AdvectVelocity = function() {
	FluidBase.call(this);
};
$hxClasses["AdvectVelocity"] = AdvectVelocity;
AdvectVelocity.__name__ = ["AdvectVelocity"];
AdvectVelocity.__super__ = FluidBase;
AdvectVelocity.prototype = $extend(FluidBase.prototype,{
	createProperties: function() {
		FluidBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("velocity",null,false);
		this.velocity = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UFloat("dt",null);
		this.dt = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UFloat("rdx",null);
		this.rdx = instance2;
		this._uniforms.push(instance2);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nuniform sampler2D velocity;\r\nuniform float dt;\r\nuniform float rdx; \n\r\nvarying vec2 texelCoord;\r\nvarying vec2 p;\n\r\nvoid main(void){\r\n  \n  \r\n  vec2 tracedPos = p - dt * rdx * sampleVelocity(velocity, texelCoord).xy; \n\r\n  \n  \n  tracedPos = aspectToTexelSpace(tracedPos);\r\n  \n  tracedPos /= invresolution;\r\n  \r\n  vec4 st;\r\n  st.xy = floor(tracedPos-.5)+.5; \n  st.zw = st.xy+1.;               \n\r\n  vec2 t = tracedPos - st.xy;\r\n\r\n  st *= invresolution.xyxy; \n  \r\n  vec2 tex11 = sampleVelocity(velocity, st.xy);\r\n  vec2 tex21 = sampleVelocity(velocity, st.zy);\r\n  vec2 tex12 = sampleVelocity(velocity, st.xw);\r\n  vec2 tex22 = sampleVelocity(velocity, st.zw);\r\n  \r\n  \n  gl_FragColor = packFluidVelocity(mix(mix(tex11, tex21, t.x), mix(tex12, tex22, t.x), t.y));\r\n}\n";
	}
	,__class__: AdvectVelocity
});
var Divergence = function() {
	FluidBase.call(this);
};
$hxClasses["Divergence"] = Divergence;
Divergence.__name__ = ["Divergence"];
Divergence.__super__ = FluidBase;
Divergence.prototype = $extend(FluidBase.prototype,{
	createProperties: function() {
		FluidBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("velocity",null,false);
		this.velocity = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UFloat("halfrdx",null);
		this.halfrdx = instance1;
		this._uniforms.push(instance1);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nuniform sampler2D velocity;\t\nuniform float halfrdx;\t\n\r\nvarying vec2 texelCoord;\r\n\r\nvoid main(void){\r\n\t\n \t\n\tvec2 L = sampleVelocity(velocity, texelCoord - vec2(invresolution.x, 0));\r\n\tvec2 R = sampleVelocity(velocity, texelCoord + vec2(invresolution.x, 0));\r\n\tvec2 B = sampleVelocity(velocity, texelCoord - vec2(0, invresolution.y));\r\n\tvec2 T = sampleVelocity(velocity, texelCoord + vec2(0, invresolution.y));\r\n\r\n\tgl_FragColor = packFluidDivergence( halfrdx * ((R.x - L.x) + (T.y - B.y)));\r\n}\r\n\n";
	}
	,__class__: Divergence
});
var PressureSolve = function() {
	FluidBase.call(this);
};
$hxClasses["PressureSolve"] = PressureSolve;
PressureSolve.__name__ = ["PressureSolve"];
PressureSolve.__super__ = FluidBase;
PressureSolve.prototype = $extend(FluidBase.prototype,{
	createProperties: function() {
		FluidBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("pressure",null,false);
		this.pressure = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UTexture("divergence",null,false);
		this.divergence = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UFloat("alpha",null);
		this.alpha = instance2;
		this._uniforms.push(instance2);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nuniform sampler2D pressure;\r\nuniform sampler2D divergence;\r\nuniform float alpha;\n\r\nvarying vec2 texelCoord;\r\n\r\nvoid main(void){\r\n  \n  \n  float L = samplePressue(pressure, texelCoord - vec2(invresolution.x, 0));\r\n  float R = samplePressue(pressure, texelCoord + vec2(invresolution.x, 0));\r\n  float B = samplePressue(pressure, texelCoord - vec2(0, invresolution.y));\r\n  float T = samplePressue(pressure, texelCoord + vec2(0, invresolution.y));\r\n\r\n  float bC = sampleDivergence(divergence, texelCoord);\r\n\r\n  gl_FragColor = packFluidPressure((L + R + B + T + alpha * bC) * .25);\n}\r\n\n";
	}
	,__class__: PressureSolve
});
var PressureGradientSubstract = function() {
	FluidBase.call(this);
};
$hxClasses["PressureGradientSubstract"] = PressureGradientSubstract;
PressureGradientSubstract.__name__ = ["PressureGradientSubstract"];
PressureGradientSubstract.__super__ = FluidBase;
PressureGradientSubstract.prototype = $extend(FluidBase.prototype,{
	createProperties: function() {
		FluidBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("pressure",null,false);
		this.pressure = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UTexture("velocity",null,false);
		this.velocity = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UFloat("halfrdx",null);
		this.halfrdx = instance2;
		this._uniforms.push(instance2);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nuniform sampler2D pressure;\r\nuniform sampler2D velocity;\r\nuniform float halfrdx;\r\n\r\nvarying vec2 texelCoord;\r\n\r\nvoid main(void){\r\n  float L = samplePressue(pressure, texelCoord - vec2(invresolution.x, 0));\r\n  float R = samplePressue(pressure, texelCoord + vec2(invresolution.x, 0));\r\n  float B = samplePressue(pressure, texelCoord - vec2(0, invresolution.y));\r\n  float T = samplePressue(pressure, texelCoord + vec2(0, invresolution.y));\r\n\r\n  vec2 v = sampleVelocity(velocity, texelCoord);\r\n\r\n  gl_FragColor = packFluidVelocity(v - halfrdx*vec2(R-L, T-B));\r\n}\r\n\n";
	}
	,__class__: PressureGradientSubstract
});
var ApplyForces = function() {
	FluidBase.call(this);
};
$hxClasses["ApplyForces"] = ApplyForces;
ApplyForces.__name__ = ["ApplyForces"];
ApplyForces.__super__ = FluidBase;
ApplyForces.prototype = $extend(FluidBase.prototype,{
	createProperties: function() {
		FluidBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("velocity",null,false);
		this.velocity = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UFloat("dt",null);
		this.dt = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UFloat("dx",null);
		this.dx = instance2;
		this._uniforms.push(instance2);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nuniform sampler2D velocity;\n\tuniform float dt;\n\tuniform float dx;\n\n\tvarying vec2 texelCoord;\n\tvarying vec2 p;\n";
	}
	,__class__: ApplyForces
});
var UpdateDye = function() {
	FluidBase.call(this);
};
$hxClasses["UpdateDye"] = UpdateDye;
UpdateDye.__name__ = ["UpdateDye"];
UpdateDye.__super__ = FluidBase;
UpdateDye.prototype = $extend(FluidBase.prototype,{
	createProperties: function() {
		FluidBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("dye",null,false);
		this.dye = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UFloat("dt",null);
		this.dt = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UFloat("dx",null);
		this.dx = instance2;
		this._uniforms.push(instance2);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nuniform sampler2D dye;\n\tuniform float dt;\n\tuniform float dx;\n\n\tvarying vec2 texelCoord;\n\tvarying vec2 p;\n";
	}
	,__class__: UpdateDye
});
var ClearVelocity = function() {
	FluidBase.call(this);
};
$hxClasses["ClearVelocity"] = ClearVelocity;
ClearVelocity.__name__ = ["ClearVelocity"];
ClearVelocity.__super__ = FluidBase;
ClearVelocity.prototype = $extend(FluidBase.prototype,{
	createProperties: function() {
		FluidBase.prototype.createProperties.call(this);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nvoid main(){\n\tgl_FragColor = packFluidVelocity(vec2(0));\n}\n";
	}
	,__class__: ClearVelocity
});
var ClearPressure = function() {
	FluidBase.call(this);
};
$hxClasses["ClearPressure"] = ClearPressure;
ClearPressure.__name__ = ["ClearPressure"];
ClearPressure.__super__ = FluidBase;
ClearPressure.prototype = $extend(FluidBase.prototype,{
	createProperties: function() {
		FluidBase.prototype.createProperties.call(this);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nvoid main(){\n\tgl_FragColor = packFluidPressure(0.0);\n}\n";
	}
	,__class__: ClearPressure
});
var GPUParticles = function(count) {
	this.floatDataType = null;
	this.gl = snow_modules_opengl_web_GL;
	if(GPUCapabilities.get_writeToFloat()) {
		this.floatDataType = 5126;
	} else if(GPUCapabilities.get_writeToHalfFloat()) {
		this.floatDataType = GPUCapabilities.get_HALF_FLOAT();
	}
	this.floatData = this.floatDataType != null;
	this.textureQuad = gltoolbox_GeometryTools.getCachedUnitQuad();
	this.velocityStepShader = new VelocityStep();
	this.positionStepShader = new PositionStep();
	this.initialPositionShader = new InitialPosition();
	this.initialVelocityShader = new InitialVelocity();
	this.velocityStepShader.set_FLOAT_DATA(this.floatData?"true":"false");
	this.positionStepShader.set_FLOAT_DATA(this.floatData?"true":"false");
	this.initialPositionShader.set_FLOAT_DATA(this.floatData?"true":"false");
	this.initialVelocityShader.set_FLOAT_DATA(this.floatData?"true":"false");
	var _this = this.velocityStepShader.dragCoefficient;
	_this.dirty = true;
	_this.data = 1;
	this.velocityStepShader.flowScale.data.x = 1;
	this.velocityStepShader.flowScale.data.y = 1;
	this.velocityStepShader.set_FLOAT_VELOCITY("false");
	this.setCount(count);
	var shader = this.initialPositionShader;
	var target = this.positionData;
	snow_modules_opengl_web_GL.gl.viewport(0,0,target.width,target.height);
	snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target.writeFrameBufferObject);
	snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
	if(shader._active) {
		var _g = 0;
		var _g1 = shader._uniforms;
		while(_g < _g1.length) {
			var u = _g1[_g];
			++_g;
			u.apply();
		}
		var offset = 0;
		var _g11 = 0;
		var _g2 = shader._attributes.length;
		while(_g11 < _g2) {
			var att = shader._attributes[_g11++];
			var location = att.location;
			if(location != -1) {
				snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
				snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
			}
			offset += att.byteSize;
		}
	} else {
		if(!shader._ready) {
			shader.create();
		}
		snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
		var _g3 = 0;
		var _g12 = shader._uniforms;
		while(_g3 < _g12.length) {
			var u1 = _g12[_g3];
			++_g3;
			u1.apply();
		}
		var offset1 = 0;
		var _g13 = 0;
		var _g4 = shader._attributes.length;
		while(_g13 < _g4) {
			var att1 = shader._attributes[_g13++];
			var location1 = att1.location;
			if(location1 != -1) {
				snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
				snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
			}
			offset1 += att1.byteSize;
		}
		shader._active = true;
	}
	snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
	shader.deactivate();
	target.tmpFBO = target.writeFrameBufferObject;
	target.writeFrameBufferObject = target.readFrameBufferObject;
	target.readFrameBufferObject = target.tmpFBO;
	target.tmpTex = target.writeToTexture;
	target.writeToTexture = target.readFromTexture;
	target.readFromTexture = target.tmpTex;
	var shader1 = this.initialVelocityShader;
	var target1 = this.velocityData;
	snow_modules_opengl_web_GL.gl.viewport(0,0,target1.width,target1.height);
	snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target1.writeFrameBufferObject);
	snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
	if(shader1._active) {
		var _g5 = 0;
		var _g14 = shader1._uniforms;
		while(_g5 < _g14.length) {
			var u2 = _g14[_g5];
			++_g5;
			u2.apply();
		}
		var offset2 = 0;
		var _g15 = 0;
		var _g6 = shader1._attributes.length;
		while(_g15 < _g6) {
			var att2 = shader1._attributes[_g15++];
			var location2 = att2.location;
			if(location2 != -1) {
				snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
				snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,shader1._aStride,offset2);
			}
			offset2 += att2.byteSize;
		}
	} else {
		if(!shader1._ready) {
			shader1.create();
		}
		snow_modules_opengl_web_GL.gl.useProgram(shader1._prog);
		var _g7 = 0;
		var _g16 = shader1._uniforms;
		while(_g7 < _g16.length) {
			var u3 = _g16[_g7];
			++_g7;
			u3.apply();
		}
		var offset3 = 0;
		var _g17 = 0;
		var _g8 = shader1._attributes.length;
		while(_g17 < _g8) {
			var att3 = shader1._attributes[_g17++];
			var location3 = att3.location;
			if(location3 != -1) {
				snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
				snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,shader1._aStride,offset3);
			}
			offset3 += att3.byteSize;
		}
		shader1._active = true;
	}
	snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
	shader1.deactivate();
	target1.tmpFBO = target1.writeFrameBufferObject;
	target1.writeFrameBufferObject = target1.readFrameBufferObject;
	target1.readFrameBufferObject = target1.tmpFBO;
	target1.tmpTex = target1.writeToTexture;
	target1.writeToTexture = target1.readFromTexture;
	target1.readFromTexture = target1.tmpTex;
};
$hxClasses["GPUParticles"] = GPUParticles;
GPUParticles.__name__ = ["GPUParticles"];
GPUParticles.prototype = {
	step: function(dt) {
		var _this = this.velocityStepShader.dt;
		_this.dirty = true;
		_this.data = dt;
		var _this1 = this.velocityStepShader.positionData;
		_this1.dirty = true;
		_this1.data = this.positionData.readFromTexture;
		var _this2 = this.velocityStepShader.velocityData;
		_this2.dirty = true;
		_this2.data = this.velocityData.readFromTexture;
		var shader = this.velocityStepShader;
		var target = this.velocityData;
		snow_modules_opengl_web_GL.gl.viewport(0,0,target.width,target.height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		target.tmpFBO = target.writeFrameBufferObject;
		target.writeFrameBufferObject = target.readFrameBufferObject;
		target.readFrameBufferObject = target.tmpFBO;
		target.tmpTex = target.writeToTexture;
		target.writeToTexture = target.readFromTexture;
		target.readFromTexture = target.tmpTex;
		var _this3 = this.positionStepShader.dt;
		_this3.dirty = true;
		_this3.data = dt;
		var _this4 = this.positionStepShader.positionData;
		_this4.dirty = true;
		_this4.data = this.positionData.readFromTexture;
		var _this5 = this.positionStepShader.velocityData;
		_this5.dirty = true;
		_this5.data = this.velocityData.readFromTexture;
		var shader1 = this.positionStepShader;
		var target1 = this.positionData;
		snow_modules_opengl_web_GL.gl.viewport(0,0,target1.width,target1.height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target1.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
		if(shader1._active) {
			var _g5 = 0;
			var _g14 = shader1._uniforms;
			while(_g5 < _g14.length) {
				var u2 = _g14[_g5];
				++_g5;
				u2.apply();
			}
			var offset2 = 0;
			var _g15 = 0;
			var _g6 = shader1._attributes.length;
			while(_g15 < _g6) {
				var att2 = shader1._attributes[_g15++];
				var location2 = att2.location;
				if(location2 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,shader1._aStride,offset2);
				}
				offset2 += att2.byteSize;
			}
		} else {
			if(!shader1._ready) {
				shader1.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader1._prog);
			var _g7 = 0;
			var _g16 = shader1._uniforms;
			while(_g7 < _g16.length) {
				var u3 = _g16[_g7];
				++_g7;
				u3.apply();
			}
			var offset3 = 0;
			var _g17 = 0;
			var _g8 = shader1._attributes.length;
			while(_g17 < _g8) {
				var att3 = shader1._attributes[_g17++];
				var location3 = att3.location;
				if(location3 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,shader1._aStride,offset3);
				}
				offset3 += att3.byteSize;
			}
			shader1._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader1.deactivate();
		target1.tmpFBO = target1.writeFrameBufferObject;
		target1.writeFrameBufferObject = target1.readFrameBufferObject;
		target1.readFrameBufferObject = target1.tmpFBO;
		target1.tmpTex = target1.writeToTexture;
		target1.writeToTexture = target1.readFromTexture;
		target1.readFromTexture = target1.tmpTex;
	}
	,reset: function() {
		var shader = this.initialPositionShader;
		var target = this.positionData;
		snow_modules_opengl_web_GL.gl.viewport(0,0,target.width,target.height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		target.tmpFBO = target.writeFrameBufferObject;
		target.writeFrameBufferObject = target.readFrameBufferObject;
		target.readFrameBufferObject = target.tmpFBO;
		target.tmpTex = target.writeToTexture;
		target.writeToTexture = target.readFromTexture;
		target.readFromTexture = target.tmpTex;
		var shader1 = this.initialVelocityShader;
		var target1 = this.velocityData;
		snow_modules_opengl_web_GL.gl.viewport(0,0,target1.width,target1.height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target1.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
		if(shader1._active) {
			var _g5 = 0;
			var _g14 = shader1._uniforms;
			while(_g5 < _g14.length) {
				var u2 = _g14[_g5];
				++_g5;
				u2.apply();
			}
			var offset2 = 0;
			var _g15 = 0;
			var _g6 = shader1._attributes.length;
			while(_g15 < _g6) {
				var att2 = shader1._attributes[_g15++];
				var location2 = att2.location;
				if(location2 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,shader1._aStride,offset2);
				}
				offset2 += att2.byteSize;
			}
		} else {
			if(!shader1._ready) {
				shader1.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader1._prog);
			var _g7 = 0;
			var _g16 = shader1._uniforms;
			while(_g7 < _g16.length) {
				var u3 = _g16[_g7];
				++_g7;
				u3.apply();
			}
			var offset3 = 0;
			var _g17 = 0;
			var _g8 = shader1._attributes.length;
			while(_g17 < _g8) {
				var att3 = shader1._attributes[_g17++];
				var location3 = att3.location;
				if(location3 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,shader1._aStride,offset3);
				}
				offset3 += att3.byteSize;
			}
			shader1._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader1.deactivate();
		target1.tmpFBO = target1.writeFrameBufferObject;
		target1.writeFrameBufferObject = target1.readFrameBufferObject;
		target1.readFrameBufferObject = target1.tmpFBO;
		target1.tmpTex = target1.writeToTexture;
		target1.writeToTexture = target1.readFromTexture;
		target1.readFromTexture = target1.tmpTex;
	}
	,setCount: function(newCount) {
		var dataWidth = Math.ceil(Math.sqrt(newCount));
		if(this.positionData == null) {
			var params = { channelType : 6408, dataType : this.floatData?this.floatDataType:5121, filter : 9728};
			this.positionData = new gltoolbox_render_RenderTarget2Phase(dataWidth,dataWidth,function(width,height) {
				return gltoolbox_TextureTools.createTexture(width,height,params);
			});
		} else {
			this.positionData.resize(dataWidth,dataWidth);
		}
		if(this.velocityData == null) {
			var params1 = { channelType : 6408, dataType : this.floatData?this.floatDataType:5121, filter : 9728};
			this.velocityData = new gltoolbox_render_RenderTarget2Phase(dataWidth,dataWidth,function(width1,height1) {
				return gltoolbox_TextureTools.createTexture(width1,height1,params1);
			});
		} else {
			this.velocityData.resize(dataWidth,dataWidth);
		}
		if(this.particleUVs != null) {
			snow_modules_opengl_web_GL.gl.deleteBuffer(this.particleUVs);
		}
		this.particleUVs = snow_modules_opengl_web_GL.gl.createBuffer();
		var arrayUVs = new Float32Array(dataWidth * dataWidth * 2);
		var index;
		var _g1 = 0;
		while(_g1 < dataWidth) {
			var i = _g1++;
			var _g3 = 0;
			while(_g3 < dataWidth) {
				var j = _g3++;
				index = (i * dataWidth + j) * 2;
				arrayUVs[index] = i / dataWidth;
				arrayUVs[++index] = j / dataWidth;
			}
		}
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.particleUVs);
		snow_modules_opengl_web_GL.gl.bufferData(34962,arrayUVs,35044);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,null);
		return this.count = newCount;
	}
	,renderShaderTo: function(shader,target) {
		snow_modules_opengl_web_GL.gl.viewport(0,0,target.width,target.height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		target.tmpFBO = target.writeFrameBufferObject;
		target.writeFrameBufferObject = target.readFrameBufferObject;
		target.readFrameBufferObject = target.tmpFBO;
		target.tmpTex = target.writeToTexture;
		target.writeToTexture = target.readFromTexture;
		target.readFromTexture = target.tmpTex;
	}
	,get_dragCoefficient: function() {
		return this.velocityStepShader.dragCoefficient.data;
	}
	,get_flowScaleX: function() {
		return this.velocityStepShader.flowScale.data.x;
	}
	,get_flowScaleY: function() {
		return this.velocityStepShader.flowScale.data.y;
	}
	,get_flowVelocityField: function() {
		return this.velocityStepShader.flowVelocityField.data;
	}
	,set_dragCoefficient: function(v) {
		var _this = this.velocityStepShader.dragCoefficient;
		_this.dirty = true;
		return _this.data = v;
	}
	,set_flowScaleX: function(v) {
		return this.velocityStepShader.flowScale.data.x = v;
	}
	,set_flowScaleY: function(v) {
		return this.velocityStepShader.flowScale.data.y = v;
	}
	,set_flowVelocityField: function(v) {
		var _this = this.velocityStepShader.flowVelocityField;
		_this.dirty = true;
		return _this.data = v;
	}
	,set_flowIsFloat: function(v) {
		return this.velocityStepShader.set_FLOAT_VELOCITY(v?"true":"false");
	}
	,__class__: GPUParticles
};
var PlaneTexture = function() {
	shaderblox_ShaderBase.call(this);
};
$hxClasses["PlaneTexture"] = PlaneTexture;
PlaneTexture.__name__ = ["PlaneTexture"];
PlaneTexture.__super__ = shaderblox_ShaderBase;
PlaneTexture.prototype = $extend(shaderblox_ShaderBase.prototype,{
	createProperties: function() {
		shaderblox_ShaderBase.prototype.createProperties.call(this);
		var instance = new shaderblox_attributes_FloatAttribute("vertexPosition",0,2);
		this.vertexPosition = instance;
		this._attributes.push(instance);
		this._aStride += 8;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nattribute vec2 vertexPosition;\n\tvarying vec2 texelCoord;\n\n\tvoid main(){\n\t\ttexelCoord = vertexPosition;\n\t\tgl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );\n\t}\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nvarying vec2 texelCoord;\n";
	}
	,__class__: PlaneTexture
});
var ParticleBase = function() {
	PlaneTexture.call(this);
};
$hxClasses["ParticleBase"] = ParticleBase;
ParticleBase.__name__ = ["ParticleBase"];
ParticleBase.__super__ = PlaneTexture;
ParticleBase.prototype = $extend(PlaneTexture.prototype,{
	createProperties: function() {
		PlaneTexture.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UFloat("dt",null);
		this.dt = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UTexture("positionData",null,false);
		this.positionData = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UTexture("velocityData",null,false);
		this.velocityData = instance2;
		this._uniforms.push(instance2);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nattribute vec2 vertexPosition;\n\tvarying vec2 texelCoord;\n\n\tvoid main(){\n\t\ttexelCoord = vertexPosition;\n\t\tgl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );\n\t}\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nvarying vec2 texelCoord;\n\nuniform float dt;\n\tuniform sampler2D positionData;\n\tuniform sampler2D velocityData;\n";
	}
	,__class__: ParticleBase
});
var VelocityStep = function() {
	ParticleBase.call(this);
};
$hxClasses["VelocityStep"] = VelocityStep;
VelocityStep.__name__ = ["VelocityStep"];
VelocityStep.__super__ = ParticleBase;
VelocityStep.prototype = $extend(ParticleBase.prototype,{
	set_PACK_FLUID_VELOCITY_SCALE: function(value) {
		this.PACK_FLUID_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_FLUID_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_PACK_FLUID_PRESSURE_SCALE: function(value) {
		this.PACK_FLUID_PRESSURE_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_FLUID_PRESSURE_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_PACK_FLUID_DIVERGENCE_SCALE: function(value) {
		this.PACK_FLUID_DIVERGENCE_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_FLUID_DIVERGENCE_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_VELOCITY: function(value) {
		this.FLOAT_VELOCITY = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_VELOCITY",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_PRESSURE: function(value) {
		this.FLOAT_PRESSURE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_PRESSURE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_DIVERGENCE: function(value) {
		this.FLOAT_DIVERGENCE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_DIVERGENCE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_FLUID_VELOCITY_SCALE: function(value) {
		this.INV_PACK_FLUID_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_FLUID_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_FLUID_PRESSURE_SCALE: function(value) {
		this.INV_PACK_FLUID_PRESSURE_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_FLUID_PRESSURE_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_FLUID_DIVERGENCE_SCALE: function(value) {
		this.INV_PACK_FLUID_DIVERGENCE_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_FLUID_DIVERGENCE_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.PACK_PARTICLE_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_DATA: function(value) {
		this.FLOAT_DATA = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_DATA",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.INV_PACK_PARTICLE_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,createProperties: function() {
		ParticleBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UFloat("dragCoefficient",null);
		this.dragCoefficient = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UVec2("flowScale",null);
		this.flowScale = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UTexture("flowVelocityField",null,false);
		this.flowVelocityField = instance2;
		this._uniforms.push(instance2);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nattribute vec2 vertexPosition;\n\tvarying vec2 texelCoord;\n\n\tvoid main(){\n\t\ttexelCoord = vertexPosition;\n\t\tgl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );\n\t}\n\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nvarying vec2 texelCoord;\n\nuniform float dt;\n\tuniform sampler2D positionData;\n\tuniform sampler2D velocityData;\n\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\nconst float PACK_PARTICLE_VELOCITY_SCALE = 0.05; \n\r\nconst bool FLOAT_DATA = true;\r\n\r\n\nvec4 packParticlePosition(in vec2 p){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(p.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 np = (p)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(np.x), packFloat8bitRG(np.y));\r\n\t}\r\n}\r\n\r\nvec2 unpackParticlePosition(in vec4 pp){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pp.xy;\r\n\t}else{\r\n\t    vec2 np = vec2(unpackFloat8bitRG(pp.xy), unpackFloat8bitRG(pp.zw));\r\n\t    return (2.0*np.xy - 1.0);\r\n\t}\r\n}\r\n\r\n\nvec4 packParticleVelocity(in vec2 v){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(v.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 nv = (v * PACK_PARTICLE_VELOCITY_SCALE)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n\t}\r\n\r\n}\r\n\r\nvec2 unpackParticleVelocity(in vec4 pv){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pv.xy;\r\n\t}else{\r\n\t    const float INV_PACK_PARTICLE_VELOCITY_SCALE = 1./PACK_PARTICLE_VELOCITY_SCALE;\r\n\t    vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n\t    return (2.0*nv.xy - 1.0)* INV_PACK_PARTICLE_VELOCITY_SCALE;\r\n\t}\r\n}\r\n\n\n\tuniform float dragCoefficient;\n\tuniform vec2 flowScale;\n\tuniform sampler2D flowVelocityField;\n\n\tvoid main(){\n\t\t\n\t\tvec2 p = unpackParticlePosition(texture2D(positionData, texelCoord));\n\t\tvec2 v = unpackParticleVelocity(texture2D(velocityData, texelCoord));\n\n\t\t\n\t\tvec2 vf = unpackFluidVelocity(texture2D(flowVelocityField, p*.5 + .5)) * flowScale;\n\n\t\t\n\t\tv += (vf - v) * dragCoefficient;\n\n\t\t\n\t\tgl_FragColor = packParticleVelocity(v);\n\n\t}\n";
	}
	,__class__: VelocityStep
});
var PositionStep = function() {
	ParticleBase.call(this);
};
$hxClasses["PositionStep"] = PositionStep;
PositionStep.__name__ = ["PositionStep"];
PositionStep.__super__ = ParticleBase;
PositionStep.prototype = $extend(ParticleBase.prototype,{
	set_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.PACK_PARTICLE_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_DATA: function(value) {
		this.FLOAT_DATA = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_DATA",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.INV_PACK_PARTICLE_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,createProperties: function() {
		ParticleBase.prototype.createProperties.call(this);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nattribute vec2 vertexPosition;\n\tvarying vec2 texelCoord;\n\n\tvoid main(){\n\t\ttexelCoord = vertexPosition;\n\t\tgl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );\n\t}\n\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nvarying vec2 texelCoord;\n\nuniform float dt;\n\tuniform sampler2D positionData;\n\tuniform sampler2D velocityData;\n\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_PARTICLE_VELOCITY_SCALE = 0.05; \n\r\nconst bool FLOAT_DATA = true;\r\n\r\n\nvec4 packParticlePosition(in vec2 p){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(p.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 np = (p)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(np.x), packFloat8bitRG(np.y));\r\n\t}\r\n}\r\n\r\nvec2 unpackParticlePosition(in vec4 pp){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pp.xy;\r\n\t}else{\r\n\t    vec2 np = vec2(unpackFloat8bitRG(pp.xy), unpackFloat8bitRG(pp.zw));\r\n\t    return (2.0*np.xy - 1.0);\r\n\t}\r\n}\r\n\r\n\nvec4 packParticleVelocity(in vec2 v){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(v.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 nv = (v * PACK_PARTICLE_VELOCITY_SCALE)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n\t}\r\n\r\n}\r\n\r\nvec2 unpackParticleVelocity(in vec4 pv){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pv.xy;\r\n\t}else{\r\n\t    const float INV_PACK_PARTICLE_VELOCITY_SCALE = 1./PACK_PARTICLE_VELOCITY_SCALE;\r\n\t    vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n\t    return (2.0*nv.xy - 1.0)* INV_PACK_PARTICLE_VELOCITY_SCALE;\r\n\t}\r\n}\r\n\n\n\tvoid main(){\n\t\t\n\t\tvec2 p = unpackParticlePosition(texture2D(positionData, texelCoord));\n\t\tvec2 v = unpackParticleVelocity(texture2D(velocityData, texelCoord));\n\n\t\t\n\t\tp += v * dt;\n\n\t\t\n\t\tgl_FragColor = packParticlePosition(p);\n\t}\n";
	}
	,__class__: PositionStep
});
var InitialPosition = function() {
	PlaneTexture.call(this);
};
$hxClasses["InitialPosition"] = InitialPosition;
InitialPosition.__name__ = ["InitialPosition"];
InitialPosition.__super__ = PlaneTexture;
InitialPosition.prototype = $extend(PlaneTexture.prototype,{
	set_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.PACK_PARTICLE_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_DATA: function(value) {
		this.FLOAT_DATA = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_DATA",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.INV_PACK_PARTICLE_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,createProperties: function() {
		PlaneTexture.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UFloat("jitterAmount",null);
		this.jitterAmount = instance;
		this._uniforms.push(instance);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nattribute vec2 vertexPosition;\n\tvarying vec2 texelCoord;\n\n\tvoid main(){\n\t\ttexelCoord = vertexPosition;\n\t\tgl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );\n\t}\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nvarying vec2 texelCoord;\n\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_PARTICLE_VELOCITY_SCALE = 0.05; \n\r\nconst bool FLOAT_DATA = true;\r\n\r\n\nvec4 packParticlePosition(in vec2 p){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(p.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 np = (p)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(np.x), packFloat8bitRG(np.y));\r\n\t}\r\n}\r\n\r\nvec2 unpackParticlePosition(in vec4 pp){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pp.xy;\r\n\t}else{\r\n\t    vec2 np = vec2(unpackFloat8bitRG(pp.xy), unpackFloat8bitRG(pp.zw));\r\n\t    return (2.0*np.xy - 1.0);\r\n\t}\r\n}\r\n\r\n\nvec4 packParticleVelocity(in vec2 v){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(v.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 nv = (v * PACK_PARTICLE_VELOCITY_SCALE)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n\t}\r\n\r\n}\r\n\r\nvec2 unpackParticleVelocity(in vec4 pv){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pv.xy;\r\n\t}else{\r\n\t    const float INV_PACK_PARTICLE_VELOCITY_SCALE = 1./PACK_PARTICLE_VELOCITY_SCALE;\r\n\t    vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n\t    return (2.0*nv.xy - 1.0)* INV_PACK_PARTICLE_VELOCITY_SCALE;\r\n\t}\r\n}\r\n\nfloat rand(vec2 co){\r\n\treturn fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\r\n}\n\n\n\tuniform float jitterAmount;\n\n\tvoid main(){\n\t\tvec2 initialPosition = vec2(texelCoord.x, texelCoord.y) * 2.0 - 1.0;\n\t\t\n\t\tinitialPosition.x += rand(initialPosition)*jitterAmount;\n\t\tinitialPosition.y += rand(initialPosition + 0.3415)*jitterAmount;\n\n\t\tgl_FragColor = packParticlePosition(initialPosition);\n\t}\n";
	}
	,__class__: InitialPosition
});
var InitialVelocity = function() {
	PlaneTexture.call(this);
};
$hxClasses["InitialVelocity"] = InitialVelocity;
InitialVelocity.__name__ = ["InitialVelocity"];
InitialVelocity.__super__ = PlaneTexture;
InitialVelocity.prototype = $extend(PlaneTexture.prototype,{
	set_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.PACK_PARTICLE_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_DATA: function(value) {
		this.FLOAT_DATA = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"FLOAT_DATA",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.INV_PACK_PARTICLE_VELOCITY_SCALE = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"INV_PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,createProperties: function() {
		PlaneTexture.prototype.createProperties.call(this);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nattribute vec2 vertexPosition;\n\tvarying vec2 texelCoord;\n\n\tvoid main(){\n\t\ttexelCoord = vertexPosition;\n\t\tgl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );\n\t}\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nvarying vec2 texelCoord;\n\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_PARTICLE_VELOCITY_SCALE = 0.05; \n\r\nconst bool FLOAT_DATA = true;\r\n\r\n\nvec4 packParticlePosition(in vec2 p){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(p.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 np = (p)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(np.x), packFloat8bitRG(np.y));\r\n\t}\r\n}\r\n\r\nvec2 unpackParticlePosition(in vec4 pp){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pp.xy;\r\n\t}else{\r\n\t    vec2 np = vec2(unpackFloat8bitRG(pp.xy), unpackFloat8bitRG(pp.zw));\r\n\t    return (2.0*np.xy - 1.0);\r\n\t}\r\n}\r\n\r\n\nvec4 packParticleVelocity(in vec2 v){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(v.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 nv = (v * PACK_PARTICLE_VELOCITY_SCALE)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n\t}\r\n\r\n}\r\n\r\nvec2 unpackParticleVelocity(in vec4 pv){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pv.xy;\r\n\t}else{\r\n\t    const float INV_PACK_PARTICLE_VELOCITY_SCALE = 1./PACK_PARTICLE_VELOCITY_SCALE;\r\n\t    vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n\t    return (2.0*nv.xy - 1.0)* INV_PACK_PARTICLE_VELOCITY_SCALE;\r\n\t}\r\n}\r\n\n\n\tvoid main(){\n\t\tgl_FragColor = packParticleVelocity(vec2(0));\n\t}\n";
	}
	,__class__: InitialVelocity
});
var RenderParticles = function() {
	shaderblox_ShaderBase.call(this);
};
$hxClasses["RenderParticles"] = RenderParticles;
RenderParticles.__name__ = ["RenderParticles"];
RenderParticles.__super__ = shaderblox_ShaderBase;
RenderParticles.prototype = $extend(shaderblox_ShaderBase.prototype,{
	set_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.PACK_PARTICLE_VELOCITY_SCALE = value;
		this._vertSource = shaderblox_glsl_GLSLTools.injectConstValue(this._vertSource,"PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_FLOAT_DATA: function(value) {
		this.FLOAT_DATA = value;
		this._vertSource = shaderblox_glsl_GLSLTools.injectConstValue(this._vertSource,"FLOAT_DATA",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,set_INV_PACK_PARTICLE_VELOCITY_SCALE: function(value) {
		this.INV_PACK_PARTICLE_VELOCITY_SCALE = value;
		this._vertSource = shaderblox_glsl_GLSLTools.injectConstValue(this._vertSource,"INV_PACK_PARTICLE_VELOCITY_SCALE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,createProperties: function() {
		shaderblox_ShaderBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("positionData",null,false);
		this.positionData = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UTexture("velocityData",null,false);
		this.velocityData = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_attributes_FloatAttribute("particleUV",0,2);
		this.particleUV = instance2;
		this._attributes.push(instance2);
		this._aStride += 8;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_PARTICLE_VELOCITY_SCALE = 0.05; \n\r\nconst bool FLOAT_DATA = true;\r\n\r\n\nvec4 packParticlePosition(in vec2 p){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(p.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 np = (p)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(np.x), packFloat8bitRG(np.y));\r\n\t}\r\n}\r\n\r\nvec2 unpackParticlePosition(in vec4 pp){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pp.xy;\r\n\t}else{\r\n\t    vec2 np = vec2(unpackFloat8bitRG(pp.xy), unpackFloat8bitRG(pp.zw));\r\n\t    return (2.0*np.xy - 1.0);\r\n\t}\r\n}\r\n\r\n\nvec4 packParticleVelocity(in vec2 v){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(v.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 nv = (v * PACK_PARTICLE_VELOCITY_SCALE)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n\t}\r\n\r\n}\r\n\r\nvec2 unpackParticleVelocity(in vec4 pv){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pv.xy;\r\n\t}else{\r\n\t    const float INV_PACK_PARTICLE_VELOCITY_SCALE = 1./PACK_PARTICLE_VELOCITY_SCALE;\r\n\t    vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n\t    return (2.0*nv.xy - 1.0)* INV_PACK_PARTICLE_VELOCITY_SCALE;\r\n\t}\r\n}\r\n\n\n\tuniform sampler2D positionData;\n\tuniform sampler2D velocityData;\n\n\tattribute vec2 particleUV;\n\tvarying vec4 color;\n\n\tvoid main(){\n\t\tvec2 p = unpackParticlePosition(texture2D(positionData, particleUV));\n\t\tvec2 v = unpackParticleVelocity(texture2D(velocityData, particleUV));\n\n\t\tgl_PointSize = 1.0;\n\t\tgl_Position = vec4(p, 0.0, 1.0);\n\n\t\tcolor = vec4(1.0, 1.0, 1.0, 1.0);\n\t}\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nvarying vec4 color;\n\n\tvoid main(){\n\t\tgl_FragColor = vec4(color);\n\t}\n";
	}
	,__class__: RenderParticles
});
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	var _g = s.length;
	switch(_g) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d["setTime"](0);
		d["setUTCHours"](k[0]);
		d["setUTCMinutes"](k[1]);
		d["setUTCSeconds"](k[2]);
		return d;
	case 10:
		var k1 = s.split("-");
		return new Date(k1[0],k1[1] - 1,k1[2],0,0,0);
	case 19:
		var k2 = s.split(" ");
		var y = k2[0].split("-");
		var t = k2[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw new js__$Boot_HaxeError("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Lambda = function() { };
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.fold = function(it,f,first) {
	var x = $iterator(it)();
	while(x.hasNext()) first = f(x.next(),first);
	return first;
};
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	add: function(item) {
		var x = new _$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	,push: function(item) {
		var x = new _$List_ListNode(item,this.h);
		this.h = x;
		if(this.q == null) {
			this.q = x;
		}
		this.length++;
	}
	,remove: function(v) {
		var prev = null;
		var l = this.h;
		while(l != null) {
			if(l.item == v) {
				if(prev == null) {
					this.h = l.next;
				} else {
					prev.next = l.next;
				}
				if(this.q == l) {
					this.q = prev;
				}
				this.length--;
				return true;
			}
			prev = l;
			l = l.next;
		}
		return false;
	}
	,iterator: function() {
		return new _$List_ListIterator(this.h);
	}
	,__class__: List
};
var _$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
$hxClasses["_List.ListNode"] = _$List_ListNode;
_$List_ListNode.__name__ = ["_List","ListNode"];
_$List_ListNode.prototype = {
	__class__: _$List_ListNode
};
var _$List_ListIterator = function(head) {
	this.head = head;
};
$hxClasses["_List.ListIterator"] = _$List_ListIterator;
_$List_ListIterator.__name__ = ["_List","ListIterator"];
_$List_ListIterator.prototype = {
	hasNext: function() {
		return this.head != null;
	}
	,next: function() {
		var val = this.head.item;
		this.head = this.head.next;
		return val;
	}
	,__class__: _$List_ListIterator
};
var snow_App = function() {
	this.next_tick = 0;
	this.fixed_overflow = 0.0;
	this.fixed_frame_time = 0.0167;
	this.fixed_timestep = false;
	this.fixed_alpha = 1.0;
	this.sim_time = 0;
	this.sim_delta = 0.016666666666666666;
	this.frame_max_delta = 0.25;
	this.frame_delta = 0.016666666666666666;
	this.frame_start_prev = 0.0;
	this.frame_start = 0.016666666666666666;
	this.tick_delta = 0.016666666666666666;
	this.tick_start_prev = 0.0;
	this.tick_start = 0.016666666666666666;
	this.update_rate = 0;
	this.fixed_delta = 0;
	this.timescale = 1;
};
$hxClasses["snow.App"] = snow_App;
snow_App.__name__ = ["snow","App"];
snow_App.main = function() {
	new snow_Snow(new Main());
};
snow_App.prototype = {
	config: function(_config) {
		return _config;
	}
	,ready: function() {
	}
	,update: function(dt) {
	}
	,tick: function(dt) {
	}
	,ondestroy: function() {
	}
	,onevent: function(event) {
	}
	,ontickstart: function() {
	}
	,ontickend: function() {
	}
	,onkeydown: function(keycode,scancode,repeat,mod,timestamp,window_id) {
	}
	,onkeyup: function(keycode,scancode,repeat,mod,timestamp,window_id) {
	}
	,ontextinput: function(text,start,length,type,timestamp,window_id) {
	}
	,onmousedown: function(x,y,button,timestamp,window_id) {
	}
	,onmouseup: function(x,y,button,timestamp,window_id) {
	}
	,onmousewheel: function(x,y,timestamp,window_id) {
	}
	,onmousemove: function(x,y,xrel,yrel,timestamp,window_id) {
	}
	,ontouchdown: function(x,y,dx,dy,touch_id,timestamp) {
	}
	,ontouchup: function(x,y,dx,dy,touch_id,timestamp) {
	}
	,ontouchmove: function(x,y,dx,dy,touch_id,timestamp) {
	}
	,ongamepadaxis: function(gamepad,axis,value,timestamp) {
	}
	,ongamepaddown: function(gamepad,button,value,timestamp) {
	}
	,ongamepadup: function(gamepad,button,value,timestamp) {
	}
	,ongamepaddevice: function(gamepad,id,type,timestamp) {
	}
	,internal_init: function() {
		this.sim_time = 0;
		this.fixed_frame_time = 0.016666666666666666;
		this.tick_start = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
		this.tick_start_prev = this.tick_start - this.fixed_frame_time;
		this.tick_delta = this.fixed_frame_time;
		this.frame_start = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
		this.frame_start_prev = this.frame_start - this.fixed_frame_time;
		this.frame_delta = this.sim_delta = this.fixed_frame_time;
	}
	,internal_tick: function() {
		this.tick_start = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
		this.tick_delta = this.tick_start - this.tick_start_prev;
		this.tick_start_prev = this.tick_start;
		if(this.fixed_timestep) {
			this.frame_start = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
			this.frame_delta = this.frame_start - this.frame_start_prev;
			this.frame_start_prev = this.frame_start;
			this.sim_delta = this.frame_delta * this.timescale;
			if(this.sim_delta > this.frame_max_delta) {
				this.sim_delta = this.frame_max_delta;
			}
			this.fixed_overflow += this.sim_delta;
			var _slice = this.fixed_frame_time * this.timescale;
			while(this.fixed_overflow >= this.fixed_frame_time) {
				this.update(_slice);
				this.sim_time += _slice;
				this.fixed_overflow -= _slice;
			}
			this.fixed_alpha = this.fixed_overflow / this.fixed_frame_time;
		} else {
			this.internal_tick_default();
		}
		this.tick(this.tick_delta);
	}
	,internal_tick_default: function() {
		if(this.update_rate != 0) {
			if(window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start < this.next_tick) {
				return;
			}
			this.next_tick = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start + this.update_rate;
		}
		this.frame_start = this.tick_start;
		this.frame_delta = this.frame_start - this.frame_start_prev;
		this.frame_start_prev = this.frame_start;
		if(this.frame_delta > this.frame_max_delta) {
			this.frame_delta = this.frame_max_delta;
		}
		var _used_delta = this.fixed_delta == 0?this.frame_delta:this.fixed_delta;
		_used_delta *= this.timescale;
		this.sim_delta = _used_delta;
		this.sim_time += _used_delta;
		this.update(_used_delta);
	}
	,internal_tick_fixed_timestep: function() {
		this.frame_start = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
		this.frame_delta = this.frame_start - this.frame_start_prev;
		this.frame_start_prev = this.frame_start;
		this.sim_delta = this.frame_delta * this.timescale;
		if(this.sim_delta > this.frame_max_delta) {
			this.sim_delta = this.frame_max_delta;
		}
		this.fixed_overflow += this.sim_delta;
		var _slice = this.fixed_frame_time * this.timescale;
		while(this.fixed_overflow >= this.fixed_frame_time) {
			this.update(_slice);
			this.sim_time += _slice;
			this.fixed_overflow -= _slice;
		}
		this.fixed_alpha = this.fixed_overflow / this.fixed_frame_time;
	}
	,__class__: snow_App
};
var Main = $hx_exports["Main"] = function() {
	this.rshiftDown = false;
	this.lshiftDown = false;
	this.qualityDirection = 0;
	this.pointSize = 1;
	this.simulation_enabled = true;
	this.renderFluidEnabled = true;
	this.renderParticlesEnabled = true;
	this.lastMouseFluid = new shaderblox_uniforms_Vector2();
	this.lastMouse = new shaderblox_uniforms_Vector2();
	this.mouseFluid = new shaderblox_uniforms_Vector2();
	this.mouse = new shaderblox_uniforms_Vector2();
	this.lastMousePointKnown = false;
	this.mousePointKnown = false;
	this.isMouseDown = false;
	this.screenBuffer = null;
	this.textureQuad = null;
	this.gl = snow_modules_opengl_web_GL;
	snow_App.call(this);
	Main.instance = this;
	this.performanceMonitor = new PerformanceMonitor(35,null,2000);
	this.set_simulationQuality(SimulationQuality.Medium);
	if(new EReg("(iPad|iPhone|iPod|Android)","g").match(window.navigator.userAgent)) {
		this.set_simulationQuality(SimulationQuality.iOS);
	}
	this.performanceMonitor.fpsTooLowCallback = $bind(this,this.lowerQualityRequired);
	var urlParams = js_Web.getParams();
	if(__map_reserved["q"] != null?urlParams.existsReserved("q"):urlParams.h.hasOwnProperty("q")) {
		var q = StringTools.trim((__map_reserved["q"] != null?urlParams.getReserved("q"):urlParams.h["q"]).toLowerCase());
		var _g = 0;
		var _g1 = SimulationQuality.__empty_constructs__;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			if(q == e[0].toLowerCase()) {
				this.set_simulationQuality(e);
				this.performanceMonitor.fpsTooLowCallback = null;
				break;
			}
		}
	}
	if(__map_reserved["iterations"] != null?urlParams.existsReserved("iterations"):urlParams.h.hasOwnProperty("iterations")) {
		var iterationsParam = Std.parseInt(__map_reserved["iterations"] != null?urlParams.getReserved("iterations"):urlParams.h["iterations"]);
		if(typeof(iterationsParam) == "number" && ((iterationsParam | 0) === iterationsParam)) {
			this.set_fluidIterations(iterationsParam);
		}
	}
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.__super__ = snow_App;
Main.prototype = $extend(snow_App.prototype,{
	config: function(config) {
		config.runtime.prevent_default_context_menu = false;
		config.window.borderless = true;
		config.window.fullscreen = true;
		config.window.title = "GPU Fluid";
		config.window.width = window.innerWidth;
		config.window.height = window.innerHeight;
		config.render.antialiasing = 0;
		return config;
	}
	,ready: function() {
		this.init();
	}
	,init: function() {
		snow_modules_opengl_web_GL.gl.disable(2929);
		snow_modules_opengl_web_GL.gl.disable(2884);
		snow_modules_opengl_web_GL.gl.disable(3024);
		this.textureQuad = gltoolbox_GeometryTools.createQuad(0,0,1,1);
		var params = { channelType : 6407, dataType : 5121, filter : this.offScreenFilter};
		var tmp = function(width,height) {
			return gltoolbox_TextureTools.createTexture(width,height,params);
		};
		this.offScreenTarget = new gltoolbox_render_RenderTarget(Math.round(this.app.runtime.window.width * this.offScreenScale),Math.round(this.app.runtime.window.height * this.offScreenScale),tmp);
		this.screenTextureShader = new ScreenTexture();
		this.renderParticlesShader = new ColorParticleMotion();
		this.updateDyeShader = new MouseDye();
		this.mouseForceShader = new MouseForce();
		var _this = this.updateDyeShader.mouse;
		_this.dirty = true;
		_this.data = this.mouseFluid;
		var _this1 = this.updateDyeShader.lastMouse;
		_this1.dirty = true;
		_this1.data = this.lastMouseFluid;
		var _this2 = this.mouseForceShader.mouse;
		_this2.dirty = true;
		_this2.data = this.mouseFluid;
		var _this3 = this.mouseForceShader.lastMouse;
		_this3.dirty = true;
		_this3.data = this.lastMouseFluid;
		this.updatePointSize();
		this.fluid = new GPUFluid(Math.round(this.app.runtime.window.width * this.fluidScale),Math.round(this.app.runtime.window.height * this.fluidScale),32,this.fluidIterations);
		var _this4 = this.fluid;
		_this4.updateDyeShader = this.updateDyeShader;
		var _this5 = _this4.updateDyeShader.dx;
		_this5.dirty = true;
		_this5.data = _this4.cellSize;
		var shader = _this4.updateDyeShader;
		if(shader != null) {
			var _this6 = shader.aspectRatio;
			_this6.dirty = true;
			_this6.data = _this4.aspectRatio;
			shader.invresolution.data.x = 1 / _this4.width;
			shader.invresolution.data.y = 1 / _this4.height;
			var v = _this4.floatVelocity?"true":"false";
			if(shader.FLOAT_VELOCITY != v) {
				shader.set_FLOAT_VELOCITY(v);
			}
			if(_this4.floatPressure) {
				v = "true";
			} else {
				v = "false";
			}
			if(shader.FLOAT_PRESSURE != v) {
				shader.set_FLOAT_PRESSURE(v);
			}
			if(_this4.floatDivergence) {
				v = "true";
			} else {
				v = "false";
			}
			if(shader.FLOAT_DIVERGENCE != v) {
				shader.set_FLOAT_DIVERGENCE(v);
			}
		}
		var _this7 = this.fluid;
		_this7.applyForcesShader = this.mouseForceShader;
		var _this8 = _this7.applyForcesShader.dx;
		_this8.dirty = true;
		_this8.data = _this7.cellSize;
		var shader1 = _this7.applyForcesShader;
		if(shader1 != null) {
			var _this9 = shader1.aspectRatio;
			_this9.dirty = true;
			_this9.data = _this7.aspectRatio;
			shader1.invresolution.data.x = 1 / _this7.width;
			shader1.invresolution.data.y = 1 / _this7.height;
			var v1 = _this7.floatVelocity?"true":"false";
			if(shader1.FLOAT_VELOCITY != v1) {
				shader1.set_FLOAT_VELOCITY(v1);
			}
			if(_this7.floatPressure) {
				v1 = "true";
			} else {
				v1 = "false";
			}
			if(shader1.FLOAT_PRESSURE != v1) {
				shader1.set_FLOAT_PRESSURE(v1);
			}
			if(_this7.floatDivergence) {
				v1 = "true";
			} else {
				v1 = "false";
			}
			if(shader1.FLOAT_DIVERGENCE != v1) {
				shader1.set_FLOAT_DIVERGENCE(v1);
			}
		}
		this.particles = new GPUParticles(this.particleCount);
		this.particles.velocityStepShader.flowScale.data.x = 1 / (this.fluid.cellSize * this.fluid.aspectRatio);
		this.particles.velocityStepShader.flowScale.data.y = 1 / this.fluid.cellSize;
		this.particles.velocityStepShader.set_FLOAT_VELOCITY(this.fluid.floatVelocity?"true":"false");
		var _this10 = this.particles.velocityStepShader.dragCoefficient;
		_this10.dirty = true;
		_this10.data = 1;
		this.renderParticlesShader.set_FLOAT_DATA(this.particles.floatData?"true":"false");
		this.initTime = new Date().getTime() / 1000;
		this.lastTime = this.initTime;
	}
	,update: function(dt) {
		if(!this.simulation_enabled) {
			return;
		}
		this.time = new Date().getTime() / 1000 - this.initTime;
		dt = 0.016;
		var _this = this.updateDyeShader.isMouseDown;
		_this.dirty = true;
		_this.data = this.isMouseDown && this.lastMousePointKnown;
		var _this1 = this.mouseForceShader.isMouseDown;
		_this1.dirty = true;
		_this1.data = this.isMouseDown && this.lastMousePointKnown;
		this.fluid.step(dt);
		var _this2 = this.particles.velocityStepShader.flowVelocityField;
		_this2.dirty = true;
		_this2.data = this.fluid.velocityRenderTarget.readFromTexture;
		if(this.renderParticlesEnabled) {
			var _this3 = this.particles;
			var _this4 = _this3.velocityStepShader.dt;
			_this4.dirty = true;
			_this4.data = dt;
			var _this5 = _this3.velocityStepShader.positionData;
			_this5.dirty = true;
			_this5.data = _this3.positionData.readFromTexture;
			var _this6 = _this3.velocityStepShader.velocityData;
			_this6.dirty = true;
			_this6.data = _this3.velocityData.readFromTexture;
			var shader = _this3.velocityStepShader;
			var target = _this3.velocityData;
			snow_modules_opengl_web_GL.gl.viewport(0,0,target.width,target.height);
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target.writeFrameBufferObject);
			snow_modules_opengl_web_GL.gl.bindBuffer(34962,_this3.textureQuad);
			if(shader._active) {
				var _g = 0;
				var _g1 = shader._uniforms;
				while(_g < _g1.length) {
					var u = _g1[_g];
					++_g;
					u.apply();
				}
				var offset = 0;
				var _g11 = 0;
				var _g2 = shader._attributes.length;
				while(_g11 < _g2) {
					var att = shader._attributes[_g11++];
					var location = att.location;
					if(location != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
					}
					offset += att.byteSize;
				}
			} else {
				if(!shader._ready) {
					shader.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
				var _g3 = 0;
				var _g12 = shader._uniforms;
				while(_g3 < _g12.length) {
					var u1 = _g12[_g3];
					++_g3;
					u1.apply();
				}
				var offset1 = 0;
				var _g13 = 0;
				var _g4 = shader._attributes.length;
				while(_g13 < _g4) {
					var att1 = shader._attributes[_g13++];
					var location1 = att1.location;
					if(location1 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
					}
					offset1 += att1.byteSize;
				}
				shader._active = true;
			}
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			shader.deactivate();
			target.tmpFBO = target.writeFrameBufferObject;
			target.writeFrameBufferObject = target.readFrameBufferObject;
			target.readFrameBufferObject = target.tmpFBO;
			target.tmpTex = target.writeToTexture;
			target.writeToTexture = target.readFromTexture;
			target.readFromTexture = target.tmpTex;
			var _this7 = _this3.positionStepShader.dt;
			_this7.dirty = true;
			_this7.data = dt;
			var _this8 = _this3.positionStepShader.positionData;
			_this8.dirty = true;
			_this8.data = _this3.positionData.readFromTexture;
			var _this9 = _this3.positionStepShader.velocityData;
			_this9.dirty = true;
			_this9.data = _this3.velocityData.readFromTexture;
			var shader1 = _this3.positionStepShader;
			var target1 = _this3.positionData;
			snow_modules_opengl_web_GL.gl.viewport(0,0,target1.width,target1.height);
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target1.writeFrameBufferObject);
			snow_modules_opengl_web_GL.gl.bindBuffer(34962,_this3.textureQuad);
			if(shader1._active) {
				var _g5 = 0;
				var _g14 = shader1._uniforms;
				while(_g5 < _g14.length) {
					var u2 = _g14[_g5];
					++_g5;
					u2.apply();
				}
				var offset2 = 0;
				var _g15 = 0;
				var _g6 = shader1._attributes.length;
				while(_g15 < _g6) {
					var att2 = shader1._attributes[_g15++];
					var location2 = att2.location;
					if(location2 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,shader1._aStride,offset2);
					}
					offset2 += att2.byteSize;
				}
			} else {
				if(!shader1._ready) {
					shader1.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(shader1._prog);
				var _g7 = 0;
				var _g16 = shader1._uniforms;
				while(_g7 < _g16.length) {
					var u3 = _g16[_g7];
					++_g7;
					u3.apply();
				}
				var offset3 = 0;
				var _g17 = 0;
				var _g8 = shader1._attributes.length;
				while(_g17 < _g8) {
					var att3 = shader1._attributes[_g17++];
					var location3 = att3.location;
					if(location3 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,shader1._aStride,offset3);
					}
					offset3 += att3.byteSize;
				}
				shader1._active = true;
			}
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			shader1.deactivate();
			target1.tmpFBO = target1.writeFrameBufferObject;
			target1.writeFrameBufferObject = target1.readFrameBufferObject;
			target1.readFrameBufferObject = target1.tmpFBO;
			target1.tmpTex = target1.writeToTexture;
			target1.writeToTexture = target1.readFromTexture;
			target1.readFromTexture = target1.tmpTex;
		}
		var _this10 = this.lastMouse;
		_this10.x = this.mouse.x;
		_this10.y = this.mouse.y;
		var _this11 = this.lastMouseFluid;
		_this11.x = (this.mouse.x / this.app.runtime.window.width * 2 - 1) * this.fluid.aspectRatio;
		_this11.y = (this.app.runtime.window.height - this.mouse.y) / this.app.runtime.window.height * 2 - 1;
		this.lastMousePointKnown = this.mousePointKnown;
	}
	,tick: function(delta) {
		if(!this.simulation_enabled) {
			return;
		}
		snow_modules_opengl_web_GL.gl.viewport(0,0,this.offScreenTarget.width,this.offScreenTarget.height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.offScreenTarget.frameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(16384);
		if(this.renderFluidEnabled) {
			var texture = this.fluid.dyeRenderTarget.readFromTexture;
			snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
			var _this = this.screenTextureShader.texture;
			_this.dirty = true;
			_this.data = texture;
			var _this1 = this.screenTextureShader;
			if(_this1._active) {
				var _g = 0;
				var _g1 = _this1._uniforms;
				while(_g < _g1.length) {
					var u = _g1[_g];
					++_g;
					u.apply();
				}
				var offset = 0;
				var _g11 = 0;
				var _g2 = _this1._attributes.length;
				while(_g11 < _g2) {
					var att = _this1._attributes[_g11++];
					var location = att.location;
					if(location != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,_this1._aStride,offset);
					}
					offset += att.byteSize;
				}
			} else {
				if(!_this1._ready) {
					_this1.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(_this1._prog);
				var _g3 = 0;
				var _g12 = _this1._uniforms;
				while(_g3 < _g12.length) {
					var u1 = _g12[_g3];
					++_g3;
					u1.apply();
				}
				var offset1 = 0;
				var _g13 = 0;
				var _g4 = _this1._attributes.length;
				while(_g13 < _g4) {
					var att1 = _this1._attributes[_g13++];
					var location1 = att1.location;
					if(location1 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,_this1._aStride,offset1);
					}
					offset1 += att1.byteSize;
				}
				_this1._active = true;
			}
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			this.screenTextureShader.deactivate();
		}
		snow_modules_opengl_web_GL.gl.viewport(0,0,this.app.runtime.window.width,this.app.runtime.window.height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.screenBuffer);
		var texture1 = this.offScreenTarget.texture;
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
		var _this2 = this.screenTextureShader.texture;
		_this2.dirty = true;
		_this2.data = texture1;
		var _this3 = this.screenTextureShader;
		if(_this3._active) {
			var _g5 = 0;
			var _g14 = _this3._uniforms;
			while(_g5 < _g14.length) {
				var u2 = _g14[_g5];
				++_g5;
				u2.apply();
			}
			var offset2 = 0;
			var _g15 = 0;
			var _g6 = _this3._attributes.length;
			while(_g15 < _g6) {
				var att2 = _this3._attributes[_g15++];
				var location2 = att2.location;
				if(location2 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,_this3._aStride,offset2);
				}
				offset2 += att2.byteSize;
			}
		} else {
			if(!_this3._ready) {
				_this3.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(_this3._prog);
			var _g7 = 0;
			var _g16 = _this3._uniforms;
			while(_g7 < _g16.length) {
				var u3 = _g16[_g7];
				++_g7;
				u3.apply();
			}
			var offset3 = 0;
			var _g17 = 0;
			var _g8 = _this3._attributes.length;
			while(_g17 < _g8) {
				var att3 = _this3._attributes[_g17++];
				var location3 = att3.location;
				if(location3 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,_this3._aStride,offset3);
				}
				offset3 += att3.byteSize;
			}
			_this3._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		this.screenTextureShader.deactivate();
		if(this.renderParticlesEnabled) {
			snow_modules_opengl_web_GL.gl.enable(3042);
			snow_modules_opengl_web_GL.gl.blendFunc(770,770);
			snow_modules_opengl_web_GL.gl.blendEquation(32774);
			snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.particles.particleUVs);
			var _this4 = this.renderParticlesShader.positionData;
			_this4.dirty = true;
			_this4.data = this.particles.positionData.readFromTexture;
			var _this5 = this.renderParticlesShader.velocityData;
			_this5.dirty = true;
			_this5.data = this.particles.velocityData.readFromTexture;
			var _this6 = this.renderParticlesShader;
			if(_this6._active) {
				var _g9 = 0;
				var _g18 = _this6._uniforms;
				while(_g9 < _g18.length) {
					var u4 = _g18[_g9];
					++_g9;
					u4.apply();
				}
				var offset4 = 0;
				var _g19 = 0;
				var _g10 = _this6._attributes.length;
				while(_g19 < _g10) {
					var att4 = _this6._attributes[_g19++];
					var location4 = att4.location;
					if(location4 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location4);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location4,att4.itemCount,att4.type,false,_this6._aStride,offset4);
					}
					offset4 += att4.byteSize;
				}
			} else {
				if(!_this6._ready) {
					_this6.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(_this6._prog);
				var _g20 = 0;
				var _g110 = _this6._uniforms;
				while(_g20 < _g110.length) {
					var u5 = _g110[_g20];
					++_g20;
					u5.apply();
				}
				var offset5 = 0;
				var _g111 = 0;
				var _g21 = _this6._attributes.length;
				while(_g111 < _g21) {
					var att5 = _this6._attributes[_g111++];
					var location5 = att5.location;
					if(location5 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location5);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location5,att5.itemCount,att5.type,false,_this6._aStride,offset5);
					}
					offset5 += att5.byteSize;
				}
				_this6._active = true;
			}
			snow_modules_opengl_web_GL.gl.drawArrays(0,0,this.particles.count);
			this.renderParticlesShader.deactivate();
			snow_modules_opengl_web_GL.gl.disable(3042);
		}
	}
	,renderTexture: function(texture) {
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.textureQuad);
		var _this = this.screenTextureShader.texture;
		_this.dirty = true;
		_this.data = texture;
		var _this1 = this.screenTextureShader;
		if(_this1._active) {
			var _g = 0;
			var _g1 = _this1._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = _this1._attributes.length;
			while(_g11 < _g2) {
				var att = _this1._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,_this1._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!_this1._ready) {
				_this1.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(_this1._prog);
			var _g3 = 0;
			var _g12 = _this1._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = _this1._attributes.length;
			while(_g13 < _g4) {
				var att1 = _this1._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,_this1._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			_this1._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		this.screenTextureShader.deactivate();
	}
	,renderParticles: function() {
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,this.particles.particleUVs);
		var _this = this.renderParticlesShader.positionData;
		_this.dirty = true;
		_this.data = this.particles.positionData.readFromTexture;
		var _this1 = this.renderParticlesShader.velocityData;
		_this1.dirty = true;
		_this1.data = this.particles.velocityData.readFromTexture;
		var _this2 = this.renderParticlesShader;
		if(_this2._active) {
			var _g = 0;
			var _g1 = _this2._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = _this2._attributes.length;
			while(_g11 < _g2) {
				var att = _this2._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,_this2._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!_this2._ready) {
				_this2.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(_this2._prog);
			var _g3 = 0;
			var _g12 = _this2._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = _this2._attributes.length;
			while(_g13 < _g4) {
				var att1 = _this2._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,_this2._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			_this2._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(0,0,this.particles.count);
		this.renderParticlesShader.deactivate();
	}
	,updatePointSize: function() {
		this.renderParticlesShader.set_POINT_SIZE((this.pointSize | 0) + ".0");
	}
	,updateSimulationTextures: function() {
		var w;
		var h;
		w = Math.round(this.app.runtime.window.width * this.fluidScale);
		h = Math.round(this.app.runtime.window.height * this.fluidScale);
		if(w != this.fluid.width || h != this.fluid.height) {
			var _this = this.fluid;
			_this.velocityRenderTarget.resize(w,h);
			_this.pressureRenderTarget.resize(w,h);
			var _this1 = _this.divergenceRenderTarget;
			var newTexture = _this1.textureFactory(w,h);
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this1.frameBufferObject);
			snow_modules_opengl_web_GL.gl.framebufferTexture2D(36160,36064,3553,newTexture,0);
			if(_this1.texture != null) {
				var resampler = gltoolbox_shaders_Resample.instance;
				var _this2 = resampler.texture;
				_this2.dirty = true;
				_this2.data = _this1.texture;
				snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this1.frameBufferObject);
				snow_modules_opengl_web_GL.gl.viewport(0,0,w,h);
				snow_modules_opengl_web_GL.gl.bindBuffer(34962,gltoolbox_render_RenderTarget.textureQuad);
				if(resampler._active) {
					var _g = 0;
					var _g1 = resampler._uniforms;
					while(_g < _g1.length) {
						var u = _g1[_g];
						++_g;
						u.apply();
					}
					var offset = 0;
					var _g11 = 0;
					var _g2 = resampler._attributes.length;
					while(_g11 < _g2) {
						var att = resampler._attributes[_g11++];
						var location = att.location;
						if(location != -1) {
							snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
							snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,resampler._aStride,offset);
						}
						offset += att.byteSize;
					}
				} else {
					if(!resampler._ready) {
						resampler.create();
					}
					snow_modules_opengl_web_GL.gl.useProgram(resampler._prog);
					var _g3 = 0;
					var _g12 = resampler._uniforms;
					while(_g3 < _g12.length) {
						var u1 = _g12[_g3];
						++_g3;
						u1.apply();
					}
					var offset1 = 0;
					var _g13 = 0;
					var _g4 = resampler._attributes.length;
					while(_g13 < _g4) {
						var att1 = resampler._attributes[_g13++];
						var location1 = att1.location;
						if(location1 != -1) {
							snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
							snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,resampler._aStride,offset1);
						}
						offset1 += att1.byteSize;
					}
					resampler._active = true;
				}
				snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
				resampler.deactivate();
				snow_modules_opengl_web_GL.gl.deleteTexture(_this1.texture);
			} else {
				snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this1.frameBufferObject);
				snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
				snow_modules_opengl_web_GL.gl.clear(16384);
			}
			_this1.width = w;
			_this1.height = h;
			_this1.texture = newTexture;
			_this.dyeRenderTarget.resize(w,h);
			_this.width = w;
			_this.height = h;
			_this.aspectRatio = w / h;
			_this.updateAllCoreShaderUniforms();
		}
		w = Math.round(this.app.runtime.window.width * this.offScreenScale);
		h = Math.round(this.app.runtime.window.height * this.offScreenScale);
		if(w != this.offScreenTarget.width || h != this.offScreenTarget.height) {
			var _this3 = this.offScreenTarget;
			var newTexture1 = _this3.textureFactory(w,h);
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this3.frameBufferObject);
			snow_modules_opengl_web_GL.gl.framebufferTexture2D(36160,36064,3553,newTexture1,0);
			if(_this3.texture != null) {
				var resampler1 = gltoolbox_shaders_Resample.instance;
				var _this4 = resampler1.texture;
				_this4.dirty = true;
				_this4.data = _this3.texture;
				snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this3.frameBufferObject);
				snow_modules_opengl_web_GL.gl.viewport(0,0,w,h);
				snow_modules_opengl_web_GL.gl.bindBuffer(34962,gltoolbox_render_RenderTarget.textureQuad);
				if(resampler1._active) {
					var _g5 = 0;
					var _g14 = resampler1._uniforms;
					while(_g5 < _g14.length) {
						var u2 = _g14[_g5];
						++_g5;
						u2.apply();
					}
					var offset2 = 0;
					var _g15 = 0;
					var _g6 = resampler1._attributes.length;
					while(_g15 < _g6) {
						var att2 = resampler1._attributes[_g15++];
						var location2 = att2.location;
						if(location2 != -1) {
							snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
							snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,resampler1._aStride,offset2);
						}
						offset2 += att2.byteSize;
					}
				} else {
					if(!resampler1._ready) {
						resampler1.create();
					}
					snow_modules_opengl_web_GL.gl.useProgram(resampler1._prog);
					var _g7 = 0;
					var _g16 = resampler1._uniforms;
					while(_g7 < _g16.length) {
						var u3 = _g16[_g7];
						++_g7;
						u3.apply();
					}
					var offset3 = 0;
					var _g17 = 0;
					var _g8 = resampler1._attributes.length;
					while(_g17 < _g8) {
						var att3 = resampler1._attributes[_g17++];
						var location3 = att3.location;
						if(location3 != -1) {
							snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
							snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,resampler1._aStride,offset3);
						}
						offset3 += att3.byteSize;
					}
					resampler1._active = true;
				}
				snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
				resampler1.deactivate();
				snow_modules_opengl_web_GL.gl.deleteTexture(_this3.texture);
			} else {
				snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this3.frameBufferObject);
				snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
				snow_modules_opengl_web_GL.gl.clear(16384);
			}
			_this3.width = w;
			_this3.height = h;
			_this3.texture = newTexture1;
		}
		if(this.particleCount != this.particles.count) {
			this.particles.setCount(this.particleCount);
		}
		this.particles.velocityStepShader.flowScale.data.x = 1 / (this.fluid.cellSize * this.fluid.aspectRatio);
		this.particles.velocityStepShader.flowScale.data.y = 1 / this.fluid.cellSize;
		var _this5 = this.particles.velocityStepShader.dragCoefficient;
		_this5.dirty = true;
		_this5.data = 1;
	}
	,set_simulationQuality: function(quality) {
		switch(quality[1]) {
		case 0:
			this.particleCount = 1048576;
			this.fluidScale = 0.5;
			this.set_fluidIterations(30);
			this.offScreenScale = 1.;
			this.offScreenFilter = 9728;
			this.pointSize = 1;
			break;
		case 1:
			this.particleCount = 1048576;
			this.fluidScale = 0.25;
			this.set_fluidIterations(20);
			this.offScreenScale = 1.;
			this.offScreenFilter = 9728;
			this.pointSize = 1;
			break;
		case 2:
			this.particleCount = 262144;
			this.fluidScale = 0.25;
			this.set_fluidIterations(18);
			this.offScreenScale = 1.;
			this.offScreenFilter = 9728;
			this.pointSize = 1;
			break;
		case 3:
			this.particleCount = 65536;
			this.fluidScale = 0.2;
			this.set_fluidIterations(14);
			this.offScreenScale = 1.;
			this.offScreenFilter = 9728;
			this.pointSize = 2;
			break;
		case 4:
			this.particleCount = 16384;
			this.fluidScale = 0.16666666666666666;
			this.set_fluidIterations(12);
			this.offScreenScale = 0.5;
			this.offScreenFilter = 9728;
			this.pointSize = 2;
			break;
		case 5:
			this.particleCount = 16384;
			this.fluidScale = 0.1;
			this.set_fluidIterations(6);
			this.offScreenScale = 0.5;
			this.offScreenFilter = 9729;
			this.pointSize = 5;
			break;
		}
		this.renderParticlesEnabled = this.particleCount > 1;
		return this.simulationQuality = quality;
	}
	,set_fluidIterations: function(v) {
		this.fluidIterations = v;
		if(this.fluid != null) {
			this.fluid.solverIterations = v;
		}
		return v;
	}
	,lowerQualityRequired: function(magnitude) {
		if(this.qualityDirection > 0) {
			return;
		}
		this.qualityDirection = -1;
		var qualityIndex = this.simulationQuality[1];
		var maxIndex = SimulationQuality.__empty_constructs__.length - 1;
		if(qualityIndex >= maxIndex) {
			return;
		}
		if(magnitude < 0.5) {
			++qualityIndex;
		} else {
			qualityIndex += 2;
		}
		if(qualityIndex > maxIndex) {
			qualityIndex = maxIndex;
		}
		var newQuality = Type.createEnumIndex(SimulationQuality,qualityIndex);
		haxe_Log.trace("Average FPS: " + this.performanceMonitor.fpsSample.average + ", lowering quality to: " + Std.string(newQuality),{ fileName : "Main.hx", lineNumber : 368, className : "Main", methodName : "lowerQualityRequired"});
		this.set_simulationQuality(newQuality);
		this.updateSimulationTextures();
		this.updatePointSize();
	}
	,higherQualityRequired: function(magnitude) {
		if(this.qualityDirection < 0) {
			return;
		}
		this.qualityDirection = 1;
		var qualityIndex = this.simulationQuality[1];
		if(qualityIndex <= 0) {
			return;
		}
		if(magnitude < 0.5) {
			--qualityIndex;
		} else {
			qualityIndex -= 2;
		}
		if(qualityIndex < 0) {
			qualityIndex = 0;
		}
		var newQuality = Type.createEnumIndex(SimulationQuality,qualityIndex);
		haxe_Log.trace("Raising quality to: " + Std.string(newQuality),{ fileName : "Main.hx", lineNumber : 390, className : "Main", methodName : "higherQualityRequired"});
		this.set_simulationQuality(newQuality);
		this.updateSimulationTextures();
		this.updatePointSize();
	}
	,reset: function() {
		var _this = this.particles;
		var shader = _this.initialPositionShader;
		var target = _this.positionData;
		snow_modules_opengl_web_GL.gl.viewport(0,0,target.width,target.height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,_this.textureQuad);
		if(shader._active) {
			var _g = 0;
			var _g1 = shader._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = shader._attributes.length;
			while(_g11 < _g2) {
				var att = shader._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!shader._ready) {
				shader.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
			var _g3 = 0;
			var _g12 = shader._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = shader._attributes.length;
			while(_g13 < _g4) {
				var att1 = shader._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			shader._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader.deactivate();
		target.tmpFBO = target.writeFrameBufferObject;
		target.writeFrameBufferObject = target.readFrameBufferObject;
		target.readFrameBufferObject = target.tmpFBO;
		target.tmpTex = target.writeToTexture;
		target.writeToTexture = target.readFromTexture;
		target.readFromTexture = target.tmpTex;
		var shader1 = _this.initialVelocityShader;
		var target1 = _this.velocityData;
		snow_modules_opengl_web_GL.gl.viewport(0,0,target1.width,target1.height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target1.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,_this.textureQuad);
		if(shader1._active) {
			var _g5 = 0;
			var _g14 = shader1._uniforms;
			while(_g5 < _g14.length) {
				var u2 = _g14[_g5];
				++_g5;
				u2.apply();
			}
			var offset2 = 0;
			var _g15 = 0;
			var _g6 = shader1._attributes.length;
			while(_g15 < _g6) {
				var att2 = shader1._attributes[_g15++];
				var location2 = att2.location;
				if(location2 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,shader1._aStride,offset2);
				}
				offset2 += att2.byteSize;
			}
		} else {
			if(!shader1._ready) {
				shader1.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader1._prog);
			var _g7 = 0;
			var _g16 = shader1._uniforms;
			while(_g7 < _g16.length) {
				var u3 = _g16[_g7];
				++_g7;
				u3.apply();
			}
			var offset3 = 0;
			var _g17 = 0;
			var _g8 = shader1._attributes.length;
			while(_g17 < _g8) {
				var att3 = shader1._attributes[_g17++];
				var location3 = att3.location;
				if(location3 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,shader1._aStride,offset3);
				}
				offset3 += att3.byteSize;
			}
			shader1._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader1.deactivate();
		target1.tmpFBO = target1.writeFrameBufferObject;
		target1.writeFrameBufferObject = target1.readFrameBufferObject;
		target1.readFrameBufferObject = target1.tmpFBO;
		target1.tmpTex = target1.writeToTexture;
		target1.writeToTexture = target1.readFromTexture;
		target1.readFromTexture = target1.tmpTex;
		var _this1 = this.fluid;
		snow_modules_opengl_web_GL.gl.viewport(0,0,_this1.width,_this1.height);
		snow_modules_opengl_web_GL.gl.disable(3042);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,_this1.textureQuad);
		var shader2 = _this1.clearVelocityShader;
		var target2 = _this1.velocityRenderTarget;
		if(shader2._active) {
			var _g9 = 0;
			var _g18 = shader2._uniforms;
			while(_g9 < _g18.length) {
				var u4 = _g18[_g9];
				++_g9;
				u4.apply();
			}
			var offset4 = 0;
			var _g19 = 0;
			var _g10 = shader2._attributes.length;
			while(_g19 < _g10) {
				var att4 = shader2._attributes[_g19++];
				var location4 = att4.location;
				if(location4 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location4);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location4,att4.itemCount,att4.type,false,shader2._aStride,offset4);
				}
				offset4 += att4.byteSize;
			}
		} else {
			if(!shader2._ready) {
				shader2.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader2._prog);
			var _g20 = 0;
			var _g110 = shader2._uniforms;
			while(_g20 < _g110.length) {
				var u5 = _g110[_g20];
				++_g20;
				u5.apply();
			}
			var offset5 = 0;
			var _g111 = 0;
			var _g21 = shader2._attributes.length;
			while(_g111 < _g21) {
				var att5 = shader2._attributes[_g111++];
				var location5 = att5.location;
				if(location5 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location5);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location5,att5.itemCount,att5.type,false,shader2._aStride,offset5);
				}
				offset5 += att5.byteSize;
			}
			shader2._active = true;
		}
		target2.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader2.deactivate();
		var _this2 = _this1.velocityRenderTarget;
		_this2.tmpFBO = _this2.writeFrameBufferObject;
		_this2.writeFrameBufferObject = _this2.readFrameBufferObject;
		_this2.readFrameBufferObject = _this2.tmpFBO;
		_this2.tmpTex = _this2.writeToTexture;
		_this2.writeToTexture = _this2.readFromTexture;
		_this2.readFromTexture = _this2.tmpTex;
		var shader3 = _this1.clearPressureShader;
		var target3 = _this1.pressureRenderTarget;
		if(shader3._active) {
			var _g22 = 0;
			var _g112 = shader3._uniforms;
			while(_g22 < _g112.length) {
				var u6 = _g112[_g22];
				++_g22;
				u6.apply();
			}
			var offset6 = 0;
			var _g113 = 0;
			var _g23 = shader3._attributes.length;
			while(_g113 < _g23) {
				var att6 = shader3._attributes[_g113++];
				var location6 = att6.location;
				if(location6 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location6);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location6,att6.itemCount,att6.type,false,shader3._aStride,offset6);
				}
				offset6 += att6.byteSize;
			}
		} else {
			if(!shader3._ready) {
				shader3.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(shader3._prog);
			var _g24 = 0;
			var _g114 = shader3._uniforms;
			while(_g24 < _g114.length) {
				var u7 = _g114[_g24];
				++_g24;
				u7.apply();
			}
			var offset7 = 0;
			var _g115 = 0;
			var _g25 = shader3._attributes.length;
			while(_g115 < _g25) {
				var att7 = shader3._attributes[_g115++];
				var location7 = att7.location;
				if(location7 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location7);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location7,att7.itemCount,att7.type,false,shader3._aStride,offset7);
				}
				offset7 += att7.byteSize;
			}
			shader3._active = true;
		}
		target3.activate();
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		shader3.deactivate();
		var _this3 = _this1.pressureRenderTarget;
		_this3.tmpFBO = _this3.writeFrameBufferObject;
		_this3.writeFrameBufferObject = _this3.readFrameBufferObject;
		_this3.readFrameBufferObject = _this3.tmpFBO;
		_this3.tmpTex = _this3.writeToTexture;
		_this3.writeToTexture = _this3.readFromTexture;
		_this3.readFromTexture = _this3.tmpTex;
		var _this4 = _this1.dyeRenderTarget;
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this4.readFrameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(16384);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this4.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(16384);
	}
	,windowToClipSpaceX: function(x) {
		return x / this.app.runtime.window.width * 2 - 1;
	}
	,windowToClipSpaceY: function(y) {
		return (this.app.runtime.window.height - y) / this.app.runtime.window.height * 2 - 1;
	}
	,onmousedown: function(x,y,button,_,_1) {
		this.isMouseDown = true;
	}
	,onmouseup: function(x,y,button,_,_1) {
		this.isMouseDown = false;
	}
	,onmousemove: function(x,y,xrel,yrel,_,_1) {
		var _this = this.mouse;
		_this.x = x;
		_this.y = y;
		var _this1 = this.mouseFluid;
		_this1.x = (x / this.app.runtime.window.width * 2 - 1) * this.fluid.aspectRatio;
		_this1.y = (this.app.runtime.window.height - y) / this.app.runtime.window.height * 2 - 1;
		this.mousePointKnown = true;
	}
	,updateLastMouse: function() {
		var _this = this.lastMouse;
		_this.x = this.mouse.x;
		_this.y = this.mouse.y;
		var _this1 = this.lastMouseFluid;
		_this1.x = (this.mouse.x / this.app.runtime.window.width * 2 - 1) * this.fluid.aspectRatio;
		_this1.y = (this.app.runtime.window.height - this.mouse.y) / this.app.runtime.window.height * 2 - 1;
		this.lastMousePointKnown = this.mousePointKnown;
	}
	,ontouchdown: function(x,y,dx,dy,touch_id,timestamp) {
		this.updateTouchCoordinate(x,y);
		var _this = this.lastMouse;
		_this.x = this.mouse.x;
		_this.y = this.mouse.y;
		var _this1 = this.lastMouseFluid;
		_this1.x = (this.mouse.x / this.app.runtime.window.width * 2 - 1) * this.fluid.aspectRatio;
		_this1.y = (this.app.runtime.window.height - this.mouse.y) / this.app.runtime.window.height * 2 - 1;
		this.lastMousePointKnown = this.mousePointKnown;
		this.isMouseDown = true;
	}
	,ontouchup: function(x,y,dx,dy,touch_id,timestamp) {
		this.updateTouchCoordinate(x,y);
		this.isMouseDown = false;
	}
	,ontouchmove: function(x,y,dx,dy,touch_id,timestamp) {
		this.updateTouchCoordinate(x,y);
	}
	,updateTouchCoordinate: function(x,y) {
		x *= this.app.runtime.window.width;
		y *= this.app.runtime.window.height;
		var _this = this.mouse;
		_this.x = x;
		_this.y = y;
		var _this1 = this.mouseFluid;
		_this1.x = (this.mouse.x / this.app.runtime.window.width * 2 - 1) * this.fluid.aspectRatio;
		_this1.y = (this.app.runtime.window.height - this.mouse.y) / this.app.runtime.window.height * 2 - 1;
		this.mousePointKnown = true;
	}
	,onkeydown: function(keyCode,_,_1,_2,_3,_4) {
		switch(keyCode) {
		case 1073742049:
			this.lshiftDown = true;
			break;
		case 1073742053:
			this.rshiftDown = true;
			break;
		}
	}
	,onkeyup: function(keyCode,_,_1,_2,_3,_4) {
		switch(keyCode) {
		case 100:
			this.renderFluidEnabled = !this.renderFluidEnabled;
			break;
		case 112:
			this.renderParticlesEnabled = !this.renderParticlesEnabled;
			break;
		case 114:
			if(this.lshiftDown || this.rshiftDown) {
				var _this = this.particles;
				var shader = _this.initialPositionShader;
				var target = _this.positionData;
				snow_modules_opengl_web_GL.gl.viewport(0,0,target.width,target.height);
				snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target.writeFrameBufferObject);
				snow_modules_opengl_web_GL.gl.bindBuffer(34962,_this.textureQuad);
				if(shader._active) {
					var _g = 0;
					var _g1 = shader._uniforms;
					while(_g < _g1.length) {
						var u = _g1[_g];
						++_g;
						u.apply();
					}
					var offset = 0;
					var _g11 = 0;
					var _g2 = shader._attributes.length;
					while(_g11 < _g2) {
						var att = shader._attributes[_g11++];
						var location = att.location;
						if(location != -1) {
							snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
							snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,shader._aStride,offset);
						}
						offset += att.byteSize;
					}
				} else {
					if(!shader._ready) {
						shader.create();
					}
					snow_modules_opengl_web_GL.gl.useProgram(shader._prog);
					var _g3 = 0;
					var _g12 = shader._uniforms;
					while(_g3 < _g12.length) {
						var u1 = _g12[_g3];
						++_g3;
						u1.apply();
					}
					var offset1 = 0;
					var _g13 = 0;
					var _g4 = shader._attributes.length;
					while(_g13 < _g4) {
						var att1 = shader._attributes[_g13++];
						var location1 = att1.location;
						if(location1 != -1) {
							snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
							snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,shader._aStride,offset1);
						}
						offset1 += att1.byteSize;
					}
					shader._active = true;
				}
				snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
				shader.deactivate();
				target.tmpFBO = target.writeFrameBufferObject;
				target.writeFrameBufferObject = target.readFrameBufferObject;
				target.readFrameBufferObject = target.tmpFBO;
				target.tmpTex = target.writeToTexture;
				target.writeToTexture = target.readFromTexture;
				target.readFromTexture = target.tmpTex;
				var shader1 = _this.initialVelocityShader;
				var target1 = _this.velocityData;
				snow_modules_opengl_web_GL.gl.viewport(0,0,target1.width,target1.height);
				snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,target1.writeFrameBufferObject);
				snow_modules_opengl_web_GL.gl.bindBuffer(34962,_this.textureQuad);
				if(shader1._active) {
					var _g5 = 0;
					var _g14 = shader1._uniforms;
					while(_g5 < _g14.length) {
						var u2 = _g14[_g5];
						++_g5;
						u2.apply();
					}
					var offset2 = 0;
					var _g15 = 0;
					var _g6 = shader1._attributes.length;
					while(_g15 < _g6) {
						var att2 = shader1._attributes[_g15++];
						var location2 = att2.location;
						if(location2 != -1) {
							snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location2);
							snow_modules_opengl_web_GL.gl.vertexAttribPointer(location2,att2.itemCount,att2.type,false,shader1._aStride,offset2);
						}
						offset2 += att2.byteSize;
					}
				} else {
					if(!shader1._ready) {
						shader1.create();
					}
					snow_modules_opengl_web_GL.gl.useProgram(shader1._prog);
					var _g7 = 0;
					var _g16 = shader1._uniforms;
					while(_g7 < _g16.length) {
						var u3 = _g16[_g7];
						++_g7;
						u3.apply();
					}
					var offset3 = 0;
					var _g17 = 0;
					var _g8 = shader1._attributes.length;
					while(_g17 < _g8) {
						var att3 = shader1._attributes[_g17++];
						var location3 = att3.location;
						if(location3 != -1) {
							snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location3);
							snow_modules_opengl_web_GL.gl.vertexAttribPointer(location3,att3.itemCount,att3.type,false,shader1._aStride,offset3);
						}
						offset3 += att3.byteSize;
					}
					shader1._active = true;
				}
				snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
				shader1.deactivate();
				target1.tmpFBO = target1.writeFrameBufferObject;
				target1.writeFrameBufferObject = target1.readFrameBufferObject;
				target1.readFrameBufferObject = target1.tmpFBO;
				target1.tmpTex = target1.writeToTexture;
				target1.writeToTexture = target1.readFromTexture;
				target1.readFromTexture = target1.tmpTex;
			} else {
				this.reset();
			}
			break;
		case 115:
			var _this1 = this.fluid;
			snow_modules_opengl_web_GL.gl.viewport(0,0,_this1.width,_this1.height);
			snow_modules_opengl_web_GL.gl.disable(3042);
			snow_modules_opengl_web_GL.gl.bindBuffer(34962,_this1.textureQuad);
			var shader2 = _this1.clearVelocityShader;
			var target2 = _this1.velocityRenderTarget;
			if(shader2._active) {
				var _g9 = 0;
				var _g18 = shader2._uniforms;
				while(_g9 < _g18.length) {
					var u4 = _g18[_g9];
					++_g9;
					u4.apply();
				}
				var offset4 = 0;
				var _g19 = 0;
				var _g10 = shader2._attributes.length;
				while(_g19 < _g10) {
					var att4 = shader2._attributes[_g19++];
					var location4 = att4.location;
					if(location4 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location4);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location4,att4.itemCount,att4.type,false,shader2._aStride,offset4);
					}
					offset4 += att4.byteSize;
				}
			} else {
				if(!shader2._ready) {
					shader2.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(shader2._prog);
				var _g20 = 0;
				var _g110 = shader2._uniforms;
				while(_g20 < _g110.length) {
					var u5 = _g110[_g20];
					++_g20;
					u5.apply();
				}
				var offset5 = 0;
				var _g111 = 0;
				var _g21 = shader2._attributes.length;
				while(_g111 < _g21) {
					var att5 = shader2._attributes[_g111++];
					var location5 = att5.location;
					if(location5 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location5);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location5,att5.itemCount,att5.type,false,shader2._aStride,offset5);
					}
					offset5 += att5.byteSize;
				}
				shader2._active = true;
			}
			target2.activate();
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			shader2.deactivate();
			var _this2 = _this1.velocityRenderTarget;
			_this2.tmpFBO = _this2.writeFrameBufferObject;
			_this2.writeFrameBufferObject = _this2.readFrameBufferObject;
			_this2.readFrameBufferObject = _this2.tmpFBO;
			_this2.tmpTex = _this2.writeToTexture;
			_this2.writeToTexture = _this2.readFromTexture;
			_this2.readFromTexture = _this2.tmpTex;
			var shader3 = _this1.clearPressureShader;
			var target3 = _this1.pressureRenderTarget;
			if(shader3._active) {
				var _g22 = 0;
				var _g112 = shader3._uniforms;
				while(_g22 < _g112.length) {
					var u6 = _g112[_g22];
					++_g22;
					u6.apply();
				}
				var offset6 = 0;
				var _g113 = 0;
				var _g23 = shader3._attributes.length;
				while(_g113 < _g23) {
					var att6 = shader3._attributes[_g113++];
					var location6 = att6.location;
					if(location6 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location6);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location6,att6.itemCount,att6.type,false,shader3._aStride,offset6);
					}
					offset6 += att6.byteSize;
				}
			} else {
				if(!shader3._ready) {
					shader3.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(shader3._prog);
				var _g24 = 0;
				var _g114 = shader3._uniforms;
				while(_g24 < _g114.length) {
					var u7 = _g114[_g24];
					++_g24;
					u7.apply();
				}
				var offset7 = 0;
				var _g115 = 0;
				var _g25 = shader3._attributes.length;
				while(_g115 < _g25) {
					var att7 = shader3._attributes[_g115++];
					var location7 = att7.location;
					if(location7 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location7);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location7,att7.itemCount,att7.type,false,shader3._aStride,offset7);
					}
					offset7 += att7.byteSize;
				}
				shader3._active = true;
			}
			target3.activate();
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			shader3.deactivate();
			var _this3 = _this1.pressureRenderTarget;
			_this3.tmpFBO = _this3.writeFrameBufferObject;
			_this3.writeFrameBufferObject = _this3.readFrameBufferObject;
			_this3.readFrameBufferObject = _this3.tmpFBO;
			_this3.tmpTex = _this3.writeToTexture;
			_this3.writeToTexture = _this3.readFromTexture;
			_this3.readFromTexture = _this3.tmpTex;
			var _this4 = _this1.dyeRenderTarget;
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this4.readFrameBufferObject);
			snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
			snow_modules_opengl_web_GL.gl.clear(16384);
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,_this4.writeFrameBufferObject);
			snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
			snow_modules_opengl_web_GL.gl.clear(16384);
			break;
		case 1073742049:
			this.lshiftDown = false;
			break;
		case 1073742053:
			this.rshiftDown = false;
			break;
		}
	}
	,__class__: Main
});
var SimulationQuality = $hxClasses["SimulationQuality"] = { __ename__ : ["SimulationQuality"], __constructs__ : ["UltraHigh","High","Medium","Low","UltraLow","iOS"] };
SimulationQuality.UltraHigh = ["UltraHigh",0];
SimulationQuality.UltraHigh.toString = $estr;
SimulationQuality.UltraHigh.__enum__ = SimulationQuality;
SimulationQuality.High = ["High",1];
SimulationQuality.High.toString = $estr;
SimulationQuality.High.__enum__ = SimulationQuality;
SimulationQuality.Medium = ["Medium",2];
SimulationQuality.Medium.toString = $estr;
SimulationQuality.Medium.__enum__ = SimulationQuality;
SimulationQuality.Low = ["Low",3];
SimulationQuality.Low.toString = $estr;
SimulationQuality.Low.__enum__ = SimulationQuality;
SimulationQuality.UltraLow = ["UltraLow",4];
SimulationQuality.UltraLow.toString = $estr;
SimulationQuality.UltraLow.__enum__ = SimulationQuality;
SimulationQuality.iOS = ["iOS",5];
SimulationQuality.iOS.toString = $estr;
SimulationQuality.iOS.__enum__ = SimulationQuality;
SimulationQuality.__empty_constructs__ = [SimulationQuality.UltraHigh,SimulationQuality.High,SimulationQuality.Medium,SimulationQuality.Low,SimulationQuality.UltraLow,SimulationQuality.iOS];
var ScreenTexture = function() {
	shaderblox_ShaderBase.call(this);
};
$hxClasses["ScreenTexture"] = ScreenTexture;
ScreenTexture.__name__ = ["ScreenTexture"];
ScreenTexture.__super__ = shaderblox_ShaderBase;
ScreenTexture.prototype = $extend(shaderblox_ShaderBase.prototype,{
	createProperties: function() {
		shaderblox_ShaderBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("texture",null,false);
		this.texture = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_attributes_FloatAttribute("vertexPosition",0,2);
		this.vertexPosition = instance1;
		this._attributes.push(instance1);
		this._aStride += 8;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nattribute vec2 vertexPosition;\r\nvarying vec2 texelCoord;\r\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\tgl_Position = vec4(vertexPosition*2.0 - vec2(1.0, 1.0), 0.0, 1.0 );\n}\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nuniform sampler2D texture;\r\nvarying vec2 texelCoord;\r\n\r\nvoid main(void){\r\n\tgl_FragColor = abs(texture2D(texture, texelCoord));\r\n}\n";
	}
	,__class__: ScreenTexture
});
var ColorParticleMotion = function() {
	RenderParticles.call(this);
};
$hxClasses["ColorParticleMotion"] = ColorParticleMotion;
ColorParticleMotion.__name__ = ["ColorParticleMotion"];
ColorParticleMotion.__super__ = RenderParticles;
ColorParticleMotion.prototype = $extend(RenderParticles.prototype,{
	set_POINT_SIZE: function(value) {
		this.POINT_SIZE = value;
		this._vertSource = shaderblox_glsl_GLSLTools.injectConstValue(this._vertSource,"POINT_SIZE",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,createProperties: function() {
		RenderParticles.prototype.createProperties.call(this);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_PARTICLE_VELOCITY_SCALE = 0.05; \n\r\nconst bool FLOAT_DATA = true;\r\n\r\n\nvec4 packParticlePosition(in vec2 p){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(p.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 np = (p)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(np.x), packFloat8bitRG(np.y));\r\n\t}\r\n}\r\n\r\nvec2 unpackParticlePosition(in vec4 pp){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pp.xy;\r\n\t}else{\r\n\t    vec2 np = vec2(unpackFloat8bitRG(pp.xy), unpackFloat8bitRG(pp.zw));\r\n\t    return (2.0*np.xy - 1.0);\r\n\t}\r\n}\r\n\r\n\nvec4 packParticleVelocity(in vec2 v){\r\n\tif(FLOAT_DATA){\r\n\t\treturn vec4(v.xy, 0.0, 0.0);\r\n\t}else{\r\n\t    vec2 nv = (v * PACK_PARTICLE_VELOCITY_SCALE)*0.5 + 0.5;\r\n\t    return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n\t}\r\n\r\n}\r\n\r\nvec2 unpackParticleVelocity(in vec4 pv){\r\n\tif(FLOAT_DATA){\r\n\t\treturn pv.xy;\r\n\t}else{\r\n\t    const float INV_PACK_PARTICLE_VELOCITY_SCALE = 1./PACK_PARTICLE_VELOCITY_SCALE;\r\n\t    vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n\t    return (2.0*nv.xy - 1.0)* INV_PACK_PARTICLE_VELOCITY_SCALE;\r\n\t}\r\n}\r\n\n\n\tuniform sampler2D positionData;\n\tuniform sampler2D velocityData;\n\n\tattribute vec2 particleUV;\n\tvarying vec4 color;\n\n\n\nconst float POINT_SIZE = 1.0;\n\tvoid main(){\n\t\tvec2 p = unpackParticlePosition(texture2D(positionData, particleUV));\n\t\tvec2 v = unpackParticleVelocity(texture2D(velocityData, particleUV));\n\t\tgl_PointSize = POINT_SIZE;\n\t\tgl_Position = vec4(p, 0.0, 1.0);\n\t\tfloat speed = length(v);\n\t\tfloat x = clamp(speed * 2.0, 0., 1.);\n\t\tcolor.rgb = (\n\t\t\t\tmix(vec3(40.4, 0.0, 35.0) / 300.0, vec3(0.2, 47.8, 100) / 100.0, x)\n\t\t\t\t+ (vec3(63.1, 92.5, 100) / 100.) * x*x*x * .1\n\t\t);\n\t\tcolor.a = 1.0;\n\t}\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nvarying vec4 color;\n\n\tvoid main(){\n\t\tgl_FragColor = vec4(color);\n\t}\n\n\n";
	}
	,__class__: ColorParticleMotion
});
var MouseDye = function() {
	UpdateDye.call(this);
};
$hxClasses["MouseDye"] = MouseDye;
MouseDye.__name__ = ["MouseDye"];
MouseDye.__super__ = UpdateDye;
MouseDye.prototype = $extend(UpdateDye.prototype,{
	set_duration_offset: function(value) {
		this.duration_offset = value;
		this._fragSource = shaderblox_glsl_GLSLTools.injectConstValue(this._fragSource,"duration_offset",value);
		if(this._ready) {
			this.destroy();
		}
		return value;
	}
	,createProperties: function() {
		UpdateDye.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UBool("isMouseDown",null);
		this.isMouseDown = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UVec2("mouse",null);
		this.mouse = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UVec2("lastMouse",null);
		this.lastMouse = instance2;
		this._uniforms.push(instance2);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nuniform sampler2D dye;\n\tuniform float dt;\n\tuniform float dx;\n\n\tvarying vec2 texelCoord;\n\tvarying vec2 p;\n\n\nfloat distanceToSegment(vec2 a, vec2 b, vec2 p, out float fp){\r\n\tvec2 d = p - a;\r\n\tvec2 x = b - a;\r\n\r\n\tfp = 0.0; \n\tfloat lx = length(x);\r\n\t\r\n\tif(lx <= 0.0001) return length(d);\n\r\n\tfloat projection = dot(d, x / lx); \n\r\n\tfp = projection / lx;\r\n\r\n\tif(projection < 0.0)            return length(d);\r\n\telse if(projection > length(x)) return length(p - b);\r\n\treturn sqrt(abs(dot(d,d) - projection*projection));\r\n}\r\nfloat distanceToSegment(vec2 a, vec2 b, vec2 p){\r\n\tfloat fp;\r\n\treturn distanceToSegment(a, b, p, fp);\r\n}\n\tuniform bool isMouseDown;\n\tuniform vec2 mouse; \n\tuniform vec2 lastMouse;\n\tvoid main(){\n\t\tvec4 color = texture2D(dye, texelCoord);\n    const float duration_offset = 0.02;\n\n    color.r *= (0.9797 + duration_offset);\n    color.g *= (0.9494 + duration_offset);\n    color.b *= (0.9696 + duration_offset);\n\n    color -= sign(color)*(0.006 - (1.0 - color)*0.004);\n\n\t\tif(isMouseDown){\n\t\t\tvec2 mouseVelocity = (mouse - lastMouse)/dt;\n\n\t\t\t\n\t\t\tfloat projection;\n\t\t\tfloat l = distanceToSegment(mouse, lastMouse, p, projection);\n\t\t\tfloat taperFactor = 0.6;\n\t\t\tfloat projectedFraction = 1.0 - clamp(projection, 0.0, 1.0)*taperFactor;\n\t\t\tfloat R = 0.025;\n\t\t\tfloat m = exp(-l/R);\n\n\t\t\tfloat speed = length(mouseVelocity);\n\t\t\tfloat x = clamp((speed * speed * 0.02 - l * 5.0) * projectedFraction, 0., 1.);\n\t\t\tcolor.rgb += m * (\n\t\t\t\tmix(vec3(2.4, 0, 5.9) / 60.0, vec3(0.2, 51.8, 100) / 30.0, x)\n\t\t\t\t\t+ (vec3(100) / 100.) * pow(x, 9.)\n\t\t\t);\n\t\t}\n\n\t\tgl_FragColor = color;\n\t}\n";
	}
	,__class__: MouseDye
});
var MouseForce = function() {
	ApplyForces.call(this);
};
$hxClasses["MouseForce"] = MouseForce;
MouseForce.__name__ = ["MouseForce"];
MouseForce.__super__ = ApplyForces;
MouseForce.prototype = $extend(ApplyForces.prototype,{
	createProperties: function() {
		ApplyForces.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UBool("isMouseDown",null);
		this.isMouseDown = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_uniforms_UVec2("mouse",null);
		this.mouse = instance1;
		this._uniforms.push(instance1);
		var instance2 = new shaderblox_uniforms_UVec2("lastMouse",null);
		this.lastMouse = instance2;
		this._uniforms.push(instance2);
		this._aStride += 0;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\nattribute vec2 vertexPosition;\r\n\r\nuniform float aspectRatio;\r\n\r\nvarying vec2 texelCoord;\r\n\r\n\r\nvarying vec2 p;\n\r\nvoid main() {\r\n\ttexelCoord = vertexPosition;\r\n\t\r\n\tvec2 clipSpace = 2.0*texelCoord - 1.0;\t\n\t\r\n\tp = vec2(clipSpace.x * aspectRatio, clipSpace.y);\r\n\r\n\tgl_Position = vec4(clipSpace, 0.0, 1.0 );\t\r\n}\r\n\n\n\n\n\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\n\r\n\r\n#define PRESSURE_BOUNDARY\r\n#define VELOCITY_BOUNDARY\r\n\r\nuniform vec2 invresolution;\r\nuniform float aspectRatio;\r\n\r\nvec2 clipToAspectSpace(in vec2 p){\r\n    return vec2(p.x * aspectRatio, p.y);\r\n}\r\n\r\nvec2 aspectToTexelSpace(in vec2 p){\r\n    return vec2(p.x / aspectRatio + 1.0 , p.y + 1.0)*.5;\r\n}\r\n\r\n\n#define FLOAT_PACKING_LIB\r\n\r\n\nvec4 packFloat8bitRGBA(in float val) {\r\n    vec4 pack = vec4(1.0, 255.0, 65025.0, 16581375.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec4(pack.yzw / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGBA(in vec4 pack) {\r\n    return dot(pack, vec4(1.0, 1.0 / 255.0, 1.0 / 65025.0, 1.0 / 16581375.0));\r\n}\r\n\r\nvec3 packFloat8bitRGB(in float val) {\r\n    vec3 pack = vec3(1.0, 255.0, 65025.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec3(pack.yz / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRGB(in vec3 pack) {\r\n    return dot(pack, vec3(1.0, 1.0 / 255.0, 1.0 / 65025.0));\r\n}\r\n\r\nvec2 packFloat8bitRG(in float val) {\r\n    vec2 pack = vec2(1.0, 255.0) * val;\r\n    pack = fract(pack);\r\n    pack -= vec2(pack.y / 255.0, 0.0);\r\n    return pack;\r\n}\r\n\r\nfloat unpackFloat8bitRG(in vec2 pack) {\r\n    return dot(pack, vec2(1.0, 1.0 / 255.0));\r\n}\r\n\n\r\nconst float PACK_FLUID_VELOCITY_SCALE = 0.0025; \nconst float PACK_FLUID_PRESSURE_SCALE = 0.00025;\r\nconst float PACK_FLUID_DIVERGENCE_SCALE = 0.25;\r\n\r\nconst bool FLOAT_VELOCITY = true;\r\nconst bool FLOAT_PRESSURE = true;\r\nconst bool FLOAT_DIVERGENCE = true;\r\n\r\n\nvec4 packFluidVelocity(in vec2 v){\r\n    if(FLOAT_VELOCITY){\r\n        return vec4(v, 0.0, 0.0);\r\n    }else{\r\n        vec2 nv = (v * PACK_FLUID_VELOCITY_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRG(nv.x), packFloat8bitRG(nv.y));\r\n    }\r\n}\r\n\r\nvec2 unpackFluidVelocity(in vec4 pv){\r\n    if(FLOAT_VELOCITY){\r\n        return pv.xy;\r\n    }else{    \r\n        const float INV_PACK_FLUID_VELOCITY_SCALE = 1./PACK_FLUID_VELOCITY_SCALE;\r\n        vec2 nv = vec2(unpackFloat8bitRG(pv.xy), unpackFloat8bitRG(pv.zw));\r\n        return (2.0*nv.xy - 1.0)* INV_PACK_FLUID_VELOCITY_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidPressure(in float p){\r\n    if(FLOAT_PRESSURE){\r\n        return vec4(p, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float np = (p * PACK_FLUID_PRESSURE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(np), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidPressure(in vec4 pp){\r\n    if(FLOAT_PRESSURE){\r\n        return pp.x;\r\n    }else{    \r\n        const float INV_PACK_FLUID_PRESSURE_SCALE = 1./PACK_FLUID_PRESSURE_SCALE;\r\n        float np = unpackFloat8bitRGB(pp.rgb);\r\n        return (2.0*np - 1.0) * INV_PACK_FLUID_PRESSURE_SCALE;\r\n    }\r\n}\r\n\r\n\nvec4 packFluidDivergence(in float d){\r\n    if(FLOAT_DIVERGENCE){\r\n        return vec4(d, 0.0, 0.0, 0.0);\r\n    }else{\r\n        float nd = (d * PACK_FLUID_DIVERGENCE_SCALE)*0.5 + 0.5;\r\n        return vec4(packFloat8bitRGB(nd), 0.0);\r\n    }\r\n}\r\n\r\nfloat unpackFluidDivergence(in vec4 pd){\r\n    if(FLOAT_DIVERGENCE){\r\n        return pd.x;\r\n    }else{\r\n        const float INV_PACK_FLUID_DIVERGENCE_SCALE = 1./PACK_FLUID_DIVERGENCE_SCALE;\r\n        float nd = unpackFloat8bitRGB(pd.rgb);\r\n        return (2.0*nd - 1.0) * INV_PACK_FLUID_DIVERGENCE_SCALE;\r\n    }\r\n}\n\r\n\nfloat samplePressue(in sampler2D pressure, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n\r\n    #ifdef PRESSURE_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    #endif\r\n\r\n    return unpackFluidPressure(texture2D(pressure, coord + cellOffset * invresolution));\r\n}\r\n\r\n\r\n\nvec2 sampleVelocity(in sampler2D velocity, in vec2 coord){\r\n    vec2 cellOffset = vec2(0.0, 0.0);\r\n    vec2 multiplier = vec2(1.0, 1.0);\r\n\r\n    #ifdef VELOCITY_BOUNDARY\r\n    \n    \n    \n    \n    \n    \n    cellOffset = -floor(coord);\r\n    multiplier -= 2.0*abs(cellOffset);\r\n    #endif\r\n\r\n    vec2 v = unpackFluidVelocity(texture2D(velocity, coord + cellOffset * invresolution));\r\n    return multiplier * v;\r\n}\r\n\r\n#define sampleDivergence(divergence, coord) unpackFluidDivergence(texture2D(divergence, coord))\r\n\n\nuniform sampler2D velocity;\n\tuniform float dt;\n\tuniform float dx;\n\n\tvarying vec2 texelCoord;\n\tvarying vec2 p;\n\n\nfloat distanceToSegment(vec2 a, vec2 b, vec2 p, out float fp){\r\n\tvec2 d = p - a;\r\n\tvec2 x = b - a;\r\n\r\n\tfp = 0.0; \n\tfloat lx = length(x);\r\n\t\r\n\tif(lx <= 0.0001) return length(d);\n\r\n\tfloat projection = dot(d, x / lx); \n\r\n\tfp = projection / lx;\r\n\r\n\tif(projection < 0.0)            return length(d);\r\n\telse if(projection > length(x)) return length(p - b);\r\n\treturn sqrt(abs(dot(d,d) - projection*projection));\r\n}\r\nfloat distanceToSegment(vec2 a, vec2 b, vec2 p){\r\n\tfloat fp;\r\n\treturn distanceToSegment(a, b, p, fp);\r\n}\n\tuniform bool isMouseDown;\n\tuniform vec2 mouse; \n\tuniform vec2 lastMouse;\n\tvoid main(){\n\t\t\n    vec2 v = sampleVelocity(velocity, texelCoord);\n\t\tv.xy *= 0.999;\n\t\tif(isMouseDown){\n\t\t\tvec2 mouseVelocity = -(lastMouse - mouse)/dt;\n\t\t\t\n\n\t\t\t\n\t\t\tfloat projection;\n\t\t\tfloat l = distanceToSegment(mouse, lastMouse, p, projection);\n\t\t\tfloat taperFactor = 0.6;\n\t\t\tfloat projectedFraction = 1.0 - clamp(projection, 0.0, 1.0)*taperFactor;\n\t\t\tfloat R = 0.015;\n\t\t\tfloat m = exp(-l/R); \n\t\t\tm *= projectedFraction * projectedFraction;\n\t\t\tvec2 targetVelocity = mouseVelocity * dx * 1.4;\n\t\t\tv += (targetVelocity - v)*m;\n\t\t}\n\t\tgl_FragColor = packFluidVelocity(v);\n\t}\n";
	}
	,__class__: MouseForce
});
Math.__name__ = ["Math"];
var PerformanceMonitor = function(lowerBoundFPS,upperBoundFPS,thresholdTime_ms,fpsSampleSize) {
	if(fpsSampleSize == null) {
		fpsSampleSize = 30;
	}
	if(thresholdTime_ms == null) {
		thresholdTime_ms = 3000;
	}
	if(lowerBoundFPS == null) {
		lowerBoundFPS = 30;
	}
	this.upperBoundEnterTime = null;
	this.lowerBoundEnterTime = null;
	this.fpsTooHighCallback = null;
	this.fpsTooLowCallback = null;
	this.fpsIgnoreBounds = [5,180];
	this.lowerBoundFPS = lowerBoundFPS;
	this.upperBoundFPS = upperBoundFPS;
	this.thresholdTime_ms = thresholdTime_ms;
	this.fpsSample = new RollingSample(fpsSampleSize);
};
$hxClasses["PerformanceMonitor"] = PerformanceMonitor;
PerformanceMonitor.__name__ = ["PerformanceMonitor"];
PerformanceMonitor.prototype = {
	recordFrameTime: function(dt_seconds) {
		if(dt_seconds > 0) {
			var fps = 1 / dt_seconds;
			if(!(fps < this.fpsIgnoreBounds[0] && fps > this.fpsIgnoreBounds[1])) {
				this.fpsSample.add(fps);
				if(this.fpsSample.sampleCount >= this.fpsSample.length) {
					var now = new Date().getTime() / 1000 * 1000;
					if(this.fpsSample.average < this.lowerBoundFPS) {
						if(this.lowerBoundEnterTime == null) {
							this.lowerBoundEnterTime = now;
						}
						if(now - this.lowerBoundEnterTime >= this.thresholdTime_ms && this.fpsTooLowCallback != null) {
							this.fpsTooLowCallback((this.lowerBoundFPS - this.fpsSample.average) / this.lowerBoundFPS);
							this.fpsSample.clear();
							this.lowerBoundEnterTime = null;
						}
					} else if(this.fpsSample.average > this.upperBoundFPS) {
						if(this.upperBoundEnterTime == null) {
							this.upperBoundEnterTime = now;
						}
						if(now - this.upperBoundEnterTime >= this.thresholdTime_ms && this.fpsTooHighCallback != null) {
							this.fpsTooHighCallback((this.fpsSample.average - this.upperBoundFPS) / this.upperBoundFPS);
							this.fpsSample.clear();
							this.upperBoundEnterTime = null;
						}
					} else {
						this.lowerBoundEnterTime = null;
						this.upperBoundEnterTime = null;
					}
				}
			}
		}
	}
	,recordFPS: function(fps) {
		if(fps < this.fpsIgnoreBounds[0] && fps > this.fpsIgnoreBounds[1]) {
			return;
		}
		this.fpsSample.add(fps);
		if(this.fpsSample.sampleCount < this.fpsSample.length) {
			return;
		}
		var now = new Date().getTime() / 1000 * 1000;
		if(this.fpsSample.average < this.lowerBoundFPS) {
			if(this.lowerBoundEnterTime == null) {
				this.lowerBoundEnterTime = now;
			}
			if(now - this.lowerBoundEnterTime >= this.thresholdTime_ms && this.fpsTooLowCallback != null) {
				this.fpsTooLowCallback((this.lowerBoundFPS - this.fpsSample.average) / this.lowerBoundFPS);
				this.fpsSample.clear();
				this.lowerBoundEnterTime = null;
			}
		} else if(this.fpsSample.average > this.upperBoundFPS) {
			if(this.upperBoundEnterTime == null) {
				this.upperBoundEnterTime = now;
			}
			if(now - this.upperBoundEnterTime >= this.thresholdTime_ms && this.fpsTooHighCallback != null) {
				this.fpsTooHighCallback((this.fpsSample.average - this.upperBoundFPS) / this.upperBoundFPS);
				this.fpsSample.clear();
				this.upperBoundEnterTime = null;
			}
		} else {
			this.lowerBoundEnterTime = null;
			this.upperBoundEnterTime = null;
		}
	}
	,get_fpsAverage: function() {
		return this.fpsSample.average;
	}
	,get_fpsVariance: function() {
		return this.fpsSample.get_variance();
	}
	,get_fpsStandardDeviation: function() {
		return this.fpsSample.get_standardDeviation();
	}
	,__class__: PerformanceMonitor
};
var RollingSample = function(length) {
	this.m2 = 0;
	this.pos = 0;
	this.sampleCount = 0;
	this.standardDeviation = 0;
	this.variance = 0;
	this.average = 0;
	this.samples = new Array(length);
};
$hxClasses["RollingSample"] = RollingSample;
RollingSample.__name__ = ["RollingSample"];
RollingSample.prototype = {
	add: function(v) {
		var delta;
		if(this.sampleCount >= this.samples.length) {
			var bottomValue = this.samples[this.pos];
			delta = bottomValue - this.average;
			this.average -= delta / (this.sampleCount - 1);
			this.m2 -= delta * (bottomValue - this.average);
		} else {
			this.sampleCount++;
		}
		delta = v - this.average;
		this.average += delta / this.sampleCount;
		this.m2 += delta * (v - this.average);
		this.samples[this.pos] = v;
		this.pos++;
		this.pos %= this.samples.length;
		return this.pos;
	}
	,clear: function() {
		var _g1 = 0;
		var _g = this.samples.length;
		while(_g1 < _g) this.samples[_g1++] = 0;
		this.average = 0;
		this.variance = 0;
		this.standardDeviation = 0;
		this.sampleCount = 0;
		this.m2 = 0;
	}
	,get_variance: function() {
		return this.m2 / (this.sampleCount - 1);
	}
	,get_standardDeviation: function() {
		return Math.sqrt(this.get_variance());
	}
	,get_length: function() {
		return this.samples.length;
	}
	,__class__: RollingSample
};
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( e ) {
		return null;
	}
};
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) {
			a.push(f);
		}
		}
	}
	return a;
};
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
Reflect.deleteField = function(o,field) {
	if(!Object.prototype.hasOwnProperty.call(o,field)) {
		return false;
	}
	delete(o[field]);
	return true;
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) {
		v = parseInt(x);
	}
	if(isNaN(v)) {
		return null;
	}
	return v;
};
Std.random = function(x) {
	if(x <= 0) {
		return 0;
	} else {
		return Math.floor(Math.random() * x);
	}
};
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	__class__: StringBuf
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	if(!(c > 8 && c < 14)) {
		return c == 32;
	} else {
		return true;
	}
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,r,l - r);
	} else {
		return s;
	}
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
	if(r > 0) {
		return HxOverrides.substr(s,0,l - r);
	} else {
		return s;
	}
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.hex = function(n,digits) {
	var s = "";
	while(true) {
		s = "0123456789ABCDEF".charAt(n & 15) + s;
		n >>>= 4;
		if(!(n > 0)) {
			break;
		}
	}
	if(digits != null) {
		while(s.length < digits) s = "0" + s;
	}
	return s;
};
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] };
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; };
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
ValueType.__empty_constructs__ = [ValueType.TNull,ValueType.TInt,ValueType.TFloat,ValueType.TBool,ValueType.TObject,ValueType.TFunction,ValueType.TUnknown];
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClassName = function(c) {
	var a = c.__name__;
	if(a == null) {
		return null;
	}
	return a.join(".");
};
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
};
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) {
		return null;
	}
	return cl;
};
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) {
		return null;
	}
	return e;
};
Type.createInstance = function(cl,args) {
	var _g = args.length;
	switch(_g) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	case 9:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8]);
	case 10:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9]);
	case 11:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10]);
	case 12:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11]);
	case 13:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11],args[12]);
	case 14:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7],args[8],args[9],args[10],args[11],args[12],args[13]);
	default:
		throw new js__$Boot_HaxeError("Too many arguments");
	}
};
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) {
		throw new js__$Boot_HaxeError("No such constructor " + constr);
	}
	if(Reflect.isFunction(f)) {
		if(params == null) {
			throw new js__$Boot_HaxeError("Constructor " + constr + " need parameters");
		}
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) {
		throw new js__$Boot_HaxeError("Constructor " + constr + " does not need parameters");
	}
	return f;
};
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) {
		throw new js__$Boot_HaxeError(index + " is not a valid enum constructor index");
	}
	return Type.createEnum(e,c,params);
};
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "function":
		if(v.__name__ || v.__ename__) {
			return ValueType.TObject;
		}
		return ValueType.TFunction;
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) {
			return ValueType.TInt;
		}
		return ValueType.TFloat;
	case "object":
		if(v == null) {
			return ValueType.TNull;
		}
		var e = v.__enum__;
		if(e != null) {
			return ValueType.TEnum(e);
		}
		var c = js_Boot.getClass(v);
		if(c != null) {
			return ValueType.TClass(c);
		}
		return ValueType.TObject;
	case "string":
		return ValueType.TClass(String);
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
};
var gltoolbox_GeometryTools = function() { };
$hxClasses["gltoolbox.GeometryTools"] = gltoolbox_GeometryTools;
gltoolbox_GeometryTools.__name__ = ["gltoolbox","GeometryTools"];
gltoolbox_GeometryTools.getCachedUnitQuad = function(drawMode) {
	if(drawMode == null) {
		drawMode = 5;
	}
	var unitQuad = gltoolbox_GeometryTools.unitQuadCache.h[drawMode];
	if(unitQuad == null || !snow_modules_opengl_web_GL.gl.isBuffer(unitQuad)) {
		unitQuad = gltoolbox_GeometryTools.createQuad(0,0,1,1,drawMode);
		gltoolbox_GeometryTools.unitQuadCache.h[drawMode] = unitQuad;
	}
	return unitQuad;
};
gltoolbox_GeometryTools.getCachedClipSpaceQuad = function(drawMode) {
	if(drawMode == null) {
		drawMode = 5;
	}
	var clipSpaceQuad = gltoolbox_GeometryTools.clipSpaceQuadCache.h[drawMode];
	if(clipSpaceQuad == null || !snow_modules_opengl_web_GL.gl.isBuffer(clipSpaceQuad)) {
		clipSpaceQuad = gltoolbox_GeometryTools.createQuad(-1,-1,2,2,drawMode);
		gltoolbox_GeometryTools.clipSpaceQuadCache.h[drawMode] = clipSpaceQuad;
	}
	return clipSpaceQuad;
};
gltoolbox_GeometryTools.createUnitQuad = function(drawMode) {
	if(drawMode == null) {
		drawMode = 5;
	}
	return gltoolbox_GeometryTools.createQuad(0,0,1,1,drawMode);
};
gltoolbox_GeometryTools.createClipSpaceQuad = function(drawMode) {
	if(drawMode == null) {
		drawMode = 5;
	}
	return gltoolbox_GeometryTools.createQuad(-1,-1,2,2,drawMode);
};
gltoolbox_GeometryTools.createQuad = function(originX,originY,width,height,drawMode,usage) {
	if(usage == null) {
		usage = 35044;
	}
	if(drawMode == null) {
		drawMode = 5;
	}
	if(height == null) {
		height = 1;
	}
	if(width == null) {
		width = 1;
	}
	if(originY == null) {
		originY = 0;
	}
	if(originX == null) {
		originX = 0;
	}
	var quad = snow_modules_opengl_web_GL.gl.createBuffer();
	var vertices = [];
	switch(drawMode) {
	case 4:case 5:
		vertices = [originX,originY + height,originX,originY,originX + width,originY + height,originX + width,originY];
		if(drawMode == 4) {
			vertices = vertices.concat([originX + width,originY + height,originX,originY]);
		}
		break;
	case 6:
		vertices = [originX,originY + height,originX,originY,originX + width,originY,originX + width,originY + height];
		break;
	}
	snow_modules_opengl_web_GL.gl.bindBuffer(34962,quad);
	var data = new Float32Array(vertices);
	snow_modules_opengl_web_GL.gl.bufferData(34962,data,usage);
	snow_modules_opengl_web_GL.gl.bindBuffer(34962,null);
	return quad;
};
gltoolbox_GeometryTools.boundaryLinesArray = function(width,height) {
	return new Float32Array([0.5,0,0.5,height,0,height - 0.5,width,height - 0.5,width - 0.5,height,width - 0.5,0,width,0.5,0,0.5]);
};
var gltoolbox_TextureTools = function() { };
$hxClasses["gltoolbox.TextureTools"] = gltoolbox_TextureTools;
gltoolbox_TextureTools.__name__ = ["gltoolbox","TextureTools"];
gltoolbox_TextureTools.createTextureFactory = function(params) {
	return function(width,height) {
		return gltoolbox_TextureTools.createTexture(width,height,params);
	};
};
gltoolbox_TextureTools.createFloatTextureRGB = function(width,height) {
	return gltoolbox_TextureTools.createTexture(width,height,{ channelType : 6407, dataType : 5126});
};
gltoolbox_TextureTools.createFloatTextureRGBA = function(width,height) {
	return gltoolbox_TextureTools.createTexture(width,height,{ channelType : 6408, dataType : 5126});
};
gltoolbox_TextureTools.createTexture = function(width,height,params,data) {
	if(params == null) {
		params = { };
	}
	if(data == null) {
		data = null;
	}
	var _g = 0;
	var _g1 = Reflect.fields(gltoolbox_TextureTools.defaultParams);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		if(!Object.prototype.hasOwnProperty.call(params,f)) {
			params[f] = Reflect.field(gltoolbox_TextureTools.defaultParams,f);
		}
	}
	var texture = snow_modules_opengl_web_GL.gl.createTexture();
	snow_modules_opengl_web_GL.gl.bindTexture(3553,texture);
	snow_modules_opengl_web_GL.gl.texParameteri(3553,10241,params.filter);
	snow_modules_opengl_web_GL.gl.texParameteri(3553,10240,params.filter);
	snow_modules_opengl_web_GL.gl.texParameteri(3553,10242,params.wrapS);
	snow_modules_opengl_web_GL.gl.texParameteri(3553,10243,params.wrapT);
	snow_modules_opengl_web_GL.gl.pixelStorei(3317,params.unpackAlignment);
	snow_modules_opengl_web_GL.gl.pixelStorei(37440,params.webGLFlipY?1:0);
	snow_modules_opengl_web_GL.gl.texImage2D(3553,0,params.channelType,width,height,0,params.channelType,params.dataType,data);
	snow_modules_opengl_web_GL.gl.bindTexture(3553,null);
	return texture;
};
var gltoolbox_render_ITargetable = function() { };
$hxClasses["gltoolbox.render.ITargetable"] = gltoolbox_render_ITargetable;
gltoolbox_render_ITargetable.__name__ = ["gltoolbox","render","ITargetable"];
gltoolbox_render_ITargetable.prototype = {
	__class__: gltoolbox_render_ITargetable
};
var gltoolbox_render_RenderTarget = function(width,height,textureFactory) {
	if(textureFactory == null) {
		textureFactory = function(width1,height1) {
			return gltoolbox_TextureTools.createTexture(width1,height1,null);
		};
	}
	this.width = width;
	this.height = height;
	this.textureFactory = textureFactory;
	this.texture = textureFactory(width,height);
	if(gltoolbox_render_RenderTarget.textureQuad == null) {
		gltoolbox_render_RenderTarget.textureQuad = gltoolbox_GeometryTools.getCachedUnitQuad(5);
	}
	this.frameBufferObject = snow_modules_opengl_web_GL.gl.createFramebuffer();
	var newTexture = this.textureFactory(width,height);
	snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.frameBufferObject);
	snow_modules_opengl_web_GL.gl.framebufferTexture2D(36160,36064,3553,newTexture,0);
	if(this.texture != null) {
		var resampler = gltoolbox_shaders_Resample.instance;
		var _this = resampler.texture;
		_this.dirty = true;
		_this.data = this.texture;
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.frameBufferObject);
		snow_modules_opengl_web_GL.gl.viewport(0,0,width,height);
		snow_modules_opengl_web_GL.gl.bindBuffer(34962,gltoolbox_render_RenderTarget.textureQuad);
		if(resampler._active) {
			var _g = 0;
			var _g1 = resampler._uniforms;
			while(_g < _g1.length) {
				var u = _g1[_g];
				++_g;
				u.apply();
			}
			var offset = 0;
			var _g11 = 0;
			var _g2 = resampler._attributes.length;
			while(_g11 < _g2) {
				var att = resampler._attributes[_g11++];
				var location = att.location;
				if(location != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,resampler._aStride,offset);
				}
				offset += att.byteSize;
			}
		} else {
			if(!resampler._ready) {
				resampler.create();
			}
			snow_modules_opengl_web_GL.gl.useProgram(resampler._prog);
			var _g3 = 0;
			var _g12 = resampler._uniforms;
			while(_g3 < _g12.length) {
				var u1 = _g12[_g3];
				++_g3;
				u1.apply();
			}
			var offset1 = 0;
			var _g13 = 0;
			var _g4 = resampler._attributes.length;
			while(_g13 < _g4) {
				var att1 = resampler._attributes[_g13++];
				var location1 = att1.location;
				if(location1 != -1) {
					snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
					snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,resampler._aStride,offset1);
				}
				offset1 += att1.byteSize;
			}
			resampler._active = true;
		}
		snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
		resampler.deactivate();
		snow_modules_opengl_web_GL.gl.deleteTexture(this.texture);
	} else {
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.frameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(16384);
	}
	this.width = width;
	this.height = height;
	this.texture = newTexture;
};
$hxClasses["gltoolbox.render.RenderTarget"] = gltoolbox_render_RenderTarget;
gltoolbox_render_RenderTarget.__name__ = ["gltoolbox","render","RenderTarget"];
gltoolbox_render_RenderTarget.__interfaces__ = [gltoolbox_render_ITargetable];
gltoolbox_render_RenderTarget.prototype = {
	resize: function(width,height) {
		var newTexture = this.textureFactory(width,height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.frameBufferObject);
		snow_modules_opengl_web_GL.gl.framebufferTexture2D(36160,36064,3553,newTexture,0);
		if(this.texture != null) {
			var resampler = gltoolbox_shaders_Resample.instance;
			var _this = resampler.texture;
			_this.dirty = true;
			_this.data = this.texture;
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.frameBufferObject);
			snow_modules_opengl_web_GL.gl.viewport(0,0,width,height);
			snow_modules_opengl_web_GL.gl.bindBuffer(34962,gltoolbox_render_RenderTarget.textureQuad);
			if(resampler._active) {
				var _g = 0;
				var _g1 = resampler._uniforms;
				while(_g < _g1.length) {
					var u = _g1[_g];
					++_g;
					u.apply();
				}
				var offset = 0;
				var _g11 = 0;
				var _g2 = resampler._attributes.length;
				while(_g11 < _g2) {
					var att = resampler._attributes[_g11++];
					var location = att.location;
					if(location != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,resampler._aStride,offset);
					}
					offset += att.byteSize;
				}
			} else {
				if(!resampler._ready) {
					resampler.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(resampler._prog);
				var _g3 = 0;
				var _g12 = resampler._uniforms;
				while(_g3 < _g12.length) {
					var u1 = _g12[_g3];
					++_g3;
					u1.apply();
				}
				var offset1 = 0;
				var _g13 = 0;
				var _g4 = resampler._attributes.length;
				while(_g13 < _g4) {
					var att1 = resampler._attributes[_g13++];
					var location1 = att1.location;
					if(location1 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,resampler._aStride,offset1);
					}
					offset1 += att1.byteSize;
				}
				resampler._active = true;
			}
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			resampler.deactivate();
			snow_modules_opengl_web_GL.gl.deleteTexture(this.texture);
		} else {
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.frameBufferObject);
			snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
			snow_modules_opengl_web_GL.gl.clear(16384);
		}
		this.width = width;
		this.height = height;
		this.texture = newTexture;
		return this;
	}
	,activate: function() {
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.frameBufferObject);
	}
	,clear: function(mask) {
		if(mask == null) {
			mask = 16384;
		}
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.frameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(mask);
	}
	,dispose: function() {
		snow_modules_opengl_web_GL.gl.deleteFramebuffer(this.frameBufferObject);
		snow_modules_opengl_web_GL.gl.deleteTexture(this.texture);
	}
	,__class__: gltoolbox_render_RenderTarget
};
var gltoolbox_render_RenderTarget2Phase = function(width,height,textureFactory) {
	if(textureFactory == null) {
		textureFactory = function(width1,height1) {
			return gltoolbox_TextureTools.createTexture(width1,height1,null);
		};
	}
	this.width = width;
	this.height = height;
	this.textureFactory = textureFactory;
	if(gltoolbox_render_RenderTarget2Phase.textureQuad == null) {
		gltoolbox_render_RenderTarget2Phase.textureQuad = gltoolbox_GeometryTools.getCachedUnitQuad(5);
	}
	this.writeFrameBufferObject = snow_modules_opengl_web_GL.gl.createFramebuffer();
	this.readFrameBufferObject = snow_modules_opengl_web_GL.gl.createFramebuffer();
	this.resize(width,height);
};
$hxClasses["gltoolbox.render.RenderTarget2Phase"] = gltoolbox_render_RenderTarget2Phase;
gltoolbox_render_RenderTarget2Phase.__name__ = ["gltoolbox","render","RenderTarget2Phase"];
gltoolbox_render_RenderTarget2Phase.__interfaces__ = [gltoolbox_render_ITargetable];
gltoolbox_render_RenderTarget2Phase.prototype = {
	resize: function(width,height) {
		var newWriteToTexture = this.textureFactory(width,height);
		var newReadFromTexture = this.textureFactory(width,height);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.framebufferTexture2D(36160,36064,3553,newWriteToTexture,0);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.readFrameBufferObject);
		snow_modules_opengl_web_GL.gl.framebufferTexture2D(36160,36064,3553,newReadFromTexture,0);
		if(this.readFromTexture != null) {
			var resampler = gltoolbox_shaders_Resample.instance;
			var _this = resampler.texture;
			_this.dirty = true;
			_this.data = this.readFromTexture;
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.readFrameBufferObject);
			snow_modules_opengl_web_GL.gl.viewport(0,0,width,height);
			snow_modules_opengl_web_GL.gl.bindBuffer(34962,gltoolbox_render_RenderTarget2Phase.textureQuad);
			if(resampler._active) {
				var _g = 0;
				var _g1 = resampler._uniforms;
				while(_g < _g1.length) {
					var u = _g1[_g];
					++_g;
					u.apply();
				}
				var offset = 0;
				var _g11 = 0;
				var _g2 = resampler._attributes.length;
				while(_g11 < _g2) {
					var att = resampler._attributes[_g11++];
					var location = att.location;
					if(location != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location,att.itemCount,att.type,false,resampler._aStride,offset);
					}
					offset += att.byteSize;
				}
			} else {
				if(!resampler._ready) {
					resampler.create();
				}
				snow_modules_opengl_web_GL.gl.useProgram(resampler._prog);
				var _g3 = 0;
				var _g12 = resampler._uniforms;
				while(_g3 < _g12.length) {
					var u1 = _g12[_g3];
					++_g3;
					u1.apply();
				}
				var offset1 = 0;
				var _g13 = 0;
				var _g4 = resampler._attributes.length;
				while(_g13 < _g4) {
					var att1 = resampler._attributes[_g13++];
					var location1 = att1.location;
					if(location1 != -1) {
						snow_modules_opengl_web_GL.gl.enableVertexAttribArray(location1);
						snow_modules_opengl_web_GL.gl.vertexAttribPointer(location1,att1.itemCount,att1.type,false,resampler._aStride,offset1);
					}
					offset1 += att1.byteSize;
				}
				resampler._active = true;
			}
			snow_modules_opengl_web_GL.gl.drawArrays(5,0,4);
			resampler.deactivate();
			snow_modules_opengl_web_GL.gl.deleteTexture(this.readFromTexture);
		} else {
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.readFrameBufferObject);
			snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
			snow_modules_opengl_web_GL.gl.clear(16384);
		}
		if(this.writeToTexture != null) {
			snow_modules_opengl_web_GL.gl.deleteTexture(this.writeToTexture);
		} else {
			snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.writeFrameBufferObject);
			snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
			snow_modules_opengl_web_GL.gl.clear(16384);
		}
		this.width = width;
		this.height = height;
		this.writeToTexture = newWriteToTexture;
		this.readFromTexture = newReadFromTexture;
		return this;
	}
	,activate: function() {
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.writeFrameBufferObject);
	}
	,swap: function() {
		this.tmpFBO = this.writeFrameBufferObject;
		this.writeFrameBufferObject = this.readFrameBufferObject;
		this.readFrameBufferObject = this.tmpFBO;
		this.tmpTex = this.writeToTexture;
		this.writeToTexture = this.readFromTexture;
		this.readFromTexture = this.tmpTex;
	}
	,clear: function(mask) {
		if(mask == null) {
			mask = 16384;
		}
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.readFrameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(mask);
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(mask);
	}
	,clearRead: function(mask) {
		if(mask == null) {
			mask = 16384;
		}
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.readFrameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(mask);
	}
	,clearWrite: function(mask) {
		if(mask == null) {
			mask = 16384;
		}
		snow_modules_opengl_web_GL.gl.bindFramebuffer(36160,this.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.clearColor(0,0,0,1);
		snow_modules_opengl_web_GL.gl.clear(mask);
	}
	,dispose: function() {
		snow_modules_opengl_web_GL.gl.deleteFramebuffer(this.writeFrameBufferObject);
		snow_modules_opengl_web_GL.gl.deleteFramebuffer(this.readFrameBufferObject);
		snow_modules_opengl_web_GL.gl.deleteTexture(this.writeToTexture);
		snow_modules_opengl_web_GL.gl.deleteTexture(this.readFromTexture);
	}
	,__class__: gltoolbox_render_RenderTarget2Phase
};
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = ["js","Boot"];
js_Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
};
js_Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js_Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0;
		var _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js_Boot.__string_rec(v1,"");
		}
	}
	var d;
	var tmp;
	if(typeof(document) != "undefined") {
		d = document.getElementById("haxe:trace");
		tmp = d != null;
	} else {
		tmp = false;
	}
	if(tmp) {
		d.innerHTML += js_Boot.__unhtml(msg) + "<br/>";
	} else if(typeof console != "undefined" && console.log != null) {
		console.log(msg);
	}
};
js_Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0?",":"") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = intf[_g1++];
			if(i == cl || js_Boot.__interfLoop(i,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		if((o instanceof Array)) {
			return o.__enum__ == null;
		} else {
			return false;
		}
		break;
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return true;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return (o|0) === o;
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					return true;
				}
				if(js_Boot.__interfLoop(js_Boot.getClass(o),cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(o instanceof cl) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class?o.__name__ != null:false) {
			return true;
		}
		if(cl == Enum?o.__ename__ != null:false) {
			return true;
		}
		return o.__enum__ == cl;
	}
};
js_Boot.__cast = function(o,t) {
	if(js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw new js__$Boot_HaxeError("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var gltoolbox_shaders_Resample = function() {
	shaderblox_ShaderBase.call(this);
};
$hxClasses["gltoolbox.shaders.Resample"] = gltoolbox_shaders_Resample;
gltoolbox_shaders_Resample.__name__ = ["gltoolbox","shaders","Resample"];
gltoolbox_shaders_Resample.__super__ = shaderblox_ShaderBase;
gltoolbox_shaders_Resample.prototype = $extend(shaderblox_ShaderBase.prototype,{
	createProperties: function() {
		shaderblox_ShaderBase.prototype.createProperties.call(this);
		var instance = new shaderblox_uniforms_UTexture("texture",null,false);
		this.texture = instance;
		this._uniforms.push(instance);
		var instance1 = new shaderblox_attributes_FloatAttribute("vertexPosition",0,2);
		this.vertexPosition = instance1;
		this._attributes.push(instance1);
		this._aStride += 8;
	}
	,initSources: function() {
		this._vertSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nattribute vec2 vertexPosition;\n\tvarying vec2 texelCoord;\n\n\tvoid main(){\n\t\ttexelCoord = vertexPosition;\n\t\tgl_Position = vec4(vertexPosition*2.0 - 1.0, 0.0, 1.0 );\n\t}\n";
		this._fragSource = "\nprecision lowp float;\nprecision lowp sampler2D;\n//asd\n\n\nuniform sampler2D texture;\n\n\tvarying vec2 texelCoord;\n\n\tvoid main(){\n\t\tgl_FragColor = texture2D(texture, texelCoord);\n\t}\n";
	}
	,__class__: gltoolbox_shaders_Resample
});
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = ["haxe","IMap"];
haxe_IMap.prototype = {
	__class__: haxe_IMap
};
var haxe_Log = function() { };
$hxClasses["haxe.Log"] = haxe_Log;
haxe_Log.__name__ = ["haxe","Log"];
haxe_Log.trace = function(v,infos) {
	js_Boot.__trace(v,infos);
};
var haxe_Serializer = function() {
	this.buf = new StringBuf();
	this.cache = [];
	this.useCache = haxe_Serializer.USE_CACHE;
	this.useEnumIndex = haxe_Serializer.USE_ENUM_INDEX;
	this.shash = new haxe_ds_StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe_Serializer;
haxe_Serializer.__name__ = ["haxe","Serializer"];
haxe_Serializer.run = function(v) {
	var s = new haxe_Serializer();
	s.serialize(v);
	return s.toString();
};
haxe_Serializer.prototype = {
	toString: function() {
		return this.buf.b;
	}
	,serializeString: function(s) {
		var _this = this.shash;
		var x = __map_reserved[s] != null?_this.getReserved(s):_this.h[s];
		if(x != null) {
			this.buf.b += "R";
			this.buf.b += x == null?"null":"" + x;
			return;
		}
		var _this1 = this.shash;
		var value = this.scount++;
		if(__map_reserved[s] != null) {
			_this1.setReserved(s,value);
		} else {
			_this1.h[s] = value;
		}
		this.buf.b += "y";
		s = encodeURIComponent(s);
		this.buf.b += Std.string(s.length);
		this.buf.b += ":";
		this.buf.b += s == null?"null":"" + s;
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0;
		var _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				this.buf.b += i == null?"null":"" + i;
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeFields: function(v) {
		var _g = 0;
		var _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serialize: function(v) {
		var _g = Type["typeof"](v);
		switch(_g[1]) {
		case 0:
			this.buf.b += "n";
			break;
		case 1:
			var v1 = v;
			if(v1 == 0) {
				this.buf.b += "z";
				return;
			}
			this.buf.b += "i";
			this.buf.b += v1 == null?"null":"" + v1;
			break;
		case 2:
			var v2 = v;
			if(isNaN(v2)) {
				this.buf.b += "k";
			} else if(!isFinite(v2)) {
				this.buf.b += v2 < 0?"m":"p";
			} else {
				this.buf.b += "d";
				this.buf.b += v2 == null?"null":"" + v2;
			}
			break;
		case 3:
			this.buf.b += v?"t":"f";
			break;
		case 4:
			if(js_Boot.__instanceof(v,Class)) {
				var className = Type.getClassName(v);
				this.buf.b += "A";
				this.serializeString(className);
			} else if(js_Boot.__instanceof(v,Enum)) {
				this.buf.b += "B";
				this.serializeString(Type.getEnumName(v));
			} else {
				if(this.useCache && this.serializeRef(v)) {
					return;
				}
				this.buf.b += "o";
				this.serializeFields(v);
			}
			break;
		case 5:
			throw new js__$Boot_HaxeError("Cannot serialize function");
			break;
		case 6:
			var c = _g[2];
			if(c == String) {
				this.serializeString(v);
				return;
			}
			if(this.useCache && this.serializeRef(v)) {
				return;
			}
			switch(c) {
			case Array:
				var ucount = 0;
				this.buf.b += "a";
				var _g1 = 0;
				var _g2 = v["length"];
				while(_g1 < _g2) {
					var i = _g1++;
					if(v[i] == null) {
						++ucount;
					} else {
						if(ucount > 0) {
							if(ucount == 1) {
								this.buf.b += "n";
							} else {
								this.buf.b += "u";
								this.buf.b += ucount == null?"null":"" + ucount;
							}
							ucount = 0;
						}
						this.serialize(v[i]);
					}
				}
				if(ucount > 0) {
					if(ucount == 1) {
						this.buf.b += "n";
					} else {
						this.buf.b += "u";
						this.buf.b += ucount == null?"null":"" + ucount;
					}
				}
				this.buf.b += "h";
				break;
			case Date:
				this.buf.b += "v";
				this.buf.b += Std.string(v.getTime());
				break;
			case List:
				this.buf.b += "l";
				var _g_head = v.h;
				while(_g_head != null) {
					var val = _g_head.item;
					_g_head = _g_head.next;
					this.serialize(val);
				}
				this.buf.b += "h";
				break;
			case haxe_ds_IntMap:
				this.buf.b += "q";
				var v3 = v;
				var k = v3.keys();
				while(k.hasNext()) {
					var k1 = k.next();
					this.buf.b += ":";
					this.buf.b += k1 == null?"null":"" + k1;
					this.serialize(v3.h[k1]);
				}
				this.buf.b += "h";
				break;
			case haxe_ds_ObjectMap:
				this.buf.b += "M";
				var v4 = v;
				var k2 = v4.keys();
				while(k2.hasNext()) {
					var k3 = k2.next();
					var id = Reflect.field(k3,"__id__");
					Reflect.deleteField(k3,"__id__");
					this.serialize(k3);
					k3["__id__"] = id;
					this.serialize(v4.h[k3.__id__]);
				}
				this.buf.b += "h";
				break;
			case haxe_ds_StringMap:
				this.buf.b += "b";
				var v5 = v;
				var k4 = v5.keys();
				while(k4.hasNext()) {
					var k5 = k4.next();
					this.serializeString(k5);
					this.serialize(__map_reserved[k5] != null?v5.getReserved(k5):v5.h[k5]);
				}
				this.buf.b += "h";
				break;
			case haxe_io_Bytes:
				var v6 = v;
				this.buf.b += "s";
				this.buf.b += Std.string(Math.ceil(v6.length * 8 / 6));
				this.buf.b += ":";
				var i1 = 0;
				var max = v6.length - 2;
				var b64 = haxe_Serializer.BASE64_CODES;
				if(b64 == null) {
					var length = haxe_Serializer.BASE64.length;
					b64 = new Array(length);
					var _g11 = 0;
					var _g3 = haxe_Serializer.BASE64.length;
					while(_g11 < _g3) {
						var i2 = _g11++;
						b64[i2] = HxOverrides.cca(haxe_Serializer.BASE64,i2);
					}
					haxe_Serializer.BASE64_CODES = b64;
				}
				while(i1 < max) {
					var b1 = v6.b[i1++];
					var b2 = v6.b[i1++];
					var b3 = v6.b[i1++];
					this.buf.b += String.fromCharCode(b64[b1 >> 2]);
					this.buf.b += String.fromCharCode(b64[(b1 << 4 | b2 >> 4) & 63]);
					this.buf.b += String.fromCharCode(b64[(b2 << 2 | b3 >> 6) & 63]);
					this.buf.b += String.fromCharCode(b64[b3 & 63]);
				}
				if(i1 == max) {
					var b11 = v6.b[i1++];
					var b21 = v6.b[i1++];
					this.buf.b += String.fromCharCode(b64[b11 >> 2]);
					this.buf.b += String.fromCharCode(b64[(b11 << 4 | b21 >> 4) & 63]);
					this.buf.b += String.fromCharCode(b64[b21 << 2 & 63]);
				} else if(i1 == max + 1) {
					var b12 = v6.b[i1++];
					this.buf.b += String.fromCharCode(b64[b12 >> 2]);
					this.buf.b += String.fromCharCode(b64[b12 << 4 & 63]);
				}
				break;
			default:
				if(this.useCache) {
					this.cache.pop();
				}
				if(v.hxSerialize != null) {
					this.buf.b += "C";
					this.serializeString(Type.getClassName(c));
					if(this.useCache) {
						this.cache.push(v);
					}
					v.hxSerialize(this);
					this.buf.b += "g";
				} else {
					this.buf.b += "c";
					this.serializeString(Type.getClassName(c));
					if(this.useCache) {
						this.cache.push(v);
					}
					this.serializeFields(v);
				}
			}
			break;
		case 7:
			if(this.useCache) {
				if(this.serializeRef(v)) {
					return;
				}
				this.cache.pop();
			}
			this.buf.b += Std.string(this.useEnumIndex?"j":"w");
			this.serializeString(Type.getEnumName(_g[2]));
			if(this.useEnumIndex) {
				this.buf.b += ":";
				this.buf.b += Std.string(v[1]);
			} else {
				this.serializeString(v[0]);
			}
			this.buf.b += ":";
			var l = v["length"];
			this.buf.b += Std.string(l - 2);
			var _g12 = 2;
			var _g4 = l;
			while(_g12 < _g4) this.serialize(v[_g12++]);
			if(this.useCache) {
				this.cache.push(v);
			}
			break;
		default:
			throw new js__$Boot_HaxeError("Cannot serialize " + Std.string(v));
		}
	}
	,__class__: haxe_Serializer
};
var haxe__$Unserializer_DefaultResolver = function() {
};
$hxClasses["haxe._Unserializer.DefaultResolver"] = haxe__$Unserializer_DefaultResolver;
haxe__$Unserializer_DefaultResolver.__name__ = ["haxe","_Unserializer","DefaultResolver"];
haxe__$Unserializer_DefaultResolver.prototype = {
	resolveClass: function(name) {
		return Type.resolveClass(name);
	}
	,resolveEnum: function(name) {
		return Type.resolveEnum(name);
	}
	,__class__: haxe__$Unserializer_DefaultResolver
};
var haxe_Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = [];
	this.cache = [];
	var r = haxe_Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = new haxe__$Unserializer_DefaultResolver();
		haxe_Unserializer.DEFAULT_RESOLVER = r;
	}
	this.resolver = r;
};
$hxClasses["haxe.Unserializer"] = haxe_Unserializer;
haxe_Unserializer.__name__ = ["haxe","Unserializer"];
haxe_Unserializer.initCodes = function() {
	var codes = [];
	var _g1 = 0;
	var _g = haxe_Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe_Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe_Unserializer.run = function(v) {
	return new haxe_Unserializer(v).unserialize();
};
haxe_Unserializer.prototype = {
	readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) {
				break;
			}
			if(c == 45) {
				if(this.pos != fpos) {
					break;
				}
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) {
				break;
			}
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) {
			k *= -1;
		}
		return k;
	}
	,readFloat: function() {
		var p1 = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) {
				break;
			}
			if(c >= 43 && c < 58 || c == 101 || c == 69) {
				this.pos++;
			} else {
				break;
			}
		}
		return parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) {
				throw new js__$Boot_HaxeError("Invalid object");
			}
			if(this.buf.charCodeAt(this.pos) == 103) {
				break;
			}
			var k = this.unserialize();
			if(typeof(k) != "string") {
				throw new js__$Boot_HaxeError("Invalid object key");
			}
			o[k] = this.unserialize();
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) {
			throw new js__$Boot_HaxeError("Invalid enum format");
		}
		var nargs = this.readDigits();
		if(nargs == 0) {
			return Type.createEnum(edecl,tag);
		}
		var args = [];
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		switch(this.buf.charCodeAt(this.pos++)) {
		case 65:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw new js__$Boot_HaxeError("Class not found " + name);
			}
			return cl;
		case 66:
			var name1 = this.unserialize();
			var e = this.resolver.resolveEnum(name1);
			if(e == null) {
				throw new js__$Boot_HaxeError("Enum not found " + name1);
			}
			return e;
		case 67:
			var name2 = this.unserialize();
			var cl1 = this.resolver.resolveClass(name2);
			if(cl1 == null) {
				throw new js__$Boot_HaxeError("Class not found " + name2);
			}
			var o = Type.createEmptyInstance(cl1);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) {
				throw new js__$Boot_HaxeError("Invalid custom data");
			}
			return o;
		case 77:
			var h = new haxe_ds_ObjectMap();
			this.cache.push(h);
			while(this.buf.charCodeAt(this.pos) != 104) h.set(this.unserialize(),this.unserialize());
			this.pos++;
			return h;
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) {
				throw new js__$Boot_HaxeError("Invalid string reference");
			}
			return this.scache[n];
		case 97:
			var a = [];
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n1 = this.readDigits();
					a[a.length + n1 - 1] = null;
				} else {
					a.push(this.unserialize());
				}
			}
			return a;
		case 98:
			var h1 = new haxe_ds_StringMap();
			this.cache.push(h1);
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				var value = this.unserialize();
				if(__map_reserved[s] != null) {
					h1.setReserved(s,value);
				} else {
					h1.h[s] = value;
				}
			}
			this.pos++;
			return h1;
		case 99:
			var name3 = this.unserialize();
			var cl2 = this.resolver.resolveClass(name3);
			if(cl2 == null) {
				throw new js__$Boot_HaxeError("Class not found " + name3);
			}
			var o1 = Type.createEmptyInstance(cl2);
			this.cache.push(o1);
			this.unserializeObject(o1);
			return o1;
		case 100:
			return this.readFloat();
		case 102:
			return false;
		case 105:
			return this.readDigits();
		case 106:
			var name4 = this.unserialize();
			var edecl = this.resolver.resolveEnum(name4);
			if(edecl == null) {
				throw new js__$Boot_HaxeError("Enum not found " + name4);
			}
			this.pos++;
			var index = this.readDigits();
			var tag = edecl.__constructs__.slice()[index];
			if(tag == null) {
				throw new js__$Boot_HaxeError("Unknown enum index " + name4 + "@" + index);
			}
			var e1 = this.unserializeEnum(edecl,tag);
			this.cache.push(e1);
			return e1;
		case 107:
			return NaN;
		case 108:
			var l = new List();
			this.cache.push(l);
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 109:
			return -Infinity;
		case 110:
			return null;
		case 111:
			var o2 = { };
			this.cache.push(o2);
			this.unserializeObject(o2);
			return o2;
		case 112:
			return Infinity;
		case 113:
			var h2 = new haxe_ds_IntMap();
			this.cache.push(h2);
			var c1 = this.buf.charCodeAt(this.pos++);
			while(c1 == 58) {
				var i = this.readDigits();
				var value1 = this.unserialize();
				h2.h[i] = value1;
				c1 = this.buf.charCodeAt(this.pos++);
			}
			if(c1 != 104) {
				throw new js__$Boot_HaxeError("Invalid IntMap format");
			}
			return h2;
		case 114:
			var n2 = this.readDigits();
			if(n2 < 0 || n2 >= this.cache.length) {
				throw new js__$Boot_HaxeError("Invalid reference");
			}
			return this.cache[n2];
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) {
				throw new js__$Boot_HaxeError("Invalid bytes length");
			}
			var codes = haxe_Unserializer.CODES;
			if(codes == null) {
				codes = haxe_Unserializer.initCodes();
				haxe_Unserializer.CODES = codes;
			}
			var i1 = this.pos;
			var rest = len & 3;
			var max = i1 + (len - rest);
			var bytes = new haxe_io_Bytes(new ArrayBuffer((len >> 2) * 3 + (rest >= 2?rest - 1:0)));
			var bpos = 0;
			while(i1 < max) {
				var c11 = codes[buf.charCodeAt(i1++)];
				var c2 = codes[buf.charCodeAt(i1++)];
				bytes.b[bpos++] = (c11 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i1++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i1++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c12 = codes[buf.charCodeAt(i1++)];
				var c21 = codes[buf.charCodeAt(i1++)];
				bytes.b[bpos++] = (c12 << 2 | c21 >> 4) & 255;
				if(rest == 3) {
					var c31 = codes[buf.charCodeAt(i1++)];
					bytes.b[bpos++] = (c21 << 4 | c31 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 116:
			return true;
		case 118:
			var d;
			if(this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && this.buf.charCodeAt(this.pos + 4) == 45) {
				d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
				this.pos += 19;
			} else {
				var t = this.readFloat();
				d = new Date(t);
			}
			this.cache.push(d);
			return d;
		case 119:
			var name5 = this.unserialize();
			var edecl1 = this.resolver.resolveEnum(name5);
			if(edecl1 == null) {
				throw new js__$Boot_HaxeError("Enum not found " + name5);
			}
			var e2 = this.unserializeEnum(edecl1,this.unserialize());
			this.cache.push(e2);
			return e2;
		case 120:
			throw js__$Boot_HaxeError.wrap(this.unserialize());
			break;
		case 121:
			var len1 = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len1) {
				throw new js__$Boot_HaxeError("Invalid string length");
			}
			var s1 = HxOverrides.substr(this.buf,this.pos,len1);
			this.pos += len1;
			s1 = decodeURIComponent(s1.split("+").join(" "));
			this.scache.push(s1);
			return s1;
		case 122:
			return 0;
		default:
		}
		this.pos--;
		throw new js__$Boot_HaxeError("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
	}
	,__class__: haxe_Unserializer
};
var haxe_Utf8 = function(size) {
	this.__b = "";
};
$hxClasses["haxe.Utf8"] = haxe_Utf8;
haxe_Utf8.__name__ = ["haxe","Utf8"];
haxe_Utf8.prototype = {
	__class__: haxe_Utf8
};
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = ["haxe","ds","IntMap"];
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	set: function(key,value) {
		this.h[key] = value;
	}
	,get: function(key) {
		return this.h[key];
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) {
			return false;
		}
		delete(this.h[key]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) if(this.h.hasOwnProperty(key)) {
			a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref[i];
		}};
	}
	,__class__: haxe_ds_IntMap
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.assignId = function(obj) {
	return obj.__id__ = ++haxe_ds_ObjectMap.count;
};
haxe_ds_ObjectMap.getId = function(obj) {
	return obj.__id__;
};
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ || (key.__id__ = ++haxe_ds_ObjectMap.count);
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,get: function(key) {
		return this.h[key.__id__];
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) {
			a.push(this.h.__keys__[key]);
		}
		}
		return HxOverrides.iter(a);
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = ["haxe","ds","StringMap"];
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	set: function(key,value) {
		if(__map_reserved[key] != null) {
			this.setReserved(key,value);
		} else {
			this.h[key] = value;
		}
	}
	,get: function(key) {
		if(__map_reserved[key] != null) {
			return this.getReserved(key);
		}
		return this.h[key];
	}
	,setReserved: function(key,value) {
		if(this.rh == null) {
			this.rh = { };
		}
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) {
			return null;
		} else {
			return this.rh["$" + key];
		}
	}
	,existsReserved: function(key) {
		if(this.rh == null) {
			return false;
		}
		return this.rh.hasOwnProperty("$" + key);
	}
	,remove: function(key) {
		if(__map_reserved[key] != null) {
			key = "$" + key;
			if(this.rh == null || !this.rh.hasOwnProperty(key)) {
				return false;
			}
			delete(this.rh[key]);
			return true;
		} else {
			if(!this.h.hasOwnProperty(key)) {
				return false;
			}
			delete(this.h[key]);
			return true;
		}
	}
	,keys: function() {
		return HxOverrides.iter(this.arrayKeys());
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) {
			out.push(key);
		}
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) {
				out.push(key.substr(1));
			}
			}
		}
		return out;
	}
	,__class__: haxe_ds_StringMap
};
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = ["haxe","io","Bytes"];
haxe_io_Bytes.alloc = function(length) {
	return new haxe_io_Bytes(new ArrayBuffer(length));
};
haxe_io_Bytes.ofString = function(s) {
	var a = [];
	var i = 0;
	while(i < s.length) {
		var c = s.charCodeAt(i++);
		if(55296 <= c && c <= 56319) {
			c = c - 55232 << 10 | s.charCodeAt(i++) & 1023;
		}
		if(c <= 127) {
			a.push(c);
		} else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe_io_Bytes(new Uint8Array(a).buffer);
};
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.fastGet = function(b,pos) {
	return b.bytes[pos];
};
haxe_io_Bytes.prototype = {
	getString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw new js__$Boot_HaxeError(haxe_io_Error.OutsideBounds);
		}
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) {
					break;
				}
				s += fcc(c);
			} else if(c < 224) {
				s += fcc((c & 63) << 6 | b[i++] & 127);
			} else if(c < 240) {
				s += fcc((c & 31) << 12 | (b[i++] & 127) << 6 | b[i++] & 127);
			} else {
				var u = (c & 15) << 18 | (b[i++] & 127) << 12 | (b[i++] & 127) << 6 | b[i++] & 127;
				s += fcc((u >> 10) + 55232);
				s += fcc(u & 1023 | 56320);
			}
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] };
haxe_io_Error.Blocked = ["Blocked",0];
haxe_io_Error.Blocked.toString = $estr;
haxe_io_Error.Blocked.__enum__ = haxe_io_Error;
haxe_io_Error.Overflow = ["Overflow",1];
haxe_io_Error.Overflow.toString = $estr;
haxe_io_Error.Overflow.__enum__ = haxe_io_Error;
haxe_io_Error.OutsideBounds = ["OutsideBounds",2];
haxe_io_Error.OutsideBounds.toString = $estr;
haxe_io_Error.OutsideBounds.__enum__ = haxe_io_Error;
haxe_io_Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe_io_Error; $x.toString = $estr; return $x; };
haxe_io_Error.__empty_constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds];
var haxe_io_FPHelper = function() { };
$hxClasses["haxe.io.FPHelper"] = haxe_io_FPHelper;
haxe_io_FPHelper.__name__ = ["haxe","io","FPHelper"];
haxe_io_FPHelper.i32ToFloat = function(i) {
	var exp = i >>> 23 & 255;
	var sig = i & 8388607;
	if(sig == 0 && exp == 0) {
		return 0.0;
	}
	return (1 - (i >>> 31 << 1)) * (1 + Math.pow(2,-23) * sig) * Math.pow(2,exp - 127);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	if(f == 0) {
		return 0;
	}
	var af = f < 0?-f:f;
	var exp = Math.floor(Math.log(af) / 0.6931471805599453);
	if(exp < -127) {
		exp = -127;
	} else if(exp > 128) {
		exp = 128;
	}
	var sig = Math.round((af / Math.pow(2,exp) - 1) * 8388608);
	if(sig == 8388608 && exp < 128) {
		sig = 0;
		++exp;
	}
	return (f < 0?-2147483648:0) | exp + 127 << 23 | sig;
};
var haxe_io_Path = function(path) {
	switch(path) {
	case ".":case "..":
		this.dir = path;
		this.file = "";
		return;
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		this.dir = HxOverrides.substr(path,0,c2);
		path = HxOverrides.substr(path,c2 + 1,null);
		this.backslash = true;
	} else if(c2 < c1) {
		this.dir = HxOverrides.substr(path,0,c1);
		path = HxOverrides.substr(path,c1 + 1,null);
	} else {
		this.dir = null;
	}
	var cp = path.lastIndexOf(".");
	if(cp != -1) {
		this.ext = HxOverrides.substr(path,cp + 1,null);
		this.file = HxOverrides.substr(path,0,cp);
	} else {
		this.ext = null;
		this.file = path;
	}
};
$hxClasses["haxe.io.Path"] = haxe_io_Path;
haxe_io_Path.__name__ = ["haxe","io","Path"];
haxe_io_Path.extension = function(path) {
	var s = new haxe_io_Path(path);
	if(s.ext == null) {
		return "";
	}
	return s.ext;
};
haxe_io_Path.join = function(paths) {
	var paths1 = paths.filter(function(s) {
		if(s != null) {
			return s != "";
		} else {
			return false;
		}
	});
	if(paths1.length == 0) {
		return "";
	}
	var path = paths1[0];
	var _g1 = 1;
	var _g = paths1.length;
	while(_g1 < _g) {
		path = haxe_io_Path.addTrailingSlash(path);
		path += paths1[_g1++];
	}
	return haxe_io_Path.normalize(path);
};
haxe_io_Path.normalize = function(path) {
	path = path.split("\\").join("/");
	if(path == "/") {
		return "/";
	}
	var target = [];
	var _g = 0;
	var _g1 = path.split("/");
	while(_g < _g1.length) {
		var token = _g1[_g];
		++_g;
		if(token == ".." && target.length > 0 && target[target.length - 1] != "..") {
			target.pop();
		} else if(token != ".") {
			target.push(token);
		}
	}
	var tmp = target.join("/");
	var regex_r = new RegExp("([^:])/+","g".split("u").join(""));
	tmp.replace(regex_r,"$1" + "/");
	var acc_b = "";
	var colon = false;
	var slashes = false;
	var _g11 = 0;
	var _g2 = tmp.length;
	while(_g11 < _g2) {
		var _g21 = HxOverrides.cca(tmp,_g11++);
		if(_g21 == null) {
			colon = false;
			if(slashes) {
				acc_b += "/";
				slashes = false;
			}
			acc_b += Std.string(String.fromCharCode(_g21));
		} else {
			switch(_g21) {
			case 47:
				if(!colon) {
					slashes = true;
				} else {
					colon = false;
					if(slashes) {
						acc_b += "/";
						slashes = false;
					}
					acc_b += Std.string(String.fromCharCode(_g21));
				}
				break;
			case 58:
				acc_b += ":";
				colon = true;
				break;
			default:
				colon = false;
				if(slashes) {
					acc_b += "/";
					slashes = false;
				}
				acc_b += Std.string(String.fromCharCode(_g21));
			}
		}
	}
	return acc_b;
};
haxe_io_Path.addTrailingSlash = function(path) {
	if(path.length == 0) {
		return "/";
	}
	var c1 = path.lastIndexOf("/");
	var c2 = path.lastIndexOf("\\");
	if(c1 < c2) {
		if(c2 != path.length - 1) {
			return path + "\\";
		} else {
			return path;
		}
	} else if(c1 != path.length - 1) {
		return path + "/";
	} else {
		return path;
	}
};
haxe_io_Path.prototype = {
	__class__: haxe_io_Path
};
var js__$Boot_HaxeError = function(val) {
	Error.call(this);
	this.val = val;
	this.message = String(val);
	if(Error.captureStackTrace) {
		Error.captureStackTrace(this,js__$Boot_HaxeError);
	}
};
$hxClasses["js._Boot.HaxeError"] = js__$Boot_HaxeError;
js__$Boot_HaxeError.__name__ = ["js","_Boot","HaxeError"];
js__$Boot_HaxeError.wrap = function(val) {
	if((val instanceof Error)) {
		return val;
	} else {
		return new js__$Boot_HaxeError(val);
	}
};
js__$Boot_HaxeError.__super__ = Error;
js__$Boot_HaxeError.prototype = $extend(Error.prototype,{
	__class__: js__$Boot_HaxeError
});
var js_Web = function() { };
$hxClasses["js.Web"] = js_Web;
js_Web.__name__ = ["js","Web"];
js_Web.getParams = function() {
	var result = new haxe_ds_StringMap();
	var paramObj = eval("\r\n\t\t\t(function() {\r\n\t\t\t    var match,\r\n\t\t\t        pl     = /\\+/g,  // Regex for replacing addition symbol with a space\r\n\t\t\t        search = /([^&=]+)=?([^&]*)/g,\r\n\t\t\t        decode = function (s) { return decodeURIComponent(s.replace(pl, ' ')); },\r\n\t\t\t        query  = window.location.search.substring(1);\r\n\r\n\t\t\t    var urlParams = {};\r\n\t\t\t    while (match = search.exec(query))\r\n\t\t\t       urlParams[decode(match[1])] = decode(match[2]);\r\n\t\t\t    return urlParams;\r\n\t\t\t})();\r\n\t\t");
	var _g = 0;
	var _g1 = Reflect.fields(paramObj);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		var value = Reflect.field(paramObj,f);
		if(__map_reserved[f] != null) {
			result.setReserved(f,value);
		} else {
			result.h[f] = value;
		}
	}
	return result;
};
var js_html__$CanvasElement_CanvasUtil = function() { };
$hxClasses["js.html._CanvasElement.CanvasUtil"] = js_html__$CanvasElement_CanvasUtil;
js_html__$CanvasElement_CanvasUtil.__name__ = ["js","html","_CanvasElement","CanvasUtil"];
js_html__$CanvasElement_CanvasUtil.getContextWebGL = function(canvas,attribs) {
	var _g = 0;
	var _g1 = ["webgl","experimental-webgl"];
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		var ctx = canvas.getContext(name,attribs);
		if(ctx != null) {
			return ctx;
		}
	}
	return null;
};
var js_html_compat_ArrayBuffer = function(a) {
	if((a instanceof Array) && a.__enum__ == null) {
		this.a = a;
		this.byteLength = a.length;
	} else {
		var len = a;
		this.a = [];
		var _g1 = 0;
		var _g = len;
		while(_g1 < _g) this.a[_g1++] = 0;
		this.byteLength = len;
	}
};
$hxClasses["js.html.compat.ArrayBuffer"] = js_html_compat_ArrayBuffer;
js_html_compat_ArrayBuffer.__name__ = ["js","html","compat","ArrayBuffer"];
js_html_compat_ArrayBuffer.sliceImpl = function(begin,end) {
	var u = new Uint8Array(this,begin,end == null?null:end - begin);
	var result = new ArrayBuffer(u.byteLength);
	new Uint8Array(result).set(u);
	return result;
};
js_html_compat_ArrayBuffer.prototype = {
	slice: function(begin,end) {
		return new js_html_compat_ArrayBuffer(this.a.slice(begin,end));
	}
	,__class__: js_html_compat_ArrayBuffer
};
var js_html_compat_Float32Array = function() { };
$hxClasses["js.html.compat.Float32Array"] = js_html_compat_Float32Array;
js_html_compat_Float32Array.__name__ = ["js","html","compat","Float32Array"];
js_html_compat_Float32Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		var _g2 = [];
		var _g21 = 0;
		var _g11 = arr.length << 2;
		while(_g21 < _g11) {
			var i1 = _g21++;
			_g2.push(0);
		}
		arr.buffer = new js_html_compat_ArrayBuffer(_g2);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset >> 2;
		}
		arr = [];
		var _g12 = 0;
		var _g3 = length;
		while(_g12 < _g3) {
			var i2 = _g12++;
			var val = buffer.a[offset++] | buffer.a[offset++] << 8 | buffer.a[offset++] << 16 | buffer.a[offset++] << 24;
			arr.push(haxe_io_FPHelper.i32ToFloat(val));
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		var buffer1 = [];
		var _g4 = 0;
		while(_g4 < arr.length) {
			var f = arr[_g4];
			++_g4;
			var i3 = haxe_io_FPHelper.floatToI32(f);
			buffer1.push(i3 & 255);
			buffer1.push(i3 >> 8 & 255);
			buffer1.push(i3 >> 16 & 255);
			buffer1.push(i3 >>> 24);
		}
		arr.byteLength = arr.length << 2;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(buffer1);
	} else {
		throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js_html_compat_Float32Array._subarray;
	arr.set = js_html_compat_Float32Array._set;
	return arr;
};
js_html_compat_Float32Array._set = function(arg,offset) {
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js__$Boot_HaxeError("TODO");
	}
};
js_html_compat_Float32Array._subarray = function(start,end) {
	var a = js_html_compat_Float32Array._new(this.slice(start,end));
	a.byteOffset = start * 4;
	return a;
};
var js_html_compat_Uint8Array = function() { };
$hxClasses["js.html.compat.Uint8Array"] = js_html_compat_Uint8Array;
js_html_compat_Uint8Array.__name__ = ["js","html","compat","Uint8Array"];
js_html_compat_Uint8Array._new = function(arg1,offset,length) {
	var arr;
	if(typeof(arg1) == "number") {
		arr = [];
		var _g1 = 0;
		var _g = arg1;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = 0;
		}
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else if(js_Boot.__instanceof(arg1,js_html_compat_ArrayBuffer)) {
		var buffer = arg1;
		if(offset == null) {
			offset = 0;
		}
		if(length == null) {
			length = buffer.byteLength - offset;
		}
		if(offset == 0) {
			arr = buffer.a;
		} else {
			arr = buffer.a.slice(offset,offset + length);
		}
		arr.byteLength = arr.length;
		arr.byteOffset = offset;
		arr.buffer = buffer;
	} else if((arg1 instanceof Array) && arg1.__enum__ == null) {
		arr = arg1.slice();
		arr.byteLength = arr.length;
		arr.byteOffset = 0;
		arr.buffer = new js_html_compat_ArrayBuffer(arr);
	} else {
		throw new js__$Boot_HaxeError("TODO " + Std.string(arg1));
	}
	arr.subarray = js_html_compat_Uint8Array._subarray;
	arr.set = js_html_compat_Uint8Array._set;
	return arr;
};
js_html_compat_Uint8Array._set = function(arg,offset) {
	if(js_Boot.__instanceof(arg.buffer,js_html_compat_ArrayBuffer)) {
		var a = arg;
		if(arg.byteLength + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g1 = 0;
		var _g = arg.byteLength;
		while(_g1 < _g) {
			var i = _g1++;
			this[i + offset] = a[i];
		}
	} else if((arg instanceof Array) && arg.__enum__ == null) {
		var a1 = arg;
		if(a1.length + offset > this.byteLength) {
			throw new js__$Boot_HaxeError("set() outside of range");
		}
		var _g11 = 0;
		var _g2 = a1.length;
		while(_g11 < _g2) {
			var i1 = _g11++;
			this[i1 + offset] = a1[i1];
		}
	} else {
		throw new js__$Boot_HaxeError("TODO");
	}
};
js_html_compat_Uint8Array._subarray = function(start,end) {
	var a = js_html_compat_Uint8Array._new(this.slice(start,end));
	a.byteOffset = start;
	return a;
};
var shaderblox_attributes_Attribute = function() { };
$hxClasses["shaderblox.attributes.Attribute"] = shaderblox_attributes_Attribute;
shaderblox_attributes_Attribute.__name__ = ["shaderblox","attributes","Attribute"];
shaderblox_attributes_Attribute.prototype = {
	__class__: shaderblox_attributes_Attribute
};
var shaderblox_attributes_FloatAttribute = function(name,location,nFloats) {
	if(nFloats == null) {
		nFloats = 1;
	}
	this.name = name;
	this.location = location;
	this.byteSize = nFloats * 4;
	this.itemCount = nFloats;
	this.type = 5126;
};
$hxClasses["shaderblox.attributes.FloatAttribute"] = shaderblox_attributes_FloatAttribute;
shaderblox_attributes_FloatAttribute.__name__ = ["shaderblox","attributes","FloatAttribute"];
shaderblox_attributes_FloatAttribute.__super__ = shaderblox_attributes_Attribute;
shaderblox_attributes_FloatAttribute.prototype = $extend(shaderblox_attributes_Attribute.prototype,{
	toString: function() {
		return "[FloatAttribute itemCount=" + this.itemCount + " byteSize=" + this.byteSize + " location=" + this.location + " name=" + this.name + "]";
	}
	,__class__: shaderblox_attributes_FloatAttribute
});
var shaderblox_glsl_GLSLTools = function() { };
$hxClasses["shaderblox.glsl.GLSLTools"] = shaderblox_glsl_GLSLTools;
shaderblox_glsl_GLSLTools.__name__ = ["shaderblox","glsl","GLSLTools"];
shaderblox_glsl_GLSLTools.injectConstValue = function(src,name,value) {
	var _this = shaderblox_glsl_GLSLTools.STORAGE_QUALIFIER_TYPES;
	var types = __map_reserved["const"] != null?_this.getReserved("const"):_this.h["const"];
	var reg = new EReg("const" + "\\s+((" + shaderblox_glsl_GLSLTools.PRECISION_QUALIFIERS.join("|") + ")\\s+)?(" + types.join("|") + ")\\s+([^;]+)","m");
	var src1 = shaderblox_glsl_GLSLTools.stripComments(src);
	var currStr = src1;
	while(reg.match(currStr)) {
		var declarationPos = reg.matchedPos();
		var exploded = shaderblox_glsl_GLSLTools.bracketExplode(reg.matched(0),"()");
		var rootScopeStr = Lambda.fold(exploded.contents,function(n,rs) {
			return rs + (js_Boot.__instanceof(n,shaderblox_glsl__$GLSLTools_StringNode)?n.toString():"");
		},"");
		var rConstName = new EReg("\\b(" + name + ")\\b\\s*=","m");
		if(rConstName.match(rootScopeStr)) {
			var namePos = rConstName.matchedPos();
			var initializerLength = 0;
			initializerLength = rConstName.matchedRight().indexOf(",");
			if(initializerLength == -1) {
				initializerLength = rConstName.matchedRight().length;
			}
			var initializerRangeInRootStr_end = namePos.pos + namePos.len + initializerLength;
			var absoluteOffset = src1.length - currStr.length + declarationPos.pos;
			var initializerRangeAbsolute_start = shaderblox_glsl_GLSLTools.compressedToExploded(exploded,namePos.pos + namePos.len) + absoluteOffset;
			var initializerRangeAbsolute_end = shaderblox_glsl_GLSLTools.compressedToExploded(exploded,initializerRangeInRootStr_end) + absoluteOffset;
			return src1.substring(0,initializerRangeAbsolute_start) + value + src1.substring(initializerRangeAbsolute_end);
		}
		currStr = reg.matchedRight();
	}
	return null;
};
shaderblox_glsl_GLSLTools.compressedToExploded = function(scope,compressedPosition) {
	var stringTotal = 0;
	var nodeTotal = 0;
	var _g1 = 0;
	var _g = scope.contents.length;
	while(_g1 < _g) {
		var n = scope.contents[_g1++];
		var len = n.toString().length;
		if(js_Boot.__instanceof(n,shaderblox_glsl__$GLSLTools_StringNode)) {
			if(stringTotal + len > compressedPosition) {
				break;
			}
			stringTotal += len;
		}
		nodeTotal += len;
	}
	return compressedPosition - stringTotal + nodeTotal;
};
shaderblox_glsl_GLSLTools.extractGlobals = function(src,storageQualifiers) {
	if(storageQualifiers == null) {
		storageQualifiers = shaderblox_glsl_GLSLTools.STORAGE_QUALIFIERS;
	}
	if(src == null) {
		return [];
	}
	var str = shaderblox_glsl_GLSLTools.stripComments(src);
	var globals = [];
	var _g = 0;
	while(_g < storageQualifiers.length) {
		var storageQualifier = storageQualifiers[_g];
		++_g;
		var _this = shaderblox_glsl_GLSLTools.STORAGE_QUALIFIER_TYPES;
		var types = __map_reserved[storageQualifier] != null?_this.getReserved(storageQualifier):_this.h[storageQualifier];
		var reg = new EReg(storageQualifier + "\\s+((" + shaderblox_glsl_GLSLTools.PRECISION_QUALIFIERS.join("|") + ")\\s+)?(" + types.join("|") + ")\\s+([^;]+)","m");
		while(reg.match(str)) {
			var precision = reg.matched(2);
			var type = reg.matched(3);
			var rawNamesStr = reg.matched(4);
			var rName = new EReg("^\\s*([\\w\\d_]+)\\s*(\\[(\\d*)\\])?\\s*(=\\s*(.+))?$","im");
			var _g1 = 0;
			var _g2 = rawNamesStr.split(",");
			while(_g1 < _g2.length) {
				var rawName = _g2[_g1];
				++_g1;
				if(!rName.match(rawName)) {
					continue;
				}
				globals.push({ storageQualifier : storageQualifier, precision : precision, type : type, name : rName.matched(1), arraySize : Std.parseInt(rName.matched(3))});
			}
			str = reg.matchedRight();
		}
	}
	return globals;
};
shaderblox_glsl_GLSLTools.stripComments = function(src) {
	var _this_r = new RegExp("(/\\*([\\s\\S]*?)\\*/)|(//(.*)$)","igm".split("u").join(""));
	return src.replace(_this_r,"");
};
shaderblox_glsl_GLSLTools.unifyLineEndings = function(src) {
	return StringTools.trim(src.split("\r").join("\n").split("\n\n").join("\n"));
};
shaderblox_glsl_GLSLTools.hasMain = function(src) {
	if(src == null) {
		return false;
	}
	var str = shaderblox_glsl_GLSLTools.stripComments(src);
	return shaderblox_glsl_GLSLTools.MAIN_FUNC_REGEX.match(str);
};
shaderblox_glsl_GLSLTools.stripMain = function(src) {
	if(src == null) {
		return null;
	}
	var reg = shaderblox_glsl_GLSLTools.MAIN_FUNC_REGEX;
	if(!reg.match(src)) {
		return src;
	}
	var remainingStr = reg.matchedRight();
	var mainEnd = 0;
	var open = 1;
	var _g1 = 0;
	var _g = remainingStr.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = remainingStr.charAt(i);
		if(c == "{") {
			++open;
		} else if(c == "}") {
			--open;
		}
		if(open == 0) {
			mainEnd = i + 1;
			break;
		}
	}
	return reg.matchedLeft() + remainingStr.substring(mainEnd,remainingStr.length);
};
shaderblox_glsl_GLSLTools.GLSLGlobalToString = function(g) {
	return (g.storageQualifier != null?g.storageQualifier:"") + " " + (g.precision != null?g.precision:"") + " " + g.type + " " + g.name + (g.arraySize != null?"[" + g.arraySize + "]":"") + ";";
};
shaderblox_glsl_GLSLTools.bracketExplode = function(src,brackets) {
	if(brackets.length != 2) {
		return null;
	}
	var open = brackets.charAt(0);
	var close = brackets.charAt(1);
	var root = new shaderblox_glsl__$GLSLTools_ScopeNode();
	var scopeStack = [];
	var currentScope = root;
	var currentNode = null;
	var c;
	var _g1 = 0;
	var _g = src.length;
	while(_g1 < _g) {
		c = src.charAt(_g1++);
		if(c == open) {
			var newScope = new shaderblox_glsl__$GLSLTools_ScopeNode(brackets);
			currentScope.contents.push(newScope);
			scopeStack.push(currentScope);
			currentScope = newScope;
			currentNode = newScope;
		} else if(c == close) {
			currentScope = scopeStack.pop();
			currentNode = currentScope;
		} else {
			if(!js_Boot.__instanceof(currentNode,shaderblox_glsl__$GLSLTools_StringNode)) {
				currentNode = new shaderblox_glsl__$GLSLTools_StringNode();
				currentScope.contents.push(currentNode);
			}
			(js_Boot.__cast(currentNode , shaderblox_glsl__$GLSLTools_StringNode)).contents += c;
		}
	}
	return root;
};
var shaderblox_glsl__$GLSLTools_INode = function() { };
$hxClasses["shaderblox.glsl._GLSLTools.INode"] = shaderblox_glsl__$GLSLTools_INode;
shaderblox_glsl__$GLSLTools_INode.__name__ = ["shaderblox","glsl","_GLSLTools","INode"];
shaderblox_glsl__$GLSLTools_INode.prototype = {
	__class__: shaderblox_glsl__$GLSLTools_INode
};
var shaderblox_glsl__$GLSLTools_StringNode = function(str) {
	if(str == null) {
		str = "";
	}
	this.contents = str;
};
$hxClasses["shaderblox.glsl._GLSLTools.StringNode"] = shaderblox_glsl__$GLSLTools_StringNode;
shaderblox_glsl__$GLSLTools_StringNode.__name__ = ["shaderblox","glsl","_GLSLTools","StringNode"];
shaderblox_glsl__$GLSLTools_StringNode.__interfaces__ = [shaderblox_glsl__$GLSLTools_INode];
shaderblox_glsl__$GLSLTools_StringNode.prototype = {
	toString: function() {
		return this.contents;
	}
	,__class__: shaderblox_glsl__$GLSLTools_StringNode
};
var shaderblox_glsl__$GLSLTools_ScopeNode = function(brackets) {
	this.closeBracket = "";
	this.openBracket = "";
	this.contents = [];
	if(brackets != null) {
		this.openBracket = brackets.charAt(0);
		this.closeBracket = brackets.charAt(1);
	}
};
$hxClasses["shaderblox.glsl._GLSLTools.ScopeNode"] = shaderblox_glsl__$GLSLTools_ScopeNode;
shaderblox_glsl__$GLSLTools_ScopeNode.__name__ = ["shaderblox","glsl","_GLSLTools","ScopeNode"];
shaderblox_glsl__$GLSLTools_ScopeNode.__interfaces__ = [shaderblox_glsl__$GLSLTools_INode];
shaderblox_glsl__$GLSLTools_ScopeNode.prototype = {
	push: function(v) {
		return this.contents.push(v);
	}
	,toString: function() {
		var str = this.openBracket;
		var _g = 0;
		var _g1 = this.contents;
		while(_g < _g1.length) {
			var n = _g1[_g];
			++_g;
			str += n.toString();
		}
		return str + this.closeBracket;
	}
	,__class__: shaderblox_glsl__$GLSLTools_ScopeNode
};
var shaderblox_helpers_GLUniformLocationHelper = function() { };
$hxClasses["shaderblox.helpers.GLUniformLocationHelper"] = shaderblox_helpers_GLUniformLocationHelper;
shaderblox_helpers_GLUniformLocationHelper.__name__ = ["shaderblox","helpers","GLUniformLocationHelper"];
shaderblox_helpers_GLUniformLocationHelper.isValid = function(u) {
	return u != null;
};
var shaderblox_uniforms_IAppliable = function() { };
$hxClasses["shaderblox.uniforms.IAppliable"] = shaderblox_uniforms_IAppliable;
shaderblox_uniforms_IAppliable.__name__ = ["shaderblox","uniforms","IAppliable"];
shaderblox_uniforms_IAppliable.prototype = {
	__class__: shaderblox_uniforms_IAppliable
};
var shaderblox_uniforms_UniformBase_$Bool = function(name,index,data) {
	this.name = name;
	this.location = index;
	this.dirty = true;
	this.data = data;
};
$hxClasses["shaderblox.uniforms.UniformBase_Bool"] = shaderblox_uniforms_UniformBase_$Bool;
shaderblox_uniforms_UniformBase_$Bool.__name__ = ["shaderblox","uniforms","UniformBase_Bool"];
shaderblox_uniforms_UniformBase_$Bool.prototype = {
	set: function(data) {
		this.dirty = true;
		return this.data = data;
	}
	,setDirty: function() {
		this.dirty = true;
	}
	,set_data: function(data) {
		this.dirty = true;
		return this.data = data;
	}
	,__class__: shaderblox_uniforms_UniformBase_$Bool
};
var shaderblox_uniforms_UBool = function(name,index,f) {
	if(f == null) {
		f = false;
	}
	shaderblox_uniforms_UniformBase_$Bool.call(this,name,index,f);
};
$hxClasses["shaderblox.uniforms.UBool"] = shaderblox_uniforms_UBool;
shaderblox_uniforms_UBool.__name__ = ["shaderblox","uniforms","UBool"];
shaderblox_uniforms_UBool.__interfaces__ = [shaderblox_uniforms_IAppliable];
shaderblox_uniforms_UBool.__super__ = shaderblox_uniforms_UniformBase_$Bool;
shaderblox_uniforms_UBool.prototype = $extend(shaderblox_uniforms_UniformBase_$Bool.prototype,{
	apply: function() {
		snow_modules_opengl_web_GL.gl.uniform1i(this.location,this.data?1:0);
		this.dirty = false;
	}
	,__class__: shaderblox_uniforms_UBool
});
var shaderblox_uniforms_UniformBase_$Float = function(name,index,data) {
	this.name = name;
	this.location = index;
	this.dirty = true;
	this.data = data;
};
$hxClasses["shaderblox.uniforms.UniformBase_Float"] = shaderblox_uniforms_UniformBase_$Float;
shaderblox_uniforms_UniformBase_$Float.__name__ = ["shaderblox","uniforms","UniformBase_Float"];
shaderblox_uniforms_UniformBase_$Float.prototype = {
	set: function(data) {
		this.dirty = true;
		return this.data = data;
	}
	,setDirty: function() {
		this.dirty = true;
	}
	,set_data: function(data) {
		this.dirty = true;
		return this.data = data;
	}
	,__class__: shaderblox_uniforms_UniformBase_$Float
};
var shaderblox_uniforms_UFloat = function(name,index,f) {
	if(f == null) {
		f = 0.0;
	}
	shaderblox_uniforms_UniformBase_$Float.call(this,name,index,f);
};
$hxClasses["shaderblox.uniforms.UFloat"] = shaderblox_uniforms_UFloat;
shaderblox_uniforms_UFloat.__name__ = ["shaderblox","uniforms","UFloat"];
shaderblox_uniforms_UFloat.__interfaces__ = [shaderblox_uniforms_IAppliable];
shaderblox_uniforms_UFloat.__super__ = shaderblox_uniforms_UniformBase_$Float;
shaderblox_uniforms_UFloat.prototype = $extend(shaderblox_uniforms_UniformBase_$Float.prototype,{
	apply: function() {
		snow_modules_opengl_web_GL.gl.uniform1f(this.location,this.data);
		this.dirty = false;
	}
	,__class__: shaderblox_uniforms_UFloat
});
var shaderblox_uniforms_UniformBase_$js_$html_$webgl_$Texture = function(name,index,data) {
	this.name = name;
	this.location = index;
	this.dirty = true;
	this.data = data;
};
$hxClasses["shaderblox.uniforms.UniformBase_js_html_webgl_Texture"] = shaderblox_uniforms_UniformBase_$js_$html_$webgl_$Texture;
shaderblox_uniforms_UniformBase_$js_$html_$webgl_$Texture.__name__ = ["shaderblox","uniforms","UniformBase_js_html_webgl_Texture"];
shaderblox_uniforms_UniformBase_$js_$html_$webgl_$Texture.prototype = {
	set: function(data) {
		this.dirty = true;
		return this.data = data;
	}
	,setDirty: function() {
		this.dirty = true;
	}
	,set_data: function(data) {
		this.dirty = true;
		return this.data = data;
	}
	,__class__: shaderblox_uniforms_UniformBase_$js_$html_$webgl_$Texture
};
var shaderblox_uniforms_UTexture = function(name,index,cube) {
	if(cube == null) {
		cube = false;
	}
	this.cube = cube;
	this.type = cube?34067:3553;
	shaderblox_uniforms_UniformBase_$js_$html_$webgl_$Texture.call(this,name,index,null);
};
$hxClasses["shaderblox.uniforms.UTexture"] = shaderblox_uniforms_UTexture;
shaderblox_uniforms_UTexture.__name__ = ["shaderblox","uniforms","UTexture"];
shaderblox_uniforms_UTexture.__interfaces__ = [shaderblox_uniforms_IAppliable];
shaderblox_uniforms_UTexture.__super__ = shaderblox_uniforms_UniformBase_$js_$html_$webgl_$Texture;
shaderblox_uniforms_UTexture.prototype = $extend(shaderblox_uniforms_UniformBase_$js_$html_$webgl_$Texture.prototype,{
	apply: function() {
		if(this.data == null) {
			return;
		}
		var idx = 33984 + this.samplerIndex;
		if(shaderblox_uniforms_UTexture.lastActiveTexture != idx) {
			snow_modules_opengl_web_GL.gl.activeTexture(shaderblox_uniforms_UTexture.lastActiveTexture = idx);
		}
		snow_modules_opengl_web_GL.gl.uniform1i(this.location,this.samplerIndex);
		snow_modules_opengl_web_GL.gl.bindTexture(this.type,this.data);
		this.dirty = false;
	}
	,__class__: shaderblox_uniforms_UTexture
});
var shaderblox_uniforms_Vector2 = function(x,y) {
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	this.x = x;
	this.y = y;
};
$hxClasses["shaderblox.uniforms.Vector2"] = shaderblox_uniforms_Vector2;
shaderblox_uniforms_Vector2.__name__ = ["shaderblox","uniforms","Vector2"];
shaderblox_uniforms_Vector2.prototype = {
	set: function(x,y) {
		this.x = x;
		this.y = y;
	}
	,__class__: shaderblox_uniforms_Vector2
};
var shaderblox_uniforms_UniformBase_$shaderblox_$uniforms_$Vector2 = function(name,index,data) {
	this.name = name;
	this.location = index;
	this.dirty = true;
	this.data = data;
};
$hxClasses["shaderblox.uniforms.UniformBase_shaderblox_uniforms_Vector2"] = shaderblox_uniforms_UniformBase_$shaderblox_$uniforms_$Vector2;
shaderblox_uniforms_UniformBase_$shaderblox_$uniforms_$Vector2.__name__ = ["shaderblox","uniforms","UniformBase_shaderblox_uniforms_Vector2"];
shaderblox_uniforms_UniformBase_$shaderblox_$uniforms_$Vector2.prototype = {
	set: function(data) {
		this.dirty = true;
		return this.data = data;
	}
	,setDirty: function() {
		this.dirty = true;
	}
	,set_data: function(data) {
		this.dirty = true;
		return this.data = data;
	}
	,__class__: shaderblox_uniforms_UniformBase_$shaderblox_$uniforms_$Vector2
};
var shaderblox_uniforms_UVec2 = function(name,index,x,y) {
	if(y == null) {
		y = 0;
	}
	if(x == null) {
		x = 0;
	}
	shaderblox_uniforms_UniformBase_$shaderblox_$uniforms_$Vector2.call(this,name,index,new shaderblox_uniforms_Vector2(x,y));
};
$hxClasses["shaderblox.uniforms.UVec2"] = shaderblox_uniforms_UVec2;
shaderblox_uniforms_UVec2.__name__ = ["shaderblox","uniforms","UVec2"];
shaderblox_uniforms_UVec2.__interfaces__ = [shaderblox_uniforms_IAppliable];
shaderblox_uniforms_UVec2.__super__ = shaderblox_uniforms_UniformBase_$shaderblox_$uniforms_$Vector2;
shaderblox_uniforms_UVec2.prototype = $extend(shaderblox_uniforms_UniformBase_$shaderblox_$uniforms_$Vector2.prototype,{
	apply: function() {
		snow_modules_opengl_web_GL.gl.uniform2f(this.location,this.data.x,this.data.y);
		this.dirty = false;
	}
	,__class__: shaderblox_uniforms_UVec2
});
var snow_Snow = function(_host) {
	this.had_ready_event = false;
	this.i = 0;
	this.immediate_shutdown = false;
	this.has_shutdown = false;
	this.shutting_down = false;
	this.debug = false;
	this.platform = "unknown";
	this.ready = false;
	this.freeze = false;
	if(_host == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_host was null" + (" ( " + "snow App instance was null!" + " )")));
	}
	this.host = _host;
	this.host.app = this;
	this.config = this.default_config();
	this.sys_event = new snow_types_SystemEvent();
	this.win_event = new snow_types_WindowEvent();
	this.io = new snow_systems_io_IO(this);
	this.input = new snow_systems_input_Input(this);
	this.audio = new snow_systems_audio_Audio(this);
	this.assets = new snow_systems_assets_Assets(this);
	this.extensions = [];
	var _g = 0;
	var _g1 = snow_types_Config.extensions;
	while(_g < _g1.length) {
		var _ext_type = _g1[_g];
		++_g;
		var _class = Type.resolveClass(_ext_type);
		if(_class == null) {
			throw new js__$Boot_HaxeError(snow_types_Error.error("Extension `" + _ext_type + "`: Type not found via Type.resolveClass!"));
		}
		var _instance = Type.createInstance(_class,null);
		if(_instance == null) {
			throw new js__$Boot_HaxeError(snow_types_Error.error("Extension `" + _ext_type + "`: Instance was null on calling new()!"));
		}
		this.extensions.push(_instance);
	}
	this.runtime = new snow_core_web_Runtime(this);
	if(this.os == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("os was null" + (" ( " + "init - Runtime didn't set the app.os value!" + " )")));
	}
	if(this.platform == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("platform was null" + (" ( " + "init - Runtime didn't set the app.platform value!" + " )")));
	}
	this.dispatch_event(1);
	this.host.internal_init();
	snow_api_Promises.step();
	while(snow_Snow.next_queue.length > 0) {
		var count = snow_Snow.next_queue.length;
		var i = 0;
		while(i < count) {
			(snow_Snow.next_queue.shift())();
			++i;
		}
	}
	while(snow_Snow.defer_queue.length > 0) {
		var count1 = snow_Snow.defer_queue.length;
		var i1 = 0;
		while(i1 < count1) {
			(snow_Snow.defer_queue.shift())();
			++i1;
		}
	}
	this.dispatch_event(2);
	snow_api_Promises.step();
	while(snow_Snow.next_queue.length > 0) {
		var count2 = snow_Snow.next_queue.length;
		var i2 = 0;
		while(i2 < count2) {
			(snow_Snow.next_queue.shift())();
			++i2;
		}
	}
	while(snow_Snow.defer_queue.length > 0) {
		var count3 = snow_Snow.defer_queue.length;
		var i3 = 0;
		while(i3 < count3) {
			(snow_Snow.defer_queue.shift())();
			++i3;
		}
	}
	if(this.runtime.run() && !(this.has_shutdown || this.shutting_down)) {
		this.shutdown();
	}
};
$hxClasses["snow.Snow"] = snow_Snow;
snow_Snow.__name__ = ["snow","Snow"];
snow_Snow.next = function(func) {
	if(func != null) {
		snow_Snow.next_queue.push(func);
	}
};
snow_Snow.defer = function(func) {
	if(func != null) {
		snow_Snow.defer_queue.push(func);
	}
};
snow_Snow.get_timestamp = function() {
	return window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
};
snow_Snow.prototype = {
	shutdown: function() {
		if(this.shutting_down) {
			haxe_Log.trace("     i / snow / " + "shutdown / called again, already shutting down - ignoring",{ fileName : "Snow.hx", lineNumber : 158, className : "snow.Snow", methodName : "shutdown"});
			return;
		}
		if(this.has_shutdown != false) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("has_shutdown == false" + (" ( " + "snow - calling shutdown more than once is disallowed" + " )")));
		}
		this.shutting_down = true;
		this.dispatch_event(7);
		this.io.shutdown();
		this.audio.shutdown();
		this.assets.shutdown();
		this.runtime.shutdown(this.immediate_shutdown);
		this.has_shutdown = true;
	}
	,dispatch_event: function(_type) {
		var _this = this.sys_event;
		_this.type = _type;
		_this.window = null;
		_this.input = null;
		this.onevent(this.sys_event);
	}
	,dispatch_window_event: function(_type,_timestamp,_window_id,_x,_y) {
		var _this = this.win_event;
		_this.type = _type;
		_this.timestamp = _timestamp;
		_this.window_id = _window_id;
		_this.x = _x;
		_this.y = _y;
		var _this1 = this.sys_event;
		_this1.type = 8;
		_this1.window = this.win_event;
		_this1.input = null;
		this.onevent(this.sys_event);
	}
	,dispatch_input_event: function(_event) {
		var _this = this.sys_event;
		_this.type = 9;
		_this.window = null;
		_this.input = _event;
		this.onevent(this.sys_event);
	}
	,onevent: function(_event) {
		this.audio.onevent(_event);
		this.input.onevent(_event);
		this.i = 0;
		while(this.i < this.extensions.length) {
			this.extensions[this.i].onevent(_event);
			++this.i;
		}
		switch(_event.type) {
		case 2:
			var _gthis = this;
			if(this.had_ready_event != false) {
				throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("had_ready_event == false" + (" ( " + "snow; the ready event should not be fired repeatedly" + " )")));
			}
			this.had_ready_event = true;
			this.setup_configs().then(function(_) {
				_gthis.runtime.ready();
				_gthis.host.ready();
				_gthis.ready = true;
			}).error(function(e) {
				throw new js__$Boot_HaxeError(snow_types_Error.init("snow / cannot recover from error: " + e));
			});
			snow_api_Promises.step();
			while(snow_Snow.next_queue.length > 0) {
				var count = snow_Snow.next_queue.length;
				var i = 0;
				while(i < count) {
					(snow_Snow.next_queue.shift())();
					++i;
				}
			}
			while(snow_Snow.defer_queue.length > 0) {
				var count1 = snow_Snow.defer_queue.length;
				var i1 = 0;
				while(i1 < count1) {
					(snow_Snow.defer_queue.shift())();
					++i1;
				}
			}
			break;
		case 3:
			if(!this.freeze) {
				snow_api_Timer.update();
				snow_api_Promises.step();
				var count2 = snow_Snow.next_queue.length;
				var i2 = 0;
				while(i2 < count2) {
					(snow_Snow.next_queue.shift())();
					++i2;
				}
				if(!this.shutting_down && this.ready) {
					this.host.internal_tick();
				}
				var count3 = snow_Snow.defer_queue.length;
				var i3 = 0;
				while(i3 < count3) {
					(snow_Snow.defer_queue.shift())();
					++i3;
				}
			}
			break;
		case 7:
			haxe_Log.trace("     i / snow / " + "goodbye.",{ fileName : "Snow.hx", lineNumber : 237, className : "snow.Snow", methodName : "onevent"});
			break;
		case 10:
			this.shutdown();
			break;
		case 11:
			this.immediate_shutdown = true;
			this.shutdown();
			break;
		default:
		}
	}
	,get_time: function() {
		return window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
	}
	,get_uniqueid: function() {
		return this.make_uniqueid();
	}
	,on_ready_event: function() {
		var _gthis = this;
		if(this.had_ready_event != false) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("had_ready_event == false" + (" ( " + "snow; the ready event should not be fired repeatedly" + " )")));
		}
		this.had_ready_event = true;
		this.setup_configs().then(function(_) {
			_gthis.runtime.ready();
			_gthis.host.ready();
			_gthis.ready = true;
		}).error(function(e) {
			throw new js__$Boot_HaxeError(snow_types_Error.init("snow / cannot recover from error: " + e));
		});
		snow_api_Promises.step();
		while(snow_Snow.next_queue.length > 0) {
			var count = snow_Snow.next_queue.length;
			var i = 0;
			while(i < count) {
				(snow_Snow.next_queue.shift())();
				++i;
			}
		}
		while(snow_Snow.defer_queue.length > 0) {
			var count1 = snow_Snow.defer_queue.length;
			var i1 = 0;
			while(i1 < count1) {
				(snow_Snow.defer_queue.shift())();
				++i1;
			}
		}
	}
	,on_tick_event: function() {
		if(this.freeze) {
			return;
		}
		snow_api_Timer.update();
		snow_api_Promises.step();
		var count = snow_Snow.next_queue.length;
		var i = 0;
		while(i < count) {
			(snow_Snow.next_queue.shift())();
			++i;
		}
		if(!this.shutting_down && this.ready) {
			this.host.internal_tick();
		}
		var count1 = snow_Snow.defer_queue.length;
		var i1 = 0;
		while(i1 < count1) {
			(snow_Snow.defer_queue.shift())();
			++i1;
		}
	}
	,setup_configs: function() {
		var _gthis = this;
		if(snow_types_Config.app_config == null || snow_types_Config.app_config == "") {
			this.config = this.host.config(this.config);
			return snow_api_Promise.resolve();
		}
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.default_user_config().then(function(_user_conf) {
				_gthis.config.user = _user_conf;
			}).error(function(error) {
				throw new js__$Boot_HaxeError(snow_types_Error.init("config / failed / default user config JSON failed to parse. Cannot recover. " + error));
			}).then(function() {
				_gthis.config = _gthis.host.config(_gthis.config);
				resolve();
			});
		});
	}
	,setup_host_config: function() {
		this.config = this.host.config(this.config);
	}
	,default_user_config: function() {
		var _gthis = this;
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.io.data_flow(haxe_io_Path.join([_gthis.assets.root,snow_types_Config.app_config]),snow_systems_assets_AssetJSON.processor).then(resolve).error(function(error) {
				if(error[1] == 2) {
					reject(error);
				} else {
					haxe_Log.trace("     i / snow / " + ("config / user config will be null! / " + Std.string(error)),{ fileName : "Snow.hx", lineNumber : 378, className : "snow.Snow", methodName : "default_user_config"});
					resolve(null);
				}
			});
		});
	}
	,default_config: function() {
		return { user : null, window : this.default_window_config(), render : this.default_render_config(), runtime : null};
	}
	,default_render_config: function() {
		return { depth : 0, stencil : 0, antialiasing : 0, red_bits : 8, green_bits : 8, blue_bits : 8, alpha_bits : 8, opengl : { major : 0, minor : 0, profile : 0}, webgl : { version : 1}};
	}
	,default_window_config: function() {
		return { true_fullscreen : false, fullscreen : false, borderless : false, resizable : true, x : 536805376, y : 536805376, width : 960, height : 640, title : "snow app"};
	}
	,set_freeze: function(_freeze) {
		this.freeze = _freeze;
		this.dispatch_event(_freeze?4:5);
		return this.freeze;
	}
	,step: function() {
		snow_api_Promises.step();
		while(snow_Snow.next_queue.length > 0) {
			var count = snow_Snow.next_queue.length;
			var i = 0;
			while(i < count) {
				(snow_Snow.next_queue.shift())();
				++i;
			}
		}
		while(snow_Snow.defer_queue.length > 0) {
			var count1 = snow_Snow.defer_queue.length;
			var i1 = 0;
			while(i1 < count1) {
				(snow_Snow.defer_queue.shift())();
				++i1;
			}
		}
	}
	,cycle_next_queue: function() {
		var count = snow_Snow.next_queue.length;
		var i = 0;
		while(i < count) {
			(snow_Snow.next_queue.shift())();
			++i;
		}
	}
	,cycle_defer_queue: function() {
		var count = snow_Snow.defer_queue.length;
		var i = 0;
		while(i < count) {
			(snow_Snow.defer_queue.shift())();
			++i;
		}
	}
	,copy_window_config: function(_config) {
		return { borderless : _config.borderless, fullscreen : _config.fullscreen, true_fullscreen : _config.true_fullscreen, height : _config.height, no_input : _config.no_input, resizable : _config.resizable, title : "" + _config.title, width : _config.width, x : _config.x, y : _config.y};
	}
	,copy_render_config: function(_config) {
		return { antialiasing : _config.antialiasing, depth : _config.depth, stencil : _config.stencil, red_bits : _config.red_bits, green_bits : _config.green_bits, blue_bits : _config.blue_bits, alpha_bits : _config.alpha_bits, opengl : { major : _config.opengl.major, minor : _config.opengl.minor, profile : _config.opengl.profile}};
	}
	,make_uniqueid: function(val) {
		if(val == null) {
			val = Std.random(2147483647);
		}
		var r = val % 62 | 0;
		var q = val / 62 | 0;
		if(q > 0) {
			var tmp = this.make_uniqueid(q);
			var tmp1;
			if(r > 9) {
				var ascii = 65 + (r - 10);
				if(ascii > 90) {
					ascii += 6;
				}
				tmp1 = String.fromCharCode(ascii);
			} else {
				tmp1 = (r == null?"null":"" + r).charAt(0);
			}
			return tmp + tmp1;
		}
		var tmp2;
		if(r > 9) {
			var ascii1 = 65 + (r - 10);
			if(ascii1 > 90) {
				ascii1 += 6;
			}
			tmp2 = String.fromCharCode(ascii1);
		} else {
			tmp2 = (r == null?"null":"" + r).charAt(0);
		}
		return Std.string(tmp2);
	}
	,__class__: snow_Snow
};
var snow_api__$Debug_LogError = $hxClasses["snow.api._Debug.LogError"] = { __ename__ : ["snow","api","_Debug","LogError"], __constructs__ : ["RequireString"] };
snow_api__$Debug_LogError.RequireString = function(detail) { var $x = ["RequireString",0,detail]; $x.__enum__ = snow_api__$Debug_LogError; $x.toString = $estr; return $x; };
snow_api__$Debug_LogError.__empty_constructs__ = [];
var snow_api_Debug = function() { };
$hxClasses["snow.api.Debug"] = snow_api_Debug;
snow_api_Debug.__name__ = ["snow","api","Debug"];
snow_api_Debug._get_spacing = function(_file) {
	var _spaces = "";
	var _diff = snow_api_Debug._log_width - (_file.length + 4);
	if(_diff > 0) {
		var _g1 = 0;
		while(_g1 < _diff) {
			++_g1;
			_spaces += " ";
		}
	}
	return _spaces;
};
var snow_api_DebugError = $hxClasses["snow.api.DebugError"] = { __ename__ : ["snow","api","DebugError"], __constructs__ : ["assertion","null_assertion"] };
snow_api_DebugError.assertion = function(expr) { var $x = ["assertion",0,expr]; $x.__enum__ = snow_api_DebugError; $x.toString = $estr; return $x; };
snow_api_DebugError.null_assertion = function(expr) { var $x = ["null_assertion",1,expr]; $x.__enum__ = snow_api_DebugError; $x.toString = $estr; return $x; };
snow_api_DebugError.__empty_constructs__ = [];
var snow_api_Emitter = function() {
	this._checking = false;
	this._to_remove = new List();
	this.connected = new List();
	this.bindings = new haxe_ds_IntMap();
};
$hxClasses["snow.api.Emitter"] = snow_api_Emitter;
snow_api_Emitter.__name__ = ["snow","api","Emitter"];
snow_api_Emitter.prototype = {
	emit: function(event,data) {
		this._check();
		var list = this.bindings.h[event];
		if(list != null && list.length > 0) {
			var _g = 0;
			while(_g < list.length) {
				var handler = list[_g];
				++_g;
				handler(data);
			}
		}
		this._check();
	}
	,on: function(event,handler) {
		this._check();
		if(!this.bindings.h.hasOwnProperty(event)) {
			this.bindings.h[event] = [handler];
			this.connected.push({ handler : handler, event : event});
		} else {
			var list = this.bindings.h[event];
			if(list.indexOf(handler) == -1) {
				list.push(handler);
				this.connected.push({ handler : handler, event : event});
			}
		}
	}
	,off: function(event,handler) {
		this._check();
		var success = false;
		if(this.bindings.h.hasOwnProperty(event)) {
			this._to_remove.push({ event : event, handler : handler});
			var _g_head = this.connected.h;
			while(_g_head != null) {
				var val = _g_head.item;
				_g_head = _g_head.next;
				if(val.event == event && val.handler == handler) {
					this.connected.remove(val);
				}
			}
			success = true;
		}
		return success;
	}
	,_check: function() {
		if(this._checking) {
			return;
		}
		this._checking = true;
		if(this._to_remove.length > 0) {
			var _g_head = this._to_remove.h;
			while(_g_head != null) {
				var val = _g_head.item;
				_g_head = _g_head.next;
				var list = this.bindings.h[val.event];
				HxOverrides.remove(list,val.handler);
				if(list.length == 0) {
					this.bindings.remove(val.event);
				}
			}
			this._to_remove = null;
			this._to_remove = new List();
		}
		this._checking = false;
	}
	,__class__: snow_api_Emitter
};
var snow_api_Promise = function(func) {
	this.was_caught = false;
	var _gthis = this;
	this.state = 0;
	this.reject_reactions = [];
	this.fulfill_reactions = [];
	this.settle_reactions = [];
	snow_api_Promises.queue(function() {
		func($bind(_gthis,_gthis.onfulfill),$bind(_gthis,_gthis.onreject));
		snow_api_Promises.defer(snow_api_Promises.next);
	});
};
$hxClasses["snow.api.Promise"] = snow_api_Promise;
snow_api_Promise.__name__ = ["snow","api","Promise"];
snow_api_Promise.all = function(list) {
	return new snow_api_Promise(function(ok,no) {
		var current = 0;
		var total = list.length;
		var fulfill_result = [];
		var reject_result = null;
		var all_state = 0;
		var single_ok = function(index,val) {
			if(all_state != 0) {
				return;
			}
			current += 1;
			fulfill_result[index] = val;
			if(total == current) {
				all_state = 1;
				ok(fulfill_result);
			}
		};
		var single_err = function(val1) {
			if(all_state != 0) {
				return;
			}
			all_state = 2;
			reject_result = val1;
			no(reject_result);
		};
		var index1 = 0;
		var _g = 0;
		while(_g < list.length) {
			var promise = list[_g];
			++_g;
			promise.then((function(a1,f) {
				return function(a2) {
					f[0](a1[0],a2);
				};
			})([index1],[single_ok])).error(single_err);
			++index1;
		}
	});
};
snow_api_Promise.race = function(list) {
	return new snow_api_Promise(function(ok,no) {
		var settled = false;
		var single_ok = function(val) {
			if(settled) {
				return;
			}
			settled = true;
			ok(val);
		};
		var single_err = function(val1) {
			if(settled) {
				return;
			}
			settled = true;
			no(val1);
		};
		var _g = 0;
		while(_g < list.length) {
			var promise = list[_g];
			++_g;
			promise.then(single_ok).error(single_err);
		}
	});
};
snow_api_Promise.reject = function(reason) {
	return new snow_api_Promise(function(ok,no) {
		no(reason);
	});
};
snow_api_Promise.resolve = function(val) {
	return new snow_api_Promise(function(ok,no) {
		ok(val);
	});
};
snow_api_Promise.prototype = {
	then: function(on_fulfilled,on_rejected) {
		switch(this.state) {
		case 0:
			this.add_fulfill(on_fulfilled);
			this.add_reject(on_rejected);
			return this.new_linked_promise();
		case 1:
			snow_api_Promises.defer(on_fulfilled,this.result);
			return snow_api_Promise.resolve(this.result);
		case 2:
			snow_api_Promises.defer(on_rejected,this.result);
			return snow_api_Promise.reject(this.result);
		}
	}
	,error: function(on_rejected) {
		switch(this.state) {
		case 0:
			this.add_reject(on_rejected);
			return this.new_linked_resolve_empty();
		case 1:
			return snow_api_Promise.resolve(this.result);
		case 2:
			snow_api_Promises.defer(on_rejected,this.result);
			return snow_api_Promise.reject(this.result);
		}
	}
	,toString: function() {
		return "Promise { state:" + this.state_string() + ", result:" + Std.string(this.result) + " }";
	}
	,add_settle: function(f) {
		if(this.state == 0) {
			this.settle_reactions.push(f);
		} else {
			snow_api_Promises.defer(f,this.result);
		}
	}
	,new_linked_promise: function() {
		var _gthis = this;
		return new snow_api_Promise(function(f,r) {
			_gthis.add_settle(function(_) {
				if(_gthis.state == 1) {
					f(_gthis.result);
				} else {
					r(_gthis.result);
				}
			});
		});
	}
	,new_linked_resolve: function() {
		var _gthis = this;
		return new snow_api_Promise(function(f,r) {
			_gthis.add_settle(function(val) {
				f(val);
			});
		});
	}
	,new_linked_reject: function() {
		var _gthis = this;
		return new snow_api_Promise(function(f,r) {
			_gthis.add_settle(function(val) {
				r(val);
			});
		});
	}
	,new_linked_resolve_empty: function() {
		var _gthis = this;
		return new snow_api_Promise(function(f,r) {
			_gthis.add_settle(function(_) {
				f();
			});
		});
	}
	,new_linked_reject_empty: function() {
		var _gthis = this;
		return new snow_api_Promise(function(f,r) {
			_gthis.add_settle(function(_) {
				r();
			});
		});
	}
	,add_fulfill: function(f) {
		if(f != null) {
			this.fulfill_reactions.push(f);
		}
	}
	,add_reject: function(f) {
		if(f != null) {
			this.was_caught = true;
			this.reject_reactions.push(f);
		}
	}
	,onfulfill: function(val) {
		this.state = 1;
		this.result = val;
		while(this.fulfill_reactions.length > 0) this.fulfill_reactions.shift()(this.result);
		this.onsettle();
	}
	,onreject: function(reason) {
		this.state = 2;
		this.result = reason;
		while(this.reject_reactions.length > 0) this.reject_reactions.shift()(this.result);
		this.onsettle();
	}
	,onsettle: function() {
		while(this.settle_reactions.length > 0) this.settle_reactions.shift()(this.result);
	}
	,onexception: function(err) {
		var _gthis = this;
		this.add_settle(function(_) {
			if(!_gthis.was_caught) {
				if(_gthis.state == 2) {
					throw new js__$Boot_HaxeError(snow_api_PromiseError.UnhandledPromiseRejection(_gthis.toString()));
				}
			}
		});
		if(this.state == 0) {
			this.onreject(err);
		}
	}
	,state_string: function() {
		switch(this.state) {
		case 0:
			return "pending";
		case 1:
			return "fulfilled";
		case 2:
			return "rejected";
		}
	}
	,__class__: snow_api_Promise
};
var snow_api_Promises = function() { };
$hxClasses["snow.api.Promises"] = snow_api_Promises;
snow_api_Promises.__name__ = ["snow","api","Promises"];
snow_api_Promises.step = function() {
	snow_api_Promises.next();
	while(snow_api_Promises.defers.length > 0) {
		var defer = snow_api_Promises.defers.shift();
		defer.f(defer.a);
	}
};
snow_api_Promises.next = function() {
	if(snow_api_Promises.calls.length > 0) {
		(snow_api_Promises.calls.shift())();
	}
};
snow_api_Promises.defer = function(f,a) {
	if(f == null) {
		return;
	}
	snow_api_Promises.defers.push({ f : f, a : a});
};
snow_api_Promises.queue = function(f) {
	if(f == null) {
		return;
	}
	snow_api_Promises.calls.push(f);
};
var snow_api_PromiseError = $hxClasses["snow.api.PromiseError"] = { __ename__ : ["snow","api","PromiseError"], __constructs__ : ["UnhandledPromiseRejection"] };
snow_api_PromiseError.UnhandledPromiseRejection = function(err) { var $x = ["UnhandledPromiseRejection",0,err]; $x.__enum__ = snow_api_PromiseError; $x.toString = $estr; return $x; };
snow_api_PromiseError.__empty_constructs__ = [];
var snow_api_Timer = function(_time) {
	this.time = _time;
	snow_api_Timer.running_timers.push(this);
	this.fire_at = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start + this.time;
	this.running = true;
};
$hxClasses["snow.api.Timer"] = snow_api_Timer;
snow_api_Timer.__name__ = ["snow","api","Timer"];
snow_api_Timer.measure = function(f,pos) {
	var t0 = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
	var r = f();
	haxe_Log.trace(window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start - t0 + "s",pos);
	return r;
};
snow_api_Timer.update = function() {
	var now = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
	var _g = 0;
	var _g1 = snow_api_Timer.running_timers;
	while(_g < _g1.length) {
		var timer = _g1[_g];
		++_g;
		if(timer.running) {
			if(timer.fire_at < now) {
				timer.fire_at += timer.time;
				timer.run();
			}
		}
	}
};
snow_api_Timer.delay = function(_time,_f) {
	var t = new snow_api_Timer(_time);
	t.run = function() {
		t.stop();
		_f();
	};
	return t;
};
snow_api_Timer.prototype = {
	run: function() {
	}
	,stop: function() {
		if(this.running) {
			this.running = false;
			HxOverrides.remove(snow_api_Timer.running_timers,this);
		}
	}
	,__class__: snow_api_Timer
};
var snow_api_buffers__$Float32Array_Float32Array_$Impl_$ = {};
$hxClasses["snow.api.buffers._Float32Array.Float32Array_Impl_"] = snow_api_buffers__$Float32Array_Float32Array_$Impl_$;
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.__name__ = ["snow","api","buffers","_Float32Array","Float32Array_Impl_"];
snow_api_buffers__$Float32Array_Float32Array_$Impl_$._new = function(_elements) {
	return new Float32Array(_elements);
};
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.fromArray = function(_array) {
	return new Float32Array(_array);
};
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.fromView = function(_view) {
	return new Float32Array(_view);
};
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.fromBuffer = function(_buffer,_byteOffset,_byteLength) {
	return new Float32Array(_buffer,_byteOffset,_byteLength / 4 | 0);
};
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Float32Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Float32Array(bytes.b.bufferValue,byteOffset);
	}
	return new Float32Array(bytes.b.bufferValue,byteOffset,len);
};
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.toString = function(this1) {
	return "Float32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
};
var snow_api_buffers__$Int32Array_Int32Array_$Impl_$ = {};
$hxClasses["snow.api.buffers._Int32Array.Int32Array_Impl_"] = snow_api_buffers__$Int32Array_Int32Array_$Impl_$;
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.__name__ = ["snow","api","buffers","_Int32Array","Int32Array_Impl_"];
snow_api_buffers__$Int32Array_Int32Array_$Impl_$._new = function(_elements) {
	return new Int32Array(_elements);
};
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.fromArray = function(_array) {
	return new Int32Array(_array);
};
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.fromView = function(_view) {
	return new Int32Array(_view);
};
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.fromBuffer = function(_buffer,_byteOffset,_byteLength) {
	return new Int32Array(_buffer,_byteOffset,_byteLength / 4 | 0);
};
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		byteOffset = 0;
	}
	if(byteOffset == null) {
		return new Int32Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Int32Array(bytes.b.bufferValue,byteOffset);
	}
	return new Int32Array(bytes.b.bufferValue,byteOffset,len);
};
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.toString = function(this1) {
	return "Int32Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
};
var snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$ = {};
$hxClasses["snow.api.buffers._Uint8Array.Uint8Array_Impl_"] = snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$;
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.__name__ = ["snow","api","buffers","_Uint8Array","Uint8Array_Impl_"];
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$._new = function(_elements) {
	return new Uint8Array(_elements);
};
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.fromArray = function(_array) {
	return new Uint8Array(_array);
};
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.fromView = function(_view) {
	return new Uint8Array(_view);
};
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.fromBuffer = function(_buffer,_byteOffset,_byteLength) {
	return new Uint8Array(_buffer,_byteOffset,_byteLength);
};
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.fromBytes = function(bytes,byteOffset,len) {
	if(byteOffset == null) {
		return new Uint8Array(bytes.b.bufferValue);
	}
	if(len == null) {
		return new Uint8Array(bytes.b.bufferValue,byteOffset);
	}
	return new Uint8Array(bytes.b.bufferValue,byteOffset,len);
};
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.toBytes = function(this1) {
	return new haxe_io_Bytes(new Uint8Array(this1.buffer));
};
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.toString = function(this1) {
	return "Uint8Array [byteLength:" + this1.byteLength + ", length:" + this1.length + "]";
};
var snow_modules_interfaces_Audio = function() { };
$hxClasses["snow.modules.interfaces.Audio"] = snow_modules_interfaces_Audio;
snow_modules_interfaces_Audio.__name__ = ["snow","modules","interfaces","Audio"];
snow_modules_interfaces_Audio.prototype = {
	__class__: snow_modules_interfaces_Audio
};
var snow_core_Audio = function(_app) {
	this.active = false;
	this.app = _app;
};
$hxClasses["snow.core.Audio"] = snow_core_Audio;
snow_core_Audio.__name__ = ["snow","core","Audio"];
snow_core_Audio.__interfaces__ = [snow_modules_interfaces_Audio];
snow_core_Audio.audio_format_from_path = function(_path) {
	switch(haxe_io_Path.extension(_path)) {
	case "ogg":
		return 2;
	case "pcm":
		return 4;
	case "wav":
		return 3;
	default:
		return 0;
	}
};
snow_core_Audio.prototype = {
	onevent: function(event) {
	}
	,shutdown: function() {
	}
	,suspend: function() {
	}
	,resume: function() {
	}
	,data_from_load: function(_path,_is_stream,_format) {
		if(_is_stream == null) {
			_is_stream = false;
		}
		return null;
	}
	,data_from_bytes: function(_id,_bytes,_format) {
		return null;
	}
	,play: function(_source,_volume,_paused) {
		return null;
	}
	,loop: function(_source,_volume,_paused) {
		return null;
	}
	,pause: function(_handle) {
	}
	,unpause: function(_handle) {
	}
	,stop: function(_handle) {
	}
	,volume: function(_handle,_volume) {
	}
	,pan: function(_handle,_pan) {
	}
	,pitch: function(_handle,_pitch) {
	}
	,position: function(_handle,_time) {
	}
	,volume_of: function(_handle) {
		return 0.0;
	}
	,pan_of: function(_handle) {
		return 0.0;
	}
	,pitch_of: function(_handle) {
		return 0.0;
	}
	,position_of: function(_handle) {
		return 0.0;
	}
	,state_of: function(_handle) {
		return -1;
	}
	,loop_of: function(_handle) {
		return false;
	}
	,instance_of: function(_handle) {
		return null;
	}
	,__class__: snow_core_Audio
};
var snow_core_Extension = function() { };
$hxClasses["snow.core.Extension"] = snow_core_Extension;
snow_core_Extension.__name__ = ["snow","core","Extension"];
snow_core_Extension.prototype = {
	__class__: snow_core_Extension
};
var snow_core_Runtime = function() { };
$hxClasses["snow.core.Runtime"] = snow_core_Runtime;
snow_core_Runtime.__name__ = ["snow","core","Runtime"];
snow_core_Runtime.prototype = {
	__class__: snow_core_Runtime
};
var snow_core_web_Runtime = function(_app) {
	this.p_body_margin = "0";
	this.p_body_overflow = "0";
	this.p_height = 0;
	this.p_width = 0;
	this.p_s_height = "";
	this.p_s_width = "";
	this.p_margin = "0";
	this.p_padding = "0";
	this.gamepads_supported = false;
	this.window_dpr = 1.0;
	this.window_h = 0;
	this.window_w = 0;
	this.window_y = 0;
	this.window_x = 0;
	this.name = "web";
	this.app = _app;
	this.app.platform = "web";
	this.app.os = this.guess_os();
	snow_core_web_Runtime.timestamp_start = window.performance.now() / 1000.0;
	this.app.config.runtime = { window_id : "app", window_parent : window.document.body, prevent_default_context_menu : true, prevent_default_mouse_wheel : true, prevent_default_touches : true, prevent_default_keys : [1073741904,1073741903,1073741906,1073741905,8,9,127]};
	var _list = ($_=window.navigator,$bind($_,$_.getGamepads)) != null?window.navigator.getGamepads():window.navigator.webkitGetGamepads != null?window.navigator.webkitGetGamepads():null;
	if(_list != null) {
		this.gamepads_supported = true;
		this.gamepad_btns_cache = [];
		var _g = 0;
		while(_g < _list.length) {
			var _gamepad = _list[_g];
			++_g;
			if(_gamepad != null) {
				this.gamepad_btns_cache[_gamepad.index] = [];
				var _g1 = 0;
				var _g2 = _gamepad.buttons.length;
				while(_g1 < _g2) {
					++_g1;
					this.gamepad_btns_cache[_gamepad.index].push(0);
				}
			}
		}
	} else {
		haxe_Log.trace("  i / runtime / " + "Gamepads are not supported in this browser :(",{ fileName : "Runtime.hx", lineNumber : 840, className : "snow.core.web.Runtime", methodName : "gamepads_init"});
	}
	haxe_Log.trace("  i / runtime / " + "web / init ok",{ fileName : "Runtime.hx", lineNumber : 63, className : "snow.core.web.Runtime", methodName : "new"});
};
$hxClasses["snow.core.web.Runtime"] = snow_core_web_Runtime;
snow_core_web_Runtime.__name__ = ["snow","core","web","Runtime"];
snow_core_web_Runtime.__interfaces__ = [snow_core_Runtime];
snow_core_web_Runtime.timestamp = function() {
	return window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
};
snow_core_web_Runtime.prototype = {
	window_device_pixel_ratio: function() {
		if(window.devicePixelRatio == null) {
			return 1.0;
		} else {
			return window.devicePixelRatio;
		}
	}
	,window_width: function() {
		return this.window.width;
	}
	,window_height: function() {
		return this.window.height;
	}
	,window_grab: function(enable) {
		if(enable) {
			if(($_=this.window,$bind($_,$_.requestPointerLock)) != null) {
				this.window.requestPointerLock();
			} else if(this.window.webkitRequestPointerLock != null) {
				this.window.webkitRequestPointerLock();
			} else if(this.window.mozRequestPointerLock != null) {
				this.window.mozRequestPointerLock();
			} else {
				return false;
			}
		} else if(($_=window.document,$bind($_,$_.exitPointerLock)) != null) {
			window.document.exitPointerLock();
		} else if(window.document.webkitExitPointerLock != null) {
			window.document.webkitExitPointerLock();
		} else if(window.document.mozExitPointerLock != null) {
			window.document.mozExitPointerLock();
		} else {
			return false;
		}
		return true;
	}
	,onresize_handler: function(_) {
		this.window.style.width = "" + Std.string(window.innerWidth) + "px";
		this.window.style.height = "" + Std.string(window.innerHeight) + "px";
	}
	,window_fullscreen: function(enable,true_fullscreen) {
		if(true_fullscreen == null) {
			true_fullscreen = false;
		}
		var _result = true;
		if(enable) {
			this.p_padding = this.window.style.padding;
			this.p_margin = this.window.style.margin;
			this.p_s_width = this.window.style.width;
			this.p_s_height = this.window.style.height;
			this.p_width = this.window.width;
			this.p_height = this.window.height;
			this.p_body_margin = window.document.body.style.margin;
			this.p_body_overflow = window.document.body.style.overflow;
			this.window.style.margin = "0";
			this.window.style.padding = "0";
			this.window.style.width = Std.string(window.innerWidth) + "px";
			this.window.style.height = Std.string(window.innerHeight) + "px";
			this.window_dpr = window.devicePixelRatio == null?1.0:window.devicePixelRatio;
			this.window.width = Math.floor(window.innerWidth * this.window_dpr);
			this.window.height = Math.floor(window.innerHeight * this.window_dpr);
			window.document.body.style.margin = "0";
			window.document.body.style.overflow = "hidden";
			if(true_fullscreen) {
				if(($_=this.window,$bind($_,$_.requestFullscreen)) != null) {
					this.window.requestFullscreen();
				} else if(this.window.requestFullScreen != null) {
					this.window.requestFullScreen(null);
				} else if(this.window.webkitRequestFullscreen != null) {
					this.window.webkitRequestFullscreen();
				} else if(this.window.mozRequestFullScreen != null) {
					this.window.mozRequestFullScreen();
				} else {
					_result = false;
				}
			}
			window.addEventListener("resize",$bind(this,this.onresize_handler));
		} else {
			window.removeEventListener("resize",$bind(this,this.onresize_handler));
			this.window.style.padding = this.p_padding;
			this.window.style.margin = this.p_margin;
			this.window.style.width = this.p_s_width;
			this.window.style.height = this.p_s_height;
			this.window.width = this.p_width;
			this.window.height = this.p_height;
			window.document.body.style.margin = this.p_body_margin;
			window.document.body.style.overflow = this.p_body_overflow;
			if(true_fullscreen) {
				if(($_=window.document,$bind($_,$_.exitFullscreen)) != null) {
					window.document.exitFullscreen();
				} else if(window.document.webkitExitFullscreen != null) {
					window.document.webkitExitFullscreen();
				} else if(window.document.mozCancelFullScreen != null) {
					window.document.mozCancelFullScreen();
				} else {
					_result = false;
				}
			}
		}
		return _result;
	}
	,shutdown: function(_immediate) {
		if(_immediate == null) {
			_immediate = false;
		}
		haxe_Log.trace("  i / runtime / " + "runtime / web / shutdown",{ fileName : "Runtime.hx", lineNumber : 226, className : "snow.core.web.Runtime", methodName : "shutdown"});
		window.document.removeEventListener("visibilitychange",$bind(this,this.on_visibilitychange));
		window.document.removeEventListener("keydown",$bind(this,this.on_keydown));
		window.document.removeEventListener("keyup",$bind(this,this.on_keyup));
		window.document.removeEventListener("keypress",$bind(this,this.on_keypress));
		window.removeEventListener("gamepadconnected",$bind(this,this.on_gamepadconnected));
		window.removeEventListener("gamepaddisconnected",$bind(this,this.on_gamepaddisconnected));
		this.window.remove();
		this.window = null;
		snow_modules_opengl_web_GL.gl = null;
	}
	,run: function() {
		haxe_Log.trace("  i / runtime / " + "web / run",{ fileName : "Runtime.hx", lineNumber : 244, className : "snow.core.web.Runtime", methodName : "run"});
		this.loop_pre_ready();
		return false;
	}
	,ready: function() {
		haxe_Log.trace("  i / runtime / " + "web / ready",{ fileName : "Runtime.hx", lineNumber : 254, className : "snow.core.web.Runtime", methodName : "ready"});
		this.create_window();
	}
	,dispatch_window_ev: function(_type,_x,_y) {
		this.app.dispatch_window_event(_type,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1,_x,_y);
	}
	,setup_events: function() {
		var _gthis = this;
		this.window.addEventListener("mouseleave",function(_ev) {
			_gthis.dispatch_window_ev(11,null,null);
		});
		this.window.addEventListener("mouseenter",function(_ev1) {
			_gthis.dispatch_window_ev(10,null,null);
		});
		window.document.addEventListener("visibilitychange",$bind(this,this.on_visibilitychange));
		window.document.addEventListener("keydown",$bind(this,this.on_keydown));
		window.document.addEventListener("keyup",$bind(this,this.on_keyup));
		window.document.addEventListener("keypress",$bind(this,this.on_keypress));
		this.window.addEventListener("contextmenu",function(_ev2) {
			if(_gthis.app.config.runtime.prevent_default_context_menu) {
				_ev2.preventDefault();
			}
		});
		this.window.addEventListener("mousedown",function(_ev3) {
			_gthis.app.input.dispatch_mouse_down_event(Math.floor(_gthis.window_dpr * (_ev3.pageX - _gthis.window_x)),Math.floor(_gthis.window_dpr * (_ev3.pageY - _gthis.window_y)),_ev3.button + 1,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1);
		});
		this.window.addEventListener("mouseup",function(_ev4) {
			_gthis.app.input.dispatch_mouse_up_event(Math.floor(_gthis.window_dpr * (_ev4.pageX - _gthis.window_x)),Math.floor(_gthis.window_dpr * (_ev4.pageY - _gthis.window_y)),_ev4.button + 1,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1);
		});
		this.window.addEventListener("mousemove",function(_ev5) {
			var _movement_x = _ev5.movementX == null?0:_ev5.movementX;
			var _movement_y = _ev5.movementY == null?0:_ev5.movementY;
			_movement_x = Math.floor(_movement_x * _gthis.window_dpr);
			_movement_y = Math.floor(_movement_y * _gthis.window_dpr);
			_gthis.app.input.dispatch_mouse_move_event(Math.floor(_gthis.window_dpr * (_ev5.pageX - _gthis.window_x)),Math.floor(_gthis.window_dpr * (_ev5.pageY - _gthis.window_y)),_movement_x,_movement_y,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1);
		});
		this.window.addEventListener("wheel",function(_ev6) {
			if(_gthis.app.config.runtime.prevent_default_mouse_wheel) {
				_ev6.preventDefault();
			}
			_gthis.app.input.dispatch_mouse_wheel_event(_ev6.deltaX,_ev6.deltaY,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1);
		});
		this.window.addEventListener("touchstart",function(_ev7) {
			if(_gthis.app.config.runtime.prevent_default_touches) {
				_ev7.preventDefault();
			}
			var _bound = _gthis.window.getBoundingClientRect();
			var _g = 0;
			var _g1 = _ev7.changedTouches;
			while(_g < _g1.length) {
				var touch = _g1[_g];
				++_g;
				var _x = touch.clientX - _bound.left;
				var _y = touch.clientY - _bound.top;
				_x /= _bound.width;
				_y /= _bound.height;
				_gthis.app.input.dispatch_touch_down_event(_x,_y,0,0,touch.identifier,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
			}
		});
		this.window.addEventListener("touchend",function(_ev8) {
			if(_gthis.app.config.runtime.prevent_default_touches) {
				_ev8.preventDefault();
			}
			var _bound1 = _gthis.window.getBoundingClientRect();
			var _g2 = 0;
			var _g11 = _ev8.changedTouches;
			while(_g2 < _g11.length) {
				var touch1 = _g11[_g2];
				++_g2;
				var _x1 = touch1.clientX - _bound1.left;
				var _y1 = touch1.clientY - _bound1.top;
				_x1 /= _bound1.width;
				_y1 /= _bound1.height;
				_gthis.app.input.dispatch_touch_up_event(_x1,_y1,0,0,touch1.identifier,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
			}
		});
		this.window.addEventListener("touchmove",function(_ev9) {
			if(_gthis.app.config.runtime.prevent_default_touches) {
				_ev9.preventDefault();
			}
			var _bound2 = _gthis.window.getBoundingClientRect();
			var _g3 = 0;
			var _g12 = _ev9.changedTouches;
			while(_g3 < _g12.length) {
				var touch2 = _g12[_g3];
				++_g3;
				var _x2 = touch2.clientX - _bound2.left;
				var _y2 = touch2.clientY - _bound2.top;
				_x2 /= _bound2.width;
				_y2 /= _bound2.height;
				_gthis.app.input.dispatch_touch_move_event(_x2,_y2,0,0,touch2.identifier,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
			}
		});
		window.addEventListener("gamepadconnected",$bind(this,this.on_gamepadconnected));
		window.addEventListener("gamepaddisconnected",$bind(this,this.on_gamepaddisconnected));
	}
	,on_visibilitychange: function(_) {
		if(window.document.hidden) {
			this.app.dispatch_window_event(2,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1,null,null);
			this.app.dispatch_window_event(7,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1,null,null);
			this.app.dispatch_window_event(13,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1,null,null);
		} else {
			this.app.dispatch_window_event(1,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1,null,null);
			this.app.dispatch_window_event(9,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1,null,null);
			this.app.dispatch_window_event(12,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1,null,null);
		}
	}
	,on_keydown: function(_ev) {
		var dom_keycode = _ev.keyCode;
		var _keycode = dom_keycode >= 65 && dom_keycode <= 90?dom_keycode + 32:snow_core_web__$Runtime_DOMKeys.dom_key_to_keycode(dom_keycode);
		var _scancode = snow_systems_input_Keycodes.to_scan(_keycode);
		this.app.input.mod_state.none = !_ev.altKey && !_ev.ctrlKey && !_ev.metaKey && !_ev.shiftKey;
		this.app.input.mod_state.lshift = _ev.shiftKey;
		this.app.input.mod_state.rshift = _ev.shiftKey;
		this.app.input.mod_state.lctrl = _ev.ctrlKey;
		this.app.input.mod_state.rctrl = _ev.ctrlKey;
		this.app.input.mod_state.lalt = _ev.altKey;
		this.app.input.mod_state.ralt = _ev.altKey;
		this.app.input.mod_state.lmeta = _ev.metaKey;
		this.app.input.mod_state.rmeta = _ev.metaKey;
		this.app.input.mod_state.num = false;
		this.app.input.mod_state.caps = false;
		this.app.input.mod_state.mode = false;
		this.app.input.mod_state.ctrl = _ev.ctrlKey;
		this.app.input.mod_state.shift = _ev.shiftKey;
		this.app.input.mod_state.alt = _ev.altKey;
		this.app.input.mod_state.meta = _ev.metaKey;
		var _mod_state = this.app.input.mod_state;
		if(this.app.config.runtime.prevent_default_keys.indexOf(_keycode) != -1) {
			_ev.preventDefault();
		}
		this.app.input.dispatch_key_down_event(_keycode,_scancode,_ev.repeat,_mod_state,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1);
	}
	,on_keyup: function(_ev) {
		var dom_keycode = _ev.keyCode;
		var _keycode = dom_keycode >= 65 && dom_keycode <= 90?dom_keycode + 32:snow_core_web__$Runtime_DOMKeys.dom_key_to_keycode(dom_keycode);
		var _scancode = snow_systems_input_Keycodes.to_scan(_keycode);
		this.app.input.mod_state.none = !_ev.altKey && !_ev.ctrlKey && !_ev.metaKey && !_ev.shiftKey;
		this.app.input.mod_state.lshift = _ev.shiftKey;
		this.app.input.mod_state.rshift = _ev.shiftKey;
		this.app.input.mod_state.lctrl = _ev.ctrlKey;
		this.app.input.mod_state.rctrl = _ev.ctrlKey;
		this.app.input.mod_state.lalt = _ev.altKey;
		this.app.input.mod_state.ralt = _ev.altKey;
		this.app.input.mod_state.lmeta = _ev.metaKey;
		this.app.input.mod_state.rmeta = _ev.metaKey;
		this.app.input.mod_state.num = false;
		this.app.input.mod_state.caps = false;
		this.app.input.mod_state.mode = false;
		this.app.input.mod_state.ctrl = _ev.ctrlKey;
		this.app.input.mod_state.shift = _ev.shiftKey;
		this.app.input.mod_state.alt = _ev.altKey;
		this.app.input.mod_state.meta = _ev.metaKey;
		var _mod_state = this.app.input.mod_state;
		if(this.app.config.runtime.prevent_default_keys.indexOf(_keycode) != -1) {
			_ev.preventDefault();
		}
		this.app.input.dispatch_key_up_event(_keycode,_scancode,_ev.repeat,_mod_state,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1);
	}
	,on_keypress: function(_ev) {
		if(_ev.which != 0 && snow_core_web_Runtime.key_press_ignored.indexOf(_ev.keyCode) == -1) {
			var _text = String.fromCharCode(_ev.charCode);
			this.app.input.dispatch_text_event(_text,0,_text.length,2,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start,1);
		}
	}
	,on_gamepadconnected: function(_ev) {
		var _gamepad = _ev.gamepad;
		this.gamepad_btns_cache[_gamepad.index] = [];
		var _g1 = 0;
		var _g = _gamepad.buttons.length;
		while(_g1 < _g) {
			++_g1;
			this.gamepad_btns_cache[_gamepad.index].push(0);
		}
		this.app.input.dispatch_gamepad_device_event(_ev.gamepad.index,_ev.gamepad.id,1,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
	}
	,on_gamepaddisconnected: function(_ev) {
		this.gamepad_btns_cache[_ev.gamepad.index] = null;
		this.app.input.dispatch_gamepad_device_event(_ev.gamepad.index,_ev.gamepad.id,2,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
	}
	,create_window: function() {
		var config = this.app.config.window;
		this.window = window.document.createElement("canvas");
		this.window_dpr = window.devicePixelRatio == null?1.0:window.devicePixelRatio;
		this.window.width = Math.floor(config.width * this.window_dpr);
		this.window.height = Math.floor(config.height * this.window_dpr);
		this.window_w = config.width;
		this.window_h = config.height;
		this.window.style.width = config.width + "px";
		this.window.style.height = config.height + "px";
		this.window.style.background = "#000";
		this.window.id = this.app.config.runtime.window_id;
		this.app.config.runtime.window_parent.appendChild(this.window);
		if(config.title != null) {
			window.document.title = config.title;
		}
		if(!this.create_render_context(this.window)) {
			this.create_render_context_failed();
			return;
		}
		this.setup_events();
		if(config.fullscreen) {
			this.window_fullscreen(true,config.true_fullscreen);
			this.window_dpr = window.devicePixelRatio == null?1.0:window.devicePixelRatio;
			var _bounds = this.window.getBoundingClientRect();
			var _x = Math.round(_bounds.left + window.pageXOffset - window.document.body.clientTop);
			var _y = Math.round(_bounds.top + window.pageYOffset - window.document.body.clientLeft);
			var _w = Math.round(_bounds.width);
			var _h = Math.round(_bounds.height);
			if(_x != this.window_x || _y != this.window_y) {
				this.window_x = _x;
				this.window_y = _y;
				this.dispatch_window_ev(4,this.window_x,this.window_y);
			}
			if(_w != this.window_w || _h != this.window_h) {
				this.window_w = _w;
				this.window_h = _h;
				this.window.width = Math.floor(this.window_w * this.window_dpr);
				this.window.height = Math.floor(this.window_h * this.window_dpr);
				this.dispatch_window_ev(6,this.window.width,this.window.height);
			}
		}
	}
	,create_render_context: function(_window) {
		var config = this.app.config.render;
		var attr = config.webgl;
		attr = this.apply_GL_attr(config,attr);
		var _gl = null;
		if(config.webgl.version != 1) {
			_gl = this.window.getContext("webgl" + config.webgl.version);
			if(_gl == null) {
				_gl = this.window.getContext("experimental-webgl" + config.webgl.version);
			}
		} else {
			_gl = js_html__$CanvasElement_CanvasUtil.getContextWebGL(this.window,attr);
		}
		snow_modules_opengl_web_GL.gl = _gl;
		haxe_Log.trace("  i / runtime / " + ("web / GL / context(" + Std.string(_gl != null) + ")"),{ fileName : "Runtime.hx", lineNumber : 631, className : "snow.core.web.Runtime", methodName : "create_render_context"});
		return _gl != null;
	}
	,apply_GL_attr: function(render,attr) {
		if(attr.alpha == null) {
			attr.alpha = false;
		}
		attr.alpha = attr.alpha;
		if(attr.premultipliedAlpha == null) {
			attr.premultipliedAlpha = false;
		}
		attr.premultipliedAlpha = attr.premultipliedAlpha;
		if(attr.antialias == null) {
			attr.antialias = this.app.config.render.antialiasing > 0;
		}
		attr.antialias = attr.antialias;
		if(attr.depth == null) {
			attr.depth = this.app.config.render.depth > 0;
		}
		attr.depth = attr.depth;
		if(attr.stencil == null) {
			attr.stencil = this.app.config.render.stencil > 0;
		}
		attr.stencil = attr.stencil;
		return attr;
	}
	,create_render_context_failed: function() {
		var msg = "WebGL is required to run this!<br/><br/>";
		msg += "visit <a style=\"color:#06b4fb; text-decoration:none;\" href=\"http://get.webgl.org/\">get.webgl.com</a> for info<br/>";
		msg += "and contact the developer of this app";
		var text_el;
		var overlay_el;
		text_el = window.document.createElement("div");
		overlay_el = window.document.createElement("div");
		text_el.style.marginLeft = "auto";
		text_el.style.marginRight = "auto";
		text_el.style.color = "#d3d3d3";
		text_el.style.marginTop = "5em";
		text_el.style.fontSize = "1.4em";
		text_el.style.fontFamily = "helvetica,sans-serif";
		text_el.innerHTML = msg;
		overlay_el.style.top = "0";
		overlay_el.style.left = "0";
		overlay_el.style.width = "100%";
		overlay_el.style.height = "100%";
		overlay_el.style.display = "block";
		overlay_el.style.minWidth = "100%";
		overlay_el.style.minHeight = "100%";
		overlay_el.style.textAlign = "center";
		overlay_el.style.position = "absolute";
		overlay_el.style.background = "rgba(1,1,1,0.90)";
		overlay_el.appendChild(text_el);
		window.document.body.appendChild(overlay_el);
		throw new js__$Boot_HaxeError(snow_types_Error.error("runtime / web / failed to create render context, unable to recover"));
	}
	,request_frame: function() {
		window.requestAnimationFrame($bind(this,this.loop));
	}
	,loop: function(_t) {
		if(_t == null) {
			_t = 0.016;
		}
		if(this.app.has_shutdown) {
			return false;
		}
		if(this.gamepads_supported) {
			var list = ($_=window.navigator,$bind($_,$_.getGamepads)) != null?window.navigator.getGamepads():window.navigator.webkitGetGamepads != null?window.navigator.webkitGetGamepads():null;
			if(list == null) {
				throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("list was null" + (" ( " + "gamepad list not found, but they were previously?" + " )")));
			}
			var _count = list.length;
			var _idx = 0;
			while(_idx < _count) {
				var _gamepad = list[_idx];
				if(_gamepad == null) {
					++_idx;
					continue;
				}
				var _g1 = 0;
				var _g = _gamepad.axes.length;
				while(_g1 < _g) {
					var _axis_idx = _g1++;
					var _axis = _gamepad.axes[_axis_idx];
					if(_axis != 0) {
						this.app.input.dispatch_gamepad_axis_event(_gamepad.index,_axis_idx,_axis,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
					}
				}
				var _prev_btn = this.gamepad_btns_cache[_gamepad.index];
				var _g11 = 0;
				var _g2 = _gamepad.buttons.length;
				while(_g11 < _g2) {
					var _btn_idx = _g11++;
					var _btn = _gamepad.buttons[_btn_idx];
					if(_btn.value != _prev_btn[_btn_idx]) {
						if(_btn.pressed) {
							this.app.input.dispatch_gamepad_button_down_event(_gamepad.index,_btn_idx,_btn.value,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
						} else {
							this.app.input.dispatch_gamepad_button_up_event(_gamepad.index,_btn_idx,_btn.value,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
						}
						_prev_btn[_btn_idx] = _btn.value;
					}
				}
				++_idx;
			}
		}
		this.window_dpr = window.devicePixelRatio == null?1.0:window.devicePixelRatio;
		var _bounds = this.window.getBoundingClientRect();
		var _x = Math.round(_bounds.left + window.pageXOffset - window.document.body.clientTop);
		var _y = Math.round(_bounds.top + window.pageYOffset - window.document.body.clientLeft);
		var _w = Math.round(_bounds.width);
		var _h = Math.round(_bounds.height);
		if(_x != this.window_x || _y != this.window_y) {
			this.window_x = _x;
			this.window_y = _y;
			this.dispatch_window_ev(4,this.window_x,this.window_y);
		}
		if(_w != this.window_w || _h != this.window_h) {
			this.window_w = _w;
			this.window_h = _h;
			this.window.width = Math.floor(this.window_w * this.window_dpr);
			this.window.height = Math.floor(this.window_h * this.window_dpr);
			this.dispatch_window_ev(6,this.window.width,this.window.height);
		}
		this.app.dispatch_event(3);
		if(!this.app.shutting_down) {
			window.requestAnimationFrame($bind(this,this.loop));
		}
		return true;
	}
	,loop_pre_ready: function(_t) {
		if(_t == null) {
			_t = 0.016;
		}
		this.app.dispatch_event(3);
		if(!this.app.shutting_down) {
			if(!this.app.ready) {
				window.requestAnimationFrame($bind(this,this.loop_pre_ready));
			} else {
				window.requestAnimationFrame($bind(this,this.loop));
			}
		}
		return true;
	}
	,mod_state_from_event: function(_key_event) {
		this.app.input.mod_state.none = !_key_event.altKey && !_key_event.ctrlKey && !_key_event.metaKey && !_key_event.shiftKey;
		this.app.input.mod_state.lshift = _key_event.shiftKey;
		this.app.input.mod_state.rshift = _key_event.shiftKey;
		this.app.input.mod_state.lctrl = _key_event.ctrlKey;
		this.app.input.mod_state.rctrl = _key_event.ctrlKey;
		this.app.input.mod_state.lalt = _key_event.altKey;
		this.app.input.mod_state.ralt = _key_event.altKey;
		this.app.input.mod_state.lmeta = _key_event.metaKey;
		this.app.input.mod_state.rmeta = _key_event.metaKey;
		this.app.input.mod_state.num = false;
		this.app.input.mod_state.caps = false;
		this.app.input.mod_state.mode = false;
		this.app.input.mod_state.ctrl = _key_event.ctrlKey;
		this.app.input.mod_state.shift = _key_event.shiftKey;
		this.app.input.mod_state.alt = _key_event.altKey;
		this.app.input.mod_state.meta = _key_event.metaKey;
		return this.app.input.mod_state;
	}
	,convert_keycode: function(dom_keycode) {
		if(dom_keycode >= 65 && dom_keycode <= 90) {
			return dom_keycode + 32;
		}
		return snow_core_web__$Runtime_DOMKeys.dom_key_to_keycode(dom_keycode);
	}
	,get_window_x: function(_bounds) {
		return Math.round(_bounds.left + window.pageXOffset - window.document.body.clientTop);
	}
	,get_window_y: function(_bounds) {
		return Math.round(_bounds.top + window.pageYOffset - window.document.body.clientLeft);
	}
	,update_window_bounds: function() {
		this.window_dpr = window.devicePixelRatio == null?1.0:window.devicePixelRatio;
		var _bounds = this.window.getBoundingClientRect();
		var _x = Math.round(_bounds.left + window.pageXOffset - window.document.body.clientTop);
		var _y = Math.round(_bounds.top + window.pageYOffset - window.document.body.clientLeft);
		var _w = Math.round(_bounds.width);
		var _h = Math.round(_bounds.height);
		if(_x != this.window_x || _y != this.window_y) {
			this.window_x = _x;
			this.window_y = _y;
			this.dispatch_window_ev(4,this.window_x,this.window_y);
		}
		if(_w != this.window_w || _h != this.window_h) {
			this.window_w = _w;
			this.window_h = _h;
			this.window.width = Math.floor(this.window_w * this.window_dpr);
			this.window.height = Math.floor(this.window_h * this.window_dpr);
			this.dispatch_window_ev(6,this.window.width,this.window.height);
		}
	}
	,gamepads_init_cache: function(_gamepad) {
		this.gamepad_btns_cache[_gamepad.index] = [];
		var _g1 = 0;
		var _g = _gamepad.buttons.length;
		while(_g1 < _g) {
			++_g1;
			this.gamepad_btns_cache[_gamepad.index].push(0);
		}
	}
	,gamepads_init: function() {
		var _list = ($_=window.navigator,$bind($_,$_.getGamepads)) != null?window.navigator.getGamepads():window.navigator.webkitGetGamepads != null?window.navigator.webkitGetGamepads():null;
		if(_list != null) {
			this.gamepads_supported = true;
			this.gamepad_btns_cache = [];
			var _g = 0;
			while(_g < _list.length) {
				var _gamepad = _list[_g];
				++_g;
				if(_gamepad != null) {
					this.gamepad_btns_cache[_gamepad.index] = [];
					var _g1 = 0;
					var _g2 = _gamepad.buttons.length;
					while(_g1 < _g2) {
						_g1++;
						this.gamepad_btns_cache[_gamepad.index].push(0);
					}
				}
			}
		} else {
			haxe_Log.trace("  i / runtime / " + "Gamepads are not supported in this browser :(",{ fileName : "Runtime.hx", lineNumber : 840, className : "snow.core.web.Runtime", methodName : "gamepads_init"});
		}
	}
	,gamepads_poll: function() {
		var list = ($_=window.navigator,$bind($_,$_.getGamepads)) != null?window.navigator.getGamepads():window.navigator.webkitGetGamepads != null?window.navigator.webkitGetGamepads():null;
		if(list == null) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("list was null" + (" ( " + "gamepad list not found, but they were previously?" + " )")));
		}
		var _count = list.length;
		var _idx = 0;
		while(_idx < _count) {
			var _gamepad = list[_idx];
			if(_gamepad == null) {
				++_idx;
				continue;
			}
			var _g1 = 0;
			var _g = _gamepad.axes.length;
			while(_g1 < _g) {
				var _axis_idx = _g1++;
				var _axis = _gamepad.axes[_axis_idx];
				if(_axis != 0) {
					this.app.input.dispatch_gamepad_axis_event(_gamepad.index,_axis_idx,_axis,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
				}
			}
			var _prev_btn = this.gamepad_btns_cache[_gamepad.index];
			var _g11 = 0;
			var _g2 = _gamepad.buttons.length;
			while(_g11 < _g2) {
				var _btn_idx = _g11++;
				var _btn = _gamepad.buttons[_btn_idx];
				if(_btn.value != _prev_btn[_btn_idx]) {
					if(_btn.pressed) {
						this.app.input.dispatch_gamepad_button_down_event(_gamepad.index,_btn_idx,_btn.value,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
					} else {
						this.app.input.dispatch_gamepad_button_up_event(_gamepad.index,_btn_idx,_btn.value,window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start);
					}
					_prev_btn[_btn_idx] = _btn.value;
				}
			}
			++_idx;
		}
	}
	,gamepads_get_list: function() {
		if(($_=window.navigator,$bind($_,$_.getGamepads)) != null) {
			return window.navigator.getGamepads();
		}
		if(window.navigator.webkitGetGamepads != null) {
			return window.navigator.webkitGetGamepads();
		}
		return null;
	}
	,guess_os: function() {
		var _ver = window.navigator.appVersion;
		var _agent = window.navigator.userAgent;
		if(new EReg("mac","gi").match(_ver)) {
			return "mac";
		}
		if(new EReg("win","gi").match(_ver)) {
			return "windows";
		}
		if(new EReg("x11","gi").match(_ver)) {
			return "linux";
		}
		if(new EReg("linux","gi").match(_ver)) {
			return "linux";
		}
		if(new EReg("android","gi").match(_ver)) {
			return "android";
		}
		if(new EReg("ipad","gi").match(_agent)) {
			return "ios";
		}
		if(new EReg("iphone","gi").match(_agent)) {
			return "ios";
		}
		if(new EReg("ipod","gi").match(_agent)) {
			return "ios";
		}
		return "unknown";
	}
	,__class__: snow_core_web_Runtime
};
var snow_core_web__$Runtime_DOMKeys = function() { };
$hxClasses["snow.core.web._Runtime.DOMKeys"] = snow_core_web__$Runtime_DOMKeys;
snow_core_web__$Runtime_DOMKeys.__name__ = ["snow","core","web","_Runtime","DOMKeys"];
snow_core_web__$Runtime_DOMKeys.dom_key_to_keycode = function(_keycode) {
	switch(_keycode) {
	case 16:
		return 1073742049;
	case 17:
		return 1073742048;
	case 18:
		return 1073742050;
	case 20:
		return 1073741881;
	case 33:
		return 1073741899;
	case 34:
		return 1073741902;
	case 35:
		return 1073741901;
	case 36:
		return 1073741898;
	case 37:
		return 1073741904;
	case 38:
		return 1073741906;
	case 39:
		return 1073741903;
	case 40:
		return 1073741905;
	case 44:
		return 1073741894;
	case 45:
		return 1073741897;
	case 46:
		return 127;
	case 91:
		return 1073742051;
	case 93:
		return 1073742055;
	case 96:
		return 1073741922;
	case 97:
		return 1073741913;
	case 98:
		return 1073741914;
	case 99:
		return 1073741915;
	case 100:
		return 1073741916;
	case 101:
		return 1073741917;
	case 102:
		return 1073741918;
	case 103:
		return 1073741919;
	case 104:
		return 1073741920;
	case 105:
		return 1073741921;
	case 106:
		return 1073741909;
	case 107:
		return 1073741911;
	case 109:
		return 1073741910;
	case 110:
		return 1073742044;
	case 111:
		return 1073741908;
	case 112:
		return 1073741882;
	case 113:
		return 1073741883;
	case 114:
		return 1073741884;
	case 115:
		return 1073741885;
	case 116:
		return 1073741886;
	case 117:
		return 1073741887;
	case 118:
		return 1073741888;
	case 119:
		return 1073741889;
	case 120:
		return 1073741890;
	case 121:
		return 1073741891;
	case 122:
		return 1073741892;
	case 123:
		return 1073741893;
	case 124:
		return 1073741928;
	case 125:
		return 1073741929;
	case 126:
		return 1073741930;
	case 127:
		return 1073741931;
	case 128:
		return 1073741932;
	case 129:
		return 1073741933;
	case 130:
		return 1073741934;
	case 131:
		return 1073741935;
	case 132:
		return 1073741936;
	case 133:
		return 1073741937;
	case 134:
		return 1073741938;
	case 135:
		return 1073741939;
	case 144:
		return 1073741907;
	case 160:
		return 94;
	case 161:
		return 33;
	case 162:
		return 34;
	case 163:
		return 35;
	case 164:
		return 36;
	case 165:
		return 37;
	case 166:
		return 38;
	case 167:
		return 95;
	case 168:
		return 40;
	case 169:
		return 41;
	case 170:
		return 42;
	case 171:
		return 43;
	case 172:
		return 92;
	case 173:
		return 45;
	case 174:
		return 91;
	case 175:
		return 93;
	case 176:
		return 96;
	case 181:
		return 1073742086;
	case 182:
		return 1073741953;
	case 183:
		return 1073741952;
	case 188:
		return 44;
	case 190:
		return 46;
	case 191:
		return 47;
	case 192:
		return 96;
	case 219:
		return 91;
	case 220:
		return 92;
	case 221:
		return 93;
	case 222:
		return 39;
	case 224:
		return 1073742051;
	}
	return _keycode;
};
var snow_modules_interfaces_Assets = function() { };
$hxClasses["snow.modules.interfaces.Assets"] = snow_modules_interfaces_Assets;
snow_modules_interfaces_Assets.__name__ = ["snow","modules","interfaces","Assets"];
snow_modules_interfaces_Assets.prototype = {
	__class__: snow_modules_interfaces_Assets
};
var snow_core_web_assets_Assets = function(_app) {
	this.app = _app;
};
$hxClasses["snow.core.web.assets.Assets"] = snow_core_web_assets_Assets;
snow_core_web_assets_Assets.__name__ = ["snow","core","web","assets","Assets"];
snow_core_web_assets_Assets.__interfaces__ = [snow_modules_interfaces_Assets];
snow_core_web_assets_Assets.prototype = {
	onevent: function(event) {
	}
	,shutdown: function() {
	}
	,image_info_from_load: function(_id,_components) {
		if(_components == null) {
			_components = 4;
		}
		return this.app.io.data_flow(_id,snow_systems_assets_AssetImage.processor);
	}
	,image_info_from_element: function(_id,_elem) {
		var width_pot = this.nearest_power_of_two(_elem.width);
		var height_pot = this.nearest_power_of_two(_elem.height);
		var image_bytes = this.POT_bytes_from_element(_elem.width,_elem.height,width_pot,height_pot,_elem);
		var info = new snow_types_ImageData(this.app,{ id : _id, bpp : 4, width : _elem.width, height : _elem.height, width_actual : width_pot, height_actual : height_pot, bpp_source : 4, pixels : image_bytes});
		image_bytes = null;
		return info;
	}
	,image_info_from_pixels: function(_id,_width,_height,_pixels,_bpp) {
		if(_bpp == null) {
			_bpp = 4;
		}
		return new snow_types_ImageData(this.app,{ id : _id, bpp : 4, width : _width, height : _height, width_actual : _width, height_actual : _height, bpp_source : 4, pixels : _pixels});
	}
	,image_info_from_bytes: function(_id,_bytes,_components) {
		if(_components == null) {
			_components = 4;
		}
		var _gthis = this;
		if(_id == null) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
		}
		if(_bytes == null) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_bytes was null"));
		}
		if(_bytes.length == 0) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("_bytes.length != 0"));
		}
		var ext = haxe_io_Path.extension(_id);
		return new snow_api_Promise(function(resolve,reject) {
			var str = "";
			var i = 0;
			var len = _bytes.length;
			while(i < len) str += String.fromCharCode(_bytes[i++] & 255);
			var b64 = window.btoa(str);
			var _img = new Image();
			_img.onload = function(_) {
				var info = _gthis.image_info_from_element(_id,_img);
				resolve(info);
			};
			_img.onerror = function(e) {
				reject(snow_types_Error.error("failed to load image from bytes, on error: " + e));
			};
			_img.src = "data:image/" + ext + ";base64," + b64;
		});
	}
	,POT_bytes_from_pixels: function(_width,_height,_width_pot,_height_pot,_source) {
		var tmp_canvas = window.document.createElement("canvas");
		tmp_canvas.width = _width_pot;
		tmp_canvas.height = _height_pot;
		var tmp_context = tmp_canvas.getContext("2d",null);
		tmp_context.clearRect(0,0,tmp_canvas.width,tmp_canvas.height);
		var image_bytes = null;
		var _pixels = new Uint8ClampedArray(_source.buffer);
		var _imgdata = tmp_context.createImageData(_width,_height);
		_imgdata.data.set(_pixels);
		try {
			tmp_context.putImageData(_imgdata,0,0);
			image_bytes = tmp_context.getImageData(0,0,tmp_canvas.width,tmp_canvas.height);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			var tips = "- textures served from file:/// throw security errors\n";
			tips += "- textures served over http:// work for cross origin byte requests";
			haxe_Log.trace("   i / assets / " + tips,{ fileName : "Assets.hx", lineNumber : 183, className : "snow.core.web.assets.Assets", methodName : "POT_bytes_from_pixels"});
			throw js__$Boot_HaxeError.wrap(e);
		}
		tmp_canvas = null;
		tmp_context = null;
		_imgdata = null;
		return new Uint8Array(image_bytes.data);
	}
	,POT_bytes_from_element: function(_width,_height,_width_pot,_height_pot,_source) {
		var tmp_canvas = window.document.createElement("canvas");
		tmp_canvas.width = _width_pot;
		tmp_canvas.height = _height_pot;
		var tmp_context = tmp_canvas.getContext("2d",null);
		tmp_context.clearRect(0,0,tmp_canvas.width,tmp_canvas.height);
		tmp_context.drawImage(_source,0,0,_width,_height);
		var image_bytes = null;
		try {
			image_bytes = tmp_context.getImageData(0,0,tmp_canvas.width,tmp_canvas.height);
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			var tips = "- textures served from file:/// throw security errors\n";
			tips += "- textures served over http:// work for cross origin byte requests";
			haxe_Log.trace("   i / assets / " + tips,{ fileName : "Assets.hx", lineNumber : 221, className : "snow.core.web.assets.Assets", methodName : "POT_bytes_from_element"});
			throw js__$Boot_HaxeError.wrap(e);
		}
		tmp_canvas = null;
		tmp_context = null;
		return new Uint8Array(image_bytes.data);
	}
	,nearest_power_of_two: function(_value) {
		if(!snow_core_web_assets_Assets.POT) {
			return _value;
		}
		--_value;
		_value |= _value >> 1;
		_value |= _value >> 2;
		_value |= _value >> 4;
		_value |= _value >> 8;
		_value |= _value >> 16;
		return ++_value;
	}
	,__class__: snow_core_web_assets_Assets
};
var snow_modules_interfaces_IO = function() { };
$hxClasses["snow.modules.interfaces.IO"] = snow_modules_interfaces_IO;
snow_modules_interfaces_IO.__name__ = ["snow","modules","interfaces","IO"];
snow_modules_interfaces_IO.prototype = {
	__class__: snow_modules_interfaces_IO
};
var snow_core_web_io_IO = function(_app) {
	this.app = _app;
};
$hxClasses["snow.core.web.io.IO"] = snow_core_web_io_IO;
snow_core_web_io_IO.__name__ = ["snow","core","web","io","IO"];
snow_core_web_io_IO.__interfaces__ = [snow_modules_interfaces_IO];
snow_core_web_io_IO.prototype = {
	shutdown: function() {
	}
	,onevent: function(_event) {
	}
	,app_path: function() {
		return "./";
	}
	,app_path_prefs: function() {
		return "./";
	}
	,url_open: function(_url) {
		if(_url != null && _url.length > 0) {
			window.open(_url,"_blank");
		}
	}
	,data_load: function(_path,_options) {
		return new snow_api_Promise(function(resolve,reject) {
			var _binary = true;
			if(_options != null) {
				if(_options.binary != null) {
					_binary = _options.binary;
				}
			}
			var request = new XMLHttpRequest();
			request.open("GET",_path,true);
			if(_binary) {
				request.overrideMimeType("text/plain; charset=x-user-defined");
			} else {
				request.overrideMimeType("text/plain; charset=UTF-8");
			}
			request.responseType = "arraybuffer";
			request.onload = function(data) {
				if(request.status == 200) {
					var this1 = new Uint8Array(request.response);
					resolve(this1);
				} else {
					reject(snow_types_Error.error("request status was " + request.status + " / " + request.statusText));
				}
			};
			request.send();
		});
	}
	,data_save: function(_path,_data,_options) {
		return false;
	}
	,string_save_path: function(_slot) {
		if(_slot == null) {
			_slot = 0;
		}
		var _parts = snow_types_Config.app_ident.split(".");
		var _appname = _parts.pop();
		return haxe_io_Path.normalize(haxe_io_Path.join(["<localstorage>","" + _parts.join(".") + "/" + _appname + "/" + this.app.io.string_save_prefix + "." + _slot]));
	}
	,string_slot_id: function(_slot) {
		if(_slot == null) {
			_slot = 0;
		}
		var _parts = snow_types_Config.app_ident.split(".");
		var _appname = _parts.pop();
		return "" + _parts.join(".") + "/" + _appname + "/" + this.app.io.string_save_prefix + "." + _slot;
	}
	,string_slot_destroy: function(_slot) {
		if(_slot == null) {
			_slot = 0;
		}
		var storage = window.localStorage;
		if(storage == null) {
			haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 119, className : "snow.core.web.io.IO", methodName : "string_slot_destroy"});
			return false;
		}
		var _parts = snow_types_Config.app_ident.split(".");
		var _appname = _parts.pop();
		storage.removeItem("" + _parts.join(".") + "/" + _appname + "/" + this.app.io.string_save_prefix + "." + _slot);
		return false;
	}
	,string_slot_save: function(_slot,_contents) {
		if(_slot == null) {
			_slot = 0;
		}
		var storage = window.localStorage;
		if(storage == null) {
			haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 136, className : "snow.core.web.io.IO", methodName : "string_slot_save"});
			return false;
		}
		var _parts = snow_types_Config.app_ident.split(".");
		var _appname = _parts.pop();
		storage.setItem("" + _parts.join(".") + "/" + _appname + "/" + this.app.io.string_save_prefix + "." + _slot,_contents);
		return true;
	}
	,string_slot_load: function(_slot) {
		if(_slot == null) {
			_slot = 0;
		}
		var storage = window.localStorage;
		if(storage == null) {
			haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 154, className : "snow.core.web.io.IO", methodName : "string_slot_load"});
			return null;
		}
		var _parts = snow_types_Config.app_ident.split(".");
		var _appname = _parts.pop();
		return storage.getItem("" + _parts.join(".") + "/" + _appname + "/" + this.app.io.string_save_prefix + "." + _slot);
	}
	,string_slot_encode: function(_string) {
		return window.btoa(_string);
	}
	,string_slot_decode: function(_string) {
		return window.atob(_string);
	}
	,__class__: snow_core_web_io_IO
};
var snow_modules_opengl_web_GL = function() { };
$hxClasses["snow.modules.opengl.web.GL"] = snow_modules_opengl_web_GL;
snow_modules_opengl_web_GL.__name__ = ["snow","modules","opengl","web","GL"];
snow_modules_opengl_web_GL.versionString = function() {
	return "/ " + snow_modules_opengl_web_GL.gl.getParameter(7938) + " / " + snow_modules_opengl_web_GL.gl.getParameter(35724) + " / " + snow_modules_opengl_web_GL.gl.getParameter(7937) + " / " + snow_modules_opengl_web_GL.gl.getParameter(7936) + " /";
};
snow_modules_opengl_web_GL.activeTexture = function(texture) {
	snow_modules_opengl_web_GL.gl.activeTexture(texture);
};
snow_modules_opengl_web_GL.attachShader = function(program,shader) {
	snow_modules_opengl_web_GL.gl.attachShader(program,shader);
};
snow_modules_opengl_web_GL.bindAttribLocation = function(program,index,name) {
	snow_modules_opengl_web_GL.gl.bindAttribLocation(program,index,name);
};
snow_modules_opengl_web_GL.bindBuffer = function(target,buffer) {
	snow_modules_opengl_web_GL.gl.bindBuffer(target,buffer);
};
snow_modules_opengl_web_GL.bindFramebuffer = function(target,framebuffer) {
	snow_modules_opengl_web_GL.gl.bindFramebuffer(target,framebuffer);
};
snow_modules_opengl_web_GL.bindRenderbuffer = function(target,renderbuffer) {
	snow_modules_opengl_web_GL.gl.bindRenderbuffer(target,renderbuffer);
};
snow_modules_opengl_web_GL.bindTexture = function(target,texture) {
	snow_modules_opengl_web_GL.gl.bindTexture(target,texture);
};
snow_modules_opengl_web_GL.blendColor = function(red,green,blue,alpha) {
	snow_modules_opengl_web_GL.gl.blendColor(red,green,blue,alpha);
};
snow_modules_opengl_web_GL.blendEquation = function(mode) {
	snow_modules_opengl_web_GL.gl.blendEquation(mode);
};
snow_modules_opengl_web_GL.blendEquationSeparate = function(modeRGB,modeAlpha) {
	snow_modules_opengl_web_GL.gl.blendEquationSeparate(modeRGB,modeAlpha);
};
snow_modules_opengl_web_GL.blendFunc = function(sfactor,dfactor) {
	snow_modules_opengl_web_GL.gl.blendFunc(sfactor,dfactor);
};
snow_modules_opengl_web_GL.blendFuncSeparate = function(srcRGB,dstRGB,srcAlpha,dstAlpha) {
	snow_modules_opengl_web_GL.gl.blendFuncSeparate(srcRGB,dstRGB,srcAlpha,dstAlpha);
};
snow_modules_opengl_web_GL.bufferData = function(target,data,usage) {
	snow_modules_opengl_web_GL.gl.bufferData(target,data,usage);
};
snow_modules_opengl_web_GL.bufferSubData = function(target,offset,data) {
	snow_modules_opengl_web_GL.gl.bufferSubData(target,offset,data);
};
snow_modules_opengl_web_GL.checkFramebufferStatus = function(target) {
	return snow_modules_opengl_web_GL.gl.checkFramebufferStatus(target);
};
snow_modules_opengl_web_GL.clear = function(mask) {
	snow_modules_opengl_web_GL.gl.clear(mask);
};
snow_modules_opengl_web_GL.clearColor = function(red,green,blue,alpha) {
	snow_modules_opengl_web_GL.gl.clearColor(red,green,blue,alpha);
};
snow_modules_opengl_web_GL.clearDepth = function(depth) {
	snow_modules_opengl_web_GL.gl.clearDepth(depth);
};
snow_modules_opengl_web_GL.clearStencil = function(s) {
	snow_modules_opengl_web_GL.gl.clearStencil(s);
};
snow_modules_opengl_web_GL.colorMask = function(red,green,blue,alpha) {
	snow_modules_opengl_web_GL.gl.colorMask(red,green,blue,alpha);
};
snow_modules_opengl_web_GL.compileShader = function(shader) {
	snow_modules_opengl_web_GL.gl.compileShader(shader);
};
snow_modules_opengl_web_GL.compressedTexImage2D = function(target,level,internalformat,width,height,border,data) {
	snow_modules_opengl_web_GL.gl.compressedTexImage2D(target,level,internalformat,width,height,border,data);
};
snow_modules_opengl_web_GL.compressedTexSubImage2D = function(target,level,xoffset,yoffset,width,height,format,data) {
	snow_modules_opengl_web_GL.gl.compressedTexSubImage2D(target,level,xoffset,yoffset,width,height,format,data);
};
snow_modules_opengl_web_GL.copyTexImage2D = function(target,level,internalformat,x,y,width,height,border) {
	snow_modules_opengl_web_GL.gl.copyTexImage2D(target,level,internalformat,x,y,width,height,border);
};
snow_modules_opengl_web_GL.copyTexSubImage2D = function(target,level,xoffset,yoffset,x,y,width,height) {
	snow_modules_opengl_web_GL.gl.copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height);
};
snow_modules_opengl_web_GL.createBuffer = function() {
	return snow_modules_opengl_web_GL.gl.createBuffer();
};
snow_modules_opengl_web_GL.createFramebuffer = function() {
	return snow_modules_opengl_web_GL.gl.createFramebuffer();
};
snow_modules_opengl_web_GL.createProgram = function() {
	return snow_modules_opengl_web_GL.gl.createProgram();
};
snow_modules_opengl_web_GL.createRenderbuffer = function() {
	return snow_modules_opengl_web_GL.gl.createRenderbuffer();
};
snow_modules_opengl_web_GL.createShader = function(type) {
	return snow_modules_opengl_web_GL.gl.createShader(type);
};
snow_modules_opengl_web_GL.createTexture = function() {
	return snow_modules_opengl_web_GL.gl.createTexture();
};
snow_modules_opengl_web_GL.cullFace = function(mode) {
	snow_modules_opengl_web_GL.gl.cullFace(mode);
};
snow_modules_opengl_web_GL.deleteBuffer = function(buffer) {
	snow_modules_opengl_web_GL.gl.deleteBuffer(buffer);
};
snow_modules_opengl_web_GL.deleteFramebuffer = function(framebuffer) {
	snow_modules_opengl_web_GL.gl.deleteFramebuffer(framebuffer);
};
snow_modules_opengl_web_GL.deleteProgram = function(program) {
	snow_modules_opengl_web_GL.gl.deleteProgram(program);
};
snow_modules_opengl_web_GL.deleteRenderbuffer = function(renderbuffer) {
	snow_modules_opengl_web_GL.gl.deleteRenderbuffer(renderbuffer);
};
snow_modules_opengl_web_GL.deleteShader = function(shader) {
	snow_modules_opengl_web_GL.gl.deleteShader(shader);
};
snow_modules_opengl_web_GL.deleteTexture = function(texture) {
	snow_modules_opengl_web_GL.gl.deleteTexture(texture);
};
snow_modules_opengl_web_GL.depthFunc = function(func) {
	snow_modules_opengl_web_GL.gl.depthFunc(func);
};
snow_modules_opengl_web_GL.depthMask = function(flag) {
	snow_modules_opengl_web_GL.gl.depthMask(flag);
};
snow_modules_opengl_web_GL.depthRange = function(zNear,zFar) {
	snow_modules_opengl_web_GL.gl.depthRange(zNear,zFar);
};
snow_modules_opengl_web_GL.detachShader = function(program,shader) {
	snow_modules_opengl_web_GL.gl.detachShader(program,shader);
};
snow_modules_opengl_web_GL.disable = function(cap) {
	snow_modules_opengl_web_GL.gl.disable(cap);
};
snow_modules_opengl_web_GL.disableVertexAttribArray = function(index) {
	snow_modules_opengl_web_GL.gl.disableVertexAttribArray(index);
};
snow_modules_opengl_web_GL.drawArrays = function(mode,first,count) {
	snow_modules_opengl_web_GL.gl.drawArrays(mode,first,count);
};
snow_modules_opengl_web_GL.drawElements = function(mode,count,type,offset) {
	snow_modules_opengl_web_GL.gl.drawElements(mode,count,type,offset);
};
snow_modules_opengl_web_GL.enable = function(cap) {
	snow_modules_opengl_web_GL.gl.enable(cap);
};
snow_modules_opengl_web_GL.enableVertexAttribArray = function(index) {
	snow_modules_opengl_web_GL.gl.enableVertexAttribArray(index);
};
snow_modules_opengl_web_GL.finish = function() {
	snow_modules_opengl_web_GL.gl.finish();
};
snow_modules_opengl_web_GL.flush = function() {
	snow_modules_opengl_web_GL.gl.flush();
};
snow_modules_opengl_web_GL.framebufferRenderbuffer = function(target,attachment,renderbuffertarget,renderbuffer) {
	snow_modules_opengl_web_GL.gl.framebufferRenderbuffer(target,attachment,renderbuffertarget,renderbuffer);
};
snow_modules_opengl_web_GL.framebufferTexture2D = function(target,attachment,textarget,texture,level) {
	snow_modules_opengl_web_GL.gl.framebufferTexture2D(target,attachment,textarget,texture,level);
};
snow_modules_opengl_web_GL.frontFace = function(mode) {
	snow_modules_opengl_web_GL.gl.frontFace(mode);
};
snow_modules_opengl_web_GL.generateMipmap = function(target) {
	snow_modules_opengl_web_GL.gl.generateMipmap(target);
};
snow_modules_opengl_web_GL.getActiveAttrib = function(program,index) {
	return snow_modules_opengl_web_GL.gl.getActiveAttrib(program,index);
};
snow_modules_opengl_web_GL.getActiveUniform = function(program,index) {
	return snow_modules_opengl_web_GL.gl.getActiveUniform(program,index);
};
snow_modules_opengl_web_GL.getAttachedShaders = function(program) {
	return snow_modules_opengl_web_GL.gl.getAttachedShaders(program);
};
snow_modules_opengl_web_GL.getAttribLocation = function(program,name) {
	return snow_modules_opengl_web_GL.gl.getAttribLocation(program,name);
};
snow_modules_opengl_web_GL.getBufferParameter = function(target,pname) {
	return snow_modules_opengl_web_GL.gl.getBufferParameter(target,pname);
};
snow_modules_opengl_web_GL.getContextAttributes = function() {
	return snow_modules_opengl_web_GL.gl.getContextAttributes();
};
snow_modules_opengl_web_GL.getError = function() {
	return snow_modules_opengl_web_GL.gl.getError();
};
snow_modules_opengl_web_GL.getExtension = function(name) {
	return snow_modules_opengl_web_GL.gl.getExtension(name);
};
snow_modules_opengl_web_GL.getFramebufferAttachmentParameter = function(target,attachment,pname) {
	return snow_modules_opengl_web_GL.gl.getFramebufferAttachmentParameter(target,attachment,pname);
};
snow_modules_opengl_web_GL.getParameter = function(pname) {
	return snow_modules_opengl_web_GL.gl.getParameter(pname);
};
snow_modules_opengl_web_GL.getProgramInfoLog = function(program) {
	return snow_modules_opengl_web_GL.gl.getProgramInfoLog(program);
};
snow_modules_opengl_web_GL.getProgramParameter = function(program,pname) {
	return snow_modules_opengl_web_GL.gl.getProgramParameter(program,pname);
};
snow_modules_opengl_web_GL.getRenderbufferParameter = function(target,pname) {
	return snow_modules_opengl_web_GL.gl.getRenderbufferParameter(target,pname);
};
snow_modules_opengl_web_GL.getShaderInfoLog = function(shader) {
	return snow_modules_opengl_web_GL.gl.getShaderInfoLog(shader);
};
snow_modules_opengl_web_GL.getShaderParameter = function(shader,pname) {
	return snow_modules_opengl_web_GL.gl.getShaderParameter(shader,pname);
};
snow_modules_opengl_web_GL.getShaderPrecisionFormat = function(shadertype,precisiontype) {
	return snow_modules_opengl_web_GL.gl.getShaderPrecisionFormat(shadertype,precisiontype);
};
snow_modules_opengl_web_GL.getShaderSource = function(shader) {
	return snow_modules_opengl_web_GL.gl.getShaderSource(shader);
};
snow_modules_opengl_web_GL.getSupportedExtensions = function() {
	return snow_modules_opengl_web_GL.gl.getSupportedExtensions();
};
snow_modules_opengl_web_GL.getTexParameter = function(target,pname) {
	return snow_modules_opengl_web_GL.gl.getTexParameter(target,pname);
};
snow_modules_opengl_web_GL.getUniform = function(program,location) {
	return snow_modules_opengl_web_GL.gl.getUniform(program,location);
};
snow_modules_opengl_web_GL.getUniformLocation = function(program,name) {
	return snow_modules_opengl_web_GL.gl.getUniformLocation(program,name);
};
snow_modules_opengl_web_GL.getVertexAttrib = function(index,pname) {
	return snow_modules_opengl_web_GL.gl.getVertexAttrib(index,pname);
};
snow_modules_opengl_web_GL.getVertexAttribOffset = function(index,pname) {
	return snow_modules_opengl_web_GL.gl.getVertexAttribOffset(index,pname);
};
snow_modules_opengl_web_GL.hint = function(target,mode) {
	snow_modules_opengl_web_GL.gl.hint(target,mode);
};
snow_modules_opengl_web_GL.isBuffer = function(buffer) {
	return snow_modules_opengl_web_GL.gl.isBuffer(buffer);
};
snow_modules_opengl_web_GL.isEnabled = function(cap) {
	return snow_modules_opengl_web_GL.gl.isEnabled(cap);
};
snow_modules_opengl_web_GL.isFramebuffer = function(framebuffer) {
	return snow_modules_opengl_web_GL.gl.isFramebuffer(framebuffer);
};
snow_modules_opengl_web_GL.isProgram = function(program) {
	return snow_modules_opengl_web_GL.gl.isProgram(program);
};
snow_modules_opengl_web_GL.isRenderbuffer = function(renderbuffer) {
	return snow_modules_opengl_web_GL.gl.isRenderbuffer(renderbuffer);
};
snow_modules_opengl_web_GL.isShader = function(shader) {
	return snow_modules_opengl_web_GL.gl.isShader(shader);
};
snow_modules_opengl_web_GL.isTexture = function(texture) {
	return snow_modules_opengl_web_GL.gl.isTexture(texture);
};
snow_modules_opengl_web_GL.lineWidth = function(width) {
	snow_modules_opengl_web_GL.gl.lineWidth(width);
};
snow_modules_opengl_web_GL.linkProgram = function(program) {
	snow_modules_opengl_web_GL.gl.linkProgram(program);
};
snow_modules_opengl_web_GL.pixelStorei = function(pname,param) {
	snow_modules_opengl_web_GL.gl.pixelStorei(pname,param);
};
snow_modules_opengl_web_GL.polygonOffset = function(factor,units) {
	snow_modules_opengl_web_GL.gl.polygonOffset(factor,units);
};
snow_modules_opengl_web_GL.readPixels = function(x,y,width,height,format,type,data) {
	snow_modules_opengl_web_GL.gl.readPixels(x,y,width,height,format,type,data);
};
snow_modules_opengl_web_GL.renderbufferStorage = function(target,internalformat,width,height) {
	snow_modules_opengl_web_GL.gl.renderbufferStorage(target,internalformat,width,height);
};
snow_modules_opengl_web_GL.sampleCoverage = function(value,invert) {
	snow_modules_opengl_web_GL.gl.sampleCoverage(value,invert);
};
snow_modules_opengl_web_GL.scissor = function(x,y,width,height) {
	snow_modules_opengl_web_GL.gl.scissor(x,y,width,height);
};
snow_modules_opengl_web_GL.shaderSource = function(shader,source) {
	snow_modules_opengl_web_GL.gl.shaderSource(shader,source);
};
snow_modules_opengl_web_GL.stencilFunc = function(func,ref,mask) {
	snow_modules_opengl_web_GL.gl.stencilFunc(func,ref,mask);
};
snow_modules_opengl_web_GL.stencilFuncSeparate = function(face,func,ref,mask) {
	snow_modules_opengl_web_GL.gl.stencilFuncSeparate(face,func,ref,mask);
};
snow_modules_opengl_web_GL.stencilMask = function(mask) {
	snow_modules_opengl_web_GL.gl.stencilMask(mask);
};
snow_modules_opengl_web_GL.stencilMaskSeparate = function(face,mask) {
	snow_modules_opengl_web_GL.gl.stencilMaskSeparate(face,mask);
};
snow_modules_opengl_web_GL.stencilOp = function(fail,zfail,zpass) {
	snow_modules_opengl_web_GL.gl.stencilOp(fail,zfail,zpass);
};
snow_modules_opengl_web_GL.stencilOpSeparate = function(face,fail,zfail,zpass) {
	snow_modules_opengl_web_GL.gl.stencilOpSeparate(face,fail,zfail,zpass);
};
snow_modules_opengl_web_GL.texImage2D = function(target,level,internalformat,width,height,border,format,type,data) {
	snow_modules_opengl_web_GL.gl.texImage2D(target,level,internalformat,width,height,border,format,type,data);
};
snow_modules_opengl_web_GL.texParameterf = function(target,pname,param) {
	snow_modules_opengl_web_GL.gl.texParameterf(target,pname,param);
};
snow_modules_opengl_web_GL.texParameteri = function(target,pname,param) {
	snow_modules_opengl_web_GL.gl.texParameteri(target,pname,param);
};
snow_modules_opengl_web_GL.texSubImage2D = function(target,level,xoffset,yoffset,width,height,format,type,data) {
	snow_modules_opengl_web_GL.gl.texSubImage2D(target,level,xoffset,yoffset,width,height,format,type,data);
};
snow_modules_opengl_web_GL.uniform1f = function(location,x) {
	snow_modules_opengl_web_GL.gl.uniform1f(location,x);
};
snow_modules_opengl_web_GL.uniform1fv = function(location,data) {
	snow_modules_opengl_web_GL.gl.uniform1fv(location,data);
};
snow_modules_opengl_web_GL.uniform1i = function(location,x) {
	snow_modules_opengl_web_GL.gl.uniform1i(location,x);
};
snow_modules_opengl_web_GL.uniform1iv = function(location,data) {
	snow_modules_opengl_web_GL.gl.uniform1iv(location,data);
};
snow_modules_opengl_web_GL.uniform2f = function(location,x,y) {
	snow_modules_opengl_web_GL.gl.uniform2f(location,x,y);
};
snow_modules_opengl_web_GL.uniform2fv = function(location,data) {
	snow_modules_opengl_web_GL.gl.uniform2fv(location,data);
};
snow_modules_opengl_web_GL.uniform2i = function(location,x,y) {
	snow_modules_opengl_web_GL.gl.uniform2i(location,x,y);
};
snow_modules_opengl_web_GL.uniform2iv = function(location,data) {
	snow_modules_opengl_web_GL.gl.uniform2iv(location,data);
};
snow_modules_opengl_web_GL.uniform3f = function(location,x,y,z) {
	snow_modules_opengl_web_GL.gl.uniform3f(location,x,y,z);
};
snow_modules_opengl_web_GL.uniform3fv = function(location,data) {
	snow_modules_opengl_web_GL.gl.uniform3fv(location,data);
};
snow_modules_opengl_web_GL.uniform3i = function(location,x,y,z) {
	snow_modules_opengl_web_GL.gl.uniform3i(location,x,y,z);
};
snow_modules_opengl_web_GL.uniform3iv = function(location,data) {
	snow_modules_opengl_web_GL.gl.uniform3iv(location,data);
};
snow_modules_opengl_web_GL.uniform4f = function(location,x,y,z,w) {
	snow_modules_opengl_web_GL.gl.uniform4f(location,x,y,z,w);
};
snow_modules_opengl_web_GL.uniform4fv = function(location,data) {
	snow_modules_opengl_web_GL.gl.uniform4fv(location,data);
};
snow_modules_opengl_web_GL.uniform4i = function(location,x,y,z,w) {
	snow_modules_opengl_web_GL.gl.uniform4i(location,x,y,z,w);
};
snow_modules_opengl_web_GL.uniform4iv = function(location,data) {
	snow_modules_opengl_web_GL.gl.uniform4iv(location,data);
};
snow_modules_opengl_web_GL.uniformMatrix2fv = function(location,transpose,data) {
	snow_modules_opengl_web_GL.gl.uniformMatrix2fv(location,transpose,data);
};
snow_modules_opengl_web_GL.uniformMatrix3fv = function(location,transpose,data) {
	snow_modules_opengl_web_GL.gl.uniformMatrix3fv(location,transpose,data);
};
snow_modules_opengl_web_GL.uniformMatrix4fv = function(location,transpose,data) {
	snow_modules_opengl_web_GL.gl.uniformMatrix4fv(location,transpose,data);
};
snow_modules_opengl_web_GL.useProgram = function(program) {
	snow_modules_opengl_web_GL.gl.useProgram(program);
};
snow_modules_opengl_web_GL.validateProgram = function(program) {
	snow_modules_opengl_web_GL.gl.validateProgram(program);
};
snow_modules_opengl_web_GL.vertexAttrib1f = function(indx,x) {
	snow_modules_opengl_web_GL.gl.vertexAttrib1f(indx,x);
};
snow_modules_opengl_web_GL.vertexAttrib1fv = function(indx,data) {
	snow_modules_opengl_web_GL.gl.vertexAttrib1fv(indx,data);
};
snow_modules_opengl_web_GL.vertexAttrib2f = function(indx,x,y) {
	snow_modules_opengl_web_GL.gl.vertexAttrib2f(indx,x,y);
};
snow_modules_opengl_web_GL.vertexAttrib2fv = function(indx,data) {
	snow_modules_opengl_web_GL.gl.vertexAttrib2fv(indx,data);
};
snow_modules_opengl_web_GL.vertexAttrib3f = function(indx,x,y,z) {
	snow_modules_opengl_web_GL.gl.vertexAttrib3f(indx,x,y,z);
};
snow_modules_opengl_web_GL.vertexAttrib3fv = function(indx,data) {
	snow_modules_opengl_web_GL.gl.vertexAttrib3fv(indx,data);
};
snow_modules_opengl_web_GL.vertexAttrib4f = function(indx,x,y,z,w) {
	snow_modules_opengl_web_GL.gl.vertexAttrib4f(indx,x,y,z,w);
};
snow_modules_opengl_web_GL.vertexAttrib4fv = function(indx,data) {
	snow_modules_opengl_web_GL.gl.vertexAttrib4fv(indx,data);
};
snow_modules_opengl_web_GL.vertexAttribPointer = function(indx,size,type,normalized,stride,offset) {
	snow_modules_opengl_web_GL.gl.vertexAttribPointer(indx,size,type,normalized,stride,offset);
};
snow_modules_opengl_web_GL.viewport = function(x,y,width,height) {
	snow_modules_opengl_web_GL.gl.viewport(x,y,width,height);
};
snow_modules_opengl_web_GL.get_version = function() {
	return 7938;
};
var snow_modules_webaudio_Audio = function(_app) {
	this.active = false;
	this.handle_seq = 0;
	this.app = _app;
	this.instances = new haxe_ds_IntMap();
	try {
		this.context = new AudioContext();
	} catch( err ) {
		try {
			this.context = new window.webkitAudioContext();
		} catch( err1 ) {
			haxe_Log.trace("    i / audio / " + "WebAudio: no AudioContext could be created! No audio loading or playback will be available.",{ fileName : "Audio.hx", lineNumber : 59, className : "snow.modules.webaudio.Audio", methodName : "new"});
			return;
		}
	}
	if(this.context == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("context was null" + (" ( " + "Audio / webaudio / no AudioContext could be created, is the Web Audio API supported?" + " )")));
	}
	var info = "channelCount: " + this.context.destination.channelCount + ", " + ("channelCountMode: \"" + this.context.destination.channelCountMode + "\", ") + ("channelInterpretation: \"" + this.context.destination.channelInterpretation + "\", ") + ("maxChannelCount: " + this.context.destination.maxChannelCount + ", ") + ("numberOfInputs: " + this.context.destination.numberOfInputs + ", ") + ("numberOfOutputs: " + this.context.destination.numberOfOutputs);
	haxe_Log.trace("    i / audio / " + ("webaudio: " + Std.string(this.context) + " / sampleRate: " + this.context.sampleRate + " / destination: " + info),{ fileName : "Audio.hx", lineNumber : 74, className : "snow.modules.webaudio.Audio", methodName : "new"});
	this.active = true;
};
$hxClasses["snow.modules.webaudio.Audio"] = snow_modules_webaudio_Audio;
snow_modules_webaudio_Audio.__name__ = ["snow","modules","webaudio","Audio"];
snow_modules_webaudio_Audio.__interfaces__ = [snow_modules_interfaces_Audio];
snow_modules_webaudio_Audio.prototype = {
	shutdown: function() {
		this.context.close();
	}
	,onevent: function(event) {
	}
	,snd_of: function(_handle) {
		return this.instances.h[_handle];
	}
	,play_buffer: function(_data) {
		var _node = this.context.createBufferSource();
		_node.buffer = _data.buffer;
		return _node;
	}
	,play_buffer_again: function(_handle,_snd,_start_time) {
		_snd.buffer_node = this.play_buffer(_snd.source.data);
		_snd.buffer_node.connect(_snd.pan_node);
		_snd.buffer_node.loop = _snd.loop;
		_snd.pan_node.connect(_snd.gain_node);
		_snd.gain_node.connect(this.context.destination);
		_snd.buffer_node.start(0,_start_time);
		var f = $bind(this,this.destroy_snd);
		var a1 = _snd;
		var tmp = function() {
			f(a1);
		};
		_snd.buffer_node.onended = tmp;
	}
	,play_instance: function(_handle,_source,_inst,_data,_buffer_node,_volume,_loop) {
		var _gthis = this;
		var _gain = this.context.createGain();
		var _pan = this.context.createPanner();
		var _node = null;
		_gain.gain.value = _volume;
		_pan.panningModel = "equalpower";
		_pan.setPosition(Math.cos(-1.5707),0,Math.sin(1.5707));
		if(_buffer_node != null) {
			_node = _buffer_node;
			_buffer_node.loop = _loop;
		}
		if(_data.media_node != null) {
			_node = _data.media_node;
			_data.media_elem.loop = _loop;
		}
		_node.connect(_pan);
		_pan.connect(_gain);
		_gain.connect(this.context.destination);
		var _data1 = _data.media_node;
		var _data2 = _data.media_elem;
		var _snd = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start;
		var _snd1 = { handle : _handle, source : _source, instance : _inst, buffer_node : _buffer_node, media_node : _data1, media_elem : _data2, gain_node : _gain, pan_node : _pan, state : 1, time_start : _snd, loop : _loop, pan : 0};
		this.instances.h[_handle] = _snd1;
		if(_buffer_node != null) {
			_buffer_node.start(0);
			var f = $bind(this,this.destroy_snd);
			var a1 = _snd1;
			_buffer_node.onended = function() {
				f(a1);
			};
		}
		if(_data.media_node != null) {
			_data.media_elem.play();
			_data.media_node.addEventListener("ended",function() {
				_gthis.app.audio.emit_Int(0,_handle);
				_snd1.state = 2;
			});
		}
	}
	,play: function(_source,_volume,_paused) {
		var _data = _source.data;
		var _handle = this.handle_seq;
		var _inst = _source.instance(_handle);
		if(_source.data.is_stream) {
			_data.media_elem.play();
			_data.media_elem.volume = 1.0;
			this.play_instance(_handle,_source,_inst,_data,null,_volume,false);
		} else {
			this.play_instance(_handle,_source,_inst,_data,this.play_buffer(_data),_volume,false);
		}
		this.handle_seq++;
		return _handle;
	}
	,loop: function(_source,_volume,_paused) {
		var _data = _source.data;
		var _handle = this.handle_seq;
		var _inst = _source.instance(_handle);
		if(_source.data.is_stream) {
			_data.media_elem.play();
			_data.media_elem.volume = 1.0;
			this.play_instance(_handle,_source,_inst,_data,null,_volume,true);
		} else {
			this.play_instance(_handle,_source,_inst,_data,this.play_buffer(_data),_volume,true);
		}
		this.handle_seq++;
		return _handle;
	}
	,stop_buffer: function(_snd) {
		_snd.buffer_node.stop();
		_snd.buffer_node.disconnect();
		_snd.gain_node.disconnect();
		_snd.pan_node.disconnect();
		_snd.buffer_node = null;
	}
	,pause: function(_handle) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return;
		}
		_snd.time_pause = window.performance.now() / 1000.0 - snow_core_web_Runtime.timestamp_start - _snd.time_start;
		_snd.state = 0;
		if(_snd.buffer_node != null) {
			this.stop_buffer(_snd);
		} else if(_snd.media_node != null) {
			_snd.media_elem.pause();
		}
	}
	,unpause: function(_handle) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return;
		}
		if(_snd.state != 0) {
			return;
		}
		if(_snd.media_node == null) {
			this.play_buffer_again(_handle,_snd,_snd.time_pause);
		} else {
			_snd.media_elem.play();
		}
		_snd.state = 1;
	}
	,destroy_snd: function(_snd) {
		if(_snd.buffer_node != null) {
			_snd.buffer_node.stop();
			_snd.buffer_node.disconnect();
			_snd.buffer_node = null;
		}
		if(_snd.media_node != null) {
			_snd.media_elem.pause();
			_snd.media_elem.currentTime = 0;
			_snd.media_node.disconnect();
			_snd.media_elem = null;
			_snd.media_node = null;
		}
		if(_snd.gain_node != null) {
			_snd.gain_node.disconnect();
			_snd.gain_node = null;
		}
		if(_snd.pan_node != null) {
			_snd.pan_node.disconnect();
			_snd.pan_node = null;
		}
		this.instances.remove(_snd.handle);
		_snd = null;
	}
	,stop: function(_handle) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return;
		}
		if(_snd.buffer_node != null) {
			_snd.buffer_node.stop();
			_snd.buffer_node.disconnect();
			_snd.buffer_node = null;
		}
		if(_snd.media_node != null) {
			_snd.media_elem.pause();
			_snd.media_elem.currentTime = 0;
			_snd.media_node.disconnect();
			_snd.media_elem = null;
			_snd.media_node = null;
		}
		if(_snd.gain_node != null) {
			_snd.gain_node.disconnect();
			_snd.gain_node = null;
		}
		if(_snd.pan_node != null) {
			_snd.pan_node.disconnect();
			_snd.pan_node = null;
		}
		this.instances.remove(_snd.handle);
		_snd.state = 2;
	}
	,volume: function(_handle,_volume) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return;
		}
		_snd.gain_node.gain.value = _volume;
	}
	,pan: function(_handle,_pan) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return;
		}
		_snd.pan = _pan;
		_snd.pan_node.setPosition(Math.cos((_pan - 1) * 1.5707),0,Math.sin((_pan + 1) * 1.5707));
	}
	,pitch: function(_handle,_pitch) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return;
		}
		if(_snd.buffer_node != null) {
			_snd.buffer_node.playbackRate.value = _pitch;
		} else if(_snd.media_node != null) {
			_snd.media_elem.playbackRate = _pitch;
		}
	}
	,position: function(_handle,_time) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return;
		}
		if(_snd.buffer_node != null) {
			this.stop_buffer(_snd);
			this.play_buffer_again(_handle,_snd,_time);
		} else {
			_snd.media_elem.currentTime = _time;
		}
	}
	,volume_of: function(_handle) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return 0.0;
		}
		return _snd.gain_node.gain.value;
	}
	,pan_of: function(_handle) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return 0.0;
		}
		return _snd.pan;
	}
	,pitch_of: function(_handle) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return 0.0;
		}
		var _result = 1.0;
		if(_snd.buffer_node != null) {
			_result = _snd.buffer_node.playbackRate.value;
		} else if(_snd.media_node != null) {
			_result = _snd.media_elem.playbackRate;
		}
		return _result;
	}
	,position_of: function(_handle) {
		if(this.instances.get(_handle) == null) {
			return 0.0;
		}
		return 0.0;
	}
	,state_of: function(_handle) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return -1;
		}
		return _snd.state;
	}
	,loop_of: function(_handle) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return false;
		}
		return _snd.loop;
	}
	,instance_of: function(_handle) {
		var _snd = this.instances.get(_handle);
		if(_snd == null) {
			return null;
		}
		return _snd.instance;
	}
	,suspend: function() {
		this.context.suspend();
	}
	,resume: function() {
		this.context.resume();
	}
	,data_from_load: function(_path,_is_stream,_format) {
		if(_is_stream == null) {
			_is_stream = false;
		}
		if(!this.active) {
			return snow_api_Promise.reject("WebAudio context unavailable");
		}
		if(_format == null) {
			switch(haxe_io_Path.extension(_path)) {
			case "ogg":
				_format = 2;
				break;
			case "pcm":
				_format = 4;
				break;
			case "wav":
				_format = 3;
				break;
			default:
				_format = 0;
			}
		}
		if(_is_stream) {
			return this.data_from_load_stream(_path,_format);
		}
		return this.data_from_load_sound(_path,_format);
	}
	,data_from_bytes: function(_id,_bytes,_format) {
		var _gthis = this;
		if(!this.active) {
			return snow_api_Promise.reject("WebAudio context unavailable");
		}
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.data_from_bytes_direct(_id,_bytes,_format,resolve,reject);
		});
	}
	,data_from_bytes_direct: function(_id,_bytes,_format,resolve,reject) {
		var _gthis = this;
		this.context.decodeAudioData(_bytes.buffer,function(_buffer) {
			var _data = new snow_modules_webaudio__$Audio_AudioDataWebAudio(_gthis.app,_buffer,null,null,{ id : _id, is_stream : false, format : _format, samples : null, length : _buffer.length, channels : _buffer.numberOfChannels, rate : _buffer.sampleRate | 0});
			resolve(_data);
			return;
		},function() {
			reject("failed to decode audio for `" + _id + "`");
			return;
		});
	}
	,data_from_load_sound: function(_path,_format) {
		var _gthis = this;
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.app.io.module.data_load(_path,null).then(function(_bytes) {
				_gthis.data_from_bytes_direct(_path,_bytes,_format,resolve,reject);
			});
		});
	}
	,data_from_load_stream: function(_path,_format) {
		var _gthis = this;
		return new snow_api_Promise(function(resolve,reject) {
			var _element = new Audio(_path);
			_element.autoplay = false;
			_element.controls = false;
			_element.preload = "auto";
			_element.onerror = function(err) {
				var _error;
				switch(_element.error.code) {
				case 1:
					_error = "MEDIA_ERR_ABORTED";
					break;
				case 2:
					_error = "MEDIA_ERR_NETWORK";
					break;
				case 3:
					_error = "MEDIA_ERR_DECODE";
					break;
				case 4:
					_error = "MEDIA_ERR_SRC_NOT_SUPPORTED";
					break;
				case 5:
					_error = "MEDIA_ERR_ENCRYPTED";
					break;
				default:
					_error = "unknown error";
				}
				return reject("failed to load `" + _path + "` as stream : `" + _error + "`");
			};
			_element.onloadedmetadata = function(_) {
				var _node = _gthis.context.createMediaElementSource(_element);
				var _rate = _gthis.context.sampleRate | 0;
				var _channels = _node.channelCount;
				var _data = new snow_modules_webaudio__$Audio_AudioDataWebAudio(_gthis.app,null,_node,_element,{ id : _path, is_stream : true, format : _format, samples : null, length : _element.duration * (_rate * _channels * 2) | 0, channels : _channels, rate : _rate});
				return resolve(_data);
			};
		});
	}
	,__class__: snow_modules_webaudio_Audio
};
var snow_types_AudioData = function(_app,_options) {
	this.is_stream = false;
	this.format = 0;
	this.channels = 1;
	this.length = 0;
	this.rate = 44100;
	this.id = "AudioData";
	this.app = _app;
	if(_options.id == null) {
		_options.id = this.id;
	}
	this.id = _options.id;
	if(_options.rate == null) {
		_options.rate = this.rate;
	}
	this.rate = _options.rate;
	if(_options.length == null) {
		_options.length = this.length;
	}
	this.length = _options.length;
	if(_options.format == null) {
		_options.format = this.format;
	}
	this.format = _options.format;
	if(_options.channels == null) {
		_options.channels = this.channels;
	}
	this.channels = _options.channels;
	if(_options.is_stream == null) {
		_options.is_stream = this.is_stream;
	}
	this.is_stream = _options.is_stream;
	if(_options.samples == null) {
		_options.samples = this.samples;
	}
	this.samples = _options.samples;
	_options = null;
};
$hxClasses["snow.types.AudioData"] = snow_types_AudioData;
snow_types_AudioData.__name__ = ["snow","types","AudioData"];
snow_types_AudioData.prototype = {
	destroy: function() {
		this.id = null;
		this.samples = null;
	}
	,seek: function(_to) {
		return false;
	}
	,portion: function(_into,_start,_len,_into_result) {
		return _into_result;
	}
	,toString: function() {
		var tmp = "{ \"AudioData\":true, \"id\":" + this.id + ", \"rate\":" + this.rate + ", \"length\":" + this.length + ", \"channels\":" + this.channels + ", \"format\":\"";
		var this1 = this.format;
		var tmp1;
		if(this1 == null) {
			tmp1 = "" + this1;
		} else {
			switch(this1) {
			case 0:
				tmp1 = "af_unknown";
				break;
			case 1:
				tmp1 = "af_custom";
				break;
			case 2:
				tmp1 = "af_ogg";
				break;
			case 3:
				tmp1 = "af_wav";
				break;
			case 4:
				tmp1 = "af_pcm";
				break;
			default:
				tmp1 = "" + this1;
			}
		}
		return tmp + tmp1 + "\", \"is_stream\":" + Std.string(this.is_stream) + " }";
	}
	,__class__: snow_types_AudioData
};
var snow_modules_webaudio__$Audio_AudioDataWebAudio = function(_app,_buffer,_media_node,_media_elem,_opt) {
	this.buffer = _buffer;
	this.media_node = _media_node;
	this.media_elem = _media_elem;
	snow_types_AudioData.call(this,_app,_opt);
};
$hxClasses["snow.modules.webaudio._Audio.AudioDataWebAudio"] = snow_modules_webaudio__$Audio_AudioDataWebAudio;
snow_modules_webaudio__$Audio_AudioDataWebAudio.__name__ = ["snow","modules","webaudio","_Audio","AudioDataWebAudio"];
snow_modules_webaudio__$Audio_AudioDataWebAudio.__super__ = snow_types_AudioData;
snow_modules_webaudio__$Audio_AudioDataWebAudio.prototype = $extend(snow_types_AudioData.prototype,{
	destroy: function() {
		this.buffer = null;
		this.media_node = null;
		this.media_elem = null;
	}
	,__class__: snow_modules_webaudio__$Audio_AudioDataWebAudio
});
var snow_systems_assets_Asset = function(_system,_id,_type) {
	if(_type == null) {
		_type = 0;
	}
	this.loaded = false;
	if(_id == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	}
	if(_system == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	}
	this.system = _system;
	this.type = _type;
	this.id = _id;
};
$hxClasses["snow.systems.assets.Asset"] = snow_systems_assets_Asset;
snow_systems_assets_Asset.__name__ = ["snow","systems","assets","Asset"];
snow_systems_assets_Asset.prototype = {
	destroy: function() {
	}
	,__class__: snow_systems_assets_Asset
};
var snow_systems_assets_AssetImage = function(_system,_id,_image) {
	snow_systems_assets_Asset.call(this,_system,_id,4);
	this.set_image(_image);
};
$hxClasses["snow.systems.assets.AssetImage"] = snow_systems_assets_AssetImage;
snow_systems_assets_AssetImage.__name__ = ["snow","systems","assets","AssetImage"];
snow_systems_assets_AssetImage.load = function(_system,_id) {
	if(_id == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	}
	if(_system == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	}
	return new snow_systems_assets_AssetImage(_system,_id,null).reload();
};
snow_systems_assets_AssetImage.load_from_bytes = function(_system,_id,_bytes) {
	if(_id == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	}
	if(_bytes == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_bytes was null"));
	}
	if(_system == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	}
	return new snow_systems_assets_AssetImage(_system,_id,null).reload_from_bytes(_bytes);
};
snow_systems_assets_AssetImage.load_from_pixels = function(_system,_id,_width,_height,_pixels) {
	if(_id == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	}
	if(_pixels == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_pixels was null"));
	}
	if(_system == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	}
	return new snow_systems_assets_AssetImage(_system,_id,_system.module.image_info_from_pixels(_id,_width,_height,_pixels));
};
snow_systems_assets_AssetImage.provider = function(_app,_path) {
	return _app.assets.module.image_info_from_load(_path);
};
snow_systems_assets_AssetImage.processor = function(_app,_id,_data) {
	if(_data == null) {
		return snow_api_Promise.reject(snow_types_Error.error("AssetImage processor: data was null"));
	}
	return _app.assets.module.image_info_from_bytes(_id,_data);
};
snow_systems_assets_AssetImage.__super__ = snow_systems_assets_Asset;
snow_systems_assets_AssetImage.prototype = $extend(snow_systems_assets_Asset.prototype,{
	reload: function() {
		var _gthis = this;
		this.loaded = false;
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.system.app.io.data_flow(haxe_io_Path.join([_gthis.system.root,_gthis.id]),null,snow_systems_assets_AssetImage.provider).then(function(_image) {
				_gthis.set_image(_image);
				resolve(_gthis);
			}).error(reject);
		});
	}
	,destroy: function() {
		this.image.destroy();
		this.set_image(null);
	}
	,reload_from_bytes: function(_bytes) {
		var _gthis = this;
		this.loaded = false;
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.system.module.image_info_from_bytes(_gthis.id,_bytes).then(function(_image) {
				_gthis.set_image(_image);
				resolve(_gthis);
			}).error(reject);
		});
	}
	,reload_from_pixels: function(_width,_height,_pixels) {
		this.loaded = false;
		this.set_image(this.system.module.image_info_from_pixels(this.id,_width,_height,_pixels));
	}
	,set_image: function(_image) {
		this.loaded = _image != null;
		return this.image = _image;
	}
	,__class__: snow_systems_assets_AssetImage
});
var snow_systems_assets_AssetAudio = function(_system,_id,_audio) {
	snow_systems_assets_Asset.call(this,_system,_id,5);
	this.set_audio(_audio);
};
$hxClasses["snow.systems.assets.AssetAudio"] = snow_systems_assets_AssetAudio;
snow_systems_assets_AssetAudio.__name__ = ["snow","systems","assets","AssetAudio"];
snow_systems_assets_AssetAudio.load = function(_system,_id,_is_stream) {
	if(_is_stream == null) {
		_is_stream = false;
	}
	if(_id == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	}
	if(_system == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	}
	return new snow_systems_assets_AssetAudio(_system,_id,null).reload(_is_stream);
};
snow_systems_assets_AssetAudio.load_from_bytes = function(_system,_id,_bytes,_format) {
	if(_id == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_id was null"));
	}
	if(_bytes == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_bytes was null"));
	}
	if(_system == null) {
		throw new js__$Boot_HaxeError(snow_api_DebugError.null_assertion("_system was null"));
	}
	return new snow_systems_assets_AssetAudio(_system,_id,null).reload_from_bytes(_bytes,_format);
};
snow_systems_assets_AssetAudio.__super__ = snow_systems_assets_Asset;
snow_systems_assets_AssetAudio.prototype = $extend(snow_systems_assets_Asset.prototype,{
	reload: function(_is_stream) {
		if(_is_stream == null) {
			_is_stream = false;
		}
		var _gthis = this;
		this.loaded = false;
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.system.app.audio.module.data_from_load(haxe_io_Path.join([_gthis.system.root,_gthis.id]),_is_stream).then(function(_audio) {
				_gthis.set_audio(_audio);
				resolve(_gthis);
			}).error(reject);
		});
	}
	,destroy: function() {
		this.audio.destroy();
		this.set_audio(null);
	}
	,reload_from_bytes: function(_bytes,_format) {
		var _gthis = this;
		this.loaded = false;
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.system.app.audio.module.data_from_bytes(_gthis.id,_bytes,_format).then(function(_audio) {
				_gthis.set_audio(_audio);
				resolve(_gthis);
			}).error(reject);
		});
	}
	,set_audio: function(_audio) {
		this.loaded = _audio != null;
		return this.audio = _audio;
	}
	,__class__: snow_systems_assets_AssetAudio
});
var snow_systems_assets_AssetBytes = function(_system,_id,_bytes) {
	snow_systems_assets_Asset.call(this,_system,_id,1);
	this.set_bytes(_bytes);
};
$hxClasses["snow.systems.assets.AssetBytes"] = snow_systems_assets_AssetBytes;
snow_systems_assets_AssetBytes.__name__ = ["snow","systems","assets","AssetBytes"];
snow_systems_assets_AssetBytes.load = function(_system,_id) {
	return new snow_systems_assets_AssetBytes(_system,_id,null).reload();
};
snow_systems_assets_AssetBytes.__super__ = snow_systems_assets_Asset;
snow_systems_assets_AssetBytes.prototype = $extend(snow_systems_assets_Asset.prototype,{
	reload: function() {
		var _gthis = this;
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.system.app.io.data_flow(haxe_io_Path.join([_gthis.system.root,_gthis.id])).then(function(_bytes) {
				_gthis.set_bytes(_bytes);
				resolve(_gthis);
			}).error(reject);
		});
	}
	,destroy: function() {
		this.set_bytes(null);
	}
	,set_bytes: function(_bytes) {
		this.loaded = _bytes != null;
		return this.bytes = _bytes;
	}
	,__class__: snow_systems_assets_AssetBytes
});
var snow_systems_assets_AssetText = function(_system,_id,_text) {
	snow_systems_assets_Asset.call(this,_system,_id,2);
	this.set_text(_text);
};
$hxClasses["snow.systems.assets.AssetText"] = snow_systems_assets_AssetText;
snow_systems_assets_AssetText.__name__ = ["snow","systems","assets","AssetText"];
snow_systems_assets_AssetText.load = function(_system,_id) {
	return new snow_systems_assets_AssetText(_system,_id,null).reload();
};
snow_systems_assets_AssetText.processor = function(_app,_id,_data) {
	if(_data == null) {
		return snow_api_Promise.reject(snow_types_Error.error("AssetText processor: data was null"));
	}
	var _string = new haxe_io_Bytes(new Uint8Array(_data.buffer)).toString();
	_data = null;
	return snow_api_Promise.resolve(_string);
};
snow_systems_assets_AssetText.__super__ = snow_systems_assets_Asset;
snow_systems_assets_AssetText.prototype = $extend(snow_systems_assets_Asset.prototype,{
	reload: function() {
		var _gthis = this;
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.system.app.io.data_flow(haxe_io_Path.join([_gthis.system.root,_gthis.id]),snow_systems_assets_AssetText.processor).then(function(_text) {
				_gthis.set_text(_text);
				resolve(_gthis);
			}).error(reject);
		});
	}
	,destroy: function() {
		this.set_text(null);
	}
	,set_text: function(_text) {
		this.loaded = _text != null;
		return this.text = _text;
	}
	,__class__: snow_systems_assets_AssetText
});
var snow_systems_assets_AssetJSON = function(_system,_id,_json) {
	snow_systems_assets_Asset.call(this,_system,_id,3);
	this.set_json(_json);
};
$hxClasses["snow.systems.assets.AssetJSON"] = snow_systems_assets_AssetJSON;
snow_systems_assets_AssetJSON.__name__ = ["snow","systems","assets","AssetJSON"];
snow_systems_assets_AssetJSON.load = function(_system,_id) {
	return new snow_systems_assets_AssetJSON(_system,_id,null).reload();
};
snow_systems_assets_AssetJSON.processor = function(_app,_id,_data) {
	if(_data == null) {
		return snow_api_Promise.reject(snow_types_Error.error("AssetJSON: data was null"));
	}
	return new snow_api_Promise(function(resolve,reject) {
		var _data_json = null;
		try {
			_data_json = JSON.parse(new haxe_io_Bytes(new Uint8Array(_data.buffer)).toString());
			_data = null;
		} catch( e ) {
			if (e instanceof js__$Boot_HaxeError) e = e.val;
			_data = null;
			return reject(snow_types_Error.parse(e));
		}
		return resolve(_data_json);
	});
};
snow_systems_assets_AssetJSON.__super__ = snow_systems_assets_Asset;
snow_systems_assets_AssetJSON.prototype = $extend(snow_systems_assets_Asset.prototype,{
	reload: function() {
		var _gthis = this;
		return new snow_api_Promise(function(resolve,reject) {
			_gthis.system.app.io.data_flow(haxe_io_Path.join([_gthis.system.root,_gthis.id]),snow_systems_assets_AssetJSON.processor).then(function(_json) {
				_gthis.set_json(_json);
				resolve(_gthis);
			}).error(reject);
		});
	}
	,destroy: function() {
		this.set_json(null);
	}
	,set_json: function(_json) {
		this.loaded = _json != null;
		return this.json = _json;
	}
	,__class__: snow_systems_assets_AssetJSON
});
var snow_systems_assets_Assets = function(_app) {
	this.root = "";
	this.app = _app;
	this.module = new snow_core_web_assets_Assets(this.app);
};
$hxClasses["snow.systems.assets.Assets"] = snow_systems_assets_Assets;
snow_systems_assets_Assets.__name__ = ["snow","systems","assets","Assets"];
snow_systems_assets_Assets.prototype = {
	shutdown: function() {
	}
	,path: function(_id) {
		return haxe_io_Path.join([this.root,_id]);
	}
	,bytes: function(_id) {
		return snow_systems_assets_AssetBytes.load(this,_id);
	}
	,text: function(_id) {
		return snow_systems_assets_AssetText.load(this,_id);
	}
	,json: function(_id) {
		return snow_systems_assets_AssetJSON.load(this,_id);
	}
	,image: function(_id) {
		return snow_systems_assets_AssetImage.load(this,_id);
	}
	,image_from_bytes: function(_id,_bytes) {
		return snow_systems_assets_AssetImage.load_from_bytes(this,_id,_bytes);
	}
	,image_from_pixels: function(_id,_width,_height,_pixels) {
		return snow_systems_assets_AssetImage.load_from_pixels(this,_id,_width,_height,_pixels);
	}
	,audio: function(_id,_is_stream) {
		if(_is_stream == null) {
			_is_stream = false;
		}
		return snow_systems_assets_AssetAudio.load(this,_id,_is_stream);
	}
	,audio_from_bytes: function(_id,_bytes,_format) {
		return snow_systems_assets_AssetAudio.load_from_bytes(this,_id,_bytes,_format);
	}
	,__class__: snow_systems_assets_Assets
};
var snow_systems_audio_Audio = function(_app) {
	this.active = false;
	this.app = _app;
	this.module = new snow_modules_webaudio_Audio(this.app);
	this.emitter = new snow_api_Emitter();
	this.active = this.module.active;
};
$hxClasses["snow.systems.audio.Audio"] = snow_systems_audio_Audio;
snow_systems_audio_Audio.__name__ = ["snow","systems","audio","Audio"];
snow_systems_audio_Audio.prototype = {
	emit_snow_systems_audio_AudioSource: function(_event,_data) {
		this.emitter.emit(_event,_data);
	}
	,emit_Int: function(_event,_data) {
		this.emitter.emit(_event,_data);
	}
	,play: function(_source,_volume,_paused) {
		if(_paused == null) {
			_paused = false;
		}
		if(_volume == null) {
			_volume = 1.0;
		}
		if(_source == null) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("_source != null" + (" ( " + "audio source must not be null" + " )")));
		}
		if(!this.active) {
			return -1;
		}
		return this.module.play(_source,_volume,_paused);
	}
	,loop: function(_source,_volume,_paused) {
		if(_paused == null) {
			_paused = false;
		}
		if(_volume == null) {
			_volume = 1.0;
		}
		if(_source == null) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("_source != null" + (" ( " + "audio source must not be null" + " )")));
		}
		if(!this.active) {
			return -1;
		}
		return this.module.loop(_source,_volume,_paused);
	}
	,pause: function(_handle) {
		if(!this.active || _handle == null) {
			return;
		}
		this.module.pause(_handle);
	}
	,unpause: function(_handle) {
		if(!this.active || _handle == null) {
			return;
		}
		this.module.unpause(_handle);
	}
	,stop: function(_handle) {
		if(!this.active || _handle == null) {
			return;
		}
		this.module.stop(_handle);
	}
	,volume: function(_handle,_volume) {
		if(!this.active || _handle == null) {
			return;
		}
		this.module.volume(_handle,_volume);
	}
	,pan: function(_handle,_pan) {
		if(!this.active || _handle == null) {
			return;
		}
		this.module.pan(_handle,_pan);
	}
	,pitch: function(_handle,_pitch) {
		if(!this.active || _handle == null) {
			return;
		}
		this.module.pitch(_handle,_pitch);
	}
	,position: function(_handle,_position) {
		if(!this.active || _handle == null) {
			return;
		}
		this.module.position(_handle,_position);
	}
	,state_of: function(_handle) {
		return this.module.state_of(_handle);
	}
	,loop_of: function(_handle) {
		if(!this.active) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("active" + (" ( " + "audio is suspended, queries are invalid" + " )")));
		}
		return this.module.loop_of(_handle);
	}
	,instance_of: function(_handle) {
		if(!this.active) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("active" + (" ( " + "audio is suspended, queries are invalid" + " )")));
		}
		return this.module.instance_of(_handle);
	}
	,volume_of: function(_handle) {
		if(!this.active) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("active" + (" ( " + "audio is suspended, queries are invalid" + " )")));
		}
		return this.module.volume_of(_handle);
	}
	,pan_of: function(_handle) {
		if(!this.active) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("active" + (" ( " + "audio is suspended, queries are invalid" + " )")));
		}
		return this.module.pan_of(_handle);
	}
	,pitch_of: function(_handle) {
		if(!this.active) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("active" + (" ( " + "audio is suspended, queries are invalid" + " )")));
		}
		return this.module.pitch_of(_handle);
	}
	,position_of: function(_handle) {
		if(!this.active) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("active" + (" ( " + "audio is suspended, queries are invalid" + " )")));
		}
		return this.module.position_of(_handle);
	}
	,suspend: function() {
		if(!this.active) {
			return;
		}
		this.active = false;
		this.module.suspend();
	}
	,resume: function() {
		if(this.active || !this.module.active) {
			return;
		}
		this.active = true;
		this.module.resume();
	}
	,onevent: function(_event) {
		if(_event.type == 8) {
			switch(_event.window.type) {
			case 7:
				this.suspend();
				break;
			case 9:
				this.resume();
				break;
			default:
			}
		}
	}
	,shutdown: function() {
		this.active = false;
		this.module.shutdown();
	}
	,__class__: snow_systems_audio_Audio
};
var snow_systems_audio_AudioInstance = function(_source,_handle) {
	this.destroyed = false;
	this.source = _source;
	this.handle = _handle;
};
$hxClasses["snow.systems.audio.AudioInstance"] = snow_systems_audio_AudioInstance;
snow_systems_audio_AudioInstance.__name__ = ["snow","systems","audio","AudioInstance"];
snow_systems_audio_AudioInstance.prototype = {
	tick: function() {
	}
	,has_ended: function() {
		if(this.destroyed != false) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("destroyed == false" + (" ( " + "snow / Audio / Instance has_ended queried after being destroyed" + " )")));
		}
		return this.source.app.audio.state_of(this.handle) == 2;
	}
	,destroy: function() {
		if(this.destroyed != false) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("destroyed == false" + (" ( " + "snow / Audio / Instance being destroyed more than once" + " )")));
		}
		this.source.app.audio.emit_Int(1,this.handle);
		this.source.instance_killed(this);
		this.destroyed = true;
		this.source = null;
		this.handle = -1;
	}
	,data_get: function(_into,_start,_length,_into_result) {
		if(this.destroyed != false) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("destroyed == false" + (" ( " + "snow / Audio / Instance data_get queried after being destroyed" + " )")));
		}
		return this.source.data.portion(_into,_start,_length,_into_result);
	}
	,data_seek: function(_to_samples) {
		if(this.destroyed != false) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("destroyed == false" + (" ( " + "snow / Audio / Instance data_seek queried after being destroyed" + " )")));
		}
		return this.source.data.seek(_to_samples);
	}
	,__class__: snow_systems_audio_AudioInstance
};
var snow_systems_audio_AudioSource = function(_app,_data) {
	this.stream_buffer_count = 2;
	this.stream_buffer_length = 176400;
	this.app = _app;
	this.data = _data;
	this.instances = [];
};
$hxClasses["snow.systems.audio.AudioSource"] = snow_systems_audio_AudioSource;
snow_systems_audio_AudioSource.__name__ = ["snow","systems","audio","AudioSource"];
snow_systems_audio_AudioSource.prototype = {
	instance: function(_handle) {
		var _instance = new snow_systems_audio_AudioInstance(this,_handle);
		if(this.instances.indexOf(_instance) == -1) {
			this.instances.push(_instance);
		}
		return _instance;
	}
	,bytes_to_seconds: function(_bytes) {
		return _bytes / (this.data.rate * this.data.channels * 2);
	}
	,seconds_to_bytes: function(_seconds) {
		return _seconds * (this.data.rate * this.data.channels * 2) | 0;
	}
	,duration: function() {
		return this.bytes_to_seconds(this.data.length);
	}
	,destroy: function() {
		var c = this.instances.length;
		var i = 0;
		haxe_Log.trace("i / audiosource / " + ("destroy " + this.data.id + ", stream=" + Std.string(this.data.is_stream) + ", instances=" + c),{ fileName : "AudioSource.hx", lineNumber : 83, className : "snow.systems.audio.AudioSource", methodName : "destroy"});
		this.app.audio.emit_snow_systems_audio_AudioSource(2,this);
		while(i < c) {
			var _instance = this.instances.pop();
			_instance.destroy();
			_instance = null;
			++i;
		}
		this.data.destroy();
		this.data = null;
		this.instances = null;
		this.app = null;
	}
	,instance_killed: function(_instance) {
		HxOverrides.remove(this.instances,_instance);
	}
	,__class__: snow_systems_audio_AudioSource
};
var snow_systems_input_Input = function(_app) {
	this.touch_count = 0;
	this.gamepad_init_count = 16;
	this.app = _app;
	this.event = new snow_types_InputEvent();
	this.key_event = new snow_types_KeyEvent();
	this.text_event = new snow_types_TextEvent();
	this.mouse_event = new snow_types_MouseEvent();
	this.touch_event = new snow_types_TouchEvent();
	this.gamepad_event = new snow_types_GamepadEvent();
	this.mod_state = new snow_types_ModState();
	this.mod_state.none = true;
	this.key_code_pressed = new haxe_ds_IntMap();
	this.key_code_down = new haxe_ds_IntMap();
	this.key_code_released = new haxe_ds_IntMap();
	this.scan_code_pressed = new haxe_ds_IntMap();
	this.scan_code_down = new haxe_ds_IntMap();
	this.scan_code_released = new haxe_ds_IntMap();
	this.mouse_button_pressed = new haxe_ds_IntMap();
	this.mouse_button_down = new haxe_ds_IntMap();
	this.mouse_button_released = new haxe_ds_IntMap();
	this.gamepad_button_pressed = new haxe_ds_IntMap();
	this.gamepad_button_down = new haxe_ds_IntMap();
	this.gamepad_button_released = new haxe_ds_IntMap();
	this.gamepad_axis_values = new haxe_ds_IntMap();
	var _g1 = 0;
	var _g = this.gamepad_init_count;
	while(_g1 < _g) {
		var i = _g1++;
		this.gamepad_button_pressed.h[i] = new haxe_ds_IntMap();
		this.gamepad_button_down.h[i] = new haxe_ds_IntMap();
		this.gamepad_button_released.h[i] = new haxe_ds_IntMap();
		this.gamepad_axis_values.h[i] = new haxe_ds_IntMap();
	}
	this.touches_down = new haxe_ds_IntMap();
};
$hxClasses["snow.systems.input.Input"] = snow_systems_input_Input;
snow_systems_input_Input.__name__ = ["snow","systems","input","Input"];
snow_systems_input_Input.prototype = {
	shutdown: function() {
	}
	,keypressed: function(_code) {
		return this.key_code_pressed.h.hasOwnProperty(_code);
	}
	,keyreleased: function(_code) {
		return this.key_code_released.h.hasOwnProperty(_code);
	}
	,keydown: function(_code) {
		return this.key_code_down.h.hasOwnProperty(_code);
	}
	,scanpressed: function(_code) {
		return this.scan_code_pressed.h.hasOwnProperty(_code);
	}
	,scanreleased: function(_code) {
		return this.scan_code_released.h.hasOwnProperty(_code);
	}
	,scandown: function(_code) {
		return this.scan_code_down.h.hasOwnProperty(_code);
	}
	,mousepressed: function(_button) {
		return this.mouse_button_pressed.h.hasOwnProperty(_button);
	}
	,mousereleased: function(_button) {
		return this.mouse_button_released.h.hasOwnProperty(_button);
	}
	,mousedown: function(_button) {
		return this.mouse_button_down.h.hasOwnProperty(_button);
	}
	,gamepadpressed: function(_gamepad,_button) {
		var _gamepad_state = this.gamepad_button_pressed.h[_gamepad];
		if(_gamepad_state != null) {
			return _gamepad_state.h.hasOwnProperty(_button);
		} else {
			return false;
		}
	}
	,gamepadreleased: function(_gamepad,_button) {
		var _gamepad_state = this.gamepad_button_released.h[_gamepad];
		if(_gamepad_state != null) {
			return _gamepad_state.h.hasOwnProperty(_button);
		} else {
			return false;
		}
	}
	,gamepaddown: function(_gamepad,_button) {
		var _gamepad_state = this.gamepad_button_down.h[_gamepad];
		if(_gamepad_state != null) {
			return _gamepad_state.h.hasOwnProperty(_button);
		} else {
			return false;
		}
	}
	,gamepadaxis: function(_gamepad,_axis) {
		var _gamepad_state = this.gamepad_axis_values.h[_gamepad];
		if(_gamepad_state != null) {
			if(_gamepad_state.h.hasOwnProperty(_axis)) {
				return _gamepad_state.h[_axis];
			}
		}
		return 0;
	}
	,dispatch_key_down_event: function(keycode,scancode,repeat,mod,timestamp,window_id) {
		if(!repeat) {
			this.key_code_pressed.h[keycode] = false;
			this.key_code_down.h[keycode] = true;
			this.scan_code_pressed.h[scancode] = false;
			this.scan_code_down.h[scancode] = true;
		}
		var _this = this.key_event;
		_this.type = 1;
		_this.keycode = keycode;
		_this.scancode = scancode;
		_this.repeat = repeat;
		_this.mod = mod;
		var _this1 = this.event;
		_this1.type = 1;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = window_id;
		_this1.timestamp = timestamp;
		_this1.key = this.key_event;
		this.app.dispatch_input_event(this.event);
		this.app.host.onkeydown(keycode,scancode,repeat,mod,timestamp,window_id);
	}
	,dispatch_key_up_event: function(keycode,scancode,repeat,mod,timestamp,window_id) {
		this.key_code_released.h[keycode] = false;
		this.key_code_down.remove(keycode);
		this.scan_code_released.h[scancode] = false;
		this.scan_code_down.remove(scancode);
		var _this = this.key_event;
		_this.type = 2;
		_this.keycode = keycode;
		_this.scancode = scancode;
		_this.repeat = repeat;
		_this.mod = mod;
		var _this1 = this.event;
		_this1.type = 1;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = window_id;
		_this1.timestamp = timestamp;
		_this1.key = this.key_event;
		this.app.dispatch_input_event(this.event);
		this.app.host.onkeyup(keycode,scancode,repeat,mod,timestamp,window_id);
	}
	,dispatch_text_event: function(text,start,length,type,timestamp,window_id) {
		var _this = this.text_event;
		_this.type = type;
		_this.text = text;
		_this.start = start;
		_this.length = length;
		var _this1 = this.event;
		_this1.type = 2;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = window_id;
		_this1.timestamp = timestamp;
		_this1.text = this.text_event;
		this.app.dispatch_input_event(this.event);
	}
	,dispatch_mouse_move_event: function(x,y,xrel,yrel,timestamp,window_id) {
		var _this = this.mouse_event;
		_this.type = 1;
		_this.x = x;
		_this.y = y;
		_this.x_rel = xrel;
		_this.y_rel = yrel;
		_this.button = 0;
		_this.wheel_x = 0;
		_this.wheel_y = 0;
		var _this1 = this.event;
		_this1.type = 3;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = window_id;
		_this1.timestamp = timestamp;
		_this1.mouse = this.mouse_event;
		this.app.dispatch_input_event(this.event);
		this.app.host.onmousemove(x,y,xrel,yrel,timestamp,window_id);
	}
	,dispatch_mouse_down_event: function(x,y,button,timestamp,window_id) {
		this.mouse_button_pressed.h[button] = false;
		this.mouse_button_down.h[button] = true;
		var _this = this.mouse_event;
		_this.type = 2;
		_this.x = x;
		_this.y = y;
		_this.x_rel = 0;
		_this.y_rel = 0;
		_this.button = button;
		_this.wheel_x = 0;
		_this.wheel_y = 0;
		var _this1 = this.event;
		_this1.type = 3;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = window_id;
		_this1.timestamp = timestamp;
		_this1.mouse = this.mouse_event;
		this.app.dispatch_input_event(this.event);
		this.app.host.onmousedown(x,y,button,timestamp,window_id);
	}
	,dispatch_mouse_up_event: function(x,y,button,timestamp,window_id) {
		this.mouse_button_released.h[button] = false;
		this.mouse_button_down.remove(button);
		var _this = this.mouse_event;
		_this.type = 3;
		_this.x = x;
		_this.y = y;
		_this.x_rel = 0;
		_this.y_rel = 0;
		_this.button = button;
		_this.wheel_x = 0;
		_this.wheel_y = 0;
		var _this1 = this.event;
		_this1.type = 3;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = window_id;
		_this1.timestamp = timestamp;
		_this1.mouse = this.mouse_event;
		this.app.dispatch_input_event(this.event);
		this.app.host.onmouseup(x,y,button,timestamp,window_id);
	}
	,dispatch_mouse_wheel_event: function(x,y,timestamp,window_id) {
		var _this = this.mouse_event;
		_this.type = 4;
		_this.x = 0;
		_this.y = 0;
		_this.x_rel = 0;
		_this.y_rel = 0;
		_this.button = 0;
		_this.wheel_x = x;
		_this.wheel_y = y;
		var _this1 = this.event;
		_this1.type = 3;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = window_id;
		_this1.timestamp = timestamp;
		_this1.mouse = this.mouse_event;
		this.app.dispatch_input_event(this.event);
	}
	,dispatch_touch_down_event: function(x,y,dx,dy,touch_id,timestamp) {
		if(!this.touches_down.h.hasOwnProperty(touch_id)) {
			this.touch_count++;
			this.touches_down.h[touch_id] = true;
		}
		var _this = this.touch_event;
		_this.type = 2;
		_this.touch_id = touch_id;
		_this.x = x;
		_this.y = y;
		_this.dx = dx;
		_this.dy = dy;
		var _this1 = this.event;
		_this1.type = 4;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = 0;
		_this1.timestamp = timestamp;
		_this1.touch = this.touch_event;
		this.app.dispatch_input_event(this.event);
		this.app.host.ontouchdown(x,y,dx,dy,touch_id,timestamp);
	}
	,dispatch_touch_up_event: function(x,y,dx,dy,touch_id,timestamp) {
		var _this = this.touch_event;
		_this.type = 3;
		_this.touch_id = touch_id;
		_this.x = x;
		_this.y = y;
		_this.dx = dx;
		_this.dy = dy;
		var _this1 = this.event;
		_this1.type = 4;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = 0;
		_this1.timestamp = timestamp;
		_this1.touch = this.touch_event;
		this.app.dispatch_input_event(this.event);
		this.app.host.ontouchup(x,y,dx,dy,touch_id,timestamp);
		if(this.touches_down.remove(touch_id)) {
			this.touch_count--;
		}
	}
	,dispatch_touch_move_event: function(x,y,dx,dy,touch_id,timestamp) {
		var _this = this.touch_event;
		_this.type = 1;
		_this.touch_id = touch_id;
		_this.x = x;
		_this.y = y;
		_this.dx = dx;
		_this.dy = dy;
		var _this1 = this.event;
		_this1.type = 4;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = 0;
		_this1.timestamp = timestamp;
		_this1.touch = this.touch_event;
		this.app.dispatch_input_event(this.event);
		this.app.host.ontouchmove(x,y,dx,dy,touch_id,timestamp);
	}
	,dispatch_gamepad_axis_event: function(gamepad,axis,value,timestamp) {
		if(!this.gamepad_axis_values.h.hasOwnProperty(gamepad)) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("gamepad_axis_values.exists(gamepad)" + (" ( " + ("gamepad with id " + gamepad + " not pre-inited? Is gamepad_init_count too low, or the gamepad id not sequential from 0?") + " )")));
		}
		this.gamepad_axis_values.h[gamepad].h[axis] = value;
		var _this = this.gamepad_event;
		_this.button = null;
		_this.device_id = null;
		_this.device_event = null;
		_this.axis = axis;
		_this.value = value;
		_this.type = 1;
		_this.gamepad = gamepad;
		var _this1 = this.event;
		_this1.type = 5;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = 0;
		_this1.timestamp = timestamp;
		_this1.gamepad = this.gamepad_event;
		this.app.dispatch_input_event(this.event);
	}
	,dispatch_gamepad_button_down_event: function(gamepad,button,value,timestamp) {
		if(!this.gamepad_button_pressed.h.hasOwnProperty(gamepad)) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("gamepad_button_pressed.exists(gamepad)" + (" ( " + ("gamepad with id " + gamepad + " not pre-inited? Is gamepad_init_count too low, or the gamepad id not sequential from 0?") + " )")));
		}
		if(!this.gamepad_button_down.h.hasOwnProperty(gamepad)) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("gamepad_button_down.exists(gamepad)" + (" ( " + ("gamepad with id " + gamepad + " not pre-inited? Is gamepad_init_count too low, or the gamepad id not sequential from 0?") + " )")));
		}
		this.gamepad_button_pressed.h[gamepad].h[button] = false;
		this.gamepad_button_down.h[gamepad].h[button] = true;
		var _this = this.gamepad_event;
		_this.axis = null;
		_this.device_id = null;
		_this.device_event = null;
		_this.type = 2;
		_this.value = value;
		_this.button = button;
		_this.gamepad = gamepad;
		var _this1 = this.event;
		_this1.type = 5;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = 0;
		_this1.timestamp = timestamp;
		_this1.gamepad = this.gamepad_event;
		this.app.dispatch_input_event(this.event);
	}
	,dispatch_gamepad_button_up_event: function(gamepad,button,value,timestamp) {
		if(!this.gamepad_button_released.h.hasOwnProperty(gamepad)) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("gamepad_button_released.exists(gamepad)" + (" ( " + ("gamepad with id " + gamepad + " not pre-inited? Is gamepad_init_count too low, or the gamepad id not sequential from 0?") + " )")));
		}
		if(!this.gamepad_button_down.h.hasOwnProperty(gamepad)) {
			throw new js__$Boot_HaxeError(snow_api_DebugError.assertion("gamepad_button_down.exists(gamepad)" + (" ( " + ("gamepad with id " + gamepad + " not pre-inited? Is gamepad_init_count too low, or the gamepad id not sequential from 0?") + " )")));
		}
		this.gamepad_button_released.h[gamepad].h[button] = false;
		this.gamepad_button_down.h[gamepad].remove(button);
		var _this = this.gamepad_event;
		_this.axis = null;
		_this.device_id = null;
		_this.device_event = null;
		_this.type = 3;
		_this.value = value;
		_this.button = button;
		_this.gamepad = gamepad;
		var _this1 = this.event;
		_this1.type = 5;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = 0;
		_this1.timestamp = timestamp;
		_this1.gamepad = this.gamepad_event;
		this.app.dispatch_input_event(this.event);
	}
	,dispatch_gamepad_device_event: function(gamepad,id,type,timestamp) {
		var _this = this.gamepad_event;
		_this.axis = null;
		_this.value = null;
		_this.button = null;
		_this.device_id = id;
		_this.device_event = type;
		_this.gamepad = gamepad;
		_this.type = 4;
		var _this1 = this.event;
		_this1.type = 5;
		_this1.key = null;
		_this1.text = null;
		_this1.mouse = null;
		_this1.touch = null;
		_this1.gamepad = null;
		_this1.window_id = 0;
		_this1.timestamp = timestamp;
		_this1.gamepad = this.gamepad_event;
		this.app.dispatch_input_event(this.event);
	}
	,onevent: function(_event) {
		if(_event.type == 3) {
			this._update_keystate();
			this._update_gamepadstate();
			this._update_mousestate();
		}
	}
	,_update_mousestate: function() {
		var _code = this.mouse_button_pressed.keys();
		while(_code.hasNext()) {
			var _code1 = _code.next();
			if(this.mouse_button_pressed.h[_code1]) {
				this.mouse_button_pressed.remove(_code1);
			} else {
				this.mouse_button_pressed.h[_code1] = true;
			}
		}
		var _code2 = this.mouse_button_released.keys();
		while(_code2.hasNext()) {
			var _code3 = _code2.next();
			if(this.mouse_button_released.h[_code3]) {
				this.mouse_button_released.remove(_code3);
			} else {
				this.mouse_button_released.h[_code3] = true;
			}
		}
	}
	,_update_gamepadstate: function() {
		var _gamepad_pressed = this.gamepad_button_pressed.iterator();
		while(_gamepad_pressed.hasNext()) {
			var _gamepad_pressed1 = _gamepad_pressed.next();
			var _button = _gamepad_pressed1.keys();
			while(_button.hasNext()) {
				var _button1 = _button.next();
				if(_gamepad_pressed1.h[_button1]) {
					_gamepad_pressed1.remove(_button1);
				} else {
					_gamepad_pressed1.h[_button1] = true;
				}
			}
		}
		var _gamepad_released = this.gamepad_button_released.iterator();
		while(_gamepad_released.hasNext()) {
			var _gamepad_released1 = _gamepad_released.next();
			var _button2 = _gamepad_released1.keys();
			while(_button2.hasNext()) {
				var _button3 = _button2.next();
				if(_gamepad_released1.h[_button3]) {
					_gamepad_released1.remove(_button3);
				} else {
					_gamepad_released1.h[_button3] = true;
				}
			}
		}
	}
	,_update_keystate: function() {
		var _code = this.key_code_pressed.keys();
		while(_code.hasNext()) {
			var _code1 = _code.next();
			if(this.key_code_pressed.h[_code1]) {
				this.key_code_pressed.remove(_code1);
			} else {
				this.key_code_pressed.h[_code1] = true;
			}
		}
		var _code2 = this.key_code_released.keys();
		while(_code2.hasNext()) {
			var _code3 = _code2.next();
			if(this.key_code_released.h[_code3]) {
				this.key_code_released.remove(_code3);
			} else {
				this.key_code_released.h[_code3] = true;
			}
		}
		var _code4 = this.scan_code_pressed.keys();
		while(_code4.hasNext()) {
			var _code5 = _code4.next();
			if(this.scan_code_pressed.h[_code5]) {
				this.scan_code_pressed.remove(_code5);
			} else {
				this.scan_code_pressed.h[_code5] = true;
			}
		}
		var _code6 = this.scan_code_released.keys();
		while(_code6.hasNext()) {
			var _code7 = _code6.next();
			if(this.scan_code_released.h[_code7]) {
				this.scan_code_released.remove(_code7);
			} else {
				this.scan_code_released.h[_code7] = true;
			}
		}
	}
	,__class__: snow_systems_input_Input
};
var snow_systems_input_Keycodes = function() { };
$hxClasses["snow.systems.input.Keycodes"] = snow_systems_input_Keycodes;
snow_systems_input_Keycodes.__name__ = ["snow","systems","input","Keycodes"];
snow_systems_input_Keycodes.from_scan = function(scancode) {
	return scancode | 1073741824;
};
snow_systems_input_Keycodes.to_scan = function(keycode) {
	if((keycode & 1073741824) != 0) {
		return keycode & -1073741825;
	}
	switch(keycode) {
	case 8:
		return 42;
	case 9:
		return 43;
	case 13:
		return 40;
	case 27:
		return 41;
	case 32:
		return 44;
	case 47:
		return 56;
	case 48:
		return 39;
	case 49:
		return 30;
	case 50:
		return 31;
	case 51:
		return 32;
	case 52:
		return 33;
	case 53:
		return 34;
	case 54:
		return 35;
	case 55:
		return 36;
	case 56:
		return 37;
	case 57:
		return 38;
	case 59:
		return 51;
	case 61:
		return 46;
	case 91:
		return 47;
	case 92:
		return 49;
	case 93:
		return 48;
	case 96:
		return 53;
	case 97:
		return 4;
	case 98:
		return 5;
	case 99:
		return 6;
	case 100:
		return 7;
	case 101:
		return 8;
	case 102:
		return 9;
	case 103:
		return 10;
	case 104:
		return 11;
	case 105:
		return 12;
	case 106:
		return 13;
	case 107:
		return 14;
	case 108:
		return 15;
	case 109:
		return 16;
	case 110:
		return 17;
	case 111:
		return 18;
	case 112:
		return 19;
	case 113:
		return 20;
	case 114:
		return 21;
	case 115:
		return 22;
	case 116:
		return 23;
	case 117:
		return 24;
	case 118:
		return 25;
	case 119:
		return 26;
	case 120:
		return 27;
	case 121:
		return 28;
	case 122:
		return 29;
	}
	return 0;
};
snow_systems_input_Keycodes.$name = function(keycode) {
	if((keycode & 1073741824) != 0) {
		return snow_systems_input_Scancodes.$name(keycode & -1073741825);
	}
	switch(keycode) {
	case 8:
		return snow_systems_input_Scancodes.$name(42);
	case 9:
		return snow_systems_input_Scancodes.$name(43);
	case 13:
		return snow_systems_input_Scancodes.$name(40);
	case 27:
		return snow_systems_input_Scancodes.$name(41);
	case 32:
		return snow_systems_input_Scancodes.$name(44);
	case 127:
		return snow_systems_input_Scancodes.$name(76);
	default:
		var decoder = new haxe_Utf8();
		decoder.__b += String.fromCharCode(keycode);
		return decoder.__b;
	}
};
var snow_systems_input_Scancodes = function() { };
$hxClasses["snow.systems.input.Scancodes"] = snow_systems_input_Scancodes;
snow_systems_input_Scancodes.__name__ = ["snow","systems","input","Scancodes"];
snow_systems_input_Scancodes.$name = function(scancode) {
	var res = null;
	if(scancode >= 0 && scancode < snow_systems_input_Scancodes.scancode_names.length) {
		res = snow_systems_input_Scancodes.scancode_names[scancode];
	}
	if(res != null) {
		return res;
	} else {
		return "";
	}
};
var snow_systems_io_IO = function(_app) {
	this.string_save_prefix = "slot";
	this.app = _app;
	this.module = new snow_core_web_io_IO(this.app);
};
$hxClasses["snow.systems.io.IO"] = snow_systems_io_IO;
snow_systems_io_IO.__name__ = ["snow","systems","io","IO"];
snow_systems_io_IO.prototype = {
	app_path: function() {
		return this.module.app_path();
	}
	,app_path_prefs: function() {
		return this.module.app_path_prefs();
	}
	,url_open: function(_url) {
		this.module.url_open(_url);
	}
	,data_load: function(_path,_options) {
		return this.module.data_load(_path,_options);
	}
	,data_save: function(_path,_data,_options) {
		return this.module.data_save(_path,_data,_options);
	}
	,data_flow: function(_id,_processor,_provider) {
		var _gthis = this;
		if(_provider == null) {
			_provider = $bind(this,this.default_provider);
		}
		return new snow_api_Promise(function(resolve,reject) {
			_provider(_gthis.app,_id).then(function(data) {
				if(_processor != null) {
					_processor(_gthis.app,_id,data).then(resolve,reject);
				} else {
					resolve(data);
				}
			}).error(reject);
		});
	}
	,string_save_path: function(_slot) {
		if(_slot == null) {
			_slot = 0;
		}
		return this.module.string_save_path(_slot);
	}
	,string_save: function(_key,_value,_slot) {
		if(_slot == null) {
			_slot = 0;
		}
		if(this.string_slots == null) {
			this.string_slots = new haxe_ds_IntMap();
		}
		var _string_map = this.string_slots.get(_slot);
		if(_string_map == null) {
			var _this = this.module;
			var storage = window.localStorage;
			var _string;
			if(storage == null) {
				haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 154, className : "snow.core.web.io.IO", methodName : "string_slot_load"});
				_string = null;
			} else {
				var _parts = snow_types_Config.app_ident.split(".");
				var _appname = _parts.pop();
				_string = storage.getItem("" + _parts.join(".") + "/" + _appname + "/" + _this.app.io.string_save_prefix + "." + _slot);
			}
			if(_string == null) {
				_string_map = new haxe_ds_StringMap();
			} else {
				_string = window.atob(_string);
				_string_map = haxe_Unserializer.run(_string);
			}
			this.string_slots.set(_slot,_string_map);
		}
		var _string_map1 = _string_map;
		var _encoded_key = window.btoa(_key);
		if(_value == null) {
			_string_map1.remove(_encoded_key);
		} else {
			var _encoded_value = window.btoa(_value);
			if(__map_reserved[_encoded_key] != null) {
				_string_map1.setReserved(_encoded_key,_encoded_value);
			} else {
				_string_map1.h[_encoded_key] = _encoded_value;
			}
		}
		var _contents = haxe_Serializer.run(_string_map1);
		_contents = window.btoa(_contents);
		var _this1 = this.module;
		var storage1 = window.localStorage;
		if(storage1 == null) {
			haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 136, className : "snow.core.web.io.IO", methodName : "string_slot_save"});
			return false;
		} else {
			var _parts1 = snow_types_Config.app_ident.split(".");
			var _appname1 = _parts1.pop();
			storage1.setItem("" + _parts1.join(".") + "/" + _appname1 + "/" + _this1.app.io.string_save_prefix + "." + _slot,_contents);
			return true;
		}
	}
	,string_load: function(_key,_slot) {
		if(_slot == null) {
			_slot = 0;
		}
		if(this.string_slots == null) {
			this.string_slots = new haxe_ds_IntMap();
		}
		var _string_map = this.string_slots.get(_slot);
		if(_string_map == null) {
			var _this = this.module;
			var storage = window.localStorage;
			var _string;
			if(storage == null) {
				haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 154, className : "snow.core.web.io.IO", methodName : "string_slot_load"});
				_string = null;
			} else {
				var _parts = snow_types_Config.app_ident.split(".");
				var _appname = _parts.pop();
				_string = storage.getItem("" + _parts.join(".") + "/" + _appname + "/" + _this.app.io.string_save_prefix + "." + _slot);
			}
			if(_string == null) {
				_string_map = new haxe_ds_StringMap();
			} else {
				_string = window.atob(_string);
				_string_map = haxe_Unserializer.run(_string);
			}
			this.string_slots.set(_slot,_string_map);
		}
		var _string_map1 = _string_map;
		var _encoded_key = window.btoa(_key);
		var _encoded_value = __map_reserved[_encoded_key] != null?_string_map1.getReserved(_encoded_key):_string_map1.h[_encoded_key];
		if(_encoded_value == null) {
			return null;
		}
		return window.atob(_encoded_value);
	}
	,string_destroy: function(_slot) {
		if(_slot == null) {
			_slot = 0;
		}
		if(this.string_slots == null) {
			this.string_slots = new haxe_ds_IntMap();
		} else {
			this.string_slots.remove(_slot);
		}
		var _this = this.module;
		var storage = window.localStorage;
		if(storage == null) {
			haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 119, className : "snow.core.web.io.IO", methodName : "string_slot_destroy"});
			return false;
		} else {
			var _parts = snow_types_Config.app_ident.split(".");
			var _appname = _parts.pop();
			storage.removeItem("" + _parts.join(".") + "/" + _appname + "/" + _this.app.io.string_save_prefix + "." + _slot);
			return false;
		}
	}
	,string_slots_sync: function(_slot) {
		if(_slot == null) {
			_slot = 0;
		}
		if(this.string_slots == null) {
			this.string_slots = new haxe_ds_IntMap();
		}
		var _string_map = this.string_slots.h[_slot];
		if(_string_map == null) {
			var _this = this.module;
			var storage = window.localStorage;
			var _string;
			if(storage == null) {
				haxe_Log.trace("       i / io / " + "localStorage isnt supported in this browser?!",{ fileName : "IO.hx", lineNumber : 154, className : "snow.core.web.io.IO", methodName : "string_slot_load"});
				_string = null;
			} else {
				var _parts = snow_types_Config.app_ident.split(".");
				var _appname = _parts.pop();
				_string = storage.getItem("" + _parts.join(".") + "/" + _appname + "/" + _this.app.io.string_save_prefix + "." + _slot);
			}
			if(_string == null) {
				_string_map = new haxe_ds_StringMap();
			} else {
				_string = window.atob(_string);
				_string_map = haxe_Unserializer.run(_string);
			}
			this.string_slots.h[_slot] = _string_map;
		}
		return _string_map;
	}
	,default_provider: function(_app,_id) {
		return this.module.data_load(_id,null);
	}
	,onevent: function(_event) {
	}
	,shutdown: function() {
	}
	,__class__: snow_systems_io_IO
};
var snow_types_Config = function() { };
$hxClasses["snow.types.Config"] = snow_types_Config;
snow_types_Config.__name__ = ["snow","types","Config"];
var snow_types_Error = $hxClasses["snow.types.Error"] = { __ename__ : ["snow","types","Error"], __constructs__ : ["error","init","parse"] };
snow_types_Error.error = function(value) { var $x = ["error",0,value]; $x.__enum__ = snow_types_Error; $x.toString = $estr; return $x; };
snow_types_Error.init = function(value) { var $x = ["init",1,value]; $x.__enum__ = snow_types_Error; $x.toString = $estr; return $x; };
snow_types_Error.parse = function(value) { var $x = ["parse",2,value]; $x.__enum__ = snow_types_Error; $x.toString = $estr; return $x; };
snow_types_Error.__empty_constructs__ = [];
var snow_types__$Types_ExtensionsInit = function() { };
$hxClasses["snow.types._Types.ExtensionsInit"] = snow_types__$Types_ExtensionsInit;
snow_types__$Types_ExtensionsInit.__name__ = ["snow","types","_Types","ExtensionsInit"];
var snow_types__$Types_AssetType_$Impl_$ = {};
$hxClasses["snow.types._Types.AssetType_Impl_"] = snow_types__$Types_AssetType_$Impl_$;
snow_types__$Types_AssetType_$Impl_$.__name__ = ["snow","types","_Types","AssetType_Impl_"];
snow_types__$Types_AssetType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "at_unknown";
	case 1:
		return "at_bytes";
	case 2:
		return "at_text";
	case 3:
		return "at_json";
	case 4:
		return "at_image";
	case 5:
		return "at_audio";
	default:
		return "" + this1;
	}
};
var snow_types_ImageData = function(_app,_options) {
	this.bpp_source = 4;
	this.bpp = 4;
	this.height_actual = 0;
	this.width_actual = 0;
	this.height = 0;
	this.width = 0;
	this.id = "ImageData";
	this.app = _app;
	if(_options.id == null) {
		_options.id = this.id;
	}
	this.id = _options.id;
	this.width = _options.width;
	this.height = _options.height;
	this.width_actual = _options.width_actual;
	this.height_actual = _options.height_actual;
	this.bpp = _options.bpp;
	this.bpp_source = _options.bpp_source;
	if(_options.pixels == null) {
		_options.pixels = this.pixels;
	}
	this.pixels = _options.pixels;
	_options = null;
};
$hxClasses["snow.types.ImageData"] = snow_types_ImageData;
snow_types_ImageData.__name__ = ["snow","types","ImageData"];
snow_types_ImageData.prototype = {
	destroy: function() {
		this.id = null;
		this.pixels = null;
	}
	,toString: function() {
		return "{ \"ImageData\":true, \"id\":" + this.id + ", \"width\":" + this.width + ", \"height\":" + this.height + ", \"width_actual\":" + this.width_actual + ", \"height_actual\":" + this.height_actual + ", \"bpp\":" + this.bpp + ", \"bpp_source\":" + this.bpp_source + " }";
	}
	,__class__: snow_types_ImageData
};
var snow_types__$Types_AudioFormatType_$Impl_$ = {};
$hxClasses["snow.types._Types.AudioFormatType_Impl_"] = snow_types__$Types_AudioFormatType_$Impl_$;
snow_types__$Types_AudioFormatType_$Impl_$.__name__ = ["snow","types","_Types","AudioFormatType_Impl_"];
snow_types__$Types_AudioFormatType_$Impl_$.toString = function(this1) {
	if(this1 == null) {
		return "" + this1;
	} else {
		switch(this1) {
		case 0:
			return "af_unknown";
		case 1:
			return "af_custom";
		case 2:
			return "af_ogg";
		case 3:
			return "af_wav";
		case 4:
			return "af_pcm";
		default:
			return "" + this1;
		}
	}
};
var snow_types__$Types_AudioEvent_$Impl_$ = {};
$hxClasses["snow.types._Types.AudioEvent_Impl_"] = snow_types__$Types_AudioEvent_$Impl_$;
snow_types__$Types_AudioEvent_$Impl_$.__name__ = ["snow","types","_Types","AudioEvent_Impl_"];
snow_types__$Types_AudioEvent_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "ae_end";
	case 1:
		return "ae_destroyed";
	case 2:
		return "ae_destroyed_source";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_AudioState_$Impl_$ = {};
$hxClasses["snow.types._Types.AudioState_Impl_"] = snow_types__$Types_AudioState_$Impl_$;
snow_types__$Types_AudioState_$Impl_$.__name__ = ["snow","types","_Types","AudioState_Impl_"];
snow_types__$Types_AudioState_$Impl_$.toString = function(this1) {
	switch(this1) {
	case -1:
		return "as_invalid";
	case 0:
		return "as_paused";
	case 1:
		return "as_playing";
	case 2:
		return "as_stopped";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_OpenGLProfile_$Impl_$ = {};
$hxClasses["snow.types._Types.OpenGLProfile_Impl_"] = snow_types__$Types_OpenGLProfile_$Impl_$;
snow_types__$Types_OpenGLProfile_$Impl_$.__name__ = ["snow","types","_Types","OpenGLProfile_Impl_"];
snow_types__$Types_OpenGLProfile_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "compatibility";
	case 1:
		return "core";
	case 2:
		return "gles";
	default:
		return "" + this1;
	}
};
var snow_types_SystemEvent = function() {
};
$hxClasses["snow.types.SystemEvent"] = snow_types_SystemEvent;
snow_types_SystemEvent.__name__ = ["snow","types","SystemEvent"];
snow_types_SystemEvent.prototype = {
	set: function(_type,_window,_input) {
		this.type = _type;
		this.window = _window;
		this.input = _input;
	}
	,toString: function() {
		var this1 = this.type;
		var _s;
		switch(this1) {
		case 0:
			_s = "se_unknown";
			break;
		case 1:
			_s = "se_init";
			break;
		case 2:
			_s = "se_ready";
			break;
		case 3:
			_s = "se_tick";
			break;
		case 4:
			_s = "se_freeze";
			break;
		case 5:
			_s = "se_unfreeze";
			break;
		case 7:
			_s = "se_shutdown";
			break;
		case 8:
			_s = "se_window";
			break;
		case 9:
			_s = "se_input";
			break;
		case 10:
			_s = "se_quit";
			break;
		case 11:
			_s = "se_app_terminating";
			break;
		case 12:
			_s = "se_app_lowmemory";
			break;
		case 13:
			_s = "se_app_willenterbackground";
			break;
		case 14:
			_s = "se_app_didenterbackground";
			break;
		case 15:
			_s = "se_app_willenterforeground";
			break;
		case 16:
			_s = "se_app_didenterforeground";
			break;
		default:
			_s = "" + this1;
		}
		var _s1 = "{ \"SystemEvent\":true, \"type\":\"" + _s + "\"";
		if(this.window != null) {
			_s1 += ", \"window\":" + Std.string(this.window);
		}
		if(this.input != null) {
			_s1 += ", \"input\":" + Std.string(this.input);
		}
		_s1 += " }";
		return _s1;
	}
	,__class__: snow_types_SystemEvent
};
var snow_types_WindowEvent = function() {
	this.window_id = -1;
	this.timestamp = 0.0;
	this.type = 0;
};
$hxClasses["snow.types.WindowEvent"] = snow_types_WindowEvent;
snow_types_WindowEvent.__name__ = ["snow","types","WindowEvent"];
snow_types_WindowEvent.prototype = {
	set: function(_type,_timestamp,_window_id,_x,_y) {
		this.type = _type;
		this.timestamp = _timestamp;
		this.window_id = _window_id;
		this.x = _x;
		this.y = _y;
	}
	,toString: function() {
		var this1 = this.type;
		var tmp;
		switch(this1) {
		case 0:
			tmp = "we_unknown";
			break;
		case 1:
			tmp = "we_shown";
			break;
		case 2:
			tmp = "we_hidden";
			break;
		case 3:
			tmp = "we_exposed";
			break;
		case 4:
			tmp = "we_moved";
			break;
		case 5:
			tmp = "we_resized";
			break;
		case 6:
			tmp = "we_size_changed";
			break;
		case 7:
			tmp = "we_minimized";
			break;
		case 8:
			tmp = "we_maximized";
			break;
		case 9:
			tmp = "we_restored";
			break;
		case 10:
			tmp = "we_enter";
			break;
		case 11:
			tmp = "we_leave";
			break;
		case 12:
			tmp = "we_focus_gained";
			break;
		case 13:
			tmp = "we_focus_lost";
			break;
		case 14:
			tmp = "we_close";
			break;
		default:
			tmp = "" + this1;
		}
		return "{ \"WindowEvent\":true, \"type\":\"" + tmp + "\", \"window\":" + this.window_id + ", \"x\":" + this.x + ", \"y\":" + this.y + ", \"time\":" + this.timestamp + " }";
	}
	,__class__: snow_types_WindowEvent
};
var snow_types_KeyEvent = function() {
};
$hxClasses["snow.types.KeyEvent"] = snow_types_KeyEvent;
snow_types_KeyEvent.__name__ = ["snow","types","KeyEvent"];
snow_types_KeyEvent.prototype = {
	set: function(_type,_keycode,_scancode,_repeat,_mod) {
		this.type = _type;
		this.keycode = _keycode;
		this.scancode = _scancode;
		this.repeat = _repeat;
		this.mod = _mod;
	}
	,toString: function() {
		var this1 = this.type;
		var tmp;
		switch(this1) {
		case 0:
			tmp = "ke_unknown";
			break;
		case 1:
			tmp = "ke_down";
			break;
		case 2:
			tmp = "ke_up";
			break;
		default:
			tmp = "" + this1;
		}
		return "{ \"KeyEvent\":true, \"type\":\"" + tmp + "\", \"keycode\":" + this.keycode + ", \"scancode\":" + this.scancode + ", \"repeat\":" + Std.string(this.repeat) + ", \"mod\":" + Std.string(this.mod) + " }";
	}
	,__class__: snow_types_KeyEvent
};
var snow_types_TextEvent = function() {
};
$hxClasses["snow.types.TextEvent"] = snow_types_TextEvent;
snow_types_TextEvent.__name__ = ["snow","types","TextEvent"];
snow_types_TextEvent.prototype = {
	set: function(_type,_text,_start,_length) {
		this.type = _type;
		this.text = _text;
		this.start = _start;
		this.length = _length;
	}
	,toString: function() {
		var this1 = this.type;
		var tmp;
		switch(this1) {
		case 0:
			tmp = "te_unknown";
			break;
		case 1:
			tmp = "te_edit";
			break;
		case 2:
			tmp = "te_input";
			break;
		default:
			tmp = "" + this1;
		}
		return "{ \"TextEvent\":true, \"type\":\"" + tmp + "\", \"text\":\"" + this.text + "\", \"start\":" + this.start + ", \"length\":" + this.length + " }";
	}
	,__class__: snow_types_TextEvent
};
var snow_types_MouseEvent = function() {
};
$hxClasses["snow.types.MouseEvent"] = snow_types_MouseEvent;
snow_types_MouseEvent.__name__ = ["snow","types","MouseEvent"];
snow_types_MouseEvent.prototype = {
	set: function(_type,_x,_y,_x_rel,_y_rel,_button,_wheel_x,_wheel_y) {
		this.type = _type;
		this.x = _x;
		this.y = _y;
		this.x_rel = _x_rel;
		this.y_rel = _y_rel;
		this.button = _button;
		this.wheel_x = _wheel_x;
		this.wheel_y = _wheel_y;
	}
	,toString: function() {
		var this1 = this.type;
		var tmp;
		switch(this1) {
		case 0:
			tmp = "me_unknown";
			break;
		case 1:
			tmp = "me_move";
			break;
		case 2:
			tmp = "me_down";
			break;
		case 3:
			tmp = "me_up";
			break;
		case 4:
			tmp = "me_wheel";
			break;
		default:
			tmp = "" + this1;
		}
		return "{ \"MouseEvent\":true, \"type\":\"" + tmp + "\", \"x\":" + this.x + ", \"y\":" + this.y + ", \"button\":" + this.button + ", \"x_rel\":" + this.x_rel + ", \"y_rel\":" + this.y_rel + ", \"wheel_x\":" + this.wheel_x + ", \"wheel_y\":" + this.wheel_y + " }";
	}
	,__class__: snow_types_MouseEvent
};
var snow_types_TouchEvent = function() {
};
$hxClasses["snow.types.TouchEvent"] = snow_types_TouchEvent;
snow_types_TouchEvent.__name__ = ["snow","types","TouchEvent"];
snow_types_TouchEvent.prototype = {
	set: function(_type,_id,_x,_y,_dx,_dy) {
		this.type = _type;
		this.touch_id = _id;
		this.x = _x;
		this.y = _y;
		this.dx = _dx;
		this.dy = _dy;
	}
	,toString: function() {
		var this1 = this.type;
		var tmp;
		switch(this1) {
		case 0:
			tmp = "te_unknown";
			break;
		case 1:
			tmp = "te_move";
			break;
		case 2:
			tmp = "te_down";
			break;
		case 3:
			tmp = "te_up";
			break;
		default:
			tmp = "" + this1;
		}
		return "{ \"TouchEvent\":true, \"type\":\"" + tmp + "\", \"touch_id\":" + this.touch_id + ", \"x\":" + this.x + ", \"y\":" + this.y + ", \"dx\":" + this.dx + ", \"dy\":" + this.dy + " }";
	}
	,__class__: snow_types_TouchEvent
};
var snow_types_GamepadEvent = function() {
};
$hxClasses["snow.types.GamepadEvent"] = snow_types_GamepadEvent;
snow_types_GamepadEvent.__name__ = ["snow","types","GamepadEvent"];
snow_types_GamepadEvent.prototype = {
	set_axis: function(_gamepad,_axis,_value) {
		this.button = null;
		this.device_id = null;
		this.device_event = null;
		this.axis = _axis;
		this.value = _value;
		this.type = 1;
		this.gamepad = _gamepad;
	}
	,set_button: function(_type,_gamepad,_button,_value) {
		this.axis = null;
		this.device_id = null;
		this.device_event = null;
		this.type = _type;
		this.value = _value;
		this.button = _button;
		this.gamepad = _gamepad;
	}
	,set_device: function(_gamepad,_id,_event) {
		this.axis = null;
		this.value = null;
		this.button = null;
		this.device_id = _id;
		this.device_event = _event;
		this.gamepad = _gamepad;
		this.type = 4;
	}
	,toString: function() {
		var this1 = this.type;
		var tmp;
		switch(this1) {
		case 0:
			tmp = "ge_unknown";
			break;
		case 1:
			tmp = "ge_axis";
			break;
		case 2:
			tmp = "ge_down";
			break;
		case 3:
			tmp = "ge_up";
			break;
		case 4:
			tmp = "ge_device";
			break;
		default:
			tmp = "" + this1;
		}
		var tmp1 = "{ \"GamepadEvent\":true, \"type\":\"" + tmp + "\", \"gamepad\":" + this.gamepad + ", \"axis\":" + this.axis + ", \"button\":" + this.button + ", \"value\":" + this.value + ", \"device_id\":\"" + this.device_id + "\", \"device_event\":\"";
		var this2 = this.device_event;
		var tmp2;
		switch(this2) {
		case 0:
			tmp2 = "ge_unknown";
			break;
		case 1:
			tmp2 = "ge_device_added";
			break;
		case 2:
			tmp2 = "ge_device_removed";
			break;
		case 3:
			tmp2 = "ge_device_remapped";
			break;
		default:
			tmp2 = "" + this2;
		}
		return tmp1 + tmp2 + "\" }";
	}
	,__class__: snow_types_GamepadEvent
};
var snow_types_InputEvent = function() {
	this.window_id = -1;
	this.timestamp = 0.0;
};
$hxClasses["snow.types.InputEvent"] = snow_types_InputEvent;
snow_types_InputEvent.__name__ = ["snow","types","InputEvent"];
snow_types_InputEvent.prototype = {
	reset: function(_type,_window_id,_timestamp) {
		this.type = _type;
		this.key = null;
		this.text = null;
		this.mouse = null;
		this.touch = null;
		this.gamepad = null;
		this.window_id = _window_id;
		this.timestamp = _timestamp;
	}
	,set_key: function(_event,_window_id,_timestamp) {
		this.type = 1;
		this.key = null;
		this.text = null;
		this.mouse = null;
		this.touch = null;
		this.gamepad = null;
		this.window_id = _window_id;
		this.timestamp = _timestamp;
		this.key = _event;
	}
	,set_text: function(_event,_window_id,_timestamp) {
		this.type = 2;
		this.key = null;
		this.text = null;
		this.mouse = null;
		this.touch = null;
		this.gamepad = null;
		this.window_id = _window_id;
		this.timestamp = _timestamp;
		this.text = _event;
	}
	,set_mouse: function(_event,_window_id,_timestamp) {
		this.type = 3;
		this.key = null;
		this.text = null;
		this.mouse = null;
		this.touch = null;
		this.gamepad = null;
		this.window_id = _window_id;
		this.timestamp = _timestamp;
		this.mouse = _event;
	}
	,set_touch: function(_event,_timestamp) {
		this.type = 4;
		this.key = null;
		this.text = null;
		this.mouse = null;
		this.touch = null;
		this.gamepad = null;
		this.window_id = 0;
		this.timestamp = _timestamp;
		this.touch = _event;
	}
	,set_gamepad: function(_event,_timestamp) {
		this.type = 5;
		this.key = null;
		this.text = null;
		this.mouse = null;
		this.touch = null;
		this.gamepad = null;
		this.window_id = 0;
		this.timestamp = _timestamp;
		this.gamepad = _event;
	}
	,toString: function() {
		var this1 = this.type;
		var _s;
		switch(this1) {
		case 0:
			_s = "ie_unknown";
			break;
		case 1:
			_s = "ie_key";
			break;
		case 2:
			_s = "ie_text";
			break;
		case 3:
			_s = "ie_mouse";
			break;
		case 4:
			_s = "ie_touch";
			break;
		case 5:
			_s = "ie_gamepad";
			break;
		case 6:
			_s = "ie_joystick";
			break;
		default:
			_s = "" + this1;
		}
		var _s1 = "{ \"InputEvent\":true, \"type\":\"" + _s + "\"";
		if(this.key != null) {
			_s1 += ", \"key\":" + Std.string(this.key);
		}
		if(this.text != null) {
			_s1 += ", \"text\":" + Std.string(this.text);
		}
		if(this.mouse != null) {
			_s1 += ", \"mouse\":" + Std.string(this.mouse);
		}
		if(this.touch != null) {
			_s1 += ", \"touch\":" + Std.string(this.touch);
		}
		if(this.gamepad != null) {
			_s1 += ", \"gamepad\":" + Std.string(this.gamepad);
		}
		_s1 += "\"window\":" + this.window_id + ", \"time\":" + this.timestamp + " }";
		return _s1;
	}
	,__class__: snow_types_InputEvent
};
var snow_types_ModState = function() {
	this.meta = false;
	this.alt = false;
	this.shift = false;
	this.ctrl = false;
	this.mode = false;
	this.caps = false;
	this.num = false;
	this.rmeta = false;
	this.lmeta = false;
	this.ralt = false;
	this.lalt = false;
	this.rctrl = false;
	this.lctrl = false;
	this.rshift = false;
	this.lshift = false;
	this.none = false;
};
$hxClasses["snow.types.ModState"] = snow_types_ModState;
snow_types_ModState.__name__ = ["snow","types","ModState"];
snow_types_ModState.prototype = {
	toString: function() {
		var _s = "{ \"ModState\":true ";
		if(this.none) {
			return "{ \"ModState\":true " + ", \"none\":true }";
		}
		if(this.lshift) {
			_s = "{ \"ModState\":true " + ", \"lshift\":true";
		}
		if(this.rshift) {
			_s += ", \"rshift\":true";
		}
		if(this.lctrl) {
			_s += ", \"lctrl\":true";
		}
		if(this.rctrl) {
			_s += ", \"rctrl\":true";
		}
		if(this.lalt) {
			_s += ", \"lalt\":true";
		}
		if(this.ralt) {
			_s += ", \"ralt\":true";
		}
		if(this.lmeta) {
			_s += ", \"lmeta\":true";
		}
		if(this.rmeta) {
			_s += ", \"rmeta\":true";
		}
		if(this.num) {
			_s += ", \"num\":true";
		}
		if(this.caps) {
			_s += ", \"caps\":true";
		}
		if(this.mode) {
			_s += ", \"mode\":true";
		}
		if(this.ctrl) {
			_s += ", \"ctrl\":true";
		}
		if(this.shift) {
			_s += ", \"shift\":true";
		}
		if(this.alt) {
			_s += ", \"alt\":true";
		}
		if(this.meta) {
			_s += ", \"meta\":true";
		}
		_s += "}";
		return _s;
	}
	,__class__: snow_types_ModState
};
var snow_types__$Types_KeyEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.KeyEventType_Impl_"] = snow_types__$Types_KeyEventType_$Impl_$;
snow_types__$Types_KeyEventType_$Impl_$.__name__ = ["snow","types","_Types","KeyEventType_Impl_"];
snow_types__$Types_KeyEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "ke_unknown";
	case 1:
		return "ke_down";
	case 2:
		return "ke_up";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_MouseEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.MouseEventType_Impl_"] = snow_types__$Types_MouseEventType_$Impl_$;
snow_types__$Types_MouseEventType_$Impl_$.__name__ = ["snow","types","_Types","MouseEventType_Impl_"];
snow_types__$Types_MouseEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "me_unknown";
	case 1:
		return "me_move";
	case 2:
		return "me_down";
	case 3:
		return "me_up";
	case 4:
		return "me_wheel";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_TouchEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.TouchEventType_Impl_"] = snow_types__$Types_TouchEventType_$Impl_$;
snow_types__$Types_TouchEventType_$Impl_$.__name__ = ["snow","types","_Types","TouchEventType_Impl_"];
snow_types__$Types_TouchEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "te_unknown";
	case 1:
		return "te_move";
	case 2:
		return "te_down";
	case 3:
		return "te_up";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_GamepadEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.GamepadEventType_Impl_"] = snow_types__$Types_GamepadEventType_$Impl_$;
snow_types__$Types_GamepadEventType_$Impl_$.__name__ = ["snow","types","_Types","GamepadEventType_Impl_"];
snow_types__$Types_GamepadEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "ge_unknown";
	case 1:
		return "ge_axis";
	case 2:
		return "ge_down";
	case 3:
		return "ge_up";
	case 4:
		return "ge_device";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_TextEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.TextEventType_Impl_"] = snow_types__$Types_TextEventType_$Impl_$;
snow_types__$Types_TextEventType_$Impl_$.__name__ = ["snow","types","_Types","TextEventType_Impl_"];
snow_types__$Types_TextEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "te_unknown";
	case 1:
		return "te_edit";
	case 2:
		return "te_input";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_GamepadDeviceEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.GamepadDeviceEventType_Impl_"] = snow_types__$Types_GamepadDeviceEventType_$Impl_$;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.__name__ = ["snow","types","_Types","GamepadDeviceEventType_Impl_"];
snow_types__$Types_GamepadDeviceEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "ge_unknown";
	case 1:
		return "ge_device_added";
	case 2:
		return "ge_device_removed";
	case 3:
		return "ge_device_remapped";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_SystemEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.SystemEventType_Impl_"] = snow_types__$Types_SystemEventType_$Impl_$;
snow_types__$Types_SystemEventType_$Impl_$.__name__ = ["snow","types","_Types","SystemEventType_Impl_"];
snow_types__$Types_SystemEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "se_unknown";
	case 1:
		return "se_init";
	case 2:
		return "se_ready";
	case 3:
		return "se_tick";
	case 4:
		return "se_freeze";
	case 5:
		return "se_unfreeze";
	case 7:
		return "se_shutdown";
	case 8:
		return "se_window";
	case 9:
		return "se_input";
	case 10:
		return "se_quit";
	case 11:
		return "se_app_terminating";
	case 12:
		return "se_app_lowmemory";
	case 13:
		return "se_app_willenterbackground";
	case 14:
		return "se_app_didenterbackground";
	case 15:
		return "se_app_willenterforeground";
	case 16:
		return "se_app_didenterforeground";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_WindowEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.WindowEventType_Impl_"] = snow_types__$Types_WindowEventType_$Impl_$;
snow_types__$Types_WindowEventType_$Impl_$.__name__ = ["snow","types","_Types","WindowEventType_Impl_"];
snow_types__$Types_WindowEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "we_unknown";
	case 1:
		return "we_shown";
	case 2:
		return "we_hidden";
	case 3:
		return "we_exposed";
	case 4:
		return "we_moved";
	case 5:
		return "we_resized";
	case 6:
		return "we_size_changed";
	case 7:
		return "we_minimized";
	case 8:
		return "we_maximized";
	case 9:
		return "we_restored";
	case 10:
		return "we_enter";
	case 11:
		return "we_leave";
	case 12:
		return "we_focus_gained";
	case 13:
		return "we_focus_lost";
	case 14:
		return "we_close";
	default:
		return "" + this1;
	}
};
var snow_types__$Types_InputEventType_$Impl_$ = {};
$hxClasses["snow.types._Types.InputEventType_Impl_"] = snow_types__$Types_InputEventType_$Impl_$;
snow_types__$Types_InputEventType_$Impl_$.__name__ = ["snow","types","_Types","InputEventType_Impl_"];
snow_types__$Types_InputEventType_$Impl_$.toString = function(this1) {
	switch(this1) {
	case 0:
		return "ie_unknown";
	case 1:
		return "ie_key";
	case 2:
		return "ie_text";
	case 3:
		return "ie_mouse";
	case 4:
		return "ie_touch";
	case 5:
		return "ie_gamepad";
	case 6:
		return "ie_joystick";
	default:
		return "" + this1;
	}
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
$hxClasses["Math"] = Math;
String.prototype.__class__ = $hxClasses["String"] = String;
String.__name__ = ["String"];
$hxClasses["Array"] = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses["Date"] = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses["Int"] = { __name__ : ["Int"]};
var Dynamic = $hxClasses["Dynamic"] = { __name__ : ["Dynamic"]};
var Float = $hxClasses["Float"] = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses["Bool"] = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses["Class"] = { __name__ : ["Class"]};
var Enum = { };
var __map_reserved = {}
var ArrayBuffer = $global.ArrayBuffer || js_html_compat_ArrayBuffer;
if(ArrayBuffer.prototype.slice == null) {
	ArrayBuffer.prototype.slice = js_html_compat_ArrayBuffer.sliceImpl;
}
var Float32Array = $global.Float32Array || js_html_compat_Float32Array._new;
var Uint8Array = $global.Uint8Array || js_html_compat_Uint8Array._new;
gltoolbox_GeometryTools.unitQuadCache = new haxe_ds_IntMap();
gltoolbox_GeometryTools.clipSpaceQuadCache = new haxe_ds_IntMap();
gltoolbox_TextureTools.defaultParams = { channelType : 6408, dataType : 5121, filter : 9728, wrapS : 33071, wrapT : 33071, unpackAlignment : 4, webGLFlipY : true};
js_Boot.__toStr = ({ }).toString;
gltoolbox_shaders_Resample.instance = new gltoolbox_shaders_Resample();
haxe_Serializer.USE_CACHE = false;
haxe_Serializer.USE_ENUM_INDEX = false;
haxe_Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_Unserializer.DEFAULT_RESOLVER = new haxe__$Unserializer_DefaultResolver();
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_ds_ObjectMap.count = 0;
js_html_compat_Float32Array.BYTES_PER_ELEMENT = 4;
js_html_compat_Uint8Array.BYTES_PER_ELEMENT = 1;
shaderblox_glsl_GLSLTools.PRECISION_QUALIFIERS = ["lowp","mediump","highp"];
shaderblox_glsl_GLSLTools.MAIN_FUNC_REGEX = new EReg("(\\s|^)((" + shaderblox_glsl_GLSLTools.PRECISION_QUALIFIERS.join("|") + ")\\s+)?(void)\\s+(main)\\s*\\([^\\)]*\\)\\s*\\{","m");
shaderblox_glsl_GLSLTools.STORAGE_QUALIFIERS = ["const","attribute","uniform","varying"];
shaderblox_glsl_GLSLTools.STORAGE_QUALIFIER_TYPES = (function($this) {
	var $r;
	var _g = new haxe_ds_StringMap();
	{
		var value = ["bool","int","float","vec2","vec3","vec4","bvec2","bvec3","bvec4","ivec2","ivec3","ivec4","mat2","mat3","mat4"];
		if(__map_reserved["const"] != null) {
			_g.setReserved("const",value);
		} else {
			_g.h["const"] = value;
		}
	}
	{
		var value1 = ["float","vec2","vec3","vec4","mat2","mat3","mat4"];
		if(__map_reserved["attribute"] != null) {
			_g.setReserved("attribute",value1);
		} else {
			_g.h["attribute"] = value1;
		}
	}
	{
		var value2 = ["bool","int","float","vec2","vec3","vec4","bvec2","bvec3","bvec4","ivec2","ivec3","ivec4","mat2","mat3","mat4","sampler2D","samplerCube"];
		if(__map_reserved["uniform"] != null) {
			_g.setReserved("uniform",value2);
		} else {
			_g.h["uniform"] = value2;
		}
	}
	{
		var value3 = ["float","vec2","vec3","vec4","mat2","mat3","mat4"];
		if(__map_reserved["varying"] != null) {
			_g.setReserved("varying",value3);
		} else {
			_g.h["varying"] = value3;
		}
	}
	$r = _g;
	return $r;
}(this));
shaderblox_uniforms_UTexture.lastActiveTexture = -1;
snow_Snow.next_queue = [];
snow_Snow.defer_queue = [];
snow_api_Debug._level = 1;
snow_api_Debug._log_width = 16;
snow_api_Promises.calls = [];
snow_api_Promises.defers = [];
snow_api_Timer.running_timers = [];
snow_api_buffers__$Float32Array_Float32Array_$Impl_$.BYTES_PER_ELEMENT = 4;
snow_api_buffers__$Int32Array_Int32Array_$Impl_$.BYTES_PER_ELEMENT = 4;
snow_api_buffers__$Uint8Array_Uint8Array_$Impl_$.BYTES_PER_ELEMENT = 1;
snow_core_web_Runtime.web_window_id = 1;
snow_core_web_Runtime.timestamp_start = 0.0;
snow_core_web_Runtime.key_press_ignored = [8,13];
snow_core_web__$Runtime_DOMKeys.dom_shift = 16;
snow_core_web__$Runtime_DOMKeys.dom_ctrl = 17;
snow_core_web__$Runtime_DOMKeys.dom_alt = 18;
snow_core_web__$Runtime_DOMKeys.dom_capslock = 20;
snow_core_web__$Runtime_DOMKeys.dom_pageup = 33;
snow_core_web__$Runtime_DOMKeys.dom_pagedown = 34;
snow_core_web__$Runtime_DOMKeys.dom_end = 35;
snow_core_web__$Runtime_DOMKeys.dom_home = 36;
snow_core_web__$Runtime_DOMKeys.dom_left = 37;
snow_core_web__$Runtime_DOMKeys.dom_up = 38;
snow_core_web__$Runtime_DOMKeys.dom_right = 39;
snow_core_web__$Runtime_DOMKeys.dom_down = 40;
snow_core_web__$Runtime_DOMKeys.dom_printscr = 44;
snow_core_web__$Runtime_DOMKeys.dom_insert = 45;
snow_core_web__$Runtime_DOMKeys.dom_delete = 46;
snow_core_web__$Runtime_DOMKeys.dom_lmeta = 91;
snow_core_web__$Runtime_DOMKeys.dom_rmeta = 93;
snow_core_web__$Runtime_DOMKeys.dom_kp_0 = 96;
snow_core_web__$Runtime_DOMKeys.dom_kp_1 = 97;
snow_core_web__$Runtime_DOMKeys.dom_kp_2 = 98;
snow_core_web__$Runtime_DOMKeys.dom_kp_3 = 99;
snow_core_web__$Runtime_DOMKeys.dom_kp_4 = 100;
snow_core_web__$Runtime_DOMKeys.dom_kp_5 = 101;
snow_core_web__$Runtime_DOMKeys.dom_kp_6 = 102;
snow_core_web__$Runtime_DOMKeys.dom_kp_7 = 103;
snow_core_web__$Runtime_DOMKeys.dom_kp_8 = 104;
snow_core_web__$Runtime_DOMKeys.dom_kp_9 = 105;
snow_core_web__$Runtime_DOMKeys.dom_kp_multiply = 106;
snow_core_web__$Runtime_DOMKeys.dom_kp_plus = 107;
snow_core_web__$Runtime_DOMKeys.dom_kp_minus = 109;
snow_core_web__$Runtime_DOMKeys.dom_kp_decimal = 110;
snow_core_web__$Runtime_DOMKeys.dom_kp_divide = 111;
snow_core_web__$Runtime_DOMKeys.dom_kp_numlock = 144;
snow_core_web__$Runtime_DOMKeys.dom_f1 = 112;
snow_core_web__$Runtime_DOMKeys.dom_f2 = 113;
snow_core_web__$Runtime_DOMKeys.dom_f3 = 114;
snow_core_web__$Runtime_DOMKeys.dom_f4 = 115;
snow_core_web__$Runtime_DOMKeys.dom_f5 = 116;
snow_core_web__$Runtime_DOMKeys.dom_f6 = 117;
snow_core_web__$Runtime_DOMKeys.dom_f7 = 118;
snow_core_web__$Runtime_DOMKeys.dom_f8 = 119;
snow_core_web__$Runtime_DOMKeys.dom_f9 = 120;
snow_core_web__$Runtime_DOMKeys.dom_f10 = 121;
snow_core_web__$Runtime_DOMKeys.dom_f11 = 122;
snow_core_web__$Runtime_DOMKeys.dom_f12 = 123;
snow_core_web__$Runtime_DOMKeys.dom_f13 = 124;
snow_core_web__$Runtime_DOMKeys.dom_f14 = 125;
snow_core_web__$Runtime_DOMKeys.dom_f15 = 126;
snow_core_web__$Runtime_DOMKeys.dom_f16 = 127;
snow_core_web__$Runtime_DOMKeys.dom_f17 = 128;
snow_core_web__$Runtime_DOMKeys.dom_f18 = 129;
snow_core_web__$Runtime_DOMKeys.dom_f19 = 130;
snow_core_web__$Runtime_DOMKeys.dom_f20 = 131;
snow_core_web__$Runtime_DOMKeys.dom_f21 = 132;
snow_core_web__$Runtime_DOMKeys.dom_f22 = 133;
snow_core_web__$Runtime_DOMKeys.dom_f23 = 134;
snow_core_web__$Runtime_DOMKeys.dom_f24 = 135;
snow_core_web__$Runtime_DOMKeys.dom_caret = 160;
snow_core_web__$Runtime_DOMKeys.dom_exclaim = 161;
snow_core_web__$Runtime_DOMKeys.dom_quotedbl = 162;
snow_core_web__$Runtime_DOMKeys.dom_hash = 163;
snow_core_web__$Runtime_DOMKeys.dom_dollar = 164;
snow_core_web__$Runtime_DOMKeys.dom_percent = 165;
snow_core_web__$Runtime_DOMKeys.dom_ampersand = 166;
snow_core_web__$Runtime_DOMKeys.dom_underscore = 167;
snow_core_web__$Runtime_DOMKeys.dom_leftparen = 168;
snow_core_web__$Runtime_DOMKeys.dom_rightparen = 169;
snow_core_web__$Runtime_DOMKeys.dom_asterisk = 170;
snow_core_web__$Runtime_DOMKeys.dom_plus = 171;
snow_core_web__$Runtime_DOMKeys.dom_pipe = 172;
snow_core_web__$Runtime_DOMKeys.dom_minus = 173;
snow_core_web__$Runtime_DOMKeys.dom_leftbrace = 174;
snow_core_web__$Runtime_DOMKeys.dom_rightbrace = 175;
snow_core_web__$Runtime_DOMKeys.dom_tilde = 176;
snow_core_web__$Runtime_DOMKeys.dom_audiomute = 181;
snow_core_web__$Runtime_DOMKeys.dom_volumedown = 182;
snow_core_web__$Runtime_DOMKeys.dom_volumeup = 183;
snow_core_web__$Runtime_DOMKeys.dom_comma = 188;
snow_core_web__$Runtime_DOMKeys.dom_period = 190;
snow_core_web__$Runtime_DOMKeys.dom_slash = 191;
snow_core_web__$Runtime_DOMKeys.dom_backquote = 192;
snow_core_web__$Runtime_DOMKeys.dom_leftbracket = 219;
snow_core_web__$Runtime_DOMKeys.dom_rightbracket = 221;
snow_core_web__$Runtime_DOMKeys.dom_backslash = 220;
snow_core_web__$Runtime_DOMKeys.dom_quote = 222;
snow_core_web__$Runtime_DOMKeys.dom_meta = 224;
snow_core_web_assets_Assets.POT = true;
snow_modules_opengl_web_GL.DEPTH_BUFFER_BIT = 256;
snow_modules_opengl_web_GL.STENCIL_BUFFER_BIT = 1024;
snow_modules_opengl_web_GL.COLOR_BUFFER_BIT = 16384;
snow_modules_opengl_web_GL.POINTS = 0;
snow_modules_opengl_web_GL.LINES = 1;
snow_modules_opengl_web_GL.LINE_LOOP = 2;
snow_modules_opengl_web_GL.LINE_STRIP = 3;
snow_modules_opengl_web_GL.TRIANGLES = 4;
snow_modules_opengl_web_GL.TRIANGLE_STRIP = 5;
snow_modules_opengl_web_GL.TRIANGLE_FAN = 6;
snow_modules_opengl_web_GL.ZERO = 0;
snow_modules_opengl_web_GL.ONE = 1;
snow_modules_opengl_web_GL.SRC_COLOR = 768;
snow_modules_opengl_web_GL.ONE_MINUS_SRC_COLOR = 769;
snow_modules_opengl_web_GL.SRC_ALPHA = 770;
snow_modules_opengl_web_GL.ONE_MINUS_SRC_ALPHA = 771;
snow_modules_opengl_web_GL.DST_ALPHA = 772;
snow_modules_opengl_web_GL.ONE_MINUS_DST_ALPHA = 773;
snow_modules_opengl_web_GL.DST_COLOR = 774;
snow_modules_opengl_web_GL.ONE_MINUS_DST_COLOR = 775;
snow_modules_opengl_web_GL.SRC_ALPHA_SATURATE = 776;
snow_modules_opengl_web_GL.FUNC_ADD = 32774;
snow_modules_opengl_web_GL.BLEND_EQUATION = 32777;
snow_modules_opengl_web_GL.BLEND_EQUATION_RGB = 32777;
snow_modules_opengl_web_GL.BLEND_EQUATION_ALPHA = 34877;
snow_modules_opengl_web_GL.FUNC_SUBTRACT = 32778;
snow_modules_opengl_web_GL.FUNC_REVERSE_SUBTRACT = 32779;
snow_modules_opengl_web_GL.BLEND_DST_RGB = 32968;
snow_modules_opengl_web_GL.BLEND_SRC_RGB = 32969;
snow_modules_opengl_web_GL.BLEND_DST_ALPHA = 32970;
snow_modules_opengl_web_GL.BLEND_SRC_ALPHA = 32971;
snow_modules_opengl_web_GL.CONSTANT_COLOR = 32769;
snow_modules_opengl_web_GL.ONE_MINUS_CONSTANT_COLOR = 32770;
snow_modules_opengl_web_GL.CONSTANT_ALPHA = 32771;
snow_modules_opengl_web_GL.ONE_MINUS_CONSTANT_ALPHA = 32772;
snow_modules_opengl_web_GL.BLEND_COLOR = 32773;
snow_modules_opengl_web_GL.ARRAY_BUFFER = 34962;
snow_modules_opengl_web_GL.ELEMENT_ARRAY_BUFFER = 34963;
snow_modules_opengl_web_GL.ARRAY_BUFFER_BINDING = 34964;
snow_modules_opengl_web_GL.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
snow_modules_opengl_web_GL.STREAM_DRAW = 35040;
snow_modules_opengl_web_GL.STATIC_DRAW = 35044;
snow_modules_opengl_web_GL.DYNAMIC_DRAW = 35048;
snow_modules_opengl_web_GL.BUFFER_SIZE = 34660;
snow_modules_opengl_web_GL.BUFFER_USAGE = 34661;
snow_modules_opengl_web_GL.CURRENT_VERTEX_ATTRIB = 34342;
snow_modules_opengl_web_GL.FRONT = 1028;
snow_modules_opengl_web_GL.BACK = 1029;
snow_modules_opengl_web_GL.FRONT_AND_BACK = 1032;
snow_modules_opengl_web_GL.CULL_FACE = 2884;
snow_modules_opengl_web_GL.BLEND = 3042;
snow_modules_opengl_web_GL.DITHER = 3024;
snow_modules_opengl_web_GL.STENCIL_TEST = 2960;
snow_modules_opengl_web_GL.DEPTH_TEST = 2929;
snow_modules_opengl_web_GL.SCISSOR_TEST = 3089;
snow_modules_opengl_web_GL.POLYGON_OFFSET_FILL = 32823;
snow_modules_opengl_web_GL.SAMPLE_ALPHA_TO_COVERAGE = 32926;
snow_modules_opengl_web_GL.SAMPLE_COVERAGE = 32928;
snow_modules_opengl_web_GL.NO_ERROR = 0;
snow_modules_opengl_web_GL.INVALID_ENUM = 1280;
snow_modules_opengl_web_GL.INVALID_VALUE = 1281;
snow_modules_opengl_web_GL.INVALID_OPERATION = 1282;
snow_modules_opengl_web_GL.OUT_OF_MEMORY = 1285;
snow_modules_opengl_web_GL.CW = 2304;
snow_modules_opengl_web_GL.CCW = 2305;
snow_modules_opengl_web_GL.LINE_WIDTH = 2849;
snow_modules_opengl_web_GL.ALIASED_POINT_SIZE_RANGE = 33901;
snow_modules_opengl_web_GL.ALIASED_LINE_WIDTH_RANGE = 33902;
snow_modules_opengl_web_GL.CULL_FACE_MODE = 2885;
snow_modules_opengl_web_GL.FRONT_FACE = 2886;
snow_modules_opengl_web_GL.DEPTH_RANGE = 2928;
snow_modules_opengl_web_GL.DEPTH_WRITEMASK = 2930;
snow_modules_opengl_web_GL.DEPTH_CLEAR_VALUE = 2931;
snow_modules_opengl_web_GL.DEPTH_FUNC = 2932;
snow_modules_opengl_web_GL.STENCIL_CLEAR_VALUE = 2961;
snow_modules_opengl_web_GL.STENCIL_FUNC = 2962;
snow_modules_opengl_web_GL.STENCIL_FAIL = 2964;
snow_modules_opengl_web_GL.STENCIL_PASS_DEPTH_FAIL = 2965;
snow_modules_opengl_web_GL.STENCIL_PASS_DEPTH_PASS = 2966;
snow_modules_opengl_web_GL.STENCIL_REF = 2967;
snow_modules_opengl_web_GL.STENCIL_VALUE_MASK = 2963;
snow_modules_opengl_web_GL.STENCIL_WRITEMASK = 2968;
snow_modules_opengl_web_GL.STENCIL_BACK_FUNC = 34816;
snow_modules_opengl_web_GL.STENCIL_BACK_FAIL = 34817;
snow_modules_opengl_web_GL.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
snow_modules_opengl_web_GL.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
snow_modules_opengl_web_GL.STENCIL_BACK_REF = 36003;
snow_modules_opengl_web_GL.STENCIL_BACK_VALUE_MASK = 36004;
snow_modules_opengl_web_GL.STENCIL_BACK_WRITEMASK = 36005;
snow_modules_opengl_web_GL.VIEWPORT = 2978;
snow_modules_opengl_web_GL.SCISSOR_BOX = 3088;
snow_modules_opengl_web_GL.COLOR_CLEAR_VALUE = 3106;
snow_modules_opengl_web_GL.COLOR_WRITEMASK = 3107;
snow_modules_opengl_web_GL.UNPACK_ALIGNMENT = 3317;
snow_modules_opengl_web_GL.PACK_ALIGNMENT = 3333;
snow_modules_opengl_web_GL.MAX_TEXTURE_SIZE = 3379;
snow_modules_opengl_web_GL.MAX_VIEWPORT_DIMS = 3386;
snow_modules_opengl_web_GL.SUBPIXEL_BITS = 3408;
snow_modules_opengl_web_GL.RED_BITS = 3410;
snow_modules_opengl_web_GL.GREEN_BITS = 3411;
snow_modules_opengl_web_GL.BLUE_BITS = 3412;
snow_modules_opengl_web_GL.ALPHA_BITS = 3413;
snow_modules_opengl_web_GL.DEPTH_BITS = 3414;
snow_modules_opengl_web_GL.STENCIL_BITS = 3415;
snow_modules_opengl_web_GL.POLYGON_OFFSET_UNITS = 10752;
snow_modules_opengl_web_GL.POLYGON_OFFSET_FACTOR = 32824;
snow_modules_opengl_web_GL.TEXTURE_BINDING_2D = 32873;
snow_modules_opengl_web_GL.SAMPLE_BUFFERS = 32936;
snow_modules_opengl_web_GL.SAMPLES = 32937;
snow_modules_opengl_web_GL.SAMPLE_COVERAGE_VALUE = 32938;
snow_modules_opengl_web_GL.SAMPLE_COVERAGE_INVERT = 32939;
snow_modules_opengl_web_GL.COMPRESSED_TEXTURE_FORMATS = 34467;
snow_modules_opengl_web_GL.DONT_CARE = 4352;
snow_modules_opengl_web_GL.FASTEST = 4353;
snow_modules_opengl_web_GL.NICEST = 4354;
snow_modules_opengl_web_GL.GENERATE_MIPMAP_HINT = 33170;
snow_modules_opengl_web_GL.BYTE = 5120;
snow_modules_opengl_web_GL.UNSIGNED_BYTE = 5121;
snow_modules_opengl_web_GL.SHORT = 5122;
snow_modules_opengl_web_GL.UNSIGNED_SHORT = 5123;
snow_modules_opengl_web_GL.INT = 5124;
snow_modules_opengl_web_GL.UNSIGNED_INT = 5125;
snow_modules_opengl_web_GL.FLOAT = 5126;
snow_modules_opengl_web_GL.DEPTH_COMPONENT = 6402;
snow_modules_opengl_web_GL.ALPHA = 6406;
snow_modules_opengl_web_GL.RGB = 6407;
snow_modules_opengl_web_GL.RGBA = 6408;
snow_modules_opengl_web_GL.LUMINANCE = 6409;
snow_modules_opengl_web_GL.LUMINANCE_ALPHA = 6410;
snow_modules_opengl_web_GL.UNSIGNED_SHORT_4_4_4_4 = 32819;
snow_modules_opengl_web_GL.UNSIGNED_SHORT_5_5_5_1 = 32820;
snow_modules_opengl_web_GL.UNSIGNED_SHORT_5_6_5 = 33635;
snow_modules_opengl_web_GL.FRAGMENT_SHADER = 35632;
snow_modules_opengl_web_GL.VERTEX_SHADER = 35633;
snow_modules_opengl_web_GL.MAX_VERTEX_ATTRIBS = 34921;
snow_modules_opengl_web_GL.MAX_VERTEX_UNIFORM_VECTORS = 36347;
snow_modules_opengl_web_GL.MAX_VARYING_VECTORS = 36348;
snow_modules_opengl_web_GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
snow_modules_opengl_web_GL.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
snow_modules_opengl_web_GL.MAX_TEXTURE_IMAGE_UNITS = 34930;
snow_modules_opengl_web_GL.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
snow_modules_opengl_web_GL.SHADER_TYPE = 35663;
snow_modules_opengl_web_GL.DELETE_STATUS = 35712;
snow_modules_opengl_web_GL.LINK_STATUS = 35714;
snow_modules_opengl_web_GL.VALIDATE_STATUS = 35715;
snow_modules_opengl_web_GL.ATTACHED_SHADERS = 35717;
snow_modules_opengl_web_GL.ACTIVE_UNIFORMS = 35718;
snow_modules_opengl_web_GL.ACTIVE_ATTRIBUTES = 35721;
snow_modules_opengl_web_GL.SHADING_LANGUAGE_VERSION = 35724;
snow_modules_opengl_web_GL.CURRENT_PROGRAM = 35725;
snow_modules_opengl_web_GL.NEVER = 512;
snow_modules_opengl_web_GL.LESS = 513;
snow_modules_opengl_web_GL.EQUAL = 514;
snow_modules_opengl_web_GL.LEQUAL = 515;
snow_modules_opengl_web_GL.GREATER = 516;
snow_modules_opengl_web_GL.NOTEQUAL = 517;
snow_modules_opengl_web_GL.GEQUAL = 518;
snow_modules_opengl_web_GL.ALWAYS = 519;
snow_modules_opengl_web_GL.KEEP = 7680;
snow_modules_opengl_web_GL.REPLACE = 7681;
snow_modules_opengl_web_GL.INCR = 7682;
snow_modules_opengl_web_GL.DECR = 7683;
snow_modules_opengl_web_GL.INVERT = 5386;
snow_modules_opengl_web_GL.INCR_WRAP = 34055;
snow_modules_opengl_web_GL.DECR_WRAP = 34056;
snow_modules_opengl_web_GL.VENDOR = 7936;
snow_modules_opengl_web_GL.RENDERER = 7937;
snow_modules_opengl_web_GL.VERSION = 7938;
snow_modules_opengl_web_GL.NEAREST = 9728;
snow_modules_opengl_web_GL.LINEAR = 9729;
snow_modules_opengl_web_GL.NEAREST_MIPMAP_NEAREST = 9984;
snow_modules_opengl_web_GL.LINEAR_MIPMAP_NEAREST = 9985;
snow_modules_opengl_web_GL.NEAREST_MIPMAP_LINEAR = 9986;
snow_modules_opengl_web_GL.LINEAR_MIPMAP_LINEAR = 9987;
snow_modules_opengl_web_GL.TEXTURE_MAG_FILTER = 10240;
snow_modules_opengl_web_GL.TEXTURE_MIN_FILTER = 10241;
snow_modules_opengl_web_GL.TEXTURE_WRAP_S = 10242;
snow_modules_opengl_web_GL.TEXTURE_WRAP_T = 10243;
snow_modules_opengl_web_GL.TEXTURE_2D = 3553;
snow_modules_opengl_web_GL.TEXTURE = 5890;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP = 34067;
snow_modules_opengl_web_GL.TEXTURE_BINDING_CUBE_MAP = 34068;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
snow_modules_opengl_web_GL.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
snow_modules_opengl_web_GL.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
snow_modules_opengl_web_GL.TEXTURE0 = 33984;
snow_modules_opengl_web_GL.TEXTURE1 = 33985;
snow_modules_opengl_web_GL.TEXTURE2 = 33986;
snow_modules_opengl_web_GL.TEXTURE3 = 33987;
snow_modules_opengl_web_GL.TEXTURE4 = 33988;
snow_modules_opengl_web_GL.TEXTURE5 = 33989;
snow_modules_opengl_web_GL.TEXTURE6 = 33990;
snow_modules_opengl_web_GL.TEXTURE7 = 33991;
snow_modules_opengl_web_GL.TEXTURE8 = 33992;
snow_modules_opengl_web_GL.TEXTURE9 = 33993;
snow_modules_opengl_web_GL.TEXTURE10 = 33994;
snow_modules_opengl_web_GL.TEXTURE11 = 33995;
snow_modules_opengl_web_GL.TEXTURE12 = 33996;
snow_modules_opengl_web_GL.TEXTURE13 = 33997;
snow_modules_opengl_web_GL.TEXTURE14 = 33998;
snow_modules_opengl_web_GL.TEXTURE15 = 33999;
snow_modules_opengl_web_GL.TEXTURE16 = 34000;
snow_modules_opengl_web_GL.TEXTURE17 = 34001;
snow_modules_opengl_web_GL.TEXTURE18 = 34002;
snow_modules_opengl_web_GL.TEXTURE19 = 34003;
snow_modules_opengl_web_GL.TEXTURE20 = 34004;
snow_modules_opengl_web_GL.TEXTURE21 = 34005;
snow_modules_opengl_web_GL.TEXTURE22 = 34006;
snow_modules_opengl_web_GL.TEXTURE23 = 34007;
snow_modules_opengl_web_GL.TEXTURE24 = 34008;
snow_modules_opengl_web_GL.TEXTURE25 = 34009;
snow_modules_opengl_web_GL.TEXTURE26 = 34010;
snow_modules_opengl_web_GL.TEXTURE27 = 34011;
snow_modules_opengl_web_GL.TEXTURE28 = 34012;
snow_modules_opengl_web_GL.TEXTURE29 = 34013;
snow_modules_opengl_web_GL.TEXTURE30 = 34014;
snow_modules_opengl_web_GL.TEXTURE31 = 34015;
snow_modules_opengl_web_GL.ACTIVE_TEXTURE = 34016;
snow_modules_opengl_web_GL.REPEAT = 10497;
snow_modules_opengl_web_GL.CLAMP_TO_EDGE = 33071;
snow_modules_opengl_web_GL.MIRRORED_REPEAT = 33648;
snow_modules_opengl_web_GL.FLOAT_VEC2 = 35664;
snow_modules_opengl_web_GL.FLOAT_VEC3 = 35665;
snow_modules_opengl_web_GL.FLOAT_VEC4 = 35666;
snow_modules_opengl_web_GL.INT_VEC2 = 35667;
snow_modules_opengl_web_GL.INT_VEC3 = 35668;
snow_modules_opengl_web_GL.INT_VEC4 = 35669;
snow_modules_opengl_web_GL.BOOL = 35670;
snow_modules_opengl_web_GL.BOOL_VEC2 = 35671;
snow_modules_opengl_web_GL.BOOL_VEC3 = 35672;
snow_modules_opengl_web_GL.BOOL_VEC4 = 35673;
snow_modules_opengl_web_GL.FLOAT_MAT2 = 35674;
snow_modules_opengl_web_GL.FLOAT_MAT3 = 35675;
snow_modules_opengl_web_GL.FLOAT_MAT4 = 35676;
snow_modules_opengl_web_GL.SAMPLER_2D = 35678;
snow_modules_opengl_web_GL.SAMPLER_CUBE = 35680;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
snow_modules_opengl_web_GL.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
snow_modules_opengl_web_GL.VERTEX_PROGRAM_POINT_SIZE = 34370;
snow_modules_opengl_web_GL.POINT_SPRITE = 34913;
snow_modules_opengl_web_GL.COMPILE_STATUS = 35713;
snow_modules_opengl_web_GL.LOW_FLOAT = 36336;
snow_modules_opengl_web_GL.MEDIUM_FLOAT = 36337;
snow_modules_opengl_web_GL.HIGH_FLOAT = 36338;
snow_modules_opengl_web_GL.LOW_INT = 36339;
snow_modules_opengl_web_GL.MEDIUM_INT = 36340;
snow_modules_opengl_web_GL.HIGH_INT = 36341;
snow_modules_opengl_web_GL.FRAMEBUFFER = 36160;
snow_modules_opengl_web_GL.RENDERBUFFER = 36161;
snow_modules_opengl_web_GL.RGBA4 = 32854;
snow_modules_opengl_web_GL.RGB5_A1 = 32855;
snow_modules_opengl_web_GL.RGB565 = 36194;
snow_modules_opengl_web_GL.DEPTH_COMPONENT16 = 33189;
snow_modules_opengl_web_GL.STENCIL_INDEX = 6401;
snow_modules_opengl_web_GL.STENCIL_INDEX8 = 36168;
snow_modules_opengl_web_GL.DEPTH_STENCIL = 34041;
snow_modules_opengl_web_GL.RENDERBUFFER_WIDTH = 36162;
snow_modules_opengl_web_GL.RENDERBUFFER_HEIGHT = 36163;
snow_modules_opengl_web_GL.RENDERBUFFER_INTERNAL_FORMAT = 36164;
snow_modules_opengl_web_GL.RENDERBUFFER_RED_SIZE = 36176;
snow_modules_opengl_web_GL.RENDERBUFFER_GREEN_SIZE = 36177;
snow_modules_opengl_web_GL.RENDERBUFFER_BLUE_SIZE = 36178;
snow_modules_opengl_web_GL.RENDERBUFFER_ALPHA_SIZE = 36179;
snow_modules_opengl_web_GL.RENDERBUFFER_DEPTH_SIZE = 36180;
snow_modules_opengl_web_GL.RENDERBUFFER_STENCIL_SIZE = 36181;
snow_modules_opengl_web_GL.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
snow_modules_opengl_web_GL.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
snow_modules_opengl_web_GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
snow_modules_opengl_web_GL.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
snow_modules_opengl_web_GL.COLOR_ATTACHMENT0 = 36064;
snow_modules_opengl_web_GL.DEPTH_ATTACHMENT = 36096;
snow_modules_opengl_web_GL.STENCIL_ATTACHMENT = 36128;
snow_modules_opengl_web_GL.DEPTH_STENCIL_ATTACHMENT = 33306;
snow_modules_opengl_web_GL.NONE = 0;
snow_modules_opengl_web_GL.FRAMEBUFFER_COMPLETE = 36053;
snow_modules_opengl_web_GL.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
snow_modules_opengl_web_GL.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
snow_modules_opengl_web_GL.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
snow_modules_opengl_web_GL.FRAMEBUFFER_UNSUPPORTED = 36061;
snow_modules_opengl_web_GL.FRAMEBUFFER_BINDING = 36006;
snow_modules_opengl_web_GL.RENDERBUFFER_BINDING = 36007;
snow_modules_opengl_web_GL.MAX_RENDERBUFFER_SIZE = 34024;
snow_modules_opengl_web_GL.INVALID_FRAMEBUFFER_OPERATION = 1286;
snow_modules_opengl_web_GL.UNPACK_FLIP_Y_WEBGL = 37440;
snow_modules_opengl_web_GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
snow_modules_opengl_web_GL.CONTEXT_LOST_WEBGL = 37442;
snow_modules_opengl_web_GL.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
snow_modules_opengl_web_GL.BROWSER_DEFAULT_WEBGL = 37444;
snow_modules_webaudio_Audio.half_pi = 1.5707;
snow_systems_input_Keycodes.unknown = 0;
snow_systems_input_Keycodes.enter = 13;
snow_systems_input_Keycodes.escape = 27;
snow_systems_input_Keycodes.backspace = 8;
snow_systems_input_Keycodes.tab = 9;
snow_systems_input_Keycodes.space = 32;
snow_systems_input_Keycodes.exclaim = 33;
snow_systems_input_Keycodes.quotedbl = 34;
snow_systems_input_Keycodes.hash = 35;
snow_systems_input_Keycodes.percent = 37;
snow_systems_input_Keycodes.dollar = 36;
snow_systems_input_Keycodes.ampersand = 38;
snow_systems_input_Keycodes.quote = 39;
snow_systems_input_Keycodes.leftparen = 40;
snow_systems_input_Keycodes.rightparen = 41;
snow_systems_input_Keycodes.asterisk = 42;
snow_systems_input_Keycodes.plus = 43;
snow_systems_input_Keycodes.comma = 44;
snow_systems_input_Keycodes.minus = 45;
snow_systems_input_Keycodes.period = 46;
snow_systems_input_Keycodes.slash = 47;
snow_systems_input_Keycodes.key_0 = 48;
snow_systems_input_Keycodes.key_1 = 49;
snow_systems_input_Keycodes.key_2 = 50;
snow_systems_input_Keycodes.key_3 = 51;
snow_systems_input_Keycodes.key_4 = 52;
snow_systems_input_Keycodes.key_5 = 53;
snow_systems_input_Keycodes.key_6 = 54;
snow_systems_input_Keycodes.key_7 = 55;
snow_systems_input_Keycodes.key_8 = 56;
snow_systems_input_Keycodes.key_9 = 57;
snow_systems_input_Keycodes.colon = 58;
snow_systems_input_Keycodes.semicolon = 59;
snow_systems_input_Keycodes.less = 60;
snow_systems_input_Keycodes.equals = 61;
snow_systems_input_Keycodes.greater = 62;
snow_systems_input_Keycodes.question = 63;
snow_systems_input_Keycodes.at = 64;
snow_systems_input_Keycodes.leftbracket = 91;
snow_systems_input_Keycodes.backslash = 92;
snow_systems_input_Keycodes.rightbracket = 93;
snow_systems_input_Keycodes.caret = 94;
snow_systems_input_Keycodes.underscore = 95;
snow_systems_input_Keycodes.backquote = 96;
snow_systems_input_Keycodes.key_a = 97;
snow_systems_input_Keycodes.key_b = 98;
snow_systems_input_Keycodes.key_c = 99;
snow_systems_input_Keycodes.key_d = 100;
snow_systems_input_Keycodes.key_e = 101;
snow_systems_input_Keycodes.key_f = 102;
snow_systems_input_Keycodes.key_g = 103;
snow_systems_input_Keycodes.key_h = 104;
snow_systems_input_Keycodes.key_i = 105;
snow_systems_input_Keycodes.key_j = 106;
snow_systems_input_Keycodes.key_k = 107;
snow_systems_input_Keycodes.key_l = 108;
snow_systems_input_Keycodes.key_m = 109;
snow_systems_input_Keycodes.key_n = 110;
snow_systems_input_Keycodes.key_o = 111;
snow_systems_input_Keycodes.key_p = 112;
snow_systems_input_Keycodes.key_q = 113;
snow_systems_input_Keycodes.key_r = 114;
snow_systems_input_Keycodes.key_s = 115;
snow_systems_input_Keycodes.key_t = 116;
snow_systems_input_Keycodes.key_u = 117;
snow_systems_input_Keycodes.key_v = 118;
snow_systems_input_Keycodes.key_w = 119;
snow_systems_input_Keycodes.key_x = 120;
snow_systems_input_Keycodes.key_y = 121;
snow_systems_input_Keycodes.key_z = 122;
snow_systems_input_Keycodes.capslock = 1073741881;
snow_systems_input_Keycodes.f1 = 1073741882;
snow_systems_input_Keycodes.f2 = 1073741883;
snow_systems_input_Keycodes.f3 = 1073741884;
snow_systems_input_Keycodes.f4 = 1073741885;
snow_systems_input_Keycodes.f5 = 1073741886;
snow_systems_input_Keycodes.f6 = 1073741887;
snow_systems_input_Keycodes.f7 = 1073741888;
snow_systems_input_Keycodes.f8 = 1073741889;
snow_systems_input_Keycodes.f9 = 1073741890;
snow_systems_input_Keycodes.f10 = 1073741891;
snow_systems_input_Keycodes.f11 = 1073741892;
snow_systems_input_Keycodes.f12 = 1073741893;
snow_systems_input_Keycodes.printscreen = 1073741894;
snow_systems_input_Keycodes.scrolllock = 1073741895;
snow_systems_input_Keycodes.pause = 1073741896;
snow_systems_input_Keycodes.insert = 1073741897;
snow_systems_input_Keycodes.home = 1073741898;
snow_systems_input_Keycodes.pageup = 1073741899;
snow_systems_input_Keycodes["delete"] = 127;
snow_systems_input_Keycodes.end = 1073741901;
snow_systems_input_Keycodes.pagedown = 1073741902;
snow_systems_input_Keycodes.right = 1073741903;
snow_systems_input_Keycodes.left = 1073741904;
snow_systems_input_Keycodes.down = 1073741905;
snow_systems_input_Keycodes.up = 1073741906;
snow_systems_input_Keycodes.numlockclear = 1073741907;
snow_systems_input_Keycodes.kp_divide = 1073741908;
snow_systems_input_Keycodes.kp_multiply = 1073741909;
snow_systems_input_Keycodes.kp_minus = 1073741910;
snow_systems_input_Keycodes.kp_plus = 1073741911;
snow_systems_input_Keycodes.kp_enter = 1073741912;
snow_systems_input_Keycodes.kp_1 = 1073741913;
snow_systems_input_Keycodes.kp_2 = 1073741914;
snow_systems_input_Keycodes.kp_3 = 1073741915;
snow_systems_input_Keycodes.kp_4 = 1073741916;
snow_systems_input_Keycodes.kp_5 = 1073741917;
snow_systems_input_Keycodes.kp_6 = 1073741918;
snow_systems_input_Keycodes.kp_7 = 1073741919;
snow_systems_input_Keycodes.kp_8 = 1073741920;
snow_systems_input_Keycodes.kp_9 = 1073741921;
snow_systems_input_Keycodes.kp_0 = 1073741922;
snow_systems_input_Keycodes.kp_period = 1073741923;
snow_systems_input_Keycodes.application = 1073741925;
snow_systems_input_Keycodes.power = 1073741926;
snow_systems_input_Keycodes.kp_equals = 1073741927;
snow_systems_input_Keycodes.f13 = 1073741928;
snow_systems_input_Keycodes.f14 = 1073741929;
snow_systems_input_Keycodes.f15 = 1073741930;
snow_systems_input_Keycodes.f16 = 1073741931;
snow_systems_input_Keycodes.f17 = 1073741932;
snow_systems_input_Keycodes.f18 = 1073741933;
snow_systems_input_Keycodes.f19 = 1073741934;
snow_systems_input_Keycodes.f20 = 1073741935;
snow_systems_input_Keycodes.f21 = 1073741936;
snow_systems_input_Keycodes.f22 = 1073741937;
snow_systems_input_Keycodes.f23 = 1073741938;
snow_systems_input_Keycodes.f24 = 1073741939;
snow_systems_input_Keycodes.execute = 1073741940;
snow_systems_input_Keycodes.help = 1073741941;
snow_systems_input_Keycodes.menu = 1073741942;
snow_systems_input_Keycodes.select = 1073741943;
snow_systems_input_Keycodes.stop = 1073741944;
snow_systems_input_Keycodes.again = 1073741945;
snow_systems_input_Keycodes.undo = 1073741946;
snow_systems_input_Keycodes.cut = 1073741947;
snow_systems_input_Keycodes.copy = 1073741948;
snow_systems_input_Keycodes.paste = 1073741949;
snow_systems_input_Keycodes.find = 1073741950;
snow_systems_input_Keycodes.mute = 1073741951;
snow_systems_input_Keycodes.volumeup = 1073741952;
snow_systems_input_Keycodes.volumedown = 1073741953;
snow_systems_input_Keycodes.kp_comma = 1073741957;
snow_systems_input_Keycodes.kp_equalsas400 = 1073741958;
snow_systems_input_Keycodes.alterase = 1073741977;
snow_systems_input_Keycodes.sysreq = 1073741978;
snow_systems_input_Keycodes.cancel = 1073741979;
snow_systems_input_Keycodes.clear = 1073741980;
snow_systems_input_Keycodes.prior = 1073741981;
snow_systems_input_Keycodes.return2 = 1073741982;
snow_systems_input_Keycodes.separator = 1073741983;
snow_systems_input_Keycodes.out = 1073741984;
snow_systems_input_Keycodes.oper = 1073741985;
snow_systems_input_Keycodes.clearagain = 1073741986;
snow_systems_input_Keycodes.crsel = 1073741987;
snow_systems_input_Keycodes.exsel = 1073741988;
snow_systems_input_Keycodes.kp_00 = 1073742000;
snow_systems_input_Keycodes.kp_000 = 1073742001;
snow_systems_input_Keycodes.thousandsseparator = 1073742002;
snow_systems_input_Keycodes.decimalseparator = 1073742003;
snow_systems_input_Keycodes.currencyunit = 1073742004;
snow_systems_input_Keycodes.currencysubunit = 1073742005;
snow_systems_input_Keycodes.kp_leftparen = 1073742006;
snow_systems_input_Keycodes.kp_rightparen = 1073742007;
snow_systems_input_Keycodes.kp_leftbrace = 1073742008;
snow_systems_input_Keycodes.kp_rightbrace = 1073742009;
snow_systems_input_Keycodes.kp_tab = 1073742010;
snow_systems_input_Keycodes.kp_backspace = 1073742011;
snow_systems_input_Keycodes.kp_a = 1073742012;
snow_systems_input_Keycodes.kp_b = 1073742013;
snow_systems_input_Keycodes.kp_c = 1073742014;
snow_systems_input_Keycodes.kp_d = 1073742015;
snow_systems_input_Keycodes.kp_e = 1073742016;
snow_systems_input_Keycodes.kp_f = 1073742017;
snow_systems_input_Keycodes.kp_xor = 1073742018;
snow_systems_input_Keycodes.kp_power = 1073742019;
snow_systems_input_Keycodes.kp_percent = 1073742020;
snow_systems_input_Keycodes.kp_less = 1073742021;
snow_systems_input_Keycodes.kp_greater = 1073742022;
snow_systems_input_Keycodes.kp_ampersand = 1073742023;
snow_systems_input_Keycodes.kp_dblampersand = 1073742024;
snow_systems_input_Keycodes.kp_verticalbar = 1073742025;
snow_systems_input_Keycodes.kp_dblverticalbar = 1073742026;
snow_systems_input_Keycodes.kp_colon = 1073742027;
snow_systems_input_Keycodes.kp_hash = 1073742028;
snow_systems_input_Keycodes.kp_space = 1073742029;
snow_systems_input_Keycodes.kp_at = 1073742030;
snow_systems_input_Keycodes.kp_exclam = 1073742031;
snow_systems_input_Keycodes.kp_memstore = 1073742032;
snow_systems_input_Keycodes.kp_memrecall = 1073742033;
snow_systems_input_Keycodes.kp_memclear = 1073742034;
snow_systems_input_Keycodes.kp_memadd = 1073742035;
snow_systems_input_Keycodes.kp_memsubtract = 1073742036;
snow_systems_input_Keycodes.kp_memmultiply = 1073742037;
snow_systems_input_Keycodes.kp_memdivide = 1073742038;
snow_systems_input_Keycodes.kp_plusminus = 1073742039;
snow_systems_input_Keycodes.kp_clear = 1073742040;
snow_systems_input_Keycodes.kp_clearentry = 1073742041;
snow_systems_input_Keycodes.kp_binary = 1073742042;
snow_systems_input_Keycodes.kp_octal = 1073742043;
snow_systems_input_Keycodes.kp_decimal = 1073742044;
snow_systems_input_Keycodes.kp_hexadecimal = 1073742045;
snow_systems_input_Keycodes.lctrl = 1073742048;
snow_systems_input_Keycodes.lshift = 1073742049;
snow_systems_input_Keycodes.lalt = 1073742050;
snow_systems_input_Keycodes.lmeta = 1073742051;
snow_systems_input_Keycodes.rctrl = 1073742052;
snow_systems_input_Keycodes.rshift = 1073742053;
snow_systems_input_Keycodes.ralt = 1073742054;
snow_systems_input_Keycodes.rmeta = 1073742055;
snow_systems_input_Keycodes.mode = 1073742081;
snow_systems_input_Keycodes.audionext = 1073742082;
snow_systems_input_Keycodes.audioprev = 1073742083;
snow_systems_input_Keycodes.audiostop = 1073742084;
snow_systems_input_Keycodes.audioplay = 1073742085;
snow_systems_input_Keycodes.audiomute = 1073742086;
snow_systems_input_Keycodes.mediaselect = 1073742087;
snow_systems_input_Keycodes.www = 1073742088;
snow_systems_input_Keycodes.mail = 1073742089;
snow_systems_input_Keycodes.calculator = 1073742090;
snow_systems_input_Keycodes.computer = 1073742091;
snow_systems_input_Keycodes.ac_search = 1073742092;
snow_systems_input_Keycodes.ac_home = 1073742093;
snow_systems_input_Keycodes.ac_back = 1073742094;
snow_systems_input_Keycodes.ac_forward = 1073742095;
snow_systems_input_Keycodes.ac_stop = 1073742096;
snow_systems_input_Keycodes.ac_refresh = 1073742097;
snow_systems_input_Keycodes.ac_bookmarks = 1073742098;
snow_systems_input_Keycodes.brightnessdown = 1073742099;
snow_systems_input_Keycodes.brightnessup = 1073742100;
snow_systems_input_Keycodes.displayswitch = 1073742101;
snow_systems_input_Keycodes.kbdillumtoggle = 1073742102;
snow_systems_input_Keycodes.kbdillumdown = 1073742103;
snow_systems_input_Keycodes.kbdillumup = 1073742104;
snow_systems_input_Keycodes.eject = 1073742105;
snow_systems_input_Keycodes.sleep = 1073742106;
snow_systems_input_Scancodes.MASK = 1073741824;
snow_systems_input_Scancodes.unknown = 0;
snow_systems_input_Scancodes.key_a = 4;
snow_systems_input_Scancodes.key_b = 5;
snow_systems_input_Scancodes.key_c = 6;
snow_systems_input_Scancodes.key_d = 7;
snow_systems_input_Scancodes.key_e = 8;
snow_systems_input_Scancodes.key_f = 9;
snow_systems_input_Scancodes.key_g = 10;
snow_systems_input_Scancodes.key_h = 11;
snow_systems_input_Scancodes.key_i = 12;
snow_systems_input_Scancodes.key_j = 13;
snow_systems_input_Scancodes.key_k = 14;
snow_systems_input_Scancodes.key_l = 15;
snow_systems_input_Scancodes.key_m = 16;
snow_systems_input_Scancodes.key_n = 17;
snow_systems_input_Scancodes.key_o = 18;
snow_systems_input_Scancodes.key_p = 19;
snow_systems_input_Scancodes.key_q = 20;
snow_systems_input_Scancodes.key_r = 21;
snow_systems_input_Scancodes.key_s = 22;
snow_systems_input_Scancodes.key_t = 23;
snow_systems_input_Scancodes.key_u = 24;
snow_systems_input_Scancodes.key_v = 25;
snow_systems_input_Scancodes.key_w = 26;
snow_systems_input_Scancodes.key_x = 27;
snow_systems_input_Scancodes.key_y = 28;
snow_systems_input_Scancodes.key_z = 29;
snow_systems_input_Scancodes.key_1 = 30;
snow_systems_input_Scancodes.key_2 = 31;
snow_systems_input_Scancodes.key_3 = 32;
snow_systems_input_Scancodes.key_4 = 33;
snow_systems_input_Scancodes.key_5 = 34;
snow_systems_input_Scancodes.key_6 = 35;
snow_systems_input_Scancodes.key_7 = 36;
snow_systems_input_Scancodes.key_8 = 37;
snow_systems_input_Scancodes.key_9 = 38;
snow_systems_input_Scancodes.key_0 = 39;
snow_systems_input_Scancodes.enter = 40;
snow_systems_input_Scancodes.escape = 41;
snow_systems_input_Scancodes.backspace = 42;
snow_systems_input_Scancodes.tab = 43;
snow_systems_input_Scancodes.space = 44;
snow_systems_input_Scancodes.minus = 45;
snow_systems_input_Scancodes.equals = 46;
snow_systems_input_Scancodes.leftbracket = 47;
snow_systems_input_Scancodes.rightbracket = 48;
snow_systems_input_Scancodes.backslash = 49;
snow_systems_input_Scancodes.nonushash = 50;
snow_systems_input_Scancodes.semicolon = 51;
snow_systems_input_Scancodes.apostrophe = 52;
snow_systems_input_Scancodes.grave = 53;
snow_systems_input_Scancodes.comma = 54;
snow_systems_input_Scancodes.period = 55;
snow_systems_input_Scancodes.slash = 56;
snow_systems_input_Scancodes.capslock = 57;
snow_systems_input_Scancodes.f1 = 58;
snow_systems_input_Scancodes.f2 = 59;
snow_systems_input_Scancodes.f3 = 60;
snow_systems_input_Scancodes.f4 = 61;
snow_systems_input_Scancodes.f5 = 62;
snow_systems_input_Scancodes.f6 = 63;
snow_systems_input_Scancodes.f7 = 64;
snow_systems_input_Scancodes.f8 = 65;
snow_systems_input_Scancodes.f9 = 66;
snow_systems_input_Scancodes.f10 = 67;
snow_systems_input_Scancodes.f11 = 68;
snow_systems_input_Scancodes.f12 = 69;
snow_systems_input_Scancodes.printscreen = 70;
snow_systems_input_Scancodes.scrolllock = 71;
snow_systems_input_Scancodes.pause = 72;
snow_systems_input_Scancodes.insert = 73;
snow_systems_input_Scancodes.home = 74;
snow_systems_input_Scancodes.pageup = 75;
snow_systems_input_Scancodes["delete"] = 76;
snow_systems_input_Scancodes.end = 77;
snow_systems_input_Scancodes.pagedown = 78;
snow_systems_input_Scancodes.right = 79;
snow_systems_input_Scancodes.left = 80;
snow_systems_input_Scancodes.down = 81;
snow_systems_input_Scancodes.up = 82;
snow_systems_input_Scancodes.numlockclear = 83;
snow_systems_input_Scancodes.kp_divide = 84;
snow_systems_input_Scancodes.kp_multiply = 85;
snow_systems_input_Scancodes.kp_minus = 86;
snow_systems_input_Scancodes.kp_plus = 87;
snow_systems_input_Scancodes.kp_enter = 88;
snow_systems_input_Scancodes.kp_1 = 89;
snow_systems_input_Scancodes.kp_2 = 90;
snow_systems_input_Scancodes.kp_3 = 91;
snow_systems_input_Scancodes.kp_4 = 92;
snow_systems_input_Scancodes.kp_5 = 93;
snow_systems_input_Scancodes.kp_6 = 94;
snow_systems_input_Scancodes.kp_7 = 95;
snow_systems_input_Scancodes.kp_8 = 96;
snow_systems_input_Scancodes.kp_9 = 97;
snow_systems_input_Scancodes.kp_0 = 98;
snow_systems_input_Scancodes.kp_period = 99;
snow_systems_input_Scancodes.nonusbackslash = 100;
snow_systems_input_Scancodes.application = 101;
snow_systems_input_Scancodes.power = 102;
snow_systems_input_Scancodes.kp_equals = 103;
snow_systems_input_Scancodes.f13 = 104;
snow_systems_input_Scancodes.f14 = 105;
snow_systems_input_Scancodes.f15 = 106;
snow_systems_input_Scancodes.f16 = 107;
snow_systems_input_Scancodes.f17 = 108;
snow_systems_input_Scancodes.f18 = 109;
snow_systems_input_Scancodes.f19 = 110;
snow_systems_input_Scancodes.f20 = 111;
snow_systems_input_Scancodes.f21 = 112;
snow_systems_input_Scancodes.f22 = 113;
snow_systems_input_Scancodes.f23 = 114;
snow_systems_input_Scancodes.f24 = 115;
snow_systems_input_Scancodes.execute = 116;
snow_systems_input_Scancodes.help = 117;
snow_systems_input_Scancodes.menu = 118;
snow_systems_input_Scancodes.select = 119;
snow_systems_input_Scancodes.stop = 120;
snow_systems_input_Scancodes.again = 121;
snow_systems_input_Scancodes.undo = 122;
snow_systems_input_Scancodes.cut = 123;
snow_systems_input_Scancodes.copy = 124;
snow_systems_input_Scancodes.paste = 125;
snow_systems_input_Scancodes.find = 126;
snow_systems_input_Scancodes.mute = 127;
snow_systems_input_Scancodes.volumeup = 128;
snow_systems_input_Scancodes.volumedown = 129;
snow_systems_input_Scancodes.kp_comma = 133;
snow_systems_input_Scancodes.kp_equalsas400 = 134;
snow_systems_input_Scancodes.international1 = 135;
snow_systems_input_Scancodes.international2 = 136;
snow_systems_input_Scancodes.international3 = 137;
snow_systems_input_Scancodes.international4 = 138;
snow_systems_input_Scancodes.international5 = 139;
snow_systems_input_Scancodes.international6 = 140;
snow_systems_input_Scancodes.international7 = 141;
snow_systems_input_Scancodes.international8 = 142;
snow_systems_input_Scancodes.international9 = 143;
snow_systems_input_Scancodes.lang1 = 144;
snow_systems_input_Scancodes.lang2 = 145;
snow_systems_input_Scancodes.lang3 = 146;
snow_systems_input_Scancodes.lang4 = 147;
snow_systems_input_Scancodes.lang5 = 148;
snow_systems_input_Scancodes.lang6 = 149;
snow_systems_input_Scancodes.lang7 = 150;
snow_systems_input_Scancodes.lang8 = 151;
snow_systems_input_Scancodes.lang9 = 152;
snow_systems_input_Scancodes.alterase = 153;
snow_systems_input_Scancodes.sysreq = 154;
snow_systems_input_Scancodes.cancel = 155;
snow_systems_input_Scancodes.clear = 156;
snow_systems_input_Scancodes.prior = 157;
snow_systems_input_Scancodes.return2 = 158;
snow_systems_input_Scancodes.separator = 159;
snow_systems_input_Scancodes.out = 160;
snow_systems_input_Scancodes.oper = 161;
snow_systems_input_Scancodes.clearagain = 162;
snow_systems_input_Scancodes.crsel = 163;
snow_systems_input_Scancodes.exsel = 164;
snow_systems_input_Scancodes.kp_00 = 176;
snow_systems_input_Scancodes.kp_000 = 177;
snow_systems_input_Scancodes.thousandsseparator = 178;
snow_systems_input_Scancodes.decimalseparator = 179;
snow_systems_input_Scancodes.currencyunit = 180;
snow_systems_input_Scancodes.currencysubunit = 181;
snow_systems_input_Scancodes.kp_leftparen = 182;
snow_systems_input_Scancodes.kp_rightparen = 183;
snow_systems_input_Scancodes.kp_leftbrace = 184;
snow_systems_input_Scancodes.kp_rightbrace = 185;
snow_systems_input_Scancodes.kp_tab = 186;
snow_systems_input_Scancodes.kp_backspace = 187;
snow_systems_input_Scancodes.kp_a = 188;
snow_systems_input_Scancodes.kp_b = 189;
snow_systems_input_Scancodes.kp_c = 190;
snow_systems_input_Scancodes.kp_d = 191;
snow_systems_input_Scancodes.kp_e = 192;
snow_systems_input_Scancodes.kp_f = 193;
snow_systems_input_Scancodes.kp_xor = 194;
snow_systems_input_Scancodes.kp_power = 195;
snow_systems_input_Scancodes.kp_percent = 196;
snow_systems_input_Scancodes.kp_less = 197;
snow_systems_input_Scancodes.kp_greater = 198;
snow_systems_input_Scancodes.kp_ampersand = 199;
snow_systems_input_Scancodes.kp_dblampersand = 200;
snow_systems_input_Scancodes.kp_verticalbar = 201;
snow_systems_input_Scancodes.kp_dblverticalbar = 202;
snow_systems_input_Scancodes.kp_colon = 203;
snow_systems_input_Scancodes.kp_hash = 204;
snow_systems_input_Scancodes.kp_space = 205;
snow_systems_input_Scancodes.kp_at = 206;
snow_systems_input_Scancodes.kp_exclam = 207;
snow_systems_input_Scancodes.kp_memstore = 208;
snow_systems_input_Scancodes.kp_memrecall = 209;
snow_systems_input_Scancodes.kp_memclear = 210;
snow_systems_input_Scancodes.kp_memadd = 211;
snow_systems_input_Scancodes.kp_memsubtract = 212;
snow_systems_input_Scancodes.kp_memmultiply = 213;
snow_systems_input_Scancodes.kp_memdivide = 214;
snow_systems_input_Scancodes.kp_plusminus = 215;
snow_systems_input_Scancodes.kp_clear = 216;
snow_systems_input_Scancodes.kp_clearentry = 217;
snow_systems_input_Scancodes.kp_binary = 218;
snow_systems_input_Scancodes.kp_octal = 219;
snow_systems_input_Scancodes.kp_decimal = 220;
snow_systems_input_Scancodes.kp_hexadecimal = 221;
snow_systems_input_Scancodes.lctrl = 224;
snow_systems_input_Scancodes.lshift = 225;
snow_systems_input_Scancodes.lalt = 226;
snow_systems_input_Scancodes.lmeta = 227;
snow_systems_input_Scancodes.rctrl = 228;
snow_systems_input_Scancodes.rshift = 229;
snow_systems_input_Scancodes.ralt = 230;
snow_systems_input_Scancodes.rmeta = 231;
snow_systems_input_Scancodes.mode = 257;
snow_systems_input_Scancodes.audionext = 258;
snow_systems_input_Scancodes.audioprev = 259;
snow_systems_input_Scancodes.audiostop = 260;
snow_systems_input_Scancodes.audioplay = 261;
snow_systems_input_Scancodes.audiomute = 262;
snow_systems_input_Scancodes.mediaselect = 263;
snow_systems_input_Scancodes.www = 264;
snow_systems_input_Scancodes.mail = 265;
snow_systems_input_Scancodes.calculator = 266;
snow_systems_input_Scancodes.computer = 267;
snow_systems_input_Scancodes.ac_search = 268;
snow_systems_input_Scancodes.ac_home = 269;
snow_systems_input_Scancodes.ac_back = 270;
snow_systems_input_Scancodes.ac_forward = 271;
snow_systems_input_Scancodes.ac_stop = 272;
snow_systems_input_Scancodes.ac_refresh = 273;
snow_systems_input_Scancodes.ac_bookmarks = 274;
snow_systems_input_Scancodes.brightnessdown = 275;
snow_systems_input_Scancodes.brightnessup = 276;
snow_systems_input_Scancodes.displayswitch = 277;
snow_systems_input_Scancodes.kbdillumtoggle = 278;
snow_systems_input_Scancodes.kbdillumdown = 279;
snow_systems_input_Scancodes.kbdillumup = 280;
snow_systems_input_Scancodes.eject = 281;
snow_systems_input_Scancodes.sleep = 282;
snow_systems_input_Scancodes.app1 = 283;
snow_systems_input_Scancodes.app2 = 284;
snow_systems_input_Scancodes.scancode_names = [null,null,null,null,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0","Enter","Escape","Backspace","Tab","Space","-","=","[","]","\\","#",";","'","`",",",".","/","CapsLock","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","PrintScreen","ScrollLock","Pause","Insert","Home","PageUp","Delete","End","PageDown","Right","Left","Down","Up","Numlock","Keypad /","Keypad *","Keypad -","Keypad +","Keypad Enter","Keypad 1","Keypad 2","Keypad 3","Keypad 4","Keypad 5","Keypad 6","Keypad 7","Keypad 8","Keypad 9","Keypad 0","Keypad .",null,"Application","Power","Keypad =","F13","F14","F15","F16","F17","F18","F19","F20","F21","F22","F23","F24","Execute","Help","Menu","Select","Stop","Again","Undo","Cut","Copy","Paste","Find","Mute","VolumeUp","VolumeDown",null,null,null,"Keypad ,","Keypad = (AS400)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"AltErase","SysReq","Cancel","Clear","Prior","Enter","Separator","Out","Oper","Clear / Again","CrSel","ExSel",null,null,null,null,null,null,null,null,null,null,null,"Keypad 00","Keypad 000","ThousandsSeparator","DecimalSeparator","CurrencyUnit","CurrencySubUnit","Keypad (","Keypad )","Keypad {","Keypad }","Keypad Tab","Keypad Backspace","Keypad A","Keypad B","Keypad C","Keypad D","Keypad E","Keypad F","Keypad XOR","Keypad ^","Keypad %","Keypad <","Keypad >","Keypad &","Keypad &&","Keypad |","Keypad ||","Keypad :","Keypad #","Keypad Space","Keypad @","Keypad !","Keypad MemStore","Keypad MemRecall","Keypad MemClear","Keypad MemAdd","Keypad MemSubtract","Keypad MemMultiply","Keypad MemDivide","Keypad +/-","Keypad Clear","Keypad ClearEntry","Keypad Binary","Keypad Octal","Keypad Decimal","Keypad Hexadecimal",null,null,"Left Ctrl","Left Shift","Left Alt","Left Meta","Right Ctrl","Right Shift","Right Alt","Right Meta",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"ModeSwitch","AudioNext","AudioPrev","AudioStop","AudioPlay","AudioMute","MediaSelect","WWW","Mail","Calculator","Computer","AC Search","AC Home","AC Back","AC Forward","AC Stop","AC Refresh","AC Bookmarks","BrightnessDown","BrightnessUp","DisplaySwitch","KBDIllumToggle","KBDIllumDown","KBDIllumUp","Eject","Sleep"];
snow_types_Config.app_runtime = "snow.core.web.Runtime";
snow_types_Config.app_config = "config.json";
snow_types_Config.app_ident = "com.haxiomic.gpufluid";
snow_types_Config.app_main = "Main";
snow_types_Config.module_assets = "snow.core.web.assets.Assets";
snow_types_Config.module_audio = "snow.modules.webaudio.Audio";
snow_types_Config.module_io = "snow.core.web.io.IO";
snow_types_Config.extensions = [];
snow_types__$Types_AssetType_$Impl_$.at_unknown = 0;
snow_types__$Types_AssetType_$Impl_$.at_bytes = 1;
snow_types__$Types_AssetType_$Impl_$.at_text = 2;
snow_types__$Types_AssetType_$Impl_$.at_json = 3;
snow_types__$Types_AssetType_$Impl_$.at_image = 4;
snow_types__$Types_AssetType_$Impl_$.at_audio = 5;
snow_types__$Types_AudioFormatType_$Impl_$.af_unknown = 0;
snow_types__$Types_AudioFormatType_$Impl_$.af_custom = 1;
snow_types__$Types_AudioFormatType_$Impl_$.af_ogg = 2;
snow_types__$Types_AudioFormatType_$Impl_$.af_wav = 3;
snow_types__$Types_AudioFormatType_$Impl_$.af_pcm = 4;
snow_types__$Types_AudioEvent_$Impl_$.ae_end = 0;
snow_types__$Types_AudioEvent_$Impl_$.ae_destroyed = 1;
snow_types__$Types_AudioEvent_$Impl_$.ae_destroyed_source = 2;
snow_types__$Types_AudioState_$Impl_$.as_invalid = -1;
snow_types__$Types_AudioState_$Impl_$.as_paused = 0;
snow_types__$Types_AudioState_$Impl_$.as_playing = 1;
snow_types__$Types_AudioState_$Impl_$.as_stopped = 2;
snow_types__$Types_OpenGLProfile_$Impl_$.compatibility = 0;
snow_types__$Types_OpenGLProfile_$Impl_$.core = 1;
snow_types__$Types_OpenGLProfile_$Impl_$.gles = 2;
snow_types__$Types_KeyEventType_$Impl_$.ke_unknown = 0;
snow_types__$Types_KeyEventType_$Impl_$.ke_down = 1;
snow_types__$Types_KeyEventType_$Impl_$.ke_up = 2;
snow_types__$Types_MouseEventType_$Impl_$.me_unknown = 0;
snow_types__$Types_MouseEventType_$Impl_$.me_move = 1;
snow_types__$Types_MouseEventType_$Impl_$.me_down = 2;
snow_types__$Types_MouseEventType_$Impl_$.me_up = 3;
snow_types__$Types_MouseEventType_$Impl_$.me_wheel = 4;
snow_types__$Types_TouchEventType_$Impl_$.te_unknown = 0;
snow_types__$Types_TouchEventType_$Impl_$.te_move = 1;
snow_types__$Types_TouchEventType_$Impl_$.te_down = 2;
snow_types__$Types_TouchEventType_$Impl_$.te_up = 3;
snow_types__$Types_GamepadEventType_$Impl_$.ge_unknown = 0;
snow_types__$Types_GamepadEventType_$Impl_$.ge_axis = 1;
snow_types__$Types_GamepadEventType_$Impl_$.ge_down = 2;
snow_types__$Types_GamepadEventType_$Impl_$.ge_up = 3;
snow_types__$Types_GamepadEventType_$Impl_$.ge_device = 4;
snow_types__$Types_TextEventType_$Impl_$.te_unknown = 0;
snow_types__$Types_TextEventType_$Impl_$.te_edit = 1;
snow_types__$Types_TextEventType_$Impl_$.te_input = 2;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.ge_unknown = 0;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.ge_device_added = 1;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.ge_device_removed = 2;
snow_types__$Types_GamepadDeviceEventType_$Impl_$.ge_device_remapped = 3;
snow_types__$Types_SystemEventType_$Impl_$.se_unknown = 0;
snow_types__$Types_SystemEventType_$Impl_$.se_init = 1;
snow_types__$Types_SystemEventType_$Impl_$.se_ready = 2;
snow_types__$Types_SystemEventType_$Impl_$.se_tick = 3;
snow_types__$Types_SystemEventType_$Impl_$.se_freeze = 4;
snow_types__$Types_SystemEventType_$Impl_$.se_unfreeze = 5;
snow_types__$Types_SystemEventType_$Impl_$.se_suspend = 6;
snow_types__$Types_SystemEventType_$Impl_$.se_shutdown = 7;
snow_types__$Types_SystemEventType_$Impl_$.se_window = 8;
snow_types__$Types_SystemEventType_$Impl_$.se_input = 9;
snow_types__$Types_SystemEventType_$Impl_$.se_quit = 10;
snow_types__$Types_SystemEventType_$Impl_$.se_app_terminating = 11;
snow_types__$Types_SystemEventType_$Impl_$.se_app_lowmemory = 12;
snow_types__$Types_SystemEventType_$Impl_$.se_app_willenterbackground = 13;
snow_types__$Types_SystemEventType_$Impl_$.se_app_didenterbackground = 14;
snow_types__$Types_SystemEventType_$Impl_$.se_app_willenterforeground = 15;
snow_types__$Types_SystemEventType_$Impl_$.se_app_didenterforeground = 16;
snow_types__$Types_WindowEventType_$Impl_$.we_unknown = 0;
snow_types__$Types_WindowEventType_$Impl_$.we_shown = 1;
snow_types__$Types_WindowEventType_$Impl_$.we_hidden = 2;
snow_types__$Types_WindowEventType_$Impl_$.we_exposed = 3;
snow_types__$Types_WindowEventType_$Impl_$.we_moved = 4;
snow_types__$Types_WindowEventType_$Impl_$.we_resized = 5;
snow_types__$Types_WindowEventType_$Impl_$.we_size_changed = 6;
snow_types__$Types_WindowEventType_$Impl_$.we_minimized = 7;
snow_types__$Types_WindowEventType_$Impl_$.we_maximized = 8;
snow_types__$Types_WindowEventType_$Impl_$.we_restored = 9;
snow_types__$Types_WindowEventType_$Impl_$.we_enter = 10;
snow_types__$Types_WindowEventType_$Impl_$.we_leave = 11;
snow_types__$Types_WindowEventType_$Impl_$.we_focus_gained = 12;
snow_types__$Types_WindowEventType_$Impl_$.we_focus_lost = 13;
snow_types__$Types_WindowEventType_$Impl_$.we_close = 14;
snow_types__$Types_InputEventType_$Impl_$.ie_unknown = 0;
snow_types__$Types_InputEventType_$Impl_$.ie_key = 1;
snow_types__$Types_InputEventType_$Impl_$.ie_text = 2;
snow_types__$Types_InputEventType_$Impl_$.ie_mouse = 3;
snow_types__$Types_InputEventType_$Impl_$.ie_touch = 4;
snow_types__$Types_InputEventType_$Impl_$.ie_gamepad = 5;
snow_types__$Types_InputEventType_$Impl_$.ie_joystick = 6;
snow_App.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
}