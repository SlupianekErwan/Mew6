import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<section { ...useBlockProps.save() } className="sec1" >

			<img src={attributes?.imageUrl} alt=''/>
			<div className="sec1__absolute">
				<h1 className="sec1__titre">{attributes?.title}</h1>
				<h2>{attributes?.subtitle}</h2>
				<h2 className="sec1__titre3">{attributes?.desc}</h2>
				<button className="btn__sec1"><b>{attributes?.btn}</b></button>
			</div>
			
		</section>
	);
}
