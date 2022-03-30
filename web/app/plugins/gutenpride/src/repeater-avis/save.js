import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (

		<section { ...useBlockProps.save() }  className="sec6">

		<h1>{attributes?.title}</h1>
		
		<div class="question__text">

		{attributes?.content?.map((obj, index)=> (
			<div class="question flex">
				 <h2><b>{obj?.quest}</b></h2>
			</div>
			
		))}
		  
		  </div>

	  </section>

	);
}
