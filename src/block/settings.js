import {
    Button,
    TextControl,
    PanelBody,
    __experimentalSpacer as Spacer,
    CustomSelectControl,
    SelectControl
} from '@wordpress/components';
import { memo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck
} from '@wordpress/block-editor';
import { upload } from '@wordpress/icons';
import MenuURL from '@/components/menu-url';

const Settings = ({ attributes, setAttributes, clientId }) => {
    const RIBBON_OPTIONS = [
        { key: 'tour-card-new-ribbon', name: __('New'), label: 'New', style: {backgroundColor: '#3773FE', color: '#fff', cursor: 'pointer'} },
        { key: 'tour-card-open-ribbon', name: __("Open"), label: 'Open', style: {backgroundColor: '#90C271', color: '#fff', cursor: 'pointer'} },
        { key: 'tour-card-full-ribbon', name: __("Full"), label: 'Full', style: {backgroundColor: '#9AA0AE', color: '#fff', cursor: 'pointer'} },
        { key: 'tour-card-filling-fast-ribbon', name: __("Filling Fast"), label: 'Filling Fast', style: {backgroundColor: '#E36767', color: '#fff', cursor: 'pointer'} },
    ];
    return (
        <InspectorControls>
            <PanelBody title={__('Thumbnail')} initialOpen={false}>
                <Spacer marginBottom={'20px'} marginTop={'10px'}>
                    <MediaUploadCheck>
                        <MediaUpload
                            onSelect={(media) =>
                                setAttributes({ cardThumbnail: media })
                            }
                            allowedTypes={['image/jpg', 'image/jpeg', 'image/png']}
                            value={attributes?.cardThumbnail?.id}
                            multiple={false}
                            title='Upload Thumbnail'
                            render={({ open }) => {
                                return (
                                    <Button
                                        className="toehold-card-thumbnail-button"
                                        onClick={open}
                                        icon={attributes?.cardThumbnail?.url ? <img style={{ width: '20px', height: '20px', objectFit: 'cover', borderRadius: '50%' }} src={attributes?.cardThumbnail?.url} /> : upload}
                                        iconSize={30}
                                        iconPosition='left'
                                        style={{ width: '100%', justifyContent: 'flex-start', border: '1px solid #00000026', alignItems: 'center', gap: '8px' }}
                                    >
                                        {attributes?.cardThumbnail?.filename || __('Upload')}
                                    </Button>
                                );
                            }}
                        />
                    </MediaUploadCheck>
                </Spacer>
                <TextControl
                    onChange={(value) => setAttributes({ cardThumbnailAlt: value })}
                    value={attributes?.cardThumbnailAlt}
                    label={__('ALT text')}
                />
                <CustomSelectControl
                    label={__('Ribbon')}
                    value={RIBBON_OPTIONS.find((option) => option.key === attributes?.cardThumbnailRibbon?.key)}
                    __nextUnconstrainedWidth
                    __experimentalShowSelectedHint={true}
                    options={RIBBON_OPTIONS}
                    onChange={({ selectedItem }) => setAttributes({ cardThumbnailRibbon: selectedItem })}
                />
            </PanelBody>
            <PanelBody title='Tour Name & Location' initialOpen={false}>
                <TextControl
                    onChange={(value) => setAttributes({ cardTourName: value })}
                    value={attributes?.cardTourName}
                    label={__('Tour Name')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ cardTourLocation: value })}
                    value={attributes?.cardTourLocation}
                    label={__('Tour Location')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ cardTourRegion: value })}
                    value={attributes?.cardTourRegion}
                    label={__('Tour Region')}
                />
            </PanelBody>
            <PanelBody title='Tour Details' initialOpen={false}>
                <SelectControl
                    label={__('Tour Type')}
                    value={attributes?.cardTourType}
                    onChange={(value) => setAttributes({ cardTourType: value })}
                    options={[
                        {
                            label: "Wildlife Photography Tour",
                            value: "Wildlife Photography Tour"
                        },
                        {
                            label: "Photography Tour",
                            value: "Photography Tour"
                        },
                        {
                            label: "Landscape Photography Tour",
                            value: "Landscape Photography Tour"
                        },
                        {
                            label: "Heritage & Culture Photography Tour",
                            value: "Heritage & Culture Photography Tour"
                        },
                        {
                            label: "Bird Photography Tour",
                            value: "Bird Photography Tour"
                        },
                    ]}
                />
                <TextControl
                    onChange={(value) => setAttributes({ cardTourDates: value })}
                    value={attributes?.cardTourDates}
                    label={__('Dates')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ cardTourDuration: value })}
                    value={attributes?.cardTourDuration}
                    label={__('Duration')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ cardTourLinkText: value })}
                    value={attributes?.cardTourLinkText}
                    label={__('Link Text')}
                />
                <MenuURL
                    label="Link URL"
                    value={attributes?.cardTourLinkURL}
                    onChange={(value) => setAttributes({ cardTourLinkURL: value })}
                />
            </PanelBody>
            <PanelBody title='Tour Cost' initialOpen={false}>
                <TextControl
                    onChange={(value) => setAttributes({ cardTourOriginalPrice: value })}
                    value={attributes?.cardTourOriginalPrice}
                    label={__('Original Price')}
                />
                <TextControl
                    onChange={(value) => setAttributes({ cardTourOfferPrice: value })}
                    value={attributes?.cardTourOfferPrice}
                    label={__('Offer Price')}
                />
            </PanelBody>
        </InspectorControls>
    )
}

export default memo(Settings);