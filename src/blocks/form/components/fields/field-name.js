/**
 * External dependencies
 */
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import { InspectorControls, RichText } from '@wordpress/editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import CoblocksFieldLabel from './field-label';

function CoblocksFieldName( {
	isSelected,
	type,
	required,
	label,
	setAttributes,
	placeholder,
	hasLastName,
	labelFirstName,
	labelLastName,
	id,
} ) {
	return (
		<Fragment>
			<div className={
				classnames(
					'coblocks-field',
					`coblocks-field--${ type }`,
					{ 'is-selected': isSelected }
				) }
			>
				<CoblocksFieldLabel
					required={ required }
					label={ label }
					setAttributes={ setAttributes }
					isSelected={ isSelected }
				/>
				{ hasLastName ?
					<div className="coblocks-field--name__inner">
						<div>
							<TextControl/>
							<span className="first-name">
								<RichText
									tagName="small"
									value={ labelFirstName }
									onChange={ value => {
										resetFocus && resetFocus();
										setAttributes( { labelFirstName: value } );
									} }
									placeholder={ __( 'Add label…' ) }
								/>
							</span>
						</div>
						<div>
							<TextControl/>
							<span className="first-name">
								<RichText
									tagName="small"
									value={ labelLastName }
									onChange={ value => {
										resetFocus && resetFocus();
										setAttributes( { labelLastName: value } );
									} }
									placeholder={ __( 'Add label…' ) }
								/>
							</span>
						</div>
					</div>
				:
					<TextControl/>
				}
			</div>
			<InspectorControls>
				<PanelBody title={ __( 'Name Field Settings' ) }>
					<ToggleControl
						label={ __( 'Last Name' ) }
						className="coblocks-field-label__required"
						checked={ hasLastName }
						onChange={ value => setAttributes( { hasLastName: value } ) }
						help={ !! hasLastName ? __( 'Showing both first and last name fields.' ) : __( 'Toggle to add a last name field.' ) }
					/>
					<TextControl
						label={ __( 'ID' ) }
						value={ id }
						onChange={ value => setAttributes( { id: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}

export default CoblocksFieldName;
