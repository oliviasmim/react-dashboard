/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FieldError } from "react-hook-form";

interface InputFormGroupProps {
	controlId: string;
	label: string;
	type: string;
	placeholder: string;
	register: any;
	error?: FieldError;
	tooltip?: string;
	isRequired?: boolean;
}

const InputFormGroup: React.FC<InputFormGroupProps> = ({
	controlId,
	label,
	type,
	placeholder,
	register,
	error,
	tooltip,
	isRequired = false,
}) => {
	return (
		<Form.Group controlId={controlId} className={error ? "has-error" : ""}>
			<Form.Label>
				{isRequired && <span className="text-danger">*</span>} {label}
			</Form.Label>
			{tooltip && (
				<OverlayTrigger
					placement="right"
					overlay={<Tooltip>{tooltip}</Tooltip>}
				>
					<span className="info-icon"> ℹ️ </span>
				</OverlayTrigger>
			)}
			<Form.Control
				type={type}
				as={type === "textarea" ? "textarea" : "input"}
				placeholder={placeholder}
				{...register(controlId)}
				isInvalid={!!error}
			/>
			<Form.Control.Feedback type="invalid">
				{error?.message}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

export default InputFormGroup;
