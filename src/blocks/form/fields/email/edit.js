/**
 * Internal dependencies
 */
import CoBlocksField from '../field';

function CoBlocksFieldTextarea( props ) {
	const { attributes, setAttributes, isSelected } = props;
	const { required, label, labelsAsPlaceholders } = attributes;

	return (
		<CoBlocksField
			type="email"
			label={ label }
			required={ required }
			setAttributes={ setAttributes }
			isSelected={ isSelected }
			labelsAsPlaceholders={ labelsAsPlaceholders }
		/>
	);
}

export default CoBlocksFieldTextarea;
