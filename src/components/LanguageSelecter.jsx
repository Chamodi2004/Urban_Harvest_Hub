import { useTranslation } from 'react-i18next';

function LanguageSelecter({ className = '' }) {
	const { i18n } = useTranslation();

	const changeLang = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<select
			value={i18n.language || 'en'}
			onChange={changeLang}
			className={`bg-white text-black rounded px-2 py-1 text-sm ${className}`}
			aria-label="Select language"
		>
			<option value="en">EN</option>
			<option value="si">SI</option>
		</select>
	);
}

export default LanguageSelecter;
