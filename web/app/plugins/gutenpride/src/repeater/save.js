import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (

		<section { ...useBlockProps.save() }  className="sec5">

		<h1 className="sec5__titre"><b>{attributes?.title}</b></h1>
		
		<div className="user__text flex">

		{attributes?.content?.map((obj, index)=> (
			<div className="user">
				<img src={attributes?.imageUrl}/>
				<h1><b>{obj?.nom}</b></h1>
				<h2> <span style="color: #EC2C7B;">❝</span>{obj?.com}<span style="color: #EC2C7B;"> ❞ </span> </h2>
			</div>
		))}
		  
		</div>

		  <div className="flex circle">
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="15" cy="15" r="15" fill="#EC2C7B"/> </svg>
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="15" cy="15" r="15" fill="#001A49"/> </svg>
			<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <circle cx="15" cy="15" r="15" fill="#001A49"/> </svg>
		  </div>


	  </section>

	);
}
