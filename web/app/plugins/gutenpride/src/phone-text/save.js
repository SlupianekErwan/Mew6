import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		
		<section { ...useBlockProps.save() } className="sec3 flex" >

			<div className="phone__text">
				<h1><b>{attributes?.title}</b></h1>
				<h2><b>{attributes?.subtitle}</b></h2>
				<button className="btn__sec3"><b>{attributes?.btn}</b></button>
			</div>

			<img src={attributes?.imageUrl} alt=''/>			

		</section>

	);
}
