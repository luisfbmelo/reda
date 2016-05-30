import React from 'react';
import { Component } from 'react';

const possibleExt = [ 'swf', 'mp3', 'wav', 'wma', 'jar' ];

/**
 *
 *	Helper functions
 * 
 */
//
//	Show placeholder
//
const showPlaceholder = (graphicsPath, type) => {
	return <img src={graphicsPath + "/" + type + ".jpg"} className="img-responsive" />
}

//
//	Check if is an embedable extension
//
const checkExtension = (ext) => {	
	return possibleExt.indexOf(ext)>=0;
}

//
//	Include SWF Files
//
const includeSwf = (filePath, fileName) => {
	return <embed src={filePath+"/"+fileName} quality="high" type="application/x-shockwave-flash" width="100%" height="300px" SCALE="exactfit" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>;
}

/**
 * 
 * Data type returns
 * 
 */
var video = (meta) => {
	const { embed } = meta;

	if (embed){
		return <div dangerouslySetInnerHTML={{__html: embed}} className="embed-content" /> || showPlaceholder("video");
	}

	return showPlaceholder(meta.graphicsPath, "video");
}

const image = (meta) => {
	if (meta.file){
		const { name, extension } = meta.file;
		return <img src={meta.filesPath+"/"+name+"."+extension} className="img-responsive" />
	}	

	return showPlaceholder(meta.graphicsPath, "image");
}

const audio = (meta) => {
	const { embed } = meta;

	if (meta.file){
		const { name, extension } = meta.file;

		if (checkExtension(meta.file.extension) && name && extension){
			return includeSwf(meta.filesPath, name+"."+extension);
		}
	}

	if (embed){
		return <div dangerouslySetInnerHTML={{__html: embed}} className="embed-content" /> || showPlaceholder("audio");
	}

	return showPlaceholder(meta.graphicsPath, "audio");
}

const simulation = (meta) => {
	const { embed } = meta;

	if (meta.file){
		const { name, extension } = meta.file;

		if (checkExtension(meta.file.extension) && name && extension){
			return includeSwf(meta.filesPath, name+"."+extension);
		}
	}

	if (embed){
		return <div dangerouslySetInnerHTML={{__html: embed}} className="embed-content" /> || showPlaceholder("simulation");
	}	

	return showPlaceholder(meta.graphicsPath, "simulation");
}

const animation = (meta) => {
	const { embed } = meta;

	if (meta.file){
		const { name, extension } = meta.file;

		if (checkExtension(meta.file.extension) && name && extension){
			return includeSwf(meta.filesPath, name+"."+extension);
		}
	}

	if (embed){
		return <div dangerouslySetInnerHTML={{__html: embed}} className="embed-content" /> || showPlaceholder("animation");
	}

	return showPlaceholder(meta.graphicsPath, "animation");
}

const text = (meta) => {
	return showPlaceholder(meta.graphicsPath, "text");
}

const calc = (meta) => {
	return showPlaceholder(meta.graphicsPath, "calc");
}

const game = (meta) => {
	const { embed } = meta;
	if (meta.file){
		const { name, extension } = meta.file;

		if (checkExtension(meta.file.extension) && name && extension){
			return includeSwf(meta.filesPath, name+"."+extension);
		}
	}

	if (embed){
		return <div dangerouslySetInnerHTML={{__html: embed}} className="embed-content" /> || showPlaceholder("animation");
	}

	return showPlaceholder(meta.graphicsPath, "game");
}

//
//	Convert given TYPE to FUNCTION and execute with given DATA
//
const evalFunc = (func, props) => {
	return eval(func).call(this, props);
}

export default (props) => {
	const { type, file } = props;
	return (
		<div className="mediadisplay-container">
			{type ? evalFunc(type, props) : ""}
		</div>
	);
}