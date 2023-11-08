import { prependHTTP } from '@wordpress/url';
const LinkAttributes = (link) => {
    let origialUrl = link?.url;
    if (origialUrl && (!origialUrl.startsWith('http:') || !origialUrl.startsWith('https:') || origialUrl.startsWith('#'))) {
        origialUrl = prependHTTP(origialUrl);
    }
    let linkAttributes = {
        href: origialUrl,
    }

    if (link?.newTab) {
        linkAttributes.target = '_blank';
        linkAttributes.rel = 'noopener'; // to handle wp default behavior
    }

    if (link?.noFollow) {
        linkAttributes.rel = 'nofollow';
        if (linkAttributes.target == '_blank') {
            linkAttributes.rel = 'nofollow noopener'; // to handle wp default behavior
        }
    }

    return linkAttributes?.href ? linkAttributes : null;
}

export default LinkAttributes;