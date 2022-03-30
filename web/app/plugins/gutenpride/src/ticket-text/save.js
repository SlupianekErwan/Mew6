import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		
		<section { ...useBlockProps.save() } className="sec4 flex" >

			<img src={attributes?.imageUrl} alt=''/>	

			<div className="ticket__text">
				<h1>{attributes?.title}</h1>
				<h2>{attributes?.subtitle}</h2>
				<button className="btn__sec4"><b>{attributes?.btn}</b></button>
			</div>		

		</section>

	);
}
