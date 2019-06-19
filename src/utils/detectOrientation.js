import { BREAKPOINTS as bp } from '../__styles/breakPoints';
// Uses Screen API to detect orientation and return a Boolean of "false" if the device orientation is landscape.

let landscapeURI = '/landscape',
	verticalURI = '/';
export default function detectOrientation(props) {
	let orntn = window.screen.msOrientation || window.screen.mozOrientation || (window.screen.orientation || {}).type;
	console.log(orntn);

	if (orntn === 'landscape-primary' && window.innerWidth < bp.mdDevice) {
		handleLandscapeOrientation(landscapeURI, props);
	} else {
		handleLandscapeOrientation(verticalURI, props);
	}
}

export const orientationListener = (props) => {
	console.log('orient listener');

	window.addEventListener('orientationchange', () => {
		detectOrientation(props);
	});
};

const handleLandscapeOrientation = (URI, props) => {
	props.history.push(URI);
};

export const deleteListener = () => {
	window.removeEventListener(
		'orientationchange',
		() => {
			console.log('Stopping listener.');
		},
		true
	);
};
