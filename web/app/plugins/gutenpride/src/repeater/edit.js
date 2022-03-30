import { __ } from '@wordpress/i18n';
import { PlainText, MediaUpload, MediaPlaceholder, MediaUploadCheck, InspectorControls,
	useBlockProps, RichText, URLInputButton } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';

const ALLOWED_MEDIA_TYPES = ['image'];

export default function Edit( { attributes: { content = [] }, setAttributes, attributes } ) {
	return (
		<>
			<PlainText className={"block-editor-repeater-title"} placeholder={('title')} value={attributes?.title} onChange={ (title)=>{setAttributes({title})} }/>		
			
			{content.map((value, index) => {
				return (
					<>

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

						<PlainText
							className={"block-editor-repeater-nom"}
							placeholder={__('nom')}
							value={value.nom}
							onChange={(nom) => {
								const newContent = [...content]
								newContent[index].nom = nom
								setAttributes({ content: newContent })
							}}
						/>	

						<PlainText
							className={"block-editor-repeater-com"}
							placeholder={__('com')}
							value={value.com}
							onChange={(com) => {
								const newContent = [...content]
								newContent[index].com = com
								setAttributes({ content: newContent })
							}}
						/>		

						<Button
							onClick={() => {
								const newContent = [
									...content.slice(0, index),
									...content.slice(index + 1)
								]
								setAttributes({ content: newContent })
							}}
						>{__('Supprimer')}
						</Button>
					</>
				)
			})}
			<Button
				onClick={() => {
					const newContent = [...content, {}]
					setAttributes({ content: newContent })
				}}
			>{__('Ajouter')}
			</Button>
		</>
	);
}
