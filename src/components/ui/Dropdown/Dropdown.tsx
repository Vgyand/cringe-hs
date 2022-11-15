import { DropdownTypes } from '../../../shared/types/cardTypes'

const Dropdown = ({
	options,
	selectedOption,
	setSelectedOption,
}: DropdownTypes) => {
	return (
		<select
			value={selectedOption}
			onChange={(e) => setSelectedOption(e.target.value)}
		>
			{options.map((o) => (
				<option key={o.value} value={o.value}>
					{o.label}
				</option>
			))}
		</select>
	)
}

export default Dropdown
