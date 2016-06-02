import React from 'react';
import { Component } from 'react';


//
//	Print media content
//
class TypeHelper{	

	constructor(){
		this.showPlaceholder = this.showPlaceholder.bind(this);
		this.checkExtension = this.checkExtension.bind(this);
		this.includeSwf = this.includeSwf.bind(this);
		this.printSwfOrVideo = this.printSwfOrVideo.bind(this);
		this.printImage = this.printImage.bind(this);

		// Allowed extentions to embed
		this.possibleExt = [ 'swf', 'mp3', 'wav', 'wma', 'jar' ];
	}

	//
	//	Generic placeholder
	//
	showPlaceholder(graphicsPath, type){
		return <img src={graphicsPath + "/" + type + ".jpg"} className="img-responsive" alt={type}/>
	}

	//
	//	Check if extension is OK
	//
	checkExtension(ext){			
		return this.possibleExt.indexOf(ext)>=0;
	}

	//
	//	Return swf embed
	//
	includeSwf(filePath, fileName){
		return <embed src={filePath+"/"+fileName} quality="high" type="application/x-shockwave-flash" width="100%" height="300px" SCALE="exactfit" pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>;
	}

	//
	//	Print SWF embed
	//
	printSwfOrVideo(meta, type){
		const { embed } = meta;

		if (meta.file!=undefined && meta.file!=null){
			const { name, extension } = meta.file;

			if (this.checkExtension(meta.file.extension) && name && extension){
				return this.includeSwf(meta.filesPath, name+"."+extension);
			}
		}

		if (embed!=undefined && embed!=null){
			return <div dangerouslySetInnerHTML={{__html: embed}} className="embed-content" /> || this.showPlaceholder(meta.graphicsPath, type);
		}	

		return this.showPlaceholder(meta.graphicsPath, type);
	}

	//
	//	Print as image
	//
	printImage(meta, type){
		if (meta.file){
			const { name, extension } = meta.file;
			return <img src={meta.filesPath+"/"+name+"."+extension} className="img-responsive" />
		}	

		return this.showPlaceholder(meta.graphicsPath, type);
	}
}

//
//	Return the embed object according to content type
//
class PrintMedia extends TypeHelper{
	constructor(meta, type){
		super();

		this.meta = meta,
		this.type = type;

		this.printContent = this.printContent.bind(this);
	}

	printContent(){
		switch(this.type){
			case "video":
				return this.printSwfOrVideo(this.meta, this.type);
			break;

			case "image":
				return this.printImage(this.meta, this.type);
			break;

			case "audio":
				return this.printSwfOrVideo(this.meta, this.type);
			break;

			case "simulation":
				return this.printSwfOrVideo(this.meta, this.type);
			break;

			case "animation":
				return this.printSwfOrVideo(this.meta, this.type);
			break;

			case "game":
				return this.printSwfOrVideo(this.meta, this.type);
			break;

			case "text":
				return this.showPlaceholder(this.meta.graphicsPath, this.type);
			break;

			case "calc":
				return this.showPlaceholder(this.meta.graphicsPath, this.type);
			break;
		}
	}
}

export default (props) => {
	const { type, file } = props;

	if (!props.type){
		return <div></div>		
	}

	let mediaObj = new PrintMedia(props, type);
	
	return (
		<div className="mediadisplay-container">
			{type ? mediaObj.printContent() : ""}
		</div>
	);
}