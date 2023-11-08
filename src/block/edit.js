import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
import Settings from './settings';
import classNames from 'classnames';

export default function Edit({ attributes, setAttributes, clientId }) {
	const blockProps = useBlockProps({
		className: classNames('toehold-card', attributes?.cardThumbnailRibbon?.key)
	});
	return (
		<>
			<Settings attributes={attributes} setAttributes={setAttributes} clientId={clientId} />
			<div {...blockProps}>
				<div className="toehold-card-wrapper">
					<div className='toehold-card-image-wrapper'>
						<img
							className="toehold-card-image"
							src={attributes?.cardThumbnail?.url}
							alt={attributes?.cardThumbnailAlt || attributes?.cardThumbnail?.alt}
						/>
						<div className="toehold-card-image-ribbon">
							<span>{attributes?.cardThumbnailRibbon?.name}</span>
						</div>
						<h3 className="toehold-card-tour-name">{attributes?.cardTourName}</h3>
					</div>
					<div className='toehold-card-content'>
						<div className="toehold-card-tour-location">
							<RichText
								tagName='h3'
								className='toehold-card-tour-location-name'
								value={attributes?.cardTourLocation}
								onChange={(value) => setAttributes({ cardTourLocation: value })}
							/>
							<RichText
								tagName='p'
								className='toehold-card-tour-location-region'
								value={attributes?.cardTourRegion}
								onChange={(value) => setAttributes({ cardTourRegion: value })}
							/>
						</div>
						<div className="toehold-card-tour-details">
							<RichText
								tagName='p'
								className='toehold-card-tour-type'
								value={attributes?.cardTourType}
								onChange={(value) => setAttributes({ cardTourType: value })}
							/>
							<RichText
								tagName='p'
								className='toehold-card-tour-date'
								value={attributes?.cardTourDates}
								onChange={(value) => setAttributes({ cardTourDates: value })}
							/>
							<RichText
								tagName='p'
								className='toehold-card-tour-duration'
								value={attributes?.cardTourDuration}
								onChange={(value) => setAttributes({ cardTourDuration: value })}
							/>
							{
								attributes?.cardTourOriginalPrice && (
									<div className="toehold-card-tour-price">
										<span className="toehold-card-tour-price-label">Starts from</span>
										{
											attributes?.cardTourOfferPrice && (
												<RichText
													tagName='span'
													className='toehold-card-tour-price-offer'
													value={attributes?.cardTourOfferPrice}
													onChange={(value) => setAttributes({ cardTourOfferPrice: value })}
												/>
											)
										}
										<RichText
											tagName='span'
											className={`toehold-card-tour-price-original ${attributes?.cardTourOfferPrice ? 'has-offer-price' : ''}`}
											value={attributes?.cardTourOriginalPrice}
											onChange={(value) => setAttributes({ cardTourOriginalPrice: value })}
										/>
									</div>
								)
							}
							<RichText
								tagName='a'
								className='toehold-card-tour-btn'
								value={attributes?.cardTourLinkText}
								onChange={(value) => setAttributes({ cardTourLinkText: value })}
							/>
						</div>

					</div>
				</div>
			</div>
		</>
	)
}
