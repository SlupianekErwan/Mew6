import { __ } from '@wordpress/i18n';
import { PlainText, MediaUpload, MediaPlaceholder, MediaUploadCheck, InspectorControls,
	useBlockProps, RichText, URLInputButton } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';

const ALLOWED_MEDIA_TYPES = ['image'];

export default function Edit( { attributes: { content = [] }, setAttributes, attributes } ) {
	return (
		<>
			<PlainText className={"block-editor-repeater-avis-title"} placeholder={('title')} value={attributes?.title} onChange={ (title)=>{setAttributes({title})} }/>		
			
			{content.map((value, index) => {
				return (
					<>
						<br></br>

						<PlainText className={"block-editor-repeater-avis-quest"} placeholder={__('quest')} value={value.quest} onChange={(quest) => {
								const newContent = [...content]
								newContent[index].quest = quest
								setAttributes({ content: newContent }) }}/>		

						<Button onClick={() => {
								const newContent = [
									...content.slice(0, index),
									...content.slice(index + 1)
								]
								setAttributes({ content: newContent }) }}>
							{__('Supprimer')} 
						</Button>
					</>
				)
			})}
			<Button onClick={() => {
					const newContent = [...content, {}]
					setAttributes({ content: newContent }) }}>
				{__('Ajouter')}
			</Button>
		</>
	);
}
