import { __ } from '@wordpress/i18n';
import { PlainText, useBlockProps, MediaUpload, MediaPlaceholder, MediaUploadCheck, InspectorControls, RichText, URLInputButton } from '@wordpress/block-editor';
import { BaseControl, Button } from '@wordpress/components';
import './editor.scss';

const ALLOWED_MEDIA_TYPES = ['image'];

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
		
			<PlainText className={"block-editor-plain-text-title"} placeholder={('title')} value={attributes?.title} onChange={ (title)=>{setAttributes({title})} }/>
			<PlainText className={"block-editor-plain-text-subtitle"} placeholder={('subtitle')} value={attributes?.subtitle} onChange={ (subtitle)=>{setAttributes({subtitle})} }/>
			<PlainText className={"block-editor-plain-text-desc"} placeholder={('desc')} value={attributes?.desc} onChange={ (desc)=>{setAttributes({desc})} }/>
			<PlainText className={"block-editor-plain-text-btn"} placeholder={('btn')} value={attributes?.btn} onChange={ (btn)=>{setAttributes({btn})} }/>
			<br></br>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ attributes?.imageId }
					render={ ( { open } ) => (
					<Button onClick={ open }>{__('Replace the image')}</Button>
					) }
				/>
			</MediaUploadCheck>
		
		</div>
	);
}
