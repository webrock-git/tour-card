import { useBlockProps, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';
import LinkAttributes from '@/components/link-attributes';
export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: classNames('toehold-card', attributes?.cardThumbnailRibbon?.key)
	})
	return (
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
						<RichText.Content
							tagName='h3'
							className='toehold-card-tour-location-name'
							value={attributes?.cardTourLocation}
						/>
						<RichText.Content
							tagName='p'
							className='toehold-card-tour-location-region'
							value={attributes?.cardTourRegion}
						/>
					</div>
					<div className="toehold-card-tour-details">
						<RichText.Content
							tagName='p'
							className='toehold-card-tour-type'
							value={attributes?.cardTourType}
						/>
						<RichText.Content
							tagName='p'
							className='toehold-card-tour-date'
							value={attributes?.cardTourDates}
						/>
						<RichText.Content
							tagName='p'
							className='toehold-card-tour-duration'
							value={attributes?.cardTourDuration}
						/>
						{
							attributes?.cardTourOriginalPrice && (
								<div className="toehold-card-tour-price">
									<span className="toehold-card-tour-price-label">Starts from</span>
									{
										attributes?.cardTourOfferPrice && (
											<RichText.Content
												tagName='span'
												className='toehold-card-tour-price-offer'
												value={attributes?.cardTourOfferPrice}
											/>
										)
									}
									<RichText.Content
										tagName='span'
										className={`toehold-card-tour-price-original ${attributes?.cardTourOfferPrice ? 'has-offer-price' : ''}`}
										value={attributes?.cardTourOriginalPrice}
									/>
								</div>
							)
						}
						<RichText.Content
							tagName='a'
							className='toehold-card-tour-btn'
							value={attributes?.cardTourLinkText}
							{
								...LinkAttributes(attributes?.cardTourLinkURL)
							}
						/>
					</div>

				</div>
			</div>
		</div>
	)
}
