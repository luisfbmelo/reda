import React from 'react';
import { Component } from 'react';

/**
 *
 *	Helper functions
 * 
 */
const showPlaceholder = (type) => {
	return <img src={"assets/graphics/placeholder/types/" + type + ".jpg"} className="img-responsive" />
}

const checkExtension = (fileName) => {
	let re = /(?:\.([^.]+))?$/;
	return ext = re.exec(fileName);
}

const includeSwf = (filePath, fileName) => {
	return <embed src={filePath+"/"+fileName}></embed>;
}

/**
 * 
 * Data type returns
 * 
 */
var video = (meta) => {
	return <div dangerouslySetInnerHTML={{__html: meta.embed}} className="embed-content" /> || showPlaceholder("video");
}

const image = (meta) => {
	return <img src={meta.file} className="img-responsive" />
}

const audio = () => {
	return showPlaceholder("audio");
}

const simulation = (meta) => {
	if (checkExtension("swf")){
		return includeSwf(meta.filePath, meta.file);
	}

	return showPlaceholder("simulation");
}

const animation = (meta) => {
	if (checkExtension("swf")){
		return includeSwf(meta.filePath, meta.file);
	}

	return showPlaceholder("animation");
}

const text = () => {
	return showPlaceholder("text");
}

const calc = () => {
	return showPlaceholder("calc");
}

const game = (meta) => {
	if (checkExtension("swf")){
		return includeSwf(meta.filePath, meta.file);
	}

	return showPlaceholder("game");
}

const evalFunc = (func, props) => {
	return eval(func).call(this, props);
}

export default (props) => {
	const { type } = props.data.format; 
	return (
		<span>
			{type ? evalFunc(type, props.data) : ""}
		</span>
	);
}